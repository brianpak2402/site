"use client";

import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";

export default function ShaderBackground() {
  return (
    <ShaderGradientCanvas className="!fixed pointer-events-none !w-full !h-full z-0">
      <ShaderGradient
        animate="on"
        brightness={1.1}
        cameraZoom={1}
        cAzimuthAngle={180}
        cDistance={3.9}
        color1="#5606FF"
        color2="#FE8989"
        color3="#000000"
        control="props"
        cPolarAngle={115}
        enableTransition
        envPreset="city"
        grain="off"
        lightType="env"
        positionX={-0.5}
        positionY={0.1}
        positionZ={0}
        range="enabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={0}
        rotationZ={235}
        shader="defaults"
        type="waterPlane"
        uAmplitude={0} // Spiral
        uDensity={1.1}
        uFrequency={5.5}
        uSpeed={0.1}
        uStrength={2.4}
        uTime={0.2}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}
