export async function transcribeWithServer(blob: Blob): Promise<string> {
  const res = await fetch('/.netlify/functions/stt-wit', { method: 'POST', headers: { 'Content-Type': blob.type || 'audio/webm' }, body: blob })
  if(!res.ok) throw new Error(await res.text())
  try { const json = await res.json() as any; return json?.text || json?._text || JSON.stringify(json) } catch { return await res.text() }
}
