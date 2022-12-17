import React, { useEffect, useState } from "react";
import BlogCard from "../../../components/BlogCard";

import blog_img from "../../../assets/blog-img-1.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Blog() {
  const [featuredBlogs, setFeaturedBlogs] = useState();

  useEffect(() => {
    const faqs = async () => {
      try {
        const {
          data: { featuredBlogPosts },
        } = await axios.get("https://vitalswap.com/test/api_v2/utils/webHome");
        setFeaturedBlogs(featuredBlogPosts);
      } catch (err) {
        console.log(err);
      }
    };

    faqs();
  }, []);

  return (
    <section className="blog__section" id="blog">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="blog__caption"
        >
          <h2 className="heading--secondary">Read more about our product</h2>
          <a
            target="_blank"
            href="https://vitalswap.com/blog"
            className="btn btn--white-outline"
          >
            <span>View Blog</span>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.21967 2.96967C8.51256 2.67678 8.98744 2.67678 9.28033 2.96967L13.5303 7.21967C13.8232 7.51256 13.8232 7.98744 13.5303 8.28033L9.28033 12.5303C8.98744 12.8232 8.51256 12.8232 8.21967 12.5303C7.92678 12.2374 7.92678 11.7626 8.21967 11.4697L11.1893 8.5H3.75C3.33579 8.5 3 8.16421 3 7.75C3 7.33579 3.33579 7 3.75 7H11.1893L8.21967 4.03033C7.92678 3.73744 7.92678 3.26256 8.21967 2.96967Z"
                fill="#343947"
              />
            </svg>
          </a>
        </div>

        <div className="blog__grid">
          {featuredBlogs?.map((featuredBlog, i) => (
            <BlogCard
              id={i}
              route={featuredBlog.postUrl}
              title={featuredBlog.title}
              summary={featuredBlog.content}
              imageUrl={featuredBlog.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
