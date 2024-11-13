"use client";
import React, { useState } from "react";
import { ArticleFilter } from "../filters";
import PostItem from "./PostItem";



interface PostsProps {
  posts: any;
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  // Sort posts by date
  const sortedPosts = [...posts].sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  );

  // Filter posts based on selected topic
  const filteredBlogs = selectedTopic
    ? sortedPosts.filter((post) => post.metadata.topic === selectedTopic)
    : sortedPosts;

  return (
    <section>
      <h2 className="font-aspekta text-xl font-[650] mb-3">Latest Articles</h2>

      {/* Filters */}
      {/* <ArticleFilter
        selectedTopic={selectedTopic}
        onFilterChange={setSelectedTopic}
      /> */}
      {/* Articles list */}
      <div>
        {filteredBlogs.length !== 0 ? (
          filteredBlogs.map((post, postIndex) => (
            <PostItem key={postIndex} {...post} />
          ))
        ) : (
          <p className="flex justify-center my-12 mx-5 relative text-cdwmcp-blue before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-cdwmcp-blue before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/6">
           New article coming soon! I'm currently working on fresh content—stay tuned.
          </p>
        )}
      </div>
    </section>
  );
};

export default Posts;
