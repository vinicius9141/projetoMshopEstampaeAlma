/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./templates/_shared/assets/scripts/cookie-disclaimer.js":
/*!***************************************************************!*\
  !*** ./templates/_shared/assets/scripts/cookie-disclaimer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var googleAnalyticsHandler = __webpack_require__(/*! ./utils/google-analytics */ \"./templates/_shared/assets/scripts/utils/google-analytics.js\");\n\nvar _require = __webpack_require__(/*! ./utils/constants/googleAnalytics */ \"./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js\"),\n    EVENT = _require.EVENT,\n    TYPE = _require.TYPE,\n    EVENT_CATEGORY = _require.EVENT_CATEGORY,\n    EVENT_ACTION = _require.EVENT_ACTION;\n\nvar cookieDisclaimerHandler = function cookieDisclaimerHandler() {\n  var cookieDisclaimerBanner = document.querySelector(\"[data-js='cookieDisclaimerBanner']\");\n  var cookieDisclaimerButton = document.querySelector(\"[data-js='cookieDisclaimerButton']\");\n  var cookieDisclaimerMoreInfo = document.querySelector(\"[data-js='cookieDisclaimerMoreInfo']\");\n  var siteId = cookieDisclaimerButton.getAttribute(\"site-id\").toLowerCase();\n  var cookieName = \"_ml_cbanner_\".concat(siteId);\n\n  var setHideBanner = function setHideBanner() {\n    cookieDisclaimerBanner.style.display = \"none\";\n  };\n\n  var setShowBanner = function setShowBanner() {\n    cookieDisclaimerBanner.style.display = \"flex\";\n  };\n\n  var setDisclaimerCookie = function setDisclaimerCookie() {\n    var expirarionTime = 60 * 60 * 24 * 365 * 3; // Three years\n\n    var disclaimerCookie = \"\".concat(cookieName, \"=1; max-age=\").concat(expirarionTime, \"; path=/;\");\n    document.cookie = disclaimerCookie; // once the cookie is set, hide the banner\n\n    setHideBanner();\n  };\n\n  if (cookieDisclaimerButton) {\n    cookieDisclaimerButton.addEventListener(\"click\", function () {\n      setDisclaimerCookie();\n      googleAnalyticsHandler(EVENT.SEND, TYPE.EVENT, EVENT_CATEGORY.LGPD, EVENT_ACTION.ACCEPT);\n    });\n  }\n\n  if (cookieDisclaimerMoreInfo) {\n    cookieDisclaimerMoreInfo.addEventListener(\"click\", function () {\n      googleAnalyticsHandler(EVENT.SEND, TYPE.EVENT, EVENT_CATEGORY.LGPD, EVENT_ACTION.MORE_INFO);\n    });\n  }\n\n  if (document.cookie.indexOf(\"\".concat(cookieName, \"=\")) === -1) {\n    setShowBanner();\n  }\n};\n\nmodule.exports = cookieDisclaimerHandler;\n\n//# sourceURL=webpack:///./templates/_shared/assets/scripts/cookie-disclaimer.js?");

/***/ }),

/***/ "./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js":
/*!***********************************************************************************!*\
  !*** ./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  EVENT: {\n    SEND: 'send',\n    SET: 'set'\n  },\n  TYPE: {\n    EVENT: 'event',\n    PAGE: 'page'\n  },\n  EVENT_CATEGORY: {\n    LGPD: 'LGPD'\n  },\n  EVENT_ACTION: {\n    ACCEPT: 'ACCEPT',\n    MORE_INFO: 'MORE_INFO'\n  }\n};\n\n//# sourceURL=webpack:///./templates/_shared/assets/scripts/utils/constants/googleAnalytics/index.js?");

/***/ }),

/***/ "./templates/_shared/assets/scripts/utils/google-analytics.js":
/*!********************************************************************!*\
  !*** ./templates/_shared/assets/scripts/utils/google-analytics.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var googleAnalyticsHandler = function googleAnalyticsHandler(event, hitType, eventCategory, eventAction) {\n  if (meli_ga && typeof meli_ga !== 'undefined') {\n    meli_ga(event, {\n      hitType: hitType,\n      eventCategory: eventCategory,\n      eventAction: eventAction\n    });\n  }\n};\n\nmodule.exports = googleAnalyticsHandler;\n\n//# sourceURL=webpack:///./templates/_shared/assets/scripts/utils/google-analytics.js?");

/***/ }),

/***/ "./templates/simple/assets/scripts/menu/src/index.js":
/*!***********************************************************!*\
  !*** ./templates/simple/assets/scripts/menu/src/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cookieDisclaimerHandler = __webpack_require__(/*! ../../../../../_shared/assets/scripts/cookie-disclaimer */ \"./templates/_shared/assets/scripts/cookie-disclaimer.js\");\n\n!function () {\n  var setLocationValue = function setLocationValue(url) {\n    window.location = \"/\" + encodeURIComponent(url);\n  };\n\n  var submitElement;\n  submitElement = document.getElementById(\"search-form\");\n\n  if (submitElement) {\n    submitElement.onsubmit = function (event) {\n      event.preventDefault();\n      var searchInput = document.getElementById(\"search-input\");\n\n      if (searchInput.value) {\n        setLocationValue(searchInput.value);\n      }\n    };\n  }\n\n  submitElement = document.getElementById(\"search-form-responsive\");\n\n  if (submitElement) {\n    submitElement.onsubmit = function (event) {\n      event.preventDefault();\n      var searchInput = document.getElementById(\"search-input-responsive\");\n\n      if (searchInput.value) {\n        setLocationValue(searchInput.value);\n      }\n    };\n  }\n\n  ;\n  cookieDisclaimerHandler();\n}();\nvar navSearchInput = document.getElementsByClassName(\"nav-search-input\")[0];\nvar navSearchButton = document.getElementById(\"nav-search-button\");\n\nif (navSearchButton && navSearchInput) {\n  navSearchButton.addEventListener(\"click\", function (event) {\n    var visibility = navSearchInput.style.visibility;\n\n    if (!visibility) {\n      event.preventDefault();\n      navSearchInput.style.visibility = \"visible\";\n      navSearchInput.style.opacity = \"1\";\n    }\n\n    ;\n  });\n}\n/**\n * Adding an observer to the search input to detect when it is visible\n * and then focus on it.\n */\n\n\n!function () {\n  var searchInput = document.getElementsByClassName(\"nav-search-input\")[0];\n  if (!searchInput) return;\n  var options = {\n    threshold: [1.0],\n    trackVisibility: true,\n    delay: 100\n  };\n  var observer = new IntersectionObserver(function (entries) {\n    entries.forEach(function (entry) {\n      if (!entry.isVisible) return; // Only trigger on visible entry\n\n      searchInput.focus(); // Focus the input\n    });\n  }, options);\n  observer.observe(searchInput); // Init the observer\n}(); // Menu actions\n\n(function () {\n  var displayHide = \"none\";\n  var displayShow = \"block\";\n  var displayShowFlex = \"flex\";\n  var menuButton = document.getElementById(\"hamburguer-menu\");\n  var navList = document.getElementById(\"nav-list\");\n  var navListChildren = navList.children;\n  var navPopover = document.getElementById(\"popover-menu\");\n  var navPopoverList = document.getElementById(\"nav-popover-list\");\n  var navPopoverListChildren = navPopoverList.children;\n  var popoverSeeMoreCategories = [];\n  var switchButton = document.getElementById(\"mobile-categories-menu-switch\");\n  var listItemArray = document.getElementsByClassName(\"nav-default-list__item\");\n\n  for (var elementIndex = 0; elementIndex < listItemArray.length; elementIndex++) {\n    listItemArray[elementIndex].style.visibility = \"visible\";\n    listItemArray[elementIndex].style.opacity = \"1\";\n  }\n\n  function toggle() {\n    var body = document.body;\n    var responsiveMenu = document.getElementById(\"responsive-menu\");\n    var visibility = \"visibility\";\n    var transition = \"0.2s\";\n    var opacityHidden = \"0\";\n    var opacityVisible = \"1\";\n    var leftHidden = \"-95vw\";\n    var leftVisible = \"0\";\n    var visibilityHidden = \"hidden\";\n    var visibilityVisible = \"visible\";\n    var bodyBlockScroll = \"body--block-scroll\";\n    var responsiveMenuVisibility = window.getComputedStyle(responsiveMenu, null).getPropertyValue(visibility);\n    responsiveMenu.style.transition = transition;\n\n    if (responsiveMenuVisibility === visibilityHidden) {\n      responsiveMenu.style.visibility = visibilityVisible;\n      responsiveMenu.style.opacity = opacityVisible;\n      responsiveMenu.style.left = leftVisible;\n      body.classList.add(bodyBlockScroll);\n    } else {\n      responsiveMenu.style.visibility = visibilityHidden;\n      responsiveMenu.style.opacity = opacityHidden;\n      responsiveMenu.style.left = leftHidden;\n      body.classList.remove(bodyBlockScroll);\n    }\n  }\n\n  function seeMoreCategoriesHandler() {\n    var button = document.getElementById('nav-default__see-more');\n    var saleButton = document.getElementById('nav-default__sale-link');\n    var howBuyButton = document.querySelector('.how-buy__button');\n    var navListChildren = navList.children;\n    var countWidth = 0;\n    var saleButtonWidth = saleButton ? saleButton.clientWidth : 0;\n    var howBuyButtonWidth = howBuyButton ? howBuyButton.clientWidth : 0;\n    var max = navList.clientWidth - (saleButtonWidth + button.clientWidth + howBuyButtonWidth);\n    var exceptions = [\"nav-default__hamburger-button\", \"nav-default__see-more\", \"nav-default__sale-link\", \"how-buy__button\"];\n\n    for (var i = 0; i < navListChildren.length; i++) {\n      if (exceptions.indexOf(navListChildren[i].id) === -1) {\n        var condition;\n\n        if (i === navListChildren.length - exceptions.length && !exceptions) {\n          condition = navListChildren[i].clientWidth <= max;\n        } else {\n          condition = navListChildren[i].clientWidth + countWidth <= max;\n        }\n\n        if (condition) {\n          countWidth += navListChildren[i].clientWidth;\n        } else {\n          popoverSeeMoreCategories.push(navListChildren[i].textContent);\n          navListChildren[i].setAttribute('style', 'display: none !important');\n        }\n      }\n    }\n\n    if (!popoverSeeMoreCategories.length) {\n      button.setAttribute('style', 'display: none !important');\n    }\n  } // Popover methods\n\n\n  function showPopover() {\n    navPopover.style.display = displayShow;\n  }\n\n  function hidePopover() {\n    navPopover.style.display = displayHide;\n  }\n\n  function cleanPopoverData() {\n    var popoverDataNodes = document.getElementsByClassName(\"nav-default-list--horizontal__item\");\n    var arrPopoverData = [].slice.call(popoverDataNodes);\n    arrPopoverData.forEach(function (item) {\n      item.style.display = displayHide;\n    });\n  }\n\n  function setPopoverData(item, popoverSeeMoreCategories) {\n    var popoverCategories = document.querySelectorAll('[data-toggle=\"' + item.dataset.js + '\"]');\n\n    if (item.id === \"nav-default__see-more\") {\n      for (var e = 0; e < popoverSeeMoreCategories.length; e++) {\n        for (var j = 0; j < navPopoverListChildren.length; j++) {\n          if (navPopoverListChildren[j].textContent.replace(/\\s/g, '').indexOf(popoverSeeMoreCategories[e].replace(/\\s/g, '')) !== -1) {\n            navPopoverListChildren[j].setAttribute('style', 'display: block !important');\n          }\n        }\n      }\n    }\n\n    if (popoverCategories.length) {\n      popoverCategories[0].style.display = displayShowFlex;\n    }\n  }\n\n  function hoverStylesHandler(item) {\n    for (var i = 0; i < navListChildren.length; i++) {\n      navListChildren[i].style.boxShadow = 'none';\n    }\n\n    if (item && item.getAttribute('has-childs') !== '[]') {\n      var popoverCategories = document.querySelectorAll('[data-toggle=\"' + item.dataset.js + '\"]');\n      var customTextColor = getComputedStyle(document.querySelector(\"#nav-list > li:nth-child(2) > a > span\")).color;\n\n      if (popoverCategories[0] || item.id === \"nav-default__see-more\" || item.getAttribute('data-js') === 'how-buy__button') {\n        item.style.boxShadow = 'inset 0 -2px 0 ' + customTextColor;\n      }\n    }\n  }\n\n  function popoverHandler(popoverSeeMoreCategories) {\n    var navListArray = [].slice.call(navList.children);\n    navListArray.forEach(function (item) {\n      item.addEventListener(\"mouseover\", function () {\n        cleanPopoverData();\n        showPopover();\n        setPopoverData(this, popoverSeeMoreCategories);\n        hoverStylesHandler(this);\n      });\n    }, this);\n    navPopover.addEventListener(\"mouseleave\", function () {\n      hidePopover();\n      hoverStylesHandler();\n    });\n  }\n\n  if (switchButton.checked) {\n    toggle();\n  }\n\n  menuButton.addEventListener(\"click\", toggle);\n  seeMoreCategoriesHandler();\n  popoverHandler(popoverSeeMoreCategories); //Mobile menu actions\n\n  var categoriesOption = document.querySelectorAll('[data-js=\"categories-toggle\"]'); // this conditional fix chrome 43 version warning\n\n  if (categoriesOption && categoriesOption.length > 0) {\n    categoriesOption.forEach(function (item) {\n      item.addEventListener(\"click\", toggleSubItems);\n    }, this);\n  }\n\n  function toggleSubItems() {\n    var displayHidden = \"none\";\n    var displayVisible = \"block\";\n    var subItemes = document.querySelectorAll('[data-toggle=\"' + this.id + '\"]');\n    subItemes.forEach(function (item) {\n      item.style.display = this.checked ? displayVisible : displayHidden;\n    }, this);\n  }\n\n  ;\n\n  var showMenuItems = function showMenuItems() {\n    var menuElement = document.querySelector('.nav-default-header__bounds');\n    var logoElement = document.querySelector('.nav-default-header__title');\n    var navIconsElement = document.querySelector('.nav-default-header__nav-icons');\n    var navlistElement = document.querySelector('.nav-default-list');\n    var menuSize = parseInt(window.getComputedStyle(menuElement, null).getPropertyValue(\"width\").replace('px', ''));\n    var logoSize = parseInt(window.getComputedStyle(logoElement, null).getPropertyValue(\"width\").replace('px', ''));\n    var navIconsSize = parseInt(window.getComputedStyle(navIconsElement, null).getPropertyValue(\"width\").replace('px', ''));\n    var navlistSize = parseInt(window.getComputedStyle(navlistElement, null).getPropertyValue(\"width\").replace('px', ''));\n    var dropdown = document.querySelector('.nav-default-list .nav-default-list__item:not(.nav-default__hamburger-button)');\n\n    if (menuSize < logoSize + navIconsSize + navlistSize) {\n      dropdown.classList.add(\"d-none\");\n    } else {\n      dropdown.classList.remove(\"d-none\");\n    }\n  };\n\n  window.addEventListener(\"resize\", function () {\n    showMenuItems();\n  });\n  showMenuItems();\n})();\n\n//# sourceURL=webpack:///./templates/simple/assets/scripts/menu/src/index.js?");

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./templates/simple/assets/scripts/menu/src/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./templates/simple/assets/scripts/menu/src/index.js */\"./templates/simple/assets/scripts/menu/src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./templates/simple/assets/scripts/menu/src/index.js?");

/***/ })

/******/ });