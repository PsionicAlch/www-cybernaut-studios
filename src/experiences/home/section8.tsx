import { useEffect, useRef } from "react";

import { Group, Vector3, type Object3DEventMap } from "three";

import { useFrame, useThree } from "@react-three/fiber";
import ScifiHelmetModel from "../models/ScifiHelmet";

export default function HomeExperienceSection8() {
  const helmetRef = useRef<Group<Object3DEventMap>>(null);
  const mouseNDC = useRef({ x: 0, y: 0 });

  const { gl, camera } = useThree();

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const rect = gl.domElement.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      mouseNDC.current.x = x * 2 - 1;
      mouseNDC.current.y = -(y * 2 - 1);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [gl]);

  useFrame(() => {
    if (!helmetRef.current) return;

    const multiplier = 3;

    helmetRef.current.lookAt(
      new Vector3(
        mouseNDC.current.x * multiplier,
        mouseNDC.current.y * multiplier,
        camera.position.z
      )
    );
  });

  return (
    <>
      <ScifiHelmetModel ref={helmetRef} scale={0.009} />
    </>
  );
}
