
# probably-china

> A lucky guess that we are probably in China or facing a Chinese user.

This is a simple package for the browser environment that makes a quick guess
to see if the current webpage is running in China, or if the user is from China,
based on the available browser info. It currently uses two strategies:

1. Check if the current browser favors simplified Chinese or related languages.
2. Check if the current timezone is one of the Chinese timezones.

The use case for this package is not to avoid showing information that are sensitive in China.

## Usage

Install the package:

```bash
pnpm add probably-china
```

And it exports a single boolean constant:

```js
import { probablyChina } from "probably-china";
```