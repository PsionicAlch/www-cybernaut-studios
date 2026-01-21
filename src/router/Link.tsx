import type { AnchorHTMLAttributes, ReactNode } from "react";

import { useRouter } from "./RouterContext";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  children: ReactNode;
};

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  return (
    <a
      {...rest}
      href={to}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
