import React from "react";
import { Post } from "../../types";
import PostItem from "./item";
import { Container } from "./styled";

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <Container>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
        />
      ))}
    </Container>
  );
}
