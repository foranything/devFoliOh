import React from "react";
import { Container, HeaderActions, LogoWrapper, Wrapper } from "./styled";
import { Link } from "react-router-dom";
import Button from "../button";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  function onClickWrite(): void {
    history.push("/write");
  }

  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Link to="/">velog</Link>
        </LogoWrapper>
        <HeaderActions>
          <Button type="round" onClick={onClickWrite}>
            새 글 작성
          </Button>
        </HeaderActions>
      </Wrapper>
    </Container>
  );
}
