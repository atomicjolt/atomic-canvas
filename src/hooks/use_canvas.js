import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import callCanvasProxy from '../canvas_proxy';

//
// parameters:
//   canvasType - The object related to the Canvas api call to be made. ie search_account_domains
//   params     - The params passed to Canvas
//   body       - The body of the request. Used for POST and PUT
//   timeout    - Override the default network timeout for this request
export default function useCanvas(canvasType, params = {}, body = {}, timeout = 30000) {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const settings = useSelector(state => state.settings);
  const jwt = useSelector(state => state.jwt);

  useEffect(() => {
    async function send() {
      try {
        const res = callCanvasProxy(canvasType, params, body, timeout, settings, jwt);
        setResult(res);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    }
    send();
  }, []);

  return {
    result,
    error,
    loading,
  };
}
