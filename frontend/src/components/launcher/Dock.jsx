import { useRef } from "react";
import { NavButton } from "@/components/launcher/NavButton";
import { PlayIcon } from "@/components/ui/play";
import { SettingsIcon } from "@/components/ui/settings";
import { DiscordIcon } from "@/components/ui/discord";
import { FileTextIcon } from "@/components/ui/file-text";
import { UserIcon } from "@/components/ui/user";

const Profile = () => {
  const iconRef = useRef(null);
  return (
    <button
      type="button"
      className="profile"
      data-testid="nav-nickname-btn"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <span className="profile__avatar" data-testid="launcher-avatar">
        <UserIcon ref={iconRef} size={24} />
      </span>
      <span className="profile__name">никнейм</span>
    </button>
  );
};

export const Dock = () => (
  <div className="dock" data-testid="launcher-navigation">
    <nav className="dock__inner" aria-label="Главное меню">
      <Profile />
      <div className="dock__center">
        <NavButton Icon={FileTextIcon} label="новости" testId="nav-news-btn" />
        <NavButton Icon={PlayIcon} label="играть" variant="play" testId="nav-play-btn" />
        <NavButton Icon={DiscordIcon} label="дискорд" testId="nav-discord-btn" />
      </div>
      <NavButton Icon={SettingsIcon} label="настройки" testId="nav-settings-btn" />
    </nav>
  </div>
);
