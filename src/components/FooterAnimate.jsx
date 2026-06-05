"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const PARTICLE_COUNT = 360;

function Particles() {
  const groupRef = useRef(null);
  const particleRefs = useRef([]);

  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
      id: index,
      position: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5,
      ],
      size: Math.random() * 0.025,
      speed: Math.random() * 0.6 + 0.3,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame(({ clock, pointer }) => {
    const group = groupRef.current;
    if (!group) return;

    const time = clock.elapsedTime;

    group.rotation.y = pointer.x * 0.12;
    group.rotation.x = pointer.y * 0.06;
    group.position.y = Math.sin(time * 0.45) * 0.12;

    particles.forEach((particle, index) => {
      const mesh = particleRefs.current[index];
      if (!mesh) return;

      mesh.position.x =
        particle.position[0] +
        Math.sin(time * particle.speed + particle.offset) * 0.18;

      mesh.position.y =
        particle.position[1] +
        Math.cos(time * particle.speed + particle.offset) * 0.18;
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <mesh
          key={particle.id}
          ref={(mesh) => {
            particleRefs.current[index] = mesh;
          }}
          position={particle.position}
        >
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}

export default function FooterAnimate() {
  return (
    <section className="fixed inset-x-0 bottom-0 z-0 h-[520px] overflow-hidden bg-[#080d1f] px-6 text-white sm:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto h-full max-w-7xl">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/35 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Particles />
        </Canvas>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-6 pb-6 md:px-10 md:pb-8">
  <img
    src="https://pyramidci.com/wp-content/uploads/2025/08/Frame-1973341695.svg"
    alt="Pyramid Talent"
    className="mx-auto w-full max-w-[980px] opacity-90"
  />
</div>
      </div>
    </section>
  );
}