-- Courchevel Media admin schema
-- Run this in the Supabase SQL editor.

-- Pricing plans
create table if not exists public.pricing_plans (
  id uuid primary key default gen_random_uuid(),
  tab text not null check (tab in ('ski', 'events')),
  title text not null,
  price text not null,
  description text not null default '',
  features jsonb not null default '[]'::jsonb,
  cta_label text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Portfolio sliding gallery images
create table if not exists public.gallery_images (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('ski', 'events')),
  image_url text not null,
  alt text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Blog posts
create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null default 'Guides',
  lead text not null default '',
  content text not null default '',
  cover_image text,
  minutes int not null default 5,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists pricing_plans_tab_sort_idx on public.pricing_plans (tab, sort_order);
create index if not exists gallery_images_category_sort_idx on public.gallery_images (category, sort_order);
create index if not exists blogs_published_idx on public.blogs (published, created_at desc);

-- Updated_at helper
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists pricing_plans_set_updated_at on public.pricing_plans;
create trigger pricing_plans_set_updated_at
before update on public.pricing_plans
for each row execute function public.set_updated_at();

drop trigger if exists blogs_set_updated_at on public.blogs;
create trigger blogs_set_updated_at
before update on public.blogs
for each row execute function public.set_updated_at();

-- RLS
alter table public.pricing_plans enable row level security;
alter table public.gallery_images enable row level security;
alter table public.blogs enable row level security;

-- Public read
drop policy if exists "Public can read pricing" on public.pricing_plans;
create policy "Public can read pricing"
on public.pricing_plans for select
to anon, authenticated
using (true);

drop policy if exists "Public can read gallery" on public.gallery_images;
create policy "Public can read gallery"
on public.gallery_images for select
to anon, authenticated
using (true);

drop policy if exists "Public can read published blogs" on public.blogs;
create policy "Public can read published blogs"
on public.blogs for select
to anon, authenticated
using (published = true or auth.role() = 'authenticated');

-- Authenticated admin write
drop policy if exists "Auth can manage pricing" on public.pricing_plans;
create policy "Auth can manage pricing"
on public.pricing_plans for all
to authenticated
using (true)
with check (true);

drop policy if exists "Auth can manage gallery" on public.gallery_images;
create policy "Auth can manage gallery"
on public.gallery_images for all
to authenticated
using (true)
with check (true);

drop policy if exists "Auth can manage blogs" on public.blogs;
create policy "Auth can manage blogs"
on public.blogs for all
to authenticated
using (true)
with check (true);

-- Storage buckets (run once; ignore errors if they already exist)
insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('blogs', 'blogs', true)
on conflict (id) do nothing;

drop policy if exists "Public read gallery files" on storage.objects;
create policy "Public read gallery files"
on storage.objects for select
to anon, authenticated
using (bucket_id in ('gallery', 'blogs'));

drop policy if exists "Auth upload gallery files" on storage.objects;
create policy "Auth upload gallery files"
on storage.objects for insert
to authenticated
with check (bucket_id in ('gallery', 'blogs'));

drop policy if exists "Auth update gallery files" on storage.objects;
create policy "Auth update gallery files"
on storage.objects for update
to authenticated
using (bucket_id in ('gallery', 'blogs'));

drop policy if exists "Auth delete gallery files" on storage.objects;
create policy "Auth delete gallery files"
on storage.objects for delete
to authenticated
using (bucket_id in ('gallery', 'blogs'));

-- Seed default pricing (skip if already present)
insert into public.pricing_plans (tab, title, price, description, features, cta_label, sort_order)
select * from (values
  (
    'ski',
    'Half Experience',
    '€1,000',
    'Four hours of photography and filmmaking, designed to capture the highlights of your day on the mountain.',
    '["Up to four hours of coverage","Professionally curated photo gallery","Individual cinematic ski clips","Highlight film (up to one minute)","Drone footage, when conditions allow"]'::jsonb,
    null,
    1
  ),
  (
    'ski',
    'Full Experience',
    '€1,500',
    'A complete day of photography and filmmaking, from your first runs on the slopes to après-ski.',
    '["From first lift to après-ski","Professionally curated photo gallery","Individual cinematic ski clips","Highlight film (up to two minutes)","Drone footage, when conditions allow","Après-ski coverage"]'::jsonb,
    null,
    2
  ),
  (
    'ski',
    'Signature Experience',
    '€15,000',
    'A private production team dedicated exclusively to documenting every unforgettable moment of your holiday, from arrival to departure.',
    '["Dedicated photographer & filmmaker throughout your stay","From private jet arrival to your final evening","Skiing, family moments and lifestyle","Après-ski, dinners and private events","Creative planning before your arrival","A bespoke cinematic film of your holiday"]'::jsonb,
    'By enquiry only',
    3
  ),
  (
    'events',
    'Private Event',
    '€950',
    'Discreet photography and filmmaking for private celebrations, dinners and special occasions, tailored to your schedule.',
    '["Photography & filmmaking coverage","Professionally curated photo gallery","Highlight film","Tailored to your event","Delivery within days"]'::jsonb,
    null,
    1
  ),
  (
    'events',
    'DJ Event',
    '€1,500',
    'High-energy photography and filmmaking, capturing the atmosphere, crowd and unforgettable moments of your event.',
    '["Dynamic event photography","Professionally curated photo gallery","Individual cinematic event clips","Highlight film","Crowd and atmosphere coverage"]'::jsonb,
    null,
    2
  )
) as seed(tab, title, price, description, features, cta_label, sort_order)
where not exists (select 1 from public.pricing_plans limit 1);
