import Api from '@atomicjolt/atomic-fuel/libs/api/api';

import { canvasProxyUrl } from './constants';

export default async function callCanvasProxy(canvasType, params = {}, body = {}, timeout = 30000, settings, jwt) {
  const res = await Api.execRequest(
    canvasType.method,
    canvasProxyUrl,
    settings.api_url,
    jwt,
    settings.csrf_token,
    {
      ...params,
      lms_proxy_call_type: canvasType.type,
      context_id: settings.context_id,
      oauth_consumer_key: settings.oauth_consumer_key
    },
    body,
    undefined,
    timeout,
  );
  return res;
}
