var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.template = function () {
        this.stepOne();
        this.stepTwo();
    };
    return Template;
}());
var doInOneWay = /** @class */ (function (_super) {
    __extends(doInOneWay, _super);
    function doInOneWay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    doInOneWay.prototype.stepOne = function () {
        console.log('Do first step in one way');
    };
    doInOneWay.prototype.stepTwo = function () {
        console.log('Do second step in one way');
    };
    return doInOneWay;
}(Template));
var doInOtherWay = /** @class */ (function (_super) {
    __extends(doInOtherWay, _super);
    function doInOtherWay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    doInOtherWay.prototype.stepOne = function () {
        console.log('Do first step in other way');
    };
    doInOtherWay.prototype.stepTwo = function () {
        console.log('Do second step in other way');
    };
    return doInOtherWay;
}(Template));
var oneWay = new doInOneWay();
var otherWay = new doInOtherWay();
// client code
function perform(template) {
    template.template();
}
perform(oneWay);
perform(otherWay);
