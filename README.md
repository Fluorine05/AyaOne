# AyaWave One Online
All-in-one Arabic learning app with voice and Quran audio integrations, Netlify Functions for iOS STT fallback, and PWA support.

## Setup quick
1. Create Supabase project; set env: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY in Netlify.
2. (Optional STT) On Netlify set WIT_AI_TOKEN for the Wit.ai serverless function.
3. Deploy on Netlify: build `npm run build`, publish `dist`.
4. On iPhone open the site in Safari and Add to Home Screen.
