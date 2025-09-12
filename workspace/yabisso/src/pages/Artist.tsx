import { useParams } from 'react-router-dom'

export default function Artist() {
  const { id } = useParams()
  return (
    <div className="space-y-6">
      <div className="flex items-end gap-6">
        <div className="w-32 h-32 rounded-lg bg-white/5" />
        <div>
          <h1 className="text-3xl font-semibold">Artiste {id}</h1>
          <p className="text-white/60 max-w-2xl mt-2">
            Description synthétique de l’artiste. Texte de démonstration noir & blanc pour YABISSO.
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-3">Top titres</h2>
        <ul className="divide-y divide-white/10 border-t border-white/10">
          {Array.from({ length: 8 }).map((_, i) => (
            <li key={i} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 bg-white/5 rounded" />
                <div className="truncate">
                  <div className="text-sm">Titre {i + 1}</div>
                  <div className="text-xs text-white/60">Artiste {id}</div>
                </div>
              </div>
              <button className="px-3 py-1.5 rounded bg-white text-black text-xs">Lire</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Albums</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="group">
              <div className="aspect-square bg-white/5 rounded-lg mb-2 group-hover:shadow-lg group-hover:shadow-white/10 transition-shadow" />
              <div className="text-sm">Album {i + 1}</div>
              <div className="text-xs text-white/60">{id}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

