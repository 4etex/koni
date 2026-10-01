import { Play } from "lucide-react";

const GROUPS = [
  { title: "Советуем для новичков", servers: [{ id: "downtown", name: "Downtown", online: 0 }] },
  {
    title: "Все серверы",
    servers: [
      { id: "vinewood", name: "Vinewood", online: 0 },
      { id: "sandy", name: "Sandy Shores", online: 0 },
      { id: "paleto", name: "Paleto Bay", online: 0 },
      { id: "harbor", name: "Harbor", online: 0 },
    ],
  },
];

export const ServerList = () => (
  <aside className="servers" data-testid="server-list">
    <p className="section-label">Выберите сервер:</p>
    {GROUPS.map((g) => (
      <div key={g.title} className="servers__group">
        <p className="servers__group-title">{g.title}</p>
        {g.servers.map((s) => (
          <button type="button" key={s.id} className="server" data-testid={`server-${s.id}`}>
            <span className="server__dot" aria-hidden="true" />
            <span className="server__name">{s.name}</span>
            <span className="server__online">{s.online}</span>
            <span className="server__play"><Play size={12} /> Играть</span>
          </button>
        ))}
      </div>
    ))}
  </aside>
);
