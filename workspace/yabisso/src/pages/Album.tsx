import { useParams } from 'react-router-dom'
import { getAlbum, getTracksByAlbum } from '../lib/data'
import { useAudio } from '../app/AudioProvider'

export default function Album() {
  const { id } = useParams()
  const album = id ? getAlbum(id) : undefined
  const trackList = id ? getTracksByAlbum(id) : []
  const audio = useAudio()
  return (
    <div className="space-y-6">
      <div className="flex items-end gap-6">
        <div className="w-40 h-40 rounded-lg bg-white/5" />
        <div>
          <h1 className="text-3xl font-semibold">{album?.title || `Album ${id}`}</h1>
          <div className="text-white/60 mt-1">{album?.artistId || 'Artiste X'}</div>
        </div>
      </div>

      <ol className="divide-y divide-white/10 border-t border-white/10">
        {trackList.map((t) => (
          <li key={t.id} className="flex items-center justify-between py-3">
            <div>
              <div className="text-sm">{t.title}</div>
              <div className="text-xs text-white/60">{Math.floor(t.durationSec/60)}:{(t.durationSec%60).toString().padStart(2,'0')}</div>
            </div>
            <button onClick={() => audio.load({ id: t.id, title: t.title, artist: album?.artistId, url: t.audioUrl })} className="px-3 py-1.5 rounded bg-white text-black text-xs">Lire</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

