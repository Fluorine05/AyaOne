const DIACRITICS = /[\u064B-\u065F\u0670\u06D6-\u06ED]/g
export function stripDiacritics(s:string){ return s.normalize('NFC').replace(DIACRITICS,'') }
export function normalizeArabic(s:string){
  return stripDiacritics(s)
    .replace(/[\u0622\u0623\u0625]/g,'ا')
    .replace(/\u0649/g,'ي')
    .replace(/\u0629/g,'ه')
}
const map: Record<string,string> = {'ا':'a','ب':'b','ت':'t','ث':'th','ج':'j','ح':'h','خ':'kh','د':'d','ذ':'dh','ر':'r','ز':'z','س':'s','ش':'sh','ص':'s','ض':'d','ط':'t','ظ':'z','ع':'`','غ':'gh','ف':'f','ق':'q','ك':'k','ل':'l','م':'m','ن':'n','ه':'h','و':'w','ي':'y','ء':''','أ':'a','إ':'i','ؤ':'u','ئ':'i','ى':'a','ة':'h'}
export function transliterate(ar:string){ return stripDiacritics(ar).split('').map(ch => map[ch] ?? ch).join('') }
export function fuzzyEqual(a:string,b:string){ return normalizeArabic(a) === normalizeArabic(b) }
