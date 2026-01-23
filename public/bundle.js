/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 20:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;__webpack_unused_export__=q;


/***/ }),

/***/ 44:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc718b52279699cff4c2.png";

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 59:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.customization-screen {
  min-height: 100vh;
  width: 800px;
  background: rgba(10, 8, 27, 1);
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
}

/* Header */
.customization-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 30px;
}

.app-name {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

.header-buttons {
  display: flex;
  gap: 15px;
}

.back-btn,
.next-btn,
.publish-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  gap: 8px;
}

.back-btn {
  background: rgba(21, 19, 40, 1);
  color: #ffffff;
}

.next-btn,
.publish-btn {
  background: rgba(38, 46, 132, 1);
  color: #ffffff;
}

.next-btn:hover,
.publish-btn:hover {
  background: #2563eb;
}

.arrow-left,
.arrow-right {
  margin: 0 5px;
}

/* Step Navigation */
.step-navigation {
  display: flex;
  margin: 10px 30px 0px 27px;
  padding: 0px;
  gap: 60px;
  border-bottom: 1px solid #EFEEEC14;
  font-weight: 400;
}

.step {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 400;
  padding-bottom: 17px;
}

.step-number {
  font-size: 12px;
  color: #999;
}

.step-name {
  font-size: 16px;
  color: #999;
}

.step.active .step-number {
  color: #ffffff;
}

.step.active .step-name {
  color: #ffffff;
}

.step:not(.active) .step-name {
  color: rgba(255, 255, 255, 0.7);
}

.step.completed .step-number {
  color: rgba(43, 110, 47, 1);
}

.step.completed .step-name {
  color: rgba(43, 110, 47, 1);
}

/* Main Content */
.main-content {
  display: flex;
  height: calc(100vh - 200px);
  align-items: flex-start
}

/* Left Panel */
.left-panel {
  flex: 1;
  background: rgba(29, 26, 49, 0.6);
  border-right: 1px solid #333;
  overflow-y: auto;
  padding: 0;
  min-width: 516px;
  height: 420px;
  border-radius: 12px;
  /* margin: 20px; */
  margin-right: 10px;
  scrollbar-width: thin;
  scrollbar-color: #4a4a5d transparent;
  scroll-behavior: smooth;
  border: 1px solid hsla(249, 92%, 72%, 0.3)
}

.panel-content {
  padding:30px;
  max-height: 360px;
  overflow-y: auto;

}

.section {
  margin-bottom: 40px;
}

.section h3 {
  color: rgba(140, 121, 255, 1);
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.section h3::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(140, 121, 255, 1);
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group select {
  width: 100%;
  max-width: 175px;
  padding: 12px;
  background: rgba(217, 217, 217, 0.02);
  border: 1px solid rgb(46 43 69);
  border-radius: 6px;
  color: #ffffff;
  font-size: 12px;
  max-height: 4px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #737a86;
}

.color-input-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.color-input {
  flex: 1;
}

.input-with-settings {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-with-settings input,
.input-with-settings select {
  flex: 1;
}

.settings-btn {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #3b82f6;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.settings-btn:hover {
  background: #2563eb;
}

/* Custom Dropdown Styles */
.custom-select-container {
  flex: 1;
}

.custom-select {
  position: relative;
  width: 100%;
}

.custom-select .selected {
  width: 100%;
  max-width: 175px;
  padding: 10px;
  max-height: 8px;
  background: rgba(217, 217, 217, 0.02);
  border: 1px solid rgba(46, 43, 69, 1);
  border-radius: 3px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.3s ease;
}

.custom-select .selected:hover {
  border-color: #23334e;
}

.custom-select.open .selected {
  border-color: #23334e;
}

.dropdown-icon {
  color: #ffffff;
  transition: transform 0.3s ease;
}

.custom-select.open .dropdown-icon {
  transform: rotate(180deg);
}

.custom-select .options {
  position: absolute;
  top: 105%;
  left: 0;
  right: 0;
  background: rgba(50, 44, 90, 0.6);
  border: 1px solid rgba(46, 43, 69, 1);
  border-top: none;
  border-radius: 0 0 6px 6px;
  max-height: 120px;
  min-width: 195px;
  overflow-y: auto;
  z-index: 1000;
  list-style: none;
  margin: 0;
  padding: 0;
  backdrop-filter: blur(30.7px);
}

.custom-select .options li {
  padding: 12px;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  /* border-bottom: 1px solid #333; */
}

.custom-select .options li:last-child {
  border-bottom: none;
}

.custom-select .options li:hover {
  background-color: #342a5e;
}

/* Interface Grid Layout */
.interface-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 55px;
  margin-bottom: 30px;
}

.interface-grid .form-group {
  margin-bottom: 0;
}

/* Trigger Grid Layout */
.trigger-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 55px;
  margin-bottom: 30px;
}

.trigger-grid .form-group {
  margin-bottom: 0;
}

.trigger-icon-section {
  margin-top: 20px;
}

.trigger-icon-section h3 {
  color: rgba(140, 121, 255, 1);
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.trigger-icon-section h3::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(140, 121, 255, 1);
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  margin-top: 15px;
}

.icon-option {
  width: 40px;
  height: 40px;
  background: rgba(46, 43, 69, 1);
  border: 2px solid rgba(46, 43, 69, 1);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.icon-option:hover {
  border-color: #a855f7;
}

.icon-option.selected {
  border: 2px solid rgba(140, 121, 255, 1);
}

.icon-symbol {
  font-size: 16px;
  color: #ffffff;
}

/* Mobile Grid Layout */
.mobile-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 55px;
  margin-bottom: 30px;
}

.mobile-grid .form-group {
  margin-bottom: 0;
}

/* Right Panel */
.right-panel {
  flex: 1;
  background: rgba(29, 26, 49, 0.6);
  padding: 0px;
  border-radius: 12px;
  height: 265px;
  border: 1px solid hsla(249, 92%, 72%, 0.3)
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: left;
  margin-bottom: 20px;
  flex-direction: column;
  gap: 5px;
}

.preview-header h3 {
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  margin: 6px;
  font-weight: 400;
  margin-left: 10px;
}

.device-selector {
  display: flex;
  gap: 0px;
  background: rgba(10, 8, 27, 1);
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-around;
  align-items: center;
}

.device-btn {
  width: 40px;
  height: 56px;
  border: 1px solid rgba(10, 8, 27, 1);
  background: transparent;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  transition: all 0.3s ease;
}

.device-btn.active {
  border-color: rgba(10, 8, 27, 1);
  border-bottom: 2px solid white;
}

.device-btn:hover {
  background: #1f1934;
  /* border-bottom: 2px solid #1f1934; */
}

/* .device-btn.active:hover {
  background: #2563eb;
} */

/* Preview Window */
.preview-window {
  background: #2d1b69;
  border-radius: 4px;
  height: 130px;
  padding: 0;
  overflow: hidden;
  background-size: cover;
}

.preview-window.desktop-preview {
  background: #2d1b69;
  border-radius: 8px;
  height: 130px;
  padding: 0;
  overflow: hidden;
}

.preview-window.mobile-preview {
  background: #1a1822;
  border-radius: 12px;
  height: 132px;
  display: flex;
  width: 80px;
  justify-content: center;
  margin-left: 33%;
  overflow: hidden;
}

/* Browser Window Styles */
.browser-window {
  background: #ffffff;
  border-radius: 8px;
  height: 100%;
  position: relative;
  overflow: hidden;
  /* border: 1px solid #333; */
}

.browser-controls {
  background: #86858D;
  padding: 5px 6px;
  border-radius: 8px 8px 0 0;
}

.traffic-lights {
  display: flex;
  gap: 4px;
}

.traffic-light {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.traffic-light.red {
  background: #ff5f57;
}

.traffic-light.yellow {
  background: #ffbd2e;
}

.traffic-light.green {
  background: #28ca42;
}

.browser-content {
  height: calc(100% - 20px);
  background: #1F1D2E;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Accessibility Widget */
.trigger-widget {
  position: absolute;
  bottom: 15px;
  left: 10px;
  z-index: 5;
}

.widget-trigger {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  border: none;
}

.widget-trigger:hover {
  transform: scale(1.1);
}

.widget-icon {
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1);
  /* Makes the icon white */
}

/* Button Shape Styles */
.widget-trigger.circle {
  border-radius: 50%;
}

.widget-trigger.square {
  border-radius: 0;
}

.widget-trigger.rounded {
  border-radius: 8px;
}

/* Button Size Styles */
.widget-trigger.small {
  width: 24px;
  height: 24px;
}

.widget-trigger.medium {
  width: 30px;
  height: 30px;
}

.widget-trigger.large {
  width: 36px;
  height: 36px;
}

/* Adjust icon size based on button size */
.widget-trigger.small .widget-icon {
  width: 12px;
  height: 12px;
}

.widget-trigger.medium .widget-icon {
  width: 16px;
  height: 16px;
}

.widget-trigger.large .widget-icon {
  width: 20px;
  height: 20px;
}

/* Mobile Browser Window Styles */
.mobile-browser-window {
  background: #ffffff;
  border-radius: 12px;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid #333;
}

.mobile-browser-content {
  height: 100%;
  background: #1F1D2E;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.mobile-trigger-widget {
  position: absolute;
  bottom: 10px;
  left: 8px;
  z-index: 5;
}

.mobile-widget-trigger {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  border: none;
}

.mobile-widget-trigger:hover {
  transform: scale(1.1);
}

.mobile-widget-icon {
  width: 10px;
  height: 10px;
  filter: brightness(0) invert(1);
  /* Makes the icon white */
}

/* Mobile Button Shape Styles */
.mobile-widget-trigger.circle {
  border-radius: 50%;
}

.mobile-widget-trigger.square {
  border-radius: 0;
}

.mobile-widget-trigger.round {
  border-radius: 6px;
}

/* Mobile Button Size Styles */
.mobile-widget-trigger.small {
  width: 16px;
  height: 16px;
}

.mobile-widget-trigger.medium {
  width: 20px;
  height: 20px;
}

.mobile-widget-trigger.large {
  width: 24px;
  height: 24px;
}

/* Adjust icon size based on button size */
.mobile-widget-trigger.small .mobile-widget-icon {
  width: 8px;
  height: 8px;
}

.mobile-widget-trigger.medium .mobile-widget-icon {
  width: 10px;
  height: 10px;
}

.mobile-widget-trigger.large .mobile-widget-icon {
  width: 12px;
  height: 12px;
}

.trigger-widget {
  position: absolute;
  z-index: 10;
}

.widget-trigger {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.widget-trigger:hover {
  transform: scale(1.1);
}

/* Scrollbar Styling */
.left-panel::-webkit-scrollbar {
  width: 8px;
}

.left-panel::-webkit-scrollbar-track {
  background: #1a1a1a;
}

.left-panel::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 4px;
}

.left-panel::-webkit-scrollbar-thumb:hover {
  background: #555;
}


.color-picker-dropdown {
  position: relative;
  width: 118px;
  margin-top: 12px;
  /* margin-bottom: 16px; */
}

.color-picker-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 195px;
  padding: 10px;
  border: 1px solid rgba(57, 53, 83, 1);
  border-radius: 3px;
  background: #D9D9D905;
  cursor: pointer;
  font-size: 14px;
  height: 25px;
}

.color-preview {
  width: 12px;
  height: 12px;
  border-radius: 10.5px;
  border: 0.3px solid #FFFFFF
}

.color-text {
  margin-left: 10px;
  /* flex-grow: 1; */
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -3%;
  color: rgba(255, 255, 255, 0.6);
  ;

}

.dropdown-arrow {
  font-size: 12px;
}

.color-picker-container {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  background: rgba(46, 43, 69, 1);
  padding: 10px;
  width: 173px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
  display: none;
  /* Default hidden */

}

.IroColorPicker {
  display: flex;
  align-content: flex-end;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
}

.color-picker-container.visible {
  display: flex;
  align-items: center;
  flex-direction: column;
}


/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    height: auto;
  }

  .left-panel,
  .right-panel {
    flex: none;
    height: 50vh;
  }

  .customization-header {
    padding: 15px 20px;
  }

  .step-navigation {
    padding: 15px 20px;
  }
}

/* Offset Input Styles */
.offset-input {
  width: 100%;
  max-width: 175px;
  padding: 12px;
  background: rgba(217, 217, 217, 0.02);
  border: 1px solid rgb(46 43 69);
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
}

.offset-input:focus {
  outline: none;
  border-color: rgba(140, 121, 255, 1);
}`, "",{"version":3,"sources":["webpack://./src/styles/customization.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,YAAY;EACZ,8BAA8B;EAC9B,cAAc;EACd,kCAAkC;AACpC;;AAEA,WAAW;AACX;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,+BAA+B;EAC/B,cAAc;AAChB;;AAEA;;EAEE,gCAAgC;EAChC,cAAc;AAChB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;AACf;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,0BAA0B;EAC1B,YAAY;EACZ,SAAS;EACT,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,kBAAkB;EAClB,eAAe;EACf,2BAA2B;EAC3B,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,2BAA2B;EAC3B;AACF;;AAEA,eAAe;AACf;EACE,OAAO;EACP,iCAAiC;EACjC,4BAA4B;EAC5B,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,oCAAoC;EACpC,uBAAuB;EACvB;AACF;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;;AAElB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,OAAO;EACP,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,+BAA+B;EAC/B,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,qCAAqC;EACrC,+BAA+B;EAC/B,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,eAAe;EACf,kCAAkC;AACpC;;AAEA;;EAEE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;;EAEE,OAAO;AACT;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;AACrB;;AAEA,2BAA2B;AAC3B;EACE,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,qCAAqC;EACrC,qCAAqC;EACrC,kBAAkB;EAClB,+BAA+B;EAC/B,eAAe;EACf,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,iCAAiC;EACjC,qCAAqC;EACrC,gBAAgB;EAChB,0BAA0B;EAC1B,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,cAAc;EACd,eAAe;EACf,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,8BAA8B;EAC9B,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,8BAA8B;EAC9B,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,OAAO;EACP,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,qCAAqC;EACrC,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,8BAA8B;EAC9B,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;EACE,OAAO;EACP,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb;AACF;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,8BAA8B;EAC9B,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,uBAAuB;EACvB,eAAe;EACf,WAAW;EACX,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA;;GAEG;;AAEH,mBAAmB;AACnB;EACE,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA,0BAA0B;AAC1B;EACE,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA,yBAAyB;AACzB;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,cAAc;EACd,eAAe;EACf,yCAAyC;EACzC,+BAA+B;EAC/B,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,uBAAuB;AACvB;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,0CAA0C;AAC1C;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,iCAAiC;AACjC;EACE,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,wCAAwC;EACxC,+BAA+B;EAC/B,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,8BAA8B;AAC9B;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,0CAA0C;AAC1C;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,cAAc;EACd,eAAe;EACf,yCAAyC;EACzC,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;AACvB;;AAEA,sBAAsB;AACtB;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;;AAGA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,eAAe;EACf,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB;AACF;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kCAAkC;EAClC,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,+BAA+B;;;AAGjC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,+BAA+B;EAC/B,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,0CAA0C;EAC1C,eAAe;EACf,aAAa;EACb,mBAAmB;;AAErB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;;AAGA,sBAAsB;AACtB;EACE;IACE,sBAAsB;IACtB,YAAY;EACd;;EAEA;;IAEE,UAAU;IACV,YAAY;EACd;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA,wBAAwB;AACxB;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,qCAAqC;EACrC,+BAA+B;EAC/B,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC","sourcesContent":[".customization-screen {\r\n  min-height: 100vh;\r\n  width: 800px;\r\n  background: rgba(10, 8, 27, 1);\r\n  color: #ffffff;\r\n  font-family: 'DM Sans', sans-serif;\r\n}\r\n\r\n/* Header */\r\n.customization-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 18px 30px;\r\n}\r\n\r\n.app-name {\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n}\r\n\r\n.header-buttons {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.back-btn,\r\n.next-btn,\r\n.publish-btn {\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  transition: all 0.3s ease;\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n.back-btn {\r\n  background: rgba(21, 19, 40, 1);\r\n  color: #ffffff;\r\n}\r\n\r\n.next-btn,\r\n.publish-btn {\r\n  background: rgba(38, 46, 132, 1);\r\n  color: #ffffff;\r\n}\r\n\r\n.next-btn:hover,\r\n.publish-btn:hover {\r\n  background: #2563eb;\r\n}\r\n\r\n.arrow-left,\r\n.arrow-right {\r\n  margin: 0 5px;\r\n}\r\n\r\n/* Step Navigation */\r\n.step-navigation {\r\n  display: flex;\r\n  margin: 10px 30px 0px 27px;\r\n  padding: 0px;\r\n  gap: 60px;\r\n  border-bottom: 1px solid #EFEEEC14;\r\n  font-weight: 400;\r\n}\r\n\r\n.step {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n  position: relative;\r\n  cursor: pointer;\r\n  transition: color 0.3s ease;\r\n  font-weight: 400;\r\n  padding-bottom: 17px;\r\n}\r\n\r\n.step-number {\r\n  font-size: 12px;\r\n  color: #999;\r\n}\r\n\r\n.step-name {\r\n  font-size: 16px;\r\n  color: #999;\r\n}\r\n\r\n.step.active .step-number {\r\n  color: #ffffff;\r\n}\r\n\r\n.step.active .step-name {\r\n  color: #ffffff;\r\n}\r\n\r\n.step:not(.active) .step-name {\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n.step.completed .step-number {\r\n  color: rgba(43, 110, 47, 1);\r\n}\r\n\r\n.step.completed .step-name {\r\n  color: rgba(43, 110, 47, 1);\r\n}\r\n\r\n/* Main Content */\r\n.main-content {\r\n  display: flex;\r\n  height: calc(100vh - 200px);\r\n  align-items: flex-start\r\n}\r\n\r\n/* Left Panel */\r\n.left-panel {\r\n  flex: 1;\r\n  background: rgba(29, 26, 49, 0.6);\r\n  border-right: 1px solid #333;\r\n  overflow-y: auto;\r\n  padding: 0;\r\n  min-width: 516px;\r\n  height: 420px;\r\n  border-radius: 12px;\r\n  /* margin: 20px; */\r\n  margin-right: 10px;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: #4a4a5d transparent;\r\n  scroll-behavior: smooth;\r\n  border: 1px solid hsla(249, 92%, 72%, 0.3)\r\n}\r\n\r\n.panel-content {\r\n  padding:30px;\r\n  max-height: 360px;\r\n  overflow-y: auto;\r\n\r\n}\r\n\r\n.section {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.section h3 {\r\n  color: rgba(140, 121, 255, 1);\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.section h3::after {\r\n  content: '';\r\n  flex: 1;\r\n  height: 1px;\r\n  background: rgba(140, 121, 255, 1);\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.form-group label {\r\n  display: block;\r\n  color: rgba(255, 255, 255, 0.6);\r\n  font-size: 12px;\r\n  margin-bottom: 8px;\r\n  font-weight: 500;\r\n}\r\n\r\n.form-group input,\r\n.form-group select {\r\n  width: 100%;\r\n  max-width: 175px;\r\n  padding: 12px;\r\n  background: rgba(217, 217, 217, 0.02);\r\n  border: 1px solid rgb(46 43 69);\r\n  border-radius: 6px;\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n  max-height: 4px;\r\n  transition: border-color 0.3s ease;\r\n}\r\n\r\n.form-group input:focus,\r\n.form-group select:focus {\r\n  outline: none;\r\n  border-color: #737a86;\r\n}\r\n\r\n.color-input-group {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.color-input {\r\n  flex: 1;\r\n}\r\n\r\n.input-with-settings {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.input-with-settings input,\r\n.input-with-settings select {\r\n  flex: 1;\r\n}\r\n\r\n.settings-btn {\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 50%;\r\n  background: #3b82f6;\r\n  color: #ffffff;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  transition: background 0.3s ease;\r\n}\r\n\r\n.settings-btn:hover {\r\n  background: #2563eb;\r\n}\r\n\r\n/* Custom Dropdown Styles */\r\n.custom-select-container {\r\n  flex: 1;\r\n}\r\n\r\n.custom-select {\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.custom-select .selected {\r\n  width: 100%;\r\n  max-width: 175px;\r\n  padding: 10px;\r\n  max-height: 8px;\r\n  background: rgba(217, 217, 217, 0.02);\r\n  border: 1px solid rgba(46, 43, 69, 1);\r\n  border-radius: 3px;\r\n  color: rgba(255, 255, 255, 0.6);\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  transition: border-color 0.3s ease;\r\n}\r\n\r\n.custom-select .selected:hover {\r\n  border-color: #23334e;\r\n}\r\n\r\n.custom-select.open .selected {\r\n  border-color: #23334e;\r\n}\r\n\r\n.dropdown-icon {\r\n  color: #ffffff;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.custom-select.open .dropdown-icon {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.custom-select .options {\r\n  position: absolute;\r\n  top: 105%;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(50, 44, 90, 0.6);\r\n  border: 1px solid rgba(46, 43, 69, 1);\r\n  border-top: none;\r\n  border-radius: 0 0 6px 6px;\r\n  max-height: 120px;\r\n  min-width: 195px;\r\n  overflow-y: auto;\r\n  z-index: 1000;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  backdrop-filter: blur(30.7px);\r\n}\r\n\r\n.custom-select .options li {\r\n  padding: 12px;\r\n  font-size: 12px;\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n  /* border-bottom: 1px solid #333; */\r\n}\r\n\r\n.custom-select .options li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.custom-select .options li:hover {\r\n  background-color: #342a5e;\r\n}\r\n\r\n/* Interface Grid Layout */\r\n.interface-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 20px 55px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.interface-grid .form-group {\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* Trigger Grid Layout */\r\n.trigger-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 20px 55px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.trigger-grid .form-group {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.trigger-icon-section {\r\n  margin-top: 20px;\r\n}\r\n\r\n.trigger-icon-section h3 {\r\n  color: rgba(140, 121, 255, 1);\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.trigger-icon-section h3::after {\r\n  content: '';\r\n  flex: 1;\r\n  height: 1px;\r\n  background: rgba(140, 121, 255, 1);\r\n}\r\n\r\n.icon-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  gap: 10px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.icon-option {\r\n  width: 40px;\r\n  height: 40px;\r\n  background: rgba(46, 43, 69, 1);\r\n  border: 2px solid rgba(46, 43, 69, 1);\r\n  border-radius: 6px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.icon-option:hover {\r\n  border-color: #a855f7;\r\n}\r\n\r\n.icon-option.selected {\r\n  border: 2px solid rgba(140, 121, 255, 1);\r\n}\r\n\r\n.icon-symbol {\r\n  font-size: 16px;\r\n  color: #ffffff;\r\n}\r\n\r\n/* Mobile Grid Layout */\r\n.mobile-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 20px 55px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.mobile-grid .form-group {\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* Right Panel */\r\n.right-panel {\r\n  flex: 1;\r\n  background: rgba(29, 26, 49, 0.6);\r\n  padding: 0px;\r\n  border-radius: 12px;\r\n  height: 265px;\r\n  border: 1px solid hsla(249, 92%, 72%, 0.3)\r\n}\r\n\r\n.preview-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: left;\r\n  margin-bottom: 20px;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.preview-header h3 {\r\n  color: rgba(255, 255, 255, 1);\r\n  font-size: 16px;\r\n  margin: 6px;\r\n  font-weight: 400;\r\n  margin-left: 10px;\r\n}\r\n\r\n.device-selector {\r\n  display: flex;\r\n  gap: 0px;\r\n  background: rgba(10, 8, 27, 1);\r\n  width: 100%;\r\n  height: 56px;\r\n  flex-direction: row;\r\n  align-content: flex-start;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.device-btn {\r\n  width: 40px;\r\n  height: 56px;\r\n  border: 1px solid rgba(10, 8, 27, 1);\r\n  background: transparent;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size: 16px;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.device-btn.active {\r\n  border-color: rgba(10, 8, 27, 1);\r\n  border-bottom: 2px solid white;\r\n}\r\n\r\n.device-btn:hover {\r\n  background: #1f1934;\r\n  /* border-bottom: 2px solid #1f1934; */\r\n}\r\n\r\n/* .device-btn.active:hover {\r\n  background: #2563eb;\r\n} */\r\n\r\n/* Preview Window */\r\n.preview-window {\r\n  background: #2d1b69;\r\n  border-radius: 4px;\r\n  height: 130px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-size: cover;\r\n}\r\n\r\n.preview-window.desktop-preview {\r\n  background: #2d1b69;\r\n  border-radius: 8px;\r\n  height: 130px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.preview-window.mobile-preview {\r\n  background: #1a1822;\r\n  border-radius: 12px;\r\n  height: 132px;\r\n  display: flex;\r\n  width: 80px;\r\n  justify-content: center;\r\n  margin-left: 33%;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Browser Window Styles */\r\n.browser-window {\r\n  background: #ffffff;\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n  /* border: 1px solid #333; */\r\n}\r\n\r\n.browser-controls {\r\n  background: #86858D;\r\n  padding: 5px 6px;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n\r\n.traffic-lights {\r\n  display: flex;\r\n  gap: 4px;\r\n}\r\n\r\n.traffic-light {\r\n  width: 7px;\r\n  height: 7px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.traffic-light.red {\r\n  background: #ff5f57;\r\n}\r\n\r\n.traffic-light.yellow {\r\n  background: #ffbd2e;\r\n}\r\n\r\n.traffic-light.green {\r\n  background: #28ca42;\r\n}\r\n\r\n.browser-content {\r\n  height: calc(100% - 20px);\r\n  background: #1F1D2E;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n/* Accessibility Widget */\r\n.trigger-widget {\r\n  position: absolute;\r\n  bottom: 15px;\r\n  left: 10px;\r\n  z-index: 5;\r\n}\r\n\r\n.widget-trigger {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background: #3b82f6;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\r\n  transition: transform 0.3s ease;\r\n  border: none;\r\n}\r\n\r\n.widget-trigger:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.widget-icon {\r\n  width: 16px;\r\n  height: 16px;\r\n  filter: brightness(0) invert(1);\r\n  /* Makes the icon white */\r\n}\r\n\r\n/* Button Shape Styles */\r\n.widget-trigger.circle {\r\n  border-radius: 50%;\r\n}\r\n\r\n.widget-trigger.square {\r\n  border-radius: 0;\r\n}\r\n\r\n.widget-trigger.rounded {\r\n  border-radius: 8px;\r\n}\r\n\r\n/* Button Size Styles */\r\n.widget-trigger.small {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.widget-trigger.medium {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.widget-trigger.large {\r\n  width: 36px;\r\n  height: 36px;\r\n}\r\n\r\n/* Adjust icon size based on button size */\r\n.widget-trigger.small .widget-icon {\r\n  width: 12px;\r\n  height: 12px;\r\n}\r\n\r\n.widget-trigger.medium .widget-icon {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.widget-trigger.large .widget-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n/* Mobile Browser Window Styles */\r\n.mobile-browser-window {\r\n  background: #ffffff;\r\n  border-radius: 12px;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n  border: 1px solid #333;\r\n}\r\n\r\n.mobile-browser-content {\r\n  height: 100%;\r\n  background: #1F1D2E;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 12px;\r\n}\r\n\r\n.mobile-trigger-widget {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 8px;\r\n  z-index: 5;\r\n}\r\n\r\n.mobile-widget-trigger {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background: #3b82f6;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\r\n  transition: transform 0.3s ease;\r\n  border: none;\r\n}\r\n\r\n.mobile-widget-trigger:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.mobile-widget-icon {\r\n  width: 10px;\r\n  height: 10px;\r\n  filter: brightness(0) invert(1);\r\n  /* Makes the icon white */\r\n}\r\n\r\n/* Mobile Button Shape Styles */\r\n.mobile-widget-trigger.circle {\r\n  border-radius: 50%;\r\n}\r\n\r\n.mobile-widget-trigger.square {\r\n  border-radius: 0;\r\n}\r\n\r\n.mobile-widget-trigger.round {\r\n  border-radius: 6px;\r\n}\r\n\r\n/* Mobile Button Size Styles */\r\n.mobile-widget-trigger.small {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.mobile-widget-trigger.medium {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.mobile-widget-trigger.large {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n/* Adjust icon size based on button size */\r\n.mobile-widget-trigger.small .mobile-widget-icon {\r\n  width: 8px;\r\n  height: 8px;\r\n}\r\n\r\n.mobile-widget-trigger.medium .mobile-widget-icon {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n.mobile-widget-trigger.large .mobile-widget-icon {\r\n  width: 12px;\r\n  height: 12px;\r\n}\r\n\r\n.trigger-widget {\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n\r\n.widget-trigger {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.widget-trigger:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* Scrollbar Styling */\r\n.left-panel::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n.left-panel::-webkit-scrollbar-track {\r\n  background: #1a1a1a;\r\n}\r\n\r\n.left-panel::-webkit-scrollbar-thumb {\r\n  background: #444;\r\n  border-radius: 4px;\r\n}\r\n\r\n.left-panel::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n.color-picker-dropdown {\r\n  position: relative;\r\n  width: 118px;\r\n  margin-top: 12px;\r\n  /* margin-bottom: 16px; */\r\n}\r\n\r\n.color-picker-button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 195px;\r\n  padding: 10px;\r\n  border: 1px solid rgba(57, 53, 83, 1);\r\n  border-radius: 3px;\r\n  background: #D9D9D905;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  height: 25px;\r\n}\r\n\r\n.color-preview {\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 10.5px;\r\n  border: 0.3px solid #FFFFFF\r\n}\r\n\r\n.color-text {\r\n  margin-left: 10px;\r\n  /* flex-grow: 1; */\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-weight: 300;\r\n  font-size: 12px;\r\n  line-height: 100%;\r\n  letter-spacing: -3%;\r\n  color: rgba(255, 255, 255, 0.6);\r\n  ;\r\n\r\n}\r\n\r\n.dropdown-arrow {\r\n  font-size: 12px;\r\n}\r\n\r\n.color-picker-container {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 10;\r\n  background: rgba(46, 43, 69, 1);\r\n  padding: 10px;\r\n  width: 173px;\r\n  border-radius: 5px;\r\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\r\n  margin-top: 5px;\r\n  display: none;\r\n  /* Default hidden */\r\n\r\n}\r\n\r\n.IroColorPicker {\r\n  display: flex;\r\n  align-content: flex-end;\r\n  justify-content: center;\r\n  flex-wrap: nowrap;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.color-picker-container.visible {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n  .main-content {\r\n    flex-direction: column;\r\n    height: auto;\r\n  }\r\n\r\n  .left-panel,\r\n  .right-panel {\r\n    flex: none;\r\n    height: 50vh;\r\n  }\r\n\r\n  .customization-header {\r\n    padding: 15px 20px;\r\n  }\r\n\r\n  .step-navigation {\r\n    padding: 15px 20px;\r\n  }\r\n}\r\n\r\n/* Offset Input Styles */\r\n.offset-input {\r\n  width: 100%;\r\n  max-width: 175px;\r\n  padding: 12px;\r\n  background: rgba(217, 217, 217, 0.02);\r\n  border: 1px solid rgb(46 43 69);\r\n  border-radius: 6px;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n}\r\n\r\n.offset-input:focus {\r\n  outline: none;\r\n  border-color: rgba(140, 121, 255, 1);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 83:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "315988554fb8c9a6ef02.svg";

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "767243c19641dd480729.svg";

/***/ }),

/***/ 134:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6960da1d895f76d2033.svg";

/***/ }),

/***/ 159:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b83cd2f7adef1fc4000c.svg";

/***/ }),

/***/ 252:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Welcome Screen Styles */
.welcome-screen {
  position: relative;
  width: 800px;
  height: 600px;
  background-color: #0A081B;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'DM Sans', sans-serif;
  margin: 0;
  padding: 0;
}

.welcome-main-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

/* Background line images */
.welcome-bg-lines-left {
  position: absolute;
  left: 0;
  bottom: 25%;
  width: 40%;
  max-width: 300px;
  height: auto;
  z-index: 1;
  opacity: 1;
  pointer-events: none;
}

.welcome-bg-lines-right {
  position: absolute;
  right: 0;
  bottom: 25%;
  width: 40%;
  max-width: 300px;
  height: auto;
  z-index: 1;
  opacity: 1;
  pointer-events: none;
}

/* Responsive styles */
@media (max-width: 768px) {

  .welcome-bg-lines-left,
  .welcome-bg-lines-right {
    width: 30%;
    max-width: 200px;
  }

  .welcome-title {
    font-size: 2rem;
  }

  .welcome-instructions {
    font-size: 1rem;
    padding: 0 20px;
  }
}

@media (max-width: 480px) {

  .welcome-bg-lines-left,
  .welcome-bg-lines-right {
    width: 35%;
    max-width: 150px;
  }

  .welcome-title {
    font-size: 1.5rem;
  }

  .welcome-instructions {
    font-size: 0.9rem;
    padding: 0 15px;
  }

  .welcome-header {
    padding: 20px 15px;
  }
}

/* Header */
.welcome-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
  position: relative;
  padding-right: 15px;
}

.welcome-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-weight: 500;
  font-size: 18px;
}

.welcome-logo img {
  width: 24px;
  height: 24px;
}

.welcome-help {
  position: absolute;
  top: 22px;
  left: 685px;
  width: 91px;
  height: 18px;
  display: flex;
  align-items: center;
  gap: 2px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s ease;
  opacity: 1;
}

.welcome-help:hover {
  color: rgba(255, 255, 255, 0.8);
}

.welcome-help img {
  width: 16px;
  height: 16px;
  opacity: 0.6;
}

/* Main content */
.welcome-content {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 9;
  width: 100%;
  max-width: 600px;
  padding: 0 40px;
}

.welcome-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-style: 9pt Regular;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -3%;

}

.welcome-title-highlight {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.6px;
  color: #59AAFB;

}

.welcome-instructions {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  margin: 20px 0 30px 0;
  opacity: 1;
}

.welcome-authorize-btn {
  position: absolute;
  background: #262E84;
  width: 200px;
  height: 28px;
  top: 111%;
  left: 35%;
  opacity: 1;
  gap: 8px;
  padding: 10px 51px;
  border: none;
  border-radius: 6px;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcome-authorize-btn.scan-project {
  width: 200px;
  left: 35%;
}

.welcome-authorize-btn:hover {
  background: #7A6BFF;
  transform: translateY(-2px);
}`, "",{"version":3,"sources":["webpack://./src/styles/welcomescreen.css"],"names":[],"mappings":"AAAA,0BAA0B;AAC1B;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,kCAAkC;EAClC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;;AAEA,2BAA2B;AAC3B;EACE,kBAAkB;EAClB,OAAO;EACP,WAAW;EACX,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,UAAU;EACV,oBAAoB;AACtB;;AAEA,sBAAsB;AACtB;;EAEE;;IAEE,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,eAAe;EACjB;AACF;;AAEA;;EAEE;;IAEE,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA,WAAW;AACX;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,+BAA+B;EAC/B,eAAe;EACf,eAAe;EACf,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA,iBAAiB;AACjB;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;;AAErB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,cAAc;;AAEhB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,+BAA+B;EAC/B,gBAAgB;EAChB,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,SAAS;EACT,UAAU;EACV,QAAQ;EACR,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,kCAAkC;EAClC,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;AAC7B","sourcesContent":["/* Welcome Screen Styles */\r\n.welcome-screen {\r\n  position: relative;\r\n  width: 800px;\r\n  height: 600px;\r\n  background-color: #0A081B;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: 'DM Sans', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.welcome-main-content {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  z-index: 2;\r\n}\r\n\r\n/* Background line images */\r\n.welcome-bg-lines-left {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 25%;\r\n  width: 40%;\r\n  max-width: 300px;\r\n  height: auto;\r\n  z-index: 1;\r\n  opacity: 1;\r\n  pointer-events: none;\r\n}\r\n\r\n.welcome-bg-lines-right {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 25%;\r\n  width: 40%;\r\n  max-width: 300px;\r\n  height: auto;\r\n  z-index: 1;\r\n  opacity: 1;\r\n  pointer-events: none;\r\n}\r\n\r\n/* Responsive styles */\r\n@media (max-width: 768px) {\r\n\r\n  .welcome-bg-lines-left,\r\n  .welcome-bg-lines-right {\r\n    width: 30%;\r\n    max-width: 200px;\r\n  }\r\n\r\n  .welcome-title {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .welcome-instructions {\r\n    font-size: 1rem;\r\n    padding: 0 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n\r\n  .welcome-bg-lines-left,\r\n  .welcome-bg-lines-right {\r\n    width: 35%;\r\n    max-width: 150px;\r\n  }\r\n\r\n  .welcome-title {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .welcome-instructions {\r\n    font-size: 0.9rem;\r\n    padding: 0 15px;\r\n  }\r\n\r\n  .welcome-header {\r\n    padding: 20px 15px;\r\n  }\r\n}\r\n\r\n/* Header */\r\n.welcome-header {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  z-index: 10;\r\n  position: relative;\r\n  padding-right: 15px;\r\n}\r\n\r\n.welcome-logo {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  color: white;\r\n  font-weight: 500;\r\n  font-size: 18px;\r\n}\r\n\r\n.welcome-logo img {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.welcome-help {\r\n  position: absolute;\r\n  top: 22px;\r\n  left: 685px;\r\n  width: 91px;\r\n  height: 18px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 2px;\r\n  color: rgba(255, 255, 255, 0.6);\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  transition: color 0.2s ease;\r\n  opacity: 1;\r\n}\r\n\r\n.welcome-help:hover {\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.welcome-help img {\r\n  width: 16px;\r\n  height: 16px;\r\n  opacity: 0.6;\r\n}\r\n\r\n/* Main content */\r\n.welcome-content {\r\n  position: absolute;\r\n  top: 35%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  z-index: 9;\r\n  width: 100%;\r\n  max-width: 600px;\r\n  padding: 0 40px;\r\n}\r\n\r\n.welcome-title {\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-weight: 400;\r\n  font-style: 9pt Regular;\r\n  font-size: 20px;\r\n  line-height: 100%;\r\n  letter-spacing: -3%;\r\n\r\n}\r\n\r\n.welcome-title-highlight {\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n  line-height: 1.2;\r\n  letter-spacing: -0.6px;\r\n  color: #59AAFB;\r\n\r\n}\r\n\r\n.welcome-instructions {\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n  text-align: center;\r\n  color: rgba(255, 255, 255, 0.8);\r\n  max-width: 500px;\r\n  margin: 20px 0 30px 0;\r\n  opacity: 1;\r\n}\r\n\r\n.welcome-authorize-btn {\r\n  position: absolute;\r\n  background: #262E84;\r\n  width: 200px;\r\n  height: 28px;\r\n  top: 111%;\r\n  left: 35%;\r\n  opacity: 1;\r\n  gap: 8px;\r\n  padding: 10px 51px;\r\n  border: none;\r\n  border-radius: 6px;\r\n  color: white;\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.welcome-authorize-btn.scan-project {\r\n  width: 200px;\r\n  left: 35%;\r\n}\r\n\r\n.welcome-authorize-btn:hover {\r\n  background: #7A6BFF;\r\n  transform: translateY(-2px);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 287:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(961);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else // removed by dead control flow
{ var i; }


/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 417:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 458:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(44), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.payment-screen {
  min-height: 100vh;
  width: 800px;
  background: rgba(10, 8, 27, 1);
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
}

/* Notification animations */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Header */
.payment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 30px;
}

.app-name {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

.header-buttons {
  display: flex;
  gap: 15px;
}

.back-btn,
.next-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  gap: 8px;
}

.back-btn {
  background: rgba(21, 19, 40, 1);
  color: #ffffff;
}

.back-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.next-btn {
  background: rgba(38, 46, 132, 1);
  color: #ffffff;
}

.next-btn:hover:not(:disabled) {
  background: #2563eb;
}

.next-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Step Navigation */
.step-navigation {
  display: flex;
  margin: 10px 30px 0px 27px;
  padding: 0px;
  gap: 100px;
  border-bottom: 1px solid #EFEEEC14;
  font-weight: 400;
}

.step {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 400;
  padding-bottom: 17px;
}

.step-number {
  font-size: 12px;
  color: #999;
}

.step-name {
  font-size: 16px;
  color: #999;
}

.step.active .step-number {
  color: #ffffff;
}

.step.active .step-name {
  color: #ffffff;
}

.step:not(.active) .step-name {
  color: rgba(255, 255, 255, 0.7);
}

.step.completed .step-number {
  color: rgba(43, 110, 47, 1);
}

.step.completed .step-name {
  color: rgba(43, 110, 47, 1);
}

/* Main Content */
.payment-screen .main-content {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: calc(100vh - 200px);
  padding: 20px;
  text-align: left;
  align-items: flex-start
}

.payment-card {
  /* background: linear-gradient(29.71deg, #0B091D 18.17%, #2E2B45 127.91%); */
  border-radius: 12px;
  border: 1px solid #EFEEEC14;
  padding: 40px;
  width: 720px;
  height: 220px;
  position: relative;
  overflow: hidden;
  opacity: 1;
  background: left;
  background-size: 800px;
  background-repeat: no-repeat;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.payment-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 12px;
  z-index: -1;
}

.payment-screen .pricing-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  height: 200px;
}

.payment-screen .pricing-left {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.price-number {
  font-family: 'Funnel Display', sans-serif;
  font-weight: 700;
  font-style: bold;
  font-size: 66px;
  line-height: 64px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: white;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.price-period {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-style: medium;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: white;
  margin-top: 28px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
}

.payment-screen .pricing-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;
  flex: 1;
  text-align: center;
  height: 100px;
  position: relative;
  min-width: 180px;
}

.secondary-price {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-style: medium;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: #FFFFFF;
  width: 160px;
  height: 12px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-height: 12px;
  white-space: nowrap;
  overflow: visible;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.payment-toggle {
  display: flex;
  width: 188px;
  height: 40px;
  background: #FEF1F11C;
  border: 1px solid #FFFFFF47;
  border-radius: 8px;
  padding: 4px;
  position: relative;
  margin: 0 auto;
}

.payment-toggle::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: calc(50% - 4px);
  height: calc(100% - 8px);
  background: #3CB4E5;
  border-radius: 6px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.payment-toggle.monthly::before {
  transform: translateX(0);
}

.payment-toggle.annually::before {
  transform: translateX(100%);
}

.toggle-option {
  flex: 1;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-style: bold;
  font-size: 14.88px;
  line-height: 22.4px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.toggle-option.active {
  color: #262E84;
}

.toggle-option:not(.active) {
  color: #EFEEEC;
}

.toggle-option:not(.active):hover {
  color: #ffffff;
}

.savings-info {
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  font-style: light;
  font-size: 15px;
  line-height: 12px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: #ffffffAB;
  opacity: 0.67;
  width: 95px;
  height: 12px;
  margin-top: 21px;
  margin-left: auto;
  margin-right: auto;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.purchase-btn {
  background: #262E84;
  color: #FFFFFF;
  border: none;
  border-radius: 3px;
  padding: 10px 51px;
  width: 120px;
  height: 28px;
  gap: 8px;
  opacity: 1;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -3%;
  white-space: nowrap;
  flex-shrink: 0;
  min-height: 28px;
  box-sizing: border-box;
  position: relative;
}

.purchase-btn:hover:not(:disabled) {
  background: #2563eb;
  transform: translateY(-1px);
}

.purchase-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .payment-screen {
    width: 100%;
  }

  .payment-header {
    padding: 15px 20px;
  }

  .step-navigation {
    margin: 10px 20px 0px 20px;
    gap: 50px;
  }

  .payment-screen .main-content {
    padding: 20px;
  }

  .payment-card {
    padding: 30px 20px;
  }

  .payment-screen .pricing-flex {
    flex-direction: column;
    gap: 30px;
  }

  .payment-screen .pricing-right {
    align-items: center;
  }

  .secondary-price {
    text-align: center;
  }

  .price-number {
    font-size: 48px;
    line-height: 46px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/payment.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,YAAY;EACZ,8BAA8B;EAC9B,cAAc;EACd,kCAAkC;AACpC;;AAEA,4BAA4B;AAC5B;EACE;IACE,2BAA2B;IAC3B,UAAU;EACZ;EACA;IACE,wBAAwB;IACxB,UAAU;EACZ;AACF;;AAEA,WAAW;AACX;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,+BAA+B;EAC/B,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,gCAAgC;EAChC,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,0BAA0B;EAC1B,YAAY;EACZ,UAAU;EACV,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,kBAAkB;EAClB,eAAe;EACf,2BAA2B;EAC3B,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,uBAAuB;EACvB,yBAAyB;EACzB,2BAA2B;EAC3B,aAAa;EACb,gBAAgB;EAChB;AACF;;AAEA;EACE,4EAA4E;EAC5E,mBAAmB;EACnB,2BAA2B;EAC3B,aAAa;EACb,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,4BAA4B;EAC5B,yDAA4C;AAC9C;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,6FAA6F;EAC7F,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,WAAW;EACX,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;EACzC,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,iDAAiD;AACnD;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,iDAAiD;EACjD,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,OAAO;EACP,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,qBAAqB;EACrB,2BAA2B;EAC3B,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,mBAAmB;EACnB,kBAAkB;EAClB,uDAAuD;EACvD,UAAU;AACZ;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,OAAO;EACP,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,cAAc;EACd,kCAAkC;EAClC,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,mDAAmD;AACrD;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,QAAQ;EACR,UAAU;EACV,eAAe;EACf,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA,sBAAsB;AACtB;EACE;IACE,WAAW;EACb;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,0BAA0B;IAC1B,SAAS;EACX;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;AACF","sourcesContent":[".payment-screen {\r\n  min-height: 100vh;\r\n  width: 800px;\r\n  background: rgba(10, 8, 27, 1);\r\n  color: #ffffff;\r\n  font-family: 'DM Sans', sans-serif;\r\n}\r\n\r\n/* Notification animations */\r\n@keyframes slideInRight {\r\n  from {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Header */\r\n.payment-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 18px 30px;\r\n}\r\n\r\n.app-name {\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n}\r\n\r\n.header-buttons {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.back-btn,\r\n.next-btn {\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  transition: all 0.3s ease;\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n.back-btn {\r\n  background: rgba(21, 19, 40, 1);\r\n  color: #ffffff;\r\n}\r\n\r\n.back-btn:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.next-btn {\r\n  background: rgba(38, 46, 132, 1);\r\n  color: #ffffff;\r\n}\r\n\r\n.next-btn:hover:not(:disabled) {\r\n  background: #2563eb;\r\n}\r\n\r\n.next-btn:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\n/* Step Navigation */\r\n.step-navigation {\r\n  display: flex;\r\n  margin: 10px 30px 0px 27px;\r\n  padding: 0px;\r\n  gap: 100px;\r\n  border-bottom: 1px solid #EFEEEC14;\r\n  font-weight: 400;\r\n}\r\n\r\n.step {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n  position: relative;\r\n  cursor: pointer;\r\n  transition: color 0.3s ease;\r\n  font-weight: 400;\r\n  padding-bottom: 17px;\r\n}\r\n\r\n.step-number {\r\n  font-size: 12px;\r\n  color: #999;\r\n}\r\n\r\n.step-name {\r\n  font-size: 16px;\r\n  color: #999;\r\n}\r\n\r\n.step.active .step-number {\r\n  color: #ffffff;\r\n}\r\n\r\n.step.active .step-name {\r\n  color: #ffffff;\r\n}\r\n\r\n.step:not(.active) .step-name {\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n.step.completed .step-number {\r\n  color: rgba(43, 110, 47, 1);\r\n}\r\n\r\n.step.completed .step-name {\r\n  color: rgba(43, 110, 47, 1);\r\n}\r\n\r\n/* Main Content */\r\n.payment-screen .main-content {\r\n  display: flex;\r\n  justify-content: center;\r\n  /* align-items: center; */\r\n  height: calc(100vh - 200px);\r\n  padding: 20px;\r\n  text-align: left;\r\n  align-items: flex-start\r\n}\r\n\r\n.payment-card {\r\n  /* background: linear-gradient(29.71deg, #0B091D 18.17%, #2E2B45 127.91%); */\r\n  border-radius: 12px;\r\n  border: 1px solid #EFEEEC14;\r\n  padding: 40px;\r\n  width: 720px;\r\n  height: 220px;\r\n  position: relative;\r\n  overflow: hidden;\r\n  opacity: 1;\r\n  background: left;\r\n  background-size: 800px;\r\n  background-repeat: no-repeat;\r\n  background-image: url(\"../assets/bgpay.png\");\r\n}\r\n\r\n.payment-card::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);\r\n  border-radius: 12px;\r\n  z-index: -1;\r\n}\r\n\r\n.payment-screen .pricing-flex {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 40px;\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.payment-screen .pricing-left {\r\n  text-align: center;\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.main-price {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.price-number {\r\n  font-family: 'Funnel Display', sans-serif;\r\n  font-weight: 700;\r\n  font-style: bold;\r\n  font-size: 66px;\r\n  line-height: 64px;\r\n  letter-spacing: 0%;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color: white;\r\n  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.price-period {\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-weight: 500;\r\n  font-style: medium;\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  letter-spacing: 0%;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color: white;\r\n  margin-top: 28px;\r\n  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);\r\n  opacity: 1;\r\n}\r\n\r\n.payment-screen .pricing-right {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 21px;\r\n  flex: 1;\r\n  text-align: center;\r\n  height: 100px;\r\n  position: relative;\r\n  min-width: 180px;\r\n}\r\n\r\n.secondary-price {\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-weight: 500;\r\n  font-style: medium;\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  letter-spacing: 0%;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color: #FFFFFF;\r\n  width: 160px;\r\n  height: 12px;\r\n  opacity: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n  min-height: 12px;\r\n  white-space: nowrap;\r\n  overflow: visible;\r\n  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.payment-toggle {\r\n  display: flex;\r\n  width: 188px;\r\n  height: 40px;\r\n  background: #FEF1F11C;\r\n  border: 1px solid #FFFFFF47;\r\n  border-radius: 8px;\r\n  padding: 4px;\r\n  position: relative;\r\n  margin: 0 auto;\r\n}\r\n\r\n.payment-toggle::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 4px;\r\n  left: 4px;\r\n  width: calc(50% - 4px);\r\n  height: calc(100% - 8px);\r\n  background: #3CB4E5;\r\n  border-radius: 6px;\r\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\r\n  z-index: 1;\r\n}\r\n\r\n.payment-toggle.monthly::before {\r\n  transform: translateX(0);\r\n}\r\n\r\n.payment-toggle.annually::before {\r\n  transform: translateX(100%);\r\n}\r\n\r\n.toggle-option {\r\n  flex: 1;\r\n  padding: 0;\r\n  border: none;\r\n  border-radius: 6px;\r\n  background: transparent;\r\n  color: #ffffff;\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-weight: 700;\r\n  font-style: bold;\r\n  font-size: 14.88px;\r\n  line-height: 22.4px;\r\n  letter-spacing: 0%;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  transition: color 0.3s ease;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.toggle-option.active {\r\n  color: #262E84;\r\n}\r\n\r\n.toggle-option:not(.active) {\r\n  color: #EFEEEC;\r\n}\r\n\r\n.toggle-option:not(.active):hover {\r\n  color: #ffffff;\r\n}\r\n\r\n.savings-info {\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-weight: 300;\r\n  font-style: light;\r\n  font-size: 15px;\r\n  line-height: 12px;\r\n  letter-spacing: 0%;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color: #ffffffAB;\r\n  opacity: 0.67;\r\n  width: 95px;\r\n  height: 12px;\r\n  margin-top: 21px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  transition: opacity 0.3s ease, visibility 0.3s ease;\r\n}\r\n\r\n.purchase-btn {\r\n  background: #262E84;\r\n  color: #FFFFFF;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: 10px 51px;\r\n  width: 120px;\r\n  height: 28px;\r\n  gap: 8px;\r\n  opacity: 1;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-size: 12px;\r\n  line-height: 100%;\r\n  letter-spacing: -3%;\r\n  white-space: nowrap;\r\n  flex-shrink: 0;\r\n  min-height: 28px;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n}\r\n\r\n.purchase-btn:hover:not(:disabled) {\r\n  background: #2563eb;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.purchase-btn:disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n  transform: none;\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n  .payment-screen {\r\n    width: 100%;\r\n  }\r\n\r\n  .payment-header {\r\n    padding: 15px 20px;\r\n  }\r\n\r\n  .step-navigation {\r\n    margin: 10px 20px 0px 20px;\r\n    gap: 50px;\r\n  }\r\n\r\n  .payment-screen .main-content {\r\n    padding: 20px;\r\n  }\r\n\r\n  .payment-card {\r\n    padding: 30px 20px;\r\n  }\r\n\r\n  .payment-screen .pricing-flex {\r\n    flex-direction: column;\r\n    gap: 30px;\r\n  }\r\n\r\n  .payment-screen .pricing-right {\r\n    align-items: center;\r\n  }\r\n\r\n  .secondary-price {\r\n    text-align: center;\r\n  }\r\n\r\n  .price-number {\r\n    font-size: 48px;\r\n    line-height: 46px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 460:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b940c7b5ba71580122e1.svg";

/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd5c22c9e5fca44ff45d.svg";

/***/ }),

/***/ 505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47ddea3bc86368fac454.svg";

/***/ }),

/***/ 532:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51512d8a92f8bce807f1.svg";

/***/ }),

/***/ 540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(287);
} else // removed by dead control flow
{}


/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(540),ca=__webpack_require__(982);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Sg(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a)}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh);G(uh,b)}function zh(){E(uh);E(vh);E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e)}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else{if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a}return O}
function Vh(a,b){return"function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1)}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return[b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d)}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d)}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return[d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b)};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d)}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo)}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c)}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a;ik(a,b,c)}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f,b,c),f=f.sibling;V=e;Jj=h;U=l}kk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a,b,c)}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg())}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h)}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a)}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d))}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg())}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg()}}function Hj(){fj=ej.current;E(ej)}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}fh=null}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ih=!1}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(null!==f)}Sk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e)}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y)}function Lk(){for(;null!==Y&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else{c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K=h;C=g;ok.transition=f}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else{a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b))}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b)}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c)}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c)}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Xi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)});b[uf]=null}};function ml(a){this._internalRoot=a}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function nl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a)}}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d)});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c)}}),il(a,1)}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};exports.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Rk(a)};exports.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Qk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};exports.version="18.3.1-next-f1338f8080-20240426";


/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 720:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0184ba4764536183e876.svg";

/***/ }),

/***/ 741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b74b76db66ee85d2ac89.svg";

/***/ }),

/***/ 793:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.publish-screen {
  min-height: 100vh;
  width: 800px;
  background: rgba(10, 8, 27, 1);
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  position: relative;
  padding-top: 0;
  margin-top: 0;
}

/* Success Banner - ensure it doesn't affect header position */
.success-banner {
  position: relative;
  z-index: 0;
}

/* Publish Modal */
.publish-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5.7px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.publish-modal {
  background: #262144;
  border-radius: 12px;
  padding: 20px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.publish-modal-content {
  text-align: left;
}

.publish-modal-content p {
  color: #ffffff;
  font-size: 12px;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.publish-modal-content p:last-of-type {
  margin-bottom: 32px;
}

.publish-modal-buttons {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.confirm-btn,
.cancel-btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  border: none;
}

.confirm-btn {
  background: rgba(38, 46, 132, 1);
  color: #ffffff;
}

.confirm-btn:hover {
  background: rgba(38, 46, 132, 0.8);
}

.cancel-btn {
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
}

.cancel-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Header */
.publish-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 30px;
}

.app-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 30px;
  height: 30px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.app-name {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

.header-buttons {
  display: flex;
  gap: 15px;
}

.back-btn,
.publish-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-btn {
  background: rgba(21, 19, 40, 1);
  color: #ffffff;
}

.publish-btn {
  background: rgba(38, 46, 132, 1);
  color: #ffffff;
  display: flex;
  /* align-content: center; */
  align-items: center;
  /* justify-content: space-around; */
  /* flex-wrap: wrap; */
  /* flex-direction: row; */
  gap: 8px;
}

.publish-btn:hover {
  background: #2563eb;
}

.arrow-left,
.arrow-right {
  margin: 0 5px;
}

/* Step Navigation */
.step-navigation {
  display: flex;
  margin: 10px 30px 0px 27px;
  padding: 0px;
  gap: 60px;
  border-bottom: 1px solid #EFEEEC14;
  font-weight: 400;
}

.step {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 400;
}

.step-number {
  font-size: 12px;
  color: #999;
}

.step-name {
  font-size: 16px;
  color: #999;
}

.step.active .step-number {
  color: #ffffff;
}

.step.active .step-name {
  color: #ffffff;
}

.step.active {
  border-bottom: 1px solid #ffffff;
}

.step:not(.active) .step-name {
  color: rgba(255, 255, 255, 0.7);
}

.step.completed .step-number {
  color: rgba(43, 110, 47, 1);
}

.step.completed .step-name {
  color: rgba(43, 110, 47, 1);
}

/* Main Content */
.main-content {
  display: flex;
  height: calc(100vh - 200px);
  padding: 20px;
  align-items: flex-start
}

/* Panels */
.preview-panel {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  height: 420px;
}

.panel-header {
  padding: 9px;
  font-weight: 400;
}

.panel-header h3 {
  color: #ffffff;
  font-size: 16px;
  margin: 0;
  font-weight: 400;
}

.preview-window1 {
  height: 376px;
}

/* Browser Window */
.browser-window {
  background: #ffffff;
  border-radius: 8px;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.browser-controls {
  background: #86858D;
  padding: 5px 15px;
}

.traffic-lights {
  display: flex;
  gap: 8px;
}

.traffic-light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.traffic-light.red {
  background: #ff5f57;
}

.traffic-light.yellow {
  background: #ffbd2e;
}

.traffic-light.green {
  background: #28ca42;
}

.browser-content {
  height: calc(100% - 20px);
  background: #1F1D2E;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Accessibility Modal */
.accessibility-modal {
    background: linear-gradient(90deg, hsla(235, 55%, 33%, 1) 0%, hsla(204, 88%, 56%, 1) 100%);  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 231px;
  height: 320px;
  overflow-y: auto;
  position: absolute;
  border: 2px solid white;
  top: 50%;
  z-index: 10;
  scrollbar-width: thin;
}

.accessibility-modal.position-left {
  left: 8%;
  transform: translateY(-50%);
  animation: slideInFromLeft 0.6s ease-out;
}

.accessibility-modal.position-right {
  right: 8%;
  transform: translateY(-50%);
  animation: slideInFromRight 0.6s ease-out;
}

.accessibility-modal.position-center {
  left: 50%;
  transform: translate(-50%, -50%);
  animation: slideInFromLeft 0.6s ease-out;
}

@keyframes slideInFromLeft {
  from {
    transform: translate(-150%, -50%);
    opacity: 0;
  }

  to {
    transform: translateY(-50%);
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  from {
    transform: translate(150%, -50%);
    opacity: 0;
  }

  to {
    transform: translateY(-50%);
    opacity: 1;
  }
}

@keyframes slideInFromCenter {
  from {
    transform: translate(-50%, -150%);
    opacity: 0;
  }

  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}

.modal-header {
  background: linear-gradient(135deg, hsla(235, 55%, 33%, 1) 0%, hsla(204, 88%, 56%, 1) 100%);
  color: white;
  padding: 20px;
  border-radius: 12px 12px 0 0;
  padding-bottom: 9px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 0px;
  left: 0px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal-header h2 {
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

.modal-buttons {
  padding: 7px 4px;
  /* background: #f8f9fa; */
  /* border-bottom: 1px solid #e9ecef; */
  display: flex;
  justify-content: center;
  gap: 10px;
}

.modal-btn {
  padding: 5px 12px;
  background: hsla(0, 0%, 85%, 0.3);
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 8px;
  transition: background 0.3s ease;
  border: 0px solid hsla(0, 0%, 85%, 0.3);
  display: flex;
  align-items: center;
  gap: 5px;
}

.modal-btn:hover {
  background: #2563eb;
}

.modal-content {
  padding: 12px;
  border-radius: 8px 8px 0 0;
  background: white;
}

.modal-intro {
  color: hsla(247, 23%, 15%, 1);
  margin-bottom: 20px;
  font-size: 9px;
  font-weight: 500;
  margin-top: 0;
}

.profile-list {
  display: flex;
  flex-direction: column;
}

.profile-item {
  display: flex;
  padding: 3px;
  /* background: #f8f9fa; */
  /* border-radius: 8px; */
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 10px;
  gap: 15px;
}

.profile-info h4 {
  margin: 0 0 5px 0;
  color: hsla(247, 23%, 15%, 1);
  font-size: 9px;
  font-weight: 400;
}

.profile-info p {
  margin: 0;
  color: hsla(247, 23%, 15%, 0.5);
  font-size: 9px;
}

/* Toggle Switch */
.toggle-switch {
  position: relative;
  margin-top: -11px;
}

.toggle-switch input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
  display: none;
  visibility: hidden;
}

.toggle-label {
  display: block;
  width: 47px;
  height: 20px;
  top: 15px;
  background: #e5e7eb;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;
}

.toggle-label::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 16px;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.toggle-switch input[type="checkbox"]:checked+.toggle-label {
  background: #10b981;
}

.toggle-switch input[type="checkbox"]:checked+.toggle-label::after {
  transform: translateX(26px);
}

/* Toggle Labels */
.toggle-off {
  position: absolute;
  top: 50%;
  left: 26%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 6px;
  font-weight: 700;
  z-index: 2;
  pointer-events: none;
}

.toggle-on {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: black;
  font-size: 8px;
  font-weight: 700;
  z-index: 1;
  pointer-events: none;
}

/* Hide ON label when toggle is OFF */
.toggle-switch input[type="checkbox"]:not(:checked) + .toggle-label .toggle-on {
  opacity: 0.3;
}

/* Hide OFF label when toggle is ON */
.toggle-switch input[type="checkbox"]:checked + .toggle-label .toggle-off {
  opacity: 0;
}

.toggle-switch input[type="checkbox"]:checked + .toggle-label .toggle-on {
  opacity: 1;
}


/* Accessibility Widget */
.accessibility-widget {
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 5;
}

.widget-trigger {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  border: none;
}

.widget-trigger:hover {
  transform: scale(1.1);
}

.widget-icon {
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1);
  /* Makes the icon white */
}

/* Button Shape Styles */
.widget-trigger.circle {
  border-radius: 50%;
}

.widget-trigger.square {
  border-radius: 0;
}

.widget-trigger.rounded {
  border-radius: 8px;
}

/* Scrollbar Styling */
.accessibility-modal::-webkit-scrollbar {
  width: 8px;
}

.accessibility-modal::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.accessibility-modal::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.accessibility-modal::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    height: auto;
  }

  .preview-panel,
  .right-panel {
    flex: none;
    height: 50vh;
  }

  .publish-header {
    padding: 15px 20px;
  }

  .step-navigation {
    padding: 15px 20px;
  }
}

/* Success Toast Animation */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.success-toast {
  animation: slideInRight 0.3s ease-out;
}`, "",{"version":3,"sources":["webpack://./src/styles/publish.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,YAAY;EACZ,8BAA8B;EAC9B,cAAc;EACd,kCAAkC;EAClC,kBAAkB;EAClB,cAAc;EACd,aAAa;AACf;;AAEA,8DAA8D;AAC9D;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA,kBAAkB;AAClB;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,8BAA8B;EAC9B,4BAA4B;EAC5B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,UAAU;EACV,qFAAqF;AACvF;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,cAAc;AAChB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA,WAAW;AACX;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,QAAQ;EACR,eAAe;EACf,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,+BAA+B;EAC/B,cAAc;AAChB;;AAEA;EACE,gCAAgC;EAChC,cAAc;EACd,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,mCAAmC;EACnC,qBAAqB;EACrB,yBAAyB;EACzB,QAAQ;AACV;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;AACf;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,0BAA0B;EAC1B,YAAY;EACZ,SAAS;EACT,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,kBAAkB;EAClB,eAAe;EACf,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb;AACF;;AAEA,WAAW;AACX;EACE,OAAO;EACP,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA,mBAAmB;AACnB;EACE,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA,wBAAwB;AACxB;IACI,0FAA0F,GAAG,kBAAkB;EACjH,0CAA0C;EAC1C,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,QAAQ;EACR,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,QAAQ;EACR,2BAA2B;EAC3B,wCAAwC;AAC1C;;AAEA;EACE,SAAS;EACT,2BAA2B;EAC3B,yCAAyC;AAC3C;;AAEA;EACE,SAAS;EACT,gCAAgC;EAChC,wCAAwC;AAC1C;;AAEA;EACE;IACE,iCAAiC;IACjC,UAAU;EACZ;;EAEA;IACE,2BAA2B;IAC3B,UAAU;EACZ;AACF;;AAEA;EACE;IACE,gCAAgC;IAChC,UAAU;EACZ;;EAEA;IACE,2BAA2B;IAC3B,UAAU;EACZ;AACF;;AAEA;EACE;IACE,iCAAiC;IACjC,UAAU;EACZ;;EAEA;IACE,gCAAgC;IAChC,UAAU;EACZ;AACF;;AAEA;EACE,2FAA2F;EAC3F,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,sCAAsC;EACtC,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,iCAAiC;EACjC,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,gCAAgC;EAChC,uCAAuC;EACvC,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,wBAAwB;EACxB,gCAAgC;EAChC,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,+BAA+B;EAC/B,cAAc;AAChB;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;EACT,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,SAAS;EACT,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,+BAA+B;EAC/B,wCAAwC;AAC1C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,2BAA2B;EAC3B,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,UAAU;EACV,oBAAoB;AACtB;;AAEA,qCAAqC;AACrC;EACE,YAAY;AACd;;AAEA,qCAAqC;AACrC;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;;AAGA,yBAAyB;AACzB;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,cAAc;EACd,eAAe;EACf,yCAAyC;EACzC,+BAA+B;EAC/B,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,sBAAsB;AACtB;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,sBAAsB;AACtB;EACE;IACE,sBAAsB;IACtB,YAAY;EACd;;EAEA;;IAEE,UAAU;IACV,YAAY;EACd;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA,4BAA4B;AAC5B;EACE;IACE,2BAA2B;IAC3B,UAAU;EACZ;EACA;IACE,wBAAwB;IACxB,UAAU;EACZ;AACF;;AAEA;EACE,qCAAqC;AACvC","sourcesContent":[".publish-screen {\r\n  min-height: 100vh;\r\n  width: 800px;\r\n  background: rgba(10, 8, 27, 1);\r\n  color: #ffffff;\r\n  font-family: 'DM Sans', sans-serif;\r\n  position: relative;\r\n  padding-top: 0;\r\n  margin-top: 0;\r\n}\r\n\r\n/* Success Banner - ensure it doesn't affect header position */\r\n.success-banner {\r\n  position: relative;\r\n  z-index: 0;\r\n}\r\n\r\n/* Publish Modal */\r\n.publish-modal-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: rgba(0, 0, 0, 0.3);\r\n  backdrop-filter: blur(5.7px);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1000;\r\n}\r\n\r\n.publish-modal {\r\n  background: #262144;\r\n  border-radius: 12px;\r\n  padding: 20px;\r\n  max-width: 400px;\r\n  width: 90%;\r\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n.publish-modal-content {\r\n  text-align: left;\r\n}\r\n\r\n.publish-modal-content p {\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  margin: 0 0 16px 0;\r\n}\r\n\r\n.publish-modal-content p:last-of-type {\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.publish-modal-buttons {\r\n  display: flex;\r\n  gap: 12px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.confirm-btn,\r\n.cancel-btn {\r\n  padding: 12px 24px;\r\n  border-radius: 8px;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  transition: all 0.3s ease;\r\n  border: none;\r\n}\r\n\r\n.confirm-btn {\r\n  background: rgba(38, 46, 132, 1);\r\n  color: #ffffff;\r\n}\r\n\r\n.confirm-btn:hover {\r\n  background: rgba(38, 46, 132, 0.8);\r\n}\r\n\r\n.cancel-btn {\r\n  background: transparent;\r\n  color: #ffffff;\r\n  border: 1px solid #ffffff;\r\n}\r\n\r\n.cancel-btn:hover {\r\n  background: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n/* Header */\r\n.publish-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 18px 30px;\r\n}\r\n\r\n.app-logo {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.logo-icon {\r\n  width: 30px;\r\n  height: 30px;\r\n  background: #10b981;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n}\r\n\r\n.app-name {\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n}\r\n\r\n.header-buttons {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.back-btn,\r\n.publish-btn {\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  gap: 8px;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.back-btn {\r\n  background: rgba(21, 19, 40, 1);\r\n  color: #ffffff;\r\n}\r\n\r\n.publish-btn {\r\n  background: rgba(38, 46, 132, 1);\r\n  color: #ffffff;\r\n  display: flex;\r\n  /* align-content: center; */\r\n  align-items: center;\r\n  /* justify-content: space-around; */\r\n  /* flex-wrap: wrap; */\r\n  /* flex-direction: row; */\r\n  gap: 8px;\r\n}\r\n\r\n.publish-btn:hover {\r\n  background: #2563eb;\r\n}\r\n\r\n.arrow-left,\r\n.arrow-right {\r\n  margin: 0 5px;\r\n}\r\n\r\n/* Step Navigation */\r\n.step-navigation {\r\n  display: flex;\r\n  margin: 10px 30px 0px 27px;\r\n  padding: 0px;\r\n  gap: 60px;\r\n  border-bottom: 1px solid #EFEEEC14;\r\n  font-weight: 400;\r\n}\r\n\r\n.step {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n  position: relative;\r\n  cursor: pointer;\r\n  transition: color 0.3s ease;\r\n  font-weight: 400;\r\n}\r\n\r\n.step-number {\r\n  font-size: 12px;\r\n  color: #999;\r\n}\r\n\r\n.step-name {\r\n  font-size: 16px;\r\n  color: #999;\r\n}\r\n\r\n.step.active .step-number {\r\n  color: #ffffff;\r\n}\r\n\r\n.step.active .step-name {\r\n  color: #ffffff;\r\n}\r\n\r\n.step.active {\r\n  border-bottom: 1px solid #ffffff;\r\n}\r\n\r\n.step:not(.active) .step-name {\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n.step.completed .step-number {\r\n  color: rgba(43, 110, 47, 1);\r\n}\r\n\r\n.step.completed .step-name {\r\n  color: rgba(43, 110, 47, 1);\r\n}\r\n\r\n/* Main Content */\r\n.main-content {\r\n  display: flex;\r\n  height: calc(100vh - 200px);\r\n  padding: 20px;\r\n  align-items: flex-start\r\n}\r\n\r\n/* Panels */\r\n.preview-panel {\r\n  flex: 1;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  height: 420px;\r\n}\r\n\r\n.panel-header {\r\n  padding: 9px;\r\n  font-weight: 400;\r\n}\r\n\r\n.panel-header h3 {\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n  margin: 0;\r\n  font-weight: 400;\r\n}\r\n\r\n.preview-window1 {\r\n  height: 376px;\r\n}\r\n\r\n/* Browser Window */\r\n.browser-window {\r\n  background: #ffffff;\r\n  border-radius: 8px;\r\n  height: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.browser-controls {\r\n  background: #86858D;\r\n  padding: 5px 15px;\r\n}\r\n\r\n.traffic-lights {\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n.traffic-light {\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.traffic-light.red {\r\n  background: #ff5f57;\r\n}\r\n\r\n.traffic-light.yellow {\r\n  background: #ffbd2e;\r\n}\r\n\r\n.traffic-light.green {\r\n  background: #28ca42;\r\n}\r\n\r\n.browser-content {\r\n  height: calc(100% - 20px);\r\n  background: #1F1D2E;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n/* Accessibility Modal */\r\n.accessibility-modal {\r\n    background: linear-gradient(90deg, hsla(235, 55%, 33%, 1) 0%, hsla(204, 88%, 56%, 1) 100%);  border-radius: 8px;\r\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\r\n  width: 231px;\r\n  height: 320px;\r\n  overflow-y: auto;\r\n  position: absolute;\r\n  border: 2px solid white;\r\n  top: 50%;\r\n  z-index: 10;\r\n  scrollbar-width: thin;\r\n}\r\n\r\n.accessibility-modal.position-left {\r\n  left: 8%;\r\n  transform: translateY(-50%);\r\n  animation: slideInFromLeft 0.6s ease-out;\r\n}\r\n\r\n.accessibility-modal.position-right {\r\n  right: 8%;\r\n  transform: translateY(-50%);\r\n  animation: slideInFromRight 0.6s ease-out;\r\n}\r\n\r\n.accessibility-modal.position-center {\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  animation: slideInFromLeft 0.6s ease-out;\r\n}\r\n\r\n@keyframes slideInFromLeft {\r\n  from {\r\n    transform: translate(-150%, -50%);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform: translateY(-50%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slideInFromRight {\r\n  from {\r\n    transform: translate(150%, -50%);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform: translateY(-50%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slideInFromCenter {\r\n  from {\r\n    transform: translate(-50%, -150%);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform: translate(-50%, -50%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.modal-header {\r\n  background: linear-gradient(135deg, hsla(235, 55%, 33%, 1) 0%, hsla(204, 88%, 56%, 1) 100%);\r\n  color: white;\r\n  padding: 20px;\r\n  border-radius: 12px 12px 0 0;\r\n  padding-bottom: 9px;\r\n  position: relative;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  background: none;\r\n  border: none;\r\n  color: white;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  width: 30px;\r\n  height: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  transition: background 0.3s ease;\r\n}\r\n\r\n.close-btn:hover {\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.modal-header h2 {\r\n  margin: 0;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n}\r\n\r\n.modal-buttons {\r\n  padding: 7px 4px;\r\n  /* background: #f8f9fa; */\r\n  /* border-bottom: 1px solid #e9ecef; */\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n\r\n.modal-btn {\r\n  padding: 5px 12px;\r\n  background: hsla(0, 0%, 85%, 0.3);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 30px;\r\n  cursor: pointer;\r\n  font-size: 8px;\r\n  transition: background 0.3s ease;\r\n  border: 0px solid hsla(0, 0%, 85%, 0.3);\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.modal-btn:hover {\r\n  background: #2563eb;\r\n}\r\n\r\n.modal-content {\r\n  padding: 12px;\r\n  border-radius: 8px 8px 0 0;\r\n  background: white;\r\n}\r\n\r\n.modal-intro {\r\n  color: hsla(247, 23%, 15%, 1);\r\n  margin-bottom: 20px;\r\n  font-size: 9px;\r\n  font-weight: 500;\r\n  margin-top: 0;\r\n}\r\n\r\n.profile-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.profile-item {\r\n  display: flex;\r\n  padding: 3px;\r\n  /* background: #f8f9fa; */\r\n  /* border-radius: 8px; */\r\n  border-bottom: 1px solid #e9ecef;\r\n  margin-bottom: 10px;\r\n  gap: 15px;\r\n}\r\n\r\n.profile-info h4 {\r\n  margin: 0 0 5px 0;\r\n  color: hsla(247, 23%, 15%, 1);\r\n  font-size: 9px;\r\n  font-weight: 400;\r\n}\r\n\r\n.profile-info p {\r\n  margin: 0;\r\n  color: hsla(247, 23%, 15%, 0.5);\r\n  font-size: 9px;\r\n}\r\n\r\n/* Toggle Switch */\r\n.toggle-switch {\r\n  position: relative;\r\n  margin-top: -11px;\r\n}\r\n\r\n.toggle-switch input[type=\"checkbox\"] {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n  display: none;\r\n  visibility: hidden;\r\n}\r\n\r\n.toggle-label {\r\n  display: block;\r\n  width: 47px;\r\n  height: 20px;\r\n  top: 15px;\r\n  background: #e5e7eb;\r\n  border-radius: 12px;\r\n  position: relative;\r\n  cursor: pointer;\r\n  transition: background 0.3s ease;\r\n}\r\n\r\n.toggle-label::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  width: 22px;\r\n  height: 16px;\r\n  background: white;\r\n  border-radius: 50%;\r\n  transition: transform 0.3s ease;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.toggle-switch input[type=\"checkbox\"]:checked+.toggle-label {\r\n  background: #10b981;\r\n}\r\n\r\n.toggle-switch input[type=\"checkbox\"]:checked+.toggle-label::after {\r\n  transform: translateX(26px);\r\n}\r\n\r\n/* Toggle Labels */\r\n.toggle-off {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 26%;\r\n  transform: translate(-50%, -50%);\r\n  color: black;\r\n  font-size: 6px;\r\n  font-weight: 700;\r\n  z-index: 2;\r\n  pointer-events: none;\r\n}\r\n\r\n.toggle-on {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 8px;\r\n  transform: translateY(-50%);\r\n  color: black;\r\n  font-size: 8px;\r\n  font-weight: 700;\r\n  z-index: 1;\r\n  pointer-events: none;\r\n}\r\n\r\n/* Hide ON label when toggle is OFF */\r\n.toggle-switch input[type=\"checkbox\"]:not(:checked) + .toggle-label .toggle-on {\r\n  opacity: 0.3;\r\n}\r\n\r\n/* Hide OFF label when toggle is ON */\r\n.toggle-switch input[type=\"checkbox\"]:checked + .toggle-label .toggle-off {\r\n  opacity: 0;\r\n}\r\n\r\n.toggle-switch input[type=\"checkbox\"]:checked + .toggle-label .toggle-on {\r\n  opacity: 1;\r\n}\r\n\r\n\r\n/* Accessibility Widget */\r\n.accessibility-widget {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  left: 20px;\r\n  z-index: 5;\r\n}\r\n\r\n.widget-trigger {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background: #3b82f6;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\r\n  transition: transform 0.3s ease;\r\n  border: none;\r\n}\r\n\r\n.widget-trigger:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.widget-icon {\r\n  width: 16px;\r\n  height: 16px;\r\n  filter: brightness(0) invert(1);\r\n  /* Makes the icon white */\r\n}\r\n\r\n/* Button Shape Styles */\r\n.widget-trigger.circle {\r\n  border-radius: 50%;\r\n}\r\n\r\n.widget-trigger.square {\r\n  border-radius: 0;\r\n}\r\n\r\n.widget-trigger.rounded {\r\n  border-radius: 8px;\r\n}\r\n\r\n/* Scrollbar Styling */\r\n.accessibility-modal::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n.accessibility-modal::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.accessibility-modal::-webkit-scrollbar-thumb {\r\n  background: #c1c1c1;\r\n  border-radius: 4px;\r\n}\r\n\r\n.accessibility-modal::-webkit-scrollbar-thumb:hover {\r\n  background: #a8a8a8;\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n  .main-content {\r\n    flex-direction: column;\r\n    height: auto;\r\n  }\r\n\r\n  .preview-panel,\r\n  .right-panel {\r\n    flex: none;\r\n    height: 50vh;\r\n  }\r\n\r\n  .publish-header {\r\n    padding: 15px 20px;\r\n  }\r\n\r\n  .step-navigation {\r\n    padding: 15px 20px;\r\n  }\r\n}\r\n\r\n/* Success Toast Animation */\r\n@keyframes slideInRight {\r\n  from {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.success-toast {\r\n  animation: slideInRight 0.3s ease-out;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 818:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dfba5aefefd533747dc.webp";

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(20);
} else // removed by dead control flow
{}


/***/ }),

/***/ 871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b8b6654090bf3b66e38.svg";

/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) // removed by dead control flow
{}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(551);
} else // removed by dead control flow
{}


/***/ }),

/***/ 982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(463);
} else // removed by dead control flow
{}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || (() => { try { return this; } catch(e) { return typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {}; } })()();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
;// ./node_modules/@tanstack/query-core/build/modern/subscribable.js
// src/subscribable.ts
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};

//# sourceMappingURL=subscribable.js.map
;// ./node_modules/@tanstack/query-core/build/modern/timeoutManager.js
// src/timeoutManager.ts
var defaultTimeoutProvider = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (callback, delay) => setTimeout(callback, delay),
  clearTimeout: (timeoutId) => clearTimeout(timeoutId),
  setInterval: (callback, delay) => setInterval(callback, delay),
  clearInterval: (intervalId) => clearInterval(intervalId)
};
var TimeoutManager = class {
  // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
  // type at app boot; and if we leave that type, then any new timer provider
  // would need to support ReturnType<typeof setTimeout>, which is infeasible.
  //
  // We settle for type safety for the TimeoutProvider type, and accept that
  // this class is unsafe internally to allow for extension.
  #provider = defaultTimeoutProvider;
  #providerCalled = false;
  setTimeoutProvider(provider) {
    if (false) // removed by dead control flow
{}
    this.#provider = provider;
    if (false) // removed by dead control flow
{}
  }
  setTimeout(callback, delay) {
    if (false) // removed by dead control flow
{}
    return this.#provider.setTimeout(callback, delay);
  }
  clearTimeout(timeoutId) {
    this.#provider.clearTimeout(timeoutId);
  }
  setInterval(callback, delay) {
    if (false) // removed by dead control flow
{}
    return this.#provider.setInterval(callback, delay);
  }
  clearInterval(intervalId) {
    this.#provider.clearInterval(intervalId);
  }
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
  setTimeout(callback, 0);
}

//# sourceMappingURL=timeoutManager.js.map
;// ./node_modules/@tanstack/query-core/build/modern/utils.js
// src/utils.ts

var isServer = typeof window === "undefined" || "Deno" in globalThis;
function utils_noop() {
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
  return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
  const {
    type = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;
  if (queryKey) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  if (type !== "all") {
    const isActive = query.isActive();
    if (type === "active" && !isActive) {
      return false;
    }
    if (type === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const { exact, status, predicate, mutationKey } = filters;
  if (mutationKey) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (status && mutation.state.status !== status) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = options?.queryKeyHashFn || hashKey;
  return hashFn(queryKey);
}
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}
function partialMatchKey(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function utils_replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  const array = isPlainArray(a) && isPlainArray(b);
  if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
  const aItems = array ? a : Object.keys(a);
  const aSize = aItems.length;
  const bItems = array ? b : Object.keys(b);
  const bSize = bItems.length;
  const copy = array ? new Array(bSize) : {};
  let equalItems = 0;
  for (let i = 0; i < bSize; i++) {
    const key = array ? i : bItems[i];
    const aItem = a[key];
    const bItem = b[key];
    if (aItem === bItem) {
      copy[key] = aItem;
      if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
      continue;
    }
    if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
      copy[key] = bItem;
      continue;
    }
    const v = utils_replaceEqualDeep(aItem, bItem);
    copy[key] = v;
    if (v === aItem) equalItems++;
  }
  return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
  if (!b || Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  if (Object.getPrototypeOf(o) !== Object.prototype) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
  return new Promise((resolve) => {
    timeoutManager.setTimeout(resolve, timeout);
  });
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    if (false) // removed by dead control flow
{}
    return utils_replaceEqualDeep(prevData, data);
  }
  return data;
}
function keepPreviousData(previousData) {
  return previousData;
}
function utils_addToEnd(items, item, max = 0) {
  const newItems = [...items, item];
  return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
  const newItems = [item, ...items];
  return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
  if (false) // removed by dead control flow
{}
  if (!options.queryFn && fetchOptions?.initialPromise) {
    return () => fetchOptions.initialPromise;
  }
  if (!options.queryFn || options.queryFn === skipToken) {
    return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
  }
  return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
  if (typeof throwOnError === "function") {
    return throwOnError(...params);
  }
  return !!throwOnError;
}

//# sourceMappingURL=utils.js.map
;// ./node_modules/@tanstack/query-core/build/modern/focusManager.js
// src/focusManager.ts


var FocusManager = class extends Subscribable {
  #focused;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onFocus) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    const changed = this.#focused !== focused;
    if (changed) {
      this.#focused = focused;
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    if (typeof this.#focused === "boolean") {
      return this.#focused;
    }
    return globalThis.document?.visibilityState !== "hidden";
  }
};
var focusManager = new FocusManager();

//# sourceMappingURL=focusManager.js.map
;// ./node_modules/@tanstack/query-core/build/modern/thenable.js
// src/thenable.ts

function pendingThenable() {
  let resolve;
  let reject;
  const thenable = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  thenable.status = "pending";
  thenable.catch(() => {
  });
  function finalize(data) {
    Object.assign(thenable, data);
    delete thenable.resolve;
    delete thenable.reject;
  }
  thenable.resolve = (value) => {
    finalize({
      status: "fulfilled",
      value
    });
    resolve(value);
  };
  thenable.reject = (reason) => {
    finalize({
      status: "rejected",
      reason
    });
    reject(reason);
  };
  return thenable;
}
function thenable_tryResolveSync(promise) {
  let data;
  promise.then((result) => {
    data = result;
    return result;
  }, noop)?.catch(noop);
  if (data !== void 0) {
    return { data };
  }
  return void 0;
}

//# sourceMappingURL=thenable.js.map
;// ./node_modules/@tanstack/query-core/build/modern/hydration.js
// src/hydration.ts

function defaultTransformerFn(data) {
  return data;
}
function dehydrateMutation(mutation) {
  return {
    mutationKey: mutation.options.mutationKey,
    state: mutation.state,
    ...mutation.options.scope && { scope: mutation.options.scope },
    ...mutation.meta && { meta: mutation.meta }
  };
}
function dehydrateQuery(query, serializeData, shouldRedactErrors) {
  return {
    dehydratedAt: Date.now(),
    state: {
      ...query.state,
      ...query.state.data !== void 0 && {
        data: serializeData(query.state.data)
      }
    },
    queryKey: query.queryKey,
    queryHash: query.queryHash,
    ...query.state.status === "pending" && {
      promise: query.promise?.then(serializeData).catch((error) => {
        if (!shouldRedactErrors(error)) {
          return Promise.reject(error);
        }
        if (false) // removed by dead control flow
{}
        return Promise.reject(new Error("redacted"));
      })
    },
    ...query.meta && { meta: query.meta }
  };
}
function defaultShouldDehydrateMutation(mutation) {
  return mutation.state.isPaused;
}
function defaultShouldDehydrateQuery(query) {
  return query.state.status === "success";
}
function defaultShouldRedactErrors(_) {
  return true;
}
function dehydrate(client, options = {}) {
  const filterMutation = options.shouldDehydrateMutation ?? client.getDefaultOptions().dehydrate?.shouldDehydrateMutation ?? defaultShouldDehydrateMutation;
  const mutations = client.getMutationCache().getAll().flatMap(
    (mutation) => filterMutation(mutation) ? [dehydrateMutation(mutation)] : []
  );
  const filterQuery = options.shouldDehydrateQuery ?? client.getDefaultOptions().dehydrate?.shouldDehydrateQuery ?? defaultShouldDehydrateQuery;
  const shouldRedactErrors = options.shouldRedactErrors ?? client.getDefaultOptions().dehydrate?.shouldRedactErrors ?? defaultShouldRedactErrors;
  const serializeData = options.serializeData ?? client.getDefaultOptions().dehydrate?.serializeData ?? defaultTransformerFn;
  const queries = client.getQueryCache().getAll().flatMap(
    (query) => filterQuery(query) ? [dehydrateQuery(query, serializeData, shouldRedactErrors)] : []
  );
  return { mutations, queries };
}
function hydration_hydrate(client, dehydratedState, options) {
  if (typeof dehydratedState !== "object" || dehydratedState === null) {
    return;
  }
  const mutationCache = client.getMutationCache();
  const queryCache = client.getQueryCache();
  const deserializeData = options?.defaultOptions?.deserializeData ?? client.getDefaultOptions().hydrate?.deserializeData ?? defaultTransformerFn;
  const mutations = dehydratedState.mutations || [];
  const queries = dehydratedState.queries || [];
  mutations.forEach(({ state, ...mutationOptions }) => {
    mutationCache.build(
      client,
      {
        ...client.getDefaultOptions().hydrate?.mutations,
        ...options?.defaultOptions?.mutations,
        ...mutationOptions
      },
      state
    );
  });
  queries.forEach(
    ({ queryKey, state, queryHash, meta, promise, dehydratedAt }) => {
      const syncData = promise ? tryResolveSync(promise) : void 0;
      const rawData = state.data === void 0 ? syncData?.data : state.data;
      const data = rawData === void 0 ? rawData : deserializeData(rawData);
      let query = queryCache.get(queryHash);
      const existingQueryIsPending = query?.state.status === "pending";
      const existingQueryIsFetching = query?.state.fetchStatus === "fetching";
      if (query) {
        const hasNewerSyncData = syncData && // We only need this undefined check to handle older dehydration
        // payloads that might not have dehydratedAt
        dehydratedAt !== void 0 && dehydratedAt > query.state.dataUpdatedAt;
        if (state.dataUpdatedAt > query.state.dataUpdatedAt || hasNewerSyncData) {
          const { fetchStatus: _ignored, ...serializedState } = state;
          query.setState({
            ...serializedState,
            data
          });
        }
      } else {
        query = queryCache.build(
          client,
          {
            ...client.getDefaultOptions().hydrate?.queries,
            ...options?.defaultOptions?.queries,
            queryKey,
            queryHash,
            meta
          },
          // Reset fetch status to idle to avoid
          // query being stuck in fetching state upon hydration
          {
            ...state,
            data,
            fetchStatus: "idle",
            status: data !== void 0 ? "success" : state.status
          }
        );
      }
      if (promise && !existingQueryIsPending && !existingQueryIsFetching && // Only hydrate if dehydration is newer than any existing data,
      // this is always true for new queries
      (dehydratedAt === void 0 || dehydratedAt > query.state.dataUpdatedAt)) {
        void query.fetch(void 0, {
          // RSC transformed promises are not thenable
          initialPromise: Promise.resolve(promise).then(deserializeData)
        });
      }
    }
  );
}

//# sourceMappingURL=hydration.js.map
;// ./node_modules/@tanstack/query-core/build/modern/notifyManager.js
// src/notifyManager.ts

var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = defaultScheduler;
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  return {
    batch: (callback) => {
      let result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    },
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (fn) => {
      notifyFn = fn;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (fn) => {
      batchNotifyFn = fn;
    },
    setScheduler: (fn) => {
      scheduleFn = fn;
    }
  };
}
var notifyManager_notifyManager = createNotifyManager();

//# sourceMappingURL=notifyManager.js.map
;// ./node_modules/@tanstack/query-core/build/modern/onlineManager.js
// src/onlineManager.ts


var OnlineManager = class extends Subscribable {
  #online = true;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onOnline) => {
      if (!isServer && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup(this.setOnline.bind(this));
  }
  setOnline(online) {
    const changed = this.#online !== online;
    if (changed) {
      this.#online = online;
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return this.#online;
  }
};
var onlineManager = new OnlineManager();

//# sourceMappingURL=onlineManager.js.map
;// ./node_modules/@tanstack/query-core/build/modern/retryer.js
// src/retryer.ts




function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
  return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
  constructor(options) {
    super("CancelledError");
    this.revert = options?.revert;
    this.silent = options?.silent;
  }
};
function isCancelledError(value) {
  return value instanceof CancelledError;
}
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let continueFn;
  const thenable = pendingThenable();
  const isResolved = () => thenable.status !== "pending";
  const cancel = (cancelOptions) => {
    if (!isResolved()) {
      const error = new CancelledError(cancelOptions);
      reject(error);
      config.onCancel?.(error);
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
  const canStart = () => canFetch(config.networkMode) && config.canRun();
  const resolve = (value) => {
    if (!isResolved()) {
      continueFn?.();
      thenable.resolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved()) {
      continueFn?.();
      thenable.reject(value);
    }
  };
  const pause = () => {
    return new Promise((continueResolve) => {
      continueFn = (value) => {
        if (isResolved() || canContinue()) {
          continueResolve(value);
        }
      };
      config.onPause?.();
    }).then(() => {
      continueFn = void 0;
      if (!isResolved()) {
        config.onContinue?.();
      }
    });
  };
  const run = () => {
    if (isResolved()) {
      return;
    }
    let promiseOrValue;
    const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
    try {
      promiseOrValue = initialPromise ?? config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
      if (isResolved()) {
        return;
      }
      const retry = config.retry ?? (isServer ? 0 : 3);
      const retryDelay = config.retryDelay ?? defaultRetryDelay;
      const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
      if (isRetryCancelled || !shouldRetry) {
        reject(error);
        return;
      }
      failureCount++;
      config.onFail?.(failureCount, error);
      sleep(delay).then(() => {
        return canContinue() ? void 0 : pause();
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  };
  return {
    promise: thenable,
    status: () => thenable.status,
    cancel,
    continue: () => {
      continueFn?.();
      return thenable;
    },
    cancelRetry,
    continueRetry,
    canStart,
    start: () => {
      if (canStart()) {
        run();
      } else {
        pause().then(run);
      }
      return thenable;
    }
  };
}

//# sourceMappingURL=retryer.js.map
;// ./node_modules/@tanstack/query-core/build/modern/removable.js
// src/removable.ts


var Removable = class {
  #gcTimeout;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.gcTime)) {
      this.#gcTimeout = timeoutManager.setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime);
    }
  }
  updateGcTime(newGcTime) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      newGcTime ?? (isServer ? Infinity : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    if (this.#gcTimeout) {
      timeoutManager.clearTimeout(this.#gcTimeout);
      this.#gcTimeout = void 0;
    }
  }
};

//# sourceMappingURL=removable.js.map
;// ./node_modules/@tanstack/query-core/build/modern/query.js
// src/query.ts




var Query = class extends Removable {
  #initialState;
  #revertState;
  #cache;
  #client;
  #retryer;
  #defaultOptions;
  #abortSignalConsumed;
  constructor(config) {
    super();
    this.#abortSignalConsumed = false;
    this.#defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.#client = config.client;
    this.#cache = this.#client.getQueryCache();
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.#initialState = getDefaultState(this.options);
    this.state = config.state ?? this.#initialState;
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#retryer?.promise;
  }
  setOptions(options) {
    this.options = { ...this.#defaultOptions, ...options };
    this.updateGcTime(this.options.gcTime);
    if (this.state && this.state.data === void 0) {
      const defaultState = getDefaultState(this.options);
      if (defaultState.data !== void 0) {
        this.setData(defaultState.data, {
          updatedAt: defaultState.dataUpdatedAt,
          manual: true
        });
        this.#initialState = defaultState;
      }
    }
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      this.#cache.remove(this);
    }
  }
  setData(newData, options) {
    const data = replaceData(this.state.data, newData, this.options);
    this.#dispatch({
      data,
      type: "success",
      dataUpdatedAt: options?.updatedAt,
      manual: options?.manual
    });
    return data;
  }
  setState(state, setStateOptions) {
    this.#dispatch({ type: "setState", state, setStateOptions });
  }
  cancel(options) {
    const promise = this.#retryer?.promise;
    this.#retryer?.cancel(options);
    return promise ? promise.then(utils_noop).catch(utils_noop) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({ silent: true });
  }
  reset() {
    this.destroy();
    this.setState(this.#initialState);
  }
  isActive() {
    return this.observers.some(
      (observer) => resolveEnabled(observer.options.enabled, this) !== false
    );
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    }
    return this.options.queryFn === skipToken || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => resolveStaleTime(observer.options.staleTime, this) === "static"
      );
    }
    return false;
  }
  isStale() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => observer.getCurrentResult().isStale
      );
    }
    return this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(staleTime = 0) {
    if (this.state.data === void 0) {
      return true;
    }
    if (staleTime === "static") {
      return false;
    }
    if (this.state.isInvalidated) {
      return true;
    }
    return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  onOnline() {
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.#cache.notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (this.#retryer) {
          if (this.#abortSignalConsumed) {
            this.#retryer.cancel({ revert: true });
          } else {
            this.#retryer.cancelRetry();
          }
        }
        this.scheduleGc();
      }
      this.#cache.notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.#dispatch({ type: "invalidate" });
    }
  }
  async fetch(options, fetchOptions) {
    if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
    // re-start the fetch; there is a chance that the query is still in a
    // pending state when that happens
    this.#retryer?.status() !== "rejected") {
      if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
        this.cancel({ silent: true });
      } else if (this.#retryer) {
        this.#retryer.continueRetry();
        return this.#retryer.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x) => x.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    if (false) // removed by dead control flow
{}
    const abortController = new AbortController();
    const addSignalProperty = (object) => {
      Object.defineProperty(object, "signal", {
        enumerable: true,
        get: () => {
          this.#abortSignalConsumed = true;
          return abortController.signal;
        }
      });
    };
    const fetchFn = () => {
      const queryFn = ensureQueryFn(this.options, fetchOptions);
      const createQueryFnContext = () => {
        const queryFnContext2 = {
          client: this.#client,
          queryKey: this.queryKey,
          meta: this.meta
        };
        addSignalProperty(queryFnContext2);
        return queryFnContext2;
      };
      const queryFnContext = createQueryFnContext();
      this.#abortSignalConsumed = false;
      if (this.options.persister) {
        return this.options.persister(
          queryFn,
          queryFnContext,
          this
        );
      }
      return queryFn(queryFnContext);
    };
    const createFetchContext = () => {
      const context2 = {
        fetchOptions,
        options: this.options,
        queryKey: this.queryKey,
        client: this.#client,
        state: this.state,
        fetchFn
      };
      addSignalProperty(context2);
      return context2;
    };
    const context = createFetchContext();
    this.options.behavior?.onFetch(context, this);
    this.#revertState = this.state;
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
      this.#dispatch({ type: "fetch", meta: context.fetchOptions?.meta });
    }
    this.#retryer = createRetryer({
      initialPromise: fetchOptions?.initialPromise,
      fn: context.fetchFn,
      onCancel: (error) => {
        if (error instanceof CancelledError && error.revert) {
          this.setState({
            ...this.#revertState,
            fetchStatus: "idle"
          });
        }
        abortController.abort();
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue: () => {
        this.#dispatch({ type: "continue" });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode,
      canRun: () => true
    });
    try {
      const data = await this.#retryer.start();
      if (data === void 0) {
        if (false) // removed by dead control flow
{}
        throw new Error(`${this.queryHash} data is undefined`);
      }
      this.setData(data);
      this.#cache.config.onSuccess?.(data, this);
      this.#cache.config.onSettled?.(
        data,
        this.state.error,
        this
      );
      return data;
    } catch (error) {
      if (error instanceof CancelledError) {
        if (error.silent) {
          return this.#retryer.promise;
        } else if (error.revert) {
          if (this.state.data === void 0) {
            throw error;
          }
          return this.state.data;
        }
      }
      this.#dispatch({
        type: "error",
        error
      });
      this.#cache.config.onError?.(
        error,
        this
      );
      this.#cache.config.onSettled?.(
        this.state.data,
        error,
        this
      );
      throw error;
    } finally {
      this.scheduleGc();
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };
        case "pause":
          return {
            ...state,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...state,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...state,
            ...fetchState(state.data, this.options),
            fetchMeta: action.meta ?? null
          };
        case "success":
          const newState = {
            ...state,
            data: action.data,
            dataUpdateCount: state.dataUpdateCount + 1,
            dataUpdatedAt: action.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!action.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
          this.#revertState = action.manual ? newState : void 0;
          return newState;
        case "error":
          const error = action.error;
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...state,
            isInvalidated: true
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager_notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate();
      });
      this.#cache.notify({ query: this, type: "updated", action });
    });
  }
};
function fetchState(data, options) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
    ...data === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function getDefaultState(options) {
  const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
  const hasData = data !== void 0;
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? "success" : "pending",
    fetchStatus: "idle"
  };
}

//# sourceMappingURL=query.js.map
;// ./node_modules/@tanstack/query-core/build/modern/queryObserver.js
// src/queryObserver.ts







var queryObserver_QueryObserver = class extends Subscribable {
  constructor(client, options) {
    super();
    this.options = options;
    this.#client = client;
    this.#selectError = null;
    this.#currentThenable = pendingThenable();
    this.bindMethods();
    this.setOptions(options);
  }
  #client;
  #currentQuery = void 0;
  #currentQueryInitialState = void 0;
  #currentResult = void 0;
  #currentResultState;
  #currentResultOptions;
  #currentThenable;
  #selectError;
  #selectFn;
  #selectResult;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #lastQueryWithDefinedData;
  #staleTimeoutId;
  #refetchIntervalId;
  #currentRefetchInterval;
  #trackedProps = /* @__PURE__ */ new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.#currentQuery, this.options)) {
        this.#executeFetch();
      } else {
        this.updateResult();
      }
      this.#updateTimers();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.#clearStaleTimeout();
    this.#clearRefetchInterval();
    this.#currentQuery.removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = this.#currentQuery;
    this.options = this.#client.defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, this.#currentQuery) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    this.#updateQuery();
    this.#currentQuery.setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.#currentQuery,
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      this.#currentQuery,
      prevQuery,
      this.options,
      prevOptions
    )) {
      this.#executeFetch();
    }
    this.updateResult();
    if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || resolveStaleTime(this.options.staleTime, this.#currentQuery) !== resolveStaleTime(prevOptions.staleTime, this.#currentQuery))) {
      this.#updateStaleTimeout();
    }
    const nextRefetchInterval = this.#computeRefetchInterval();
    if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
      this.#updateRefetchInterval(nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = this.#client.getQueryCache().build(this.#client, options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      this.#currentResult = result;
      this.#currentResultOptions = this.options;
      this.#currentResultState = this.#currentQuery.state;
    }
    return result;
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key) => {
        this.trackProp(key);
        onPropTracked?.(key);
        if (key === "promise" && !this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
          this.#currentThenable.reject(
            new Error(
              "experimental_prefetchInRender feature flag is not enabled"
            )
          );
        }
        return Reflect.get(target, key);
      }
    });
  }
  trackProp(key) {
    this.#trackedProps.add(key);
  }
  getCurrentQuery() {
    return this.#currentQuery;
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = this.#client.defaultQueryOptions(options);
    const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return this.#executeFetch({
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return this.#currentResult;
    });
  }
  #executeFetch(fetchOptions) {
    this.#updateQuery();
    let promise = this.#currentQuery.fetch(
      this.options,
      fetchOptions
    );
    if (!fetchOptions?.throwOnError) {
      promise = promise.catch(utils_noop);
    }
    return promise;
  }
  #updateStaleTimeout() {
    this.#clearStaleTimeout();
    const staleTime = resolveStaleTime(
      this.options.staleTime,
      this.#currentQuery
    );
    if (isServer || this.#currentResult.isStale || !isValidTimeout(staleTime)) {
      return;
    }
    const time = timeUntilStale(this.#currentResult.dataUpdatedAt, staleTime);
    const timeout = time + 1;
    this.#staleTimeoutId = timeoutManager.setTimeout(() => {
      if (!this.#currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }
  #computeRefetchInterval() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
  }
  #updateRefetchInterval(nextInterval) {
    this.#clearRefetchInterval();
    this.#currentRefetchInterval = nextInterval;
    if (isServer || resolveEnabled(this.options.enabled, this.#currentQuery) === false || !isValidTimeout(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
      return;
    }
    this.#refetchIntervalId = timeoutManager.setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
        this.#executeFetch();
      }
    }, this.#currentRefetchInterval);
  }
  #updateTimers() {
    this.#updateStaleTimeout();
    this.#updateRefetchInterval(this.#computeRefetchInterval());
  }
  #clearStaleTimeout() {
    if (this.#staleTimeoutId) {
      timeoutManager.clearTimeout(this.#staleTimeoutId);
      this.#staleTimeoutId = void 0;
    }
  }
  #clearRefetchInterval() {
    if (this.#refetchIntervalId) {
      timeoutManager.clearInterval(this.#refetchIntervalId);
      this.#refetchIntervalId = void 0;
    }
  }
  createResult(query, options) {
    const prevQuery = this.#currentQuery;
    const prevOptions = this.options;
    const prevResult = this.#currentResult;
    const prevResultState = this.#currentResultState;
    const prevResultOptions = this.#currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...fetchState(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          this.#lastQueryWithDefinedData?.state.data,
          this.#lastQueryWithDefinedData
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult?.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
        data = this.#selectResult;
      } else {
        try {
          this.#selectFn = options.select;
          data = options.select(data);
          data = replaceData(prevResult?.data, data, options);
          this.#selectResult = data;
          this.#selectError = null;
        } catch (selectError) {
          this.#selectError = selectError;
        }
      }
    }
    if (this.#selectError) {
      error = this.#selectError;
      data = this.#selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: this.#currentThenable,
      isEnabled: resolveEnabled(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const finalizeThenableIfPossible = (thenable) => {
        if (nextResult.status === "error") {
          thenable.reject(nextResult.error);
        } else if (nextResult.data !== void 0) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = this.#currentThenable = nextResult.promise = pendingThenable();
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = this.#currentThenable;
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = this.#currentResult;
    const nextResult = this.createResult(this.#currentQuery, this.options);
    this.#currentResultState = this.#currentQuery.state;
    this.#currentResultOptions = this.options;
    if (this.#currentResultState.data !== void 0) {
      this.#lastQueryWithDefinedData = this.#currentQuery;
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    this.#currentResult = nextResult;
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? this.#trackedProps
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(this.#currentResult).some((key) => {
        const typedKey = key;
        const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    this.#notify({ listeners: shouldNotifyListeners() });
  }
  #updateQuery() {
    const query = this.#client.getQueryCache().build(this.#client, this.options);
    if (query === this.#currentQuery) {
      return;
    }
    const prevQuery = this.#currentQuery;
    this.#currentQuery = query;
    this.#currentQueryInitialState = query.state;
    if (this.hasListeners()) {
      prevQuery?.removeObserver(this);
      query.addObserver(this);
    }
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      this.#updateTimers();
    }
  }
  #notify(notifyOptions) {
    notifyManager_notifyManager.batch(() => {
      if (notifyOptions.listeners) {
        this.listeners.forEach((listener) => {
          listener(this.#currentResult);
        });
      }
      this.#client.getQueryCache().notify({
        query: this.#currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
};
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}

//# sourceMappingURL=queryObserver.js.map
;// ./node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
// src/infiniteQueryBehavior.ts

function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      const options = context.options;
      const direction = context.fetchOptions?.meta?.fetchMore?.direction;
      const oldPages = context.state.data?.pages || [];
      const oldPageParams = context.state.data?.pageParams || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = async () => {
        let cancelled = false;
        const addSignalProperty = (object) => {
          Object.defineProperty(object, "signal", {
            enumerable: true,
            get: () => {
              if (context.signal.aborted) {
                cancelled = true;
              } else {
                context.signal.addEventListener("abort", () => {
                  cancelled = true;
                });
              }
              return context.signal;
            }
          });
        };
        const queryFn = ensureQueryFn(context.options, context.fetchOptions);
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const createQueryFnContext = () => {
            const queryFnContext2 = {
              client: context.client,
              queryKey: context.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext2);
            return queryFnContext2;
          };
          const queryFnContext = createQueryFnContext();
          const page = await queryFn(queryFnContext);
          const { maxPages } = context.options;
          const addTo = previous ? addToStart : utils_addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        };
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages ?? oldPages.length;
          do {
            const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = await fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          return context.options.persister?.(
            fetchFn,
            {
              client: context.client,
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
  if (!data) return false;
  return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
  if (!data || !options.getPreviousPageParam) return false;
  return getPreviousPageParam(options, data) != null;
}

//# sourceMappingURL=infiniteQueryBehavior.js.map
;// ./node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js
// src/infiniteQueryObserver.ts


var infiniteQueryObserver_InfiniteQueryObserver = class extends queryObserver_QueryObserver {
  constructor(client, options) {
    super(client, options);
  }
  bindMethods() {
    super.bindMethods();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(options) {
    super.setOptions({
      ...options,
      behavior: infiniteQueryBehavior()
    });
  }
  getOptimisticResult(options) {
    options.behavior = infiniteQueryBehavior();
    return super.getOptimisticResult(options);
  }
  fetchNextPage(options) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: { direction: "forward" }
      }
    });
  }
  fetchPreviousPage(options) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: { direction: "backward" }
      }
    });
  }
  createResult(query, options) {
    const { state } = query;
    const parentResult = super.createResult(query, options);
    const { isFetching, isRefetching, isError, isRefetchError } = parentResult;
    const fetchDirection = state.fetchMeta?.fetchMore?.direction;
    const isFetchNextPageError = isError && fetchDirection === "forward";
    const isFetchingNextPage = isFetching && fetchDirection === "forward";
    const isFetchPreviousPageError = isError && fetchDirection === "backward";
    const isFetchingPreviousPage = isFetching && fetchDirection === "backward";
    const result = {
      ...parentResult,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: hasNextPage(options, state.data),
      hasPreviousPage: hasPreviousPage(options, state.data),
      isFetchNextPageError,
      isFetchingNextPage,
      isFetchPreviousPageError,
      isFetchingPreviousPage,
      isRefetchError: isRefetchError && !isFetchNextPageError && !isFetchPreviousPageError,
      isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
    };
    return result;
  }
};

//# sourceMappingURL=infiniteQueryObserver.js.map
;// ./node_modules/@tanstack/query-core/build/modern/mutation.js
// src/mutation.ts



var Mutation = class extends Removable {
  #observers;
  #mutationCache;
  #retryer;
  constructor(config) {
    super();
    this.mutationId = config.mutationId;
    this.#mutationCache = config.mutationCache;
    this.#observers = [];
    this.state = config.state || mutation_getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = options;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
      this.clearGcTimeout();
      this.#mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    this.#observers = this.#observers.filter((x) => x !== observer);
    this.scheduleGc();
    this.#mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!this.#observers.length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        this.#mutationCache.remove(this);
      }
    }
  }
  continue() {
    return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(variables) {
    const onContinue = () => {
      this.#dispatch({ type: "continue" });
    };
    this.#retryer = createRetryer({
      fn: () => {
        if (!this.options.mutationFn) {
          return Promise.reject(new Error("No mutationFn found"));
        }
        return this.options.mutationFn(variables);
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#mutationCache.canRun(this)
    });
    const restored = this.state.status === "pending";
    const isPaused = !this.#retryer.canStart();
    try {
      if (restored) {
        onContinue();
      } else {
        this.#dispatch({ type: "pending", variables, isPaused });
        await this.#mutationCache.config.onMutate?.(
          variables,
          this
        );
        const context = await this.options.onMutate?.(variables);
        if (context !== this.state.context) {
          this.#dispatch({
            type: "pending",
            context,
            variables,
            isPaused
          });
        }
      }
      const data = await this.#retryer.start();
      await this.#mutationCache.config.onSuccess?.(
        data,
        variables,
        this.state.context,
        this
      );
      await this.options.onSuccess?.(data, variables, this.state.context);
      await this.#mutationCache.config.onSettled?.(
        data,
        null,
        this.state.variables,
        this.state.context,
        this
      );
      await this.options.onSettled?.(data, null, variables, this.state.context);
      this.#dispatch({ type: "success", data });
      return data;
    } catch (error) {
      try {
        await this.#mutationCache.config.onError?.(
          error,
          variables,
          this.state.context,
          this
        );
        await this.options.onError?.(
          error,
          variables,
          this.state.context
        );
        await this.#mutationCache.config.onSettled?.(
          void 0,
          error,
          this.state.variables,
          this.state.context,
          this
        );
        await this.options.onSettled?.(
          void 0,
          error,
          variables,
          this.state.context
        );
        throw error;
      } finally {
        this.#dispatch({ type: "error", error });
      }
    } finally {
      this.#mutationCache.runNext(this);
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "pending":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: action.isPaused,
            status: "pending",
            variables: action.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager_notifyManager.batch(() => {
      this.#observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.#mutationCache.notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
};
function mutation_getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}

//# sourceMappingURL=mutation.js.map
;// ./node_modules/@tanstack/query-core/build/modern/mutationCache.js
// src/mutationCache.ts




var MutationCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#mutations = /* @__PURE__ */ new Set();
    this.#scopes = /* @__PURE__ */ new Map();
    this.#mutationId = 0;
  }
  #mutations;
  #scopes;
  #mutationId;
  build(client, options, state) {
    const mutation = new Mutation({
      mutationCache: this,
      mutationId: ++this.#mutationId,
      options: client.defaultMutationOptions(options),
      state
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.#mutations.add(mutation);
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const scopedMutations = this.#scopes.get(scope);
      if (scopedMutations) {
        scopedMutations.push(mutation);
      } else {
        this.#scopes.set(scope, [mutation]);
      }
    }
    this.notify({ type: "added", mutation });
  }
  remove(mutation) {
    if (this.#mutations.delete(mutation)) {
      const scope = scopeFor(mutation);
      if (typeof scope === "string") {
        const scopedMutations = this.#scopes.get(scope);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const index = scopedMutations.indexOf(mutation);
            if (index !== -1) {
              scopedMutations.splice(index, 1);
            }
          } else if (scopedMutations[0] === mutation) {
            this.#scopes.delete(scope);
          }
        }
      }
    }
    this.notify({ type: "removed", mutation });
  }
  canRun(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const mutationsWithSameScope = this.#scopes.get(scope);
      const firstPendingMutation = mutationsWithSameScope?.find(
        (m) => m.state.status === "pending"
      );
      return !firstPendingMutation || firstPendingMutation === mutation;
    } else {
      return true;
    }
  }
  runNext(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const foundMutation = this.#scopes.get(scope)?.find((m) => m !== mutation && m.state.isPaused);
      return foundMutation?.continue() ?? Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  clear() {
    notifyManager_notifyManager.batch(() => {
      this.#mutations.forEach((mutation) => {
        this.notify({ type: "removed", mutation });
      });
      this.#mutations.clear();
      this.#scopes.clear();
    });
  }
  getAll() {
    return Array.from(this.#mutations);
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (mutation) => matchMutation(defaultedFilters, mutation)
    );
  }
  findAll(filters = {}) {
    return this.getAll().filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager_notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
    return notifyManager_notifyManager.batch(
      () => Promise.all(
        pausedMutations.map((mutation) => mutation.continue().catch(utils_noop))
      )
    );
  }
};
function scopeFor(mutation) {
  return mutation.options.scope?.id;
}

//# sourceMappingURL=mutationCache.js.map
;// ./node_modules/@tanstack/query-core/build/modern/mutationObserver.js
// src/mutationObserver.ts




var MutationObserver = class extends Subscribable {
  #client;
  #currentResult = void 0;
  #currentMutation;
  #mutateOptions;
  constructor(client, options) {
    super();
    this.#client = client;
    this.setOptions(options);
    this.bindMethods();
    this.#updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    this.options = this.#client.defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.#currentMutation,
        observer: this
      });
    }
    if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (this.#currentMutation?.state.status === "pending") {
      this.#currentMutation.setOptions(this.options);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#currentMutation?.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.#updateResult();
    this.#notify(action);
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  reset() {
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = void 0;
    this.#updateResult();
    this.#notify();
  }
  mutate(variables, options) {
    this.#mutateOptions = options;
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
    this.#currentMutation.addObserver(this);
    return this.#currentMutation.execute(variables);
  }
  #updateResult() {
    const state = this.#currentMutation?.state ?? mutation_getDefaultState();
    this.#currentResult = {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #notify(action) {
    notifyManager_notifyManager.batch(() => {
      if (this.#mutateOptions && this.hasListeners()) {
        const variables = this.#currentResult.variables;
        const context = this.#currentResult.context;
        if (action?.type === "success") {
          this.#mutateOptions.onSuccess?.(action.data, variables, context);
          this.#mutateOptions.onSettled?.(action.data, null, variables, context);
        } else if (action?.type === "error") {
          this.#mutateOptions.onError?.(action.error, variables, context);
          this.#mutateOptions.onSettled?.(
            void 0,
            action.error,
            variables,
            context
          );
        }
      }
      this.listeners.forEach((listener) => {
        listener(this.#currentResult);
      });
    });
  }
};

//# sourceMappingURL=mutationObserver.js.map
;// ./node_modules/@tanstack/query-core/build/modern/queriesObserver.js
// src/queriesObserver.ts




function difference(array1, array2) {
  const excludeSet = new Set(array2);
  return array1.filter((x) => !excludeSet.has(x));
}
function replaceAt(array, index, value) {
  const copy = array.slice(0);
  copy[index] = value;
  return copy;
}
var queriesObserver_QueriesObserver = class extends Subscribable {
  #client;
  #result;
  #queries;
  #options;
  #observers;
  #combinedResult;
  #lastCombine;
  #lastResult;
  #observerMatches = [];
  constructor(client, queries, options) {
    super();
    this.#client = client;
    this.#options = options;
    this.#queries = [];
    this.#observers = [];
    this.#result = [];
    this.setQueries(queries);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#observers.forEach((observer) => {
        observer.subscribe((result) => {
          this.#onUpdate(observer, result);
        });
      });
    }
  }
  onUnsubscribe() {
    if (!this.listeners.size) {
      this.destroy();
    }
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.#observers.forEach((observer) => {
      observer.destroy();
    });
  }
  setQueries(queries, options) {
    this.#queries = queries;
    this.#options = options;
    if (false) // removed by dead control flow
{}
    notifyManager_notifyManager.batch(() => {
      const prevObservers = this.#observers;
      const newObserverMatches = this.#findMatchingObservers(this.#queries);
      this.#observerMatches = newObserverMatches;
      newObserverMatches.forEach(
        (match) => match.observer.setOptions(match.defaultedQueryOptions)
      );
      const newObservers = newObserverMatches.map((match) => match.observer);
      const newResult = newObservers.map(
        (observer) => observer.getCurrentResult()
      );
      const hasLengthChange = prevObservers.length !== newObservers.length;
      const hasIndexChange = newObservers.some(
        (observer, index) => observer !== prevObservers[index]
      );
      const hasStructuralChange = hasLengthChange || hasIndexChange;
      const hasResultChange = hasStructuralChange ? true : newResult.some((result, index) => {
        const prev = this.#result[index];
        return !prev || !shallowEqualObjects(result, prev);
      });
      if (!hasStructuralChange && !hasResultChange) return;
      if (hasStructuralChange) {
        this.#observers = newObservers;
      }
      this.#result = newResult;
      if (!this.hasListeners()) return;
      if (hasStructuralChange) {
        difference(prevObservers, newObservers).forEach((observer) => {
          observer.destroy();
        });
        difference(newObservers, prevObservers).forEach((observer) => {
          observer.subscribe((result) => {
            this.#onUpdate(observer, result);
          });
        });
      }
      this.#notify();
    });
  }
  getCurrentResult() {
    return this.#result;
  }
  getQueries() {
    return this.#observers.map((observer) => observer.getCurrentQuery());
  }
  getObservers() {
    return this.#observers;
  }
  getOptimisticResult(queries, combine) {
    const matches = this.#findMatchingObservers(queries);
    const result = matches.map(
      (match) => match.observer.getOptimisticResult(match.defaultedQueryOptions)
    );
    return [
      result,
      (r) => {
        return this.#combineResult(r ?? result, combine);
      },
      () => {
        return this.#trackResult(result, matches);
      }
    ];
  }
  #trackResult(result, matches) {
    return matches.map((match, index) => {
      const observerResult = result[index];
      return !match.defaultedQueryOptions.notifyOnChangeProps ? match.observer.trackResult(observerResult, (accessedProp) => {
        matches.forEach((m) => {
          m.observer.trackProp(accessedProp);
        });
      }) : observerResult;
    });
  }
  #combineResult(input, combine) {
    if (combine) {
      if (!this.#combinedResult || this.#result !== this.#lastResult || combine !== this.#lastCombine) {
        this.#lastCombine = combine;
        this.#lastResult = this.#result;
        this.#combinedResult = utils_replaceEqualDeep(
          this.#combinedResult,
          combine(input)
        );
      }
      return this.#combinedResult;
    }
    return input;
  }
  #findMatchingObservers(queries) {
    const prevObserversMap = new Map(
      this.#observers.map((observer) => [observer.options.queryHash, observer])
    );
    const observers = [];
    queries.forEach((options) => {
      const defaultedOptions = this.#client.defaultQueryOptions(options);
      const match = prevObserversMap.get(defaultedOptions.queryHash);
      if (match) {
        observers.push({
          defaultedQueryOptions: defaultedOptions,
          observer: match
        });
      } else {
        observers.push({
          defaultedQueryOptions: defaultedOptions,
          observer: new queryObserver_QueryObserver(this.#client, defaultedOptions)
        });
      }
    });
    return observers;
  }
  #onUpdate(observer, result) {
    const index = this.#observers.indexOf(observer);
    if (index !== -1) {
      this.#result = replaceAt(this.#result, index, result);
      this.#notify();
    }
  }
  #notify() {
    if (this.hasListeners()) {
      const previousResult = this.#combinedResult;
      const newTracked = this.#trackResult(this.#result, this.#observerMatches);
      const newResult = this.#combineResult(newTracked, this.#options?.combine);
      if (previousResult !== newResult) {
        notifyManager_notifyManager.batch(() => {
          this.listeners.forEach((listener) => {
            listener(this.#result);
          });
        });
      }
    }
  }
};

//# sourceMappingURL=queriesObserver.js.map
;// ./node_modules/@tanstack/query-core/build/modern/queryCache.js
// src/queryCache.ts




var QueryCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#queries = /* @__PURE__ */ new Map();
  }
  #queries;
  build(client, options, state) {
    const queryKey = options.queryKey;
    const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        client,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.#queries.has(query.queryHash)) {
      this.#queries.set(query.queryHash, query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.#queries.get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) {
        this.#queries.delete(query.queryHash);
      }
      this.notify({ type: "removed", query });
    }
  }
  clear() {
    notifyManager_notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.#queries.get(queryHash);
  }
  getAll() {
    return [...this.#queries.values()];
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (query) => matchQuery(defaultedFilters, query)
    );
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
  }
  notify(event) {
    notifyManager_notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager_notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager_notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
};

//# sourceMappingURL=queryCache.js.map
;// ./node_modules/@tanstack/query-core/build/modern/queryClient.js
// src/queryClient.ts







var QueryClient = class {
  #queryCache;
  #mutationCache;
  #defaultOptions;
  #queryDefaults;
  #mutationDefaults;
  #mountCount;
  #unsubscribeFocus;
  #unsubscribeOnline;
  constructor(config = {}) {
    this.#queryCache = config.queryCache || new QueryCache();
    this.#mutationCache = config.mutationCache || new MutationCache();
    this.#defaultOptions = config.defaultOptions || {};
    this.#queryDefaults = /* @__PURE__ */ new Map();
    this.#mutationDefaults = /* @__PURE__ */ new Map();
    this.#mountCount = 0;
  }
  mount() {
    this.#mountCount++;
    if (this.#mountCount !== 1) return;
    this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
      if (focused) {
        await this.resumePausedMutations();
        this.#queryCache.onFocus();
      }
    });
    this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
      if (online) {
        await this.resumePausedMutations();
        this.#queryCache.onOnline();
      }
    });
  }
  unmount() {
    this.#mountCount--;
    if (this.#mountCount !== 0) return;
    this.#unsubscribeFocus?.();
    this.#unsubscribeFocus = void 0;
    this.#unsubscribeOnline?.();
    this.#unsubscribeOnline = void 0;
  }
  isFetching(filters) {
    return this.#queryCache.findAll({ ...filters, fetchStatus: "fetching" }).length;
  }
  isMutating(filters) {
    return this.#mutationCache.findAll({ ...filters, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(options.queryHash)?.state.data;
  }
  ensureQueryData(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = this.#queryCache.build(this, defaultedOptions);
    const cachedData = query.state.data;
    if (cachedData === void 0) {
      return this.fetchQuery(options);
    }
    if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) {
      void this.prefetchQuery(defaultedOptions);
    }
    return Promise.resolve(cachedData);
  }
  getQueriesData(filters) {
    return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    const query = this.#queryCache.get(
      defaultedOptions.queryHash
    );
    const prevData = query?.state.data;
    const data = functionalUpdate(updater, prevData);
    if (data === void 0) {
      return void 0;
    }
    return this.#queryCache.build(this, defaultedOptions).setData(data, { ...options, manual: true });
  }
  setQueriesData(filters, updater, options) {
    return notifyManager_notifyManager.batch(
      () => this.#queryCache.findAll(filters).map(({ queryKey }) => [
        queryKey,
        this.setQueryData(queryKey, updater, options)
      ])
    );
  }
  getQueryState(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(
      options.queryHash
    )?.state;
  }
  removeQueries(filters) {
    const queryCache = this.#queryCache;
    notifyManager_notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache = this.#queryCache;
    return notifyManager_notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(
        {
          type: "active",
          ...filters
        },
        options
      );
    });
  }
  cancelQueries(filters, cancelOptions = {}) {
    const defaultedCancelOptions = { revert: true, ...cancelOptions };
    const promises = notifyManager_notifyManager.batch(
      () => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions))
    );
    return Promise.all(promises).then(utils_noop).catch(utils_noop);
  }
  invalidateQueries(filters, options = {}) {
    return notifyManager_notifyManager.batch(() => {
      this.#queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if (filters?.refetchType === "none") {
        return Promise.resolve();
      }
      return this.refetchQueries(
        {
          ...filters,
          type: filters?.refetchType ?? filters?.type ?? "active"
        },
        options
      );
    });
  }
  refetchQueries(filters, options = {}) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options.cancelRefetch ?? true
    };
    const promises = notifyManager_notifyManager.batch(
      () => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
        let promise = query.fetch(void 0, fetchOptions);
        if (!fetchOptions.throwOnError) {
          promise = promise.catch(utils_noop);
        }
        return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
      })
    );
    return Promise.all(promises).then(utils_noop);
  }
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) {
      defaultedOptions.retry = false;
    }
    const query = this.#queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(
      resolveStaleTime(defaultedOptions.staleTime, query)
    ) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(options) {
    return this.fetchQuery(options).then(utils_noop).catch(utils_noop);
  }
  fetchInfiniteQuery(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(utils_noop).catch(utils_noop);
  }
  ensureInfiniteQueryData(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    if (onlineManager.isOnline()) {
      return this.#mutationCache.resumePausedMutations();
    }
    return Promise.resolve();
  }
  getQueryCache() {
    return this.#queryCache;
  }
  getMutationCache() {
    return this.#mutationCache;
  }
  getDefaultOptions() {
    return this.#defaultOptions;
  }
  setDefaultOptions(options) {
    this.#defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    this.#queryDefaults.set(hashKey(queryKey), {
      queryKey,
      defaultOptions: options
    });
  }
  getQueryDefaults(queryKey) {
    const defaults = [...this.#queryDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(queryKey, queryDefault.queryKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    this.#mutationDefaults.set(hashKey(mutationKey), {
      mutationKey,
      defaultOptions: options
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults = [...this.#mutationDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(mutationKey, queryDefault.mutationKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...this.#defaultOptions.queries,
      ...this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }
    if (defaultedOptions.refetchOnReconnect === void 0) {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (defaultedOptions.throwOnError === void 0) {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (!defaultedOptions.networkMode && defaultedOptions.persister) {
      defaultedOptions.networkMode = "offlineFirst";
    }
    if (defaultedOptions.queryFn === skipToken) {
      defaultedOptions.enabled = false;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options?._defaulted) {
      return options;
    }
    return {
      ...this.#defaultOptions.mutations,
      ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    this.#queryCache.clear();
    this.#mutationCache.clear();
  }
};

//# sourceMappingURL=queryClient.js.map
;// ./node_modules/@tanstack/query-core/build/modern/streamedQuery.js
// src/streamedQuery.ts

function streamedQuery({
  streamFn,
  refetchMode = "reset",
  reducer = (items, chunk) => addToEnd(items, chunk),
  initialValue = []
}) {
  return async (context) => {
    const query = context.client.getQueryCache().find({ queryKey: context.queryKey, exact: true });
    const isRefetch = !!query && query.state.data !== void 0;
    if (isRefetch && refetchMode === "reset") {
      query.setState({
        status: "pending",
        data: void 0,
        error: null,
        fetchStatus: "fetching"
      });
    }
    let result = initialValue;
    const stream = await streamFn(context);
    for await (const chunk of stream) {
      if (context.signal.aborted) {
        break;
      }
      if (!isRefetch || refetchMode !== "replace") {
        context.client.setQueryData(
          context.queryKey,
          (prev) => reducer(prev === void 0 ? initialValue : prev, chunk)
        );
      }
      result = reducer(result, chunk);
    }
    if (isRefetch && refetchMode === "replace" && !context.signal.aborted) {
      context.client.setQueryData(context.queryKey, result);
    }
    return context.client.getQueryData(context.queryKey);
  };
}

//# sourceMappingURL=streamedQuery.js.map
;// ./node_modules/@tanstack/query-core/build/modern/types.js
// src/types.ts
var dataTagSymbol = Symbol("dataTagSymbol");
var dataTagErrorSymbol = Symbol("dataTagErrorSymbol");
var unsetMarker = Symbol("unsetMarker");

//# sourceMappingURL=types.js.map
;// ./node_modules/@tanstack/query-core/build/modern/index.js
// src/index.ts



















//# sourceMappingURL=index.js.map
;// ./node_modules/@tanstack/react-query/build/modern/types.js
//# sourceMappingURL=types.js.map
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(848);
;// ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
"use client";

// src/QueryClientProvider.tsx


var QueryClientContext = react.createContext(
  void 0
);
var QueryClientProvider_useQueryClient = (queryClient) => {
  const client = react.useContext(QueryClientContext);
  if (queryClient) {
    return queryClient;
  }
  if (!client) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return client;
};
var QueryClientProvider = ({
  client,
  children
}) => {
  react.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(QueryClientContext.Provider, { value: client, children });
};

//# sourceMappingURL=QueryClientProvider.js.map
;// ./node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js
"use client";

// src/IsRestoringProvider.ts

var IsRestoringContext = react.createContext(false);
var IsRestoringProvider_useIsRestoring = () => react.useContext(IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;

//# sourceMappingURL=IsRestoringProvider.js.map
;// ./node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
"use client";

// src/QueryErrorResetBoundary.tsx


function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = react.createContext(createValue());
var QueryErrorResetBoundary_useQueryErrorResetBoundary = () => react.useContext(QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({
  children
}) => {
  const [value] = React.useState(() => createValue());
  return /* @__PURE__ */ jsx(QueryErrorResetBoundaryContext.Provider, { value, children: typeof children === "function" ? children(value) : children });
};

//# sourceMappingURL=QueryErrorResetBoundary.js.map
;// ./node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
"use client";

// src/errorBoundaryUtils.ts


var errorBoundaryUtils_ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var errorBoundaryUtils_useClearResetErrorBoundary = (errorResetBoundary) => {
  react.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var errorBoundaryUtils_getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
};

//# sourceMappingURL=errorBoundaryUtils.js.map
;// ./node_modules/@tanstack/react-query/build/modern/suspense.js
// src/suspense.ts
var suspense_defaultThrowOnError = (_error, query) => query.state.data === void 0;
var suspense_ensureSuspenseTimers = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
};
var suspense_willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var suspense_shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
var suspense_fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});

//# sourceMappingURL=suspense.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useQueries.js
"use client";

// src/useQueries.ts







function useQueries_useQueries({
  queries,
  ...options
}, queryClient) {
  const client = useQueryClient(queryClient);
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const defaultedQueries = React.useMemo(
    () => queries.map((opts) => {
      const defaultedOptions = client.defaultQueryOptions(
        opts
      );
      defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
      return defaultedOptions;
    }),
    [queries, client, isRestoring]
  );
  defaultedQueries.forEach((query) => {
    ensureSuspenseTimers(query);
    ensurePreventErrorBoundaryRetry(query, errorResetBoundary);
  });
  useClearResetErrorBoundary(errorResetBoundary);
  const [observer] = React.useState(
    () => new QueriesObserver(
      client,
      defaultedQueries,
      options
    )
  );
  const [optimisticResult, getCombinedResult, trackResult] = observer.getOptimisticResult(
    defaultedQueries,
    options.combine
  );
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  React.useSyncExternalStore(
    React.useCallback(
      (onStoreChange) => shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop,
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  React.useEffect(() => {
    observer.setQueries(
      defaultedQueries,
      options
    );
  }, [defaultedQueries, options, observer]);
  const shouldAtLeastOneSuspend = optimisticResult.some(
    (result, index) => shouldSuspend(defaultedQueries[index], result)
  );
  const suspensePromises = shouldAtLeastOneSuspend ? optimisticResult.flatMap((result, index) => {
    const opts = defaultedQueries[index];
    if (opts) {
      const queryObserver = new QueryObserver(client, opts);
      if (shouldSuspend(opts, result)) {
        return fetchOptimistic(opts, queryObserver, errorResetBoundary);
      } else if (willFetch(result, isRestoring)) {
        void fetchOptimistic(opts, queryObserver, errorResetBoundary);
      }
    }
    return [];
  }) : [];
  if (suspensePromises.length > 0) {
    throw Promise.all(suspensePromises);
  }
  const firstSingleResultWhichShouldThrow = optimisticResult.find(
    (result, index) => {
      const query = defaultedQueries[index];
      return query && getHasError({
        result,
        errorResetBoundary,
        throwOnError: query.throwOnError,
        query: client.getQueryCache().get(query.queryHash),
        suspense: query.suspense
      });
    }
  );
  if (firstSingleResultWhichShouldThrow?.error) {
    throw firstSingleResultWhichShouldThrow.error;
  }
  return getCombinedResult(trackResult());
}

//# sourceMappingURL=useQueries.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
"use client";

// src/useBaseQuery.ts







function useBaseQuery_useBaseQuery(options, Observer, queryClient) {
  if (false) // removed by dead control flow
{}
  const isRestoring = IsRestoringProvider_useIsRestoring();
  const errorResetBoundary = QueryErrorResetBoundary_useQueryErrorResetBoundary();
  const client = QueryClientProvider_useQueryClient(queryClient);
  const defaultedOptions = client.defaultQueryOptions(options);
  client.getDefaultOptions().queries?._experimental_beforeQuery?.(
    defaultedOptions
  );
  if (false) // removed by dead control flow
{}
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  suspense_ensureSuspenseTimers(defaultedOptions);
  errorBoundaryUtils_ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
  errorBoundaryUtils_useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = react.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  react.useSyncExternalStore(
    react.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager_notifyManager.batchCalls(onStoreChange)) : utils_noop;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  react.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if (suspense_shouldSuspend(defaultedOptions, result)) {
    throw suspense_fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (errorBoundaryUtils_getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query: client.getQueryCache().get(defaultedOptions.queryHash),
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  ;
  client.getDefaultOptions().queries?._experimental_afterQuery?.(
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !isServer && suspense_willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      suspense_fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      client.getQueryCache().get(defaultedOptions.queryHash)?.promise
    );
    promise?.catch(utils_noop).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}

//# sourceMappingURL=useBaseQuery.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useQuery.js
"use client";

// src/useQuery.ts


function useQuery(options, queryClient) {
  return useBaseQuery_useBaseQuery(options, queryObserver_QueryObserver, queryClient);
}

//# sourceMappingURL=useQuery.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js
"use client";

// src/useSuspenseQuery.ts



function useSuspenseQuery(options, queryClient) {
  if (false) // removed by dead control flow
{}
  return useBaseQuery(
    {
      ...options,
      enabled: true,
      suspense: true,
      throwOnError: defaultThrowOnError,
      placeholderData: void 0
    },
    QueryObserver,
    queryClient
  );
}

//# sourceMappingURL=useSuspenseQuery.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useSuspenseInfiniteQuery.js
"use client";

// src/useSuspenseInfiniteQuery.ts



function useSuspenseInfiniteQuery(options, queryClient) {
  if (false) // removed by dead control flow
{}
  return useBaseQuery(
    {
      ...options,
      enabled: true,
      suspense: true,
      throwOnError: defaultThrowOnError
    },
    InfiniteQueryObserver,
    queryClient
  );
}

//# sourceMappingURL=useSuspenseInfiniteQuery.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useSuspenseQueries.js
"use client";

// src/useSuspenseQueries.ts



function useSuspenseQueries(options, queryClient) {
  return useQueries(
    {
      ...options,
      queries: options.queries.map((query) => {
        if (false) // removed by dead control flow
{}
        return {
          ...query,
          suspense: true,
          throwOnError: defaultThrowOnError,
          enabled: true,
          placeholderData: void 0
        };
      })
    },
    queryClient
  );
}

//# sourceMappingURL=useSuspenseQueries.js.map
;// ./node_modules/@tanstack/react-query/build/modern/usePrefetchQuery.js
// src/usePrefetchQuery.tsx

function usePrefetchQuery(options, queryClient) {
  const client = useQueryClient(queryClient);
  if (!client.getQueryState(options.queryKey)) {
    client.prefetchQuery(options);
  }
}

//# sourceMappingURL=usePrefetchQuery.js.map
;// ./node_modules/@tanstack/react-query/build/modern/usePrefetchInfiniteQuery.js
// src/usePrefetchInfiniteQuery.tsx

function usePrefetchInfiniteQuery(options, queryClient) {
  const client = useQueryClient(queryClient);
  if (!client.getQueryState(options.queryKey)) {
    client.prefetchInfiniteQuery(options);
  }
}

//# sourceMappingURL=usePrefetchInfiniteQuery.js.map
;// ./node_modules/@tanstack/react-query/build/modern/queryOptions.js
// src/queryOptions.ts
function queryOptions(options) {
  return options;
}

//# sourceMappingURL=queryOptions.js.map
;// ./node_modules/@tanstack/react-query/build/modern/infiniteQueryOptions.js
// src/infiniteQueryOptions.ts
function infiniteQueryOptions(options) {
  return options;
}

//# sourceMappingURL=infiniteQueryOptions.js.map
;// ./node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js
"use client";

// src/HydrationBoundary.tsx



var HydrationBoundary = ({
  children,
  options = {},
  state,
  queryClient
}) => {
  const client = useQueryClient(queryClient);
  const optionsRef = React.useRef(options);
  optionsRef.current = options;
  const hydrationQueue = React.useMemo(() => {
    if (state) {
      if (typeof state !== "object") {
        return;
      }
      const queryCache = client.getQueryCache();
      const queries = state.queries || [];
      const newQueries = [];
      const existingQueries = [];
      for (const dehydratedQuery of queries) {
        const existingQuery = queryCache.get(dehydratedQuery.queryHash);
        if (!existingQuery) {
          newQueries.push(dehydratedQuery);
        } else {
          const hydrationIsNewer = dehydratedQuery.state.dataUpdatedAt > existingQuery.state.dataUpdatedAt || dehydratedQuery.promise && existingQuery.state.status !== "pending" && existingQuery.state.fetchStatus !== "fetching" && dehydratedQuery.dehydratedAt !== void 0 && dehydratedQuery.dehydratedAt > existingQuery.state.dataUpdatedAt;
          if (hydrationIsNewer) {
            existingQueries.push(dehydratedQuery);
          }
        }
      }
      if (newQueries.length > 0) {
        hydrate(client, { queries: newQueries }, optionsRef.current);
      }
      if (existingQueries.length > 0) {
        return existingQueries;
      }
    }
    return void 0;
  }, [client, state]);
  React.useEffect(() => {
    if (hydrationQueue) {
      hydrate(client, { queries: hydrationQueue }, optionsRef.current);
    }
  }, [client, hydrationQueue]);
  return children;
};

//# sourceMappingURL=HydrationBoundary.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useIsFetching.js
"use client";

// src/useIsFetching.ts



function useIsFetching(filters, queryClient) {
  const client = useQueryClient(queryClient);
  const queryCache = client.getQueryCache();
  return React.useSyncExternalStore(
    React.useCallback(
      (onStoreChange) => queryCache.subscribe(notifyManager.batchCalls(onStoreChange)),
      [queryCache]
    ),
    () => client.isFetching(filters),
    () => client.isFetching(filters)
  );
}

//# sourceMappingURL=useIsFetching.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useMutationState.js
"use client";

// src/useMutationState.ts



function useIsMutating(filters, queryClient) {
  const client = useQueryClient(queryClient);
  return useMutationState(
    { filters: { ...filters, status: "pending" } },
    client
  ).length;
}
function getResult(mutationCache, options) {
  return mutationCache.findAll(options.filters).map(
    (mutation) => options.select ? options.select(mutation) : mutation.state
  );
}
function useMutationState(options = {}, queryClient) {
  const mutationCache = useQueryClient(queryClient).getMutationCache();
  const optionsRef = React.useRef(options);
  const result = React.useRef(null);
  if (!result.current) {
    result.current = getResult(mutationCache, options);
  }
  React.useEffect(() => {
    optionsRef.current = options;
  });
  return React.useSyncExternalStore(
    React.useCallback(
      (onStoreChange) => mutationCache.subscribe(() => {
        const nextResult = replaceEqualDeep(
          result.current,
          getResult(mutationCache, optionsRef.current)
        );
        if (result.current !== nextResult) {
          result.current = nextResult;
          notifyManager.schedule(onStoreChange);
        }
      }),
      [mutationCache]
    ),
    () => result.current,
    () => result.current
  );
}

//# sourceMappingURL=useMutationState.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useMutation.js
"use client";

// src/useMutation.ts



function useMutation(options, queryClient) {
  const client = QueryClientProvider_useQueryClient(queryClient);
  const [observer] = react.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  react.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = react.useSyncExternalStore(
    react.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager_notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = react.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(utils_noop);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}

//# sourceMappingURL=useMutation.js.map
;// ./node_modules/@tanstack/react-query/build/modern/mutationOptions.js
// src/mutationOptions.ts
function mutationOptions(options) {
  return options;
}

//# sourceMappingURL=mutationOptions.js.map
;// ./node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js
"use client";

// src/useInfiniteQuery.ts


function useInfiniteQuery(options, queryClient) {
  return useBaseQuery(
    options,
    InfiniteQueryObserver,
    queryClient
  );
}

//# sourceMappingURL=useInfiniteQuery.js.map
;// ./node_modules/@tanstack/react-query/build/modern/index.js
// src/index.ts





















//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(159);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/welcomescreen.css
var welcomescreen = __webpack_require__(252);
;// ./src/styles/welcomescreen.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(welcomescreen/* default */.A, options);




       /* harmony default export */ const styles_welcomescreen = (welcomescreen/* default */.A && welcomescreen/* default */.A.locals ? welcomescreen/* default */.A.locals : undefined);

;// ./src/components/WelcomeScreen.tsx


const leftLines = new URL(/* asset import */ __webpack_require__(134), __webpack_require__.b).href;
const rightLines = new URL(/* asset import */ __webpack_require__(505), __webpack_require__.b).href;
const WelcomeScreen = ({ onAuthorize, onNeedHelp, authenticated, handleWelcomeScreen }) => {
    const [isCheckingAuth, setIsCheckingAuth] = (0,react.useState)(true);
    const [hasUserData, setHasUserData] = (0,react.useState)(false);
    const [isAuthorizing, setIsAuthorizing] = (0,react.useState)(false);
    (0,react.useEffect)(() => {
        const checkUserAuth = () => {
            const userinfo = localStorage.getItem("accessbit-userinfo");
            const hasData = userinfo && userinfo !== "null" && userinfo !== "undefined";
            setHasUserData(authenticated || !!hasData);
        };
        const timer = setTimeout(() => {
            checkUserAuth();
            setIsCheckingAuth(false);
        }, 2000); // 2 second delay
        return () => clearTimeout(timer);
    }, [authenticated]); // Add authenticated back to dependencies to react to auth changes
    // Separate useEffect to handle authentication changes
    (0,react.useEffect)(() => {
        if (authenticated) {
            setHasUserData(true);
            setIsAuthorizing(false);
        }
    }, [authenticated]);
    // Listen for auth completion when authorizing
    (0,react.useEffect)(() => {
        if (!isAuthorizing)
            return;
        const checkAuthCompletion = () => {
            const userinfo = localStorage.getItem("accessbit-userinfo");
            const hasData = userinfo && userinfo !== "null" && userinfo !== "undefined";
            if (hasData) {
                // OAuth completed successfully
                setHasUserData(true);
                setIsAuthorizing(false);
            }
        };
        // Check immediately
        checkAuthCompletion();
        // Listen for storage events (when popup stores data)
        const handleStorageChange = (event) => {
            if (event.key === 'accessbit-userinfo' && event.newValue) {
                checkAuthCompletion();
            }
        };
        // Listen for custom event (when postMessage is received)
        const handleAuthSuccess = () => {
            // Force immediate check and state update
            const userinfo = localStorage.getItem("accessbit-userinfo");
            const hasData = userinfo && userinfo !== "null" && userinfo !== "undefined";
            if (hasData) {
                setHasUserData(true);
                setIsAuthorizing(false);
            }
        };
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('accessbit-auth-success', handleAuthSuccess);
        // Poll for changes (fallback if events don't fire)
        const pollInterval = setInterval(() => {
            checkAuthCompletion();
        }, 500);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('accessbit-auth-success', handleAuthSuccess);
            clearInterval(pollInterval);
        };
    }, [isAuthorizing]);
    const handleAuthorizeClick = () => {
        setIsAuthorizing(true);
        onAuthorize();
    };
    return (react.createElement("div", { className: "welcome-screen" },
        react.createElement("div", { className: "welcome-main-content" },
            react.createElement("img", { src: leftLines, alt: "", className: "welcome-bg-lines-left" }),
            react.createElement("img", { src: rightLines, alt: "", className: "welcome-bg-lines-right" }),
            react.createElement("div", { className: "welcome-content" },
                react.createElement("h1", { className: "welcome-title" },
                    "Welcome to",
                    " ",
                    react.createElement("span", { className: "welcome-title-highlight" }, "AccessBit")),
                isCheckingAuth ? (react.createElement("p", { className: "welcome-instructions" }, "Checking your authentication status...")) : isAuthorizing ? (react.createElement("p", { className: "welcome-instructions" }, "Please complete the authorization process in the popup window...")) : hasUserData ? (react.createElement("p", { className: "welcome-instructions" }, "Click on Next and customize your widget and publish when you are ready.")) : (react.createElement("p", { className: "welcome-instructions" }, "The authorization process appears to be incomplete. To continue with the next step, please ensure that all necessary authorization steps have been successfully carried out.")),
                isCheckingAuth ? (react.createElement("button", { className: "welcome-authorize-btn", disabled: true }, "Loading...")) : isAuthorizing ? (react.createElement("button", { className: "welcome-authorize-btn", disabled: true }, "Authorizing...")) : hasUserData ? (react.createElement("button", { className: "welcome-authorize-btn scan-project", onClick: handleWelcomeScreen }, "Next")) : (react.createElement("button", { className: "welcome-authorize-btn", onClick: handleAuthorizeClick }, "Authorize"))))));
};
/* harmony default export */ const components_WelcomeScreen = (WelcomeScreen);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/customization.css
var customization = __webpack_require__(59);
;// ./src/styles/customization.css

      
      
      
      
      
      
      
      
      

var customization_options = {};

customization_options.styleTagTransform = (styleTagTransform_default());
customization_options.setAttributes = (setAttributesWithoutAttributes_default());
customization_options.insert = insertBySelector_default().bind(null, "head");
customization_options.domAPI = (styleDomAPI_default());
customization_options.insertStyleElement = (insertStyleElement_default());

var customization_update = injectStylesIntoStyleTag_default()(customization/* default */.A, customization_options);




       /* harmony default export */ const styles_customization = (customization/* default */.A && customization/* default */.A.locals ? customization/* default */.A.locals : undefined);

;// ./node_modules/@jaames/iro/dist/iro.es.js
/*!
 * iro.js v5.5.2
 * 2016-2021 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */

var n,u,t,i,r,o,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function s(n,l){for(var u in l){ n[u]=l[u]; }return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var t,i,r,o,f=arguments;if(l=s({},l),arguments.length>3){ for(u=[u],t=3;t<arguments.length;t++){ u.push(f[t]); } }if(null!=u&&(l.children=u),null!=n&&null!=n.defaultProps){ for(i in n.defaultProps){ void 0===l[i]&&(l[i]=n.defaultProps[i]); } }return o=l.key,null!=(r=l.ref)&&delete l.ref,null!=o&&delete l.key,v(n,l,o,r)}function v(l,u,t,i){var r={type:l,props:u,key:t,ref:i,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(r),r}function d(n){return n.children}function y(n){if(null==n||"boolean"==typeof n){ return null; }if("string"==typeof n||"number"==typeof n){ return v(null,n,null,null); }if(null!=n.__e||null!=n.__c){var l=v(n.type,n.props,n.key,null);return l.__e=n.__e,l}return n}function m(n,l){this.props=n,this.context=l;}function w(n,l){if(null==l){ return n.__p?w(n.__p,n.__p.__k.indexOf(n)+1):null; }for(var u;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){ return u.__e; } }return "function"==typeof n.type?w(n):null}function g(n){var l,u;if(null!=(n=n.__p)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break} }return g(n)}}function k(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&(i=n.debounceRendering,(n.debounceRendering||t)(_));}function _(){var n,l,t,i,r,o,f,e;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();){ n.__d&&(t=void 0,i=void 0,o=(r=(l=n).__v).__e,f=l.__P,e=l.u,l.u=!1,f&&(t=[],i=$(f,r,s({},r),l.__n,void 0!==f.ownerSVGElement,null,t,e,null==o?w(r):o),j(t,r),i!=o&&g(r))); }}function b(n,l,u,t,i,r,o,c,s){var h,v,p,d,y,m,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=r?r[0]:_?w(u,0):null),h=0,l.__k=x(l.__k,function(u){if(null!=u){if(u.__p=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type){ k[h]=void 0; }else { for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null;} }if(d=$(n,u,p=p||f,t,i,r,o,null,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[])).push(v,u.__c||d,u),null!=d){if(null==m&&(m=d),null!=u.l){ d=u.l,u.l=null; }else if(r==p||d!=c||null==d.parentNode){n:if(null==c||c.parentNode!==n){ n.appendChild(d); }else{for(y=c,v=0;(y=y.nextSibling)&&v<_;v+=2){ if(y==d){ break n; } }n.insertBefore(d,c);}"option"==l.type&&(n.value="");}c=d.nextSibling,"function"==typeof l.type&&(l.l=d);}}return h++,u}),l.__e=m,null!=r&&"function"!=typeof l.type){ for(h=r.length;h--;){ null!=r[h]&&a(r[h]); } }for(h=_;h--;){ null!=k[h]&&D(k[h],k[h]); }if(g){ for(h=0;h<g.length;h++){ A(g[h],g[++h],g[++h]); } }}function x(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n){ l&&u.push(l(null)); }else if(Array.isArray(n)){ for(var t=0;t<n.length;t++){ x(n[t],l,u); } }else { u.push(l?l(y(n)):n); }return u}function C(n,l,u,t,i){var r;for(r in u){ r in l||N(n,r,null,u[r],t); }for(r in l){ i&&"function"!=typeof l[r]||"value"===r||"checked"===r||u[r]===l[r]||N(n,r,l[r],u[r],t); }}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u;}function N(n,l,u,t,i){var r,o,f,e,c;if("key"===(l=i?"className"===l?"class":l:"class"===l?"className":l)||"children"===l);else if("style"===l){ if(r=n.style,"string"==typeof u){ r.cssText=u; }else{if("string"==typeof t&&(r.cssText="",t=null),t){ for(o in t){ u&&o in u||P(r,o,""); } }if(u){ for(f in u){ t&&u[f]===t[f]||P(r,f,u[f]); } }} }else{ "o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,T,e),(n.t||(n.t={}))[l]=u):n.removeEventListener(l,T,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u)); }}function T(l){return this.t[l.type](n.event?n.event(l):l)}function $(l,u,t,i,r,o,f,e,c,a){var h,v,p,y,w,g,k,_,C,P,N=u.type;if(void 0!==u.constructor){ return null; }(h=n.__b)&&h(u);try{n:if("function"==typeof N){if(_=u.props,C=(h=N.contextType)&&i[h.__c],P=h?C?C.props.value:h.__p:i,t.__c?k=(v=u.__c=t.__c).__p=v.__E:("prototype"in N&&N.prototype.render?u.__c=v=new N(_,P):(u.__c=v=new m(_,P),v.constructor=N,v.render=H),C&&C.sub(v),v.props=_,v.state||(v.state={}),v.context=P,v.__n=i,p=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=N.getDerivedStateFromProps&&s(v.__s==v.state?v.__s=s({},v.__s):v.__s,N.getDerivedStateFromProps(_,v.__s)),p){ null==N.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&f.push(v); }else{if(null==N.getDerivedStateFromProps&&null==e&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(_,P),!e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(_,v.__s,P)){for(v.props=_,v.state=v.__s,v.__d=!1,v.__v=u,u.__e=null!=c?c!==t.__e?c:t.__e:null,u.__k=t.__k,h=0;h<u.__k.length;h++){ u.__k[h]&&(u.__k[h].__p=u); }break n}null!=v.componentWillUpdate&&v.componentWillUpdate(_,v.__s,P);}for(y=v.props,w=v.state,v.context=P,v.props=_,v.state=v.__s,(h=n.__r)&&h(u),v.__d=!1,v.__v=u,v.__P=l,h=v.render(v.props,v.state,v.context),u.__k=x(null!=h&&h.type==d&&null==h.key?h.props.children:h),null!=v.getChildContext&&(i=s(s({},i),v.getChildContext())),p||null==v.getSnapshotBeforeUpdate||(g=v.getSnapshotBeforeUpdate(y,w)),b(l,u,t,i,r,o,f,c,a),v.base=u.__e;h=v.__h.pop();){ v.__s&&(v.state=v.__s),h.call(v); }p||null==y||null==v.componentDidUpdate||v.componentDidUpdate(y,w,g),k&&(v.__E=v.__p=null);}else { u.__e=z(t.__e,u,t,i,r,o,f,a); }(h=n.diffed)&&h(u);}catch(l){n.__e(l,u,t);}return u.__e}function j(l,u){for(var t;t=l.pop();){ try{t.componentDidMount();}catch(l){n.__e(l,t.__v);} }n.__c&&n.__c(u);}function z(n,l,u,t,i,r,o,c){var s,a,h,v,p=u.props,d=l.props;if(i="svg"===l.type||i,null==n&&null!=r){ for(s=0;s<r.length;s++){ if(null!=(a=r[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,r[s]=null;break} } }if(null==n){if(null===l.type){ return document.createTextNode(d); }n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),r=null;}return null===l.type?p!==d&&(null!=r&&(r[r.indexOf(n)]=null),n.data=d):l!==u&&(null!=r&&(r=e.slice.call(n.childNodes)),h=(p=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,c||(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||"")),C(n,d,p,i,c),l.__k=l.props.children,v||b(n,l,u,t,"foreignObject"!==l.type&&i,r,o,f,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))),n}function A(l,u,t){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,t);}}function D(l,u,t){var i,r,o;if(n.unmount&&n.unmount(l),(i=l.ref)&&A(i,null,u),t||"function"==typeof l.type||(t=null!=(r=l.__e)),l.__e=l.l=null,null!=(i=l.__c)){if(i.componentWillUnmount){ try{i.componentWillUnmount();}catch(l){n.__e(l,u);} }i.base=i.__P=null;}if(i=l.__k){ for(o=0;o<i.length;o++){ i[o]&&D(i[o],u,t); } }null!=r&&a(r);}function H(n,l,u){return this.constructor(n,u)}function I(l,u,t){var i,o,c;n.__p&&n.__p(l,u),o=(i=t===r)?null:t&&t.__k||u.__k,l=h(d,null,[l]),c=[],$(u,i?u.__k=l:(t||u).__k=l,o||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:o?null:e.slice.call(u.childNodes),c,!1,t||f,i),j(c,l);}n={},m.prototype.setState=function(n,l){var u=this.__s!==this.state&&this.__s||(this.__s=s({},this.state));("function"!=typeof n||(n=n(u,this.props)))&&s(u,n),null!=n&&this.__v&&(this.u=!1,l&&this.__h.push(l),k(this));},m.prototype.forceUpdate=function(n){this.__v&&(n&&this.__h.push(n),this.u=!0,k(this));},m.prototype.render=d,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=n.debounceRendering,n.__e=function(n,l,u){for(var t;l=l.__p;){ if((t=l.__c)&&!t.__p){ try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError){ t.setState(t.constructor.getDerivedStateFromError(n)); }else{if(null==t.componentDidCatch){ continue; }t.componentDidCatch(n);}return k(t.__E=t)}catch(l){n=l;} } }throw n},r=f,o=0;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) { descriptor.writable = true; }
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) { _defineProperties(Constructor.prototype, protoProps); }
  if (staticProps) { _defineProperties(Constructor, staticProps); }
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    var arguments$1 = arguments;

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments$1[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

// Some regular expressions for rgb() and hsl() Colors are borrowed from tinyColor
// https://github.com/bgrins/TinyColor
// Kelvin temperature math borrowed from Neil Barlett's implementation
// from https://github.com/neilbartlett/color-temperature
// https://www.w3.org/TR/css3-values/#integers
var CSS_INTEGER = '[-\\+]?\\d+%?'; // http://www.w3.org/TR/css3-values/#number-value

var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?'; // Allow positive/negative integer/number. Don't capture the either/or, just the entire outcome

var CSS_UNIT = '(?:' + CSS_NUMBER + ')|(?:' + CSS_INTEGER + ')'; // Parse function params
// Parens and commas are optional, and this also allows for whitespace between numbers

var PERMISSIVE_MATCH_3 = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?';
var PERMISSIVE_MATCH_4 = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?'; // Regex patterns for functional color strings

var REGEX_FUNCTIONAL_RGB = new RegExp('rgb' + PERMISSIVE_MATCH_3);
var REGEX_FUNCTIONAL_RGBA = new RegExp('rgba' + PERMISSIVE_MATCH_4);
var REGEX_FUNCTIONAL_HSL = new RegExp('hsl' + PERMISSIVE_MATCH_3);
var REGEX_FUNCTIONAL_HSLA = new RegExp('hsla' + PERMISSIVE_MATCH_4); // Color string parsing regex

var HEX_START = '^(?:#?|0x?)';
var HEX_INT_SINGLE = '([0-9a-fA-F]{1})';
var HEX_INT_DOUBLE = '([0-9a-fA-F]{2})';
var REGEX_HEX_3 = new RegExp(HEX_START + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + '$');
var REGEX_HEX_4 = new RegExp(HEX_START + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + '$');
var REGEX_HEX_6 = new RegExp(HEX_START + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + '$');
var REGEX_HEX_8 = new RegExp(HEX_START + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + '$'); // Kelvin temperature bounds

var KELVIN_MIN = 2000;
var KELVIN_MAX = 40000; // Math shorthands

var log = Math.log,
    round = Math.round,
    floor = Math.floor;
/**
 * @desc Clamp a number between a min and max value
 * @param num - input value
 * @param min - min allowed value
 * @param max - max allowed value
 */

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
/**
 * @desc Parse a css unit string - either regular int or a percentage number
 * @param str - css unit string
 * @param max - max unit value, used for calculating percentages
 */


function parseUnit(str, max) {
  var isPercentage = str.indexOf('%') > -1;
  var num = parseFloat(str);
  return isPercentage ? max / 100 * num : num;
}
/**
 * @desc Parse hex str to an int
 * @param str - hex string to parse
 */


function parseHexInt(str) {
  return parseInt(str, 16);
}
/**
 * @desc Convert nunber into to 2-digit hex
 * @param int - number to convert
 */


function intToHex(_int) {
  return _int.toString(16).padStart(2, '0');
}

var IroColor =
/*#__PURE__*/
function () {
  /**
    * @constructor Color object
    * @param value - initial color value
  */
  function IroColor(value, onChange) {
    // The default Color value
    this.$ = {
      h: 0,
      s: 0,
      v: 0,
      a: 1
    };
    if (value) { this.set(value); } // The watch callback function for this Color will be stored here

    this.onChange = onChange;
    this.initialValue = _extends({}, this.$); // copy initial value
  }
  /**
    * @desc Set the Color from any valid value
    * @param value - new color value
  */


  var _proto = IroColor.prototype;

  _proto.set = function set(value) {
    if (typeof value === 'string') {
      if (/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(value)) {
        this.hexString = value;
      } else if (/^rgba?/.test(value)) {
        this.rgbString = value;
      } else if (/^hsla?/.test(value)) {
        this.hslString = value;
      }
    } else if (typeof value === 'object') {
      if (value instanceof IroColor) {
        this.hsva = value.hsva;
      } else if ('r' in value && 'g' in value && 'b' in value) {
        this.rgb = value;
      } else if ('h' in value && 's' in value && 'v' in value) {
        this.hsv = value;
      } else if ('h' in value && 's' in value && 'l' in value) {
        this.hsl = value;
      } else if ('kelvin' in value) {
        this.kelvin = value.kelvin;
      }
    } else {
      throw new Error('Invalid color value');
    }
  }
  /**
    * @desc Shortcut to set a specific channel value
    * @param format - hsv | hsl | rgb
    * @param channel - individual channel to set, for example if model = hsl, chanel = h | s | l
    * @param value - new value for the channel
  */
  ;

  _proto.setChannel = function setChannel(format, channel, value) {
    var _extends2;

    this[format] = _extends({}, this[format], (_extends2 = {}, _extends2[channel] = value, _extends2));
  }
  /**
   * @desc Reset color back to its initial value
   */
  ;

  _proto.reset = function reset() {
    this.hsva = this.initialValue;
  }
  /**
    * @desc make new Color instance with the same value as this one
  */
  ;

  _proto.clone = function clone() {
    return new IroColor(this);
  }
  /**
   * @desc remove color onChange
   */
  ;

  _proto.unbind = function unbind() {
    this.onChange = undefined;
  }
  /**
    * @desc Convert hsv object to rgb
    * @param hsv - hsv color object
  */
  ;

  IroColor.hsvToRgb = function hsvToRgb(hsv) {
    var h = hsv.h / 60;
    var s = hsv.s / 100;
    var v = hsv.v / 100;
    var i = floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return {
      r: clamp(r * 255, 0, 255),
      g: clamp(g * 255, 0, 255),
      b: clamp(b * 255, 0, 255)
    };
  }
  /**
    * @desc Convert rgb object to hsv
    * @param rgb - rgb object
  */
  ;

  IroColor.rgbToHsv = function rgbToHsv(rgb) {
    var r = rgb.r / 255;
    var g = rgb.g / 255;
    var b = rgb.b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    var hue = 0;
    var value = max;
    var saturation = max === 0 ? 0 : delta / max;

    switch (max) {
      case min:
        hue = 0; // achromatic

        break;

      case r:
        hue = (g - b) / delta + (g < b ? 6 : 0);
        break;

      case g:
        hue = (b - r) / delta + 2;
        break;

      case b:
        hue = (r - g) / delta + 4;
        break;
    }

    return {
      h: hue * 60 % 360,
      s: clamp(saturation * 100, 0, 100),
      v: clamp(value * 100, 0, 100)
    };
  }
  /**
    * @desc Convert hsv object to hsl
    * @param hsv - hsv object
  */
  ;

  IroColor.hsvToHsl = function hsvToHsl(hsv) {
    var s = hsv.s / 100;
    var v = hsv.v / 100;
    var l = (2 - s) * v;
    var divisor = l <= 1 ? l : 2 - l; // Avoid division by zero when lightness is close to zero

    var saturation = divisor < 1e-9 ? 0 : s * v / divisor;
    return {
      h: hsv.h,
      s: clamp(saturation * 100, 0, 100),
      l: clamp(l * 50, 0, 100)
    };
  }
  /**
    * @desc Convert hsl object to hsv
    * @param hsl - hsl object
  */
  ;

  IroColor.hslToHsv = function hslToHsv(hsl) {
    var l = hsl.l * 2;
    var s = hsl.s * (l <= 100 ? l : 200 - l) / 100; // Avoid division by zero when l + s is near 0

    var saturation = l + s < 1e-9 ? 0 : 2 * s / (l + s);
    return {
      h: hsl.h,
      s: clamp(saturation * 100, 0, 100),
      v: clamp((l + s) / 2, 0, 100)
    };
  }
  /**
    * @desc Convert a kelvin temperature to an approx, RGB value
    * @param kelvin - kelvin temperature
  */
  ;

  IroColor.kelvinToRgb = function kelvinToRgb(kelvin) {
    var temp = kelvin / 100;
    var r, g, b;

    if (temp < 66) {
      r = 255;
      g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
      b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
    } else {
      r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
      g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
      b = 255;
    }

    return {
      r: clamp(floor(r), 0, 255),
      g: clamp(floor(g), 0, 255),
      b: clamp(floor(b), 0, 255)
    };
  }
  /**
   * @desc Convert an RGB color to an approximate kelvin temperature
   * @param kelvin - kelvin temperature
  */
  ;

  IroColor.rgbToKelvin = function rgbToKelvin(rgb) {
    var r = rgb.r,
        b = rgb.b;
    var eps = 0.4;
    var minTemp = KELVIN_MIN;
    var maxTemp = KELVIN_MAX;
    var temp;

    while (maxTemp - minTemp > eps) {
      temp = (maxTemp + minTemp) * 0.5;

      var _rgb = IroColor.kelvinToRgb(temp);

      if (_rgb.b / _rgb.r >= b / r) {
        maxTemp = temp;
      } else {
        minTemp = temp;
      }
    }

    return temp;
  };

  _createClass(IroColor, [{
    key: "hsv",
    get: function get() {
      // value is cloned to allow changes to be made to the values before passing them back
      var value = this.$;
      return {
        h: value.h,
        s: value.s,
        v: value.v
      };
    },
    set: function set(newValue) {
      var oldValue = this.$;
      newValue = _extends({}, oldValue, newValue); // If this Color is being watched for changes we need to compare the new and old values to check the difference
      // Otherwise we can just be lazy

      if (this.onChange) {
        // Compute changed values
        var changes = {
          h: false,
          v: false,
          s: false,
          a: false
        };

        for (var key in oldValue) {
          changes[key] = newValue[key] != oldValue[key];
        }

        this.$ = newValue; // If the value has changed, call hook callback

        if (changes.h || changes.s || changes.v || changes.a) { this.onChange(this, changes); }
      } else {
        this.$ = newValue;
      }
    }
  }, {
    key: "hsva",
    get: function get() {
      return _extends({}, this.$);
    },
    set: function set(value) {
      this.hsv = value;
    }
  }, {
    key: "hue",
    get: function get() {
      return this.$.h;
    },
    set: function set(value) {
      this.hsv = {
        h: value
      };
    }
  }, {
    key: "saturation",
    get: function get() {
      return this.$.s;
    },
    set: function set(value) {
      this.hsv = {
        s: value
      };
    }
  }, {
    key: "value",
    get: function get() {
      return this.$.v;
    },
    set: function set(value) {
      this.hsv = {
        v: value
      };
    }
  }, {
    key: "alpha",
    get: function get() {
      return this.$.a;
    },
    set: function set(value) {
      this.hsv = _extends({}, this.hsv, {
        a: value
      });
    }
  }, {
    key: "kelvin",
    get: function get() {
      return IroColor.rgbToKelvin(this.rgb);
    },
    set: function set(value) {
      this.rgb = IroColor.kelvinToRgb(value);
    }
  }, {
    key: "red",
    get: function get() {
      var rgb = this.rgb;
      return rgb.r;
    },
    set: function set(value) {
      this.rgb = _extends({}, this.rgb, {
        r: value
      });
    }
  }, {
    key: "green",
    get: function get() {
      var rgb = this.rgb;
      return rgb.g;
    },
    set: function set(value) {
      this.rgb = _extends({}, this.rgb, {
        g: value
      });
    }
  }, {
    key: "blue",
    get: function get() {
      var rgb = this.rgb;
      return rgb.b;
    },
    set: function set(value) {
      this.rgb = _extends({}, this.rgb, {
        b: value
      });
    }
  }, {
    key: "rgb",
    get: function get() {
      var _IroColor$hsvToRgb = IroColor.hsvToRgb(this.$),
          r = _IroColor$hsvToRgb.r,
          g = _IroColor$hsvToRgb.g,
          b = _IroColor$hsvToRgb.b;

      return {
        r: round(r),
        g: round(g),
        b: round(b)
      };
    },
    set: function set(value) {
      this.hsv = _extends({}, IroColor.rgbToHsv(value), {
        a: value.a === undefined ? 1 : value.a
      });
    }
  }, {
    key: "rgba",
    get: function get() {
      return _extends({}, this.rgb, {
        a: this.alpha
      });
    },
    set: function set(value) {
      this.rgb = value;
    }
  }, {
    key: "hsl",
    get: function get() {
      var _IroColor$hsvToHsl = IroColor.hsvToHsl(this.$),
          h = _IroColor$hsvToHsl.h,
          s = _IroColor$hsvToHsl.s,
          l = _IroColor$hsvToHsl.l;

      return {
        h: round(h),
        s: round(s),
        l: round(l)
      };
    },
    set: function set(value) {
      this.hsv = _extends({}, IroColor.hslToHsv(value), {
        a: value.a === undefined ? 1 : value.a
      });
    }
  }, {
    key: "hsla",
    get: function get() {
      return _extends({}, this.hsl, {
        a: this.alpha
      });
    },
    set: function set(value) {
      this.hsl = value;
    }
  }, {
    key: "rgbString",
    get: function get() {
      var rgb = this.rgb;
      return "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
    },
    set: function set(value) {
      var match;
      var r,
          g,
          b,
          a = 1;

      if (match = REGEX_FUNCTIONAL_RGB.exec(value)) {
        r = parseUnit(match[1], 255);
        g = parseUnit(match[2], 255);
        b = parseUnit(match[3], 255);
      } else if (match = REGEX_FUNCTIONAL_RGBA.exec(value)) {
        r = parseUnit(match[1], 255);
        g = parseUnit(match[2], 255);
        b = parseUnit(match[3], 255);
        a = parseUnit(match[4], 1);
      }

      if (match) {
        this.rgb = {
          r: r,
          g: g,
          b: b,
          a: a
        };
      } else {
        throw new Error('Invalid rgb string');
      }
    }
  }, {
    key: "rgbaString",
    get: function get() {
      var rgba = this.rgba;
      return "rgba(" + rgba.r + ", " + rgba.g + ", " + rgba.b + ", " + rgba.a + ")";
    },
    set: function set(value) {
      this.rgbString = value;
    }
  }, {
    key: "hexString",
    get: function get() {
      var rgb = this.rgb;
      return "#" + intToHex(rgb.r) + intToHex(rgb.g) + intToHex(rgb.b);
    },
    set: function set(value) {
      var match;
      var r,
          g,
          b,
          a = 255;

      if (match = REGEX_HEX_3.exec(value)) {
        r = parseHexInt(match[1]) * 17;
        g = parseHexInt(match[2]) * 17;
        b = parseHexInt(match[3]) * 17;
      } else if (match = REGEX_HEX_4.exec(value)) {
        r = parseHexInt(match[1]) * 17;
        g = parseHexInt(match[2]) * 17;
        b = parseHexInt(match[3]) * 17;
        a = parseHexInt(match[4]) * 17;
      } else if (match = REGEX_HEX_6.exec(value)) {
        r = parseHexInt(match[1]);
        g = parseHexInt(match[2]);
        b = parseHexInt(match[3]);
      } else if (match = REGEX_HEX_8.exec(value)) {
        r = parseHexInt(match[1]);
        g = parseHexInt(match[2]);
        b = parseHexInt(match[3]);
        a = parseHexInt(match[4]);
      }

      if (match) {
        this.rgb = {
          r: r,
          g: g,
          b: b,
          a: a / 255
        };
      } else {
        throw new Error('Invalid hex string');
      }
    }
  }, {
    key: "hex8String",
    get: function get() {
      var rgba = this.rgba;
      return "#" + intToHex(rgba.r) + intToHex(rgba.g) + intToHex(rgba.b) + intToHex(floor(rgba.a * 255));
    },
    set: function set(value) {
      this.hexString = value;
    }
  }, {
    key: "hslString",
    get: function get() {
      var hsl = this.hsl;
      return "hsl(" + hsl.h + ", " + hsl.s + "%, " + hsl.l + "%)";
    },
    set: function set(value) {
      var match;
      var h,
          s,
          l,
          a = 1;

      if (match = REGEX_FUNCTIONAL_HSL.exec(value)) {
        h = parseUnit(match[1], 360);
        s = parseUnit(match[2], 100);
        l = parseUnit(match[3], 100);
      } else if (match = REGEX_FUNCTIONAL_HSLA.exec(value)) {
        h = parseUnit(match[1], 360);
        s = parseUnit(match[2], 100);
        l = parseUnit(match[3], 100);
        a = parseUnit(match[4], 1);
      }

      if (match) {
        this.hsl = {
          h: h,
          s: s,
          l: l,
          a: a
        };
      } else {
        throw new Error('Invalid hsl string');
      }
    }
  }, {
    key: "hslaString",
    get: function get() {
      var hsla = this.hsla;
      return "hsla(" + hsla.h + ", " + hsla.s + "%, " + hsla.l + "%, " + hsla.a + ")";
    },
    set: function set(value) {
      this.hslString = value;
    }
  }]);

  return IroColor;
}();

var sliderDefaultOptions = {
  sliderShape: 'bar',
  sliderType: 'value',
  minTemperature: 2200,
  maxTemperature: 11000
};
/**
 * @desc Get the bounding dimensions of the slider
 * @param props - slider props
 */

function getSliderDimensions(props) {
  var _sliderSize;

  var width = props.width,
      sliderSize = props.sliderSize,
      borderWidth = props.borderWidth,
      handleRadius = props.handleRadius,
      padding = props.padding,
      sliderShape = props.sliderShape;
  var ishorizontal = props.layoutDirection === 'horizontal'; // automatically calculate sliderSize if its not defined

  sliderSize = (_sliderSize = sliderSize) != null ? _sliderSize : padding * 2 + handleRadius * 2;

  if (sliderShape === 'circle') {
    return {
      handleStart: props.padding + props.handleRadius,
      handleRange: width - padding * 2 - handleRadius * 2,
      width: width,
      height: width,
      cx: width / 2,
      cy: width / 2,
      radius: width / 2 - borderWidth / 2
    };
  } else {
    return {
      handleStart: sliderSize / 2,
      handleRange: width - sliderSize,
      radius: sliderSize / 2,
      x: 0,
      y: 0,
      width: ishorizontal ? sliderSize : width,
      height: ishorizontal ? width : sliderSize
    };
  }
}
/**
 * @desc Get the current slider value for a given color, as a percentage
 * @param props - slider props
 * @param color
 */

function getCurrentSliderValue(props, color) {
  var hsva = color.hsva;
  var rgb = color.rgb;

  switch (props.sliderType) {
    case 'red':
      return rgb.r / 2.55;

    case 'green':
      return rgb.g / 2.55;

    case 'blue':
      return rgb.b / 2.55;

    case 'alpha':
      return hsva.a * 100;

    case 'kelvin':
      var minTemperature = props.minTemperature,
          maxTemperature = props.maxTemperature;
      var temperatureRange = maxTemperature - minTemperature;
      var percent = (color.kelvin - minTemperature) / temperatureRange * 100; // clmap percentage

      return Math.max(0, Math.min(percent, 100));

    case 'hue':
      return hsva.h /= 3.6;

    case 'saturation':
      return hsva.s;

    case 'value':
    default:
      return hsva.v;
  }
}
/**
 * @desc Get the current slider value from user input
 * @param props - slider props
 * @param x - global input x position
 * @param y - global input y position
 */

function getSliderValueFromInput(props, x, y) {
  var _getSliderDimensions = getSliderDimensions(props),
      handleRange = _getSliderDimensions.handleRange,
      handleStart = _getSliderDimensions.handleStart;

  var handlePos;

  if (props.layoutDirection === 'horizontal') {
    handlePos = -1 * y + handleRange + handleStart;
  } else {
    handlePos = x - handleStart;
  } // clamp handle position


  handlePos = Math.max(Math.min(handlePos, handleRange), 0);
  var percent = Math.round(100 / handleRange * handlePos);

  switch (props.sliderType) {
    case 'kelvin':
      var minTemperature = props.minTemperature,
          maxTemperature = props.maxTemperature;
      var temperatureRange = maxTemperature - minTemperature;
      return minTemperature + temperatureRange * (percent / 100);

    case 'alpha':
      return percent / 100;

    case 'hue':
      return percent * 3.6;

    case 'red':
    case 'blue':
    case 'green':
      return percent * 2.55;

    default:
      return percent;
  }
}
/**
 * @desc Get the current handle position for a given color
 * @param props - slider props
 * @param color
 */

function getSliderHandlePosition(props, color) {
  var _getSliderDimensions2 = getSliderDimensions(props),
      width = _getSliderDimensions2.width,
      height = _getSliderDimensions2.height,
      handleRange = _getSliderDimensions2.handleRange,
      handleStart = _getSliderDimensions2.handleStart;

  var ishorizontal = props.layoutDirection === 'horizontal';
  var sliderValue = getCurrentSliderValue(props, color);
  var midPoint = ishorizontal ? width / 2 : height / 2;
  var handlePos = handleStart + sliderValue / 100 * handleRange;

  if (ishorizontal) {
    handlePos = -1 * handlePos + handleRange + handleStart * 2;
  }

  return {
    x: ishorizontal ? midPoint : handlePos,
    y: ishorizontal ? handlePos : midPoint
  };
}
/**
 * @desc Get the gradient stops for a slider
 * @param props - slider props
 * @param color
 */

function getSliderGradient(props, color) {
  var hsv = color.hsv;
  var rgb = color.rgb;

  switch (props.sliderType) {
    case 'red':
      return [[0, "rgb(" + 0 + "," + rgb.g + "," + rgb.b + ")"], [100, "rgb(" + 255 + "," + rgb.g + "," + rgb.b + ")"]];

    case 'green':
      return [[0, "rgb(" + rgb.r + "," + 0 + "," + rgb.b + ")"], [100, "rgb(" + rgb.r + "," + 255 + "," + rgb.b + ")"]];

    case 'blue':
      return [[0, "rgb(" + rgb.r + "," + rgb.g + "," + 0 + ")"], [100, "rgb(" + rgb.r + "," + rgb.g + "," + 255 + ")"]];

    case 'alpha':
      return [[0, "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0)"], [100, "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")"]];

    case 'kelvin':
      var stops = [];
      var min = props.minTemperature;
      var max = props.maxTemperature;
      var numStops = 8;
      var range = max - min;

      for (var kelvin = min, stop = 0; kelvin < max; kelvin += range / numStops, stop += 1) {
        var _IroColor$kelvinToRgb = IroColor.kelvinToRgb(kelvin),
            r = _IroColor$kelvinToRgb.r,
            g = _IroColor$kelvinToRgb.g,
            b = _IroColor$kelvinToRgb.b;

        stops.push([100 / numStops * stop, "rgb(" + r + "," + g + "," + b + ")"]);
      }

      return stops;

    case 'hue':
      return [[0, '#f00'], [16.666, '#ff0'], [33.333, '#0f0'], [50, '#0ff'], [66.666, '#00f'], [83.333, '#f0f'], [100, '#f00']];

    case 'saturation':
      var noSat = IroColor.hsvToHsl({
        h: hsv.h,
        s: 0,
        v: hsv.v
      });
      var fullSat = IroColor.hsvToHsl({
        h: hsv.h,
        s: 100,
        v: hsv.v
      });
      return [[0, "hsl(" + noSat.h + "," + noSat.s + "%," + noSat.l + "%)"], [100, "hsl(" + fullSat.h + "," + fullSat.s + "%," + fullSat.l + "%)"]];

    case 'value':
    default:
      var hsl = IroColor.hsvToHsl({
        h: hsv.h,
        s: hsv.s,
        v: 100
      });
      return [[0, '#000'], [100, "hsl(" + hsl.h + "," + hsl.s + "%," + hsl.l + "%)"]];
  }
}

var TAU = Math.PI * 2; // javascript's modulo operator doesn't produce positive numbers with negative input
// https://dev.to/maurobringolf/a-neat-trick-to-compute-modulo-of-negative-numbers-111e

var mod = function mod(a, n) {
  return (a % n + n) % n;
}; // distance between points (x, y) and (0, 0)


var dist = function dist(x, y) {
  return Math.sqrt(x * x + y * y);
};
/**
 * @param props - wheel props
 * @internal
 */


function getHandleRange(props) {
  return props.width / 2 - props.padding - props.handleRadius - props.borderWidth;
}
/**
 * Returns true if point (x, y) lands inside the wheel
 * @param props - wheel props
 * @param x
 * @param y
 */


function isInputInsideWheel(props, x, y) {
  var _getWheelDimensions = getWheelDimensions(props),
      cx = _getWheelDimensions.cx,
      cy = _getWheelDimensions.cy;

  var r = props.width / 2;
  return dist(cx - x, cy - y) < r;
}
/**
 * @desc Get the point as the center of the wheel
 * @param props - wheel props
 */

function getWheelDimensions(props) {
  var r = props.width / 2;
  return {
    width: props.width,
    radius: r - props.borderWidth,
    cx: r,
    cy: r
  };
}
/**
 * @desc Translate an angle according to wheelAngle and wheelDirection
 * @param props - wheel props
 * @param angle - input angle
 */

function translateWheelAngle(props, angle, invert) {
  var wheelAngle = props.wheelAngle;
  var wheelDirection = props.wheelDirection; // inverted and clockwisee

  if (invert && wheelDirection === 'clockwise') { angle = wheelAngle + angle; } // clockwise (input handling)
  else if (wheelDirection === 'clockwise') { angle = 360 - wheelAngle + angle; } // inverted and anticlockwise
    else if (invert && wheelDirection === 'anticlockwise') { angle = wheelAngle + 180 - angle; } // anticlockwise (input handling)
      else if (wheelDirection === 'anticlockwise') { angle = wheelAngle - angle; }
  return mod(angle, 360);
}
/**
 * @desc Get the current handle position for a given color
 * @param props - wheel props
 * @param color
 */

function getWheelHandlePosition(props, color) {
  var hsv = color.hsv;

  var _getWheelDimensions2 = getWheelDimensions(props),
      cx = _getWheelDimensions2.cx,
      cy = _getWheelDimensions2.cy;

  var handleRange = getHandleRange(props);
  var handleAngle = (180 + translateWheelAngle(props, hsv.h, true)) * (TAU / 360);
  var handleDist = hsv.s / 100 * handleRange;
  var direction = props.wheelDirection === 'clockwise' ? -1 : 1;
  return {
    x: cx + handleDist * Math.cos(handleAngle) * direction,
    y: cy + handleDist * Math.sin(handleAngle) * direction
  };
}
/**
 * @desc Get the current wheel value from user input
 * @param props - wheel props
 * @param x - global input x position
 * @param y - global input y position
 */

function getWheelValueFromInput(props, x, y) {
  var _getWheelDimensions3 = getWheelDimensions(props),
      cx = _getWheelDimensions3.cx,
      cy = _getWheelDimensions3.cy;

  var handleRange = getHandleRange(props);
  x = cx - x;
  y = cy - y; // Calculate the hue by converting the angle to radians

  var hue = translateWheelAngle(props, Math.atan2(-y, -x) * (360 / TAU)); // Find the point's distance from the center of the wheel
  // This is used to show the saturation level

  var handleDist = Math.min(dist(x, y), handleRange);
  return {
    h: Math.round(hue),
    s: Math.round(100 / handleRange * handleDist)
  };
}
/**
 * @desc Get the bounding dimensions of the box
 * @param props - box props
 */

function getBoxDimensions(props) {
  var width = props.width,
      boxHeight = props.boxHeight,
      padding = props.padding,
      handleRadius = props.handleRadius;
  return {
    width: width,
    height: boxHeight != null ? boxHeight : width,
    radius: padding + handleRadius
  };
}
/**
 * @desc Get the current box value from user input
 * @param props - box props
 * @param x - global input x position
 * @param y - global input y position
 */

function getBoxValueFromInput(props, x, y) {
  var _getBoxDimensions = getBoxDimensions(props),
      width = _getBoxDimensions.width,
      height = _getBoxDimensions.height,
      radius = _getBoxDimensions.radius;

  var handleStart = radius;
  var handleRangeX = width - radius * 2;
  var handleRangeY = height - radius * 2;
  var percentX = (x - handleStart) / handleRangeX * 100;
  var percentY = (y - handleStart) / handleRangeY * 100;
  return {
    s: Math.max(0, Math.min(percentX, 100)),
    v: Math.max(0, Math.min(100 - percentY, 100))
  };
}
/**
 * @desc Get the current box handle position for a given color
 * @param props - box props
 * @param color
 */

function getBoxHandlePosition(props, color) {
  var _getBoxDimensions2 = getBoxDimensions(props),
      width = _getBoxDimensions2.width,
      height = _getBoxDimensions2.height,
      radius = _getBoxDimensions2.radius;

  var hsv = color.hsv;
  var handleStart = radius;
  var handleRangeX = width - radius * 2;
  var handleRangeY = height - radius * 2;
  return {
    x: handleStart + hsv.s / 100 * handleRangeX,
    y: handleStart + (handleRangeY - hsv.v / 100 * handleRangeY)
  };
}
/**
 * @desc Get the gradient stops for a box
 * @param props - box props
 * @param color
 */

function getBoxGradients(props, color) {
  var hue = color.hue;
  return [// saturation gradient
  [[0, '#fff'], [100, "hsl(" + hue + ",100%,50%)"]], // lightness gradient
  [[0, 'rgba(0,0,0,0)'], [100, '#000']]];
}

// Keep track of html <base> elements for resolveSvgUrl
// getElementsByTagName returns a live HTMLCollection, which stays in sync with the DOM tree
// So it only needs to be called once
var BASE_ELEMENTS;
/**
 * @desc Resolve an SVG reference URL
 * This is required to work around how Safari and iOS webviews handle gradient URLS under certain conditions
 * If a page is using a client-side routing library which makes use of the HTML <base> tag,
 * Safari won't be able to render SVG gradients properly (as they are referenced by URLs)
 * More info on the problem:
 * https://stackoverflow.com/questions/19742805/angular-and-svg-filters/19753427#19753427
 * https://github.com/jaames/iro.js/issues/18
 * https://github.com/jaames/iro.js/issues/45
 * https://github.com/jaames/iro.js/pull/89
 * @props url - SVG reference URL
 */

function resolveSvgUrl(url) {
  if (!BASE_ELEMENTS) { BASE_ELEMENTS = document.getElementsByTagName('base'); } // Sniff useragent string to check if the user is running Safari

  var ua = window.navigator.userAgent;
  var isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  var isIos = /iPhone|iPod|iPad/i.test(ua);
  var location = window.location;
  return (isSafari || isIos) && BASE_ELEMENTS.length > 0 ? location.protocol + "//" + location.host + location.pathname + location.search + url : url;
}
/**
 * @desc Given a specifc (x, y) position, test if there's a handle there and return its index, else return null.
 *       This is used for components like the box and wheel which support multiple handles when multicolor is active
 * @props x - point x position
 * @props y - point y position
 * @props handlePositions - array of {x, y} coords for each handle
 */

function getHandleAtPoint(props, x, y, handlePositions) {
  for (var i = 0; i < handlePositions.length; i++) {
    var dX = handlePositions[i].x - x;
    var dY = handlePositions[i].y - y;
    var dist = Math.sqrt(dX * dX + dY * dY);

    if (dist < props.handleRadius) {
      return i;
    }
  }

  return null;
}

function cssBorderStyles(props) {
  return {
    boxSizing: 'border-box',
    border: props.borderWidth + "px solid " + props.borderColor
  };
}
function cssGradient(type, direction, stops) {
  return type + "-gradient(" + direction + ", " + stops.map(function (_ref) {
    var o = _ref[0],
        col = _ref[1];
    return col + " " + o + "%";
  }).join(',') + ")";
}
function cssValue(value) {
  if (typeof value === 'string') { return value; }
  return value + "px";
}

var iroColorPickerOptionDefaults = {
  width: 300,
  height: 300,
  color: '#fff',
  colors: [],
  padding: 6,
  layoutDirection: 'vertical',
  borderColor: '#fff',
  borderWidth: 0,
  handleRadius: 8,
  activeHandleRadius: null,
  handleSvg: null,
  handleProps: {
    x: 0,
    y: 0
  },
  wheelLightness: true,
  wheelAngle: 0,
  wheelDirection: 'anticlockwise',
  sliderSize: null,
  sliderMargin: 12,
  boxHeight: null
};

var SECONDARY_EVENTS = ["mousemove" /* MouseMove */, "touchmove" /* TouchMove */, "mouseup" /* MouseUp */, "touchend" /* TouchEnd */];
// Base component class for iro UI components
// This extends the Preact component class to allow them to react to mouse/touch input events by themselves
var IroComponentWrapper = /*@__PURE__*/(function (Component) {
    function IroComponentWrapper(props) {
        Component.call(this, props);
        // Generate unique ID for the component
        // This can be used to generate unique IDs for gradients, etc
        this.uid = (Math.random() + 1).toString(36).substring(5);
    }

    if ( Component ) IroComponentWrapper.__proto__ = Component;
    IroComponentWrapper.prototype = Object.create( Component && Component.prototype );
    IroComponentWrapper.prototype.constructor = IroComponentWrapper;
    IroComponentWrapper.prototype.render = function render (props) {
        var eventHandler = this.handleEvent.bind(this);
        var rootProps = {
            onMouseDown: eventHandler,
            // https://github.com/jaames/iro.js/issues/126
            // https://github.com/preactjs/preact/issues/2113#issuecomment-553408767
            ontouchstart: eventHandler,
        };
        var isHorizontal = props.layoutDirection === 'horizontal';
        var margin = props.margin === null ? props.sliderMargin : props.margin;
        var rootStyles = {
            overflow: 'visible',
            display: isHorizontal ? 'inline-block' : 'block'
        };
        // first component shouldn't have any margin
        if (props.index > 0) {
            rootStyles[isHorizontal ? 'marginLeft' : 'marginTop'] = margin;
        }
        return (h(d, null, props.children(this.uid, rootProps, rootStyles)));
    };
    // More info on handleEvent:
    // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
    // TL;DR this lets us have a single point of entry for multiple events, and we can avoid callback/binding hell
    IroComponentWrapper.prototype.handleEvent = function handleEvent (e) {
        var this$1 = this;

        var inputHandler = this.props.onInput;
        // Get the screen position of the component
        var bounds = this.base.getBoundingClientRect();
        // Prefect default browser action
        e.preventDefault();
        // Detect if the event is a touch event by checking if it has the `touches` property
        // If it is a touch event, use the first touch input
        var point = e.touches ? e.changedTouches[0] : e;
        var x = point.clientX - bounds.left;
        var y = point.clientY - bounds.top;
        switch (e.type) {
            case "mousedown" /* MouseDown */:
            case "touchstart" /* TouchStart */:
                var result = inputHandler(x, y, 0 /* Start */);
                if (result !== false) {
                    SECONDARY_EVENTS.forEach(function (event) {
                        document.addEventListener(event, this$1, { passive: false });
                    });
                }
                break;
            case "mousemove" /* MouseMove */:
            case "touchmove" /* TouchMove */:
                inputHandler(x, y, 1 /* Move */);
                break;
            case "mouseup" /* MouseUp */:
            case "touchend" /* TouchEnd */:
                inputHandler(x, y, 2 /* End */);
                SECONDARY_EVENTS.forEach(function (event) {
                    document.removeEventListener(event, this$1, { passive: false });
                });
                break;
        }
    };

    return IroComponentWrapper;
}(m));

function IroHandle(props) {
    var radius = props.r;
    var url = props.url;
    var cx = radius;
    var cy = radius;
    return (h("svg", { className: ("IroHandle IroHandle--" + (props.index) + " " + (props.isActive ? 'IroHandle--isActive' : '')), style: {
            '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0);',
            transform: ("translate(" + (cssValue(props.x)) + ", " + (cssValue(props.y)) + ")"),
            willChange: 'transform',
            top: cssValue(-radius),
            left: cssValue(-radius),
            width: cssValue(radius * 2),
            height: cssValue(radius * 2),
            position: 'absolute',
            overflow: 'visible'
        } },
        url && (h("use", Object.assign({ xlinkHref: resolveSvgUrl(url) }, props.props))),
        !url && (h("circle", { cx: cx, cy: cy, r: radius, fill: "none", "stroke-width": 2, stroke: "#000" })),
        !url && (h("circle", { cx: cx, cy: cy, r: radius - 2, fill: props.fill, "stroke-width": 2, stroke: "#fff" }))));
}
IroHandle.defaultProps = {
    fill: 'none',
    x: 0,
    y: 0,
    r: 8,
    url: null,
    props: { x: 0, y: 0 }
};

function IroSlider(props) {
    var activeIndex = props.activeIndex;
    var activeColor = (activeIndex !== undefined && activeIndex < props.colors.length) ? props.colors[activeIndex] : props.color;
    var ref = getSliderDimensions(props);
    var width = ref.width;
    var height = ref.height;
    var radius = ref.radius;
    var handlePos = getSliderHandlePosition(props, activeColor);
    var gradient = getSliderGradient(props, activeColor);
    function handleInput(x, y, type) {
        var value = getSliderValueFromInput(props, x, y);
        props.parent.inputActive = true;
        activeColor[props.sliderType] = value;
        props.onInput(type, props.id);
    }
    return (h(IroComponentWrapper, Object.assign({}, props, { onInput: handleInput }), function (uid, rootProps, rootStyles) { return (h("div", Object.assign({}, rootProps, { className: "IroSlider", style: Object.assign({}, {position: 'relative',
            width: cssValue(width),
            height: cssValue(height),
            borderRadius: cssValue(radius),
            // checkered bg to represent alpha
            background: "conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",
            backgroundSize: '8px 8px'},
            rootStyles) }),
        h("div", { className: "IroSliderGradient", style: Object.assign({}, {position: 'absolute',
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: cssValue(radius),
                background: cssGradient('linear', props.layoutDirection === 'horizontal' ? 'to top' : 'to right', gradient)},
                cssBorderStyles(props)) }),
        h(IroHandle, { isActive: true, index: activeColor.index, r: props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePos.x, y: handlePos.y }))); }));
}
IroSlider.defaultProps = Object.assign({}, sliderDefaultOptions);

function IroBox(props) {
    var ref = getBoxDimensions(props);
    var width = ref.width;
    var height = ref.height;
    var radius = ref.radius;
    var colors = props.colors;
    var colorPicker = props.parent;
    var activeIndex = props.activeIndex;
    var activeColor = (activeIndex !== undefined && activeIndex < props.colors.length) ? props.colors[activeIndex] : props.color;
    var gradients = getBoxGradients(props, activeColor);
    var handlePositions = colors.map(function (color) { return getBoxHandlePosition(props, color); });
    function handleInput(x, y, inputType) {
        if (inputType === 0 /* Start */) {
            // getHandleAtPoint() returns the index for the handle if the point 'hits' it, or null otherwise
            var activeHandle = getHandleAtPoint(props, x, y, handlePositions);
            // If the input hit a handle, set it as the active handle, but don't update the color
            if (activeHandle !== null) {
                colorPicker.setActiveColor(activeHandle);
            }
            // If the input didn't hit a handle, set the currently active handle to that position
            else {
                colorPicker.inputActive = true;
                activeColor.hsv = getBoxValueFromInput(props, x, y);
                props.onInput(inputType, props.id);
            }
        }
        // move is fired when the user has started dragging
        else if (inputType === 1 /* Move */) {
            colorPicker.inputActive = true;
            activeColor.hsv = getBoxValueFromInput(props, x, y);
        }
        // let the color picker fire input:start, input:move or input:end events
        props.onInput(inputType, props.id);
    }
    return (h(IroComponentWrapper, Object.assign({}, props, { onInput: handleInput }), function (uid, rootProps, rootStyles) { return (h("div", Object.assign({}, rootProps, { className: "IroBox", style: Object.assign({}, {width: cssValue(width),
            height: cssValue(height),
            position: 'relative'},
            rootStyles) }),
        h("div", { className: "IroBox", style: Object.assign({}, {width: '100%',
                height: '100%',
                borderRadius: cssValue(radius)},
                cssBorderStyles(props),
                {background: cssGradient('linear', 'to bottom', gradients[1])
                    + ',' +
                    cssGradient('linear', 'to right', gradients[0])}) }),
        colors.filter(function (color) { return color !== activeColor; }).map(function (color) { return (h(IroHandle, { isActive: false, index: color.index, fill: color.hslString, r: props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[color.index].x, y: handlePositions[color.index].y })); }),
        h(IroHandle, { isActive: true, index: activeColor.index, fill: activeColor.hslString, r: props.activeHandleRadius || props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[activeColor.index].x, y: handlePositions[activeColor.index].y }))); }));
}

var HUE_GRADIENT_CLOCKWISE = 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)';
var HUE_GRADIENT_ANTICLOCKWISE = 'conic-gradient(red, magenta, blue, aqua, lime, yellow, red)';
function IroWheel(props) {
    var ref = getWheelDimensions(props);
    var width = ref.width;
    var colors = props.colors;
    var borderWidth = props.borderWidth;
    var colorPicker = props.parent;
    var activeColor = props.color;
    var hsv = activeColor.hsv;
    var handlePositions = colors.map(function (color) { return getWheelHandlePosition(props, color); });
    var circleStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        boxSizing: 'border-box'
    };
    function handleInput(x, y, inputType) {
        if (inputType === 0 /* Start */) {
            // input hitbox is a square, 
            // so we want to ignore any initial clicks outside the circular shape of the wheel
            if (!isInputInsideWheel(props, x, y)) {
                // returning false will cease all event handling for this interaction
                return false;
            }
            // getHandleAtPoint() returns the index for the handle if the point 'hits' it, or null otherwise
            var activeHandle = getHandleAtPoint(props, x, y, handlePositions);
            // If the input hit a handle, set it as the active handle, but don't update the color
            if (activeHandle !== null) {
                colorPicker.setActiveColor(activeHandle);
            }
            // If the input didn't hit a handle, set the currently active handle to that position
            else {
                colorPicker.inputActive = true;
                activeColor.hsv = getWheelValueFromInput(props, x, y);
                props.onInput(inputType, props.id);
            }
        }
        // move is fired when the user has started dragging
        else if (inputType === 1 /* Move */) {
            colorPicker.inputActive = true;
            activeColor.hsv = getWheelValueFromInput(props, x, y);
        }
        // let the color picker fire input:start, input:move or input:end events
        props.onInput(inputType, props.id);
    }
    return (h(IroComponentWrapper, Object.assign({}, props, { onInput: handleInput }), function (uid, rootProps, rootStyles) { return (h("div", Object.assign({}, rootProps, { className: "IroWheel", style: Object.assign({}, {width: cssValue(width),
            height: cssValue(width),
            position: 'relative'},
            rootStyles) }),
        h("div", { className: "IroWheelHue", style: Object.assign({}, circleStyles,
                {transform: ("rotateZ(" + (props.wheelAngle + 90) + "deg)"),
                background: props.wheelDirection === 'clockwise' ? HUE_GRADIENT_CLOCKWISE : HUE_GRADIENT_ANTICLOCKWISE}) }),
        h("div", { className: "IroWheelSaturation", style: Object.assign({}, circleStyles,
                {background: 'radial-gradient(circle closest-side, #fff, transparent)'}) }),
        props.wheelLightness && (h("div", { className: "IroWheelLightness", style: Object.assign({}, circleStyles,
                {background: '#000',
                opacity: 1 - hsv.v / 100}) })),
        h("div", { className: "IroWheelBorder", style: Object.assign({}, circleStyles,
                cssBorderStyles(props)) }),
        colors.filter(function (color) { return color !== activeColor; }).map(function (color) { return (h(IroHandle, { isActive: false, index: color.index, fill: color.hslString, r: props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[color.index].x, y: handlePositions[color.index].y })); }),
        h(IroHandle, { isActive: true, index: activeColor.index, fill: activeColor.hslString, r: props.activeHandleRadius || props.handleRadius, url: props.handleSvg, props: props.handleProps, x: handlePositions[activeColor.index].x, y: handlePositions[activeColor.index].y }))); }));
}

function createWidget(WidgetComponent) {
    var widgetFactory = function (parent, props) {
        var widget; // will become an instance of the widget component class
        var widgetRoot = document.createElement('div');
        // Render widget into a temp DOM node
        I(h(WidgetComponent, Object.assign({}, {ref: function (ref) { return widget = ref; }},
            props)), widgetRoot);
        function mountWidget() {
            var container = parent instanceof Element ? parent : document.querySelector(parent);
            container.appendChild(widget.base);
            widget.onMount(container);
        }
        // Mount it into the DOM when the page document is ready
        if (document.readyState !== 'loading') {
            mountWidget();
        }
        else {
            document.addEventListener('DOMContentLoaded', mountWidget);
        }
        return widget;
    };
    // Allow the widget factory to inherit component prototype + static class methods
    // This makes it easier for plugin authors to extend the base widget component
    widgetFactory.prototype = WidgetComponent.prototype;
    Object.assign(widgetFactory, WidgetComponent);
    // Add reference to base component too
    widgetFactory.__component = WidgetComponent;
    return widgetFactory;
}

var IroColorPicker = /*@__PURE__*/(function (Component) {
    function IroColorPicker(props) {
        var this$1 = this;

        Component.call(this, props);
        this.colors = [];
        this.inputActive = false;
        this.events = {};
        this.activeEvents = {};
        this.deferredEvents = {};
        this.id = props.id;
        var colors = props.colors.length > 0 ? props.colors : [props.color];
        colors.forEach(function (colorValue) { return this$1.addColor(colorValue); });
        this.setActiveColor(0);
        // Pass all the props into the component's state,
        // Except we want to add the color object and make sure that refs aren't passed down to children
        this.state = Object.assign({}, props,
            {color: this.color,
            colors: this.colors,
            layout: props.layout});
    }

    if ( Component ) IroColorPicker.__proto__ = Component;
    IroColorPicker.prototype = Object.create( Component && Component.prototype );
    IroColorPicker.prototype.constructor = IroColorPicker;
    // Plubic multicolor API
    /**
    * @desc Add a color to the color picker
    * @param color new color to add
    * @param index optional color index
    */
    IroColorPicker.prototype.addColor = function addColor (color, index) {
        if ( index === void 0 ) index = this.colors.length;

        // Create a new iro.Color
        // Also bind it to onColorChange, so whenever the color changes it updates the color picker
        var newColor = new IroColor(color, this.onColorChange.bind(this));
        // Insert color @ the given index
        this.colors.splice(index, 0, newColor);
        // Reindex colors
        this.colors.forEach(function (color, index) { return color.index = index; });
        // Update picker state if necessary
        if (this.state) {
            this.setState({ colors: this.colors });
        }
        // Fire color init event
        this.deferredEmit('color:init', newColor);
    };
    /**
     * @desc Remove a color from the color picker
     * @param index color index
     */
    IroColorPicker.prototype.removeColor = function removeColor (index) {
        var color = this.colors.splice(index, 1)[0];
        // Destroy the color object -- this unbinds it from the color picker
        color.unbind();
        // Reindex colors
        this.colors.forEach(function (color, index) { return color.index = index; });
        // Update picker state if necessary
        if (this.state) {
            this.setState({ colors: this.colors });
        }
        // If the active color was removed, default active color to 0
        if (color.index === this.color.index) {
            this.setActiveColor(0);
        }
        // Fire color remove event
        this.emit('color:remove', color);
    };
    /**
     * @desc Set the currently active color
     * @param index color index
     */
    IroColorPicker.prototype.setActiveColor = function setActiveColor (index) {
        this.color = this.colors[index];
        if (this.state) {
            this.setState({ color: this.color });
        }
        // Fire color switch event
        this.emit('color:setActive', this.color);
    };
    /**
     * @desc Replace all of the current colorPicker colors
     * @param newColorValues list of new colors to add
     */
    IroColorPicker.prototype.setColors = function setColors (newColorValues, activeColorIndex) {
        var this$1 = this;
        if ( activeColorIndex === void 0 ) activeColorIndex = 0;

        // Unbind color events
        this.colors.forEach(function (color) { return color.unbind(); });
        // Destroy old colors
        this.colors = [];
        // Add new colors
        newColorValues.forEach(function (colorValue) { return this$1.addColor(colorValue); });
        // Reset active color
        this.setActiveColor(activeColorIndex);
        this.emit('color:setAll', this.colors);
    };
    // Public ColorPicker events API
    /**
     * @desc Set a callback function for an event
     * @param eventList event(s) to listen to
     * @param callback - Function called when the event is fired
     */
    IroColorPicker.prototype.on = function on (eventList, callback) {
        var this$1 = this;

        var events = this.events;
        // eventList can be an eventType string or an array of eventType strings
        (!Array.isArray(eventList) ? [eventList] : eventList).forEach(function (eventType) {
            // Add event callback
            (events[eventType] || (events[eventType] = [])).push(callback);
            // Call deferred events
            // These are events that can be stored until a listener for them is added
            if (this$1.deferredEvents[eventType]) {
                // Deffered events store an array of arguments from when the event was called
                this$1.deferredEvents[eventType].forEach(function (args) {
                    callback.apply(null, args);
                });
                // Clear deferred events
                this$1.deferredEvents[eventType] = [];
            }
        });
    };
    /**
     * @desc Remove a callback function for an event added with on()
     * @param eventList - event(s) to listen to
     * @param callback - original callback function to remove
     */
    IroColorPicker.prototype.off = function off (eventList, callback) {
        var this$1 = this;

        (!Array.isArray(eventList) ? [eventList] : eventList).forEach(function (eventType) {
            var callbackList = this$1.events[eventType];
            // this.emitHook('event:off', eventType, callback);
            if (callbackList)
                { callbackList.splice(callbackList.indexOf(callback), 1); }
        });
    };
    /**
     * @desc Emit an event
     * @param eventType event to emit
     */
    IroColorPicker.prototype.emit = function emit (eventType) {
        var this$1 = this;
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        var activeEvents = this.activeEvents;
        var isEventActive = activeEvents.hasOwnProperty(eventType) ? activeEvents[eventType] : false;
        // Prevent event callbacks from firing if the event is already active
        // This stops infinite loops if something in an event callback causes the same event to be fired again
        // (e.g. setting the color inside a color:change callback)
        if (!isEventActive) {
            activeEvents[eventType] = true;
            var callbackList = this.events[eventType] || [];
            callbackList.forEach(function (fn) { return fn.apply(this$1, args); });
            activeEvents[eventType] = false;
        }
    };
    /**
     * @desc Emit an event now, or save it for when the relevent event listener is added
     * @param eventType - The name of the event to emit
     */
    IroColorPicker.prototype.deferredEmit = function deferredEmit (eventType) {
        var ref;

        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
        var deferredEvents = this.deferredEvents;
        (ref = this).emit.apply(ref, [ eventType ].concat( args ));
        (deferredEvents[eventType] || (deferredEvents[eventType] = [])).push(args);
    };
    // Public utility methods
    IroColorPicker.prototype.setOptions = function setOptions (newOptions) {
        this.setState(newOptions);
    };
    /**
     * @desc Resize the color picker
     * @param width - new width
     */
    IroColorPicker.prototype.resize = function resize (width) {
        this.setOptions({ width: width });
    };
    /**
     * @desc Reset the color picker to the initial color provided in the color picker options
     */
    IroColorPicker.prototype.reset = function reset () {
        this.colors.forEach(function (color) { return color.reset(); });
        this.setState({ colors: this.colors });
    };
    /**
     * @desc Called by the createWidget wrapper when the element is mounted into the page
     * @param container - the container element for this ColorPicker instance
     */
    IroColorPicker.prototype.onMount = function onMount (container) {
        this.el = container;
        this.deferredEmit('mount', this);
    };
    // Internal methods
    /**
     * @desc React to a color update
     * @param color - current color
     * @param changes - shows which h,s,v,a color channels changed
     */
    IroColorPicker.prototype.onColorChange = function onColorChange (color, changes) {
        this.setState({ color: this.color });
        if (this.inputActive) {
            this.inputActive = false;
            this.emit('input:change', color, changes);
        }
        this.emit('color:change', color, changes);
    };
    /**
     * @desc Handle input from a UI control element
     * @param type - event type
     */
    IroColorPicker.prototype.emitInputEvent = function emitInputEvent (type, originId) {
        if (type === 0 /* Start */) {
            this.emit('input:start', this.color, originId);
        }
        else if (type === 1 /* Move */) {
            this.emit('input:move', this.color, originId);
        }
        else if (type === 2 /* End */) {
            this.emit('input:end', this.color, originId);
        }
    };
    IroColorPicker.prototype.render = function render (props, state) {
        var this$1 = this;

        var layout = state.layout;
        // use layout shorthands
        if (!Array.isArray(layout)) {
            switch (layout) {
                // TODO: implement some?
                default:
                    layout = [
                        { component: IroWheel },
                        { component: IroSlider } ];
            }
            // add transparency slider to the layout
            if (state.transparency) {
                layout.push({
                    component: IroSlider,
                    options: {
                        sliderType: 'alpha'
                    }
                });
            }
        }
        return (h("div", { class: "IroColorPicker", id: state.id, style: {
                display: state.display
            } }, layout.map(function (ref, componentIndex) {
                var UiComponent = ref.component;
                var options = ref.options;

                return (h(UiComponent, Object.assign({}, state, options, { ref: undefined, onInput: this$1.emitInputEvent.bind(this$1), parent: this$1, index: componentIndex })));
        })));
    };

    return IroColorPicker;
}(m));
IroColorPicker.defaultProps = Object.assign({}, iroColorPickerOptionDefaults,
    {colors: [],
    display: 'block',
    id: null,
    layout: 'default',
    margin: null});
var IroColorPickerWidget = createWidget(IroColorPicker);

var iro;
(function (iro) {
    iro.version = "5.5.2"; // replaced by @rollup/plugin-replace; see rollup.config.js
    iro.Color = IroColor;
    iro.ColorPicker = IroColorPickerWidget;
    var ui;
    (function (ui) {
        ui.h = h;
        ui.ComponentBase = IroComponentWrapper;
        ui.Handle = IroHandle;
        ui.Slider = IroSlider;
        ui.Wheel = IroWheel;
        ui.Box = IroBox;
    })(ui = iro.ui || (iro.ui = {}));
})(iro || (iro = {}));
var iro$1 = iro;

/* harmony default export */ const iro_es = (iro$1);

;// ./src/components/CustomizationScreen.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


 // Import iro.js
const whitearrow = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M0.756 8.59012V6.62812H10.314L5.598 2.30812L6.948 0.940125L13.356 6.97012V8.23012L6.948 14.2601L5.58 12.8741L10.278 8.59012H0.756Z" fill="white"/>
</svg>`);
const mobile = new URL(/* asset import */ __webpack_require__(212), __webpack_require__.b).href;
const monitor = new URL(/* asset import */ __webpack_require__(532), __webpack_require__.b).href;
const icon1 = new URL(/* asset import */ __webpack_require__(818), __webpack_require__.b).href;
const CustomizationScreen = ({ onBack, onNext, existingCustomizationData, isLoadingExistingData = false }) => {
    const [isDesktopView, setIsDesktopView] = (0,react.useState)(true);
    const [openDropdown, setOpenDropdown] = (0,react.useState)(null);
    // Customization state
    const [accessibilityStatementLink, setAccessibilityStatementLink] = (0,react.useState)("");
    const [triggerVerticalPosition, setTriggerVerticalPosition] = (0,react.useState)("Bottom");
    const [triggerButtonSize, setTriggerButtonSize] = (0,react.useState)("Medium");
    const [triggerButtonShape, setTriggerButtonShape] = (0,react.useState)("Circle");
    const [triggerHorizontalOffset, setTriggerHorizontalOffset] = (0,react.useState)("0px");
    const [hideTriggerButton, setHideTriggerButton] = (0,react.useState)("No");
    const [triggerVerticalOffset, setTriggerVerticalOffset] = (0,react.useState)("3px");
    const [triggerHorizontalPosition, setTriggerHorizontalPosition] = (0,react.useState)("Left");
    const [btnColor, setBtnColor] = (0,react.useState)("#007bff");
    const [showOnMobile, setShowOnMobile] = (0,react.useState)("Show");
    const [mobileTriggerHorizontalPosition, setMobileTriggerHorizontalPosition] = (0,react.useState)("Left");
    const [mobileTriggerVerticalPosition, setMobileTriggerVerticalPosition] = (0,react.useState)("Bottom");
    const [mobileTriggerSize, setMobileTriggerSize] = (0,react.useState)("Medium");
    const [mobileTriggerShape, setMobileTriggerShape] = (0,react.useState)("Rounded");
    const [mobileTriggerHorizontalOffset, setMobileTriggerHorizontalOffset] = (0,react.useState)("3");
    const [mobileTriggerVerticalOffset, setMobileTriggerVerticalOffset] = (0,react.useState)("3");
    const [selectedIcon, setSelectedIcon] = (0,react.useState)("accessibility");
    const [selectedIconName, setSelectedIconName] = (0,react.useState)("Accessibility");
    // colorpicker
    const [btnOpen, setBtnOpen] = (0,react.useState)(false);
    const btnPickerInstance = (0,react.useRef)(null);
    const btnDropdownRef = (0,react.useRef)(null);
    const btnPickerRef = (0,react.useRef)(null);
    // Load existing customization data when component mounts
    (0,react.useEffect)(() => {
        if (existingCustomizationData) {
            setAccessibilityStatementLink(existingCustomizationData.accessibilityStatementLink || "");
            setTriggerVerticalPosition(existingCustomizationData.triggerVerticalPosition || "Bottom");
            setTriggerButtonSize(existingCustomizationData.triggerButtonSize || "Medium");
            setTriggerButtonShape(existingCustomizationData.triggerButtonShape || "Circle");
            setTriggerHorizontalOffset(existingCustomizationData.triggerHorizontalOffset || "0px");
            setHideTriggerButton(existingCustomizationData.hideTriggerButton || "No");
            setTriggerVerticalOffset(existingCustomizationData.triggerVerticalOffset || "0px");
            setTriggerHorizontalPosition(existingCustomizationData.triggerHorizontalPosition || "Left");
            setBtnColor(existingCustomizationData.triggerButtonColor || "#007bff");
            setShowOnMobile(existingCustomizationData.showOnMobile || "Show");
            setMobileTriggerHorizontalPosition(existingCustomizationData.mobileTriggerHorizontalPosition || "Left");
            setMobileTriggerVerticalPosition(existingCustomizationData.mobileTriggerVerticalPosition || "Bottom");
            setMobileTriggerSize(existingCustomizationData.mobileTriggerSize || "Medium");
            setMobileTriggerShape(existingCustomizationData.mobileTriggerShape || "Rounded");
            setMobileTriggerHorizontalOffset(existingCustomizationData.mobileTriggerHorizontalOffset || "0");
            setMobileTriggerVerticalOffset(existingCustomizationData.mobileTriggerVerticalOffset || "0");
            setSelectedIcon(existingCustomizationData.selectedIcon || "accessibility");
            setSelectedIconName(existingCustomizationData.selectedIconName || "Accessibility");
        }
    }, [existingCustomizationData]);
    (0,react.useEffect)(() => {
        if (!btnPickerInstance.current && btnPickerRef.current) {
            btnPickerInstance.current = iro_es.ColorPicker(btnPickerRef.current, { width: 100, color: btnColor, borderWidth: 2, borderColor: "#ccc" });
            btnPickerInstance.current.on("color:change", (newColor) => handleColorChange(newColor.hexString));
        }
    }, []);
    (0,react.useEffect)(() => {
        // Sync picker color with state when dropdown opens
        if (btnOpen && btnPickerInstance.current)
            btnPickerInstance.current.color.set(btnColor);
    }, [btnOpen]);
    (0,react.useEffect)(() => {
        // Handle click outside to close any open dropdowns or color pickers
        function handleGlobalClickOutside(event) {
            // Close button color picker dropdown if clicked outside
            if (btnOpen &&
                btnDropdownRef.current &&
                !btnDropdownRef.current.contains(event.target) &&
                btnPickerRef.current &&
                !btnPickerRef.current.contains(event.target)) {
                setBtnOpen(false);
            }
            // Close any open custom dropdown if clicked outside
            Object.entries(dropdownRefs).forEach(([key, ref]) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    if (openDropdown === key)
                        setOpenDropdown(null);
                }
            });
        }
        document.addEventListener("mousedown", handleGlobalClickOutside);
        return () => document.removeEventListener("mousedown", handleGlobalClickOutside);
    }, [btnOpen, openDropdown]);
    const dropdownRefs = {
        interfaceLanguage: (0,react.useRef)(null),
        interfacePosition: (0,react.useRef)(null),
        triggerHorizontalPosition: (0,react.useRef)(null),
        triggerVerticalPosition: (0,react.useRef)(null),
        triggerButtonSize: (0,react.useRef)(null),
        triggerButtonShape: (0,react.useRef)(null),
        triggerHorizontalOffset: (0,react.useRef)(null),
        hideTriggerButton: (0,react.useRef)(null),
        triggerVerticalOffset: (0,react.useRef)(null),
        showOnMobile: (0,react.useRef)(null),
        mobileTriggerHorizontalPosition: (0,react.useRef)(null),
        mobileTriggerVerticalPosition: (0,react.useRef)(null),
        mobileTriggerSize: (0,react.useRef)(null),
        mobileTriggerShape: (0,react.useRef)(null),
        mobileTriggerHorizontalOffset: (0,react.useRef)(null),
        mobileTriggerVerticalOffset: (0,react.useRef)(null),
    };
    // Dropdown options
    const languageOptions = [
        { label: "German", value: "German" },
        { label: "English", value: "English" },
        { label: "Spanish", value: "Spanish" },
        { label: "French", value: "French" },
    ];
    const positionOptions = [
        { label: "Left", value: "Left" },
        { label: "Right", value: "Right" },
    ];
    const verticalPositionOptions = [
        { label: "Top", value: "Top" },
        { label: "Middle", value: "Middle" },
        { label: "Bottom", value: "Bottom" },
    ];
    const sizeOptions = [
        { label: "Small", value: "Small" },
        { label: "Medium", value: "Medium" },
        { label: "Large", value: "Large" },
    ];
    const shapeOptions = [
        { label: "Circle", value: "Circle" },
        { label: "Square", value: "Square" },
        { label: "Rounded", value: "Rounded" },
    ];
    const offsetOptions = [
        { label: "0px", value: "0px" },
        { label: "5px", value: "5px" },
        { label: "10px", value: "10px" },
        { label: "15px", value: "15px" },
        { label: "20px", value: "20px" },
    ];
    const yesNoOptions = [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
    ];
    const showOptions = [
        { label: "Show", value: "Show" },
        { label: "Hide", value: "Hide" },
    ];
    const mobileVerticalPositionOptions = [
        { label: "Top", value: "Top" },
        { label: "Middle", value: "Middle" },
        { label: "Bottom", value: "Bottom" },
    ];
    const mobileShapeOptions = [
        { label: "Rounded", value: "Rounded" },
        { label: "Square", value: "Square" },
        { label: "Circle", value: "Circle" },
    ];
    const mobileOffsetOptions = [
        { label: "0", value: "0" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
    ];
    const getLabel = (opts, val) => (opts.find((o) => o.value === val) || {}).label || val;
    // (Consolidated click-outside handling in the effect above)
    const handleNextPayment = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const customizationData = {
                // Map your state variables to the customization object
                triggerButtonColor: btnColor,
                triggerButtonShape: triggerButtonShape,
                triggerButtonSize: triggerButtonSize,
                triggerHorizontalPosition: triggerHorizontalPosition,
                triggerVerticalPosition: triggerVerticalPosition,
                triggerHorizontalOffset: triggerHorizontalOffset,
                triggerVerticalOffset: triggerVerticalOffset,
                hideTriggerButton: hideTriggerButton,
                selectedIcon: selectedIcon,
                selectedIconName: selectedIconName,
                showOnMobile: showOnMobile,
                mobileTriggerButtonColor: btnColor, // Use same color as desktop
                mobileTriggerShape: mobileTriggerShape,
                mobileTriggerSize: mobileTriggerSize,
                mobileTriggerHorizontalPosition: mobileTriggerHorizontalPosition,
                mobileTriggerVerticalPosition: mobileTriggerVerticalPosition,
                mobileTriggerHorizontalOffset: mobileTriggerHorizontalOffset,
                mobileTriggerVerticalOffset: mobileTriggerVerticalOffset,
                accessibilityStatementLink: accessibilityStatementLink
            };
            onNext(customizationData);
        }
        catch (error) {
        }
    });
    const handleBack = () => {
        onBack();
    };
    const handleColorChange = (color) => {
        setBtnColor(color);
    };
    const handleShapeChange = (shape) => {
        setTriggerButtonShape(shape);
    };
    const handlePositionChange = (position) => {
        setTriggerHorizontalPosition(position);
    };
    const handleVerticalPositionChange = (position) => {
        setTriggerVerticalPosition(position);
    };
    const renderDropdown = (type, label, value, options, onPick) => (react.createElement("div", { className: "form-group" },
        react.createElement("label", null, label),
        react.createElement("div", { className: `custom-select ${openDropdown === type ? "open" : ""}`, ref: dropdownRefs[type] },
            react.createElement("div", { className: "selected", onClick: () => setOpenDropdown(openDropdown === type ? null : type) },
                react.createElement("span", null, getLabel(options, value)),
                react.createElement("svg", { className: "dropdown-icon", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react.createElement("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }))),
            openDropdown === type && (react.createElement("ul", { className: "options" }, options.map((opt) => (react.createElement("li", { key: opt.value, onClick: () => {
                    onPick(opt.value);
                    setOpenDropdown(null);
                } }, opt.label))))))));
    return (react.createElement("div", { className: "customization-screen" },
        react.createElement("div", { className: "customization-header" },
            react.createElement("div", { className: "app-name" }),
            react.createElement("div", { className: "header-buttons" },
                react.createElement("button", { className: "back-btn", onClick: handleBack },
                    react.createElement("img", { src: whitearrow, alt: "", style: { transform: 'rotate(180deg)', width: '14px', height: '15px', marginRight: '8px' } }),
                    "Back"),
                react.createElement("button", { className: "next-btn", onClick: handleNextPayment },
                    "Next",
                    react.createElement("img", { src: whitearrow, alt: "", style: { width: '14px', height: '15px', marginLeft: '8px' } })))),
        react.createElement("div", { className: "step-navigation" },
            react.createElement("div", { className: "step active" },
                react.createElement("span", { className: "step-number" }, "STEP 1"),
                react.createElement("span", { className: "step-name" }, "Customization")),
            react.createElement("div", { className: "step" },
                react.createElement("span", { className: "step-number" }, "STEP 2"),
                react.createElement("span", { className: "step-name" }, "Publish"))),
        react.createElement("div", { className: "main-content" },
            react.createElement("div", { className: "left-panel" },
                react.createElement("div", { className: "panel-content" },
                    react.createElement("div", { className: "section" },
                        react.createElement("h3", null, "Customization AccessWidget Interface"),
                        react.createElement("div", { className: "interface-grid" },
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Accessibility Statement Link"),
                                react.createElement("input", { type: "text", placeholder: "Link here.", value: accessibilityStatementLink, onChange: (e) => setAccessibilityStatementLink(e.target.value) })))),
                    react.createElement("div", { className: "section" },
                        react.createElement("h3", null, "Customizing AccessWidget Trigger"),
                        react.createElement("div", { className: "trigger-grid" },
                            react.createElement("div", { className: "form-group" },
                                react.createElement("div", null,
                                    react.createElement("label", null, "Background Color"),
                                    react.createElement("div", { className: "color-picker-dropdown", ref: btnDropdownRef },
                                        react.createElement("button", { className: "color-picker-button", onClick: () => setBtnOpen(!btnOpen) },
                                            react.createElement("span", { className: "color-text" }, btnColor),
                                            react.createElement("div", { className: "color-preview", style: { backgroundColor: btnColor } })),
                                        react.createElement("div", { ref: btnPickerRef, className: `color-picker-container ${btnOpen ? "visible" : "hidden"}` })))),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Trigger Vertical Position"),
                                react.createElement("div", { className: "custom-select-container" }, renderDropdown("triggerVerticalPosition", "", triggerVerticalPosition, verticalPositionOptions, handleVerticalPositionChange))),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Trigger Button Size"),
                                react.createElement("div", { className: "custom-select-container" }, renderDropdown("triggerButtonSize", "", triggerButtonSize, sizeOptions, setTriggerButtonSize))),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Trigger Button Shape"),
                                react.createElement("div", { className: "custom-select-container" }, renderDropdown("triggerButtonShape", "", triggerButtonShape, shapeOptions, handleShapeChange))),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Hide Trigger Button"),
                                react.createElement("div", { className: "custom-select-container" }, renderDropdown("hideTriggerButton", "", hideTriggerButton, yesNoOptions, setHideTriggerButton))),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Trigger Horizontal Position"),
                                react.createElement("div", { className: "custom-select-container" }, renderDropdown("triggerHorizontalPosition", "", triggerHorizontalPosition, positionOptions, handlePositionChange))),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Trigger Horizontal Offset"),
                                react.createElement("input", { type: "number", min: "0", max: "50", value: triggerHorizontalOffset.replace('px', ''), onChange: (e) => setTriggerHorizontalOffset(e.target.value + 'px'), className: "offset-input" })),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Trigger Vertical Offset"),
                                react.createElement("input", { type: "number", min: "0", max: "50", value: triggerVerticalOffset.replace('px', ''), onChange: (e) => setTriggerVerticalOffset(e.target.value + 'px'), className: "offset-input" })))),
                    react.createElement("div", { className: "section" },
                        react.createElement("h3", null, "Customizing AccessWidget for Mobile"),
                        react.createElement("div", { className: "mobile-grid" },
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Show On Mobile?"),
                                react.createElement("div", { className: "custom-select-container" }, renderDropdown("showOnMobile", "", showOnMobile, showOptions, setShowOnMobile))),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Mobile Trigger Horizontal Position"),
                                react.createElement("div", { className: "custom-select-container" }, renderDropdown("mobileTriggerHorizontalPosition", "", mobileTriggerHorizontalPosition, positionOptions, setMobileTriggerHorizontalPosition))),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Mobile Trigger Vertical Position"),
                                react.createElement("div", { className: "custom-select-container" }, renderDropdown("mobileTriggerVerticalPosition", "", mobileTriggerVerticalPosition, mobileVerticalPositionOptions, setMobileTriggerVerticalPosition))),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Mobile Trigger Size"),
                                react.createElement("div", { className: "custom-select-container" }, renderDropdown("mobileTriggerSize", "", mobileTriggerSize, sizeOptions, setMobileTriggerSize))),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Trigger Mobile Shape"),
                                react.createElement("div", { className: "custom-select-container" }, renderDropdown("mobileTriggerShape", "", mobileTriggerShape, mobileShapeOptions, setMobileTriggerShape))),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Mobile Trigger Horizontal Offset"),
                                react.createElement("input", { type: "number", min: "0", max: "10", value: mobileTriggerHorizontalOffset, onChange: (e) => setMobileTriggerHorizontalOffset(e.target.value), className: "offset-input" })),
                            react.createElement("div", { className: "form-group" },
                                react.createElement("label", null, "Mobile Trigger Vertical Offset"),
                                react.createElement("input", { type: "number", min: "0", max: "10", value: mobileTriggerVerticalOffset, onChange: (e) => setMobileTriggerVerticalOffset(e.target.value), className: "offset-input" })))))),
            react.createElement("div", { className: "right-panel" },
                react.createElement("div", { className: "preview-header" },
                    react.createElement("h3", null, "Preview"),
                    react.createElement("div", { className: "device-selector" },
                        react.createElement("button", { className: `device-btn ${isDesktopView ? 'active' : ''}`, onClick: () => setIsDesktopView(true) },
                            react.createElement("img", { src: monitor, alt: "" })),
                        react.createElement("button", { className: `device-btn ${!isDesktopView ? 'active' : ''}`, onClick: () => setIsDesktopView(false) },
                            react.createElement("img", { src: mobile, alt: "" })))),
                react.createElement("div", { style: { padding: "10px" } }, isDesktopView ? (react.createElement("div", { className: "preview-window desktop-preview" },
                    react.createElement("div", { className: "browser-window" },
                        react.createElement("div", { className: "browser-controls" },
                            react.createElement("div", { className: "traffic-lights" },
                                react.createElement("div", { className: "traffic-light red" }),
                                react.createElement("div", { className: "traffic-light yellow" }),
                                react.createElement("div", { className: "traffic-light green" }))),
                        react.createElement("div", { className: "browser-content" }, hideTriggerButton === 'No' && (react.createElement("div", { className: "accessibility-widget", style: {
                                left: triggerHorizontalPosition === 'Left' ?
                                    `calc(9px + ${parseInt(triggerHorizontalOffset) * 0.2}px)` :
                                    triggerHorizontalPosition === 'Right' ? 'auto' : '50%',
                                right: triggerHorizontalPosition === 'Right' ?
                                    `calc(9px + ${parseInt(triggerHorizontalOffset) * 0.2}px)` : 'auto',
                                top: triggerVerticalPosition === 'Top' ?
                                    `calc(9px + ${parseInt(triggerVerticalOffset) * 0.2}px)` : 'auto',
                                bottom: triggerVerticalPosition === 'Bottom' ?
                                    `calc(9px + ${parseInt(triggerVerticalOffset) * 0.2}px)` : 'auto',
                                transform: triggerHorizontalPosition === 'Center' ?
                                    (triggerVerticalPosition === 'Middle' ? 'translateX(-50%)' : 'translateX(-50%)') :
                                    (triggerVerticalPosition === 'Middle' ? 'translateY(-13%)' : 'none')
                            } },
                            react.createElement("div", { className: `widget-trigger ${triggerButtonShape.toLowerCase()} ${triggerButtonSize.toLowerCase()}`, style: { backgroundColor: btnColor } },
                                react.createElement("img", { src: icon1, alt: "Accessibility Icon", className: "widget-icon" })))))))) : (react.createElement("div", { className: "preview-window mobile-preview" },
                    react.createElement("div", { className: "mobile-browser-window" },
                        react.createElement("div", { className: "mobile-browser-content" }, showOnMobile === 'Show' && (react.createElement("div", { className: "mobile-trigger-widget", style: {
                                left: mobileTriggerHorizontalPosition === 'Left' ?
                                    `calc(8px + ${parseInt(mobileTriggerHorizontalOffset)}px)` :
                                    mobileTriggerHorizontalPosition === 'Right' ? 'auto' : '50%',
                                right: mobileTriggerHorizontalPosition === 'Right' ?
                                    `calc(8px + ${parseInt(mobileTriggerHorizontalOffset)}px)` : 'auto',
                                top: mobileTriggerVerticalPosition === 'Top' ?
                                    `calc(10px + ${parseInt(mobileTriggerVerticalOffset)}px)` :
                                    mobileTriggerVerticalPosition === 'Middle' ? '50%' : 'auto',
                                bottom: mobileTriggerVerticalPosition === 'Bottom' ?
                                    `calc(10px + ${parseInt(mobileTriggerVerticalOffset)}px)` : 'auto',
                                transform: mobileTriggerHorizontalPosition === 'Center' ?
                                    (mobileTriggerVerticalPosition === 'Middle' ? 'translateX(-50%)' : 'translateX(-50%)') :
                                    (mobileTriggerVerticalPosition === 'Middle' ? 'translateY(-50%)' : 'none')
                            } },
                            react.createElement("div", { className: `mobile-widget-trigger ${mobileTriggerShape === 'Rounded' ? 'round' : mobileTriggerShape.toLowerCase()} ${mobileTriggerSize.toLowerCase()}`, style: { backgroundColor: btnColor } },
                                react.createElement("img", { src: icon1, alt: "Accessibility Icon", className: "mobile-widget-icon" })))))))))))));
};
/* harmony default export */ const components_CustomizationScreen = (CustomizationScreen);

;// ./node_modules/jwt-decode/build/esm/index.js
class InvalidTokenError extends Error {
}
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
            code = "0" + code;
        }
        return "%" + code;
    }));
}
function base64UrlDecode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length");
    }
    try {
        return b64DecodeUnicode(output);
    }
    catch (err) {
        return atob(output);
    }
}
function jwtDecode(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified: must be a string");
    }
    options || (options = {});
    const pos = options.header === true ? 0 : 1;
    const part = token.split(".")[pos];
    if (typeof part !== "string") {
        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
    }
    let decoded;
    try {
        decoded = base64UrlDecode(part);
    }
    catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
    }
    try {
        return JSON.parse(decoded);
    }
    catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
    }
}

;// ./src/util/constants.ts
// Shared constants to avoid duplication
const WORKER_BASE_URL = "https://app.accessbit.io";

;// ./src/hooks/userAuth.ts
var userAuth_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let inMemorySessionToken = null;
let inMemorySessionTokenExpiry = null;
let sessionTokenRefreshPromise = null;
const SESSION_TOKEN_BUFFER_MS = 60 * 1000; // refresh 1 minute before expiry
const setInMemorySessionToken = (token) => {
    if (!token) {
        inMemorySessionToken = null;
        inMemorySessionTokenExpiry = null;
        return;
    }
    inMemorySessionToken = token;
    try {
        const decoded = jwtDecode(token);
        if (decoded === null || decoded === void 0 ? void 0 : decoded.exp) {
            inMemorySessionTokenExpiry = decoded.exp * 1000;
        }
        else {
            inMemorySessionTokenExpiry = Date.now() + 15 * 60 * 1000;
        }
    }
    catch (_a) {
        inMemorySessionTokenExpiry = Date.now() + 15 * 60 * 1000;
    }
};
const clearInMemorySessionToken = () => {
    setInMemorySessionToken(null);
};
const hasUsableSessionToken = () => {
    if (!inMemorySessionToken)
        return false;
    if (!inMemorySessionTokenExpiry)
        return true;
    return inMemorySessionTokenExpiry - Date.now() > SESSION_TOKEN_BUFFER_MS;
};
const refreshSessionToken = () => userAuth_awaiter(void 0, void 0, void 0, function* () {
    if (sessionTokenRefreshPromise) {
        return sessionTokenRefreshPromise;
    }
    sessionTokenRefreshPromise = (() => userAuth_awaiter(void 0, void 0, void 0, function* () {
        const siteInfo = yield webflow.getSiteInfo();
        if (!(siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteId)) {
            throw new Error('No site information available');
        }
        const response = yield fetch(`${WORKER_BASE_URL}/api/auth/token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ siteId: siteInfo.siteId }),
        });
        const data = yield response.json().catch(() => ({}));
        if (!response.ok) {
            throw new Error(`Token exchange failed: ${data.error || 'Unknown error'}`);
        }
        if (!data.sessionToken) {
            throw new Error('No session token received from server');
        }
        setInMemorySessionToken(data.sessionToken);
        return data.sessionToken;
    }))();
    try {
        return yield sessionTokenRefreshPromise;
    }
    finally {
        sessionTokenRefreshPromise = null;
    }
});
const getValidSessionToken = () => userAuth_awaiter(void 0, void 0, void 0, function* () {
    if (hasUsableSessionToken()) {
        return inMemorySessionToken;
    }
    return refreshSessionToken();
});
/**
 * Custom hook for managing authentication state and token exchange.
 * @returns {Object} Authentication utilities and state
 */
function useAuth() {
    const queryClient = QueryClientProvider_useQueryClient();
    const isExchangingToken = { current: false };
    // Query for managing auth state and token validation
    const { data: authState, isLoading: isAuthLoading } = useQuery({
        queryKey: ["auth"],
        queryFn: () => userAuth_awaiter(this, void 0, void 0, function* () {
            const storedUser = localStorage.getItem("accessbit-userinfo") || localStorage.getItem("accessbit-userinfo");
            const wasExplicitlyLoggedOut = localStorage.getItem("explicitly_logged_out");
            // Return initial state if no stored user or logged out
            if (!storedUser || wasExplicitlyLoggedOut) {
                return { user: { firstName: "", email: "" } };
            }
            try {
                const userData = JSON.parse(storedUser);
                const authState = {
                    user: {
                        firstName: userData.firstName || "",
                        email: "", // Email removed from localStorage - retrieve from session token when needed
                        siteId: userData.siteId, // Include siteId from stored data
                    },
                };
                return authState;
            }
            catch (error) {
                // Clear invalid data
                localStorage.removeItem("accessbit-userinfo");
                return { user: { firstName: "", email: "" } };
            }
        }),
        staleTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        gcTime: 1000 * 60 * 60, // Cache for 1 hour
    });
    // Mutation for requesting session token from backend
    const tokenMutation = useMutation({
        mutationFn: () => userAuth_awaiter(this, void 0, void 0, function* () {
            // Get site info from Webflow (Designer Extension API - allowed)
            const siteInfo = yield webflow.getSiteInfo();
            const response = yield fetch(`${WORKER_BASE_URL}/api/auth/token`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ siteId: siteInfo.siteId }),
            });
            if (!response.ok) {
                const errorData = yield response.json();
                throw new Error(`Failed to exchange token: ${JSON.stringify(errorData)}`);
            }
            const data = yield response.json();
            if (!data.sessionToken) {
                throw new Error("No session token received");
            }
            // Return both auth data and site info
            return Object.assign(Object.assign({}, data), { siteInfo });
        }),
        onSuccess: (data) => {
            var _a, _b;
            try {
                // Decode the new token
                const decodedToken = jwtDecode(data.sessionToken);
                // Worker now sends real email, so use it directly
                const realEmail = data.email || '';
                const siteInfoWithEmail = data.siteInfo ? Object.assign(Object.assign({}, data.siteInfo), { email: realEmail }) : undefined;
                // Get custom domain from Webflow site data
                let customDomain;
                // Get production domain from domains array (custom domain)
                if (((_a = data.siteInfo) === null || _a === void 0 ? void 0 : _a.domains) && Array.isArray(data.siteInfo.domains)) {
                    const productionDomain = data.siteInfo.domains.find((d) => d.stage === 'production' || d.default === true);
                    if (productionDomain === null || productionDomain === void 0 ? void 0 : productionDomain.url) {
                        customDomain = `https://${productionDomain.url}`;
                    }
                }
                // Fallback to staging domain if no production domain found
                if (!customDomain && ((_b = data.siteInfo) === null || _b === void 0 ? void 0 : _b.shortName)) {
                    customDomain = `https://${data.siteInfo.shortName}.webflow.io`;
                }
                setInMemorySessionToken(data.sessionToken);
                // SECURITY FIX: Remove email (PII) from localStorage per Webflow Marketplace requirements
                // Email should be retrieved from session token or API when needed, not stored in localStorage
                const userData = {
                    // sessionToken is kept only in memory; do not persist
                    firstName: data.firstName,
                    // email removed - PII should not be stored in localStorage
                    siteId: data.siteId, // Store the siteId from server response
                    customDomain: customDomain,
                    // siteInfo stored without email
                    siteInfo: data.siteInfo ? Object.assign({}, data.siteInfo) : undefined, // Remove email from siteInfo
                };
                localStorage.setItem("accessbit-userinfo", JSON.stringify(userData));
                localStorage.removeItem("explicitly_logged_out");
                // No separate siteInfo key anymore
                // Directly update the query data instead of invalidating
                queryClient.setQueryData(["auth"], {
                    user: {
                        firstName: decodedToken.user.firstName,
                        email: decodedToken.user.email,
                        siteId: data.siteId, // Include siteId in user data
                    },
                });
            }
            catch (error) {
            }
        },
    });
    // Function to request session token from backend
    // SECURITY: idToken is NOT sent to worker - it's only used for client-side identity verification
    // Worker uses stored access_token from OAuth to verify identity and make Webflow API calls
    const exchangeAndVerifyIdToken = () => userAuth_awaiter(this, void 0, void 0, function* () {
        try {
            // Get fresh ID token for client-side identity verification (short-lived, ~15 minutes)
            // This is used locally to verify the user is authenticated, but NOT sent to worker
            const idToken = yield webflow.getIdToken();
            if (!idToken) {
                throw new Error('Failed to get ID token from Webflow');
            }
            // Get site info from Webflow (Designer Extension API - allowed)
            const siteInfo = yield webflow.getSiteInfo();
            if (!siteInfo || !siteInfo.siteId) {
                throw new Error('Failed to get site info from Webflow');
            }
            // SECURITY: Do NOT send idToken to worker
            // Worker will use stored access_token from OAuth to verify identity and make API calls
            const response = yield fetch(`${WORKER_BASE_URL}/api/auth/token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    siteId: siteInfo.siteId
                    // idToken is NOT sent - worker uses stored access_token from OAuth
                }),
            });
            const data = yield response.json();
            if (!response.ok) {
                throw new Error(`Token exchange failed: ${data.error || 'Unknown error'}`);
            }
            if (!data.sessionToken) {
                throw new Error('No session token received from server');
            }
            setInMemorySessionToken(data.sessionToken);
            // Worker now sends real email, so use it directly
            const realEmail = data.email || '';
            const siteInfoWithEmail = siteInfo ? Object.assign(Object.assign({}, siteInfo), { email: realEmail }) : undefined;
            // Get custom domain from Webflow site data
            let customDomain;
            // Prefer production domain from siteInfo.domains if present
            try {
                const siAny = siteInfo;
                if ((siAny === null || siAny === void 0 ? void 0 : siAny.domains) && Array.isArray(siAny.domains)) {
                    const productionDomain = siAny.domains.find((d) => (d === null || d === void 0 ? void 0 : d.stage) === 'production' || (d === null || d === void 0 ? void 0 : d.default) === true || (d === null || d === void 0 ? void 0 : d.primary) === true);
                    if (productionDomain === null || productionDomain === void 0 ? void 0 : productionDomain.url) {
                        customDomain = `https://${productionDomain.url}`;
                    }
                }
            }
            catch (_a) { }
            // Fallback to staging domain via shortName
            if (!customDomain && (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.shortName)) {
                customDomain = `https://${siteInfo.shortName}.webflow.io`;
            }
            // SECURITY FIX: Remove email (PII) from localStorage per Webflow Marketplace requirements
            const userData = {
                // sessionToken is kept only in memory; do not persist
                firstName: data.firstName,
                // email removed - PII should not be stored in localStorage
                siteId: siteInfo.siteId, // Store the siteId
                customDomain: customDomain,
                // siteInfo stored without email
                siteInfo: siteInfo ? Object.assign({}, siteInfo) : undefined, // Remove email from siteInfo
            };
            localStorage.setItem("accessbit-userinfo", JSON.stringify(userData));
            localStorage.removeItem("explicitly_logged_out");
            // Update React Query cache
            queryClient.setQueryData(["auth"], {
                user: {
                    firstName: data.firstName,
                    email: data.email,
                    siteId: siteInfo.siteId
                },
            });
            return data;
        }
        catch (error) {
            localStorage.removeItem("accessbit-userinfo");
            localStorage.removeItem("accessbit-userinfo");
            throw error;
        }
    });
    // Function to handle user logout
    const logout = () => {
        // Set logout flag and clear storage
        localStorage.setItem("explicitly_logged_out", "true");
        localStorage.removeItem("accessbit-userinfo");
        clearInMemorySessionToken();
        queryClient.setQueryData(["auth"], {
            user: { firstName: "", email: "" },
        });
        queryClient.clear();
    };
    const openAuthScreen = () => userAuth_awaiter(this, void 0, void 0, function* () {
        // Get current site info first
        const siteInfo = yield webflow.getSiteInfo();
        const authUrl = `${WORKER_BASE_URL}/api/auth/authorize?state=webflow_designer_${siteInfo.siteId}&siteId=${siteInfo.siteId}`;
        // Try to open popup
        let authWindow = null;
        try {
            authWindow = window.open(authUrl, "accessbit_auth", "width=600,height=700,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=yes");
        }
        catch (e) {
            return;
        }
        if (!authWindow || authWindow.closed) {
            return;
        }
        // Check if popup navigates away from about:blank
        let checkCount = 0;
        const checkNavigation = setInterval(() => {
            checkCount++;
            try {
                if (authWindow && !authWindow.closed) {
                    const popupUrl = authWindow.location.href;
                    if (popupUrl && popupUrl !== 'about:blank' && !popupUrl.startsWith('about:')) {
                        clearInterval(checkNavigation);
                    }
                    else if (checkCount > 10) {
                        clearInterval(checkNavigation);
                        if (authWindow && !authWindow.closed) {
                            authWindow.close();
                        }
                    }
                }
                else {
                    clearInterval(checkNavigation);
                }
            }
            catch (e) {
                // Cross-origin error is expected once popup navigates to different domain
                if (checkCount > 5) {
                    clearInterval(checkNavigation);
                }
            }
        }, 1000);
        // Monitor popup window for completion and URL changes
        const checkPopupClosed = setInterval(() => userAuth_awaiter(this, void 0, void 0, function* () {
            if (authWindow.closed) {
                clearInterval(checkPopupClosed);
                // Check for auth success when popup closes
                const url = new URL(window.location.href);
                const authSuccess = url.searchParams.get('auth_success');
                if (authSuccess === 'true') {
                    yield processAuthSuccess(url);
                }
                else {
                    // Check localStorage as fallback when popup closes
                    const stored = localStorage.getItem('accessbit-userinfo');
                    if (stored) {
                        try {
                            const parsed = JSON.parse(stored);
                            if (parsed.siteId) {
                                // Trigger success
                                window.dispatchEvent(new CustomEvent('accessbit-auth-success', { detail: parsed }));
                            }
                            else {
                            }
                        }
                        catch (e) {
                        }
                    }
                    else {
                    }
                }
            }
            else {
                // Popup still open - try to check its URL (may fail due to cross-origin)
                try {
                    if (authWindow.location) {
                        const popupUrl = authWindow.location.href;
                        if (popupUrl.includes('auth-success')) {
                        }
                        else if (popupUrl.includes('oauth/authorize')) {
                        }
                        else if (popupUrl === 'about:blank' || !popupUrl) {
                        }
                        else {
                        }
                    }
                }
                catch (e) {
                    // Expected - can't access popup URL due to cross-origin
                    // This is normal when popup is on different domain
                    if (e.message && e.message.includes('cross-origin')) {
                        // This is expected and normal
                    }
                    else {
                    }
                }
            }
        }), 1000);
        // Listen for postMessage from popup
        const handleMessage = (event) => {
            // Log ALL messages for debugging (will help identify if message is received)
            // SECURITY: Do NOT log sessionToken - it's sensitive
            const safeData = event.data ? Object.assign({}, event.data) : null;
            if (safeData && safeData.sessionToken) {
                safeData.sessionToken = '[REDACTED]'; // Remove sensitive token from logs
            }
            const allowedOrigin = 'https://app.accessbit.io';
            // Normalize origin for comparison (remove trailing slashes, lowercase)
            const normalizeOrigin = (origin) => origin.replace(/\/+$/, '').toLowerCase();
            const normalizedEventOrigin = normalizeOrigin(event.origin);
            const normalizedAllowedOrigin = normalizeOrigin(allowedOrigin);
            // STRICT validation: event.origin must EXACTLY match our worker domain
            // This is secure because event.origin is set by browser to actual sender origin
            if (normalizedEventOrigin !== normalizedAllowedOrigin) {
                return; // REJECT message - do not process
            }
            // Additional validation: Ensure origin is exactly our worker domain
            // Double-check to be extra safe
            if (!event.origin || !event.origin.includes('app.accessbit.io')) {
                return;
            }
            // Only process AUTH_SUCCESS messages
            if (event.data && event.data.type === 'AUTH_SUCCESS') {
                clearInterval(checkPopupClosed);
                clearInterval(checkUrlChange);
                // Close popup immediately to prevent app UI from loading in it
                try {
                    if (authWindow && !authWindow.closed) {
                        authWindow.close();
                    }
                }
                catch (e) {
                    // Ignore if we can't close the window
                }
                // Process the auth success with the data from the popup
                const { sessionToken, user, siteInfo } = event.data;
                // Ensure we have required data - be more lenient with user data
                if (!siteInfo || !siteInfo.siteId) {
                    return;
                }
                // Convert worker data format to our internal format
                const authData = {
                    sessionToken: sessionToken || '',
                    firstName: (user === null || user === void 0 ? void 0 : user.firstName) || (user === null || user === void 0 ? void 0 : user.name) || '',
                    email: (user === null || user === void 0 ? void 0 : user.email) || '',
                    siteId: (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteId) || '',
                    siteName: (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteName) || '',
                    shortName: (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.shortName) || ''
                };
                // Process if we have siteId
                if (authData.siteId) {
                    processAuthSuccessFromData(authData);
                }
                else {
                }
            }
            else {
            }
        };
        // Listen for storage events (when popup stores data)
        const handleStorageChange = (event) => {
            if (event.key === 'accessbit-userinfo' && event.newValue) {
                clearInterval(checkPopupClosed);
                clearInterval(checkUrlChange);
                try {
                    const authData = JSON.parse(event.newValue);
                    processAuthSuccessFromData(authData);
                }
                catch (error) {
                }
            }
        };
        // Store cleanup function to remove listeners later
        const cleanup = () => {
            window.removeEventListener('message', handleMessage);
            window.removeEventListener('storage', handleStorageChange);
        };
        // Add global message listener (will catch ALL postMessages)
        // Use capture phase to catch messages early
        window.addEventListener('message', handleMessage, true);
        window.addEventListener('storage', handleStorageChange, false);
        // Also add a direct window.message listener as backup (bubble phase)
        const backupHandler = (event) => {
            // SECURITY: Redact sessionToken from logs
            const safeData = event.data ? Object.assign({}, event.data) : null;
            if (safeData && safeData.sessionToken) {
                safeData.sessionToken = '[REDACTED]';
            }
            handleMessage(event);
        };
        window.addEventListener('message', backupHandler, false);
        // Debug: Log all message events (even if not handled)
        const debugHandler = (event) => {
            var _a;
            if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.type) !== 'AUTH_SUCCESS') {
                // SECURITY: Redact any sensitive data from logs
                const safeData = event.data ? Object.assign({}, event.data) : null;
                if (safeData && safeData.sessionToken) {
                    safeData.sessionToken = '[REDACTED]';
                }
            }
        };
        window.addEventListener('message', debugHandler, false);
        // Also add a fallback: check localStorage periodically in case postMessage fails
        const checkLocalStorage = setInterval(() => {
            const stored = localStorage.getItem('accessbit-userinfo');
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    if (parsed.siteId) {
                        clearInterval(checkLocalStorage);
                        clearInterval(checkPopupClosed);
                        clearInterval(checkUrlChange);
                        // Trigger the success handler
                        window.dispatchEvent(new CustomEvent('accessbit-auth-success', { detail: parsed }));
                    }
                }
                catch (e) {
                    // Ignore parse errors
                }
            }
        }, 1000);
        // Clean up localStorage checker after 2 minutes
        setTimeout(() => clearInterval(checkLocalStorage), 2 * 60 * 1000);
        // Cleanup after 5 minutes
        setTimeout(cleanup, 5 * 60 * 1000);
        // Also monitor for URL changes in the main window (in case popup redirects back)
        const checkUrlChange = setInterval(() => userAuth_awaiter(this, void 0, void 0, function* () {
            const url = new URL(window.location.href);
            const authSuccess = url.searchParams.get('auth_success');
            if (authSuccess === 'true') {
                clearInterval(checkUrlChange);
                clearInterval(checkPopupClosed);
                // Process auth success using helper function
                yield processAuthSuccess(url);
            }
        }), 500);
        // Check immediately for auth success (in case popup already completed)
        const checkImmediateAuth = () => userAuth_awaiter(this, void 0, void 0, function* () {
            try {
                const url = new URL(window.location.href);
                const authSuccess = url.searchParams.get('auth_success');
                if (authSuccess === 'true') {
                    // Clear intervals since we found auth success
                    clearInterval(checkUrlChange);
                    clearInterval(checkPopupClosed);
                    // Process auth success (same logic as above)
                    yield processAuthSuccess(url);
                }
            }
            catch (error) {
            }
        });
        // Helper function to process auth success
        const processAuthSuccess = (url) => userAuth_awaiter(this, void 0, void 0, function* () {
            try {
                localStorage.removeItem("accessbit-userinfo");
                localStorage.removeItem("accessbit-userinfo");
                localStorage.removeItem("explicitly_logged_out");
                localStorage.removeItem("siteInfo");
                // Get auth data from URL parameters (sessionToken removed for security - use postMessage instead)
                const firstName = url.searchParams.get('firstName');
                const email = url.searchParams.get('email');
                const siteId = url.searchParams.get('siteId');
                const siteName = url.searchParams.get('siteName');
                const shortName = url.searchParams.get('shortName');
                // Get custom domain - will be updated from actual siteInfo if available
                // For now use staging domain as fallback
                let customDomain;
                if (shortName) {
                    customDomain = `https://${shortName}.webflow.io`;
                }
                // Get sessionToken via token exchange instead of URL (more secure)
                // This ensures sessionToken never appears in browser history or server logs
                try {
                    const sessionToken = yield refreshSessionToken();
                    if (sessionToken) {
                        setInMemorySessionToken(sessionToken);
                    }
                }
                catch (error) {
                    // If token exchange fails, continue without sessionToken
                    // User may need to re-authenticate
                }
                // SECURITY FIX: Remove email (PII) from localStorage
                // Store the user data from the OAuth popup
                const userData = {
                    // sessionToken is kept only in memory; do not persist
                    firstName: firstName,
                    // email removed - PII should not be stored in localStorage
                    siteId: siteId,
                    customDomain: customDomain,
                    siteInfo: {
                        siteId: siteId,
                        siteName: siteName,
                        shortName: shortName
                        // email removed from siteInfo
                    }
                };
                localStorage.setItem("accessbit-userinfo", JSON.stringify(userData));
                localStorage.removeItem("explicitly_logged_out");
                // Clear React Query cache and update with new data
                queryClient.clear();
                queryClient.setQueryData(["auth"], {
                    user: {
                        firstName: firstName,
                        email: email || '',
                        siteId: siteId
                    },
                });
                // Dispatch custom event immediately after localStorage is set
                window.dispatchEvent(new CustomEvent('accessbit-auth-success', { detail: userData }));
                // Clean up URL parameters
                const cleanUrl = new URL(window.location.href);
                cleanUrl.searchParams.delete('auth_success');
                cleanUrl.searchParams.delete('sessionToken');
                cleanUrl.searchParams.delete('firstName');
                cleanUrl.searchParams.delete('email');
                cleanUrl.searchParams.delete('siteId');
                cleanUrl.searchParams.delete('siteName');
                cleanUrl.searchParams.delete('shortName');
                window.history.replaceState({}, '', cleanUrl.toString());
            }
            catch (error) {
            }
        });
        // Helper function to process auth success from data object
        const processAuthSuccessFromData = (authData) => {
            try {
                localStorage.removeItem("accessbit-userinfo");
                localStorage.removeItem("explicitly_logged_out");
                localStorage.removeItem("siteInfo");
                // Get custom domain - will be updated from actual siteInfo if available
                // For now use staging domain as fallback
                let customDomain;
                if (authData.shortName) {
                    customDomain = `https://${authData.shortName}.webflow.io`;
                }
                if (authData.sessionToken) {
                    setInMemorySessionToken(authData.sessionToken);
                }
                const userData = {
                    // sessionToken is kept only in memory; do not persist
                    firstName: authData.firstName || '',
                    siteId: authData.siteId || '',
                    customDomain: customDomain,
                    siteInfo: {
                        siteId: authData.siteId || '',
                        siteName: authData.siteName || '',
                        shortName: authData.shortName || ''
                        // email removed from siteInfo
                    }
                };
                localStorage.setItem("accessbit-userinfo", JSON.stringify(userData));
                localStorage.removeItem("explicitly_logged_out");
                // Clear React Query cache and update with new data
                queryClient.clear();
                queryClient.setQueryData(["auth"], {
                    user: {
                        firstName: authData.firstName || '',
                        email: authData.email || '',
                        siteId: authData.siteId || ''
                    },
                });
                // Dispatch custom event immediately after localStorage is set
                const customEvent = new CustomEvent('accessbit-auth-success', { detail: userData });
                window.dispatchEvent(customEvent);
            }
            catch (error) {
            }
        };
        // Check immediately for auth success
        checkImmediateAuth();
        // Set a timeout to clear intervals after 5 minutes
        setTimeout(() => {
            clearInterval(checkUrlChange);
            clearInterval(checkPopupClosed);
        }, 5 * 60 * 1000); // 5 minutes
    });
    // Function to check if user is authenticated for current site
    const isAuthenticatedForCurrentSite = () => userAuth_awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            // Check if user has basic authentication
            if (!((_a = authState === null || authState === void 0 ? void 0 : authState.user) === null || _a === void 0 ? void 0 : _a.email)) {
                return false;
            }
            // Get current site info from Webflow
            const currentSiteInfo = yield webflow.getSiteInfo();
            if (!(currentSiteInfo === null || currentSiteInfo === void 0 ? void 0 : currentSiteInfo.siteId)) {
                return false;
            }
            // Check if user is authenticated for this specific site
            const storedSiteId = authState.user.siteId;
            const currentSiteId = currentSiteInfo.siteId;
            const isMatch = storedSiteId === currentSiteId;
            return isMatch;
        }
        catch (error) {
            return false;
        }
    });
    // Function to make authenticated API requests with bearer token
    const makeAuthenticatedRequest = (url_1, ...args_1) => userAuth_awaiter(this, [url_1, ...args_1], void 0, function* (url, options = {}) {
        const executeRequest = (token) => userAuth_awaiter(this, void 0, void 0, function* () {
            const headers = new Headers(options.headers);
            if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
                headers.set('Content-Type', 'application/json');
            }
            headers.set('Authorization', `Bearer ${token}`);
            return fetch(url, Object.assign(Object.assign({}, options), { headers }));
        });
        let sessionToken = yield getValidSessionToken();
        let response = yield executeRequest(sessionToken);
        if (response.status === 401) {
            clearInMemorySessionToken();
            sessionToken = yield refreshSessionToken();
            response = yield executeRequest(sessionToken);
        }
        if (!response.ok) {
            const errorData = yield response.json().catch(() => ({}));
            throw new Error(`API request failed: ${response.status} - ${errorData.error || 'Unknown error'}`);
        }
        const text = yield response.text();
        if (!text)
            return null;
        try {
            return JSON.parse(text);
        }
        catch (_a) {
            return text;
        }
    });
    // Function to publish accessibility settings and customizations
    const publishSettings = (customizationData, accessibilityProfiles) => userAuth_awaiter(this, void 0, void 0, function* () {
        var _a;
        const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        try {
            // Get user email from auth state
            let userEmail = (_a = authState === null || authState === void 0 ? void 0 : authState.user) === null || _a === void 0 ? void 0 : _a.email;
            if (!userEmail) {
                const storedUser = localStorage.getItem("accessbit-userinfo");
                if (storedUser) {
                    const userData = JSON.parse(storedUser);
                    userEmail = userData.email;
                }
            }
            const siteInfo = yield webflow.getSiteInfo();
            if (!(siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteId)) {
                throw new Error('No site information available');
            }
            // Ensure customization data has the correct structure for the widget
            const publishData = {
                customization: {
                    // Trigger button customization
                    triggerButtonColor: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerButtonColor) || '#007bff',
                    triggerButtonShape: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerButtonShape) || 'Circle',
                    triggerButtonSize: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerButtonSize) || 'Medium',
                    triggerHorizontalPosition: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerHorizontalPosition) || 'Right',
                    triggerVerticalPosition: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerVerticalPosition) || 'Bottom',
                    triggerHorizontalOffset: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerHorizontalOffset) || '0px',
                    triggerVerticalOffset: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerVerticalOffset) || '3px',
                    hideTriggerButton: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.hideTriggerButton) || 'No',
                    // Interface customization
                    interfaceLeadColor: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.interfaceLeadColor) || '#FFFFFF',
                    interfacePosition: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.interfacePosition) || 'Left',
                    interfaceFooterContent: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.interfaceFooterContent) || '',
                    accessibilityStatementLink: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.accessibilityStatementLink) || '',
                    // Icon customization
                    selectedIcon: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.selectedIcon) || 'accessibility',
                    selectedIconName: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.selectedIconName) || 'Accessibility',
                    // Mobile customization
                    showOnMobile: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.showOnMobile) || 'Show',
                    mobileTriggerHorizontalPosition: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.mobileTriggerHorizontalPosition) || 'Left',
                    mobileTriggerVerticalPosition: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.mobileTriggerVerticalPosition) || 'Bottom',
                    mobileTriggerSize: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.mobileTriggerSize) || 'Medium',
                    mobileTriggerShape: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.mobileTriggerShape) || 'Round',
                    mobileTriggerHorizontalOffset: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.mobileTriggerHorizontalOffset) || '3',
                    mobileTriggerVerticalOffset: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.mobileTriggerVerticalOffset) || '3'
                },
                accessibilityProfiles: accessibilityProfiles,
                customDomain: null,
                publishedAt: new Date().toISOString(),
            };
            const result = yield makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/publish?siteId=${siteInfo.siteId}`, {
                method: 'POST',
                body: JSON.stringify(publishData),
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    });
    // Function to attempt automatic token refresh on app load
    const attemptAutoRefresh = () => userAuth_awaiter(this, void 0, void 0, function* () {
        try {
            // Check if user was explicitly logged out
            const wasExplicitlyLoggedOut = localStorage.getItem("explicitly_logged_out");
            if (wasExplicitlyLoggedOut) {
                return false;
            }
            // Get current site info to check if site has changed
            const currentSiteInfo = yield webflow.getSiteInfo();
            if (!(currentSiteInfo === null || currentSiteInfo === void 0 ? void 0 : currentSiteInfo.siteId)) {
                return false;
            }
            // Check if there's existing auth data that might be expired or invalid
            const storedUser = localStorage.getItem("accessbit-userinfo") || localStorage.getItem("accessbit-userinfo");
            if (storedUser) {
                try {
                    const userData = JSON.parse(storedUser);
                    // Check if site has changed
                    if (userData.siteId && userData.siteId !== currentSiteInfo.siteId) {
                        localStorage.removeItem('accessbit-userinfo');
                        localStorage.removeItem('accessbit-userinfo');
                        localStorage.removeItem('siteInfo');
                        return false; // Force silent auth for new site
                    }
                    // Check if user data exists
                    if (userData.email && userData.siteId) {
                        return true; // User data exists
                    }
                }
                catch (error) {
                }
            }
            else {
            }
            // Attempt silent auth to refresh token with timeout
            const silentAuthPromise = attemptSilentAuth();
            const timeoutPromise = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(false);
                }, 3000); // 3 second timeout for silent auth
            });
            const result = yield Promise.race([silentAuthPromise, timeoutPromise]);
            return result;
        }
        catch (error) {
            return false;
        }
    });
    // Function to attempt silent authorization without user interaction
    const attemptSilentAuth = () => userAuth_awaiter(this, void 0, void 0, function* () {
        try {
            // Get site info from Webflow (Designer Extension API - allowed)
            const siteInfo = yield webflow.getSiteInfo();
            if (!siteInfo || !siteInfo.siteId) {
                return false;
            }
            const currentStoredData = localStorage.getItem('accessbit-userinfo');
            const response = yield fetch(`${WORKER_BASE_URL}/api/auth/token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    siteId: siteInfo.siteId
                }),
            });
            // If 400 or 401, user hasn't completed OAuth yet - this is expected
            if (!response.ok && (response.status === 400 || response.status === 401)) {
                return false;
            }
            if (response.ok) {
                const data = yield response.json();
                if (!data.sessionToken) {
                    throw new Error('No session token received from server');
                }
                setInMemorySessionToken(data.sessionToken);
                if (data.firstName || data.email) {
                    // SECURITY FIX: Remove email (PII) from localStorage
                    const userData = {
                        firstName: data.firstName || 'User',
                        // email removed - PII should not be stored in localStorage
                        siteId: siteInfo.siteId,
                        siteInfo: {
                            siteId: siteInfo.siteId,
                            siteName: siteInfo.siteName,
                            shortName: siteInfo.shortName
                            // email removed from siteInfo
                        }
                    };
                    try {
                        let customDomain;
                        // Prefer production domain from siteInfo.domains if present
                        const siAny = siteInfo;
                        if ((siAny === null || siAny === void 0 ? void 0 : siAny.domains) && Array.isArray(siAny.domains)) {
                            const productionDomain = siAny.domains.find((d) => (d === null || d === void 0 ? void 0 : d.stage) === 'production' || (d === null || d === void 0 ? void 0 : d.default) === true || (d === null || d === void 0 ? void 0 : d.primary) === true);
                            if (productionDomain === null || productionDomain === void 0 ? void 0 : productionDomain.url) {
                                customDomain = `https://${productionDomain.url}`;
                            }
                        }
                        // Fallback to staging domain via shortName
                        if (!customDomain && (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.shortName)) {
                            customDomain = `https://${siteInfo.shortName}.webflow.io`;
                        }
                        if (customDomain) {
                            userData.customDomain = customDomain;
                        }
                    }
                    catch (_err) {
                        // Non-fatal: absence of domain data should not block auth
                    }
                    localStorage.setItem('accessbit-userinfo', JSON.stringify(userData));
                    localStorage.removeItem('explicitly_logged_out');
                    // Site info is now included in accessbit-userinfo above
                    // Update React Query cache
                    queryClient.setQueryData(["auth"], {
                        user: {
                            firstName: data.firstName,
                            email: data.email,
                            siteId: siteInfo.siteId
                        },
                    });
                    // Verify the data was stored
                    const storedData = localStorage.getItem('accessbit-userinfo');
                    return true;
                }
                else {
                    return false;
                }
            }
            const data = yield response.json();
            return false;
        }
        catch (error) {
            return false;
        }
    });
    // Function to connect custom domain to site
    const connectCustomDomain = (domain) => userAuth_awaiter(this, void 0, void 0, function* () {
        try {
            const siteInfo = yield webflow.getSiteInfo();
            if (!(siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteId)) {
                throw new Error('No site information available');
            }
            const domainData = {
                siteId: siteInfo.siteId,
                customDomain: domain,
                connectedAt: new Date().toISOString(),
            };
            const result = yield makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/domain`, {
                method: 'POST',
                body: JSON.stringify(domainData),
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    });
    // Function to check if published data exists for current user
    const checkPublishedDataExists = () => userAuth_awaiter(this, void 0, void 0, function* () {
        try {
            // Get siteId from Webflow
            const siteInfo = yield webflow.getSiteInfo();
            if (!(siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteId)) {
                return false;
            }
            const result = yield makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/settings?siteId=${siteInfo.siteId}`, {
                method: 'GET',
            });
            // If we get here without error, published data exists
            if (result && (result.customization || result.accessibilityProfiles)) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            return false;
        }
    });
    // Function to get published accessibility settings
    const getPublishedSettings = () => userAuth_awaiter(this, void 0, void 0, function* () {
        try {
            // Get siteId from Webflow
            const siteInfo = yield webflow.getSiteInfo();
            if (!(siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteId)) {
                throw new Error('No site information available');
            }
            const result = yield makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/settings?siteId=${siteInfo.siteId}`, {
                method: 'GET',
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    });
    const registerAccessibilityScript = () => userAuth_awaiter(this, void 0, void 0, function* () {
        try {
            // Get siteId from Webflow
            const siteInfo = yield webflow.getSiteInfo();
            if (!(siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteId)) {
                throw new Error('No site information available');
            }
            // Call backend worker endpoint which calls Webflow API server-side
            const result = yield makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/register-script?siteId=${siteInfo.siteId}`, { method: 'POST' });
            return result;
        }
        catch (error) {
            throw error;
        }
    });
    const applyAccessibilityScript = (params) => userAuth_awaiter(this, void 0, void 0, function* () {
        try {
            // Get siteId from Webflow
            const siteInfo = yield webflow.getSiteInfo();
            if (!(siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteId)) {
                throw new Error('No site information available');
            }
            // Call backend worker endpoint which calls Webflow API server-side
            const result = yield makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/apply-script?siteId=${siteInfo.siteId}`, {
                method: 'POST',
                body: JSON.stringify(params),
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    });
    const getSessionToken = () => userAuth_awaiter(this, void 0, void 0, function* () {
        return getValidSessionToken();
    });
    return {
        user: (authState === null || authState === void 0 ? void 0 : authState.user) || { firstName: "", email: "" },
        isAuthLoading,
        exchangeAndVerifyIdToken,
        logout,
        openAuthScreen,
        isAuthenticatedForCurrentSite,
        makeAuthenticatedRequest,
        publishSettings,
        connectCustomDomain,
        getPublishedSettings,
        checkPublishedDataExists,
        registerAccessibilityScript,
        applyAccessibilityScript,
        attemptSilentAuth,
        attemptAutoRefresh,
        getSessionToken,
    };
}

;// ./src/util/siteId.ts
var siteId_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Shared utility for getting siteId from accessbit-userinfo
const getSiteId = () => siteId_awaiter(void 0, void 0, void 0, function* () {
    const userData = localStorage.getItem('accessbit-userinfo');
    if (userData) {
        try {
            const parsed = JSON.parse(userData);
            return parsed.siteId || null;
        }
        catch (error) {
            console.warn('Failed to parse accessbit-userinfo:', error);
        }
    }
    return null;
});
// Shared utility for getting custom domain from accessbit-userinfo
const getCustomDomain = () => {
    const userData = localStorage.getItem('accessbit-userinfo');
    if (userData) {
        try {
            const parsed = JSON.parse(userData);
            const customDomain = parsed.customDomain;
            if (customDomain) {
                // Extract domain from URL (remove https://, http://, trailing slash)
                const domain = customDomain
                    .replace(/^https?:\/\//, '')
                    .replace(/\/$/, '')
                    .split('/')[0]; // Get just the domain part
                return domain;
            }
        }
        catch (error) {
        }
    }
    return null;
};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/payment.css
var payment = __webpack_require__(458);
;// ./src/styles/payment.css

      
      
      
      
      
      
      
      
      

var payment_options = {};

payment_options.styleTagTransform = (styleTagTransform_default());
payment_options.setAttributes = (setAttributesWithoutAttributes_default());
payment_options.insert = insertBySelector_default().bind(null, "head");
payment_options.domAPI = (styleDomAPI_default());
payment_options.insertStyleElement = (insertStyleElement_default());

var payment_update = injectStylesIntoStyleTag_default()(payment/* default */.A, payment_options);




       /* harmony default export */ const styles_payment = (payment/* default */.A && payment/* default */.A.locals ? payment/* default */.A.locals : undefined);

;// ./src/components/PaymentScreen.tsx


const PaymentScreen_whitearrow = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M0.756 8.59012V6.62812H10.314L5.598 2.30812L6.948 0.940125L13.356 6.97012V8.23012L6.948 14.2601L5.58 12.8741L10.278 8.59012H0.756Z" fill="white"/>
</svg>`);
const PaymentScreen = ({ onBack, customizationData }) => {
    const [isAnnual, setIsAnnual] = (0,react.useState)(true);
    const [isProcessing, setIsProcessing] = (0,react.useState)(false);
    const [actualPlanType, setActualPlanType] = (0,react.useState)('annual');
    // Debug: Monitor actualPlanType changes
    (0,react.useEffect)(() => {
        ;
    }, [actualPlanType]);
    const [showDomainModal, setShowDomainModal] = (0,react.useState)(false);
    const [newDomain, setNewDomain] = (0,react.useState)('');
    const [isUpdatingDomain, setIsUpdatingDomain] = (0,react.useState)(false);
    const [notification, setNotification] = (0,react.useState)(null);
    // Helper function to show notifications
    const showNotification = (type, message) => {
        setNotification({ type, message });
        // Auto-hide after 5 seconds
        setTimeout(() => {
            setNotification(null);
        }, 5000);
    };
    const handlePurchaseNow = () => {
        const stripeUrl = isAnnual
            ? `https://buy.stripe.com/3cI8wRgGjaLt0MY3x64Ni00` // Annual plan
            : `https://buy.stripe.com/8x23cx9dRaLt2V6ffO4Ni01`; // Monthly plan
        window.open(stripeUrl, '_blank');
    };
    const handleEditDomain = () => {
        setShowDomainModal(true);
    };
    return (react.createElement("div", { className: "payment-screen" },
        react.createElement("div", { className: "payment-header" },
            react.createElement("div", { className: "app-name" }),
            react.createElement("div", { className: "header-buttons" },
                react.createElement("button", { className: "back-btn", onClick: onBack, disabled: isProcessing },
                    react.createElement("img", { src: PaymentScreen_whitearrow, alt: "", style: { transform: 'rotate(180deg)', width: '14px', height: '15px', marginRight: '8px' } }),
                    "Close"))),
        react.createElement("div", { className: "main-content" },
            react.createElement("div", { className: "payment-card" },
                react.createElement("div", { className: "pricing-flex" },
                    react.createElement("div", { className: "pricing-left" },
                        react.createElement("div", { className: "main-price" },
                            react.createElement("div", { className: "price-number" },
                                "$",
                                isAnnual ? '19' : '24'),
                            react.createElement("div", { className: "price-period" },
                                "/",
                                isAnnual ? 'month: Purchased Annually' : 'month')),
                        react.createElement("div", { className: `payment-toggle ${isAnnual ? 'annually' : 'monthly'}` },
                            react.createElement("button", { className: `toggle-option ${!isAnnual ? 'active' : ''}`, onClick: () => {
                                    setIsAnnual(false);
                                    setActualPlanType('monthly');
                                } }, "Monthly"),
                            react.createElement("button", { className: `toggle-option ${isAnnual ? 'active' : ''}`, onClick: () => {
                                    setIsAnnual(true);
                                    setActualPlanType('annual');
                                } }, "Annually")),
                        react.createElement("div", { className: "savings-info", style: { opacity: isAnnual ? 1 : 0, visibility: isAnnual ? 'visible' : 'hidden' } }, "You Save 20%")),
                    react.createElement("div", { className: "pricing-right" },
                        react.createElement("div", { className: "secondary-price" },
                            "$",
                            isAnnual ? '19' : '24',
                            "/month",
                            isAnnual ? ': Purchased Annually' : ''),
                        react.createElement("button", { className: "purchase-btn", onClick: handlePurchaseNow, disabled: isProcessing }, "Purchase Now"))))),
        notification && (react.createElement("div", { style: {
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 10000,
                backgroundColor: notification.type === 'success' ? '#10b981' :
                    notification.type === 'error' ? '#ef4444' : 'rgba(46, 43, 69, 1)',
                color: 'white',
                padding: '12px 16px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                maxWidth: '400px',
                fontSize: '14px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                animation: 'slideInRight 0.3s ease-out',
                border: '1px solid rgba(255, 255, 255, 0.2)'
            } },
            react.createElement("div", { style: {
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px'
                } }, notification.type === 'success' ? '' :
                notification.type === 'error' ? '' : ''),
            react.createElement("div", { style: { flex: 1 } }, notification.message),
            react.createElement("button", { onClick: () => setNotification(null), style: {
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: '4px',
                    fontSize: '18px',
                    lineHeight: 1,
                    opacity: 0.8
                }, onMouseEnter: (e) => e.currentTarget.style.opacity = '1', onMouseLeave: (e) => e.currentTarget.style.opacity = '0.8' }, "\u00D7")))));
};
/* harmony default export */ const components_PaymentScreen = (PaymentScreen);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/publish.css
var publish = __webpack_require__(793);
;// ./src/styles/publish.css

      
      
      
      
      
      
      
      
      

var publish_options = {};

publish_options.styleTagTransform = (styleTagTransform_default());
publish_options.setAttributes = (setAttributesWithoutAttributes_default());
publish_options.insert = insertBySelector_default().bind(null, "head");
publish_options.domAPI = (styleDomAPI_default());
publish_options.insertStyleElement = (insertStyleElement_default());

var publish_update = injectStylesIntoStyleTag_default()(publish/* default */.A, publish_options);




       /* harmony default export */ const styles_publish = (publish/* default */.A && publish/* default */.A.locals ? publish/* default */.A.locals : undefined);

;// ./src/components/PublishScreen.tsx
var PublishScreen_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const PublishScreen_whitearrow = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M0.756 8.59012V6.62812H10.314L5.598 2.30812L6.948 0.940125L13.356 6.97012V8.23012L6.948 14.2601L5.58 12.8741L10.278 8.59012H0.756Z" fill="white"/>
</svg>`);
// Accessibility icon as data URL (Font Awesome 5 style: ring + figure)
const PublishScreen_icon1 = new URL(/* asset import */ __webpack_require__(818), __webpack_require__.b).href;
const icon2 = new URL(/* asset import */ __webpack_require__(741), __webpack_require__.b).href;
const icon3 = new URL(/* asset import */ __webpack_require__(460), __webpack_require__.b).href;
const icon4 = new URL(/* asset import */ __webpack_require__(83), __webpack_require__.b).href;
const icon5 = new URL(/* asset import */ __webpack_require__(114), __webpack_require__.b).href;
const icon6 = new URL(/* asset import */ __webpack_require__(465), __webpack_require__.b).href;
const icon7 = new URL(/* asset import */ __webpack_require__(720), __webpack_require__.b).href;
const icon8 = new URL(/* asset import */ __webpack_require__(871), __webpack_require__.b).href;
// Icon options matching CustomizationScreen
const iconOptions = [
    { id: "accessibility", label: PublishScreen_icon1, name: "Accessibility" },
    { id: "person", label: icon2, name: "Person" },
    { id: "wheelchair", label: icon3, name: "Wheelchair" },
    { id: "ad", label: icon4, name: "AD" },
    { id: "eye", label: icon5, name: "Eye" },
    { id: "ramp", label: icon6, name: "Ramp" },
    { id: "gear", label: icon7, name: "Gear" },
    { id: "ad-triple", label: icon8, name: "AD)))" },
];
const PublishScreen = ({ onBack, customizationData }) => {
    var _a, _b, _c;
    const { publishSettings, user, registerAccessibilityScript, applyAccessibilityScript, makeAuthenticatedRequest } = useAuth();
    const [showModal, setShowModal] = (0,react.useState)(true);
    const [showPublishModal, setShowPublishModal] = (0,react.useState)(false);
    const [isPublishing, setIsPublishing] = (0,react.useState)(false);
    const [publishError, setPublishError] = (0,react.useState)(null);
    const [publishSuccess, setPublishSuccess] = (0,react.useState)(false);
    const [hasSubscription, setHasSubscription] = (0,react.useState)(null);
    const [isCheckingSubscription, setIsCheckingSubscription] = (0,react.useState)(true);
    const [showPaymentScreen, setShowPaymentScreen] = (0,react.useState)(false);
    const [accessibilityProfiles, setAccessibilityProfiles] = (0,react.useState)({
        seizureSafe: false,
        visionImpaired: false,
        adhdFriendly: false,
        cognitiveDisability: false,
        keyboardNavigation: false,
        blindUsers: false,
    });
    const handleToggle = (profile) => {
        setAccessibilityProfiles(prev => (Object.assign(Object.assign({}, prev), { [profile]: !prev[profile] })));
    };
    const handlePublish = () => {
        setPublishSuccess(false);
        setPublishError(null);
        setShowPublishModal(true);
    };
    const handleConfirmPublish = () => PublishScreen_awaiter(void 0, void 0, void 0, function* () {
        var _a;
        setIsPublishing(true);
        setPublishError(null);
        setPublishSuccess(false);
        try {
            // Step 1: Publish settings to KV store
            const publishResult = yield publishSettings(customizationData, accessibilityProfiles);
            // Step 2: Handle script registration
            const registerResult = yield registerAccessibilityScript();
            // Determine success message based on result
            let successMessage = '';
            if (registerResult.success) {
                // Always attempt to apply to head to repair manual deletions
                const applyData = {
                    targetType: 'site',
                    scriptId: ((_a = registerResult.result) === null || _a === void 0 ? void 0 : _a.id) || 'accessbit',
                    location: 'header',
                    version: '1.0.0'
                };
                const applyResult = yield applyAccessibilityScript(applyData);
                if (applyResult.success) {
                    successMessage = applyResult.alreadyApplied
                        ? 'Settings published! Script was already active in head.'
                        : 'Settings published! Script has been registered and applied to your site.';
                }
                else {
                    setPublishError('Settings published, but failed to apply script. Please try again.');
                    return;
                }
            }
            else {
                setPublishError('Settings published, but failed to register script. Please try again.');
                return;
            }
            // Set success message immediately
            setPublishSuccess(successMessage);
            setShowPublishModal(false);
            // Clear success message after 8 seconds
            setTimeout(() => {
                setPublishSuccess(false);
            }, 8000);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Failed to publish settings";
            setPublishError(errorMessage);
        }
        finally {
            setIsPublishing(false);
        }
    });
    const handleCancelPublish = () => {
        setShowPublishModal(false);
    };
    const handleReset = () => {
        setAccessibilityProfiles({
            seizureSafe: false,
            visionImpaired: false,
            adhdFriendly: false,
            cognitiveDisability: false,
            keyboardNavigation: false,
            blindUsers: false,
        });
    };
    const handleHideInference = () => {
        setShowModal(false);
    };
    (0,react.useEffect)(() => {
        const checkSubscriptionStatus = () => PublishScreen_awaiter(void 0, void 0, void 0, function* () {
            try {
                setIsCheckingSubscription(true);
                let customDomain = getCustomDomain();
                if (!customDomain) {
                    try {
                        const siteId = yield getSiteId();
                        if (siteId) {
                            // Use backend proxy endpoint instead of calling Webflow API directly
                            // This prevents idToken leakage and uses accessToken stored during OAuth
                            const base = WORKER_BASE_URL.replace(/\/+$/, '');
                            const data = yield makeAuthenticatedRequest(`${base}/api/accessibility/custom-domains?siteId=${encodeURIComponent(siteId)}`, { method: 'GET' });
                            // makeAuthenticatedRequest returns JSON directly (not Response object)
                            if (data && data.customDomains && Array.isArray(data.customDomains)) {
                                // Find the default/primary custom domain
                                const defaultDomain = data.customDomains.find((d) => d.default === true) || data.customDomains[0];
                                if (defaultDomain === null || defaultDomain === void 0 ? void 0 : defaultDomain.domain) {
                                    customDomain = defaultDomain.domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
                                }
                            }
                        }
                    }
                    catch (error) {
                        // Fallback to publishSite API if REST API fails
                        try {
                            const publishInfo = yield webflow.publishSite();
                            if ((publishInfo === null || publishInfo === void 0 ? void 0 : publishInfo.customDomains) && Array.isArray(publishInfo.customDomains) && publishInfo.customDomains.length > 0) {
                                customDomain = publishInfo.customDomains[0].url.replace(/^https?:\/\//, '').replace(/\/$/, '');
                            }
                        }
                        catch (fallbackError) {
                        }
                    }
                }
                // Step 2: Check if it's a staging domain (always allow, no payment check needed)
                if (customDomain) {
                    const isStaging = (customDomain.includes('.webflow.io') ||
                        customDomain.includes('.webflow.com') ||
                        customDomain.includes('localhost') ||
                        customDomain.includes('127.0.0.1') ||
                        customDomain.includes('staging'));
                    if (isStaging) {
                        // Staging domain = no payment required
                        setHasSubscription(false);
                        setIsCheckingSubscription(false);
                        return;
                    }
                }
                if (customDomain) {
                    // Normalize domain (remove protocol, www, trailing slash)
                    const normalizedDomain = customDomain
                        .replace(/^https?:\/\//, '')
                        .replace(/^www\./, '')
                        .replace(/\/$/, '')
                        .split('/')[0];
                    // Call backend to check payment status
                    const response = yield makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/check-payment-status?domain=${encodeURIComponent(normalizedDomain)}`, { method: 'GET' });
                    if ((response === null || response === void 0 ? void 0 : response.hasAccess) === true && (response === null || response === void 0 ? void 0 : response.isStaging) !== true) {
                        setHasSubscription(true);
                    }
                    else {
                        setHasSubscription(false);
                    }
                }
                else {
                    // No custom domain = no subscription
                    setHasSubscription(false);
                }
            }
            catch (error) {
                setHasSubscription(false);
            }
            finally {
                setIsCheckingSubscription(false);
            }
        });
        checkSubscriptionStatus();
    }, []); // Only run on mount
    const handlePublishClick = () => {
        handlePublish();
    };
    const handleCancelSubscription = () => {
        // Open Stripe billing portal in new window
        window.open('https://billing.stripe.com/p/login/3cI8wRgGjaLt0MY3x64Ni00', '_blank');
    };
    return (react.createElement("div", { className: "publish-screen", style: { paddingTop: '0' } },
        showPublishModal && (react.createElement("div", { className: "publish-modal-overlay" },
            react.createElement("div", { className: "publish-modal" },
                react.createElement("div", { className: "publish-modal-content" },
                    react.createElement("p", null, "We are installing the script in your site custom code."),
                    react.createElement("p", null, "Click confirm to proceed."),
                    react.createElement("div", { className: "publish-modal-buttons" },
                        react.createElement("button", { className: "confirm-btn", onClick: handleConfirmPublish, disabled: isPublishing }, isPublishing ? "Publishing..." : "Confirm"),
                        react.createElement("button", { className: "cancel-btn", onClick: handleCancelPublish, disabled: isPublishing }, "Cancel")))))),
        react.createElement("div", { className: "publish-header" },
            react.createElement("div", { className: "app-logo" },
                react.createElement("span", { className: "app-name" })),
            react.createElement("div", { className: "header-buttons", style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' } },
                react.createElement("button", { className: "back-btn", onClick: onBack },
                    react.createElement("img", { src: PublishScreen_whitearrow, alt: "", style: { transform: 'rotate(180deg)', width: '14px', height: '15px', marginRight: '8px' } }),
                    "Back"),
                react.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
                    isCheckingSubscription ? (react.createElement("span", { style: {
                            color: '#a3a3a3',
                            fontSize: '14px',
                            fontWeight: '500'
                        } }, "Checking subscription...")) : hasSubscription === false ? (react.createElement("span", { style: {
                            color: 'rgba(147, 51, 234, 1)',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        }, onClick: () => setShowPaymentScreen(true) }, "You need a subscription to publish the production")) : hasSubscription === true ? (react.createElement("span", { style: {
                            color: 'rgba(147, 51, 234, 1)',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        }, onClick: handleCancelSubscription }, "Cancel Subscription")) : null,
                    react.createElement("button", { className: "publish-btn", onClick: handlePublishClick },
                        "Publish",
                        react.createElement("img", { src: PublishScreen_whitearrow, alt: "", style: { width: '14px', height: '15px', marginLeft: '8px' } }))))),
        publishSuccess && (react.createElement("div", { className: "success-toast", style: {
                position: 'fixed',
                top: '20px',
                right: '20px',
                backgroundColor: 'rgba(10, 8, 27, 1)',
                color: '#ffffff',
                padding: '16px 20px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                zIndex: 10000,
                maxWidth: '400px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                animation: 'slideInRight 0.3s ease-out'
            } },
            react.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
                react.createElement("div", { style: {
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        flexShrink: 0
                    } }),
                react.createElement("span", { style: { fontSize: '14px', lineHeight: '1.5' } }, typeof publishSuccess === 'string' ? publishSuccess : 'Accessibility settings published successfully!')))),
        react.createElement("div", { className: "step-navigation" },
            react.createElement("div", { className: "step completed" },
                react.createElement("span", { className: "step-number" }, "STEP 1"),
                react.createElement("span", { className: "step-name" }, "Customization")),
            react.createElement("div", { className: "step active" },
                react.createElement("span", { className: "step-number" }, "STEP 2"),
                react.createElement("span", { className: "step-name" }, "Publish"))),
        react.createElement("div", { className: "main-content" },
            react.createElement("div", { className: "preview-panel" },
                react.createElement("div", { className: "panel-header" },
                    react.createElement("h3", null, "Preview")),
                react.createElement("div", { className: "preview-window1" },
                    react.createElement("div", { className: "browser-window" },
                        react.createElement("div", { className: "browser-controls" },
                            react.createElement("div", { className: "traffic-lights" },
                                react.createElement("div", { className: "traffic-light red" }),
                                react.createElement("div", { className: "traffic-light yellow" }),
                                react.createElement("div", { className: "traffic-light green" }))),
                        react.createElement("div", { className: "browser-content" },
                            showModal && (react.createElement("div", { className: `accessibility-modal ${(customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerHorizontalPosition) === 'Left' ? 'position-left' :
                                    (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerHorizontalPosition) === 'Right' ? 'position-right' : 'position-center'}` },
                                react.createElement("div", { className: "modal-header" },
                                    react.createElement("button", { className: "close-btn", onClick: () => setShowModal(false) }, "\u00D7"),
                                    react.createElement("h2", null, "Accessibility Adjustments"),
                                    react.createElement("div", { className: "modal-buttons" },
                                        react.createElement("button", { className: "modal-btn" }, "Reset Settings"),
                                        react.createElement("button", { className: "modal-btn" }, "Hide Interface"))),
                                react.createElement("div", { className: "modal-content" },
                                    react.createElement("p", { className: "modal-intro" }, "Choose the right accessibility profile for you"),
                                    react.createElement("div", { className: "profile-list" },
                                        react.createElement("div", { className: "profile-item" },
                                            react.createElement("div", { className: "toggle-switch" },
                                                react.createElement("input", { type: "checkbox", id: "seizureSafe", checked: accessibilityProfiles.seizureSafe, onChange: () => handleToggle('seizureSafe'), disabled: true }),
                                                react.createElement("label", { htmlFor: "seizureSafe", className: "toggle-label" },
                                                    react.createElement("span", { className: "toggle-off" }, "OFF"),
                                                    react.createElement("span", { className: "toggle-on" }, "ON"))),
                                            react.createElement("div", { className: "profile-info" },
                                                react.createElement("h4", null, "Seizure Safe Profile"),
                                                react.createElement("p", null, "Clear flashes & reduces color"))),
                                        react.createElement("div", { className: "profile-item" },
                                            react.createElement("div", { className: "toggle-switch" },
                                                react.createElement("input", { type: "checkbox", id: "visionImpaired", checked: accessibilityProfiles.visionImpaired, onChange: () => handleToggle('visionImpaired'), disabled: true }),
                                                react.createElement("label", { htmlFor: "visionImpaired", className: "toggle-label" },
                                                    react.createElement("span", { className: "toggle-off" }, "OFF"),
                                                    react.createElement("span", { className: "toggle-on" }, "ON"))),
                                            react.createElement("div", { className: "profile-info" },
                                                react.createElement("h4", null, "Vision Impaired Profile"),
                                                react.createElement("p", null, "Enhances website's visuals"))),
                                        react.createElement("div", { className: "profile-item" },
                                            react.createElement("div", { className: "toggle-switch" },
                                                react.createElement("input", { type: "checkbox", id: "adhdFriendly", checked: accessibilityProfiles.adhdFriendly, onChange: () => handleToggle('adhdFriendly'), disabled: true }),
                                                react.createElement("label", { htmlFor: "adhdFriendly", className: "toggle-label" },
                                                    react.createElement("span", { className: "toggle-off" }, "OFF"),
                                                    react.createElement("span", { className: "toggle-on" }, "ON"))),
                                            react.createElement("div", { className: "profile-info" },
                                                react.createElement("h4", null, "ADHD Friendly Profile"),
                                                react.createElement("p", null, "ADHD Friendly Profile"))),
                                        react.createElement("div", { className: "profile-item" },
                                            react.createElement("div", { className: "toggle-switch" },
                                                react.createElement("input", { type: "checkbox", id: "cognitiveDisability", checked: accessibilityProfiles.cognitiveDisability, onChange: () => handleToggle('cognitiveDisability'), disabled: true }),
                                                react.createElement("label", { htmlFor: "cognitiveDisability", className: "toggle-label" },
                                                    react.createElement("span", { className: "toggle-off" }, "OFF"),
                                                    react.createElement("span", { className: "toggle-on" }, "ON"))),
                                            react.createElement("div", { className: "profile-info" },
                                                react.createElement("h4", null, "Cognitive Disability Profile"),
                                                react.createElement("p", null, "Assists with reading & focusing"))),
                                        react.createElement("div", { className: "profile-item" },
                                            react.createElement("div", { className: "toggle-switch" },
                                                react.createElement("input", { type: "checkbox", id: "keyboardNavigation", checked: accessibilityProfiles.keyboardNavigation, onChange: () => handleToggle('keyboardNavigation'), disabled: true }),
                                                react.createElement("label", { htmlFor: "keyboardNavigation", className: "toggle-label" },
                                                    react.createElement("span", { className: "toggle-off" }, "OFF"),
                                                    react.createElement("span", { className: "toggle-on" }, "ON"))),
                                            react.createElement("div", { className: "profile-info" },
                                                react.createElement("h4", null, "Keyboard Navigation (Motor)"),
                                                react.createElement("p", null, "Keyboard Navigation (Motor)"))),
                                        react.createElement("div", { className: "profile-item" },
                                            react.createElement("div", { className: "toggle-switch" },
                                                react.createElement("input", { type: "checkbox", id: "blindUsers", checked: accessibilityProfiles.blindUsers, onChange: () => handleToggle('blindUsers'), disabled: true }),
                                                react.createElement("label", { htmlFor: "blindUsers", className: "toggle-label" },
                                                    react.createElement("span", { className: "toggle-off" }, "OFF"),
                                                    react.createElement("span", { className: "toggle-on" }, "ON"))),
                                            react.createElement("div", { className: "profile-info" },
                                                react.createElement("h4", null, "Blind Users (Screen Reader)"),
                                                react.createElement("p", null, "Optimize website for screen-readers"))))))),
                            (customizationData === null || customizationData === void 0 ? void 0 : customizationData.hideTriggerButton) !== 'Yes' && (react.createElement("div", { className: "accessibility-widget", style: {
                                    left: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerHorizontalPosition) === 'Left' ?
                                        `calc(10px + ${parseInt((customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerHorizontalOffset) || '0px')}px)` :
                                        (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerHorizontalPosition) === 'Right' ? 'auto' : '50%',
                                    right: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerHorizontalPosition) === 'Right' ?
                                        `calc(10px + ${parseInt((customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerHorizontalOffset) || '0px')}px)` : 'auto',
                                    top: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerVerticalPosition) === 'Top' ?
                                        `calc(10px + ${parseInt((customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerVerticalOffset) || '0px')}px)` : 'auto',
                                    bottom: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerVerticalPosition) === 'Bottom' ?
                                        `calc(10px + ${parseInt((customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerVerticalOffset) || '0px')}px)` : 'auto',
                                    transform: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerHorizontalPosition) === 'Center' ?
                                        ((customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerVerticalPosition) === 'Middle' ? 'translateX(-50%)' : 'translateX(-50%)') :
                                        ((customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerVerticalPosition) === 'Middle' ? 'translateY(-50%)' : 'none')
                                } },
                                react.createElement("div", { className: `widget-trigger ${((_a = customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerButtonShape) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'circle'} ${((_b = customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerButtonSize) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || 'medium'}`, style: { backgroundColor: (customizationData === null || customizationData === void 0 ? void 0 : customizationData.triggerButtonColor) || '#007bff' }, onClick: () => setShowModal(!showModal) },
                                    react.createElement("img", { src: ((_c = iconOptions.find(icon => icon.id === (customizationData === null || customizationData === void 0 ? void 0 : customizationData.selectedIcon))) === null || _c === void 0 ? void 0 : _c.label) || PublishScreen_icon1, alt: "Accessibility Icon", className: "widget-icon" }))))))))),
        showPaymentScreen && (react.createElement("div", { style: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            } },
            react.createElement("div", { style: {
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    position: 'relative'
                } },
                react.createElement(components_PaymentScreen, { onBack: () => setShowPaymentScreen(false), customizationData: customizationData || {} }))))));
};
/* harmony default export */ const components_PublishScreen = (PublishScreen);

;// ./src/app.tsx
var app_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const App = () => {
    const [currentScreen, setCurrentScreen] = (0,react.useState)('welcome');
    const [customizationData, setCustomizationData] = (0,react.useState)(null);
    const [isLoadingExistingData, setIsLoadingExistingData] = (0,react.useState)(false);
    const { openAuthScreen, getPublishedSettings, attemptAutoRefresh, isAuthLoading, attemptSilentAuth, checkPublishedDataExists, getSessionToken, makeAuthenticatedRequest, user } = useAuth();
    const [isAppInitializing, setIsAppInitializing] = (0,react.useState)(true);
    const [isCheckingAuth, setIsCheckingAuth] = (0,react.useState)(true);
    const [isAuthenticated, setIsAuthenticated] = (0,react.useState)(false);
    const [hasInitialized, setHasInitialized] = (0,react.useState)(false);
    (0,react.useEffect)(() => {
        // Only run when user is authenticated
        if (!isAuthenticated || isAuthLoading)
            return;
        const detectAppInstallation = () => app_awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            try {
                const userData = localStorage.getItem('accessbit-userinfo');
                if (!userData)
                    return;
                const parsed = JSON.parse(userData);
                const { siteId, siteInfo } = parsed;
                // SECURITY FIX: Email removed from localStorage (PII)
                // Only siteId is required, email is retrieved from session token when needed
                if (!siteId)
                    return;
                // Check if installation already exists on server
                // Try to get the installation record directly from KV
                let installationExists = false;
                try {
                    const checkData = yield makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/accessibility/check-installation?siteId=${encodeURIComponent(siteId)}`, {
                        method: 'GET'
                    });
                    installationExists = (checkData === null || checkData === void 0 ? void 0 : checkData.exists) === true;
                }
                catch (checkError) {
                    // If endpoint doesn't exist or returns 404, assume first install
                    if (((_a = checkError === null || checkError === void 0 ? void 0 : checkError.message) === null || _a === void 0 ? void 0 : _a.includes('404')) || ((_b = checkError === null || checkError === void 0 ? void 0 : checkError.message) === null || _b === void 0 ? void 0 : _b.includes('not found'))) {
                        installationExists = false;
                    }
                    else {
                        // For other errors, assume first install
                        installationExists = false;
                    }
                }
                // Only send email on first install
                // If installation already exists, skip webhook
                if (!installationExists) {
                    // Construct staging URL from shortName if available
                    const shortName = (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.shortName) || null;
                    const stagingUrl = shortName ? `https://${shortName}.webflow.io` : null;
                    // SECURITY FIX: Get email from auth state (session token) instead of localStorage
                    // Email is PII and should not be stored in localStorage
                    const userEmail = (user === null || user === void 0 ? void 0 : user.email) || ''; // Get from auth state (decoded from session token)
                    const installationPayload = {
                        siteId: siteId,
                        userId: parsed.userId || siteId, // Use siteId as fallback if userId not available
                        userEmail: userEmail, // Get from auth state, not localStorage
                        siteName: (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteName) || 'Unknown Site',
                        installationData: {
                            timestamp: new Date().toISOString(),
                            source: 'webflow_app',
                            firstName: parsed.firstName || 'User',
                            email: userEmail, // Get from auth state, not localStorage
                            customDomain: parsed.customDomain || null,
                            stagingUrl: stagingUrl, // Include staging URL if available
                            exp: parsed.exp || null,
                            siteInfo: siteInfo || null,
                            siteId: (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteId) || siteId,
                            siteName: (siteInfo === null || siteInfo === void 0 ? void 0 : siteInfo.siteName) || 'Unknown Site',
                            shortName: shortName
                        }
                    };
                    // Send installation data to worker
                    try {
                        yield makeAuthenticatedRequest(`${WORKER_BASE_URL}/api/webflow/app-installed`, {
                            method: 'POST',
                            body: JSON.stringify(installationPayload)
                        });
                    }
                    catch (error) {
                        // Silent fail - installation data send failed
                    }
                }
                else {
                }
            }
            catch (error) {
            }
        });
        // Run installation detection after authentication is complete
        const timer = setTimeout(detectAppInstallation, 1000);
        return () => clearTimeout(timer);
    }, [isAuthenticated, isAuthLoading]);
    // Load existing customization data when user becomes authenticated
    (0,react.useEffect)(() => {
        if (isAuthenticated && !isAuthLoading) {
            loadExistingCustomizationData();
            // Ensure the hosted script is registered and applied on app launch
            (() => app_awaiter(void 0, void 0, void 0, function* () {
                var _a;
                try {
                    const stored = localStorage.getItem('accessbit-userinfo');
                    const siteId = stored ? (((_a = JSON.parse(stored)) === null || _a === void 0 ? void 0 : _a.siteId) || '') : '';
                    if (!siteId)
                        return;
                    const base = WORKER_BASE_URL.replace(/\/+$/, '');
                    try {
                        yield makeAuthenticatedRequest(`${base}/api/accessibility/register-script?siteId=${encodeURIComponent(siteId)}`, {
                            method: 'POST'
                        });
                    }
                    catch (error) {
                        // Silent fail; user can use Publish to repair
                    }
                    try {
                        yield makeAuthenticatedRequest(`${base}/api/accessibility/apply-script?siteId=${encodeURIComponent(siteId)}`, {
                            method: 'POST',
                            body: JSON.stringify({ targetType: 'site', scriptId: 'accessbit', location: 'header', version: '1.0.0' })
                        });
                    }
                    catch (error) {
                        // Silent fail; user can use Publish to repair
                    }
                }
                catch (e) {
                    // Silent fail; user can use Publish to repair
                }
            }))();
        }
    }, [isAuthenticated, isAuthLoading]);
    const loadExistingCustomizationData = () => app_awaiter(void 0, void 0, void 0, function* () {
        if (!isAuthenticated)
            return;
        setIsLoadingExistingData(true);
        try {
            // Add a small delay to ensure authentication is fully complete
            yield new Promise(resolve => setTimeout(resolve, 500));
            const existingSettings = yield getPublishedSettings();
            if (existingSettings && existingSettings.customization) {
                setCustomizationData(existingSettings.customization);
            }
            else {
            }
        }
        catch (error) {
            // Don't show error to user, just continue with empty data
        }
        finally {
            setIsLoadingExistingData(false);
        }
    });
    (0,react.useEffect)(() => {
        // Prevent multiple initializations
        if (hasInitialized) {
            return;
        }
        const initializeApp = () => app_awaiter(void 0, void 0, void 0, function* () {
            const startTime = performance.now();
            setHasInitialized(true);
            setIsAppInitializing(false);
            setIsCheckingAuth(true);
            try {
                // Try fresh background authentication (silent) with timeout
                const authPromise = attemptAutoRefresh();
                const timeoutPromise = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(false);
                    }, 5000); // 5 second timeout
                });
                const refreshSuccess = yield Promise.race([authPromise, timeoutPromise]);
                if (refreshSuccess) {
                    setIsAuthenticated(true);
                    const storedData = localStorage.getItem('accessbit-userinfo');
                    if (storedData) {
                        const parsedData = JSON.parse(storedData);
                    }
                    // Now check if published data exists for this user
                    setTimeout(() => app_awaiter(void 0, void 0, void 0, function* () {
                        try {
                            const hasPublishedData = yield checkPublishedDataExists();
                            if (hasPublishedData) {
                                const existingData = yield loadExistingCustomizationData();
                            }
                            else {
                            }
                        }
                        catch (error) {
                        }
                    }), 500); // Small delay to ensure auth state is updated
                    // Stay on welcome screen for authenticated users instead of auto-redirecting
                    setCurrentScreen('welcome');
                }
                else {
                    setIsAuthenticated(false);
                    // Show welcome screen with authorize button as fallback
                    setCurrentScreen('welcome');
                }
            }
            catch (error) {
                setIsAuthenticated(false);
                setCurrentScreen('welcome');
            }
            finally {
                setIsCheckingAuth(false);
            }
        });
        initializeApp();
    }, [hasInitialized]);
    const handleAuthorize = () => app_awaiter(void 0, void 0, void 0, function* () {
        try {
            yield openAuthScreen();
            // Listen for auth success to update state
            const handleAuthSuccess = () => {
                // Check localStorage to verify auth data was saved
                const userData = localStorage.getItem('accessbit-userinfo');
                if (userData) {
                    try {
                        const parsed = JSON.parse(userData);
                        if (parsed.siteId) {
                            setIsAuthenticated(true);
                            // Force React Query to refetch auth state
                            window.dispatchEvent(new Event('storage'));
                        }
                        else {
                        }
                    }
                    catch (e) {
                    }
                }
                else {
                }
            };
            // Set up listeners BEFORE auth completes (in case it's fast)
            window.addEventListener('accessbit-auth-success', handleAuthSuccess, false);
            // Also listen for storage events as fallback
            const handleStorageChange = (e) => {
                if (e.key === 'accessbit-userinfo' && e.newValue) {
                    handleAuthSuccess();
                }
            };
            window.addEventListener('storage', handleStorageChange, false);
            // Fallback: Poll localStorage every second for 2 minutes
            let pollCount = 0;
            const maxPolls = 120; // 2 minutes
            const pollInterval = setInterval(() => {
                pollCount++;
                const stored = localStorage.getItem('accessbit-userinfo');
                if (stored) {
                    try {
                        const parsed = JSON.parse(stored);
                        if (parsed.siteId) {
                            clearInterval(pollInterval);
                            handleAuthSuccess();
                        }
                    }
                    catch (e) {
                        // Ignore
                    }
                }
                if (pollCount >= maxPolls) {
                    clearInterval(pollInterval);
                }
            }, 1000);
            // Cleanup listeners after 5 minutes
            const cleanup = () => {
                window.removeEventListener('accessbit-auth-success', handleAuthSuccess);
                window.removeEventListener('storage', handleStorageChange);
                clearInterval(pollInterval);
            };
            setTimeout(cleanup, 5 * 60 * 1000);
        }
        catch (error) {
        }
    });
    // (kept) data loader above handles auth + loading state
    const handleNeedHelp = () => {
        // Add your help logic here
    };
    const handleWelcomeScreen = () => {
        setCurrentScreen('customization');
    };
    const handleBackToWelcome = () => {
        setCurrentScreen('welcome');
    };
    const handleBackToCustomization = () => {
        setCurrentScreen('customization');
    };
    const handleNextToPublish = (data) => {
        setCustomizationData(data);
        setCurrentScreen('publish');
    };
    return (react.createElement("div", null, currentScreen === 'welcome' ? (react.createElement(components_WelcomeScreen, { onAuthorize: handleAuthorize, onNeedHelp: handleNeedHelp, authenticated: isAuthenticated, handleWelcomeScreen: handleWelcomeScreen })) : currentScreen === 'customization' ? (react.createElement(components_CustomizationScreen, { onBack: handleBackToWelcome, onNext: handleNextToPublish, existingCustomizationData: customizationData, isLoadingExistingData: isLoadingExistingData })) : (react.createElement(components_PublishScreen, { onBack: handleBackToCustomization, customizationData: customizationData || {} }))));
};
/* harmony default export */ const app = (App);

;// ./src/index.tsx




// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});
const root = client.createRoot(document.getElementById("root"));
root.render(react.createElement(react.StrictMode, null,
    react.createElement(QueryClientProvider, { client: queryClient },
        react.createElement(app, null))));

/******/ })()
;
//# sourceMappingURL=bundle.js.map