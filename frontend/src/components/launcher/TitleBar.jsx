import { Minus, X } from "lucide-react";
import { RadioLoopIcon } from "@/components/ui/radio-loop";

export const TitleBar = ({ online = 0 }) => (
  <header className="titlebar" data-testid="launcher-titlebar">
    <div className="brand-block">
      <h1 className="brand" data-testid="launcher-brand">
        authentic <span className="brand__accent">rp</span>
      </h1>
      <p className="online" data-testid="launcher-online">
        <RadioLoopIcon size={16} className="online__icon" aria-hidden="true" />
        <span className="online__label">онлайн проекта:</span>
        <span className="online__count" data-testid="online-count">{online}</span>
      </p>
    </div>

    <div className="window-controls">
      <button type="button" className="win-btn" aria-label="Свернуть" data-testid="window-minimize-btn">
        <Minus size={16} strokeWidth={2.2} />
      </button>
      <button type="button" className="win-btn win-btn--close" aria-label="Закрыть" data-testid="window-close-btn">
        <X size={16} strokeWidth={2.2} />
      </button>
    </div>
  </header>
);
