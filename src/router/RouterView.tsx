import { useMemo } from "react";

import { useRouter } from "./RouterContext";
import type { RouteConfig } from "./types";

interface RouterViewProps {
  routes: RouteConfig[];
  notFound: React.ComponentType;
};

export function RouterView({ routes, notFound: NotFound }: RouterViewProps) {
  const { path } = useRouter();

  const match = useMemo(
    () => routes.find((r) => r.path === path),
    [routes, path],
  );

  if (!match) {
    return <NotFound />;
  }

  const Page = match.component;

  return <Page />;
}
