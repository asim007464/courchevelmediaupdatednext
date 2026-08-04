"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

const emptyPlan = {
  tab: "ski",
  title: "",
  price: "",
  description: "",
  featuresText: "",
  cta_label: "",
  sort_order: 0,
};

export default function PricingAdmin() {
  const [plans, setPlans] = useState([]);
  const [form, setForm] = useState(emptyPlan);
  const [editingId, setEditingId] = useState(null);
  const [filterTab, setFilterTab] = useState("all");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const loadPlans = async () => {
    const supabase = createClient();
    if (!supabase) {
      setError("Supabase is not configured.");
      setLoading(false);
      return;
    }

    const { data, error: loadError } = await supabase
      .from("pricing_plans")
      .select("*")
      .order("tab")
      .order("sort_order");

    if (loadError) {
      setError(
        loadError.message.includes("schema cache") ||
          loadError.message.includes("does not exist")
          ? "Pricing table missing. Run supabase/schema.sql in the Supabase SQL Editor."
          : loadError.message
      );
    } else {
      setPlans(data || []);
      setError("");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPlans();
  }, []);

  const visiblePlans = useMemo(() => {
    if (filterTab === "all") return plans;
    return plans.filter((plan) => plan.tab === filterTab);
  }, [plans, filterTab]);

  const startEdit = (plan) => {
    setEditingId(plan.id);
    setForm({
      tab: plan.tab,
      title: plan.title,
      price: plan.price,
      description: plan.description || "",
      featuresText: Array.isArray(plan.features)
        ? plan.features.join("\n")
        : "",
      cta_label: plan.cta_label || "",
      sort_order: plan.sort_order ?? 0,
    });
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyPlan);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!isSupabaseConfigured()) {
      setError("Supabase is not configured.");
      return;
    }

    const supabase = createClient();
    const payload = {
      tab: form.tab,
      title: form.title.trim(),
      price: form.price.trim(),
      description: form.description.trim(),
      features: form.featuresText
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      cta_label: form.cta_label.trim() || null,
      sort_order: Number(form.sort_order) || 0,
    };

    const query = editingId
      ? supabase.from("pricing_plans").update(payload).eq("id", editingId)
      : supabase.from("pricing_plans").insert(payload);

    const { error: saveError } = await query;
    if (saveError) {
      setError(saveError.message);
      return;
    }

    setMessage(editingId ? "Pricing card updated." : "Pricing card added.");
    resetForm();
    loadPlans();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this pricing card?")) return;
    const supabase = createClient();
    const { error: deleteError } = await supabase
      .from("pricing_plans")
      .delete()
      .eq("id", id);
    if (deleteError) {
      setError(deleteError.message);
      return;
    }
    setMessage("Pricing card deleted.");
    if (editingId === id) resetForm();
    loadPlans();
  };

  return (
    <div className="admin-page">
      <header className="admin-page__header">
        <h1>Pricing plans</h1>
        <p>
          View every pricing card, then edit price, description, features, or add
          a new package.
        </p>
      </header>

      {error ? <p className="admin-banner admin-banner--error">{error}</p> : null}
      {message ? <p className="admin-banner">{message}</p> : null}

      <form className="admin-form" onSubmit={handleSave}>
        <h2 className="admin-form__title">
          {editingId ? "Edit pricing card" : "Add pricing card"}
        </h2>
        <div className="admin-form__row">
          <label>
            <span>Tab</span>
            <select
              value={form.tab}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, tab: event.target.value }))
              }
            >
              <option value="ski">Ski</option>
              <option value="events">Events</option>
            </select>
          </label>
          <label>
            <span>Sort order</span>
            <input
              type="number"
              value={form.sort_order}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  sort_order: event.target.value,
                }))
              }
            />
          </label>
        </div>
        <label>
          <span>Title</span>
          <input
            value={form.title}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, title: event.target.value }))
            }
            placeholder="Half Experience"
            required
          />
        </label>
        <label>
          <span>Price</span>
          <input
            value={form.price}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, price: event.target.value }))
            }
            placeholder="€1,000"
            required
          />
        </label>
        <label>
          <span>Description</span>
          <textarea
            rows={3}
            value={form.description}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, description: event.target.value }))
            }
            placeholder="Shown under the price on the website card"
          />
        </label>
        <label>
          <span>Features (one per line)</span>
          <textarea
            rows={6}
            value={form.featuresText}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, featuresText: event.target.value }))
            }
            placeholder={"Up to four hours of coverage\nProfessionally curated photo gallery"}
          />
        </label>
        <label>
          <span>CTA label (optional)</span>
          <input
            value={form.cta_label}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, cta_label: event.target.value }))
            }
            placeholder="By enquiry only"
          />
        </label>
        <div className="admin-form__actions">
          <button type="submit">
            {editingId ? "Save changes" : "Add pricing card"}
          </button>
          {editingId ? (
            <button type="button" className="is-ghost" onClick={resetForm}>
              Cancel
            </button>
          ) : null}
        </div>
      </form>

      <div className="admin-filter">
        <button
          type="button"
          className={filterTab === "all" ? "is-active" : ""}
          onClick={() => setFilterTab("all")}
        >
          All
        </button>
        <button
          type="button"
          className={filterTab === "ski" ? "is-active" : ""}
          onClick={() => setFilterTab("ski")}
        >
          Ski
        </button>
        <button
          type="button"
          className={filterTab === "events" ? "is-active" : ""}
          onClick={() => setFilterTab("events")}
        >
          Events
        </button>
      </div>

      {loading ? (
        <p>Loading pricing cards...</p>
      ) : visiblePlans.length === 0 ? (
        <p className="admin-banner">
          No pricing cards yet. Add one above, or run `supabase/schema.sql` to
          seed the defaults.
        </p>
      ) : (
        <div className="admin-pricing-grid">
          {visiblePlans.map((plan) => (
            <article key={plan.id} className="admin-pricing-card">
              <div className="admin-pricing-card__top">
                <span className="admin-pricing-card__tab">{plan.tab}</span>
                <span className="admin-pricing-card__order">
                  Order {plan.sort_order}
                </span>
              </div>
              <h3>{plan.title}</h3>
              <p className="admin-pricing-card__price">{plan.price}</p>
              <p className="admin-pricing-card__desc">{plan.description}</p>
              <ul>
                {(Array.isArray(plan.features) ? plan.features : []).map(
                  (feature) => (
                    <li key={feature}>{feature}</li>
                  )
                )}
              </ul>
              {plan.cta_label ? (
                <p className="admin-pricing-card__cta">{plan.cta_label}</p>
              ) : null}
              <div className="admin-pricing-card__actions">
                <button type="button" onClick={() => startEdit(plan)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(plan.id)}>
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
