import React from "react";
import { PostInfo, PostItemBox, Thumbnail } from "./styled";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  body: string;
  id: string;
}

export default function PostItem({ title, body, id }: Props) {
  return (
    <PostItemBox>
      <Thumbnail>
        <div>
          <img
            alt="test"
            src="https://media.vlpt.us/images/devstone/post/0d89cd8f-b120-47ef-825f-0e69b75a1231/쓸데없는걱정.png?w=640"
          ></img>
        </div>
      </Thumbnail>
      <PostInfo>
        <Link to={`/post/${id}`}>
          <h4>{title}</h4>
          <div>
            <p>{body}</p>
          </div>
        </Link>
      </PostInfo>
    </PostItemBox>
  );
}
