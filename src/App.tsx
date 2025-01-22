import { useEffect, useState } from "react";
import Chat from "./components/Chat/Chat"
import Decor from "./components/Decor/Decor"
import Title from "./components/Title/Title"

function App() {
  const [offset, setOffset] = useState({ x: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX } = e;
      const centerX = window.innerWidth / 2;
      const offsetX = (clientX - centerX) * 0.02;
      setOffset({ x: offsetX });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="App" style={{
      backgroundPosition: `${-offset.x}px, 0px`,
      transition: "background-position 0.1s ease-out",
    }}>
      <Title />
      <Chat />
      <Decor />
    </div>
  )
}

export default App
