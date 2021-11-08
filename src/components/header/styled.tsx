import styled from "styled-components";

export const Container = styled.div`
  height: 4rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 1728 px;
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

export const LogoWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  color: rgb(52, 58, 64);
  font-size: 1.3125rem;
  text-decoration: none;
  font-family: "Fira Mono", monospace;
  a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;
