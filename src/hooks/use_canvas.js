import { useState, useEffect } from 'react';
import Api from 'atomic-fuel/libs/api/api';

import { canvasProxyUrl } from '../constants';

//
// parameters:
//   canvasType - The object related to the Canvas api call to be made. ie search_account_domains
//   params     - The params passed to Canvas
//   body       - The body of the request. Used for POST and PUT
//   timeout    - Override the default network timeout for this request
export default function useCanvas(jwt, settings, canvasType, params = {}, body = {}, timeout = 30000) {
  const [result, setResult] = useState();

  useEffect(() => {
    async function callCanvasProxy() {
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
      setResult(res);
    }

    callCanvasProxy();
  }, []);

  return result;
}
