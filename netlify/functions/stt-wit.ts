import type { Handler } from '@netlify/functions'
const WIT_TOKEN = process.env.WIT_AI_TOKEN as string
export const handler: Handler = async (event) => {
  if (!WIT_TOKEN) return { statusCode: 500, body: 'Missing WIT_AI_TOKEN' }
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Use POST' }
  try {
    const contentType = event.headers['content-type'] || 'audio/webm'
    const audio = Buffer.from(event.body || '', event.isBase64Encoded ? 'base64' : 'utf8')
    const res = await fetch('https://api.wit.ai/speech?v=20240930', { method: 'POST', headers: { 'Authorization': `Bearer ${WIT_TOKEN}`, 'Content-Type': contentType }, body: audio })
    const text = await res.text(); return { statusCode: res.status, body: text }
  } catch (e:any) { return { statusCode: 500, body: e.message } }
}
