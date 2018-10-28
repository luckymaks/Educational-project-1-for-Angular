"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./index");
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.ProductsList = this.dataService.getData();
    };
    AppComponent.prototype.onRemove = function (remove) {
        console.log(remove.name);
        var index = this.ProductsList.findIndex(function (prod) { return prod.id == remove.id; });
        if (index > -1) {
            this.ProductsList.splice(index, 1);
        }
    };
    ;
    AppComponent.prototype.StylesColor = function (addStyle) {
        var styles = {
            "background-color": "#ff0000"
        };
        var style = this.ProductsList.find(function (prod) { return prod.price == addStyle.price; });
        if (style.price >= 800) {
            return styles;
        }
    };
    ;
    AppComponent.prototype.addItem = function (id, name, price) {
        if (id == null || name.trim() == '' || name == null || price == null) {
            return;
        }
        else {
            this.ProductsList.push(new index_1.Products(id, name, price));
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-table",
            templateUrl: "app.component.html",
            styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css",
                "app.component.css"
            ]
        }),
        __metadata("design:paramtypes", [index_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map