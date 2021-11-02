import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;
`;

export const PostItemBox = styled.div`
  width: 20rem;
  background: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 1056px) {
    width: calc(50% - 2rem);
  }
`;

export const Thumbnail = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  div {
    padding-top: 52.1921%;
    width: 100%;
    position: relative;
    img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
`;

export const PostInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  a {
    display: block;
    color: inherit;
    text-decoration: none;
    h4 {
      font-size: 1rem;
      margin: 0px 0px 0.25rem;
      line-height: 1.5;
      word-break: break-word;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: rgb(33, 37, 41);
    }
    div {
      flex: 1 1 0%;
      p {
        margin: 0px 0px 1.5rem;
        word-break: break-word;
        overflow-wrap: break-word;
        font-size: 0.875rem;
        line-height: 1.5;
        height: 3.9375rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(73, 80, 87);
      }
    }
  }
`;
