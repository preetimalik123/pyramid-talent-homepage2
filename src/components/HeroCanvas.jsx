"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { Color, Vector3 } from "three";

const ROWS = 6;
const COLS = 6;
const GAP = 1.25;

function TalentBox({ position }) {
  const meshRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const colors = useMemo(
    () => ({
      base: new Color("#241f45"),
      hover: new Color("#8b5cf6"),
    }),
    []
  );

  useFrame(({ pointer, viewport }) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const targetX = (pointer.x * viewport.width) / 3;
    const targetY = (pointer.y * viewport.height) / 3;

    mesh.lookAt(targetX, targetY, 3);
    mesh.material.color.lerp(isHovered ? colors.hover : colors.base, 0.06);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <boxGeometry args={[1.15, 1.15, 0.5]} />
      <meshStandardMaterial color="#241f45" roughness={0.45} metalness={0.15} />
    </mesh>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();

  const target = useMemo(() => new Vector3(), []);

  useFrame(() => {
    target.set(pointer.x * 0.7, pointer.y * 0.45, 7);

    camera.position.lerp(target, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function TalentGrid() {
  const boxes = useMemo(() => {
    return Array.from({ length: ROWS * COLS }, (_, index) => {
      const row = Math.floor(index / COLS);
      const col = index % COLS;

      return {
        id: `${row}-${col}`,
        position: [
          (col - (COLS - 1) / 2) * GAP,
          (row - (ROWS - 1) / 2) * GAP,
          0,
        ],
      };
    });
  }, []);

  return (
    <group rotation={[0.05, -0.18, 0]}>
      {boxes.map((box) => (
        <TalentBox key={box.id} position={box.position} />
      ))}
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 2, 4]} intensity={1.4} />

        <TalentGrid />
        <CameraRig />
      </Canvas>
    </div>
  );
}