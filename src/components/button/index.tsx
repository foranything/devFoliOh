import React from "react";
import { RoundButton, PrimaryButton, TransparentButton } from "./styled";

interface Props {
  children: React.ReactNode;
  type: "round" | "transparent" | "primary";
  onClick?: () => void;
}

export default function Button({ ...props }: Props) {
  const onClick = props.onClick;
  switch (props.type) {
    case "round":
      return (
        <RoundButton onClick={() => onClick?.()}>{props.children}</RoundButton>
      );
    case "transparent":
      return (
        <TransparentButton onClick={() => onClick?.()}>
          {props.children}
        </TransparentButton>
      );
    case "primary":
      return (
        <PrimaryButton onClick={() => onClick?.()}>
          {props.children}
        </PrimaryButton>
      );
    default:
      return (
        <TransparentButton onClick={() => onClick?.()}>
          {props.children}
        </TransparentButton>
      );
  }
}
