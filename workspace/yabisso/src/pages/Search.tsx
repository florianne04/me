import { useMemo, useState } from 'react'

const data = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  title: `Titre ${i + 1}`,
  artist: `Artiste ${Math.ceil((i + 1) / 3)}`,
}))

export default function Search() {
  const [q, setQ] = useState('')
  const results = useMemo(
    () => data.filter((d) => (d.title + d.artist).toLowerCase().includes(q.toLowerCase())),
    [q]
  )
  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher titres, artistes, albums…"
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>

      <ul className="divide-y divide-white/10 border-t border-white/10">
        {results.map((r) => (
          <li key={r.id} className="py-3 flex items-center justify-between">
            <div>
              <div className="text-sm">{r.title}</div>
              <div className="text-xs text-white/60">{r.artist}</div>
            </div>
            <button className="px-3 py-1.5 rounded bg-white text-black text-xs">Lire</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

