import { useRef } from "react";

export const NavButton = ({ Icon, label, className, testId }) => {
  const iconRef = useRef(null);
  return (
    <button
      type="button"
      className={`nav-btn ${className}`}
      data-testid={testId}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      onFocus={() => iconRef.current?.startAnimation()}
      onBlur={() => iconRef.current?.stopAnimation()}
    >
      {Icon && <Icon ref={iconRef} size={16} className="nav-btn__icon" />}
      <span>{label}</span>
    </button>
  );
};
