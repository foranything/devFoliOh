import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1919px) {
    width: 1376px;
  }
  @media (max-width: 1440px) {
    width: 1024px;
  }
  @media (max-width: 1056px) {
    width: calc(100% - 2rem);
  }
`;

export const PostsWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  main {
    flex: 1 1 0%;
  }
`;
