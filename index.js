
const detectChinaLanguage = ["zh-CN", "zh-CHS", "zh-Hans", "zh-HK", "zh-MO"];
const detectChinaTimeZone = ["Asia/Shanghai", "Asia/Urumqi", "Asia/Hong_Kong", "Asia/Macau"];
const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;

/**
 * A lucky guess that we are probably in China or facing a Chinese user.
 */
export const probablyChina =
	detectChinaTimeZone.includes(timeZone) ||
	detectChinaLanguage.includes(navigator.language) ||
	navigator.languages.some(l => detectChinaLanguage.includes(l));

export default probablyChina;