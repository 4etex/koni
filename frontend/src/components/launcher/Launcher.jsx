import { useEffect, useState } from "react";
import GlassSurface from "@/components/GlassSurface";
import { NavButton } from "@/components/launcher/NavButton";
import { AirplaneIcon } from "@/components/ui/airplane";
import { SettingsIcon } from "@/components/ui/settings";
import { DiscordIcon } from "@/components/ui/discord";
import { FileTextIcon } from "@/components/ui/file-text";
import "./launcher.css";

const BASE_W = 837;
const BASE_H = 537;

const useFitScale = () => {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / BASE_W, window.innerHeight / BASE_H));
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
          <h1 className="brand" data-testid="launcher-brand">authentic rp</h1>
          <p className="online" data-testid="launcher-online">
            <span className="online__dot" aria-hidden="true" />
            онлайн: ~1000
          </p>
          <p className="watermark">authentic rp</p>
          <GlassSurface
            width={704}
            height={75}
            borderRadius={16}
            brightness={60}
            opacity={0.9}
            blur={10}
            backgroundOpacity={0.12}
            saturation={1.4}
            className="navigation"
            data-testid="launcher-navigation"
          >
            <nav className="navigation__inner" aria-label="Главное меню">
              <span className="avatar" data-testid="launcher-avatar" />
              <NavButton label="никнейм" className="nickname" testId="nav-nickname-btn" />
              <NavButton Icon={FileTextIcon} label="новости" className="news" testId="nav-news-btn" />
              <NavButton Icon={AirplaneIcon} label="играть" className="play" testId="nav-play-btn" />
              <NavButton Icon={DiscordIcon} label="дискорд" className="discord" testId="nav-discord-btn" />
              <NavButton Icon={SettingsIcon} label="настройки" className="settings" testId="nav-settings-btn" />
            </nav>
          </GlassSurface>
        </main>
      </div>
    </div>
  );
}
