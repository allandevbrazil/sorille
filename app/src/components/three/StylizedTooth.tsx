import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/**
 * Dente estilizado (geometria procedural, sem assets externos) com um núcleo
 * emissivo dourado — evoca "o problema tratado lá dentro" sem tentar simular
 * anatomia realista, que exigiria modelos 3D licenciados fora do escopo deste
 * projeto. Zoom de câmera + brilho fazem o trabalho de "momento Overdrive".
 */
export function StylizedTooth({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  const rootPositions = useMemo(
    () => [
      [-0.32, -0.95, 0.22] as const,
      [0.34, -0.95, -0.18] as const,
    ],
    [],
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reducedMotion) {
      group.current.rotation.y += delta * 0.18;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    }
    if (core.current) {
      const pulse = reducedMotion
        ? 1.4
        : 1.2 + Math.sin(state.clock.elapsedTime * 1.6) * 0.35;
      const mat = core.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = pulse;
    }
  });

  return (
    <group ref={group}>
      {/* Coroa */}
      <RoundedBox args={[1.5, 1.15, 1.5]} radius={0.42} smoothness={6} castShadow>
        <meshPhysicalMaterial
          color="#f5efe4"
          roughness={0.25}
          metalness={0}
          transmission={0.55}
          thickness={1.2}
          ior={1.3}
          clearcoat={0.6}
          clearcoatRoughness={0.3}
        />
      </RoundedBox>

      {/* Raízes */}
      {rootPositions.map((pos, i) => (
        <mesh key={i} position={pos} rotation={[0, 0, i === 0 ? 0.12 : -0.12]}>
          <coneGeometry args={[0.28, 1.3, 20]} />
          <meshPhysicalMaterial
            color="#efe6d3"
            roughness={0.4}
            transmission={0.35}
            thickness={0.8}
          />
        </mesh>
      ))}

      {/* Núcleo dourado — "o canal tratado", visível através da coroa translúcida */}
      <mesh ref={core} position={[0, -0.15, 0]}>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial
          color="#e2a032"
          emissive="#e2a032"
          emissiveIntensity={1.2}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}
