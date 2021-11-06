import styled from "styled-components";

export const RoundButton = styled.button`
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: white;
  border: 1px solid rgb(52, 58, 64);
  color: rgb(52, 58, 64);
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: rgb(18, 184, 134);
  color: white;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2.5rem;
  font-size: 1.125rem;
  :hover {
    background: rgb(32, 201, 151);
  }
`;

export const TransparentButton = styled.button`
  height: 2.5rem;
  padding: 0.5rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  display: flex;
  outline: none;
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
