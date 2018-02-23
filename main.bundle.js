webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__students_students_component__ = __webpack_require__("./src/app/students/students.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'students',
        component: __WEBPACK_IMPORTED_MODULE_3__students_students_component__["a" /* StudentsComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<ul>\n  <li><a routerLink=''>Home</a></li>\n  <li><a routerLink='students'>Students</a></li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__students_students_component__ = __webpack_require__("./src/app/students/students.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__students_students_component__["a" /* StudentsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Student Entry Form</h1>\n  <form #studentForm =\"ngForm\">\n      <div class=\"form-group\">\n        <input type='text' class='form-control' id=\"fname\" name='fname' placeholder=\"First Name...\" \n                required [(ngModel)]=\"fname\">\n      </div>\n      <div class=\"form-group\">\n        <input type='text' class='form-control' id=\"lname\" name='lname' placeholder=\"Last Name...\" \n                required [(ngModel)]=\"lname\">\n      </div>\n      <div class=\"form-group\">\n        <input type='date' class='form-control' id=\"dob\" name='dob' [(ngModel)]=\"dob\">\n      </div>\n      <div class=\"form-group\">\n        <input type='email' class='form-control' id=\"email\" name='email' placeholder=\"Email ID...\" \n                required [(ngModel)]=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <input type='phone' class='form-control' id=\"phone\" name='phone' minlength=\"7\" maxlength=\"10\" \n                placeholder=\"Phone Number...\" [(ngModel)]=\"phone\">\n      </div>\n      <div class=\"form-group\">\n        <select id=\"faculty\" name=\"faculty\" class=\"form-control\" required [(ngModel)]=\"faculty\"> \n          <option *ngFor=\"let f of fac\" [value]=\"f\">{{f}}</option>\n        </select>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\" (click)=\"add_data()\">Submit</button>\n  </form>\n</div>\n<br/>\n<div class=\"container\">\n  <h1>Students Database</h1>\n  <table>\n    <tr>\n    <th>First name</th>\n    <th>Last name</th>\n    <th>DOB</th>\n    <th>Email</th>\n    <th>Phone</th>\n    <th>Faculty</th>\n    </tr>\n    <tr *ngFor=\"let s of student; let i = index\">\n      <td>{{s.fname}}</td>\n      <td>{{s.lname}}</td>\n      <td>{{s.dob}}</td>\n      <td>{{s.email}}</td>\n      <td>{{s.phone}}</td>\n      <td>{{s.faculty}}</td>&nbsp;\n      <button class=\"btn btn-default\" data-toggle=\"collapse\" data-target=\"#demo\" (click)=\"updateItem(i)\">Edit</button> &nbsp;\n      <button (click)=\"removeItem(i)\"> Delete</button>\n    </tr>\n  </table>\n<br/>\n\n<div id=\"demo\" class=\"collapse\">\n  <form #studentForm =\"ngForm\">\n    <div class=\"form-group\">\n      <input type='text' class='form-control' id=\"fname\" name='fname' placeholder=\"First Name...\" \n              required [(ngModel)]=\"fname_1\">\n    </div>\n    <div class=\"form-group\">\n      <input type='text' class='form-control' id=\"lname\" name='lname' placeholder=\"Last Name...\" \n              required [(ngModel)]=\"lname_1\">\n    </div>\n    <div class=\"form-group\">\n      <input type='date' class='form-control' id=\"dob\" name='dob' [(ngModel)]=\"dob_1\">\n    </div>\n    <div class=\"form-group\">\n      <input type='email' class='form-control' id=\"email\" name='email' placeholder=\"Email ID...\" \n              required [(ngModel)]=\"email_1\">\n    </div>\n    <div class=\"form-group\">\n      <input type='phone' class='form-control' id=\"phone\" name='phone' minlength=\"7\" maxlength=\"10\" \n              placeholder=\"Phone Number...\" [(ngModel)]=\"phone_1\">\n    </div>\n    <div class=\"form-group\">\n      <select id=\"faculty\" name=\"faculty\" class=\"form-control\" required [(ngModel)]=\"faculty_1\"> \n        <option *ngFor=\"let f of fac\" [value]=\"f\">{{f}}</option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\" (click)=\"edit()\">Submit</button>\n  </form>\n</div>\n  <br/>\n  <br/>\n\n  \n  \n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -ms-grid;\n  display: grid; }\n\n.col {\n  padding: .4em 1.3em; }\n\ninput, select {\n  width: 50%; }\n\n.life-container {\n  background: #3FA0E1;\n  padding: 6px;\n  font-weight: 300;\n  cursor: pointer; }\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\ntable {\n  border-collapse: collapse;\n  width: 100%; }\n\nth {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-color: #165361;\n  color: white;\n  font-size: 20px;\n  font-weight: 200; }\n\nth, td {\n  text-align: center;\n  border-bottom: 1px solid #ddd; }\n\ntd {\n  padding: 8px;\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 17px; }\n\ntr:nth-child(even) {\n  background-color: #849c2a;\n  color: black; }\n\ntr:nth-child(odd) {\n  background-color: #707c45;\n  color: black; }\n\ntr:hover {\n  background-color: #5d7c83; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.student = [];
        this.fac = ['Computer', 'Electrical', 'Automobile', 'Mechanical', 'Civil'];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.add_data = function () {
        this.student.push({
            'fname': this.fname,
            'lname': this.lname,
            'dob': this.dob,
            'email': this.email,
            'phone': this.phone,
            'faculty': this.faculty,
        });
        this.fname = '';
        this.lname = '';
        this.dob = '';
        this.email = '';
        this.phone = NaN;
        this.faculty = '';
    };
    HomeComponent.prototype.removeItem = function (i) {
        this.student.splice(i, 1);
    };
    HomeComponent.prototype.updateItem = function (i) {
        this.fname_1 = this.student[i]['fname'];
        this.lname_1 = this.student[i]['lname'];
        this.dob_1 = this.student[i]['dob'];
        this.email_1 = this.student[i]['email'];
        this.phone_1 = this.student[i]['phone'];
        this.faculty_1 = this.student[i]['faculty'];
        this.id = i;
    };
    HomeComponent.prototype.edit = function () {
        this.student[this.id]['fname'] = this.fname_1;
        this.student[this.id]['lname'] = this.lname_1;
        this.student[this.id]['dob'] = this.dob_1;
        this.student[this.id]['email'] = this.email_1;
        this.student[this.id]['phone'] = this.phone_1;
        this.student[this.id]['faculty'] = this.faculty_1;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  students works!\n</p>\n"

/***/ }),

/***/ "./src/app/students/students.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentsComponent = /** @class */ (function () {
    function StudentsComponent() {
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-students',
            template: __webpack_require__("./src/app/students/students.component.html"),
            styles: [__webpack_require__("./src/app/students/students.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map