<!DOCTYPE html>
<html lang="th"><head><script data-bard-client-injected="true">(function(firebaseConfig, initialAuthToken, appId) {
        window.__firebase_config = firebaseConfig;
        window.__initial_auth_token = initialAuthToken;
        window.__app_id = appId;
            })("\n{\n  \"apiKey\": \"AIzaSyCqyCcs2R2e7AegGjvFAwG98wlamtbHvZY\",\n  \"authDomain\": \"bard-frontend.firebaseapp.com\",\n  \"projectId\": \"bard-frontend\",\n  \"storageBucket\": \"bard-frontend.firebasestorage.app\",\n  \"messagingSenderId\": \"175205271074\",\n  \"appId\": \"1:175205271074:web:2b7bd4d34d33bf38e6ec7b\"\n}\n","eyJhbGciOiJSUzI1NiIsImtpZCI6IjExNjRiNzdiNDMzZDdhMDAyMWI4NjE4YjhjYTU3ZTMyZGI5MWUxMTMiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1mYnN2Y0BiYXJkLWZyb250ZW5kLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vZ29vZ2xlLmlkZW50aXR5LmlkZW50aXR5dG9vbGtpdC52MS5JZGVudGl0eVRvb2xraXQiLCJ1aWQiOiIxNjE4MDI1MjEyMjk3ODA0Mjg3OCIsImlzcyI6ImZpcmViYXNlLWFkbWluc2RrLWZic3ZjQGJhcmQtZnJvbnRlbmQuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJjbGFpbXMiOnsiYXBwSWQiOiJjXzJkMjAxMGE1OGQ0NzBlNDhfaW5kZXguaHRtbC0zMjYifSwiZXhwIjoxNzkwMjY4MjU4LCJpYXQiOjE3OTAyNjQ2NTgsImFsZyI6IlJTMjU2In0.Ftr6gEh96VktthT1IhYat9RY-modUIRVQqX64Xt7O9SVRDHillAj0OD3MUrXgwhlCwJJhzgU-S8Ida34yO1__8PXrRYO_dbYvsHSPjfjepJKeELw-YkBRVW1u2HwM3kUEyKnCfrgKThTo7oGvw6wFugzpiBZ_vCH8xWe9J1-pxjNOoUF8N7LKSI9aB-jZZcE6FWNG-pS_L7BJD1S7KGMY3e-fLxcrpM5UKbHdXSwVVLVWdXbZAVb-63V8q-vsoRX6Oj3KYvmzAUz62B9rp-4wpNu-3jNyPBpLUP7Q0QD3R3m9vtLNkFISVPXSzld2VvipEU2HMDjbOaE-LlYBSlLbg","c_2d2010a58d470e48_index.html-326")</script><script data-bard-client-injected="true">
  document.addEventListener('input', (event) => {
    if (event.target && (event.target.isContentEditable || event.target.hasAttribute('contenteditable'))) {
      const clonedDoc = document.cloneNode(true);
      const injectedScripts = clonedDoc.querySelectorAll('[data-bard-client-injected="true"]');
      injectedScripts.forEach(el => el.remove());
      window.parent.postMessage({
        type: 'inlineEdit',
        html: '<!DOCTYPE html>\n' + clonedDoc.documentElement.outerHTML
      }, '*');
    }
  });
</script><script data-bard-client-injected="true">(function(){'use strict';window.addEventListener("message",a=>{a.data&&a.data.type==="SUPPLEMENTAL_DATA_UPDATE"&&window.dispatchEvent(new CustomEvent("supplementaldataupdate",{detail:a.data.data}))});}).call(this);
</script><script data-bard-client-injected="true">(function() {
  const SCROLL_KEYS = new Set([
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    ' ', 'Spacebar', 'PageUp', 'PageDown', 'Home', 'End',
  ]);
  const HORIZONTAL_KEYS = new Set(['ArrowLeft', 'ArrowRight']);

  function isTextEntryTarget(target) {
    if (!target) return false;
    const tagName = target.tagName;
    return tagName === 'INPUT' || tagName === 'TEXTAREA' ||
        tagName === 'SELECT' || target.isContentEditable === true;
  }

  function canScroll(node, horizontal) {
    const overflows = horizontal ? node.scrollWidth > node.clientWidth
                                 : node.scrollHeight > node.clientHeight;
    if (!overflows) return false;
    const style = window.getComputedStyle(node);
    const overflow = horizontal ? style.overflowX : style.overflowY;
    return overflow === 'auto' || overflow === 'scroll';
  }

  function hasScrollableAncestor(target, horizontal) {
    let node = target;
    while (node && node !== document.documentElement) {
      if (canScroll(node, horizontal)) return true;
      node = node.parentElement;
    }
    return false;
  }

  function rootCanScroll(horizontal) {
    const scroller = document.scrollingElement || document.documentElement;
    if (!scroller) return false;
    // Tolerate a pixel of rounding so subpixel layouts do not look scrollable.
    return horizontal ? scroller.scrollWidth > window.innerWidth + 1
                      : scroller.scrollHeight > window.innerHeight + 1;
  }

  window.addEventListener('keydown', function(event) {
    if (!SCROLL_KEYS.has(event.key)) return;
    if (event.defaultPrevented) return;
    // Alt and Meta turn arrows into browser history navigation, and Ctrl is
    // reserved for shortcuts, so none of them are scroll intent.
    if (event.altKey || event.metaKey || event.ctrlKey) return;

    const target = event.target;
    if (isTextEntryTarget(target)) return;

    // Anything that can still absorb the scroll gets to keep it.
    const horizontal = HORIZONTAL_KEYS.has(event.key);
    if (rootCanScroll(horizontal)) return;
    if (hasScrollableAncestor(target, horizontal)) return;

    event.preventDefault();
  }, {capture: true, passive: false});
})();</script><script data-bard-client-injected="true">(function() {
  // Ensure this script is executed only once
  if (window.firebaseAuthBridgeScriptLoaded) {
    return;
  }
  window.firebaseAuthBridgeScriptLoaded = true;

  let nextTokenPromiseId = 0;

  // Stores { resolve, reject } for ongoing token requests
  const pendingTokenPromises = {};

  // Listen for messages from the Host Application
  window.addEventListener('message', function(event) {

    const messageData = event.data;

  if (messageData && messageData.type === 'RESOLVE_NEW_FIREBASE_TOKEN') {
      const { success, token, error, promiseId } = messageData ?? {};
      if (pendingTokenPromises[promiseId]) {
        if (success) {
          pendingTokenPromises[promiseId].resolve(token);
        } else {
          pendingTokenPromises[promiseId].reject(new Error(error || 'Token refresh failed from host.'));
        }
        delete pendingTokenPromises[promiseId];
      }
    }
  });

  // Expose a function for the Generated App to request a new Firebase token
  window.requestNewFirebaseToken = function() {
    const currentPromiseId = nextTokenPromiseId++;
    const promise = new Promise((resolve, reject) => {
      pendingTokenPromises[currentPromiseId] = { resolve, reject };
    });
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: 'REQUEST_NEW_FIREBASE_TOKEN',
        promiseId: currentPromiseId
      }, '*');
    } else {
      pendingTokenPromises[currentPromiseId].reject(new Error('No parent window to request token from.'));
      delete pendingTokenPromises[currentPromiseId];
    }
    return promise;
  };
})();</script><script data-bard-client-injected="true">
let realOriginalGetUserMedia = null;
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  realOriginalGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
}

(function() {
  if (navigator.mediaDevices && navigator.mediaDevices.__proto__) {
    try {
      Object.defineProperty(navigator.mediaDevices.__proto__, 'getUserMedia', {
        get: function() {
          return undefined; // Or throw an error
        },
        configurable: false
      });
    } catch (error) {
      console.error("Error defining prototype getter:", error);
    }
  }
})();

(function() {
  const pendingMediaResolvers = {};
  let nextMediaPromiseId = 0;

  function requestMediaPermissions(constraints) {
    const mediaPromiseId = nextMediaPromiseId++;
    const promise = new Promise((resolve, reject) => {
      pendingMediaResolvers[mediaPromiseId] = (granted) => {
        delete pendingMediaResolvers[mediaPromiseId];
        resolve(granted);
      };
    });

    window.parent.postMessage({
      type: 'requestMediaPermission',
      constraints: constraints,
      promiseId: mediaPromiseId,
    }, '*');

    return promise;
  }

  let originalGetUserMedia = realOriginalGetUserMedia;

  function interceptGetUserMedia() {
    if (navigator.mediaDevices) {
      Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {
        value: function(constraints) {
          return requestMediaPermissions(constraints).then((granted) => {
            if (granted) {
              if (originalGetUserMedia) {
                return originalGetUserMedia(constraints);
              } else {
                throw new Error("Original getUserMedia not available.");
              }
            } else {
              throw new DOMException('Permission denied', 'NotAllowedError');
            }
          });
        },
        writable: false,
        configurable: false
      });
    }
  }

  interceptGetUserMedia();

  const observer = new MutationObserver(function(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'reconfigured' && mutation.name === 'getUserMedia' && mutation.object === navigator.mediaDevices) {
        interceptGetUserMedia();
      } else if (mutation.type === 'attributes' && mutation.attributeName === 'getUserMedia' && mutation.target === navigator.mediaDevices) {
        interceptGetUserMedia();
      } else if (mutation.type === 'childList' && mutation.addedNodes) {
        mutation.addedNodes.forEach(node => {
          if (node === navigator.mediaDevices) {
            interceptGetUserMedia();
          }
        });
      }
    }
  });

  function interceptSpeechRecognition() {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      return;
    }

    const OriginalSpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const SpeechRecognitionWrapper = function(...args) {
      const recognizer = new OriginalSpeechRecognition(...args);
      const originalStart = recognizer.start.bind(recognizer);

      recognizer.start = function() {
        requestMediaPermissions({ audio: true }).then(granted => {
          if (granted) {
            originalStart();
          } else {
            const errorEvent = new SpeechRecognitionErrorEvent('error');
            errorEvent.error = 'not-allowed'; // This is the standard error for permission denial.
            recognizer.dispatchEvent(errorEvent);
          }
        });
      };

      return recognizer;
    };

    SpeechRecognitionWrapper.prototype = OriginalSpeechRecognition.prototype;
    SpeechRecognitionWrapper.prototype.constructor = SpeechRecognitionWrapper;

    if (window.SpeechRecognition) {
      window.SpeechRecognition = SpeechRecognitionWrapper;
    }
    if (window.webkitSpeechRecognition) {
      window.webkitSpeechRecognition = SpeechRecognitionWrapper;
    }
  }

  interceptSpeechRecognition();

  window.addEventListener('message', function(event) {
    if (event.data) {
      if (event.data.type === 'resolveMediaPermission') {
        const { promiseId, granted } = event.data;
        if (pendingMediaResolvers[promiseId]) {
          pendingMediaResolvers[promiseId](granted);
        }
      }
    }
  });

})();</script><script ws-interception-config="{&quot;parentOrigin&quot;:&quot;https://gemini.google.com&quot;,&quot;proxiedDomains&quot;:[]}" data-bard-client-injected="true">(function(){'use strict';var u=typeof Object.defineProperties=="function"?Object.defineProperty:function(b,d,e){if(b==Array.prototype||b==Object.prototype)return b;b[d]=e.value;return b};function v(b){b=["object"==typeof globalThis&&globalThis,b,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var d=0;d<b.length;++d){var e=b[d];if(e&&e.Math==Math)return e}throw Error("Cannot find global object");}var w=v(this);
function y(b,d){if(d)a:{var e=w;b=b.split(".");for(var h=0;h<b.length-1;h++){var k=b[h];if(!(k in e))break a;e=e[k]}b=b[b.length-1];h=e[b];d=d(h);d!=h&&d!=null&&u(e,b,{configurable:!0,writable:!0,value:d})}}function z(b){function d(h){return b.next(h)}function e(h){return b.throw(h)}return new Promise(function(h,k){function m(n){n.done?h(n.value):Promise.resolve(n.value).then(d,e).then(m,k)}m(b.next())})}y("globalThis",function(b){return b||w});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function A(b,d){function e(){}e.prototype=d.prototype;b.j=d.prototype;b.prototype=new e;b.prototype.constructor=b;b.h=function(h,k,m){for(var n=Array(arguments.length-2),p=2;p<arguments.length;p++)n[p-2]=arguments[p];return d.prototype[k].apply(h,n)}};function B(b,d,e="*"){function h(a){if(typeof a==="string")return F.encode(a).buffer;if(a instanceof ArrayBuffer)return a.slice(0);if(ArrayBuffer.isView(a))return a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength);throw Error("Invalid data type");}function k(a){a=h(a);var f={type:"send",data:new Uint8Array(a)},g;(g=r)==null||g.postMessage(f,[a])}function m(){if(!r)throw Error("Data port not captured yet.");r.onmessage=a=>{if(a.data.type==="message"){a=new MessageEvent("message",{data:G.decode(a.data.data)});
let f;(f=c.onmessage)==null||f.call(c,a);c.dispatchEvent(a)}}}function n(){if(!t)throw Error("Control port not captured yet.");t.onmessage=a=>{switch(a.data.type){case "open":l=1;var f=new Event("open"),g;(g=c.onopen)==null||g.call(c,f);c.dispatchEvent(f);q.forEach(H=>{k(H)});q=[];break;case "close":g=a.data;l=3;g=new CloseEvent("close",{code:g.code,reason:g.reason,wasClean:g.wasClean});(f=c.onclose)==null||f.call(c,g);c.dispatchEvent(g);break;case "error":l=3;f=new Event("error");let x;(x=c.onerror)==
null||x.call(c,f);c.dispatchEvent(f)}}}function p(a){return z(function*(){var f=new MessageChannel;t=f.port1;var g=new MessageChannel;r=g.port1;n();m();window.parent.postMessage({type:"websocket_open",portOrdering:["control","data"],url:b,protocols:a||[],connectionId:I},e,[f.port2,g.port2])}())}var c=Reflect.construct(EventTarget,[],new.target);c.CONNECTING=0;c.OPEN=1;c.CLOSING=2;c.CLOSED=3;c.url=b;c.binaryType="arraybuffer";c.protocol="";c.i="";var l=0,t=null,r=null,q=[],F=new TextEncoder,G=new TextDecoder;
c.onopen=null;c.onmessage=null;c.onclose=null;c.onerror=null;Object.defineProperty(c,"readyState",{get:()=>l,enumerable:!0,configurable:!0});Object.defineProperty(c,"bufferedAmount",{get:()=>{var a=0;q.forEach(f=>{a+=typeof f==="string"?f.length:f.byteLength});return a},enumerable:!0,configurable:!0});var I=function(){var a;return((a=globalThis.crypto)==null?0:a.randomUUID)?globalThis.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,f=>{var g=Math.random()*16|0;return(f===
"x"?g:g&3|8).toString(16)})}();c.send=a=>{if(l===1)a instanceof Blob?a.arrayBuffer().then(f=>{k(f)}):k(a);else if(l===0)if(typeof a==="string")q.push(a);else if(a instanceof ArrayBuffer||ArrayBuffer.isView(a))q.push(h(a));else throw Error("Sending Blob is not supported before the connection is open.");else console.debug("WebSocket send called in CLOSING or CLOSED state; ignored.")};c.close=(a=1E3,f="")=>{if(l!==2&&l!==3){l=2;a={type:"close",code:a,reason:f,wasClean:a===1E3};var g;(g=t)==null||g.postMessage(a)}};
Promise.resolve().then(()=>p(d));return c}A(B,EventTarget);var C=document.currentScript,D=C==null?void 0:C.getAttribute("ws-interception-config");if(!D)throw Error("WebSocket Interceptor: Missing ws-interception-config attribute in the script tag.");var E=JSON.parse(D);if(!E.parentOrigin||typeof E.parentOrigin!=="string")throw Error("WebSocket Interceptor: Invalid parentOrigin in ws-interception-config");
(function(b){var d=Object.getOwnPropertyDescriptor(window,"WebSocket");if(!d||d.writable||d.configurable)d=Object.assign(function(e,h){try{let k=(new URL(e)).hostname;if(b.proxiedDomains.some(m=>k===m||k.endsWith(`.${m}`)))return new B(e,h,b.parentOrigin)}catch(k){throw window.parent.postMessage({type:"websocket_blocked",url:e,reason:"blocked_invalid_url"},b.parentOrigin),new DOMException(`WebSocket connection to '${e}' is not allowed in Canvas.`,"SecurityError");}window.parent.postMessage({type:"websocket_blocked",
url:e,reason:"blocked_domain_not_allowlisted"},b.parentOrigin);throw new DOMException(`WebSocket connection to '${e}' is not allowed in Canvas.`,"SecurityError");},{CONNECTING:0,OPEN:1,CLOSING:2,CLOSED:3}),Object.defineProperty(window,"WebSocket",{value:d,writable:!1,configurable:!1})})({proxiedDomains:E.proxiedDomains||[],parentOrigin:E.parentOrigin});}).call(this);
</script><script data-bard-client-injected="true">((function(modelInformation) {
  const originalFetch = window.fetch;
  // TODO: b/421908508 - Move these out of the script and match all generative AI model calls.
  let googleLlmBaseApiUrls = [
    'https://generativelanguage.googleapis.com/v1beta/models/' + modelInformation.textModelName + ':streamGenerateContent',
    'https://generativelanguage.googleapis.com/v1beta/models/' + modelInformation.textModelName + ':generateContent',
    'https://generativelanguage.googleapis.com/v1beta/models/' + modelInformation.imageModelName + ':predict',
    'https://generativelanguage.googleapis.com/v1beta/models/' + modelInformation.imageModelName + ':predictLongRunning',
    'https://generativelanguage.googleapis.com/v1beta/models/' + modelInformation.imageEditModelName + ':generateContent',
    'https://generativelanguage.googleapis.com/v1beta/models/' + modelInformation.imageTransformModelName + ':generateContent',
    'https://generativelanguage.googleapis.com/v1beta/models/' + modelInformation.videoModelName + ':predict',
    'https://generativelanguage.googleapis.com/v1beta/models/' + modelInformation.videoModelName + ':predictLongRunning',
    'https://generativelanguage.googleapis.com/v1beta/models/' + modelInformation.ttsModelName + ':generateContent',
  ];
  modelInformation.deprecatedTextModelNames.forEach((modelName) => {
    googleLlmBaseApiUrls.push(
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':streamGenerateContent',
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':generateContent',
    );
  });
  modelInformation.deprecatedImageModelNames.forEach((modelName) => {
    googleLlmBaseApiUrls.push(
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':predict',
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':predictLongRunning',
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':generateContent',
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':streamGenerateContent',
    );
  });
  modelInformation.deprecatedGenerateImageModelNames.forEach((modelName) => {
    googleLlmBaseApiUrls.push(
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':generateContent',
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':streamGenerateContent',
    );
  });
  modelInformation.deprecatedImageTransformModelNames.forEach((modelName) => {
    googleLlmBaseApiUrls.push(
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':generateContent',
      'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':streamGenerateContent',
    );
  });

  const pendingFetchResolvers = {};
  let nextPromiseId = 0;

  function handleStringInput(input, optionsArgument) {
    const actualUrl = input;
    const fetchCallArgs = [actualUrl, optionsArgument];
    const effectiveOptions = optionsArgument || {};
    const bodyForApiKeyCheck = effectiveOptions.body;
    const bodyForPostMessage = effectiveOptions.body;
    return { actualUrl, fetchCallArgs, effectiveOptions, bodyForApiKeyCheck, bodyForPostMessage };
  }

  function handleRequestInput(input, optionsArgument) {
    const actualUrl = input.url;
    const fetchCallArgs = [input, optionsArgument];
    const effectiveOptions = { method: input.method, headers: new Headers(input.headers) };
    let bodyForApiKeyCheck;
    let bodyForPostMessage;

    if (optionsArgument) {
      if (optionsArgument.method) effectiveOptions.method = optionsArgument.method;
      if (optionsArgument.headers) effectiveOptions.headers = new Headers(optionsArgument.headers);
      if ('body' in optionsArgument) {
        bodyForApiKeyCheck = optionsArgument.body;
        bodyForPostMessage = optionsArgument.body;
      } else {
        bodyForApiKeyCheck = undefined;
        bodyForPostMessage = input.body;
      }
    } else {
      bodyForApiKeyCheck = undefined;
      bodyForPostMessage = input.body;
    }
    return { actualUrl, fetchCallArgs, effectiveOptions, bodyForApiKeyCheck, bodyForPostMessage };
  }

  window.fetch = function(input, optionsArgument) {
    let actualUrl;
    let fetchCallArgs;
    let effectiveOptions = {};
    let bodyForApiKeyCheck;
    let bodyForPostMessage;

    if (typeof input === 'string') {
      ({actualUrl, fetchCallArgs, effectiveOptions, bodyForApiKeyCheck, bodyForPostMessage} = handleStringInput(input, optionsArgument));
    } else if (input instanceof Request) {
      ({actualUrl, fetchCallArgs, effectiveOptions, bodyForApiKeyCheck, bodyForPostMessage} = handleRequestInput(input, optionsArgument));
    } else {
      return originalFetch.apply(window, [input, optionsArgument]);
    }

    effectiveOptions.method = effectiveOptions.method || 'GET';
    if (!effectiveOptions.headers) {
      effectiveOptions.headers = new Headers();
    }


    if (typeof actualUrl === 'string' && googleLlmBaseApiUrls.some((url) => actualUrl.startsWith(url))) {
      let apiKeyIsNull = true;

      const regex = new RegExp("models/([^:]+)");
      const modelNameMatch = actualUrl.match(regex);
      const modelName = modelNameMatch ? modelNameMatch[1] : 'unspecified';


      try {
        const urlObject = new URL(actualUrl);  // Use URL object for robust parsing
        const apiKeyParam = urlObject.searchParams.get('key');
        if (apiKeyParam) {
          apiKeyIsNull = false;
        }
      } catch (e) {
        // Continue checks even if URL parsing fails
      }

      if (apiKeyIsNull && effectiveOptions.headers) {
        const h = new Headers(effectiveOptions.headers);
        const apiKeyHeaderValue = h.get('X-API-Key') || h.get('x-api-key');
        if (apiKeyHeaderValue) {
          apiKeyIsNull = false;
          return originalFetch.apply(window, fetchCallArgs);
        }
      }

      if (apiKeyIsNull && effectiveOptions.method && ['POST', 'PUT', 'PATCH'].includes(effectiveOptions.method.toUpperCase()) && typeof bodyForApiKeyCheck === 'string') {
        try {
          const bodyData = JSON.parse(bodyForApiKeyCheck);
          if (bodyData && bodyData.apiKey) {
            apiKeyIsNull = false;
            return originalFetch.apply(window, fetchCallArgs);
          }
        } catch (e) {
          // Ignore JSON parsing errors
        }
      }

      if(apiKeyIsNull) {
        const promiseId = nextPromiseId++;
        const promise = new Promise((resolve) => {
          pendingFetchResolvers[promiseId] = (resolvedResponse) => {
            delete pendingFetchResolvers[promiseId];
            resolve(resolvedResponse);
          };
        });

        let serializedBodyForPostMessage;
        if (typeof bodyForPostMessage === 'string' || bodyForPostMessage == null) {
            serializedBodyForPostMessage = bodyForPostMessage;
        } else if (bodyForPostMessage instanceof ReadableStream) {
            serializedBodyForPostMessage = null;
        } else {
            try {
                serializedBodyForPostMessage = JSON.stringify(bodyForPostMessage);
            } catch (e) {
                serializedBodyForPostMessage = null;
            }
        }

        const messageOptions = {
            method: effectiveOptions.method,
            headers: Object.fromEntries(new Headers(effectiveOptions.headers).entries()),
            body: serializedBodyForPostMessage
        };

        window.parent.postMessage({
          type: 'requestFetch',
          url: actualUrl,
          modelName: modelName,
          options: messageOptions,
          promiseId: promiseId,
        }, '*');

        return promise;
      }
      return originalFetch.apply(window, fetchCallArgs);
    }
    return originalFetch.apply(window, fetchCallArgs);
  };

  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'resolveFetch') {
      const { promiseId, response } = event.data;
      if (pendingFetchResolvers[promiseId]) {
        try {
          const reconstructedResponse = new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: new Headers(response.headers),
          });
          pendingFetchResolvers[promiseId](reconstructedResponse);
        } catch (error) {
          pendingFetchResolvers[promiseId](new Response(null, { status: 500, statusText: "Interceptor Response Reconstruction Error" }));
        }
      }
    }
  });

}))({"textModelName":"gemini-3-flash-preview","imageModelName":"imagen-4.0-generate-001","imageEditModelName":"gemini-3.1-flash-image","imageTransformModelName":"gemini-3-pro-image","videoModelName":"veo-2.0-generate-001","ttsModelName":"gemini-2.5-flash-preview-tts","deprecatedTextModelNames":["gemini-2.0-flash","gemini-2.5-flash","gemini-2.5-flash-preview-04-17","gemini-2.5-flash-preview-05-20","gemini-2.5-flash-preview-09-2025"],"deprecatedImageModelNames":["imagen-3.0-generate-001","imagen-3.0-generate-002"],"deprecatedGenerateImageModelNames":["gemini-2.5-flash-image-preview","gemini-2.5-flash-image","gemini-3.1-flash-image-preview"],"deprecatedImageTransformModelNames":["gemini-3-pro-image-preview-11-2025"]})</script><script data-bard-client-injected="true">(function(){'use strict';function a(){window.parent.postMessage({type:"interaction"},"*")}window.addEventListener("click",a,{capture:!0,passive:!0});window.addEventListener("touchstart",a,{capture:!0,passive:!0});window.addEventListener("keydown",a,{capture:!0,passive:!0});}).call(this);
</script><script data-bard-client-injected="true">(function() {
  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;

    /**
   * Normalizes an error event or a promise rejection reason into a structured error object.
   * @param {*} errorEventOrReason The error object or reason.
   * @return {object} Structured error data { message, name, stack }.
   */
  function getErrorObject(errorEventOrReason) {
    if (errorEventOrReason instanceof Error) {
      return {
        message: errorEventOrReason.message,
        name: errorEventOrReason.name,
        stack: errorEventOrReason.stack,
      };
    }
    // Fallback for non-Error objects.
    try {
      return {
        message: JSON.stringify(errorEventOrReason),
        name: 'UnknownErrorType',
        stack: null,
      };
    } catch (e) {
      return {
        message: String(errorEventOrReason),
        name: 'UnknownErrorTypeNonStringifiable',
        stack: null,
      };
    }
  }

  /**
   * Converts an array of arguments (from log/error) into a single string.
   * Handles Error objects specially to include their message and stack.
   * @param {Array<*>} args - Arguments passed to console methods.
   * @return {string} A string representation of the arguments.
   */
  function stringifyArgs(args) {
    return args
      .map((arg) => {
        if (arg instanceof Error) {
          const {message, stack} = arg;
          return `Error: ${message}${stack ? ('\nStack: ' + stack) : ''}`;
        }
        if (typeof arg === 'object' && arg !== null) {
          try {
            return JSON.stringify(arg);
          } catch (error) {
            return '[Circular Object]';
          }
        } else {
          return String(arg);
        }
      })
      .join(' ');
  }

  console.log = function(...args) {
    const logString = stringifyArgs(args);
    window.parent.postMessage({ type: 'log', message: logString }, '*');
    originalConsoleLog.apply(console, args);
  };

  console.error = function(...args) {
    let errorData;
    if (args.length > 0 && args[0] instanceof Error) {
      const err = args[0];
      // If the first arg is an Error, capture its details.
      errorData = {
        type: 'error',
        source: 'CONSOLE_ERROR',
        ...getErrorObject(err),
        rawArgsString: stringifyArgs(args.slice(1)),
        timestamp: new Date().toISOString(),
      };
    } else {
      // If not an Error object, treat all args as a general error message.
      errorData = {
        type: 'error',
        source: 'CONSOLE_ERROR',
        message: stringifyArgs(args),
        name: 'ConsoleLoggedError',
        stack: null,
        timestamp: new Date().toISOString(),
      };
    }
    window.parent.postMessage(errorData, '*');
    originalConsoleError.apply(console, args);
  };

  // Listen for global unhandled synchronous errors.
  window.addEventListener('error', function(event) {
    const errorDetails = event.error ? getErrorObject(event.error) : {
      message: event.message,
      name: 'GlobalError',
      stack: null,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    };

    window.parent.postMessage({
      type: 'error',
      source: 'global',
      ...errorDetails,
      message: errorDetails.message || event.message,
      timestamp: new Date().toISOString(),
    }, '*');
  });

  // Listen for unhandled promise rejections (asynchronous errors).
  window.addEventListener('unhandledrejection', function(event) {
    const errorDetails = getErrorObject(event.reason);

    window.parent.postMessage({
      type: 'error',
      source: 'unhandledrejection',
      ...errorDetails,
      message: errorDetails.message || 'Unhandled Promise Rejection',
      timestamp: new Date().toISOString(),
    }, '*');
  });

})();</script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบคำนวณแบ่งข้อสอบตามเลขที่ (Exam Memo Assigner)</title>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts (Kanit & Prompt) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&amp;family=Prompt:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
    
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Vue 3 CDN -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js" crossorigin="anonymous"></script>

    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        kanit: ['Kanit', 'sans-serif'],
                        prompt: ['Prompt', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            50: '#f0f5ff',
                            100: '#e0ebff',
                            500: '#3b82f6',
                            600: '#2563eb',
                            700: '#1d4ed8',
                        }
                    }
                }
            }
        }
    </script>

    <style>
        body {
            font-family: 'Kanit', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Custom scrollbars */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.05);
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        .dark ::-webkit-scrollbar-thumb {
            background: #475569;
        }

        /* Print styling optimization */
        @media print {
            .no-print {
                display: none !important;
            }
            .print-only {
                display: block !important;
            }
            body {
                background: white !important;
                color: black !important;
            }
            .card-shadow {
                box-shadow: none !important;
                border: 1px solid #cbd5e1 !important;
            }
        }

        /* Result pulse animation */
        @keyframes highlightPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }
        .animate-highlight {
            animation: highlightPulse 0.35s ease-in-out;
        }
    </style>
<style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.pointer-events-none{pointer-events:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.-bottom-10{bottom:-2.5rem}.-right-10{right:-2.5rem}.bottom-6{bottom:1.5rem}.left-2{left:0.5rem}.left-3{left:0.75rem}.right-2{right:0.5rem}.right-6{right:1.5rem}.top-1\/2{top:50%}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mr-1{margin-right:0.25rem}.mr-2{margin-right:0.5rem}.mt-0\.5{margin-top:0.125rem}.mt-1{margin-top:0.25rem}.mt-12{margin-top:3rem}.mt-4{margin-top:1rem}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-40{height:10rem}.h-8{height:2rem}.h-9{height:2.25rem}.max-h-\[90vh\]{max-height:90vh}.min-h-screen{min-height:100vh}.w-10{width:2.5rem}.w-24{width:6rem}.w-28{width:7rem}.w-40{width:10rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-full{width:100%}.max-w-4xl{max-width:56rem}.max-w-6xl{max-width:72rem}.max-w-xl{max-width:36rem}.flex-1{flex:1 1 0%}.flex-grow{flex-grow:1}.border-collapse{border-collapse:collapse}.-translate-y-1\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.list-disc{list-style-type:disc}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:0.25rem}.gap-1\.5{gap:0.375rem}.gap-2{gap:0.5rem}.gap-2\.5{gap:0.625rem}.gap-3{gap:0.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.space-y-1 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.25rem * var(--tw-space-y-reverse))}.space-y-2 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse))}.space-y-3 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.75rem * var(--tw-space-y-reverse))}.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-8 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.divide-y > :not([hidden]) ~ :not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-slate-100 > :not([hidden]) ~ :not([hidden]){--tw-divide-opacity:1;border-color:rgb(241 245 249 / var(--tw-divide-opacity, 1))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.whitespace-pre-wrap{white-space:pre-wrap}.break-all{word-break:break-all}.rounded{border-radius:0.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:0.5rem}.rounded-md{border-radius:0.375rem}.rounded-xl{border-radius:0.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-amber-200{--tw-border-opacity:1;border-color:rgb(253 230 138 / var(--tw-border-opacity, 1))}.border-indigo-100{--tw-border-opacity:1;border-color:rgb(224 231 255 / var(--tw-border-opacity, 1))}.border-indigo-200{--tw-border-opacity:1;border-color:rgb(199 210 254 / var(--tw-border-opacity, 1))}.border-indigo-400\/30{border-color:rgb(129 140 248 / 0.3)}.border-indigo-500\/20{border-color:rgb(99 102 241 / 0.2)}.border-slate-100{--tw-border-opacity:1;border-color:rgb(241 245 249 / var(--tw-border-opacity, 1))}.border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240 / var(--tw-border-opacity, 1))}.border-slate-300{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity, 1))}.border-slate-700{--tw-border-opacity:1;border-color:rgb(51 65 85 / var(--tw-border-opacity, 1))}.border-white\/20{border-color:rgb(255 255 255 / 0.2)}.border-white\/30{border-color:rgb(255 255 255 / 0.3)}.bg-amber-100\/60{background-color:rgb(254 243 199 / 0.6)}.bg-amber-50{--tw-bg-opacity:1;background-color:rgb(255 251 235 / var(--tw-bg-opacity, 1))}.bg-indigo-100{--tw-bg-opacity:1;background-color:rgb(224 231 255 / var(--tw-bg-opacity, 1))}.bg-indigo-50{--tw-bg-opacity:1;background-color:rgb(238 242 255 / var(--tw-bg-opacity, 1))}.bg-indigo-50\/70{background-color:rgb(238 242 255 / 0.7)}.bg-indigo-500\/10{background-color:rgb(99 102 241 / 0.1)}.bg-indigo-500\/20{background-color:rgb(99 102 241 / 0.2)}.bg-indigo-600{--tw-bg-opacity:1;background-color:rgb(79 70 229 / var(--tw-bg-opacity, 1))}.bg-purple-100{--tw-bg-opacity:1;background-color:rgb(243 232 255 / var(--tw-bg-opacity, 1))}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity, 1))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity, 1))}.bg-slate-50{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity, 1))}.bg-slate-900{--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity, 1))}.bg-slate-900\/80{background-color:rgb(15 23 42 / 0.8)}.bg-slate-950{--tw-bg-opacity:1;background-color:rgb(2 6 23 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-white\/10{background-color:rgb(255 255 255 / 0.1)}.bg-white\/20{background-color:rgb(255 255 255 / 0.2)}.bg-indigo-50\/80{background-color:rgb(238 242 255 / 0.8)}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-indigo-500{--tw-gradient-from:#6366f1 var(--tw-gradient-from-position);--tw-gradient-to:rgb(99 102 241 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-indigo-600{--tw-gradient-from:#4f46e5 var(--tw-gradient-from-position);--tw-gradient-to:rgb(79 70 229 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-indigo-700{--tw-gradient-from:#4338ca var(--tw-gradient-from-position);--tw-gradient-to:rgb(67 56 202 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-slate-900{--tw-gradient-from:#0f172a var(--tw-gradient-from-position);--tw-gradient-to:rgb(15 23 42 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.via-indigo-950{--tw-gradient-to:rgb(30 27 75 / 0)  var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), #1e1b4b var(--tw-gradient-via-position), var(--tw-gradient-to)}.via-purple-600{--tw-gradient-to:rgb(147 51 234 / 0)  var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), #9333ea var(--tw-gradient-via-position), var(--tw-gradient-to)}.to-pink-600{--tw-gradient-to:#db2777 var(--tw-gradient-to-position)}.to-purple-600{--tw-gradient-to:#9333ea var(--tw-gradient-to-position)}.to-slate-900{--tw-gradient-to:#0f172a var(--tw-gradient-to-position)}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.p-1{padding:0.25rem}.p-1\.5{padding:0.375rem}.p-2{padding:0.5rem}.p-2\.5{padding:0.625rem}.p-3{padding:0.75rem}.p-3\.5{padding:0.875rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-12{padding-left:3rem;padding-right:3rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-2\.5{padding-left:0.625rem;padding-right:0.625rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-1\.5{padding-top:0.375rem;padding-bottom:0.375rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-3\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-3{padding-bottom:0.75rem}.pl-4{padding-left:1rem}.pl-8{padding-left:2rem}.pr-3{padding-right:0.75rem}.pt-4{padding-top:1rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}.font-prompt{font-family:Prompt, sans-serif}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-5xl{font-size:3rem;line-height:1}.text-\[10px\]{font-size:10px}.text-\[11px\]{font-size:11px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:0.75rem;line-height:1rem}.font-black{font-weight:900}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-light{font-weight:300}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-relaxed{line-height:1.625}.tracking-tight{letter-spacing:-0.025em}.tracking-wider{letter-spacing:0.05em}.text-amber-500{--tw-text-opacity:1;color:rgb(245 158 11 / var(--tw-text-opacity, 1))}.text-amber-700{--tw-text-opacity:1;color:rgb(180 83 9 / var(--tw-text-opacity, 1))}.text-amber-900{--tw-text-opacity:1;color:rgb(120 53 15 / var(--tw-text-opacity, 1))}.text-blue-200{--tw-text-opacity:1;color:rgb(191 219 254 / var(--tw-text-opacity, 1))}.text-emerald-400{--tw-text-opacity:1;color:rgb(52 211 153 / var(--tw-text-opacity, 1))}.text-green-300{--tw-text-opacity:1;color:rgb(134 239 172 / var(--tw-text-opacity, 1))}.text-green-400{--tw-text-opacity:1;color:rgb(74 222 128 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-indigo-200{--tw-text-opacity:1;color:rgb(199 210 254 / var(--tw-text-opacity, 1))}.text-indigo-300{--tw-text-opacity:1;color:rgb(165 180 252 / var(--tw-text-opacity, 1))}.text-indigo-500{--tw-text-opacity:1;color:rgb(99 102 241 / var(--tw-text-opacity, 1))}.text-indigo-600{--tw-text-opacity:1;color:rgb(79 70 229 / var(--tw-text-opacity, 1))}.text-indigo-700{--tw-text-opacity:1;color:rgb(67 56 202 / var(--tw-text-opacity, 1))}.text-indigo-800{--tw-text-opacity:1;color:rgb(55 48 163 / var(--tw-text-opacity, 1))}.text-indigo-900{--tw-text-opacity:1;color:rgb(49 46 129 / var(--tw-text-opacity, 1))}.text-purple-100{--tw-text-opacity:1;color:rgb(243 232 255 / var(--tw-text-opacity, 1))}.text-purple-200{--tw-text-opacity:1;color:rgb(233 213 255 / var(--tw-text-opacity, 1))}.text-purple-600{--tw-text-opacity:1;color:rgb(147 51 234 / var(--tw-text-opacity, 1))}.text-slate-200{--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity, 1))}.text-slate-300{--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity, 1))}.text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity, 1))}.text-slate-600{--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity, 1))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85 / var(--tw-text-opacity, 1))}.text-slate-800{--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity, 1))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42 / var(--tw-text-opacity, 1))}.text-transparent{color:transparent}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-300{--tw-text-opacity:1;color:rgb(253 224 71 / var(--tw-text-opacity, 1))}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.decoration-indigo-500{-webkit-text-decoration-color:#6366f1;text-decoration-color:#6366f1}.decoration-2{text-decoration-thickness:2px}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.blur-2xl{--tw-blur:blur(40px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-md{--tw-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-colors{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-150{transition-duration:150ms}.duration-300{transition-duration:300ms}.hover\:bg-indigo-50:hover{--tw-bg-opacity:1;background-color:rgb(238 242 255 / var(--tw-bg-opacity, 1))}.hover\:bg-indigo-700:hover{--tw-bg-opacity:1;background-color:rgb(67 56 202 / var(--tw-bg-opacity, 1))}.hover\:bg-slate-200:hover{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity, 1))}.hover\:bg-slate-300:hover{--tw-bg-opacity:1;background-color:rgb(203 213 225 / var(--tw-bg-opacity, 1))}.hover\:bg-white\/20:hover{background-color:rgb(255 255 255 / 0.2)}.hover\:bg-white\/30:hover{background-color:rgb(255 255 255 / 0.3)}.hover\:bg-slate-50\/80:hover{background-color:rgb(248 250 252 / 0.8)}.hover\:from-indigo-600:hover{--tw-gradient-from:#4f46e5 var(--tw-gradient-from-position);--tw-gradient-to:rgb(79 70 229 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.hover\:to-purple-700:hover{--tw-gradient-to:#7e22ce var(--tw-gradient-to-position)}.hover\:text-slate-600:hover{--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity, 1))}.hover\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.hover\:shadow-indigo-500\/30:hover{--tw-shadow-color:rgb(99 102 241 / 0.3);--tw-shadow:var(--tw-shadow-colored)}.focus\:border-indigo-500:focus{--tw-border-opacity:1;border-color:rgb(99 102 241 / var(--tw-border-opacity, 1))}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus\:ring-indigo-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(99 102 241 / var(--tw-ring-opacity, 1))}.active\:scale-95:active{--tw-scale-x:.95;--tw-scale-y:.95;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.active\:bg-indigo-800:active{--tw-bg-opacity:1;background-color:rgb(55 48 163 / var(--tw-bg-opacity, 1))}.dark\:divide-slate-700\/60:is(.dark *) > :not([hidden]) ~ :not([hidden]){border-color:rgb(51 65 85 / 0.6)}.dark\:border-amber-800\/60:is(.dark *){border-color:rgb(146 64 14 / 0.6)}.dark\:border-indigo-800:is(.dark *){--tw-border-opacity:1;border-color:rgb(55 48 163 / var(--tw-border-opacity, 1))}.dark\:border-indigo-900\/60:is(.dark *){border-color:rgb(49 46 129 / 0.6)}.dark\:border-slate-300:is(.dark *){--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity, 1))}.dark\:border-slate-700:is(.dark *){--tw-border-opacity:1;border-color:rgb(51 65 85 / var(--tw-border-opacity, 1))}.dark\:border-slate-800:is(.dark *){--tw-border-opacity:1;border-color:rgb(30 41 59 / var(--tw-border-opacity, 1))}.dark\:bg-amber-900\/50:is(.dark *){background-color:rgb(120 53 15 / 0.5)}.dark\:bg-amber-950\/40:is(.dark *){background-color:rgb(69 26 3 / 0.4)}.dark\:bg-indigo-900\/50:is(.dark *){background-color:rgb(49 46 129 / 0.5)}.dark\:bg-indigo-900\/60:is(.dark *){background-color:rgb(49 46 129 / 0.6)}.dark\:bg-indigo-950\/40:is(.dark *){background-color:rgb(30 27 75 / 0.4)}.dark\:bg-indigo-950\/60:is(.dark *){background-color:rgb(30 27 75 / 0.6)}.dark\:bg-purple-900\/50:is(.dark *){background-color:rgb(88 28 135 / 0.5)}.dark\:bg-slate-100:is(.dark *){--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity, 1))}.dark\:bg-slate-700:is(.dark *){--tw-bg-opacity:1;background-color:rgb(51 65 85 / var(--tw-bg-opacity, 1))}.dark\:bg-slate-800:is(.dark *){--tw-bg-opacity:1;background-color:rgb(30 41 59 / var(--tw-bg-opacity, 1))}.dark\:bg-slate-800\/80:is(.dark *){background-color:rgb(30 41 59 / 0.8)}.dark\:bg-slate-900:is(.dark *){--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity, 1))}.dark\:bg-slate-900\/50:is(.dark *){background-color:rgb(15 23 42 / 0.5)}.dark\:bg-slate-900\/80:is(.dark *){background-color:rgb(15 23 42 / 0.8)}.dark\:bg-indigo-600:is(.dark *){--tw-bg-opacity:1;background-color:rgb(79 70 229 / var(--tw-bg-opacity, 1))}.dark\:from-indigo-400:is(.dark *){--tw-gradient-from:#818cf8 var(--tw-gradient-from-position);--tw-gradient-to:rgb(129 140 248 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.dark\:to-pink-400:is(.dark *){--tw-gradient-to:#f472b6 var(--tw-gradient-to-position)}.dark\:text-amber-200:is(.dark *){--tw-text-opacity:1;color:rgb(253 230 138 / var(--tw-text-opacity, 1))}.dark\:text-amber-300:is(.dark *){--tw-text-opacity:1;color:rgb(252 211 77 / var(--tw-text-opacity, 1))}.dark\:text-green-400:is(.dark *){--tw-text-opacity:1;color:rgb(74 222 128 / var(--tw-text-opacity, 1))}.dark\:text-green-600:is(.dark *){--tw-text-opacity:1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.dark\:text-indigo-200:is(.dark *){--tw-text-opacity:1;color:rgb(199 210 254 / var(--tw-text-opacity, 1))}.dark\:text-indigo-300:is(.dark *){--tw-text-opacity:1;color:rgb(165 180 252 / var(--tw-text-opacity, 1))}.dark\:text-indigo-400:is(.dark *){--tw-text-opacity:1;color:rgb(129 140 248 / var(--tw-text-opacity, 1))}.dark\:text-purple-400:is(.dark *){--tw-text-opacity:1;color:rgb(192 132 252 / var(--tw-text-opacity, 1))}.dark\:text-slate-100:is(.dark *){--tw-text-opacity:1;color:rgb(241 245 249 / var(--tw-text-opacity, 1))}.dark\:text-slate-200:is(.dark *){--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity, 1))}.dark\:text-slate-300:is(.dark *){--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity, 1))}.dark\:text-slate-400:is(.dark *){--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.dark\:text-slate-500:is(.dark *){--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity, 1))}.dark\:text-slate-900:is(.dark *){--tw-text-opacity:1;color:rgb(15 23 42 / var(--tw-text-opacity, 1))}.dark\:text-white:is(.dark *){--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.dark\:hover\:bg-slate-600:hover:is(.dark *){--tw-bg-opacity:1;background-color:rgb(71 85 105 / var(--tw-bg-opacity, 1))}.dark\:hover\:bg-slate-700:hover:is(.dark *){--tw-bg-opacity:1;background-color:rgb(51 65 85 / var(--tw-bg-opacity, 1))}.dark\:hover\:bg-slate-700\/40:hover:is(.dark *){background-color:rgb(51 65 85 / 0.4)}.dark\:hover\:text-slate-200:hover:is(.dark *){--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity, 1))}@media (min-width: 640px){.sm\:inline{display:inline}.sm\:hidden{display:none}.sm\:w-48{width:12rem}.sm\:flex-grow-0{flex-grow:0}.sm\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.sm\:flex-row{flex-direction:row}.sm\:flex-nowrap{flex-wrap:nowrap}.sm\:items-center{align-items:center}.sm\:p-5{padding:1.25rem}.sm\:p-8{padding:2rem}.sm\:py-8{padding-top:2rem;padding-bottom:2rem}.sm\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\:text-6xl{font-size:3.75rem;line-height:1}.sm\:text-base{font-size:1rem;line-height:1.5rem}.sm\:text-sm{font-size:0.875rem;line-height:1.25rem}.sm\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 768px){.md\:col-span-3{grid-column:span 3 / span 3}.md\:w-auto{width:auto}.md\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.md\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.md\:flex-row{flex-direction:row}.md\:items-center{align-items:center}.md\:text-left{text-align:left}}@media (min-width: 1024px){.lg\:col-span-5{grid-column:span 5 / span 5}.lg\:col-span-7{grid-column:span 7 / span 7}.lg\:grid-cols-12{grid-template-columns:repeat(12, minmax(0, 1fr))}.lg\:grid-cols-6{grid-template-columns:repeat(6, minmax(0, 1fr))}}</style></head>
<body class="min-h-screen flex flex-col justify-between">

    <div id="app" :class="{ 'dark': isDarkMode }" class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300" data-v-app=""><!-- HEADER HERO SECTION --><header class="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 text-white shadow-lg no-print"><div class="max-w-6xl mx-auto px-4 py-6 sm:py-8"><!-- TOP BAR: ACTIONS & DARK MODE TOGGLE --><div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/20"><div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-purple-100"><i class="fa-solid fa-graduation-cap"></i> ระบบจัดสรรข้อสอบสำหรับนักเรียน </div><div class="flex items-center gap-2"><!-- COPY HTML CODE BUTTON (HEADER) --><button class="bg-white/20 hover:bg-white/30 active:scale-95 text-white px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md transition flex items-center gap-1.5 border border-white/30" title="คัดลอกโค้ด HTML ทั้งหมดของเว็บนี้ลง Clipboard"><i class="fa-solid fa-code"></i><span class="hidden sm:inline">คัดลอกโค้ด HTML</span><span class="sm:hidden">คัดลอกโค้ด</span></button><!-- VIEW CODE MODAL BUTTON --><button class="bg-white/20 hover:bg-white/30 active:scale-95 text-white px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md transition flex items-center gap-1.5 border border-white/30" title="ดูโค้ด HTML ซอร์สโค้ด"><i class="fa-solid fa-file-code"></i><span class="hidden sm:inline">ดูซอร์สโค้ด</span></button><!-- DARK / LIGHT MODE TOGGLE --><button class="bg-white/20 hover:bg-white/30 text-white p-2 w-8 h-8 rounded-xl text-xs flex items-center justify-center transition border border-white/30" title="เปลี่ยนเป็นโหมดมืด"><i class="fa-moon text-purple-200 fa-solid text-sm"></i></button></div></div><!-- MAIN HEADER TITLE & STATS --><div class="flex flex-col md:flex-row md:items-center justify-between gap-4"><div><h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight font-prompt"> จำข้อสอบข้อไหนดี? <span class="text-yellow-300">(Exam Memo)</span></h1><p class="text-purple-100 mt-1 text-xs sm:text-base font-light max-w-xl"> คำนวณข้อสอบที่ได้รับมอบหมายตามเลขที่ วนลูปเที่ยงธรรม พร้อมส่งออกตารางทั้งห้อง </p></div><!-- QUICK STATS BADGE --><div class="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20"><div class="text-center px-3 border-r border-white/20"><div class="text-[11px] text-purple-200">ข้อสอบทั้งหมด</div><div class="text-lg sm:text-xl font-bold text-yellow-300">30 ข้อ</div></div><div class="text-center px-3 border-r border-white/20"><div class="text-[11px] text-purple-200">จำต่อคน</div><div class="text-lg sm:text-xl font-bold text-green-300">1 ข้อ</div></div><div class="text-center px-3"><div class="text-[11px] text-purple-200">จำนวนนักเรียน</div><div class="text-lg sm:text-xl font-bold text-blue-200">40 คน</div></div></div></div></div></header><main class="max-w-6xl mx-auto px-4 py-8 w-full flex-grow space-y-8"><!-- SECTION 1: CALCULATOR & RESULT DISPLAY --><div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"><!-- INPUT CARD (Left 5 cols) --><div class="lg:col-span-5 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 no-print transition-colors"><div class="flex items-center gap-3 mb-5"><div class="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg font-bold"><i class="fa-solid fa-id-badge"></i></div><div><h2 class="text-lg font-bold text-slate-800 dark:text-slate-100">กรอกเลขที่ของคุณ</h2><p class="text-xs text-slate-500 dark:text-slate-400">ระบุเลขที่เพื่อคำนวณข้อสอบที่ได้รับมอบหมาย</p></div></div><!-- Roll Number Input with Increment/Decrement --><div class="space-y-4"><div><label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"> เลขที่ประจำตัว (Roll Number) </label><div class="relative flex items-center"><button class="absolute left-2 w-10 h-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg flex items-center justify-center font-bold text-lg transition active:scale-95"><i class="fa-solid fa-minus"></i></button><input type="number" min="1" max="40" class="w-full text-center text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 bg-slate-50 dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800 rounded-xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"><button class="absolute right-2 w-10 h-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg flex items-center justify-center font-bold text-lg transition active:scale-95"><i class="fa-solid fa-plus"></i></button></div></div><!-- Quick Select Buttons --><div><div class="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">เลือกเลขที่ด่วน:</div><div class="flex flex-wrap gap-1.5"><button class="bg-indigo-600 text-white font-bold w-9 h-9 rounded-lg text-xs transition duration-150 flex items-center justify-center">1</button><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 w-9 h-9 rounded-lg text-xs transition duration-150 flex items-center justify-center">2</button><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 w-9 h-9 rounded-lg text-xs transition duration-150 flex items-center justify-center">3</button><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 w-9 h-9 rounded-lg text-xs transition duration-150 flex items-center justify-center">4</button><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 w-9 h-9 rounded-lg text-xs transition duration-150 flex items-center justify-center">5</button><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 w-9 h-9 rounded-lg text-xs transition duration-150 flex items-center justify-center">6</button><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 w-9 h-9 rounded-lg text-xs transition duration-150 flex items-center justify-center">7</button><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 w-9 h-9 rounded-lg text-xs transition duration-150 flex items-center justify-center">8</button><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 w-9 h-9 rounded-lg text-xs transition duration-150 flex items-center justify-center">9</button><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 w-9 h-9 rounded-lg text-xs transition duration-150 flex items-center justify-center">10</button></div></div><!-- Dynamic Formula Explanation Box --><div class="mt-4 p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5"><i class="fa-solid fa-lightbulb text-amber-500 text-base mt-0.5"></i><div><span class="font-bold">สูตรการคำนวณ:</span><div class="font-mono text-[11px] mt-0.5 bg-amber-100/60 dark:bg-amber-900/50 px-2 py-1 rounded"> ((เลขที่ - 1) % จำนวนข้อ) + 1 </div><div class="mt-1 text-[11px] text-amber-700 dark:text-amber-300"> แทนค่า: <code>((1 - 1) % 30) + 1 = <strong>ข้อ 1</strong></code></div></div></div></div></div><!-- RESULT DISPLAY CARD (Right 7 cols) --><div class="lg:col-span-7 bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 flex flex-col justify-between relative overflow-hidden transition-colors"><!-- Decorative blur glow --><div class="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div><div><!-- Header badge --><div class="flex items-center justify-between mb-4"><span class="inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold"><i class="fa-solid fa-star text-amber-500"></i> ผลการคำนวณประจำตัว </span><span class="text-xs text-slate-400">คำนวณเรียบร้อย</span></div><!-- Student Roll Display --><div class="text-slate-600 dark:text-slate-300 text-sm font-medium"> สำหรับนักเรียน <span class="text-xl font-bold text-slate-900 dark:text-white underline decoration-indigo-500 decoration-2">เลขที่ 1</span></div><!-- Main Big Result Display --><div class="my-6"><div class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1"> ข้อสอบที่คุณต้องรับผิดชอบจำออกมา: </div><!-- Single Question Result --><div class="flex items-baseline gap-3 flex-wrap"><span class="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400 font-prompt"> ข้อ 1</span><span class="text-slate-500 dark:text-slate-400 text-sm font-normal"> (จากทั้งหมด 30 ข้อ) </span></div></div><!-- Topic notes list if populated --><!--v-if--></div><!-- Action Buttons --><div class="pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-wrap sm:flex-nowrap gap-3 no-print"><button class="flex-1 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-sm transition"><i class="fa-solid fa-copy"></i> คัดลอกผลลัพธ์ (ส่งใน Chat) </button><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition"><i class="fa-solid fa-list-ol"></i> ดูทั้งห้อง </button></div></div></div><!-- SECTION 2: CONFIGURATION PANEL --><div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 no-print transition-colors"><div class="flex items-center justify-between mb-4 cursor-pointer"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center text-lg font-bold"><i class="fa-solid fa-sliders"></i></div><div><h2 class="text-lg font-bold text-slate-800 dark:text-slate-100">ตั้งค่าการแบ่งข้อสอบในห้องเรียน</h2><p class="text-xs text-slate-500 dark:text-slate-400">ปรับจำนวนข้อสอบ จำนวนคน และข้อต่อคน</p></div></div><button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2"><i class="fa-chevron-up fa-solid"></i></button></div><div class="pt-4 border-t border-slate-100 dark:border-slate-700 grid grid-cols-1 md:grid-cols-3 gap-6"><!-- Total Questions --><div><label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"> จำนวนข้อสอบทั้งหมด (ข้อ) </label><input type="number" min="1" max="500" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-slate-800 dark:text-slate-100 font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none"><span class="text-[11px] text-slate-400 mt-1 block">ค่าเริ่มต้น: 30 ข้อ</span></div><!-- Total Students --><div><label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"> จำนวนนักเรียนทั้งหมดในห้อง (คน) </label><input type="number" min="1" max="300" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-slate-800 dark:text-slate-100 font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none"><span class="text-[11px] text-slate-400 mt-1 block">ค่าเริ่มต้น: 40 คน</span></div><!-- Questions per Student --><div><label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"> จำนวนข้อที่จำต่อคน (ข้อ/คน) </label><input type="number" min="1" max="30" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-slate-800 dark:text-slate-100 font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none"><span class="text-[11px] text-slate-400 mt-1 block">กรณีจำคนละมากกว่า 1 ข้อ</span></div><!-- Presets --><div class="md:col-span-3 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-2"><span class="text-xs font-semibold text-slate-600 dark:text-slate-400 mr-2">แม่แบบด่วน:</span><button class="text-xs bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition"> 30 ข้อ / 40 คน (คนละ 1 ข้อ) </button><button class="text-xs bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition"> 20 ข้อ / 30 คน (คนละ 1 ข้อ) </button><button class="text-xs bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition"> 30 ข้อ / 40 คน (คนละ 2 ข้อ) </button></div></div></div><!-- SECTION 3: FULL CLASS OVERVIEW TABLE MATRIX --><div id="class-table-section" class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 transition-colors"><!-- Table Header & Filter Bar --><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"><div><h2 class="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2"><i class="fa-solid fa-table-cells text-indigo-600 dark:text-indigo-400"></i> ตารางสรุปการแบ่งข้อสอบทั้งห้อง </h2><p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5"> แสดงการจัดคู่เลขที่กับข้อสอบสำหรับนักเรียน 40 คน </p></div><!-- Action Toolbar --><div class="flex flex-wrap items-center gap-2 no-print"><!-- Search Box --><div class="relative flex-grow sm:flex-grow-0"><i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i><input type="text" placeholder="ค้นหาเลขที่ หรือ ข้อ..." class="pl-8 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs w-full sm:w-48 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"></div><!-- View Mode Toggle --><div class="bg-slate-100 dark:bg-slate-900 p-1 rounded-xl flex items-center gap-1"><button class="bg-white dark:bg-slate-800 shadow text-indigo-600 dark:text-indigo-400 p-1.5 px-2.5 rounded-lg text-xs font-semibold transition"><i class="fa-solid fa-table"></i> ตาราง </button><button class="text-slate-500 dark:text-slate-400 p-1.5 px-2.5 rounded-lg text-xs font-semibold transition"><i class="fa-solid fa-grip"></i> การ์ด </button></div><!-- Copy Entire Table --><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"><i class="fa-solid fa-share-nodes"></i> คัดลอกสรุป </button><!-- Export CSV --><button class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"><i class="fa-solid fa-file-csv text-green-600 dark:text-green-400"></i> CSV </button><!-- Print --><button class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"><i class="fa-solid fa-print"></i> พิมพ์ / PDF </button></div></div><!-- TABLE VIEW --><div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700"><table class="w-full text-left border-collapse"><thead><tr class="bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 text-xs uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-700"><th class="py-3 px-4 w-24">เลขที่</th><th class="py-3 px-4">ข้อสอบที่ต้องจำ</th><!--v-if--><th class="py-3 px-4 text-right no-print w-28">จัดการ</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-sm"><tr class="bg-indigo-50/80 dark:bg-indigo-950/60 font-semibold transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold bg-indigo-600 text-white dark:bg-indigo-600 dark:text-white">1</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 1</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">2</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 2</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">3</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 3</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">4</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 4</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">5</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 5</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">6</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 6</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">7</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 7</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">8</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 8</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">9</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 9</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">10</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 10</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">11</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 11</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">12</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 12</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">13</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 13</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">14</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 14</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">15</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 15</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">16</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 16</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">17</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 17</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">18</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 18</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">19</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 19</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">20</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 20</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">21</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 21</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">22</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 22</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">23</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 23</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">24</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 24</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">25</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 25</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">26</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 26</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">27</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 27</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">28</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 28</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">29</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 29</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">30</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 30</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">31</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 1</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">32</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 2</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">33</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 3</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">34</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 4</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">35</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 5</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">36</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 6</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">37</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 7</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">38</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 8</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">39</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 9</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><tr class="hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition"><td class="py-3 px-4"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold">40</span></td><td class="py-3 px-4"><div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200"> ข้อ 10</span></div></td><!--v-if--><td class="py-3 px-4 text-right no-print"><button class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"> เลือกเลขที่นี้ </button></td></tr><!--v-if--></tbody></table></div></div><!-- SECTION 4: COPY WEB SOURCE HTML PROMINENT BANNER --><div class="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-indigo-500/20 no-print"><div class="flex flex-col md:flex-row items-center justify-between gap-6"><div class="space-y-2 text-center md:text-left"><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30"><i class="fa-solid fa-code"></i> สำหรับผู้พัฒนา / ครูผู้สอน </span><h3 class="text-xl sm:text-2xl font-bold font-prompt"> อยากได้เว็บแอปแบบนี้ไปใช้งานเอง? </h3><p class="text-xs sm:text-sm text-slate-300 max-w-xl"> คุณสามารถคัดลอกโค้ด HTML ทั้งหมดของเว็บนี้ไปบันทึกเป็นไฟล์ <code>.html</code> แล้วเปิดใช้งานได้ทันทีบนคอมพิวเตอร์หรือมือถือโดยไม่ต้องติดตั้งเซิร์ฟเวอร์ </p></div><div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto"><button class="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-indigo-500/30 transition flex items-center justify-center gap-2 active:scale-95"><i class="fa-solid fa-copy text-lg"></i> คัดลอกโค้ด HTML ของเว็บนี้ </button><button class="bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 px-5 py-3.5 rounded-xl font-medium text-sm transition flex items-center justify-center gap-2"><i class="fa-solid fa-eye"></i> เปิดดูโค้ด HTML </button></div></div></div></main><!-- HTML CODE VIEWER MODAL --><!--v-if--><!-- FOOTER --><footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6 mt-12 no-print text-center text-xs text-slate-500 dark:text-slate-400 transition-colors"><div class="max-w-6xl mx-auto px-4"><p class="mb-1">ระบบจัดจำข้อสอบตามเลขที่นักเรียน (Exam Memo Assigner)</p><p class="text-slate-400 dark:text-slate-500">สร้างด้วย HTML, Tailwind CSS และ Vue 3 | พร้อมปุ่มคัดลอกซอร์สโค้ดในตัว</p></div></footer><!-- TOAST NOTIFICATION --><!--v-if--></div>

    <script>
        const { createApp } = Vue;

        createApp({
            data() {
                return {
                    rollNumber: 1,
                    totalQuestions: 30,
                    totalStudents: 40,
                    questionsPerStudent: 1,
                    searchQuery: '',
                    viewMode: 'table', // 'table' or 'grid'
                    showConfig: true,
                    isDarkMode: false,
                    isUpdated: false,
                    showCodeModal: false,
                    sourceCodeText: '',
                    topics: {},
                    toast: {
                        show: false,
                        message: ''
                    }
                }
            },
            computed: {
                // Returns array of assigned question numbers for current roll
                assignedQuestions() {
                    return this.calculateAssignedQuestions(this.rollNumber);
                },
                // Matrix dataset for all students in class
                allStudentsData() {
                    const list = [];
                    const count = Math.max(1, this.totalStudents || 1);
                    for (let i = 1; i <= count; i++) {
                        list.push({
                            roll: i,
                            questions: this.calculateAssignedQuestions(i)
                        });
                    }
                    return list;
                },
                // Search filter matching roll number or question number
                filteredStudents() {
                    if (!this.searchQuery.trim()) return this.allStudentsData;
                    const query = this.searchQuery.toLowerCase().trim();
                    return this.allStudentsData.filter(item => {
                        const rollMatch = item.roll.toString().includes(query);
                        const qMatch = item.questions.some(q => q.toString().includes(query));
                        return rollMatch || qMatch;
                    });
                },
                hasTopicNotes() {
                    return Object.values(this.topics).some(val => val && val.trim() !== '');
                }
            },
            watch: {
                rollNumber() { this.triggerUpdateAnimation(); },
                totalQuestions() { this.triggerUpdateAnimation(); },
                questionsPerStudent() { this.triggerUpdateAnimation(); }
            },
            mounted() {
                // Check local theme preference
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    this.isDarkMode = true;
                }
            },
            methods: {
                // Core calculation algorithm: ((Roll - 1) * K + i) % TotalQuestions + 1
                calculateAssignedQuestions(roll) {
                    const qCount = Math.max(1, this.totalQuestions || 30);
                    const k = Math.max(1, this.questionsPerStudent || 1);
                    const safeRoll = Math.max(1, roll || 1);

                    const results = [];
                    for (let i = 0; i < k; i++) {
                        const questionIndex = (((safeRoll - 1) * k + i) % qCount) + 1;
                        results.push(questionIndex);
                    }
                    return results;
                },
                incrementRoll() {
                    if (this.rollNumber < this.totalStudents) {
                        this.rollNumber++;
                    }
                },
                decrementRoll() {
                    if (this.rollNumber > 1) {
                        this.rollNumber--;
                    }
                },
                selectRoll(roll) {
                    this.rollNumber = roll;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                },
                applyPreset(questions, students, perStudent) {
                    this.totalQuestions = questions;
                    this.totalStudents = students;
                    this.questionsPerStudent = perStudent;
                    this.showToast('ปรับใช้แม่แบบเรียบร้อยแล้ว');
                },
                toggleDarkMode() {
                    this.isDarkMode = !this.isDarkMode;
                    this.showToast(this.isDarkMode ? 'เปิดใช้งานโหมดมืด (Dark Mode)' : 'เปิดใช้งานโหมดสว่าง (Light Mode)');
                },
                triggerUpdateAnimation() {
                    this.isUpdated = true;
                    setTimeout(() => {
                        this.isUpdated = false;
                    }, 350);
                },
                // Copy individual result text
                copyResultText() {
                    const qText = this.assignedQuestions.map(q => `ข้อ ${q}`).join(', ');
                    let text = `📌 [จำข้อสอบ] เลขที่ ${this.rollNumber} -> ต้องจำ ${qText} (จากทั้งหมด ${this.totalQuestions} ข้อ)`;
                    
                    if (this.hasTopicNotes) {
                        text += `\nหัวข้อ:`;
                        this.assignedQuestions.forEach(q => {
                            if (this.topics[q]) {
                                text += `\n- ข้อ ${q}: ${this.topics[q]}`;
                            }
                        });
                    }

                    this.copyToClipboard(text, 'คัดลอกข้อความผลลัพธ์เรียบร้อยแล้ว!');
                },
                // Copy entire class list
                copyFullListToClipboard() {
                    let text = `📋 [ตารางสรุปแบ่งข้อสอบทั้งห้อง]\nข้อสอบ ${this.totalQuestions} ข้อ | นักเรียน ${this.totalStudents} คน\n-----------------------\n`;
                    this.allStudentsData.forEach(item => {
                        text += `เลขที่ ${item.roll} -> ข้อ ${item.questions.join(', ')}\n`;
                    });
                    this.copyToClipboard(text, 'คัดลอกตารางสรุปทั้งห้องเรียบร้อยแล้ว!');
                },
                // FEATURE: COPY WEB SOURCE HTML CODE
                copySourceCode() {
                    const htmlContent = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
                    this.copyToClipboard(htmlContent, 'คัดลอกโค้ด HTML ของเว็บนี้เรียบร้อยแล้ว!');
                },
                // FEATURE: OPEN CODE MODAL
                openCodeModal() {
                    this.sourceCodeText = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
                    this.showCodeModal = true;
                },
                // Clipboard helper (execCommand fallback for maximum compatibility)
                copyToClipboard(text, successMsg) {
                    const textarea = document.createElement('textarea');
                    textarea.value = text;
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        this.showToast(successMsg);
                    } catch (err) {
                        this.showToast('ไม่สามารถคัดลอกได้');
                    }
                    document.body.removeChild(textarea);
                },
                // Export CSV file download
                exportCSV() {
                    let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // UTF-8 BOM
                    csvContent += "เลขที่,ข้อสอบที่ต้องจำ\n";
                    
                    this.allStudentsData.forEach(item => {
                        csvContent += `"${item.roll}","${item.questions.join(', ')}"\n`;
                    });

                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement("a");
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("download", `exam_memo_assignment_${this.totalQuestions}q_${this.totalStudents}s.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    this.showToast('ส่งออกไฟล์ CSV เรียบร้อยแล้ว!');
                },
                printPage() {
                    window.print();
                },
                scrollToTable() {
                    const el = document.getElementById('class-table-section');
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }
                },
                showToast(msg) {
                    this.toast.message = msg;
                    this.toast.show = true;
                    setTimeout(() => {
                        this.toast.show = false;
                    }, 2800);
                }
            }
        }).mount('#app');
    </script>

</body></html>