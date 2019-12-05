"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (canvas, params, body) {
  var localData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  return {
    type: canvas.type,
    canvas: canvas,
    params: params,
    body: body,
    localData: localData
  };
};