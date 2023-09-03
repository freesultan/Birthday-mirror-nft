import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ColorHash from 'color-hash'


const Mirror = ({ birthdate }) => {

  var colorHash = new ColorHash();
  const color = colorHash.hex(birthdate)

  function Box(props) {

    // Subscribe this component to the render-loop, rotate the mesh every frame, should be used with useRef
    // useFrame((state, delta) => (ref.current.rotation.x += delta));
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}

      >
        <boxGeometry args={[0.5, 0.5, 0.2]} />
        <meshStandardMaterial
          metalness={1}
          roughness={0}

        />
      </mesh>
    );
  }

  // A cone is a convex shape by definition...
  function Cone({ sides, ...props }) {

    return (
      <mesh castShadow  {...props}>
        <coneGeometry args={[0.4, 0.2, sides]} />
        <meshStandardMaterial
          metalness={1}
          roughness={0}
          color={color} />
      </mesh>
    );
  }

  return (
    <div className='h-[200px] min-h-screen w-full'>
      <Canvas dpr={[1, 2]} shadows camera={{ position: [-1, -1, 3], fov: 40, near: 1, far: 20 }}>
        {/* <spotLight
          intensity={2}
          position={[5, 0, 20]}
          angle={0.2}
          penumbra={1}
        /> */}

        <Box position={[-1.2, 0, 0]} />
        <Box position={[-0.6, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Box position={[0.6, 0, 0]} />
        <Box position={[1.2, 0, 0]} />

        <Box position={[-1.2, 0.6, 0]} />
        <Box position={[-0.6, 0.6, 0]} />
        <Box position={[0, 0.6, 0]} />
        <Box position={[0.6, 0.6, 0]} />
        <Box position={[1.2, 0.6, 0]} />

        <Box position={[-1.2, 1.2, 0]} />
        <Box position={[-0.6, 1.2, 0]} />
        <Box position={[0, 1.2, 0]} />
        <Box position={[0.6, 1.2, 0]} />
        <Box position={[1.2, 1.2, 0]} />

        <Box position={[-1.2, -0.6, 0]} />
        <Box position={[-0.6, -0.6, 0]} />
        <Box position={[0, -0.6, 0]} />
        <Box position={[0.6, -0.6, 0]} />
        <Box position={[1.2, -0.6, 0]} />

        <Box position={[-1.2, -1.2, 0]} />
        <Box position={[-0.6, -1.2, 0]} />
        <Box position={[0, -1.2, 0]} />
        <Box position={[0.6, -1.2, 0]} />
        <Box position={[1.2, -1.2, 0]} />

        <Cone position={[0, -1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[0, -0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[0, 0, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[0, 0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[0, 1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />

        <Cone position={[0.6, -1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[0.6, -0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[0.6, 0, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[0.6, 0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[0.6, 1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />

        <Cone position={[-0.6, -1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-0.6, -0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-0.6, 0, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-0.6, 0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-0.6, 1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />

        <Cone position={[-1.2, -1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-1.2, -0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-1.2, 0, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-1.2, 0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-1.2, 1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />

        <Cone position={[1.2, -1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[1.2, -0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[1.2, 0, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[1.2, 0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[1.2, 1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />

        <Cone position={[1.8, -1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[1.8, -0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[1.8, 0, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[1.8, 0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[1.8, 1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />

        <Cone position={[-1.8, -1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-1.8, -0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-1.8, 0, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-1.8, 0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-1.8, 1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />

        <Cone position={[2.4, -1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[2.4, -0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[2.4, 0, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[2.4, 0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[2.4, 1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />

        <Cone position={[-2.4, -1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-2.4, -0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-2.4, 0, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-2.4, 0.6, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />
        <Cone position={[-2.4, 1.2, 0.2]} rotation={[1.55, 0.8, 0]} sides={4} />

        <Environment preset={"sunset"} background blur={0.01} />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default Mirror