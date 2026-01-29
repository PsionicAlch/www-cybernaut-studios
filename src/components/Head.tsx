import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  type ComponentType,
  type ReactElement,
  type ReactNode,
} from "react";

import Title from "./Title";
import Meta from "./Meta";

type ManagedTags =
  | { type: "title" }
  | { type: "meta"; name?: string; property?: string };

function isElementOfType<P>(
  element: ReactNode,
  component: ComponentType<P>,
): element is ReactElement<P> {
  return isValidElement(element) && element.type === component;
}

function getManagedTags(children: ReactNode): ManagedTags[] {
  const tags: ManagedTags[] = [];

  Children.forEach(children, (child) => {
    if (isElementOfType(child, Title)) {
      tags.push({ type: "title" });
    }

    if (isElementOfType(child, Meta)) {
      tags.push({
        type: "meta",
        name: child.props.name,
        property: child.props.property,
      });
    }
  });

  return tags;
}

type HeadProps = {
  children?: ReactNode;
};

export default function Head({ children }: HeadProps) {
  const managed = useMemo(() => getManagedTags(children), [children]);
  const removeTags = useCallback(() => {
    managed.forEach((tag) => {
      if (tag.type === "title") {
        document.title = "";
      }

      if (tag.type === "meta") {
        let selector = "meta";
        if (tag.name) selector += `[name="${tag.name}"]`;
        if (tag.property) selector += `[property="${tag.property}"]`;

        document.querySelectorAll(selector).forEach((el) => el.remove());
      }
    });
  }, [managed]);

  useLayoutEffect(removeTags, [removeTags]);

  useEffect(() => {
    return removeTags;
  }, [removeTags]);

  return <>{children}</>;
}
