export type Track = {
  id: string
  title: string
  artistId: string
  albumId: string
  durationSec: number
  audioUrl?: string
}

export type Album = {
  id: string
  title: string
  artistId: string
  coverUrl?: string
  year?: number
}

export type Artist = {
  id: string
  name: string
  bio?: string
  photoUrl?: string
}

export type Plan = {
  id: string
  name: string
  price: string
  features: string[]
}

