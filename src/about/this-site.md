---
permalink: about/this-site.html
---
# Resources Powering This Site

Over the course of this domain, it has been [powered by WordPress](https://wordpress.org/), made up of homebrewed PHP scripts, and redirecting to other social media accounts of mine.

I've heard a lot about [static site generators](https://www.staticgen.com/), and there are many of them out there. So I decided to take one for a spin to see if it helps me keep the site looking modern, up-to-date, and running with minimal overhead. So far I've been very happy with the results.

Don't know what a static site generator site? Basically it lets you have bunch of content, put it all in a consistent theme, and then renders a bunch of basic HTML, Javascript & CSS files that are easy for any web server to host with the added benefit of massive scaling while having no server-side security risks.

## The Components
* [Harp](https://harpjs.com/) - This is a fantastic Node.js framework that lets me compile Markdown, EJS & LESS files into static components
* [Semantic UI](http://semantic-ui.com/) - Like [Bootstrap](http://getbootstrap.com/) and [Zurb Foundation](http://foundation.zurb.com/), Semantic UI provides a fresh look to the website while avoiding any cookie-cutter appearance
* [GitHub](https://github.com/ecaron/ericcaron.com) - Which hosts all the raw files that makes up the static generator

## How It Works
1. Using git (either from the command line or on GitHub.com), I make a change to one of the files on the site
2. [GitHub Webhooks](https://developer.github.com/webhooks/) inform my web server that there is a change to the site
3. Upon hearing there is a change to the site, my server downloads the newest version of the codebase from GitHub
4. The site runs `grunt build` to convert the Semantic UI templates in CSS, and `harp compile` to convert the Markdown & EJS files to flat HTML
5. The output is stored in a directory on the webserver, and [nginx](http://nginx.org/) keeps serving those files without there ever being any downtime

This formula gives me the flexibility of making updates from my phone, using GitHub's mobile applications, and having most of my content in easy-to-read [Markdown](http://commonmark.org/). So far I'm thrilled with this experiment, and I think [Harp](https://harpjs.com/) is a brilliant solution for anyone else wanting a static website.
