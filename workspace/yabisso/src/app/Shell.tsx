import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AudioProvider, { useAudio } from './AudioProvider'
import PlayerProgress from './PlayerProgress'

function Sidebar() {
  const nav = [
    { to: '/', label: 'Accueil' },
    { to: '/search', label: 'Recherche' },
    { to: '/profile', label: 'Profil' },
    { to: '/subscription', label: 'Abonnement' },
  ]
  return (
    <aside className="hidden md:flex md:w-64 shrink-0 border-r border-white/10 p-6 gap-4 flex-col">
      <div className="text-2xl font-semibold tracking-tight">YABISSO</div>
      <nav className="flex flex-col gap-2">
        {nav.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive ? 'bg-white text-black' : 'hover:bg-white/10'
              }`
            }
            end={n.to === '/'}
          >
            {n.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

function Header() {
  return (
    <header className="md:hidden sticky top-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="text-xl font-semibold">YABISSO</div>
        <nav className="flex items-center gap-4 text-sm">
          <NavLink to="/" className="hover:opacity-80" end>
            Accueil
          </NavLink>
          <NavLink to="/search" className="hover:opacity-80">
            Recherche
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

function PlayerBar() {
  const audio = useAudio()
  return (
    <div className="sticky bottom-0 z-30 border-t border-white/10 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70">
      <div className="h-20 lg:h-24 px-4 md:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 bg-white/5 rounded"></div>
          <div className="min-w-0">
            <div className="truncate text-sm">{audio.currentTrack?.title || 'Aucun titre'}</div>
            <div className="truncate text-xs text-white/60">{audio.currentTrack?.artist || '—'}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => (audio.playing ? audio.pause() : audio.play())} className="px-3 py-2 rounded bg-white text-black text-sm">{audio.playing ? 'Pause' : 'Play'}</button>
          <button className="px-3 py-2 rounded border border-white/20 text-sm">Next</button>
        </div>
      </div>
    </div>
  )
}

export default function Shell() {
  const location = useLocation()
  return (
    <AudioProvider>
      <div className="min-h-screen bg-black text-white">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-4 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </main>
            <PlayerProgress />
            <PlayerBar />
          </div>
        </div>
      </div>
    </AudioProvider>
  )
}

