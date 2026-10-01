import { useRef } from "react";
import { NavButton } from "@/components/launcher/NavButton";
import { PlayIcon } from "@/components/ui/play";
import { SettingsIcon } from "@/components/ui/settings";
import { DiscordIcon } from "@/components/ui/discord";
import { FileTextIcon } from "@/components/ui/file-text";
import { UserIcon } from "@/components/ui/user";

const Profile = ({ active, onClick }) => {
  const iconRef = useRef(null);
  return (
    <button
      type="button"
      className={`profile ${active ? "is-active" : ""}`}
      data-testid="nav-nickname-btn"
      onClick={onClick}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <span className="profile__avatar" data-testid="launcher-avatar">
        <UserIcon ref={iconRef} size={24} />
      </span>
      <span className="profile__name">Никнейм</span>
    </button>
  );
};

export const Dock = ({ active, onSelect }) => (
  <div className="dock" data-testid="launcher-navigation">
    <nav className="dock__inner" aria-label="Главное меню">
      <Profile active={active === "profile"} onClick={() => onSelect("profile")} />
      <div className="dock__center">
        <NavButton Icon={FileTextIcon} label="Новости" testId="nav-news-btn" active={active === "news"} onClick={() => onSelect("news")} />
        <NavButton Icon={PlayIcon} label="Играть" variant="play" testId="nav-play-btn" active={active === "play"} onClick={() => onSelect("play")} />
        <NavButton Icon={DiscordIcon} label="Дискорд" testId="nav-discord-btn" active={active === "discord"} onClick={() => onSelect("discord")} />
      </div>
      <NavButton Icon={SettingsIcon} label="Настройки" testId="nav-settings-btn" active={active === "settings"} onClick={() => onSelect("settings")} />
    </nav>
  </div>
);
