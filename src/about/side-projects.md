---
permalink: about/side-projects.html
layout: default
title: Side Projects of Eric - EricCaron.com
---
# My Side Projects & Open Source Contributions
Defining "side projects" is a bit tough, because they very a lot in size yet are by no means as impressive as most other projects out there.
I had toyed with calling them "passion projects", but that would have been unfair as it would exclude the work I loved doing at [LinkUp](http://www.linkup.com/) and [TrackIf](https://trackif.com/) + all my passion projects at [Best Buy](https://developer.bestbuy.com/).

## [WaterRower Game](https://github.com/ecaron/waterrower-game)
![The rowing game in action](https://raw.githubusercontent.com/ecaron/waterrower-game/main/docs/realtime-competition.gif)

Taken from [my README file](https://github.com/ecaron/waterrower-game/blob/master/README.md), This is a simple NodeJS application that connects to a [WaterRower](https://www.waterrower.com/us/) (with the [S4](https://www.waterrower.com/us/shop/accessories/commodule.html) module) and creates charts & games that can be accessed by any web browser.

The app can run on hardware as small as a Raspberry Pi and connects to the WaterRower's S4 with a USB cable.

There are two modes: [Head-to-head competition](https://github.com/ecaron/waterrower-game#head-to-head-competition) and [Real-time Charting](https://github.com/ecaron/waterrower-game#real-time-charting). This is my way to trick myself into exercising more - so please don't pop my bubble on the ROI of this...
<div class="ui divider"></div>


## [Smart Nighlight Manager](https://github.com/ecaron/smart-nightlight-manager)
![The Nightlight in action](https://cloud.githubusercontent.com/assets/70704/12696100/d261de2c-c726-11e5-9022-74036dab6a3a.gif)

Taken from [my README file](https://github.com/ecaron/smart-nightlight-manager/blob/master/README.md), I wanted my kids to have a nightlight in their room that:
* Had programmable color
* Had an adjustable timer (turns off X minutes after being turned on)
* Had an interface to show history of button pushes (so I can see when they were awake)
* Schedule the light to change color on a schedule (so at 7am it turns to blue to indicate "Ok, it's morning time!")

Kaleb loves it, and I recently moved from [an Amazon Dash to a Raspberry Pi](https://medium.com/@ecaron/why-i-stopped-hacking-the-amazon-dash-button-and-learned-to-solder-84386a38bbd1). At some point I think this could be a resellable product because it has really been useful for parenting. But as it is now, it makes my son, my wife and me happy - so that's the goal.
<div class="ui divider"></div>


## [Bandwidth Tester & Measurer](https://github.com/ecaron/node-bandwidth-tester)
![The Graph in action](https://github.com/ecaron/node-bandwidth-tester/raw/master/remote-host-example/bandwidth-chart.png?raw=true)

Also available in [my README file](https://github.com/ecaron/node-bandwidth-tester/blob/master/README.md), this is a quick script to understand latency & bandwidth speed. There are a couple thousand versions of bandwidth tests on the web, and this is just my own. I wanted a tiny one that worked well on a [Raspberry Pi Zero](https://www.raspberrypi.org/products/pi-zero/) which reminds me I should write a blog post about how much I love mine&hellip;

<div class="ui divider"></div>


## [CaronKids.com](https://caronkids.com/)
![Homepage Screenshot](/assets/images/caronkids-screenshot.png)

In 2012, TechCrunch [ran at article](https://techcrunch.com/2012/02/15/babynotify-you-know-for-notifying-people-when-your-baby-comes/) about an app to notify people when your baby is born. Unfortunately it didn't handle timezones that well, so my family was told the wrong date, time and weight (not related to timezone, just confusions with English measurements).

I quickly bought KalebCaron.com, put the right information on it, and told the family to use it. From there I attached it to Flickr and Amazon SNS so people knew when new photos were posted. It was all in custom PHP and didn't have much flexibility. When Lucas was born, we migrated the site to CaronKids & powered by WordPress. I created a couple [WordPress plugins](https://github.com/ecaron/wordpress-child-info-widget) to extend our functionality. It does blog & photo notification, and the family loves it.
<div class="ui divider"></div>

## Open Source Contributions
The best way to read what I've been doing on open source is by checking out [my GitHub account](https://github.com/ecaron#js-contribution-activity).
