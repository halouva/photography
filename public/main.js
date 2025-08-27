/*
	Lens by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var main = (function ($) {
  var _ = {
    /**
     * Settings.
     * @var {object}
     */
    settings: {
      // Preload all images.
      preload: false,

      // Slide duration (must match "duration.slide" in _vars.scss).
      slideDuration: 500,

      // Layout duration (must match "duration.layout" in _vars.scss).
      layoutDuration: 750,

      // Thumbnails per "row" (must match "misc.thumbnails-per-row" in _vars.scss).
      thumbnailsPerRow: 2,

      // Side of main wrapper (must match "misc.main-side" in _vars.scss).
      mainSide: "right",
    },

    /**
     * Window.
     * @var {jQuery}
     */
    $window: null,

    /**
     * Body.
     * @var {jQuery}
     */
    $body: null,

    /**
     * Main wrapper.
     * @var {jQuery}
     */
    $main: null,

    /**
     * Thumbnails.
     * @var {jQuery}
     */
    $thumbnails: null,

    /**
     * Viewer.
     * @var {jQuery}
     */
    $viewer: null,

    /**
     * Toggle.
     * @var {jQuery}
     */
    $toggle: null,

    /**
     * Nav (next).
     * @var {jQuery}
     */
    $navNext: null,

    /**
     * Nav (previous).
     * @var {jQuery}
     */
    $navPrevious: null,

    /**
     * Slides.
     * @var {array}
     */
    slides: [],

    /**
     * Current slide index.
     * @var {integer}
     */
    current: null,

    /**
     * Lock state.
     * @var {bool}
     */
    locked: false,

    /**
     * Keyboard shortcuts.
     * @var {object}
     */
    keys: {
      // Escape: Toggle main wrapper.
      27: function () {
        _.toggle();
      },

      // Up: Move up.
      38: function () {
        _.up();
      },

      // Down: Move down.
      40: function () {
        _.down();
      },

      // Space: Next.
      32: function () {
        _.next();
      },

      // Right Arrow: Next.
      39: function () {
        _.next();
      },

      // Left Arrow: Previous.
      37: function () {
        _.previous();
      },
    },

    /**
     * Initialize properties.
     */
    initProperties: function () {
      // Window, body.
      _.$window = $(window);
      _.$body = $("body");

      // Thumbnails.
      _.$thumbnails = $("#thumbnails");

      _.$main = $("#main");
    },

    /**
     * Initialize events.
     */
    initEvents: function () {
      // Window.

      // Remove is-preload-* classes on load.
      _.$window.on("load", function () {
        _.$body.removeClass("is-preload-0");

        window.setTimeout(function () {
          _.$body.removeClass("is-preload-1");
        }, 100);

        window.setTimeout(function () {
          _.$body.removeClass("is-preload-2");
        }, 100 + Math.max(_.settings.layoutDuration - 150, 0));
      });

      // Disable animations/transitions on resize.
      var resizeTimeout;

      _.$window.on("resize", function () {
        _.$body.addClass("is-preload-0");
        window.clearTimeout(resizeTimeout);

        resizeTimeout = window.setTimeout(function () {
          _.$body.removeClass("is-preload-0");
        }, 100);
      });
    },

    /**
     * Initialize stuff.
     */
    init: function () {
      // Breakpoints.
      breakpoints({
        xlarge: ["1281px", "1680px"],
        large: ["981px", "1280px"],
        medium: ["737px", "980px"],
        small: ["481px", "736px"],
        xsmall: [null, "480px"],
      });

      // Everything else.
      _.initProperties();
      _.initEvents();

      _.$main.poptrox({
        baseZIndex: 20000,
        fadeSpeed: 300,
        onPopupClose: function () {
          _.$body.removeClass("modal-active");
        },
        onPopupOpen: function () {
          _.$body.addClass("modal-active");
        },
        overlayOpacity: 0,
        popupCloserText: "",
        popupHeight: 150,
        popupLoaderText: '<div class="poptrox-spinner"></div>',
        popupSpeed: 300,
        popupWidth: 150,
        selector: ".thumbnail",
        usePopupCaption: true,
        usePopupCloser: true,
        usePopupDefaultStyling: false,
        usePopupForceClose: true,
        usePopupLoader: true,
        usePopupNav: true,
        windowMargin: 50,
      });
    },
  };
  return _;
})(jQuery);
main.init();
