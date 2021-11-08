import styled from "styled-components";

export const RootContainer = styled.div`
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

export const WriteContainer = styled.div`
  width: 100%;
  height: 100%;
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      background-color: white;
      min-width: 0px;
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 1;
      box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
    }
  }
`;

export const WriteWrapper = styled.div`
  min-height: 0px;
  padding-bottom: 4rem;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  .textarea-wrap-title {
    padding-top: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
    textarea {
      font-size: 2.75rem;
      font-weight: bold;
    }
  }
  .textarea-wrap {
    padding-left: 3rem;
  }
  textarea {
    display: block;
    padding: 0px;
    width: 100%;
    resize: none;
    line-height: 1.5;
    outline: none;
    border: none;
    color: rgb(33, 37, 41);
  }
`;

export const WriteActionsWrapper = styled.div`
  width: calc(100% - 2rem);
  position: fixed;
  bottom: 0px;
  .wrap {
    padding-left: 1rem;
    padding-right: 1rem;
    height: 4rem;
    width: 100%;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
    background: rgba(255, 255, 255, 0.85);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
  }
`;
