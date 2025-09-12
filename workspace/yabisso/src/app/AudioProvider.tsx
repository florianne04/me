import { createContext, useCallback, useContext, useMemo, useRef, useState, useEffect } from 'react'
import WaveSurfer from 'wavesurfer.js'

type AudioState = {
  currentTrack?: { id: string; title: string; artist?: string; url?: string }
  playing: boolean
  progress: number // 0..1
}

type AudioApi = {
  load: (track: AudioState['currentTrack']) => void
  play: () => void
  pause: () => void
  seek: (ratio: number) => void
}

const AudioCtx = createContext<(AudioState & AudioApi) | null>(null)

export function useAudio() {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error('AudioProvider missing')
  return ctx
}

export default function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const waveRef = useRef<WaveSurfer | null>(null)
  const [state, setState] = useState<AudioState>({ playing: false, progress: 0 })

  useEffect(() => {
    audioRef.current = new Audio()
    return () => { audioRef.current?.pause(); audioRef.current = null }
  }, [])

  const load = useCallback((track: AudioState['currentTrack']) => {
    if (!audioRef.current) return
    setState((s) => ({ ...s, currentTrack: track, progress: 0, playing: false }))
    audioRef.current.src = track?.url || ''
    audioRef.current.load()
  }, [])

  const play = useCallback(() => { audioRef.current?.play(); setState((s) => ({ ...s, playing: true })) }, [])
  const pause = useCallback(() => { audioRef.current?.pause(); setState((s) => ({ ...s, playing: false })) }, [])
  const seek = useCallback((r: number) => { if (audioRef.current) audioRef.current.currentTime = r * (audioRef.current.duration || 0) }, [])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onTime = () => setState((s) => ({ ...s, progress: a.duration ? a.currentTime / a.duration : 0 }))
    const onEnd = () => setState((s) => ({ ...s, playing: false, progress: 1 }))
    a.addEventListener('timeupdate', onTime)
    a.addEventListener('ended', onEnd)
    return () => { a.removeEventListener('timeupdate', onTime); a.removeEventListener('ended', onEnd) }
  }, [])

  const value = useMemo(() => ({ ...state, load, play, pause, seek }), [state, load, play, pause, seek])
  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>
}

