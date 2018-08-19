!function(t){"use strict";if("undefined"==typeof window)throw new Error("Could not find DOM window object.");"function"==typeof define&&define.amd?define(["jquery",window],t):"object"==typeof exports?t(require("jquery"),window):t(jQuery,window)}(function(n,e,i){var s=function(t,e){this.element=t,this.settings=n.extend({},s.defaults,e),this.settings.fullPage=this.element.is("body"),this.init(),this.settings.start&&this.start()};s.defaults={overlay:i,zIndex:i,message:"Loading...",theme:"light",shownClass:"loading-shown",hiddenClass:"loading-hidden",stoppable:!1,start:!0,onStart:function(t){t.overlay.fadeIn(150)},onStop:function(t){t.overlay.fadeOut(150)},onClick:function(){}},s.setDefaults=function(t){s.defaults=n.extend({},s.defaults,t)},n.extend(s.prototype,{init:function(){this.isActive=!1,this.overlay=this.settings.overlay||this.createOverlay(),this.resize(),this.attachMethodsToExternalEvents(),this.attachOptionsHandlers()},createOverlay:function(){var t=n('<div class="loading-overlay loading-theme-'+this.settings.theme+'"><div class="loading-overlay-content">'+this.settings.message+"</div></div>").addClass(this.settings.hiddenClass).hide().appendTo("body"),e=this.element.attr("id");return e&&t.attr("id",e+"_loading-overlay"),t},attachMethodsToExternalEvents:function(){var t=this;t.element.on("loading.start",function(){t.overlay.removeClass(t.settings.hiddenClass).addClass(t.settings.shownClass)}),t.element.on("loading.stop",function(){t.overlay.removeClass(t.settings.shownClass).addClass(t.settings.hiddenClass)}),t.settings.stoppable&&t.overlay.on("click",function(){t.stop()}),t.overlay.on("click",function(){t.element.trigger("loading.click",t)}),n(e).on("resize",function(){t.resize()}),n(function(){t.resize()})},attachOptionsHandlers:function(){var n=this;n.element.on("loading.start",function(t,e){n.settings.onStart(e)}),n.element.on("loading.stop",function(t,e){n.settings.onStop(e)}),n.element.on("loading.click",function(t,e){n.settings.onClick(e)})},calcZIndex:function(){return this.settings.zIndex!==i?this.settings.zIndex:(parseInt(this.element.css("z-index"))||0)+1+this.settings.fullPage},resize:function(){var t=this,e=t.element,n=e.outerWidth(),i=e.outerHeight();this.settings.fullPage&&(n=i="100%"),this.overlay.css({position:t.settings.fullPage?"fixed":"absolute",zIndex:t.calcZIndex(),top:e.offset().top,left:e.offset().left,width:n,height:i})},start:function(){this.isActive=!0,this.resize(),this.element.trigger("loading.start",this)},stop:function(){this.isActive=!1,this.element.trigger("loading.stop",this)},active:function(){return this.isActive},toggle:function(){this.active()?this.stop():this.start()},destroy:function(){this.overlay.remove()}});var o="jquery-loading";n.fn.loading=function(e){return this.each(function(){var t=n.data(this,o);t?e===i?t.start():"string"==typeof e?t[e].apply(t):(t.destroy(),n.data(this,o,new s(n(this),e))):e!==i&&"object"!=typeof e&&"start"!==e&&"toggle"!==e||n.data(this,o,new s(n(this),e))})},n.fn.Loading=function(t){var e=n(this).data(o);return e&&t===i||n(this).data(o,e=new s(n(this),t)),e},n.expr[":"].loading=function(t){var e=n.data(t,o);return!!e&&e.active()},n.Loading=s});