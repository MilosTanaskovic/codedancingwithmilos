"use client";
import React, { useState } from "react";
import { ArticleFilter } from "../filters";
import PostItem from "@/app/post-item";

interface PostsProps {
  posts: any;
}

const Posts: React.FC<PostsProps> = ({posts}) => {
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
      <ArticleFilter
        selectedTopic={selectedTopic}
        onFilterChange={setSelectedTopic}
      />
      {/* Articles list */}
      <div>
        {filteredBlogs.map((post, postIndex) => (
          <PostItem key={postIndex} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
