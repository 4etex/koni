import { useEffect, useState } from "react";
import { TitleBar } from "@/components/launcher/TitleBar";
import { Dock } from "@/components/launcher/Dock";
import { Orbs } from "@/components/launcher/Orbs";
import { WeaponModel } from "@/components/launcher/WeaponModel";
import GradientWaves from "@/components/GradientWaves";
import { Panel } from "@/components/launcher/Panel";
import { GameFiles } from "@/components/launcher/GameFiles";
import { ServerList } from "@/components/launcher/ServerList";
import { NewsColumn } from "@/components/launcher/NewsColumn";
import "./launcher.css";

const OTHER_PAGES = [
  { id: "profile", title: "Профиль", text: "Информация об аккаунте появится здесь." },
  { id: "news", title: "Новости", text: "Последние новости проекта появятся здесь." },
  { id: "discord", title: "Дискорд", text: "Присоединяйтесь к нашему сообществу в Discord." },
  { id: "settings", title: "Настройки", text: "Параметры лаунчера появятся здесь." },
];

const BASE_W = 1600;
const BASE_H = 900;

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
  const [page, setPage] = useState(null);
  const close = () => setPage(null);
  return (
    <div className="launcher-stage" data-testid="launcher-stage">
      <div className="launcher-frame" style={{ width: BASE_W * scale, height: BASE_H * scale }}>
        <main className="launcher" style={{ transform: `scale(${scale})` }} data-testid="launcher">
          {/* <Orbs /> */}
          <div className="waves-bg" aria-hidden="true">
            <GradientWaves
              horizonColor="#0A0A0A"
              waveColor="#1193D6"
              crestColor="#22D3EE"
              speed={0.25}
              amplitude={3.5}
              waveScale={0.45}
              waveRatio={0.9}
              swell={40}
              turbulence={22}
              tilt={1.11}
              zoom={0.85}
              height={6}
              fogDepth={22}
              detail="medium"
              brightness={1.1}
              opacity={1}
              mouseInteraction={false}
              parallaxStrength={0.5}
              grain
              grainIntensity={0.05}
            />
          </div>
          <TitleBar />
          <ServerList />
          <NewsColumn />
          <WeaponModel />
          <Panel open={page === "play"} title="Игровые файлы" onClose={close} testId="play-panel">
            <GameFiles onClose={close} />
          </Panel>
          {OTHER_PAGES.map(({ id, title, text }) => (
            <Panel key={id} open={page === id} title={title} onClose={close} testId={`${id}-panel`}>
              <p className="panel__subtitle">{text}</p>
              <div className="panel__actions">
                <button type="button" className="btn btn--ghost" onClick={close} data-testid={`${id}-close-btn`}>Закрыть</button>
              </div>
            </Panel>
          ))}
          <Dock active={page} onSelect={(id) => setPage((p) => (p === id ? null : id))} />
        </main>
      </div>
    </div>
  );
}
