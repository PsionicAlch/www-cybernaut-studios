import { useEffect } from "react";

export type TitleProps = {
  children: string;
};

export default function Title({ children }: TitleProps) {
  useEffect(() => {
    document.title = children;
  }, [children]);

  return null;
}
