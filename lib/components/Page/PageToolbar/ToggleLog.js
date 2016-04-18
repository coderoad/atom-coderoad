"use strict";
var React = require('react');
var code_1 = require('material-ui/svg-icons/action/code');
var actions_1 = require('../../../atom/actions');
var FlatButton_1 = require('material-ui/FlatButton');
exports.ToggleLog = function () { return (React.createElement(FlatButton_1.default, {icon: React.createElement(code_1.default, null), onTouchTap: actions_1.toggleDevTools})); };