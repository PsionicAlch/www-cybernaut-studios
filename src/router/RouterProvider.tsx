import { useEffect, useMemo, useState } from "react";

import type { RouterState } from "./types";
import { RouterContext } from "./RouterContext";

function getLocation() {
  return {
    path: window.location.pathname,
    hash: window.location.hash.replace("#", ""),
  };
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState(getLocation);

  useEffect(() => {
    const onChange = () => setLocation(getLocation());

    window.addEventListener("popstate", onChange);
    window.addEventListener("hashchange", onChange);

    return () => {
      window.removeEventListener("popstate", onChange);
      window.removeEventListener("hashchange", onChange);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setLocation(getLocation());
  };

  const setHash = (hash: string | number) => {
    window.location.hash = String(hash);
  };

  const value: RouterState = useMemo(
    () => ({
      path: location.path,
      hash: location.hash,
      navigate,
      setHash,
    }),
    [location]
  );

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
}