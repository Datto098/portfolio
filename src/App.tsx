import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Scene from "./components/Scene";
import PortfolioContent from "./components/PortfolioContent";

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <Suspense fallback={null}>
                    <Scene />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={0.5} />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                    />
                </Suspense>
            </Canvas>
            <PortfolioContent />
        </div>
    );
}

export default App;
