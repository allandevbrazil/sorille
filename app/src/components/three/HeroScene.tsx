import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { StylizedTooth } from "./StylizedTooth";
import { IntroCameraRig } from "./IntroCameraRig";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#fff6e6" />
      <pointLight position={[-3, -2, 2]} intensity={1.1} color="#e2a032" />
      <pointLight position={[0, 3, -3]} intensity={0.5} color="#ffffff" />
    </>
  );
}

/** Cena 3D exclusiva do Hero — "momento Overdrive": dente estilizado com zoom de câmera de entrada. */
export function HeroScene() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, reducedMotion ? 3.4 : 7.2], fov: 42 }}
      >
        <Suspense fallback={null}>
          <Lights />
          <StylizedTooth reducedMotion={reducedMotion} />
          <IntroCameraRig reducedMotion={reducedMotion} />
          <EffectComposer enableNormalPass={false}>
            <Bloom
              intensity={0.9}
              luminanceThreshold={0.35}
              luminanceSmoothing={0.2}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.25} darkness={0.65} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
