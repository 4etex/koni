import { Play, Eye, Heart } from "lucide-react";

const NEWS = [
  { id: 1, date: "12.06.2026", title: "Открытие сервера Downtown", views: 0, likes: 0 },
  { id: 2, date: "08.06.2026", title: "Обновление игровых систем", views: 0, likes: 0 },
];

export const NewsColumn = () => (
  <aside className="news" data-testid="news-column">
    <p className="section-label">Краткий гайд по игре</p>
    <button type="button" className="guide" data-testid="guide-video">
      <span className="guide__brand">Authentic</span>
      <span className="guide__play"><Play size={18} fill="currentColor" /></span>
      <span className="guide__caption">Смотреть видео</span>
    </button>

    <p className="section-label news__label">Последние обновления</p>
    <div className="news__grid">
      {NEWS.map((n) => (
        <button type="button" key={n.id} className="news-card" data-testid={`news-card-${n.id}`}>
          <span className="news-card__cover" aria-hidden="true" />
          <span className="news-card__date">{n.date}</span>
          <span className="news-card__title">{n.title}</span>
          <span className="news-card__meta">
            <span><Eye size={12} /> {n.views}</span>
            <span><Heart size={12} /> {n.likes}</span>
          </span>
        </button>
      ))}
    </div>
  </aside>
);
