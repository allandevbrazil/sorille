import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const START_Z = 7.2;
const END_Z = 3.4;
const DURATION = 2.4; // segundos

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

/** Dolly de câmera de entrada (aproxima do dente) — pulado quando reduced-motion. */
export function IntroCameraRig({ reducedMotion }: { reducedMotion: boolean }) {
  const { camera } = useThree();
  const done = useRef(reducedMotion);

  useFrame((state) => {
    if (done.current) return;
    const t = Math.min(state.clock.elapsedTime / DURATION, 1);
    const eased = easeOutCubic(t);
    camera.position.z = THREE.MathUtils.lerp(START_Z, END_Z, eased);
    camera.lookAt(0, 0, 0);
    if (t >= 1) done.current = true;
  });

  return null;
}
