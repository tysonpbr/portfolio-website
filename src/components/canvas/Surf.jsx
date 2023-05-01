import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Surf = ({ isMobile }) => {
  const surf = useGLTF('./surf/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      
      <pointLight intensity={1}/>
      <primitive 
        object={surf.scene}
        scale={0.04}
        position={[0.006, -0.06, -0.0105]}
        rotation={[ 1.65, 6.9, 0.3]}
      />
    </mesh>
  )
}

const SurfCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, -15], fov: 1 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={7}
          enableZoom={false}
          maxPolarAngle={7*Math.PI / 20}
          minPolarAngle={7*Math.PI / 20}
        />
        <Surf isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default SurfCanvas