"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogArticle from "@/components/BlogArticle";
import { fetchPublishedBlogs } from "@/lib/supabase/content";

export default function BlogIndex() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let active = true;
    fetchPublishedBlogs().then((data) => {
      if (active) setPosts(data || []);
    });
    return () => {
      active = false;
    };
  }, []);

  if (posts === null) {
    return (
      <div className="page-wrapper blog-page">
        <main className="main-wrapper">
          <Navbar />
          <div className="blog-article">
            <div className="blog-article__inner">
              <p>Loading blogs...</p>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }

  if (!posts.length) {
    return <BlogArticle />;
  }

  return (
    <div className="page-wrapper blog-page">
      <main className="main-wrapper">
        <Navbar />
        <section className="blog-article">
          <div className="blog-article__inner">
            <nav className="blog-article__crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Blogs</span>
            </nav>
            <header className="blog-article__header">
              <h1 className="blog-article__title">Guides & notes</h1>
              <p className="blog-article__lead">
                What we have learned photographing Courchevel, written down.
              </p>
            </header>
            <div className="blog-index__grid">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.slug}`}
                  className="blog-index__card"
                >
                  {post.cover_image ? (
                    <img src={post.cover_image} alt="" />
                  ) : (
                    <div className="blog-index__placeholder" />
                  )}
                  <div>
                    <span className="blog-article__badge">{post.category}</span>
                    <h2>{post.title}</h2>
                    <p>{post.lead}</p>
                    <span>
                      {post.minutes} MIN READ
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
