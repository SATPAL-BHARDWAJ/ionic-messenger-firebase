(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content light-gray-gradient>\n    <div flex flex-columns style=\"height: 100%;\">\n      <div flex flex-columns v-center style=\"height: 148px;\" h-center>\n        <ion-img src=\"../../../assets/imgs/fb.png\" style=\"width:100px\"></ion-img>  \n        <h3 text-navy no-margin>{{ api.admin ? 'Admin' : 'User' }}</h3>\n      </div>\n      <form [formGroup]='registerForm' flex v-center flex-columns>\n          <mat-form-field size-md color=\"accent\" appearance=\"outline\">\n            <mat-label>User Name</mat-label>\n            <input matInput placeholder=\"display name\" formControlName=\"name\">\n            \n            <mat-error *ngIf=\"registerForm.controls.name.hasError('required')\">\n            Name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field size-md color=\"accent\" appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input matInput placeholder=\"unique id\" formControlName=\"email\">\n            <mat-error *ngIf=\"registerForm.controls.email.hasError('email') && !registerForm.controls.email.hasError('required')\">\n            Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"registerForm.controls.email.hasError('required')\">\n            Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        \n          <mat-form-field size-md color=\"accent\" appearance=\"outline\">\n              <mat-label>Password</mat-label>\n              <input matInput placeholder=\"Your secret\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\">\n              <button type=\"button\" height-sm mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                  <mat-icon>{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n              </button>\n                <mat-error *ngIf=\"registerForm.controls.password.hasError('required')\">\n                Please Enter <strong>Password</strong>\n                </mat-error>\n                <mat-error *ngIf=\"registerForm.controls.password.hasError('minlength')\">\n                Minimum length should be <strong>6</strong>\n                </mat-error>\n          </mat-form-field>\n\n          <mat-form-field size-md color=\"accent\" appearance=\"outline\">\n              <mat-label>Confirm Password</mat-label>\n              <input matInput placeholder=\"Your secret\" [type]=\"c_hide ? 'password' : 'text'\" formControlName=\"confirm_password\">\n              <button type=\"button\" height-sm mat-icon-button matSuffix (click)=\"c_hide = !c_hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                  <mat-icon>{{c_hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n              </button>\n              <mat-error *ngIf=\"registerForm.controls.confirm_password.hasError('required')\">\n                    Please Confirm <strong>Password</strong>\n                </mat-error>\n                <mat-error *ngIf=\"registerForm.controls.confirm_password.hasError('mustMatch')\">\n                    Both Passwords should be <strong>Match</strong>\n                </mat-error>\n          </mat-form-field>\n          \n          <mat-list>\n            \n              <mat-list-item>\n                  <button (click)=\"register()\" mat-raised-button color=\"warn\" init-btn style=\"width: 200px\" [disabled]=\"!registerForm.valid\">\n                        <span *ngIf=\"!api.loader\">SignUp</span> \n                        <ion-spinner name=\"dots\" *ngIf=\"api.loader\"></ion-spinner>\n                </button>\n              </mat-list-item>\n              <mat-list-item>\n                  <p text-center size-sm m-auto>Already have an account?</p>\n              </mat-list-item>\n              \n              <mat-list-item>\n                  <a mat-raised-button init-btn style=\"width: 200px\" routerLink='/login'>LogIn</a>\n                  <mat-divider></mat-divider>\n              </mat-list-item>\n          </mat-list>\n      </form>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var src_app_amd_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/amd.module */ "./src/app/amd.module.ts");








const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_amd_module__WEBPACK_IMPORTED_MODULE_7__["AmdModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[height-sm] {\n  height: 2rem !important;\n}\n\n[size-sm] {\n  font-size: 0.8rem;\n}\n\n[size-md] {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvZTpcXGlvbmljIDVcXG1lc3Nlbmdlci9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksVUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2hlaWdodC1zbV17XHJcbiAgICBoZWlnaHQ6IDJyZW0gIWltcG9ydGFudDtcclxufVxyXG5bc2l6ZS1zbV0ge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuW3NpemUtbWRdIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn0iLCJbaGVpZ2h0LXNtXSB7XG4gIGhlaWdodDogMnJlbSAhaW1wb3J0YW50O1xufVxuXG5bc2l6ZS1zbV0ge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuW3NpemUtbWRdIHtcbiAgd2lkdGg6IDgwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/custom-validators */ "./src/app/services/custom-validators.ts");
/* harmony import */ var src_app_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let RegisterPage = class RegisterPage {
    constructor(formBuilder, api, plt) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.plt = plt;
        this.hide = true;
        this.c_hide = true;
        this.registerForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ])),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
        }, {
            validators: Object(src_app_services_custom_validators__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirm_password')
        });
    }
    ngOnInit() {
    }
    register() {
        this.api.loader = true;
        this.api.signUp(this.registerForm.value['name'], this.registerForm.value['email'], this.registerForm.value['password']);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
], RegisterPage);



/***/ }),

/***/ "./src/app/services/custom-validators.ts":
/*!***********************************************!*\
  !*** ./src/app/services/custom-validators.ts ***!
  \***********************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map