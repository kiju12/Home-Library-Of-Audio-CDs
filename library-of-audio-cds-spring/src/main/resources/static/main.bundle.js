webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_list_view_list_view_component__ = __webpack_require__("../../../../../src/app/component/list-view/list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_add_album_add_album_component__ = __webpack_require__("../../../../../src/app/component/add-album/add-album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_album_view_album_view_component__ = __webpack_require__("../../../../../src/app/component/album-view/album-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'heroes', component: HeroesComponent }
    { path: '', redirectTo: '/library', pathMatch: 'full' },
    { path: 'library', component: __WEBPACK_IMPORTED_MODULE_2__component_list_view_list_view_component__["a" /* ListViewComponent */] },
    { path: 'addAlbum', component: __WEBPACK_IMPORTED_MODULE_3__component_add_album_add_album_component__["a" /* AddAlbumComponent */] },
    { path: 'library/album/:id', component: __WEBPACK_IMPORTED_MODULE_4__component_album_view_album_view_component__["a" /* AlbumViewComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".foot {\r\n    margin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"msg\">\n  <h1 class=\"text-center display-4\">{{msg.main.title}}</h1>\n\n  <ul class=\"nav justify-content-center\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/library\">{{msg.main.toLibrary}}</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/addAlbum\">{{msg.main.toAlbumForm}}</a>\n    </li>\n  </ul>\n\n  <router-outlet></router-outlet>\n\n  <div class=\"container border bg-light foot\">\n    <p class=\"text-center text-muted\">{{msg.main.footer}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_album_service__ = __webpack_require__("../../../../../src/app/service/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_artist_service__ = __webpack_require__("../../../../../src/app/service/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_genre_service__ = __webpack_require__("../../../../../src/app/service/genre.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_track_service__ = __webpack_require__("../../../../../src/app/service/track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_messages_service__ = __webpack_require__("../../../../../src/app/service/messages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(albumService, artistService, genreService, trackService, messages) {
        var _this = this;
        this.albumService = albumService;
        this.artistService = artistService;
        this.genreService = genreService;
        this.trackService = trackService;
        this.messages = messages;
        this.msg = '';
        this.albumList = [];
        messages.getMessages().subscribe(function (data) { return _this.msg = data; });
    }
    AppComponent.prototype.readAlbums = function () {
        // let bialas: Artist = new Artist('Bialas');
        // this.artistService.add(bialas).subscribe((aData: any) => {
        //   bialas = aData as Artist;
        //   console.log('id artysty: ' + bialas.id);
        //   let genre: Genre = new Genre('Disco Polo');
        //   this.genreService.add(genre).subscribe((gData: any) => {
        //     genre = gData as Genre;
        //     console.log('id generacji: ' + genre.id);
        //     let album: Album = new Album(bialas, 'Polon', 20, 83, genre);
        //     this.albumService.add(album).subscribe((alData: any) => {
        //       album = alData as Album;
        //       console.log('id albumu: ' + album.id);
        //       let track: Track = new Track(album, 'Osiedle Botox', 'Lanek', 3);
        //       this.trackService.add(track, album.id).subscribe((tData: any) => {
        //         track = tData;
        //         console.log('id track: ' + track.id);
        //         this.albumService.delete(album.id);
        //       });
        //     });
        //   });
        // });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_2__service_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_3__service_genre_service__["a" /* GenreService */],
            __WEBPACK_IMPORTED_MODULE_4__service_track_service__["a" /* TrackService */],
            __WEBPACK_IMPORTED_MODULE_5__service_messages_service__["a" /* MessagesService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_album_service__ = __webpack_require__("../../../../../src/app/service/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_artist_service__ = __webpack_require__("../../../../../src/app/service/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_genre_service__ = __webpack_require__("../../../../../src/app/service/genre.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_track_service__ = __webpack_require__("../../../../../src/app/service/track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_messages_service__ = __webpack_require__("../../../../../src/app/service/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_list_view_list_view_component__ = __webpack_require__("../../../../../src/app/component/list-view/list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_add_album_add_album_component__ = __webpack_require__("../../../../../src/app/component/add-album/add-album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_album_view_album_view_component__ = __webpack_require__("../../../../../src/app/component/album-view/album-view.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_list_view_list_view_component__["a" /* ListViewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_add_album_add_album_component__["a" /* AddAlbumComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_album_view_album_view_component__["a" /* AlbumViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__service_album_service__["a" /* AlbumService */],
                __WEBPACK_IMPORTED_MODULE_6__service_artist_service__["a" /* ArtistService */],
                __WEBPACK_IMPORTED_MODULE_7__service_genre_service__["a" /* GenreService */],
                __WEBPACK_IMPORTED_MODULE_8__service_track_service__["a" /* TrackService */],
                __WEBPACK_IMPORTED_MODULE_9__service_messages_service__["a" /* MessagesService */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/add-album/add-album.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".track-name {\r\n    color: black;\r\n    text-align: left;\r\n    letter-spacing: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n.main-form {\r\n    margin-left: 15%;\r\n}\r\n\r\n.album-button {\r\n    margin-top: 30px;\r\n}\r\n\r\n.header {\r\n    letter-spacing: 10px;\r\n}\r\n\r\n.info-footer {\r\n    color: white;\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 8pt;\r\n    margin : 10pt;\r\n}\r\n\r\n.star {\r\n    color: #66ccff;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n    font-style: italic;\r\n    font-size: 8pt;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/add-album/add-album.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"msg\"  class=\"container\">\n    <div *ngIf=\"albumAdded\" class=\"alert alert-primary\">\n        {{msg.addAlbum.addAlert}}\n      </div>\n  <div class=\"card bg-dark\">\n    <div class=\"card-header\">\n      <h2 class=\"display-4 text-center text-white header\">{{msg.addAlbum.panel.header}}</h2>\n    </div>\n    <div class=\"card-body row\">\n      <form [formGroup]=\"addAlbumForm\" id=\"addAlbumForm\" class=\"col-md-3 main-form\" (ngSubmit)=\"onAlbumSubmit()\" novalidate>\n        <div class=\"text-white\">\n          <label class=\"center-block\">\n            <span class=\"star\">*</span>{{msg.addAlbum.panel.form.artist}}\n            <input class=\"form-control\" formControlName=\"name\" maxlength=\"16\">\n            <span class=\"info-footer\">{{msg.addAlbum.panel.form.artistInfo}}</span>\n            <p *ngIf=\"artistWhitespaceError\" class=\"error\">{{msg.addAlbum.panel.form.artistError}}</p>\n          </label>\n\n          <label class=\"center-block\">{{msg.addAlbum.panel.form.genre}}\n            <input class=\"form-control\" formControlName=\"genre\" maxlength=\"16\">\n          </label>\n\n          <label class=\"center-block\">\n            <span class=\"star\">*</span>{{msg.addAlbum.panel.form.albumName}}:\n            <input class=\"form-control\" formControlName=\"albumName\" maxlength=\"32\">\n            <span class=\"info-footer\">{{msg.addAlbum.panel.form.albumInfo}}</span>\n            <p *ngIf=\"albumWhitespaceError\" class=\"error\">{{msg.addAlbum.panel.form.albumError}}</p>\n          </label>\n\n          <hr>\n\n          <form [formGroup]=\"addTrackForm\" id=\"addTrackForm\" (ngSubmit)=\"onTrackSubmit(addTrackForm.value)\" novalidate>\n            <label class=\"center-block\">\n              <span class=\"star\">*</span>{{msg.addAlbum.panel.form.trackForm.name}}:\n              <input class=\"form-control\" formControlName=\"title\" maxlength=\"16\">\n            </label>\n\n            <label class=\"center-block\">{{msg.addAlbum.panel.form.trackForm.producer}}\n              <input class=\"form-control\" formControlName=\"producerName\" maxlength=\"16\">\n            </label>\n\n\n            <label class=\"center-block\" for=\"time\">\n              <span class=\"star\">*</span>{{msg.addAlbum.panel.form.trackForm.length}}\n              <div class=\"row\" id=\"time\">\n                <label class=\"col-md-5\">{{msg.addAlbum.panel.form.trackForm.min}}\n                  <input class=\"form-control\" formControlName=\"lengthMin\">\n                </label>\n                <label class=\"col-md-5\">{{msg.addAlbum.panel.form.trackForm.sec}}\n                  <input class=\"form-control\" formControlName=\"lengthSec\">\n                </label>\n              </div>\n            </label>\n\n\n            <button type=\"submit\" [disabled]=\"addTrackForm.status == 'INVALID'\" class=\"btn btn-secondary center-block col-md-10\">{{msg.addAlbum.panel.form.trackForm.addTrack}}</button>\n          </form>\n        </div>\n\n\n      </form>\n\n\n\n\n      <div class=\"list-group col-md-7\">\n        <a *ngFor=\"let track of currentTrackList; let i = index\" class=\"track-name list-group-item list-group-item-action list-group-item-primary\"\n          (click)=\"removeTrack(i)\">\n          {{i+1}}. {{track.name}} (prod. {{track.producerName}}) - {{track.lengthMin}} min. {{track.lengthSec}} sec.\n        </a>\n      </div>\n\n    </div>\n\n    <button type=\"submit\" form=\"addAlbumForm\" [disabled]=\"addAlbumForm.status ==='INVALID' || aristWhitespaceError || albumWhitespaceError || currentTrackList.length == 0\"\n      class=\"btn btn-primary btn-lg album-button mx-auto\">{{msg.addAlbum.panel.form.addAlbum}}</button>\n    <span class=\"info-footer\">\n      <span class=\"star\">*</span>{{msg.required}}</span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/add-album/add-album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAlbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_artist__ = __webpack_require__("../../../../../src/app/domain/artist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_genre__ = __webpack_require__("../../../../../src/app/domain/genre.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_track__ = __webpack_require__("../../../../../src/app/domain/track.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_album__ = __webpack_require__("../../../../../src/app/domain/album.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_album_service__ = __webpack_require__("../../../../../src/app/service/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_artist_service__ = __webpack_require__("../../../../../src/app/service/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_genre_service__ = __webpack_require__("../../../../../src/app/service/genre.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_track_service__ = __webpack_require__("../../../../../src/app/service/track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_messages_service__ = __webpack_require__("../../../../../src/app/service/messages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddAlbumComponent = /** @class */ (function () {
    function AddAlbumComponent(formBuilder, albumService, artistService, genreService, trackService, messages) {
        this.formBuilder = formBuilder;
        this.albumService = albumService;
        this.artistService = artistService;
        this.genreService = genreService;
        this.trackService = trackService;
        this.messages = messages;
        this.msg = '';
        this.allArtists = [];
        this.allGenres = [];
        this.albumWhitespaceError = false;
        this.artistWhitespaceError = false;
        this.currentTrackList = [];
    }
    AddAlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForms();
        this.initLists();
        this.onChangesInForm();
        this.messages.getMessages().subscribe(function (data) {
            _this.msg = data;
        });
        this.albumAdded = false;
    };
    AddAlbumComponent.prototype.onAlbumSubmit = function () {
        var _this = this;
        var artistName = this.addAlbumForm.value.name.trim();
        var genreName = this.addAlbumForm.value.genre.trim();
        var albumName = this.addAlbumForm.value.albumName.trim();
        var tracksOnAlbum = this.currentTrackList.length;
        var albumMins = 0;
        var albumSecs = 0;
        for (var i = 0; i < this.currentTrackList.length; i++) {
            albumMins += this.currentTrackList[i].lengthMin;
            albumSecs += this.currentTrackList[i].lengthSec;
        }
        console.log(albumMins);
        console.log(albumSecs);
        if (genreName == null || genreName === '') {
            genreName = 'Nieznany';
        }
        var artist = new __WEBPACK_IMPORTED_MODULE_2__domain_artist__["a" /* Artist */](artistName);
        var lookedFor = this.artistExist(artistName);
        if (lookedFor != null) {
            artist = lookedFor;
        }
        this.artistService.add(artist).subscribe(function (artistRes) {
            artist = artistRes;
            console.log('id artysty: ' + artist.id);
            var genre = new __WEBPACK_IMPORTED_MODULE_3__domain_genre__["a" /* Genre */](genreName);
            var genreLookedFor = _this.genreExist(genreName);
            if (genreLookedFor != null) {
                genre = genreLookedFor;
            }
            _this.genreService.add(genre).subscribe(function (genreRes) {
                genre = genreRes;
                _this.allGenres.push(genre);
                console.log('id generacji: ' + genre.id);
                var album = new __WEBPACK_IMPORTED_MODULE_5__domain_album__["a" /* Album */](artist, albumName, tracksOnAlbum, albumMins, albumSecs, genre);
                _this.albumService.add(album).subscribe(function (albumRes) {
                    album = albumRes;
                    console.log('id albumu: ' + album.id);
                    for (var i = 0; i < _this.currentTrackList.length; i++) {
                        _this.currentTrackList[i].album = album;
                    }
                    _this.trackService.addAll(_this.currentTrackList, album.id).subscribe(function (tracksRes) {
                        _this.currentTrackList = tracksRes;
                        for (var i = 0; i < _this.currentTrackList.length; i++) {
                            console.log(_this.currentTrackList[i].id);
                        }
                        _this.allArtists.push(artist);
                        _this.addAlbumForm.reset();
                        _this.currentTrackList = [];
                        _this.albumAdded = true;
                    });
                });
            });
        });
    };
    AddAlbumComponent.prototype.onTrackSubmit = function (value) {
        console.log('Dodaj track');
        var min = +value.lengthMin;
        var sec = +value.lengthSec;
        var producerName = value.producerName;
        var title = value.title;
        if (producerName != null) {
            value.producerName.trim();
        }
        if (title.trim() === '') {
            title = 'Bez tytułu';
        }
        if (producerName == null || producerName === '') {
            producerName = 'Nieznany';
        }
        while (sec >= 60) {
            sec -= 60;
            min++;
        }
        var t = new __WEBPACK_IMPORTED_MODULE_4__domain_track__["a" /* Track */](null, title, producerName, min, sec);
        this.currentTrackList.push(t);
        this.addTrackForm.reset();
    };
    AddAlbumComponent.prototype.onChangesInForm = function () {
        var _this = this;
        this.addTrackForm.get('lengthMin').valueChanges.subscribe(function (value) {
            if (isNaN(+value) && value != null) {
                _this.addTrackForm.get('lengthMin').reset();
            }
        });
        this.addTrackForm.get('lengthSec').valueChanges.subscribe(function (value) {
            if (isNaN(+value) && value != null) {
                _this.addTrackForm.get('lengthSec').reset();
            }
        });
        this.addAlbumForm.get('name').valueChanges.subscribe(function (value) {
            if (value == null) {
                return;
            }
            if (value.trim() === '' && value.length !== 0) {
                _this.artistWhitespaceError = true;
            }
            else {
                _this.artistWhitespaceError = false;
            }
        });
        this.addAlbumForm.get('albumName').valueChanges.subscribe(function (value) {
            if (value == null) {
                return;
            }
            if (value.trim() === '' && value.length !== 0) {
                _this.albumWhitespaceError = true;
            }
            else {
                _this.albumWhitespaceError = false;
            }
        });
    };
    AddAlbumComponent.prototype.removeTrack = function (index) {
        delete this.currentTrackList[index];
        for (var j = index; j < this.currentTrackList.length; j++) {
            this.currentTrackList[j] = this.currentTrackList[j + 1];
        }
        this.currentTrackList.pop();
    };
    AddAlbumComponent.prototype.initLists = function () {
        var _this = this;
        this.genreService.getAll().subscribe(function (data) {
            _this.allGenres = data._embedded.genres;
        });
        this.artistService.getAll().subscribe(function (data) {
            _this.allArtists = data._embedded.artists;
        });
    };
    AddAlbumComponent.prototype.createForms = function () {
        this.addAlbumForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)]],
            genre: '',
            albumName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)]]
        });
        this.addTrackForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            producerName: '',
            lengthMin: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            lengthSec: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    AddAlbumComponent.prototype.artistExist = function (artist) {
        for (var i = 0; i < this.allArtists.length; i++) {
            if (this.allArtists[i].name.toLowerCase() === artist.toLowerCase()) {
                return this.allArtists[i];
            }
        }
        return null;
    };
    AddAlbumComponent.prototype.genreExist = function (genre) {
        for (var i = 0; i < this.allGenres.length; i++) {
            if (this.allGenres[i].name.toLowerCase() === genre.toLowerCase()) {
                return this.allGenres[i];
            }
        }
        return null;
    };
    AddAlbumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-album',
            template: __webpack_require__("../../../../../src/app/component/add-album/add-album.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/add-album/add-album.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__service_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_7__service_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_8__service_genre_service__["a" /* GenreService */],
            __WEBPACK_IMPORTED_MODULE_9__service_track_service__["a" /* TrackService */],
            __WEBPACK_IMPORTED_MODULE_10__service_messages_service__["a" /* MessagesService */]])
    ], AddAlbumComponent);
    return AddAlbumComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/album-view/album-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n    letter-spacing: 10px;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n}\r\n\r\n.header-title {\r\n    \r\n    letter-spacing: 5px;\r\n    font-size: 18px;\r\n}\r\n\r\n.table-white {\r\n    background-color: white;\r\n}\r\n\r\n.selectable {\r\n    cursor: pointer;\r\n}\r\n\r\nbutton {\r\n    margin: 5px;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n    font-style: italic;\r\n    font-size: 8pt;\r\n    \r\n}\r\n\r\n.star {\r\n    color: #66ccff;\r\n}\r\n\r\n#addTrackForm {\r\n    margin-left: 30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/album-view/album-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"msg\"  class=\"container\">\r\n\r\n  <div class=\"card bg-dark\">\r\n    <div class=\"card-header\">\r\n\r\n      <div *ngIf=\"album\">\r\n        <h2 class=\"display-4 text-center text-white header-title\">{{album.artist.name}}</h2>\r\n        <h2 class=\"display-4 text-center text-white header\">{{album.name}}</h2>\r\n        <h2 class=\"display-4 text-center text-white header-title\">{{album.genre.name}}</h2>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <h2 class=\"text-center text-white header-title\">{{msg.albumView.track.list}}</h2>\r\n      <table class=\"table table-sm\">\r\n        <thead class=\"thead-dark\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>{{msg.albumView.track.title}}</th>\r\n            <th>{{msg.albumView.track.producer}}</th>\r\n            <th>{{msg.albumView.track.length}}</th>\r\n            <th>{{msg.albumView.track.actions}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody class=\"table-white\">\r\n          <tr *ngFor=\"let track of trackList; let i = index\">\r\n            <td>{{i + 1}}</td>\r\n\r\n            <td>\r\n              <span *ngIf=\"!editTrackName\" (click)=\"editTrackName=i\" class=\"selectable\">{{track.name}}</span>\r\n              <div *ngIf=\"editTrackName\" class=\"row\">\r\n                <input [formControl]=\"trackName\" class=\"form-control col-md-3\" value=\"{{track.name}}\">\r\n                <button class=\"btn btn-default btn-sm\" (click)=\"editTrackName=false; saveName(track)\">{{msg.albumView.save}}</button>\r\n              </div>\r\n            </td>\r\n\r\n            <td>\r\n              <span *ngIf=\"!editProdName\" (click)=\"editProdName=true\" class=\"selectable\">{{track.producerName}}</span>\r\n              <div *ngIf=\"editProdName\" class=\"row\">\r\n                <input [formControl]=\"producerName\" class=\"form-control col-md-3\" value=\"{{track.producerName}}\">\r\n                <button class=\"btn btn-default btn-sm\" (click)=\"editProdName=false; saveProdName(track)\">{{msg.albumView.save}}</button>\r\n              </div>\r\n            </td>\r\n\r\n            <td>\r\n              <div class=\"row\">\r\n                <span *ngIf=\"!editMin\" (click)=\"editMin=true; editSec=false\" class=\"selectable\">{{track.lengthMin}} min.</span>\r\n                <span *ngIf=\"!editSec\" (click)=\"editSec=true; editMin=false\" class=\"selectable\">{{track.lengthSec}} sec.</span>\r\n\r\n                <div *ngIf=\"editMin\">\r\n                  <label>\r\n                    <b>{{msg.albumView.min}}</b>\r\n                    <input [formControl]=\"min\" class=\"form-control col-md-3\" value=\"{{track.lengthMin}}\" maxlength=\"3\">\r\n                  </label>\r\n                </div>\r\n                <div *ngIf=\"editSec\">\r\n                  <label>\r\n                    <b>{{msg.albumView.sec}}</b>\r\n                    <input [formControl]=\"sec\" class=\"form-control col-md-3\" value=\"{{track.lengthSec}}\" maxlength=\"3\">\r\n                  </label>\r\n                </div>\r\n\r\n                <button *ngIf=\"editMin || editSec\" class=\"btn btn-default btn-sm\" (click)=\"editMin=false; editSec=false; saveTime(track)\">{{msg.albumView.save}}</button>\r\n              </div>\r\n\r\n            </td>\r\n            <button class=\"btn btn-outline-secondary btn-sm\" (click)=\"deleteTrack(i)\">{{msg.albumView.delete}}</button>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <form [formGroup]=\"addTrackForm\" id=\"addTrackForm\" (ngSubmit)=\"addTrack()\" class=\"text-white\" novalidate>\r\n        <div class=\"row\">\r\n          <label class=\"\"><span class=\"star\">*</span>{{msg.albumView.form.title}}\r\n            <input formControlName=\"title\" class=\"form-control\" maxlength=\"16\" novalidate>\r\n            <p *ngIf=\"titleWhitespaceError\" class=\"error\">{{msg.albumView.form.titleError}}</p>\r\n          </label>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"\">{{msg.albumView.form.producer}}\r\n            <input formControlName=\"producerName\" class=\"form-control\" maxlength=\"16\" novalidate>\r\n          </label>\r\n        </div>\r\n        <span><span class=\"star text-center\">*</span>{{msg.albumView.form.length}} </span>\r\n        <div class=\"row\">\r\n            <label class=\"col-md-2\">{{msg.albumView.min}}\r\n              <input formControlName=\"lengthMin\" class=\"form-control\" maxlength=\"3\" novalidate>\r\n            </label>\r\n            <label class=\"col-md-2\">{{msg.albumView.sec}}\r\n              <input formControlName=\"lengthSec\" class=\"form-control\" maxlength=\"2\" novalidate>\r\n            </label>\r\n          \r\n        </div>\r\n        <button class=\" center-block\" type=\"submit\" form=\"addTrackForm\" [disabled]=\"addTrackForm.status === 'INVALID' || titleWhitespaceError\" class=\"btn btn-outline-info\">{{msg.albumView.form.addTrack}}</button>\r\n      </form>\r\n      \r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/album-view/album-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_album_service__ = __webpack_require__("../../../../../src/app/service/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_track__ = __webpack_require__("../../../../../src/app/domain/track.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_track_service__ = __webpack_require__("../../../../../src/app/service/track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_messages_service__ = __webpack_require__("../../../../../src/app/service/messages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AlbumViewComponent = /** @class */ (function () {
    function AlbumViewComponent(route, location, albumService, trackService, formBuilder, messages) {
        this.route = route;
        this.location = location;
        this.albumService = albumService;
        this.trackService = trackService;
        this.formBuilder = formBuilder;
        this.messages = messages;
        this.msg = '';
        this.trackClicked = -1;
        this.titleWhitespaceError = false;
    }
    AlbumViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages.getMessages().subscribe(function (data) {
            _this.msg = data;
        });
        this.getAlbum();
        this.trackName = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](null);
        this.producerName = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](null);
        this.min = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](null);
        this.sec = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](null);
        this.addTrackForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required],
            producerName: '',
            lengthMin: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required],
            lengthSec: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* Validators */].required]
        });
        this.trackFormOnChange();
    };
    AlbumViewComponent.prototype.addTrack = function () {
        var _this = this;
        var producerName = this.addTrackForm.get('producerName').value;
        if (producerName != null) {
            producerName = producerName.trim();
        }
        if (producerName === '') {
            producerName = 'Nieznany';
        }
        var min = +this.addTrackForm.get('lengthMin').value;
        var sec = +this.addTrackForm.get('lengthSec').value;
        while (sec >= 60) {
            min++;
            sec -= 60;
        }
        var track = new __WEBPACK_IMPORTED_MODULE_4__domain_track__["a" /* Track */](null, this.addTrackForm.get('title').value, producerName, min, sec);
        this.trackService.add(track, this.album.id).subscribe(function (res) {
            _this.album.trackList.push(res);
            _this.album.numberOfSongs++;
            _this.album.lengthMin += min;
            _this.album.lengthSec += sec;
            _this.albumService.update(_this.album).subscribe(function (albumRes) {
                _this.album = albumRes;
                _this.getAlbum();
            });
            _this.addTrackForm.reset();
        });
    };
    AlbumViewComponent.prototype.trackFormOnChange = function () {
        var _this = this;
        this.addTrackForm.get('title').valueChanges.subscribe(function (value) {
            if (value == null) {
                return;
            }
            if (value.trim() === '' && value.length !== 0) {
                _this.titleWhitespaceError = true;
            }
            else {
                _this.titleWhitespaceError = false;
            }
        });
        this.addTrackForm.get('lengthMin').valueChanges.subscribe(function (value) {
            if (isNaN(+value) && value != null) {
                _this.addTrackForm.get('lengthMin').reset();
            }
        });
        this.addTrackForm.get('lengthSec').valueChanges.subscribe(function (value) {
            if (isNaN(+value) && value != null) {
                _this.addTrackForm.get('lengthSec').reset();
            }
        });
    };
    AlbumViewComponent.prototype.getAlbum = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.albumService.getById(id).subscribe(function (res) {
            _this.album = res;
            _this.trackList = _this.album.trackList;
        });
    };
    AlbumViewComponent.prototype.saveName = function (track) {
        var _this = this;
        var newName = this.trackName.value;
        if (newName == null) {
            return;
        }
        newName = newName.trim();
        if (newName === '') {
            return;
        }
        track.name = newName;
        this.trackService.update(track, this.album.id).subscribe(function (res) {
            _this.getAlbum();
        });
    };
    AlbumViewComponent.prototype.saveProdName = function (track) {
        var _this = this;
        var newName = this.producerName.value;
        if (newName == null) {
            return;
        }
        newName = newName.trim();
        if (newName === '') {
            return;
        }
        track.producerName = newName;
        this.trackService.update(track, this.album.id).subscribe(function (res) {
            _this.getAlbum();
        });
    };
    AlbumViewComponent.prototype.saveTime = function (track) {
        var _this = this;
        var min = this.min.value;
        var sec = this.sec.value;
        if (min == null && sec != null) {
            min = track.lengthMin;
            sec = +sec;
            while (sec >= 60) {
                min++;
                sec -= 60;
            }
        }
        else if (min != null && sec == null) {
            min = +min;
            sec = track.lengthSec;
        }
        else {
            return;
        }
        track.lengthMin = min;
        track.lengthSec = sec;
        this.trackService.update(track, this.album.id).subscribe(function (res) {
            _this.getAlbum();
            _this.min.reset();
            _this.sec.reset();
        });
    };
    AlbumViewComponent.prototype.deleteTrack = function (index) {
        var _this = this;
        this.album.lengthMin -= this.trackList[index].lengthMin;
        this.album.lengthSec -= this.trackList[index].lengthSec;
        this.album.numberOfSongs--;
        this.trackService.delete(this.trackList[index].id);
        console.log(this.album.lengthMin + ' ' + this.album.lengthSec);
        this.albumService.update(this.album).subscribe(function (res) {
            delete _this.trackList[index];
            for (var i = index; i < _this.trackList.length; i++) {
                _this.trackList[i] = _this.trackList[i + 1];
            }
            _this.trackList.pop();
            _this.getAlbum();
        });
    };
    AlbumViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-album-view',
            template: __webpack_require__("../../../../../src/app/component/album-view/album-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/album-view/album-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__service_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_6__service_track_service__["a" /* TrackService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__service_messages_service__["a" /* MessagesService */]])
    ], AlbumViewComponent);
    return AlbumViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/list-view/list-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select-album {\r\n    cursor: pointer;\r\n}\r\n\r\n.select-drop {\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-margin {\r\n    margin-top: 20px;\r\n}\r\n\r\n.filter-head {\r\n    margin-top: 10px;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    letter-spacing: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/list-view/list-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"msg\" class=\"container\">\n  <div class=\"border bg-light\">\n    <div class=\"row\">\n      <h1 class=\"mx-auto filter-head\">{{msg.listView.filter.head}}</h1>\n    </div>\n\n    <div class=\"row\">\n      <div *ngIf=\"filterOption === 'artist'\" class=\"btn-group filter-margin mx-auto\">\n        <button type=\"button\" class=\"btn btn-secoundary\">{{msg.listView.filter.byArtist}}</button>\n        <button type=\"button\" class=\"btn btn-secoundary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\">\n          <span class=\"caret\"></span>\n        </button>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item select-drop\" (click)=\"initList()\">{{msg.listView.filter.allArtists}}</a>\n          <a class=\"dropdown-item select-drop\" *ngFor=\"let artist of allArtists\" (click)=\"filterByArtist(artist.id)\">{{artist.name}}</a>\n        </div>\n      </div>\n\n      <div *ngIf=\"filterOption === 'time'\" class=\"col-md-3 filter-margin mx-auto\">\n        <form [formGroup]=\"lengthFilterForm\" id=\"lengthFilterForm\" (ngSubmit)=\"filterByLength()\" novalidate>\n          <label>{{msg.listView.filter.greaterThan}}\n            <input class=\"form-control\" formControlName=\"greaterThan\" maxlength=\"3\">\n          </label>\n          <label>{{msg.listView.filter.lessThan}}\n            <input class=\"form-control\" formControlName=\"lessThan\" maxlength=\"3\">\n          </label>\n        </form>\n        <button type=\"submit\" form=\"lengthFilterForm\" class=\"btn btn-secoundary mx-auto\" [disabled]=\"lengthFilterForm.status === 'INVALID'\">{{msg.listView.filter.head}}</button>\n        <button class=\"btn btn-secoundary mx-auto\" (click)=\"initList()\">{{msg.listView.filter.unfilter}}</button>\n      </div>\n\n      <div *ngIf=\"filterOption === 'genre'\" class=\"btn-group filter-margin mx-auto\">\n        <button type=\"button\" class=\"btn btn-secoundary\">{{msg.listView.filter.byGenre}}</button>\n        <button type=\"button\" class=\"btn btn-secoundary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\">\n          <span class=\"caret\"></span>\n        </button>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item select-drop\" (click)=\"initList()\">{{msg.listView.filter.allGenre}}</a>\n          <a class=\"dropdown-item select-drop\" *ngFor=\"let genre of allGenres\" (click)=\"filterByGenre(genre.id)\">{{genre.name}}</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-2 mx-auto filter-margin\">\n      <label class=\"radio-inline\">\n        <input type=\"radio\" name=\"optradio\" (click)=\"filterOption='artist'\" checked=\"checked\">{{msg.listView.table.head.artist}}</label>\n      <label class=\"radio-inline\">\n        <input type=\"radio\" name=\"optradio\" (click)=\"filterOption='time'\">{{msg.listView.table.head.albumName}}</label>\n      <label class=\"radio-inline\">\n        <input type=\"radio\" name=\"optradio\" (click)=\"filterOption='genre'\">{{msg.listView.table.head.genre}}</label>\n      </div>\n    </div>\n  </div>\n\n\n  <table class=\"table table-dark table-hover\">\n    <thead>\n      <tr>\n        <th>\n          <button class=\"btn btn-outline-info btn-sm\" (click)=\"sortByArtist()\">{{msg.listView.table.head.artist}}</button>\n        </th>\n        <th>\n          <button class=\"btn btn-outline-info btn-sm\" (click)=\"sortByName()\">{{msg.listView.table.head.albumName}}</button>\n        </th>\n        <th>\n          <button class=\"btn btn-outline-info btn-sm\" (click)=\"sortByTime()\">{{msg.listView.table.head.length}}</button>\n        </th>\n        <th>\n          <button class=\"btn btn-outline-info btn-sm\" (click)=\"sortByNumberOfSongs()\">{{msg.listView.table.head.songs}}</button>\n        </th>\n        <th>\n          <button class=\"btn btn-outline-info btn-sm\" (click)=\"sortByGenre()\">{{msg.listView.table.head.genre}}</button>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let album of allAlbums; let i = index\" class=\"select-album\" routerLink=\"album/{{album.id}}\">\n        <td>{{album.artist.name}}</td>\n        <td>{{album.name}}</td>\n        <td>{{album.lengthMin}} min. {{album.lengthSec}} sec.</td>\n        <td>{{album.numberOfSongs}}</td>\n        <td>{{album.genre.name}}</td>\n        <td>\n          <button class=\"btn btn-outline-info btn-sm\" (click)=\"deleteAlbum(i)\">{{msg.listView.table.delete}}</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/list-view/list-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_album_service__ = __webpack_require__("../../../../../src/app/service/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_artist_service__ = __webpack_require__("../../../../../src/app/service/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_genre_service__ = __webpack_require__("../../../../../src/app/service/genre.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_messages_service__ = __webpack_require__("../../../../../src/app/service/messages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(albumService, artistService, genreService, formBuilder, messages) {
        this.albumService = albumService;
        this.artistService = artistService;
        this.genreService = genreService;
        this.formBuilder = formBuilder;
        this.messages = messages;
        this.msg = '';
        this.allAlbums = [];
        this.allArtists = [];
        this.allGenres = [];
        this.filterOption = 'artist';
    }
    ListViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages.getMessages().subscribe(function (data) { return _this.msg = data; });
        this.initList();
        this.createForm();
        this.lengthFilterFormOnChange();
    };
    ListViewComponent.prototype.createForm = function () {
        this.lengthFilterForm = this.formBuilder.group({
            greaterThan: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required],
            lessThan: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required]
        });
    };
    ListViewComponent.prototype.lengthFilterFormOnChange = function () {
        var _this = this;
        this.lengthFilterForm.get('greaterThan').valueChanges.subscribe(function (value) {
            if (isNaN(+value)) {
                _this.lengthFilterForm.get('greaterThan').reset();
            }
        });
        this.lengthFilterForm.get('lessThan').valueChanges.subscribe(function (value) {
            if (isNaN(+value)) {
                _this.lengthFilterForm.get('lessThan').reset();
            }
        });
    };
    ListViewComponent.prototype.initList = function () {
        var _this = this;
        this.albumService.getAll().subscribe(function (res) {
            _this.allAlbums = res;
        });
        this.artistService.getAll().subscribe(function (res) {
            _this.allArtists = res._embedded.artists;
        });
        this.genreService.getAll().subscribe(function (res) {
            _this.allGenres = res._embedded.genres;
        });
    };
    ListViewComponent.prototype.filterByArtist = function (id) {
        var _this = this;
        this.albumService.getAll().subscribe(function (res) {
            _this.allAlbums = res;
            var filtered = _this.allAlbums.filter(function (album) { return album.artist.id === id; });
            _this.allAlbums = filtered;
        });
    };
    ListViewComponent.prototype.filterByGenre = function (id) {
        var _this = this;
        this.albumService.getAll().subscribe(function (res) {
            _this.allAlbums = res;
            var filtered = _this.allAlbums.filter(function (album) { return album.genre.id === id; });
            _this.allAlbums = filtered;
        });
    };
    ListViewComponent.prototype.filterByLength = function () {
        var _this = this;
        var greaterThan = +this.lengthFilterForm.get('greaterThan').value;
        var lessThan = +this.lengthFilterForm.get('lessThan').value;
        this.albumService.getAll().subscribe(function (res) {
            _this.allAlbums = res;
            var filtered = _this.allAlbums.filter(function (album) { return (album.lengthMin > greaterThan && album.lengthMin <= lessThan); });
            _this.allAlbums = filtered;
            _this.lengthFilterForm.reset();
        });
    };
    ListViewComponent.prototype.sortByArtist = function () {
        this.allAlbums.sort(function (a1, a2) {
            if (a1.artist.name < a2.artist.name) {
                return -1;
            }
            else if (a1.artist.name > a2.artist.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    ListViewComponent.prototype.sortByName = function () {
        this.allAlbums.sort(function (a1, a2) {
            if (a1.name < a2.name) {
                return -1;
            }
            else if (a1.name > a2.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    ListViewComponent.prototype.sortByTime = function () {
        this.allAlbums.sort(function (a1, a2) {
            var time1 = a1.lengthMin * 60 + a1.lengthSec;
            var time2 = a2.lengthMin * 60 + a2.lengthSec;
            if (time1 < time2) {
                return -1;
            }
            else if (time1 > time2) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    ListViewComponent.prototype.sortByNumberOfSongs = function () {
        this.allAlbums.sort(function (a1, a2) {
            if (a1.numberOfSongs < a2.numberOfSongs) {
                return -1;
            }
            else if (a1.numberOfSongs > a2.numberOfSongs) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    ListViewComponent.prototype.sortByGenre = function () {
        this.allAlbums.sort(function (a1, a2) {
            if (a1.genre.name < a2.genre.name) {
                return -1;
            }
            else if (a1.genre.name > a2.genre.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    ListViewComponent.prototype.deleteAlbum = function (index) {
        this.albumService.delete(this.allAlbums[index].id);
        delete this.allAlbums[index];
        for (var i = index; i < this.allAlbums.length; i++) {
            this.allAlbums[i] = this.allAlbums[i + 1];
        }
        this.allAlbums.pop();
    };
    ListViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-view',
            template: __webpack_require__("../../../../../src/app/component/list-view/list-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/list-view/list-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_2__service_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_3__service_genre_service__["a" /* GenreService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__service_messages_service__["a" /* MessagesService */]])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/domain/album.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
var Album = /** @class */ (function () {
    function Album(artist, name, numberOfSongs, lengthMin, lengthSec, genre) {
        this.artist = artist;
        this.name = name;
        this.numberOfSongs = numberOfSongs;
        this.lengthMin = lengthMin;
        this.lengthSec = lengthSec;
        this.genre = genre;
        this.trackList = [];
    }
    return Album;
}());



/***/ }),

/***/ "../../../../../src/app/domain/artist.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Artist; });
var Artist = /** @class */ (function () {
    function Artist(name) {
        this.name = name;
        this.discography = [];
    }
    return Artist;
}());



/***/ }),

/***/ "../../../../../src/app/domain/genre.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genre; });
var Genre = /** @class */ (function () {
    function Genre(name) {
        this.name = name;
        this.albums = [];
    }
    return Genre;
}());



/***/ }),

/***/ "../../../../../src/app/domain/track.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Track; });
var Track = /** @class */ (function () {
    function Track(album, name, producerName, lengthMin, lengthSec) {
        this.album = album;
        this.name = name;
        this.producerName = producerName;
        this.lengthMin = lengthMin;
        this.lengthSec = lengthSec;
    }
    return Track;
}());



/***/ }),

/***/ "../../../../../src/app/service/album.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apiconfig__ = __webpack_require__("../../../../../src/app/service/apiconfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumService = /** @class */ (function () {
    function AlbumService(http) {
        this.http = http;
    }
    AlbumService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__apiconfig__["a" /* API_URL */] + "/custom/albums", __WEBPACK_IMPORTED_MODULE_1__apiconfig__["b" /* HEADERS */]);
    };
    AlbumService.prototype.getById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__apiconfig__["a" /* API_URL */] + "/custom/albums/" + id, __WEBPACK_IMPORTED_MODULE_1__apiconfig__["b" /* HEADERS */]);
    };
    AlbumService.prototype.getDiscography = function (artistId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__apiconfig__["a" /* API_URL */] + "/custom/albums/artist/" + artistId, __WEBPACK_IMPORTED_MODULE_1__apiconfig__["b" /* HEADERS */]);
    };
    AlbumService.prototype.getAlbumsOfGenre = function (genreId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__apiconfig__["a" /* API_URL */] + "/custom/albums/genre/" + genreId, __WEBPACK_IMPORTED_MODULE_1__apiconfig__["b" /* HEADERS */]);
    };
    AlbumService.prototype.getAlbumsWithoutGenre = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__apiconfig__["a" /* API_URL */] + "/custom/albums/TBA", __WEBPACK_IMPORTED_MODULE_1__apiconfig__["b" /* HEADERS */]);
    };
    AlbumService.prototype.add = function (album) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__apiconfig__["a" /* API_URL */] + "/custom/albums", album, __WEBPACK_IMPORTED_MODULE_1__apiconfig__["b" /* HEADERS */]);
    };
    AlbumService.prototype.update = function (album) {
        if (album.id == null) {
            console.log('Update filed - Id undefinied');
            return;
        }
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__apiconfig__["a" /* API_URL */] + "/custom/albums/" + album.id, album, __WEBPACK_IMPORTED_MODULE_1__apiconfig__["b" /* HEADERS */]);
    };
    AlbumService.prototype.delete = function (id) {
        this.http.delete(__WEBPACK_IMPORTED_MODULE_1__apiconfig__["a" /* API_URL */] + "/custom/albums/" + id, __WEBPACK_IMPORTED_MODULE_1__apiconfig__["b" /* HEADERS */]).subscribe();
    };
    AlbumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "../../../../../src/app/service/apiconfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");

var HEADERS = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var API_URL = 'http://localhost:8080/api';


/***/ }),

/***/ "../../../../../src/app/service/artist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiconfig__ = __webpack_require__("../../../../../src/app/service/apiconfig.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistService = /** @class */ (function () {
    function ArtistService(http) {
        this.http = http;
    }
    ArtistService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/artists", __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    ArtistService.prototype.getById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/artists/" + id, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    ArtistService.prototype.getDiscography = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/artists/" + id + "/discography", __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    ArtistService.prototype.add = function (artist) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/artists", artist, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    ArtistService.prototype.update = function (artist) {
        if (artist.id == null) {
            console.log('Update filed - Id undefinied');
            return;
        }
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/artists/" + artist.id, artist, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    ArtistService.prototype.delete = function (id) {
        this.http.delete(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/artists/" + id, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]).subscribe();
    };
    ArtistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "../../../../../src/app/service/genre.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiconfig__ = __webpack_require__("../../../../../src/app/service/apiconfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__album_service__ = __webpack_require__("../../../../../src/app/service/album.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GenreService = /** @class */ (function () {
    function GenreService(http, albumService) {
        this.http = http;
        this.albumService = albumService;
    }
    GenreService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/genres", __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    GenreService.prototype.getById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/genres/" + id, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    GenreService.prototype.getAlbums = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/genres/" + id + "/albums", __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    GenreService.prototype.add = function (genre) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/genres", genre, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    GenreService.prototype.update = function (genre) {
        if (genre.id == null) {
            console.log('Update filed - Id undefinied');
            return;
        }
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/genres/" + genre.id, genre, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    GenreService.prototype.delete = function (id) {
        this.http.delete(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/custom/genres/" + id, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]).subscribe();
    };
    GenreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__album_service__["a" /* AlbumService */]])
    ], GenreService);
    return GenreService;
}());



/***/ }),

/***/ "../../../../../src/app/service/messages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesService = /** @class */ (function () {
    function MessagesService(http) {
        this.http = http;
    }
    MessagesService.prototype.getMessages = function () {
        return this.http.get('../../assets/messages_PL.json');
    };
    MessagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "../../../../../src/app/service/track.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiconfig__ = __webpack_require__("../../../../../src/app/service/apiconfig.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackService = /** @class */ (function () {
    function TrackService(http) {
        this.http = http;
    }
    TrackService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/custom/tracks", __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    TrackService.prototype.getById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/custom/tracks/" + id, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    TrackService.prototype.getAlbum = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/custom/tracks/" + id + "/album", __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    TrackService.prototype.add = function (track, albumId) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/custom/albums/" + albumId + "/tracks", track, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    TrackService.prototype.addAll = function (tracks, albumId) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/custom/albums/" + albumId + "/tracksArray", tracks, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    TrackService.prototype.update = function (track, albumId) {
        if (track.id == null) {
            console.log('Update filed - Id undefinied');
            return;
        }
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/custom/albums/" + albumId + "/tracks", track, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]);
    };
    TrackService.prototype.delete = function (id) {
        this.http.delete(__WEBPACK_IMPORTED_MODULE_2__apiconfig__["a" /* API_URL */] + "/custom/tracks/" + id, __WEBPACK_IMPORTED_MODULE_2__apiconfig__["b" /* HEADERS */]).subscribe();
    };
    TrackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TrackService);
    return TrackService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map