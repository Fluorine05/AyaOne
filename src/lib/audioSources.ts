export type ChapterAudio = { url: string, format: string, duration: number | null }
const QURAN_COM = 'https://api.quran.com/api/v4'
const ALQURAN = 'https://api.alquran.cloud/v1'
export const SURAH_INDEX: Record<string, number> = { 'Al-Ikhlāṣ':112, 'Al-Ikhlas':112, 'Al-Falaq':113, 'An-Nās':114, 'An-Nas':114, 'Al-Kawthar':108, 'Al-Kāfirūn':109, 'Al-Kafirun':109, 'Al-‘Aṣr':103, 'Al-Asr':103 }
export async function getChapterAudio_QuranCom(recitationId: number, chapter: number): Promise<ChapterAudio | null> {
  const res = await fetch(`${QURAN_COM}/chapter_recitations/${recitationId}/${chapter}`)
  if(!res.ok) return null
  const json = await res.json()
  const file = json?.audio_file
  if(!file) return null
  return { url: file.audio_url || file.url, format: 'mp3', duration: file.duration || null }
}
export async function getAyahAudio_AlQuranCloud(surah: number, ayah: number, edition='ar.alafasy'): Promise<string | null> {
  const res = await fetch(`${ALQURAN}/ayah/${surah}:${ayah}/${edition}`)
  if(!res.ok) return null
  const json = await res.json()
  return json?.data?.audio || null
}
