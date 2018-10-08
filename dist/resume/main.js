(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-bar></app-menu-bar>\n<app-welcome></app-welcome>\n<app-details></app-details>\n<app-journey></app-journey>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'resume';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _containers_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/menu-bar/menu-bar.component */ "./src/app/containers/menu-bar/menu-bar.component.ts");
/* harmony import */ var _containers_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/welcome/welcome.component */ "./src/app/containers/welcome/welcome.component.ts");
/* harmony import */ var _containers_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/footer/footer.component */ "./src/app/containers/footer/footer.component.ts");
/* harmony import */ var _containers_details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/details/details.component */ "./src/app/containers/details/details.component.ts");
/* harmony import */ var _containers_journey_journey_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/journey/journey.component */ "./src/app/containers/journey/journey.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _containers_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_3__["MenuBarComponent"],
                _containers_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
                _containers_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _containers_details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
                _containers_journey_journey_component__WEBPACK_IMPORTED_MODULE_7__["JourneyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/containers/details/details.component.html":
/*!***********************************************************!*\
  !*** ./src/app/containers/details/details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-container\" id=\"skills\">\n  <div class=\"body-row\">\n    <div class=\"body-col-1\"\n         draggable=\"true\"\n         (drag)=\"onDrag($event)\"\n         (dragstart)=\"dragStart($event)\"\n          (dragend)=\"onDragEnd($event)\">\n        <div class=\"body-col-content\">\n          <div class=\"btn-group\">\n            <button *ngFor=\"let key of keys\"\n                    class=\"btn button-primary\"\n                    (click)=\"select(key)\"\n                    [innerHTML]=\"key\"></button>\n          </div>\n        </div>\n    </div>\n    <div class=\"body-col-2\">\n      <div class=\"body-col-title\">\n        <span>{{ sl.title }}</span>\n        <span class=\"description\">{{ sl.description }}</span>\n      </div>\n      <div class=\"body-col-content\" [attr.data-before]=\"sl.rate\">\n        <div class=\"content\">\n          <div class=\"title\">\n            <span>SPECIFICATIONS</span>\n          </div>\n          <div class=\"details\">\n            <span *ngFor=\"let skill of sl.skills\">\n              {{ skill.name }}\n              <span class=\"rates\">\n                <i *ngFor=\"let rate of toArray(skill.rate)\" class=\"rate {{ rate }}\"></i>\n              </span>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"body-col-footer\">\n        <div class=\"content\">\n          <div class=\"title\">\n            <span>CAN DO</span>\n          </div>\n          <div class=\"details\">\n            <span *ngFor=\"let item of sl.keyNote\">{{ item }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/containers/details/details.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/containers/details/details.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body-container {\n  display: flex;\n  justify-content: center;\n  padding: 40px 80px;\n  background: #f2f2f2; }\n  .body-container .body-row {\n    display: flex;\n    width: 65%;\n    flex-wrap: wrap;\n    height: calc(100vh - 135px);\n    justify-content: flex-start;\n    overflow: hidden; }\n  .body-container .body-row > div:nth-child(2n + 1) {\n      flex: 0 0 auto;\n      display: flex;\n      height: 54px;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      transition: margin-left 0.3s cubic-bezier(0.35, 0.9, 0.78, 0.8); }\n  .body-container .body-row > div:nth-child(2n + 1) .body-col-content .btn-group {\n        display: flex;\n        flex-direction: row; }\n  .body-container .body-row > div:nth-child(2n + 1) .body-col-content .btn-group button {\n          margin: 0 4px;\n          border-radius: 4px;\n          font-size: 14px;\n          text-align: left;\n          text-transform: uppercase; }\n  .body-container .body-row > div:nth-child(2n) {\n      height: calc(100% - 54px);\n      width: calc(100% - 180px);\n      flex: 1 1 100%;\n      padding: 12px;\n      background-color: #f2c94c;\n      border-radius: 2px;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n  .body-container .body-row > div:nth-child(2n) .body-col-title {\n        text-transform: uppercase;\n        font-size: 28px;\n        font-weight: bold;\n        line-height: 0.85;\n        padding: 4px;\n        display: flex;\n        flex-direction: column;\n        position: relative;\n        width: auto; }\n  .body-container .body-row > div:nth-child(2n) .body-col-title span {\n          margin: 4px; }\n  .body-container .body-row > div:nth-child(2n) .body-col-title span.description {\n            font-size: 14px;\n            text-transform: capitalize;\n            line-height: 1.375; }\n  .body-container .body-row > div:nth-child(2n) .body-col-content {\n        margin: 2px;\n        padding: 2px;\n        display: flex;\n        flex-direction: row; }\n  .body-container .body-row > div:nth-child(2n) .body-col-content:before {\n          flex: 1 1 40%;\n          content: attr(data-before);\n          font-size: 150px;\n          font-weight: bold;\n          text-align: center;\n          display: table-cell;\n          vertical-align: middle; }\n  .body-container .body-row > div:nth-child(2n) .body-col-content div.content {\n          display: flex;\n          flex: 1 1 60%;\n          justify-content: center;\n          flex-direction: column; }\n  .body-container .body-row > div:nth-child(2n) .body-col-content div.content div.title span {\n            font-size: 14px;\n            font-weight: bold;\n            background: #eb5757;\n            padding: 2px 6px;\n            border-radius: 2px;\n            text-transform: uppercase; }\n  .body-container .body-row > div:nth-child(2n) .body-col-content div.content div.details {\n            display: flex;\n            flex-direction: column;\n            font-size: 14px;\n            margin: 2px;\n            width: 190px;\n            margin-top: 12px; }\n  .body-container .body-row > div:nth-child(2n) .body-col-content div.content div.details span {\n              display: flex;\n              justify-content: space-between;\n              text-transform: capitalize;\n              font-weight: bold;\n              margin-top: 2px;\n              margin-bottom: 2px; }\n  .body-container .body-row > div:nth-child(2n) .body-col-content div.content div.details span span.rates i.rate {\n                margin-left: 4px;\n                margin-right: 4px; }\n  .body-container .body-row > div:nth-child(2n) .body-col-content div.content div.details span span.rates i.rate:first-child {\n                  margin-left: 12px; }\n  .body-container .body-row > div:nth-child(2n) .body-col-content div.content div.details span span.rates i.rate.true::before {\n                  content: \"\";\n                  display: inline-block;\n                  width: 10px;\n                  height: 10px;\n                  border-radius: 50%;\n                  background-color: #2F80ED; }\n  .body-container .body-row > div:nth-child(2n) .body-col-content div.content div.details span span.rates i.rate.false::before {\n                  content: \"\";\n                  display: inline-block;\n                  width: 10px;\n                  height: 10px;\n                  border-radius: 50%;\n                  background-color: rgba(228, 171, 0, 0.87); }\n  .body-container .body-row > div:nth-child(2n) .body-col-footer {\n        margin: 2px;\n        padding: 2px;\n        display: flex;\n        flex-direction: row; }\n  .body-container .body-row > div:nth-child(2n) .body-col-footer div.content {\n          display: flex;\n          flex: 1 1 60%;\n          justify-content: center;\n          flex-direction: column; }\n  .body-container .body-row > div:nth-child(2n) .body-col-footer div.content div.title span {\n            font-size: 14px;\n            font-weight: bold;\n            background: #6fcf97;\n            padding: 2px 6px;\n            border-radius: 2px;\n            text-transform: uppercase; }\n  .body-container .body-row > div:nth-child(2n) .body-col-footer div.content div.details {\n            display: flex;\n            flex-direction: column;\n            font-size: 14px; }\n  .body-container .body-row > div:nth-child(2n) .body-col-footer div.content div.details span {\n              margin: 3px; }\n  .body-container .body-row > div:nth-child(2n) .body-col-footer div.content div.details span:first-child {\n                margin-top: 6px; }\n  .body-container .body-row > div:nth-child(2n) .body-col-footer div.content div.details span:before {\n                content: \". \"; }\n  @media screen and (max-width: 768px), (max-width: 823px) and (max-height: 411px) {\n  .body-container {\n    padding: 24px; }\n    .body-container .body-row {\n      width: 100%;\n      height: auto; }\n      .body-container .body-row > div:nth-child(2n) .body-col-title {\n        line-height: 1.125; }\n      .body-container .body-row > div:nth-child(2n) .body-col-content {\n        flex-direction: column; }\n        .body-container .body-row > div:nth-child(2n) .body-col-content:before {\n          content: attr(data-before);\n          font-size: 86px; } }\n"

/***/ }),

/***/ "./src/app/containers/details/details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/containers/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(renderer) {
        this.renderer = renderer;
        this.margin = 0;
        this.data = {
            angular: {
                title: "Angular",
                description: "I'm currently using this frameworks. Can apply MVC, Redux Model,...",
                rate: "A+",
                skills: [
                    { name: "typescript", rate: 4 },
                    { name: "ngrx", rate: 4 },
                    { name: "UX/ UI", rate: 4 },
                    { name: "rxjs", rate: 4 },
                    { name: "Karma", rate: 3 }
                ],
                keyNote: [
                    "Apply Redux, MVC, modeling",
                    "Build singleton and reusable module",
                    "Unit testing with Karma"
                ]
            },
            js: {
                title: "Javascript",
                description: "Current usage, use it mostly with Angular",
                rate: "B+",
                skills: [
                    { name: "OOP", rate: 4 },
                    { name: "Basics & Core", rate: 3.5 },
                    { name: "lodash", rate: 3 },
                    { name: "Jquery", rate: 3 }
                ],
                keyNote: [
                    "Create template with JS, HTML & CSS/ SCSS",
                    "Build singleton and packaged module",
                    "Debug, traver down to root cause of errors"
                ]
            },
            php: {
                title: "PHP",
                description: "First language learnt, used with Opencart",
                rate: "B",
                skills: [
                    { name: "OOP", rate: 3.5 },
                    { name: "Basics & Core", rate: 3 },
                    { name: "MVC", rate: 4 },
                    { name: "Opencart", rate: 4 }
                ],
                keyNote: [
                    "Building additional features in OpenCart.",
                    "Extend MVC model, if necessary",
                    "Create API using MVC model"
                ]
            },
            makeup: {
                title: "Makeup Language and Skills",
                description: "Create template, design UI/ UX responsively",
                rate: "A",
                skills: [
                    { name: "HTML", rate: 5 },
                    { name: "CSS/ SCSS", rate: 5 },
                    { name: "Bootstrap", rate: 4.5 },
                    { name: "Photoshop/ Figma", rate: 3.5 }
                ],
                keyNote: [
                    "Create custom template from scratch (responsively)",
                    "Design sketch, UI/ UX",
                    "Build UI/ UX Components based on requirements"
                ]
            }
        };
        this.keys = Object.keys(this.data);
        this.sl = this.data.angular;
    }
    DetailsComponent.prototype.ngOnInit = function () { };
    DetailsComponent.prototype.select = function (name) {
        this.sl = this.data[name];
    };
    DetailsComponent.prototype.onDrag = function (event) {
        this.margin = this.ceilDrag(event.pageX - this.pageX, event.target.offsetWidth, 80);
        this.renderer.setStyle(event.target, "margin-left", this.margin + "px");
    };
    DetailsComponent.prototype.dragStart = function (event) {
        event.dataTransfer.setDragImage(new Image(), 0, 0);
        this.pageX = event.pageX - this.margin;
    };
    DetailsComponent.prototype.onDragEnd = function (event) {
        this.margin = this.ceilDrag(event.pageX - this.pageX, event.target.offsetWidth, 80);
        this.renderer.setStyle(event.target, "margin-left", this.margin + "px");
    };
    DetailsComponent.prototype.ceilDrag = function (margin, ceilling, additional) {
        switch (margin < 0) {
            case true: {
                return Math.abs(margin) < ceilling ? margin : -ceilling + additional;
            }
            case false: {
                return Math.abs(margin) < ceilling ? margin : ceilling - additional;
            }
        }
    };
    DetailsComponent.prototype.toArray = function (rate) {
        var arr = [];
        for (var i = 0; i < 5; i++) {
            arr.push(i < rate ? "true" : "false");
        }
        return arr;
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-details",
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/containers/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/containers/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/containers/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/containers/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer-container\">\n    <div class=\"buttons\">\n       <span class=\"contact\">\n           <a href=\"mailto:lam.nguyen.mr@outlook.com\">Hire Me Now</a>\n       </span>\n    </div>\n    <div class=\"contacts\">\n       <span class=\"contact\"><b>Email</b>: lam.nguyen.mr@outlook.com</span>\n       <span class=\"contact\"><b>Phone</b>: +84 935 516 658</span>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/containers/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/containers/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  border-top: 1px solid #f2f2f2;\n  background-color: #f2f2f2;\n  text-align: center;\n  font-size: 14px;\n  padding: 12px; }\n  .footer-container .buttons .contact > button, .footer-container .buttons a {\n    display: inline-block;\n    text-decoration: none;\n    margin: 8px;\n    background-color: #2F80ED;\n    border: none;\n    padding: 4px 8px;\n    border-radius: 4px;\n    color: white;\n    font-weight: bold; }\n  .footer-container .buttons .contact > button:hover, .footer-container .buttons a:hover {\n      cursor: pointer; }\n  .footer-container .contacts > span.contact {\n    margin: 4px 4px;\n    display: inline-block; }\n  @media screen and (max-width: 768px) {\n  .footer-container {\n    text-align: center; } }\n"

/***/ }),

/***/ "./src/app/containers/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/containers/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/containers/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/containers/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/containers/journey/journey.component.html":
/*!***********************************************************!*\
  !*** ./src/app/containers/journey/journey.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"journey-container\" id=\"myStory\">\n  <div class=\"journey-row\">\n    <div class=\"journey-col\">\n      <div class=\"journey-col-title\">\n        {{ data.title.column1.name }}\n      </div>\n      <div class=\"journey-col-content\">\n        <div class=\"journey-tree-component font-weight-bold header\">\n          <i [innerHTML]=\"data.title.column1.description\"></i>\n        </div>\n      </div>\n    </div>\n    <div class=\"journey-col\">\n      <div class=\"journey-col-title\">\n        {{ data.title.column2.name }}\n      </div>\n      <div class=\"journey-col-content\">\n        <div class=\"journey-tree-component font-weight-bold header\">\n          <i [innerHTML]=\"data.title.column2.description\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let lineItem of data.tree\" class=\"journey-row\">\n    <ng-template [ngIf]=\"lineItem.parent == 'column1'\">\n      <div class=\"journey-col\">\n        <div class=\"journey-col-content\">\n          <div class=\"journey-tree-component\" [innerHTML]=\"lineItem.text\">\n          </div>\n        </div>\n      </div>\n      <div class=\"journey-col\">\n        <div class=\"journey-col-content\">\n          <div class=\"journey-tree-component font-italic\" [innerHTML]=\"lineItem.year\">\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"lineItem.parent == 'column2'\">\n      <div class=\"journey-col\">\n        <div class=\"journey-col-content\">\n          <div class=\"journey-tree-component font-italic\" [innerHTML]=\"lineItem.year\">\n          </div>\n        </div>\n      </div>\n      <div class=\"journey-col\">\n        <div class=\"journey-col-content\">\n          <div class=\"journey-tree-component\" [innerHTML]=\"lineItem.text\">\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/containers/journey/journey.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/containers/journey/journey.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".journey-container {\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n  .journey-container .journey-row {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap; }\n  .journey-container .journey-row .journey-col-time {\n      width: 40px; }\n  .journey-container .journey-row .journey-col {\n      flex: 1 1 50%; }\n  .journey-container .journey-row .journey-col:nth-child(2n + 1) {\n        padding: 8px;\n        border-right: 2px dashed #2f80ed;\n        text-align: right; }\n  .journey-container .journey-row .journey-col:nth-child(2n + 1) .journey-col-title {\n          display: inline-block;\n          padding: 4px 8px;\n          background-color: #f2f2f2;\n          border-radius: 4px;\n          color: #2f80ed;\n          font-size: 14px;\n          font-weight: bold; }\n  .journey-container .journey-row .journey-col:nth-child(2n) {\n        padding: 8px;\n        border-left: 2px dashed #2f80ed;\n        text-align: left; }\n  .journey-container .journey-row .journey-col:nth-child(2n) .journey-col-title {\n          display: inline-block;\n          padding: 4px;\n          background-color: #f2f2f2;\n          border-radius: 4px;\n          color: #2f80ed;\n          font-size: 14px;\n          font-weight: bold; }\n  .header {\n  font-size: 18px;\n  margin: 12px 0;\n  color: #2F80ED; }\n  @media screen and (max-width: 768px) {\n  .journey-container {\n    padding: 24px 12px; }\n    .journey-container .journey-row .journey-col {\n      flex: 1 1 50%; }\n      .journey-container .journey-row .journey-col:nth-child(2n + 1) .journey-col-title {\n        font-size: 12px; }\n      .journey-container .journey-row .journey-col:nth-child(2n + 1) .journey-col-content {\n        font-size: 12px; }\n      .journey-container .journey-row .journey-col:nth-child(2n) .journey-col-title {\n        font-size: 12px; }\n      .journey-container .journey-row .journey-col:nth-child(2n) .journey-col-content {\n        font-size: 12px; } }\n"

/***/ }),

/***/ "./src/app/containers/journey/journey.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/containers/journey/journey.component.ts ***!
  \*********************************************************/
/*! exports provided: JourneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyComponent", function() { return JourneyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JourneyComponent = /** @class */ (function () {
    function JourneyComponent() {
        this.data = {
            title: {
                column1: {
                    name: "Employment",
                    description: "Economics Bachelor, Work in Sales & Management"
                },
                column2: {
                    name: "Another Story",
                    description: "Coder, using Angular, Js, PHP"
                }
            },
            tree: [
                {
                    year: "2012",
                    text: "Study Economics at Foreign Trade University",
                    parent: "column1"
                },
                {
                    year: "2014",
                    text: "Start learning how to code, with HTML/ CSS/ Javascript",
                    parent: "column2"
                },
                { year: "2015", text: "Learn PHP/ Opencart", parent: "column2" },
                {
                    year: "Jan 2016 - Coding & learning part-time",
                    text: "Graduated, Bachelor of Economics",
                    parent: "column1"
                },
                {
                    year: "August, 2016 - Coding & learning part-time",
                    text: "Join Sales Management Associates Program of Prudential",
                    parent: "column1"
                },
                {
                    year: "April, 2017 - Coding & learning part-time",
                    text: "Work for Prudential as Bancassurance Sales Manager ",
                    parent: "column1"
                },
                { year: "Dec, 2017", text: "Left Prudential", parent: "column1" },
                { year: "Jan, 2018", text: "Start using Angular", parent: "column2" },
                {
                    year: "February, 2018",
                    text: "Start create a tool to draw template with Angular 6",
                    parent: "column2"
                }
            ]
        };
    }
    JourneyComponent.prototype.ngOnInit = function () { };
    JourneyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-journey",
            template: __webpack_require__(/*! ./journey.component.html */ "./src/app/containers/journey/journey.component.html"),
            styles: [__webpack_require__(/*! ./journey.component.scss */ "./src/app/containers/journey/journey.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JourneyComponent);
    return JourneyComponent;
}());



/***/ }),

/***/ "./src/app/containers/menu-bar/menu-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/containers/menu-bar/menu-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container navbar navbar-light bg-light\">\n    <ul class=\"navbar-nav\">\n        <li *ngFor=\"let item of menuItems\"\n            class=\"navbar-item menu-item\"\n            [class.hidden-mobile]=\"item.hideMobile\">\n            <a *ngIf=\"item.tag; else action\"\n               [href]=\"item.tag\"\n               [innerHTML]=\"item.name\"></a>\n            <ng-template #action>\n                <a *ngIf=\"item.action\"\n                   [href]=\"item.data\"\n                   (click)=\"onClick(item.action)\"\n                   [innerHTML]=\"item.name\" download></a>\n            </ng-template>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/containers/menu-bar/menu-bar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/containers/menu-bar/menu-bar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center; }\n  .menu-container .navbar-nav {\n    flex-direction: row;\n    padding: 4px; }\n  .menu-container .navbar-nav > li {\n      padding: 2px 4px;\n      margin: 2px;\n      color: #333333;\n      font-weight: 700; }\n  .menu-container .navbar-nav > li:hover {\n        cursor: pointer; }\n  .menu-container .navbar-nav > li a {\n        text-decoration: none; }\n  @media screen and (max-width: 768px) {\n  .hidden-mobile {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/containers/menu-bar/menu-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/containers/menu-bar/menu-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuBarComponent = /** @class */ (function () {
    function MenuBarComponent() {
        this.menuItems = [
            { name: "About", tag: "#about", active: true, hideMobile: false },
            { name: "Experience", tag: "#skills", active: false, hideMobile: false },
            { name: "Journey", tag: "#myStory", active: false, hideMobile: false },
            {
                name: "Download CV",
                data: "/assets/files/cv-lam-nguyen.pdf",
                action: "download",
                active: false,
                hideMobile: true
            }
        ];
    }
    MenuBarComponent.prototype.ngOnInit = function () { };
    MenuBarComponent.prototype.onClick = function (key) {
        switch (key) {
            case "download": {
                console.log("download triggered");
                break;
            }
        }
    };
    MenuBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-menu-bar",
            template: __webpack_require__(/*! ./menu-bar.component.html */ "./src/app/containers/menu-bar/menu-bar.component.html"),
            styles: [__webpack_require__(/*! ./menu-bar.component.scss */ "./src/app/containers/menu-bar/menu-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuBarComponent);
    return MenuBarComponent;
}());



/***/ }),

/***/ "./src/app/containers/welcome/welcome.component.html":
/*!***********************************************************!*\
  !*** ./src/app/containers/welcome/welcome.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-container\" id=\"about\">\n  <div class=\"body-row\">\n     <div class=\"body-col-1\">\n       <div class=\"body-col-title\">\n         <div>\n           <div class=\"btn-group\">\n             <a class=\"btn button-primary\" [href]=\"cv.link\" download>Download CV</a>\n           </div>\n           <div class=\"btn-group\">\n             <a [href]=\"data.linkedin.value\"\n                class=\"btn button-support\" [innerHTML]=\"data.linkedin.name\"\n                target=\"_blank\"></a>\n           </div>\n         </div>\n       </div>\n       <div class=\"body-col-content\">\n         <h1 class=\"heading-title\" [innerHTML]=\"data.title\"></h1>\n       </div>\n     </div>\n    <div class=\"body-col-2\">\n      <div class=\"body-col-title\">\n        <span [innerHTML]=\"data.summary.UX\"></span>\n        <span class=\"rotate180\" [innerHTML]=\"data.summary.UI\"></span>\n      </div>\n      <div class=\"body-col-content\">\n        <span *ngFor=\"let item of data.summary.skills\" [innerHTML]=\"item\"></span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/containers/welcome/welcome.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/containers/welcome/welcome.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body-container {\n  display: flex;\n  justify-content: center;\n  padding: 80px; }\n  .body-container .body-row {\n    flex: 1 1 100%;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    height: calc(100vh - 216px); }\n  .body-container .body-row > div:nth-child(2n + 1) {\n      flex: 0 0 290px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      flex-wrap: wrap; }\n  .body-container .body-row > div:nth-child(2n + 1) .body-col-title .btn-group {\n        width: 100%;\n        margin: 0 8px 8px 0; }\n  .body-container .body-row > div:nth-child(2n + 1) .body-col-content h1.heading-title {\n        font-size: 68px;\n        font-weight: bold; }\n  .body-container .body-row > div:nth-child(2n) {\n      width: calc(100% - 290px);\n      flex: 0 0 auto;\n      padding: 12px;\n      background-color: #f2c94c;\n      border-radius: 2px;\n      position: relative;\n      flex-direction: column; }\n  .body-container .body-row > div:nth-child(2n) .body-col-title {\n        text-transform: uppercase;\n        font-size: 80px;\n        font-weight: bold;\n        line-height: 0.85;\n        padding: 4px;\n        display: flex;\n        flex-direction: column;\n        position: relative;\n        width: 130px;\n        border-right: 1px solid #000000; }\n  .body-container .body-row > div:nth-child(2n) .body-col-title span {\n          margin: 4px; }\n  .body-container .body-row > div:nth-child(2n) .body-col-title span.rotate180 {\n            -webkit-transform: rotate(180deg);\n                    transform: rotate(180deg); }\n  .body-container .body-row > div:nth-child(2n) .body-col-content {\n        position: absolute;\n        bottom: 24px;\n        right: 24px;\n        display: flex;\n        flex-direction: column; }\n  .body-container .body-row > div:nth-child(2n) .body-col-content span {\n          text-align: right;\n          font-weight: 600; }\n  @media screen and (max-width: 768px), (max-width: 823px) and (max-height: 411px) {\n  .body-container {\n    padding: 24px; }\n    .body-container .body-row {\n      height: calc(100vh - 104px);\n      min-height: 480px;\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n      .body-container .body-row > div:nth-child(2n + 1) {\n        width: 100%;\n        flex: 0 0 auto;\n        justify-content: flex-start; }\n        .body-container .body-row > div:nth-child(2n + 1) .body-col-content h1.heading-title {\n          font-size: 36px;\n          font-weight: bold; }\n      .body-container .body-row > div:nth-child(2n) {\n        width: 100%;\n        flex: 4 4 auto;\n        padding: 0; }\n        .body-container .body-row > div:nth-child(2n) .body-col-title {\n          text-transform: uppercase;\n          font-size: 80px;\n          font-weight: bold;\n          line-height: 0.85;\n          padding: 4px;\n          display: flex;\n          flex-direction: column;\n          position: relative;\n          width: 130px;\n          border-right: 1px solid #000000; }\n          .body-container .body-row > div:nth-child(2n) .body-col-title span {\n            margin: 4px; }\n            .body-container .body-row > div:nth-child(2n) .body-col-title span.rotate180 {\n              -webkit-transform: rotate(180deg);\n                      transform: rotate(180deg); } }\n"

/***/ }),

/***/ "./src/app/containers/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/containers/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.data = {
            title: "Lam Nguyen",
            linkedin: {
                name: "LinkedIn",
                value: "https://www.linkedin.com/in/lam-nguyen-account/"
            },
            summary: {
                UI: "UI",
                UX: "UX",
                skills: ["Angular", "Javascript", "PHP", "OpenCart"]
            }
        };
        this.cv = {
            link: '/assets/files/cv-lam-nguyen.pdf'
        };
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-welcome",
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/containers/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/containers/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map