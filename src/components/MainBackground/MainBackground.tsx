/* eslint-disable arrow-body-style */

// Third party dependencies
import React, { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle, Vec2 } from "ogl";

// Component dependencies
import { MainBackgroundProps } from "./MainBackground.types";
import Styles from "./MainBackground.module.scss";
import Constants from "./MainBackground.constants";

/**
 *
 * Component dedicated to render the main background of
 * the main menu of the application.
 *
 * Main goal is provide some custom WebGL backgrounds that
 * keep on switching while the user is navigating through
 * the main menu.
 *
 * @param props
 * @returns
 */
const MainBackground = ({ children }: MainBackgroundProps) => {
  // Main canvas reference
  const ref = useRef<HTMLCanvasElement>(null);

  // Main useEffect for rendering the background animation
  useEffect(() => {
    // Fetching the canvas reference
    const canvas = ref.current;

    // If the canvas reference is not available, exit
    if (!canvas) {
      return;
    }

    // Destructuring constants
    const parent = canvas.parentElement;

    // If the parent element is not available, exit
    if (!parent) {
      return;
    }

    // Instantiate a renderer
    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas,
    });

    // Fetch the rendering context
    const gl = renderer.gl;

    // Create a base geometry
    const geometry = new Triangle(gl);

    // Fetch the animation parameters from the constants
    const {
      resolutionScale,
      speed,
      hueShift,
      noiseIntensity,
      scanlineIntensity,
      scanlineFrequency,
      warpAmount,
    } = Constants.ANIMATION_PARAMS;

    // Define the main WebGL animation parameters and program
    const program = new Program(gl, {
      // Instantiate the vertex and fragment shaders
      vertex: Constants.BACKGROUND_VERTEX_SHADER,
      fragment: Constants.BACKGROUND_FRAGMENT_SHADER,
      // Uniforms Defs
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2() },
        uHueShift: { value: hueShift },
        uNoise: { value: noiseIntensity },
        uScan: { value: scanlineIntensity },
        uScanFreq: { value: scanlineFrequency },
        uWarp: { value: warpAmount },
      },
    });

    // Create a mesh with the geometry and program
    const mesh = new Mesh(gl, { geometry, program });

    /**
     * Implement a resize callback function
     * for the event listener with the same name
     */
    const resize = () => {
      const w = parent.clientWidth,
        h = parent.clientHeight;
      renderer.setSize(w * resolutionScale, h * resolutionScale);
      program.uniforms.uResolution.value.set(w, h);
    };

    // Add the resize event listener
    window.addEventListener("resize", resize);

    // Perform the initial resize of the renderer
    resize();

    // Instantiate the animation loop variables
    const start = performance.now();
    let frame = 0;

    // Define the animation loop
    const loop = () => {
      program.uniforms.uTime.value =
        ((performance.now() - start) / 1000) * speed;
      program.uniforms.uHueShift.value = hueShift;
      program.uniforms.uNoise.value = noiseIntensity;
      program.uniforms.uScan.value = scanlineIntensity;
      program.uniforms.uScanFreq.value = scanlineFrequency;
      program.uniforms.uWarp.value = warpAmount;
      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(loop);
    };

    // Start the animation loop
    loop();

    return () => {
      // Cleanup function to stop the animation loop and remove event listener
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Main render of the background
  return (
    // Main container for the background
    <>
      <canvas ref={ref} className={Styles.MainBackground}></canvas>
      {children}
    </>
  );
};

export default MainBackground;
