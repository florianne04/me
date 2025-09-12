import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAudio } from '../app/AudioProvider'

const demo = Array.from({ length: 8 }).map((_, i) => ({
  id: `album-${i + 1}`,
  title: `Album ${i + 1}`,
  artist: `Artiste ${i + 1}`,
}))

export default function Home() {
  const audio = useAudio()
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-4">Recommandations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
          {demo.map((a) => (
            <motion.div key={a.id} whileHover={{ y: -4 }} className="group">
              <Link to={`/album/${a.id}`} className="block">
                <div className="aspect-square bg-white/5 rounded-lg mb-2 group-hover:shadow-lg group-hover:shadow-white/10 transition-shadow" />
                <div className="text-sm truncate">{a.title}</div>
                <div className="text-xs text-white/60 truncate">{a.artist}</div>
              </Link>
              <button onClick={() => audio.load({ id: a.id, title: a.title, artist: a.artist, url: '/audio/demo.mp3' })} className="mt-2 text-xs underline underline-offset-4 opacity-70 hover:opacity-100">Charger un aperçu</button>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Playlists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
          {demo.map((a) => (
            <motion.div key={`pl-${a.id}`} whileHover={{ y: -4 }} className="group">
              <Link to={`/album/${a.id}`} className="block">
                <div className="aspect-square bg-white/5 rounded-lg mb-2 group-hover:shadow-lg group-hover:shadow-white/10 transition-shadow" />
                <div className="text-sm truncate">Playlist {a.title}</div>
                <div className="text-xs text-white/60 truncate">{a.artist}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

