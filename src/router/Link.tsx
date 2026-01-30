import type { AnchorHTMLAttributes, ReactNode } from "react";

import { useRouter } from "./RouterContext";
import { useTransition } from "../transition/TransitionContext";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  children: ReactNode;
};

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();
  const { startExit } = useTransition();

  return (
    <a
      {...rest}
      href={to}
      onClick={(e) => {
        e.preventDefault();
        startExit(() => navigate(to));
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
