import { useRef } from "react";

export const NavButton = ({ Icon, label, variant = "ghost", testId, active = false, onClick }) => {
  const iconRef = useRef(null);
  return (
    <button
      type="button"
      className={`nav-btn nav-btn--${variant} ${active ? "is-active" : ""}`}
      data-testid={testId}
      aria-pressed={active}
      onClick={onClick}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      onFocus={() => iconRef.current?.startAnimation()}
      onBlur={() => iconRef.current?.stopAnimation()}
    >
      <Icon ref={iconRef} size={variant === "play" ? 20 : 18} className="nav-btn__icon" />
      <span>{label}</span>
    </button>
  );
};
