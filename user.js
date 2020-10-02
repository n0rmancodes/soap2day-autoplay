// ==UserScript==
// @name           Soap2Day Autoplay
// @version        1.0
// @description    Autoplay soap2play shows and movies when the page loads. Written in Tampermonkey.
// @author         n0rmancodes
// @include        https://soap2day.to/movie_*
// @include        https://soap2day.to/episode_*
// @include        https://soap2day.im/movie_*
// @include        https://soap2day.im/episode_*
// @include        https://soap2day.nl/movie_*
// @include        https://soap2day.nl/episode_*
// @include        https://soap2day.se/movie_*
// @include        https://soap2day.se/episode_*
// @grant          none
// @license        The Unlicense
// @source         https://github.com/n0rmancodes/soap2day-autoplay
// @namespace      github.com
// @namespace      greasyfork.org
// ==/UserScript==

(function() {
    'use strict';
        if (document.querySelector("video")) {
            document.querySelector("video").play()
        } else {
            var a = setInterval(function () {
                if (document.querySelector("video")) {
                    document.querySelector("video").play();
                    clearInterval(a);
                }
            }, 2000)
        }
})();
