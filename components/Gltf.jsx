import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Gltf = () => {
  const gltf = useLoader(GLTFLoader, "/assets/Totoro.glb");
  gltf.scene.position.set(0, -10, 0);

  return <primitive object={gltf.scene} />;
};

export default Gltf;
