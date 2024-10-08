"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAccountDomains = void 0;
//
// Account Domain Lookups
//
// Search account domains
// Returns a list of up to 5 matching account domains
// 
// Partial match on name / domain are supported
//
// API Docs: https://canvas.instructure.com/doc/api/account_domain_lookups.html
// API Url: accounts/search
//
// Example:
// const query = {
//   name
//   domain
//   latitude
//   longitude
// }
// return canvasRequest(search_account_domains, {, ...query});
exports.searchAccountDomains = { type: 'SEARCH_ACCOUNT_DOMAINS', method: 'get', key: 'search_account_domains', required: [] };
//# sourceMappingURL=account_domain_lookups.js.map