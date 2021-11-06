import React, { useEffect } from "react";
import Header from "../components/header";
import PostList from "../components/postList";
import { getAllPosts } from "../api/post";
import { Post } from "../types";
import { Container, PostsWrapper } from "./styled";

export default function Root() {
  const [posts, setPosts] = React.useState([] as Post[]);
  useEffect(() => {
    (async function () {
      const res = await getAllPosts();
      setPosts(res.results);
    })();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <PostsWrapper>
          <main>
            <PostList posts={posts}></PostList>
          </main>
        </PostsWrapper>
      </Container>
    </div>
  );
}
