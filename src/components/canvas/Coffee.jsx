import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Coffee = ({ isMobile }) => {
  const coffee = useGLTF('./coffee/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor='black' />
      
      <pointLight intensity={1}/>
      <primitive 
        object={coffee.scene}
        scale={isMobile ? 0.006 : 0.009}
        position={isMobile ? [-0.0032, -0.037, -0.0068] : [-0.0048, -0.07, -0.0105]}
        rotation={[ 0, 2, 0]}
      />
    </mesh>
  )
}

const CoffeeCanvas = () => {
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
          enableZoom={false}
          maxPolarAngle={7*Math.PI / 20}
          minPolarAngle={7*Math.PI / 20}
        />
        <Coffee isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default CoffeeCanvas