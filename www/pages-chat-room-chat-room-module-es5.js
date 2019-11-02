(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-room-chat-room-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chat-room/chat-room.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chat-room/chat-room.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar _bg-theme-color>\n      <ion-icon *ngIf=\"api.admin\" slot=\"start\" name=\"arrow-round-back\" padding style=\"padding-right: 0px\" (click)=\"goBack()\"></ion-icon>\n      <ion-avatar slot=\"start\" padding>\n          <img src=\"../../../assets/imgs/avatar/avatar9.jpg\">\n      </ion-avatar>\n      <ion-title no-padding>{{ user?.name }}</ion-title>\n      <ion-icon name=\"videocam\" slot=\"end\" padding></ion-icon>\n      <ion-icon name=\"call\" slot=\"end\" padding></ion-icon>\n      <ion-icon *ngIf=\"api.admin\" name=\"more\" slot=\"end\" padding></ion-icon>\n      <ion-icon *ngIf=\"!api.admin\" name=\"log-out\" (click)=\"logout()\" slot=\"end\" padding></ion-icon>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content bg-sky>\n  <div *ngFor=\"let mess of messages\">\n    <div flex flow-right *ngIf=\"mess.type==userType\">\n        <ion-card bg-light>\n            <ion-card-content style=\"padding-bottom: 0px;\">\n            {{ mess.msg }}  \n            </ion-card-content>\n            <p text-right no-margin light-time>{{ api.formatAMPM(mess.timestamp.toDate()) }}</p>\n        </ion-card>\n    </div>\n    <div flex *ngIf=\"mess.type!=userType\">\n        <ion-card bg-white>\n            <ion-card-content style=\"padding-bottom: 0px;\">\n            {{ mess.msg }}  \n            </ion-card-content>\n            <p text-right no-margin light-time>{{ api.formatAMPM(mess.timestamp.toDate()) }}</p>\n        </ion-card>\n    </div>\n  </div>\n  \n  <div *ngIf=\"loader\" flex v-center h-center style=\"height: 100%;\">\n      <ion-spinner name=\"crescent\" color=\"success\" style=\"width: 100px; height: 100px;\"></ion-spinner>\n  </div>\n</ion-content>\n\n\n<ion-footer>\n    <ion-toolbar>\n        <div slot=\"start\" padding>\n          😀\n        </div>\n        <ion-input [(ngModel)] = \"chat\"\n          placeholder=\"Type here...\"\n        ></ion-input>\n        <ion-icon (click)=\"sendChat()\" name=\"send\" slot=\"end\" padding></ion-icon>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/chat-room/chat-room.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/chat-room/chat-room.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatRoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPageModule", function() { return ChatRoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-room.page */ "./src/app/pages/chat-room/chat-room.page.ts");







var routes = [
    {
        path: '',
        component: _chat_room_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]
    }
];
var ChatRoomPageModule = /** @class */ (function () {
    function ChatRoomPageModule() {
    }
    ChatRoomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_room_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]]
        })
    ], ChatRoomPageModule);
    return ChatRoomPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chat-room/chat-room.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/chat-room/chat-room.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  width: 80%;\n}\n\n[flow-right] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-flow: row-reverse;\n}\n\n[bg-sky] {\n  --background: #f8fafa;\n}\n\n[bg-white] {\n  --background: #fff;\n  --color: #000;\n}\n\n[bg-light] {\n  --background: #cfebb1;\n  --color: #000;\n}\n\n[light-time] {\n  color: #6a6a6a;\n  font-size: 0.7rem;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC1yb29tL2U6XFxpb25pYyA1XFxtZXNzZW5nZXIvc3JjXFxhcHBcXHBhZ2VzXFxjaGF0LXJvb21cXGNoYXQtcm9vbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQtcm9vbS9jaGF0LXJvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBRENBO0VBQ0ksOEJBQUE7RUFBQSw4QkFBQTtVQUFBLHNCQUFBO0FDRUo7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQtcm9vbS9jaGF0LXJvb20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5bZmxvdy1yaWdodF0ge1xyXG4gICAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuXHJcbltiZy1za3ldIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZmFmYTtcclxufVxyXG5bYmctd2hpdGVde1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS1jb2xvcjogIzAwMDtcclxufVxyXG5bYmctbGlnaHRdIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2NmZWJiMTtcclxuICAgIC0tY29sb3I6ICMwMDA7XHJcbn1cclxuW2xpZ2h0LXRpbWVdIHtcclxuICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iLCJpb24tY2FyZCB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbltmbG93LXJpZ2h0XSB7XG4gIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XG59XG5cbltiZy1za3ldIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmYWZhO1xufVxuXG5bYmctd2hpdGVdIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNvbG9yOiAjMDAwO1xufVxuXG5bYmctbGlnaHRdIHtcbiAgLS1iYWNrZ3JvdW5kOiAjY2ZlYmIxO1xuICAtLWNvbG9yOiAjMDAwO1xufVxuXG5bbGlnaHQtdGltZV0ge1xuICBjb2xvcjogIzZhNmE2YTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/chat-room/chat-room.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chat-room/chat-room.page.ts ***!
  \***************************************************/
/*! exports provided: ChatRoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPage", function() { return ChatRoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/api.service */ "./src/app/api/api.service.ts");




var ChatRoomPage = /** @class */ (function () {
    function ChatRoomPage(api, route, router) {
        var _this = this;
        this.api = api;
        this.route = route;
        this.router = router;
        this.messages = [];
        this.chatKeys = [];
        this.loader = true;
        this.route.queryParamMap.subscribe(function (snap) {
            _this.user = snap['params'];
            _this.getChat();
        });
        this.userType = this.api.admin ? 'admin' : 'user';
    }
    ChatRoomPage.prototype.ngOnInit = function () {
    };
    ChatRoomPage.prototype.goBack = function () {
        this.router.navigate(['/home'], { skipLocationChange: false });
    };
    ChatRoomPage.prototype.logout = function () {
        console.log('lgout');
        this.api.signOut();
    };
    ChatRoomPage.prototype.sendChat = function () {
        this.chat ? console.log(this.chat) : '';
        if (this.chat) {
            this.api.sendMsg(this.user.id, this.chat, this.userType);
        }
        this.chat = '';
    };
    ChatRoomPage.prototype.getChat = function () {
        var _this = this;
        console.log('get chat', this.user.id);
        this.unsubscribe = this.api.db.collection("chatRoom").where("id", "==", this.user.id)
            .onSnapshot(function (querySnapshot) {
            _this.loader = false;
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                var data = doc.data();
                if (_this.chatKeys.indexOf(data.key) < 0) {
                    _this.messages.push(data);
                    _this.chatKeys.push(data.key);
                }
                console.log(doc.data());
            });
            _this.messages.sort(_this.sortDate);
        });
    };
    ChatRoomPage.prototype.sortDate = function (a, b) {
        var dateA = new Date(a.timestamp.toDate());
        var dateB = new Date(b.timestamp.toDate());
        return dateA > dateB ? 1 : -1;
    };
    ;
    ChatRoomPage.prototype.ionViewWillLeave = function () {
        this.api.admin ? this.unsubscribe() : '';
        console.log('unsubscribe successfully');
    };
    ChatRoomPage.ctorParameters = function () { return [
        { type: src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ChatRoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-room',
            template: __webpack_require__(/*! raw-loader!./chat-room.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chat-room/chat-room.page.html"),
            styles: [__webpack_require__(/*! ./chat-room.page.scss */ "./src/app/pages/chat-room/chat-room.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChatRoomPage);
    return ChatRoomPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chat-room-chat-room-module-es5.js.map