import React from "react";
import Button from "../components/button";
import { WriteActionsWrapper, WriteContainer, WriteWrapper } from "./styled";
import { useHistory } from "react-router-dom";
import { createPost } from "../api/post";

export default function Write() {
  const history = useHistory();
  const [title, setTitle] = React.useState<string>("");
  const [body, setBody] = React.useState<string>("");

  function onClickBack(): void {
    history.push("/");
  }
  function onClickPress(): void {
    if (!title || !body) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    (async function () {
      const res = await createPost({ title, body });
      history.push(`/post/${res.id}`);
    })();
  }
  function onChangeTitle(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setTitle(e.target.value);
  }
  function onChangeBodyText(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setBody(e.target.value);
  }
  return (
    <WriteContainer>
      <div className="wrapper">
        <div className="left">
          <div className="code-mirror">
            <WriteWrapper>
              <div>
                <div className="textarea-wrap-title">
                  <textarea
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={onChangeTitle}
                  ></textarea>
                </div>
              </div>
              <div className="textarea-wrap">
                <textarea
                  placeholder="당신의 이야기를 적어보세요..."
                  value={body}
                  onChange={onChangeBodyText}
                ></textarea>
              </div>
            </WriteWrapper>
            <WriteActionsWrapper>
              <div className="wrap">
                <Button type="transparent" onClick={onClickBack}>
                  🔙 나가기
                </Button>
                <div>
                  <Button type="primary" onClick={onClickPress}>
                    출간하기
                  </Button>
                </div>
              </div>
            </WriteActionsWrapper>
          </div>
        </div>
      </div>
    </WriteContainer>
  );
}
