"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Watsappbtn from "@/components/Watsappbtn";
import { fetchBlogBySlug } from "@/lib/supabase/content";
import { renderBlogContentToHtml } from "@/lib/blogContent";

export default function BlogPost({ slug }) {
  const [post, setPost] = useState(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    let active = true;
    fetchBlogBySlug(slug).then((data) => {
      if (!active) return;
      if (!data) {
        setMissing(true);
        return;
      }
      setPost(data);
    });
    return () => {
      active = false;
    };
  }, [slug]);

  if (missing) {
    return (
      <div className="page-wrapper blog-page">
        <main className="main-wrapper">
          <Navbar />
          <div className="blog-article">
            <div className="blog-article__inner">
              <h1 className="blog-article__title">Blog not found</h1>
              <p className="blog-article__lead">
                This guide is unavailable or still in draft.
              </p>
              <Link href="/blogs">Back to blogs</Link>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="page-wrapper blog-page">
        <main className="main-wrapper">
          <Navbar />
          <div className="blog-article">
            <div className="blog-article__inner">
              <p>Loading...</p>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }

  return (
    <div className="page-wrapper blog-page">
      <main className="main-wrapper">
        <Navbar />
        <article className="blog-article">
          <div className="blog-article__inner">
            <nav className="blog-article__crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blogs">Blogs</Link>
              <span aria-hidden="true">/</span>
              <span>{post.category}</span>
            </nav>

            <header className="blog-article__header">
              <span className="blog-article__badge">{post.category}</span>
              <h1 className="blog-article__title">{post.title}</h1>
              {post.lead ? (
                <p className="blog-article__lead">{post.lead}</p>
              ) : null}
              <div className="blog-article__meta">
                <span>{post.minutes} MIN READ</span>
                <span className="blog-article__meta-divider" />
                <span>Courchevel, France</span>
              </div>
            </header>

            {post.cover_image ? (
              <div className="blog-article__hero">
                <img src={post.cover_image} alt="" />
              </div>
            ) : null}

            <div
              className="blog-article__prose"
              dangerouslySetInnerHTML={{
                __html: renderBlogContentToHtml(post.content),
              }}
            />

            <div className="blog-article__cta">
              <div>
                <h2>Ready to plan your Courchevel coverage?</h2>
                <p>
                  Tell us your dates and we will shape a quiet, cinematic day
                  around the conditions.
                </p>
              </div>
              <Watsappbtn />
            </div>
          </div>
        </article>
        <Footer />
      </main>
    </div>
  );
}
