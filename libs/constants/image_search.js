"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findImages = exports.confirmImageSelection = void 0;
//
// Image Search
//
// Find images
// Find public domain images for use in courses and user content.  If you select an image using this API, please use the {api:InternetImageController#image_selection Confirm image selection API} to indicate photo usage to the server.
//
// API Docs: https://canvas.instructure.com/doc/api/image_search.html
// API Url: image_search
//
// Example:
// const query = {
//   query (required)
// }
// return canvasRequest(find_images, {, ...query});
var findImages = {
  type: 'FIND_IMAGES',
  method: 'get',
  key: 'find_images',
  required: []
}; // Confirm image selection
// After you have used the search API, you should hit this API to indicate photo usage to the server.
//
// API Docs: https://canvas.instructure.com/doc/api/image_search.html
// API Url: image_selection/{id}
//
// Example:
// return canvasRequest(confirm_image_selection, {id});

exports.findImages = findImages;
var confirmImageSelection = {
  type: 'CONFIRM_IMAGE_SELECTION',
  method: 'post',
  key: 'confirm_image_selectionconfirm_image_selection_id',
  required: ['id']
};
exports.confirmImageSelection = confirmImageSelection;