import { useState } from "react";
import { ChevronDown, HardDrive } from "lucide-react";

const DISKS = [
  { id: "C", label: "Жесткий диск C:", free: "120 ГБ" },
  { id: "D", label: "Жесткий диск D:", free: "480 ГБ" },
];

export const GameFiles = ({ onClose }) => {
  const [disk, setDisk] = useState(DISKS[0]);
  const [openList, setOpenList] = useState(false);

  return (
    <div className="gamefiles" data-testid="gamefiles-panel">
      <p className="panel__subtitle">Выберите диск для установки игровых файлов:</p>

      <div className="disk-select" data-testid="disk-select">
        <button
          type="button"
          className="disk-select__btn"
          onClick={() => setOpenList((v) => !v)}
          aria-expanded={openList}
          data-testid="disk-select-btn"
        >
          <HardDrive size={18} />
          <span>{disk.label}</span>
          <ChevronDown size={16} className={`disk-select__chev ${openList ? "is-open" : ""}`} />
        </button>
        {openList && (
          <ul className="disk-select__list" role="listbox" data-testid="disk-select-list">
            {DISKS.map((d) => (
              <li key={d.id}>
                <button
                  type="button"
                  className={`disk-select__item ${d.id === disk.id ? "is-active" : ""}`}
                  onClick={() => { setDisk(d); setOpenList(false); }}
                  data-testid={`disk-option-${d.id}`}
                >
                  <HardDrive size={16} />
                  <span>{d.label}</span>
                  <em>{d.free} свободно</em>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="panel__note" data-testid="gamefiles-note">Потребуется около 40 ГБ свободного места</p>

      <div className="panel__actions">
        <button type="button" className="btn btn--primary" data-testid="install-btn">Установить</button>
        <button type="button" className="btn btn--ghost" onClick={onClose} data-testid="gamefiles-close-btn">Закрыть</button>
      </div>
    </div>
  );
};
