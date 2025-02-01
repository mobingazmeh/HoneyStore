"use client";

import React, { useEffect, useMemo, useRef, forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

// Bee component to display the 3D model of the bee
const Bee = forwardRef((props, ref) => {
  const { scene, animations } = useGLTF("/3DModels/bee/scene.gltf");
  const mixerRef = useRef(null);

  // Load and set textures
  const textures = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const diffuse = loader.load(
      "/3DModels/bee/textures/material_0_diffuse.png"
    );
    const normal = loader.load("/3DModels/bee/textures/material_0_normal.png");
    const roughness = loader.load(
      "/3DModels/bee/textures/material_0_specularGlossiness.png"
    );
    const ao = loader.load("/3DModels/bee/textures/material_0_occlusion.png");

    [diffuse, normal, roughness, ao].forEach(
      (texture) => (texture.flipY = false)
    );

    return { diffuse, normal, roughness, ao };
  }, []);

  // Apply textures to the model
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: textures.diffuse,
          normalMap: textures.normal,
          roughnessMap: textures.roughness,
          aoMap: textures.ao,
        });
      }
    });
  }, [scene, textures]);

  // Handle animations
  useEffect(() => {
    if (animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }
    return () => {
      if (mixerRef.current) mixerRef.current.stopAllAction();
    };
  }, [animations, scene]);

  // Update frame animations
  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  return <primitive ref={ref} object={scene} scale={0.6} />;
});

Bee.displayName = "Bee";

// Main BeeModel component
const BeeModel = () => {
  const beeRef = useRef(null);
  const cameraRef = useRef(null);

  // Scroll interaction to move and rotate the model
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / maxScroll;

      // Calculate new position and rotation
      const yPos = scrollPercent * 1.5;
      const xPos = Math.sin(scrollPercent * Math.PI * 2) * 1.5;

      // Limit the rotation to 160 degrees (in radians: 160 degrees = 160 * Math.PI / 180)
      const rotation =
        Math.sin(scrollPercent * Math.PI * 2) * ((120 * Math.PI) / 180); // -160° to 160° range

      const cameraY = 1 + scrollPercent * 2;

      if (beeRef.current) {
        gsap.to(beeRef.current.position, {
          y: yPos,
          x: xPos,
          duration: 5,
        });

        // Apply limited rotation with back and forth effect
        gsap.to(beeRef.current.rotation, {
          y: rotation,
          duration: 2,
          yoyo: true, // Enables back-and-forth effect
          repeat: -1, // Infinite repetitions
        });
      }

      if (cameraRef.current) {
        gsap.to(cameraRef.current.position, {
          y: cameraY,
          z: 4 - scrollPercent * 3,
          duration: 5,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 1, 4], fov: 70 }}
      ref={cameraRef}
      style={{
        position: "fixed", // Make the 3D model fixed on the page
        top: '30%',
        left: 0,
        bottom: 0, 
        width: "100%",
        height: "100%",
        zIndex: 10, // Place the model behind the content
        background: "transparent", // Make the background transparent
        pointerEvents: "none", // غیرفعال کردن تعاملات موس روی مدل
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 10]} intensity={1.2} />

      {/* Bee Model */}
      <Bee ref={beeRef} />

      {/* Camera controls */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

// Preload model
useGLTF.preload("/3DModels/bee/scene.gltf");

export default BeeModel;
