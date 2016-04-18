"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var react_redux_1 = require('react-redux');
var FlatButton_1 = require('material-ui/FlatButton');
var actions_1 = require('../../../actions');
var Continue = (function (_super) {
    __extends(Continue, _super);
    function Continue() {
        _super.apply(this, arguments);
    }
    Continue.prototype.render = function () {
        return React.createElement(FlatButton_1.default, {label: 'Continue', primary: true, onTouchTap: this.props.callNextPage});
    };
    Continue = __decorate([
        react_redux_1.connect(null, function (dispatch, state) {
            return {
                callNextPage: function () { return dispatch(actions_1.pageNext()); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], Continue);
    return Continue;
}(React.Component));
exports.Continue = Continue;