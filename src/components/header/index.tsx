import React from "react";
import { Container, LogoWrapper, Wrapper } from "./styled";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Link to="/">velog</Link>
        </LogoWrapper>
      </Wrapper>
    </Container>
  );
}
