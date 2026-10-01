import { X } from "lucide-react";

export const Panel = ({ open, title, onClose, children, testId }) => {
  if (!open) return null;
  return (
    <section className="panel" role="dialog" aria-label={title} data-testid={testId}>
      <button type="button" className="panel__close" onClick={onClose} aria-label="Закрыть" data-testid="panel-close-btn">
        <X size={16} strokeWidth={2.2} />
      </button>
      <h2 className="panel__title">{title}</h2>
      {children}
    </section>
  );
};
