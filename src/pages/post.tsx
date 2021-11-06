import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { getPost } from "../api/post";
import { Post } from "../types";

const Container = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 150px;
  .title {
    font-size: 48px;
    margin-bottom: 32px;
  }
`;

const ButtonList = styled.section`
  display: flex;
  justify-content: flex-end;
  span {
    margin-left: 20px;
    margin-bottom: 40px;
  }
`;

const TagList = styled.section`
  span {
    color: green;
    background-color: rgb(241, 243, 245);
    margin-right: 20px;
    border-radius: 1rem;
  }
  margin-bottom: 30px;
`;

export default function PostComponent() {
  const { id }: any = useParams();
  const [post, setPost] = useState({} as Post);
  useEffect(() => {
    (async function () {
      const data = await getPost(id);
      setPost(data);
    })();
  }, [id]);

  return (
    <Container>
      <div className="title">{post.title}</div>
      <ButtonList>
        <span>글 수정</span>
        <span>글 삭제</span>
      </ButtonList>
      <TagList>
        {post.tags?.map((tag) => (
          <span key={tag}>tag</span>
        ))}
      </TagList>
      <article className="body">{post.body}</article>
    </Container>
  );
}