"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";

const particleCount = 120;
const desktopQuery = "(min-width: 1024px)";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleChange = () => {
      setMatches(media.matches);
    };

    handleChange();
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

function createParticles() {
  return Array.from({ length: particleCount }, (_, index) => ({
    id: index,
    position: [
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 5,
    ],
    size: Math.random() * 0.025 + 0.006,
    speed: Math.random() * 0.6 + 0.3,
    offset: Math.random() * Math.PI * 2,
  }));
}

function Particles() {
  const groupRef = useRef(null);
  const meshRefs = useRef([]);

  const particles = useMemo(() => createParticles(), []);

  useFrame(({ clock, pointer }) => {
    const group = groupRef.current;
    if (!group) return;

    const time = clock.elapsedTime;

    group.rotation.y = pointer.x * 0.12;
    group.rotation.x = pointer.y * 0.06;
    group.position.y = Math.sin(time * 0.45) * 0.12;

    particles.forEach((particle, index) => {
      const mesh = meshRefs.current[index];
      if (!mesh) return;

      const movement = time * particle.speed + particle.offset;

      mesh.position.x = particle.position[0] + Math.sin(movement) * 0.18;
      mesh.position.y = particle.position[1] + Math.cos(movement) * 0.18;
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <mesh
          key={particle.id}
          ref={(mesh) => {
            meshRefs.current[index] = mesh;
          }}
          position={particle.position}
        >
          <sphereGeometry args={[particle.size, 4, 4]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}

export default function FooterAnimate() {
  const isDesktop = useMediaQuery(desktopQuery);

  if (!isDesktop) return null;

  return (
    <section className="fixed inset-x-0 bottom-0 z-0 h-[520px] overflow-hidden bg-[#080d1f] px-6 text-white lg:px-12 xl:px-20">
      <div className="relative mx-auto h-full max-w-7xl overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/35 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Particles />
        </Canvas>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 h-[180px] px-6 md:h-[230px] md:px-10">
          <img
            src="https://pyramidci.com/wp-content/uploads/2025/08/Frame-1973341695.svg"
            alt="Pyramid Talent"
            width={1500}
            height={260}
            className="mx-auto h-full w-full max-w-[1400px] object-contain opacity-90"
          />
        </div>
      </div>
    </section>
  );
}