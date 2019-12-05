"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = (canvas, params, body, localData) => ({
  type: canvas.type,
  canvas,
  params,
  body,
  localData,

  /**
   * Usage of this utility method:
   * canvasRequest(canvas, params, body).withTimeout(60e3);
   */
  withTimeout(timeout) {
    return { ...this, timeout };
  },
});
