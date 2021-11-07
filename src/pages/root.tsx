import React, { useEffect } from "react";
import Header from "../components/header";
import PostList from "../components/postList";
import { getAllPosts } from "../api/post";
import { Post } from "../types";
import { RootContainer, PostsWrapper } from "./styled";

export default function RootPages() {
  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    (async function () {
      const res = await getAllPosts();
      setPosts(res.results);
    })();
  }, []);

  return (
    <div>
      <Header />
      <RootContainer>
        <PostsWrapper>
          <main>
            <PostList posts={posts}></PostList>
          </main>
        </PostsWrapper>
      </RootContainer>
    </div>
  );
}
