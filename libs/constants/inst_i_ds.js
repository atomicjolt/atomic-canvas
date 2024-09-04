"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInstid = void 0;
//
// InstIDs
//
// Create InstID
// Create a unique, encrypted InstID.
// 
// Generates a different InstID each time it's called, each one expires
// after a short window (1 hour).
//
// API Docs: https://canvas.instructure.com/doc/api/inst_i_ds.html
// API Url: inst_ids
//
// Example:
// return canvasRequest(create_instid, {});
exports.createInstid = { type: 'CREATE_INSTID', method: 'post', key: 'create_instid', required: [] };
//# sourceMappingURL=inst_i_ds.js.map