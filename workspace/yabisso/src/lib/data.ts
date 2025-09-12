import demo from '../data/demo.json'
import type { Album, Artist, Track, Plan } from '../types'

export const artists: Artist[] = demo.artists as any
export const albums: Album[] = demo.albums as any
export const tracks: Track[] = demo.tracks as any
export const plans: Plan[] = demo.plans as any

export function getArtist(id: string) {
  return artists.find((a) => a.id === id)
}

export function getAlbum(id: string) {
  return albums.find((a) => a.id === id)
}

export function getTracksByAlbum(albumId: string) {
  return tracks.filter((t) => t.albumId === albumId)
}

export function getAlbumsByArtist(artistId: string) {
  return albums.filter((a) => a.artistId === artistId)
}

