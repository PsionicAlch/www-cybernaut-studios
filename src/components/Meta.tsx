import { useEffect } from "react";

export type MetaProps = {
  name?: string;
  property?: string;
  children: string;
};

export default function Meta({ name, property, children }: MetaProps) {
  useEffect(() => {
    const meta = document.createElement('meta');

    if (name) meta.name = name;
    if (property) meta.setAttribute('property', property);

    meta.content = children;

    document.head.appendChild(meta);
  }, [name, property, children]);

  return null;
}