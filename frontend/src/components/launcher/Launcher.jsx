import { useEffect, useState } from "react";
import { TitleBar } from "@/components/launcher/TitleBar";
import { Dock } from "@/components/launcher/Dock";
import { Orbs } from "@/components/launcher/Orbs";
import "./launcher.css";

const BASE_W = 1280;
const BASE_H = 800;

const useFitScale = () => {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / BASE_W, window.innerHeight / BASE_H, 1.5));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return scale;
};

export default function Launcher() {
  const scale = useFitScale();
  return (
    <div className="launcher-stage" data-testid="launcher-stage">
      <div className="launcher-frame" style={{ width: BASE_W * scale, height: BASE_H * scale }}>
        <main className="launcher" style={{ transform: `scale(${scale})` }} data-testid="launcher">
          <Orbs />
          <TitleBar />
          <Dock />
        </main>
      </div>
    </div>
  );
}
