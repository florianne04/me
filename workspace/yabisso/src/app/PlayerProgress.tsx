import { useAudio } from './AudioProvider'

export default function PlayerProgress() {
  const audio = useAudio()
  return (
    <div className="h-1 bg-white/10">
      <div
        className="h-full bg-white transition-[width] duration-150"
        style={{ width: `${Math.round((audio.progress || 0) * 100)}%` }}
      />
    </div>
  )
}

