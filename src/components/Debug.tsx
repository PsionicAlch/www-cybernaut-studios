import { Leva } from "leva";
import { useEffect, useState } from "react";

export default function Debug() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkHash = () => setShow(window.location.hash === "#debug");

    checkHash();

    window.addEventListener('hashchange', checkHash);

    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  return <Leva hidden={!show} collapsed />;
}
