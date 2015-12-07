(function () {
    _(
        {"status":{"code":"OK"},"jsVersion":"15.48.148","id":"558ff337e4b0b28e15f1da5e","bid":{"id":"558bab98e4b0e1d6925ab968","videos":[{"videoId":"559e8de4e4b002e0fe03cafe","name":"YBrant FashionStream","videoUrls":["http://cdn.ministerial5.com/video/content/fashion_stream_new.mp4"],"thumbnailId":"56138bedb66dfa934011c261","thumbnail":"http://cdn.vidible.tv/prod/2015-07/14/559e8de4e4b002e0fe03cafe_60x60_A_v1.png","fullsizeThumbnail":"http://cdn.vidible.tv/prod/2015-07/14/559e8de4e4b002e0fe03cafe_300x250_A_v1.png","subtitles":[],"captions":{},"metadata":{"commonRating":{"value":"G","descriptors":[],"minAge":0}},"videoSourceType":"FILE","rssVideoId":"5","studioName":"Ybrant Digital","cs":{"p":false}}]},"playerTemplate":{"initialization":"autoplay","sound":"mouseover","brandName":"Ybrant Video","initialVolume":0.001,"videosToPlay":99,"videosToRequest":1,"shuffleVideos":false,"prerollFrequency":0,"backgroundSkinLocation":{"x":0,"y":0,"w":0,"h":0},"controlsSkin":"http://cdn.vidible.tv/prod/player/swf/15.48.145/Controls16_2.swf","controlsSkinLocation":{"x":0,"y":213,"w":300,"h":0},"videoLocation":{"x":0,"y":0,"w":300,"h":250},"afterVideosUI":"next","scrubBarSkin":"http://cdn.vidible.tv/prod/2013-03/10/511e8160e4b0bf40bd0340a7_v2.swf","coveringsSkin":"http://cdn.vidible.tv/prod/player/swf/15.48.145/Coverings.swf","coveringsSkinLocation":{"x":0,"y":0,"w":300,"h":250},"surroundSkinLocation":{"x":0,"y":0,"w":0,"h":0},"playerWidth":300,"playerHeight":250,"controlsAutoPosition":true,"controlsChromeless":true,"controlsBackgroundAlpha":"1.0","controlsConfig":{"colorSchema":{"mainColor":{"backgroundAlpha":1.0}}},"nielsenSiteCampaign":"cmp185074","nielsenChannelCampaign":"cmp185270","backgroundFill":true,"backgroundColor":0,"surround3DBevelShadowColor":16777215,"surround3DBevelHighlightColor":16777215,"surroundInnerRadius":0,"surroundCornerRadius":0,"surroundHole":false,"surround3D":false,"surround3DBevelSize":0,"surround3DBevelStrength":0.0,"extras":[{"config":{"synchronousMidrolls":"true"},"region":{"x":0,"y":0,"w":0,"h":0},"blocking":true,"urls":{"FLASH":"http://cdn.vidible.tv/prod/player/swf/15.48.145/ads-fine-tuner.swf"}}],"publisherPayout":"None","publisherAmount":0.0,"metaData":{},"showLogo":false,"HLSExtra":"http://cdn.vidible.tv/prod/player/swf/15.48.145/hls-plugin.swf","IMAExtra":"http://cdn.vidible.tv/prod/player/swf/15.48.145/ima-ad-module.swf","YuMeExtra":"http://cdn.vidible.tv/prod/player/swf/15.48.145/yume-ad-module.swf","FreeWheelExtra":"http://cdn.vidible.tv/prod/player/swf/15.48.145/free-wheel-module.swf","VASTExtra":"http://cdn.vidible.tv/prod/player/swf/15.48.145/vast-ad-engine.swf","PlayerAdSystem":"http://cdn.vidible.tv/prod/player/swf/15.48.145/vidible-ad-server.swf","UIExtra":"http://cdn.vidible.tv/prod/player/swf/15.48.145/controls-sticky.swf","AgeGateExtra":"http://cdn.vidible.tv/prod/player/swf/15.48.145/age-gate.swf","SubtitlesExtra":"http://cdn.vidible.tv/prod/player/swf/15.48.145/subtitles.swf","ClickExtra":"http://cdn.vidible.tv/prod/player/swf/15.48.145/click-throughs.swf"},"adSettings":{"podSize":2,"prerollInterleave":2,"midrollTiming":"10%;20%;30%;40%;50%;60%;75%","maxAdsCount":10,"softTimeout":0.4,"hardTimeout":3.2,"startTimeout":19.200000000000003,"domainOptimisation":true,"adStrategy":"ADSET_BASED","companions":[],"aeg":[],"asids":["558ff19de4b0fe039c83981c"]},"playerWidget":{"playerType":"SMART","url":"http://cdn.vidible.tv/prod/player/swf/15.48.145/player-vast.swf","adOnly":false,"isAol":false},"geo":{"country":"usa","region":"ca","zipCode":"95134","areaCode":"408","connSpeed":"broadband"},"brandedContent":false}
    );
    function _(json) {
                    /*
     Developed by Robert Nyman, http://www.robertnyman.com
     Code/licensing: http://code.google.com/p/getelementsbyclassname/
     */
            var getElementsByClassName = function (className, tag, elm) {
                if (document.getElementsByClassName) {
                    getElementsByClassName = function (className, tag, elm) {
                        elm = elm || document;
                        var elements = elm.getElementsByClassName(className),
                            nodeName = (tag) ? new RegExp("\\b" + tag + "\\b", "i") : null,
                            returnElements = [],
                            current;
                        for (var i = 0, il = elements.length; i < il; i += 1) {
                            current = elements[i];
                            if (!nodeName || nodeName.test(current.nodeName)) {
                                returnElements.push(current);
                            }
                        }
                        return returnElements;
                    };
                }
                else if (document.evaluate) {
                    getElementsByClassName = function (className, tag, elm) {
                        tag = tag || "*";
                        elm = elm || document;
                        var classes = className.split(" "),
                            classesToCheck = "",
                            xhtmlNamespace = "http://www.w3.org/1999/xhtml",
                            namespaceResolver = (document.documentElement.namespaceURI === xhtmlNamespace) ? xhtmlNamespace : null,
                            returnElements = [],
                            elements,
                            node;
                        for (var j = 0, jl = classes.length; j < jl; j += 1) {
                            classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]";
                        }
                        try {
                            elements = document.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null);
                        }
                        catch (e) {
                            elements = document.evaluate(".//" + tag + classesToCheck, elm, null, 0, null);
                        }
                        while ((node = elements.iterateNext())) {
                            returnElements.push(node);
                        }
                        return returnElements;
                    };
                }
                else {
                    getElementsByClassName = function (className, tag, elm) {
                        tag = tag || "*";
                        elm = elm || document;
                        var classes = className.split(" "),
                            classesToCheck = [],
                            elements = (tag === "*" && elm.all) ? elm.all : elm.getElementsByTagName(tag),
                            current,
                            returnElements = [],
                            match;
                        for (var k = 0, kl = classes.length; k < kl; k += 1) {
                            classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"));
                        }
                        for (var l = 0, ll = elements.length; l < ll; l += 1) {
                            current = elements[l];
                            match = false;
                            for (var m = 0, ml = classesToCheck.length; m < ml; m += 1) {
                                match = classesToCheck[m].test(current.className);
                                if (!match) {
                                    break;
                                }
                            }
                            if (match) {
                                returnElements.push(current);
                            }
                        }
                        return returnElements;
                    };
                }
                return getElementsByClassName(className, tag, elm);
            };
            var cl = "vdb_558ff337e4b0b28e15f1da5e53180f5de4b066208a63279a";
            var c = getElementsByClassName(cl, null, document.body)[0];
            c.className = c.className.replace(new RegExp("(\\s*)" + cl + "\\s*", "g"), "$1");
                var p = (c.getAttribute("vdb_params") || "") + "";

        var cb = /(?:[\?&]|^)m\.cb=(.*?)(&m\..*?=|$)/g.exec(p);
        cb = cb && cb[1] || Math.random();
        var ur = /(?:[\?&]|^)m\.url=(.*?)(&m\..*?=|$)/g.exec(p);
        ur = ur && ur[1];
        function ee(pn, v, dv) {
            var ve = dv && dv(v) || v;
            if (ve == v) {
                try {
                    ve = decodeURIComponent(v);
                    ve = encodeURIComponent(ve);
                } catch (e) {
                    ve = encodeURIComponent(v);
                }
            }
            p = p.replace("m." + pn + "=" + v, "m." + pn + "=" + ve);
            v = ve;
            return v;
        }

        ee("url", ur);
        p += p && "&";
        var ifr = window != top;
        var r = encodeURIComponent(ifr ? document.referrer : location.href);
        var i = document.createElement("img");
        var it = new Date().getTime();
                                    var si = c.getElementsByTagName('img');
                var srcSubstr = 'http://trk.vidible.tv/trk/impression.gif';
                var isImpressionExist = false;
                for (var ik = 0; ik < si.length; ik++) {
                    if (si[ik].src.indexOf(srcSubstr) !== -1) {
                        isImpressionExist = true;
                        break;
                    }
                }
                if (!isImpressionExist) {
                    i.src = "http://trk.vidible.tv/trk/impression.gif?pid=558ff337e4b0b28e15f1da5e&bcid=53180f5de4b066208a63279a&" + p + "ifr=" + ifr + "&cb=" + cb + "&r=" + r + "&recover=true";
                    i = document.createElement("img");
                    var et = encodeURIComponent('player error');
                    var st = encodeURIComponent('workflow error');
                    var dt = encodeURIComponent('Static impression was removed');
                    i.src = "http://trk.vidible.tv/trk/error.gif?pid=558ff337e4b0b28e15f1da5e&bcid=53180f5de4b066208a63279a&" + p + "ifr=" + ifr + "&cb=" + cb + "&r=" + r + "&et=" + et + "&st=" + st + "&dt=" + dt;
                    i = document.createElement("img");
                }
                            i.src = "http://trk.vidible.tv/trk/js-loaded.gif?pid=558ff337e4b0b28e15f1da5e&bcid=53180f5de4b066208a63279a&" + p + "ifr=" + ifr + "&cb=" + cb + "&r=" + r;
                var s = document.createElement("script");
        s.type = "text/javascript";
                    s.src = "http://cdn.vidible.tv/prod/player/js/15.48.148/vidible-min.js?pid=558ff337e4b0b28e15f1da5e&bcid=53180f5de4b066208a63279a&" + p + "ifr=" + ifr + "&cb=" + cb + "&r=" + r;
                s.onload = function () {
                            var pl = vidible.createPlayer({apid: "", pid: "558ff337e4b0b28e15f1da5e", bcid: "53180f5de4b066208a63279a",  params: p, content: c, it: it, site: r}, json, {"cdn":"http://cdn.vidible.tv/prod/","trk":"http://trk.vidible.tv/trk/","ds":"http://delivery.vidible.tv/","ads":"http://ads.vidible.tv/","adt":"http://ads.vidible.tv/","ptv":"http://portal.vidible.tv/"});
                                        var i = document.createElement("img");
                i.src = "http://trk.vidible.tv/trk/js-started.gif?pid=558ff337e4b0b28e15f1da5e&bcid=53180f5de4b066208a63279a&" + p + "ifr=" + ifr + "&cb=" + cb + "&r=" + r;
                        var clb =  window['vidibleInitialize'];
            if (clb) {
                clb(pl);
            }
            s.onload = s.onreadystatechanged = function () {
            };
        };
        s.onreadystatechange = function () {
            if (s.readyState == 'complete' || s.readyState == 'loaded') {
                s.onload();
            }
        };
        c.appendChild(s);
    }
})();
