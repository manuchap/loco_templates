(function(window, undefined)
  {
    'use strict';
    var height_fixed_header = 0,
      speed = 500,
      moving_frequency = 15,
      links = document.getElementsByTagName('a'),
      href;
    for (var i = 0; i < links.length; i++) {
      href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
      if (href !== null && href.length > 1 && href.indexOf('#') != -1)
      {
        links[i].onclick = function() {
          var element,
            href = this.attributes.href.nodeValue.toString(),
            url = href.substr(0, href.indexOf('#')),
            id = href.substr(href.indexOf('#') + 1);
          if (element = document.getElementById(id)) {
            var hop_count = (speed - (speed % moving_frequency)) / moving_frequency,
              getScrollTopDocumentAtBegin = getScrollTopDocument(),
              gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
            if (window.history && typeof window.history.pushState == 'function') window.history.pushState({}, undefined, url + '#' + id);
            for (var i = 1; i <= hop_count; i++) {
              (function() {
                var hop_top_position = gap * i;
                setTimeout(function() { window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency * i);
              })();
            }
            return false;
          }
        };
      }
    }
    var getScrollTopElement = function(e) {
      var top = height_fixed_header * -1;
      while (e.offsetParent != undefined && e.offsetParent != null) {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
      }
      return top;
    };
    var getScrollTopDocument = function() {
      return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop : document.body.scrollTop;
    };
    var c=document.getElementById("myCanvas");
    var canvOK=1;
    try {c.getContext("2d");}
    catch (er) {canvOK=0;}
    if (canvOK==1)
     {
     var ctx=c.getContext("2d");
     ctx.fillStyle="#FF0000";
     ctx.fillRect(20,20,100,50);

     var grd=ctx.createLinearGradient(140,20,240,70);
        grd.addColorStop(0,"black");
        grd.addColorStop(1,"white");
        ctx.fillStyle=grd;
        ctx.fillRect(140,20,100,50);

        var grd2=ctx.createLinearGradient(20,90,120,90);
        grd2.addColorStop(0,"black");
        grd2.addColorStop("0.3","magenta");
        grd2.addColorStop("0.5","blue");
        grd2.addColorStop("0.6","green");
        grd2.addColorStop("0.8","yellow");
        grd2.addColorStop(1,"red");
        ctx.fillStyle=grd2;
        ctx.fillRect(20,90,100,50);

        ctx.font="30px Verdana";
        var grd3=ctx.createLinearGradient(140,20,240,90);
        grd3.addColorStop(0,"black");
        grd3.addColorStop("0.3","magenta");
        grd3.addColorStop("0.6","blue");
        grd3.addColorStop("0.8","green");
        grd3.addColorStop(1,"red");
        ctx.strokeStyle=grd3;
        ctx.strokeText("Smile!",140,120); }
  })(window);

