
const detectChinaLanguage = ["zh-CN", "zh-CHS", "zh-Hans", "zh-HK", "zh-MO"];
const detectChinaTimeZone = ["Asia/Shanghai", "Asia/Urumqi", "Asia/Hong_Kong", "Asia/Macau"];

function checkTimeZone() {
	if(typeof Intl !== "undefined") {
		const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
		return detectChinaTimeZone.indexOf(timeZone) >= 0;
	} else {
		// legacy browser
		const str = new Date().toString();
		return str.indexOf("\u4e2d") > 0 || str.indexOf("\u9999") > 0;
	}
}

function checkChinaLanguages() {
	if(navigator.languages) { // https://caniuse.com/mdn-api_navigator_languages
		for(let i = 0; i < navigator.languages.length; i++) {
			const l = navigator.languages[i];
			// Some Taiwanese users might also have "zh-CN" in their language list.
			// We use the following criteria to eliminate such false-positive,
			// so that it returns false if "zh-TW" comes first in the language list.
			if(l === "zh-TW") return false;
			if(detectChinaLanguage.indexOf(l) >= 0) return true;
		}
		return false;
	}
	// legacy browser
	return detectChinaLanguage.indexOf(navigator.language) >= 0;
}

/**
 * A lucky guess that we are probably in China or facing a Chinese user.
 */
export const probablyChina = checkTimeZone() || checkChinaLanguages();

export default probablyChina;