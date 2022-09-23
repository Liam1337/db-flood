# Database Flood

**Educational Purposes ONLY!**
I do not condone or encourage unauthorized or illegal use of this script and will not be held responsible for such use cases.

DB Chromium Emulation Flood Using [puppeteer]](https://www.npmjs.com/package/puppeteer).

[![NPM](https://nodei.co/npm/puppeteer.png)](https://www.npmjs.com/package/puppeteer)

## Basic Usage

node main.js https://example.com/auth 10
Usage: node main <register> <how many users>

### Import All Packages To Your Project

You NEED Node
https://nodejs.org/en/download/

```js
Install:
npm i puppeteer
npm i fs
npm i colors
npm i node-random-name

(Only on Linux)
apt install chromium-browser
```

### Replace <register> With Your Victim
Example:
node main.js https://liam1337.space/auth 10 

## Change the input for each form-group, example:
![image](https://user-images.githubusercontent.com/94720916/192049454-ce3d843a-d14b-4186-b02f-5674dab15b15.png)


### Linux
UNDER LINUX ACTIVATE THE DIRECTORY OF THE CHROMIUM BROWSER AND CHANGE THE HEADLESS MODE (true)
   and then change the path of the Chromium browser in the puppeteer.launch() function

   Windows: executablePath: "./node_modules/puppeteer/.local-chromium/win64-982053/chrome-win/chrome.exe",
   Linux  : executablePath: "/usr/bin/chromium-browser",

   Set headless: false to true  <- ONLY Linux

* `Feel Free To Use The Source`
* `Source Made By Liam1337`

### Response Object

| Error   | Type            | Note                                                                    |
|---------|-----------------|-------------------------------------------------------------------------|
|   401   | `Unauthorized`  | No Access To The Requested Web Page                                     |
|   404   | `Not Found`     | Incorrect URL Request                                                   |
|  1020   | `Access Denied` | The Request Is Blocked By For Example A Firewall                        |
