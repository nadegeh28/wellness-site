/*! For license information please see blocks.build.js.LICENSE.txt */
(() => {
    var __webpack_modules__ = {
            669: (module, __unused_webpack_exports, __webpack_require__) => {
                module.exports = __webpack_require__(609);
            },
            448: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867),
                    settle = __webpack_require__(26),
                    buildURL = __webpack_require__(327),
                    buildFullPath = __webpack_require__(97),
                    parseHeaders = __webpack_require__(109),
                    isURLSameOrigin = __webpack_require__(985),
                    createError = __webpack_require__(61);
                module.exports = function (config) {
                    return new Promise(function (resolve, reject) {
                        var requestData = config.data,
                            requestHeaders = config.headers;
                        utils.isFormData(requestData) &&
                            delete requestHeaders["Content-Type"];
                        var request = new XMLHttpRequest();
                        if (config.auth) {
                            var username = config.auth.username || "",
                                password = config.auth.password || "";
                            requestHeaders.Authorization =
                                "Basic " + btoa(username + ":" + password);
                        }
                        var fullPath = buildFullPath(
                            config.baseURL,
                            config.url,
                        );
                        if (
                            (request.open(
                                config.method.toUpperCase(),
                                buildURL(
                                    fullPath,
                                    config.params,
                                    config.paramsSerializer,
                                ),
                                !0,
                            ),
                            (request.timeout = config.timeout),
                            (request.onreadystatechange = function () {
                                if (
                                    request &&
                                    4 === request.readyState &&
                                    (0 !== request.status ||
                                        (request.responseURL &&
                                            0 ===
                                                request.responseURL.indexOf(
                                                    "file:",
                                                )))
                                ) {
                                    var responseHeaders =
                                            "getAllResponseHeaders" in request
                                                ? parseHeaders(
                                                      request.getAllResponseHeaders(),
                                                  )
                                                : null,
                                        response = {
                                            data:
                                                config.responseType &&
                                                "text" !== config.responseType
                                                    ? request.response
                                                    : request.responseText,
                                            status: request.status,
                                            statusText: request.statusText,
                                            headers: responseHeaders,
                                            config,
                                            request,
                                        };
                                    settle(resolve, reject, response),
                                        (request = null);
                                }
                            }),
                            (request.onabort = function () {
                                request &&
                                    (reject(
                                        createError(
                                            "Request aborted",
                                            config,
                                            "ECONNABORTED",
                                            request,
                                        ),
                                    ),
                                    (request = null));
                            }),
                            (request.onerror = function () {
                                reject(
                                    createError(
                                        "Network Error",
                                        config,
                                        null,
                                        request,
                                    ),
                                ),
                                    (request = null);
                            }),
                            (request.ontimeout = function () {
                                var timeoutErrorMessage =
                                    "timeout of " +
                                    config.timeout +
                                    "ms exceeded";
                                config.timeoutErrorMessage &&
                                    (timeoutErrorMessage =
                                        config.timeoutErrorMessage),
                                    reject(
                                        createError(
                                            timeoutErrorMessage,
                                            config,
                                            "ECONNABORTED",
                                            request,
                                        ),
                                    ),
                                    (request = null);
                            }),
                            utils.isStandardBrowserEnv())
                        ) {
                            var cookies = __webpack_require__(372),
                                xsrfValue =
                                    (config.withCredentials ||
                                        isURLSameOrigin(fullPath)) &&
                                    config.xsrfCookieName
                                        ? cookies.read(config.xsrfCookieName)
                                        : void 0;
                            xsrfValue &&
                                (requestHeaders[config.xsrfHeaderName] =
                                    xsrfValue);
                        }
                        if (
                            ("setRequestHeader" in request &&
                                utils.forEach(
                                    requestHeaders,
                                    function (val, key) {
                                        void 0 === requestData &&
                                        "content-type" === key.toLowerCase()
                                            ? delete requestHeaders[key]
                                            : request.setRequestHeader(
                                                  key,
                                                  val,
                                              );
                                    },
                                ),
                            utils.isUndefined(config.withCredentials) ||
                                (request.withCredentials =
                                    !!config.withCredentials),
                            config.responseType)
                        )
                            try {
                                request.responseType = config.responseType;
                            } catch (e) {
                                if ("json" !== config.responseType) throw e;
                            }
                        "function" == typeof config.onDownloadProgress &&
                            request.addEventListener(
                                "progress",
                                config.onDownloadProgress,
                            ),
                            "function" == typeof config.onUploadProgress &&
                                request.upload &&
                                request.upload.addEventListener(
                                    "progress",
                                    config.onUploadProgress,
                                ),
                            config.cancelToken &&
                                config.cancelToken.promise.then(
                                    function (cancel) {
                                        request &&
                                            (request.abort(),
                                            reject(cancel),
                                            (request = null));
                                    },
                                ),
                            void 0 === requestData && (requestData = null),
                            request.send(requestData);
                    });
                };
            },
            609: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867),
                    bind = __webpack_require__(849),
                    Axios = __webpack_require__(321),
                    mergeConfig = __webpack_require__(185);
                function createInstance(defaultConfig) {
                    var context = new Axios(defaultConfig),
                        instance = bind(Axios.prototype.request, context);
                    return (
                        utils.extend(instance, Axios.prototype, context),
                        utils.extend(instance, context),
                        instance
                    );
                }
                var axios = createInstance(__webpack_require__(655));
                (axios.Axios = Axios),
                    (axios.create = function (instanceConfig) {
                        return createInstance(
                            mergeConfig(axios.defaults, instanceConfig),
                        );
                    }),
                    (axios.Cancel = __webpack_require__(263)),
                    (axios.CancelToken = __webpack_require__(972)),
                    (axios.isCancel = __webpack_require__(502)),
                    (axios.all = function (promises) {
                        return Promise.all(promises);
                    }),
                    (axios.spread = __webpack_require__(713)),
                    (module.exports = axios),
                    (module.exports.default = axios);
            },
            263: (module) => {
                "use strict";
                function Cancel(message) {
                    this.message = message;
                }
                (Cancel.prototype.toString = function () {
                    return "Cancel" + (this.message ? ": " + this.message : "");
                }),
                    (Cancel.prototype.__CANCEL__ = !0),
                    (module.exports = Cancel);
            },
            972: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var Cancel = __webpack_require__(263);
                function CancelToken(executor) {
                    if ("function" != typeof executor)
                        throw new TypeError("executor must be a function.");
                    var resolvePromise;
                    this.promise = new Promise(function (resolve) {
                        resolvePromise = resolve;
                    });
                    var token = this;
                    executor(function (message) {
                        token.reason ||
                            ((token.reason = new Cancel(message)),
                            resolvePromise(token.reason));
                    });
                }
                (CancelToken.prototype.throwIfRequested = function () {
                    if (this.reason) throw this.reason;
                }),
                    (CancelToken.source = function () {
                        var cancel;
                        return {
                            token: new CancelToken(function (c) {
                                cancel = c;
                            }),
                            cancel,
                        };
                    }),
                    (module.exports = CancelToken);
            },
            502: (module) => {
                "use strict";
                module.exports = function (value) {
                    return !(!value || !value.__CANCEL__);
                };
            },
            321: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867),
                    buildURL = __webpack_require__(327),
                    InterceptorManager = __webpack_require__(782),
                    dispatchRequest = __webpack_require__(572),
                    mergeConfig = __webpack_require__(185);
                function Axios(instanceConfig) {
                    (this.defaults = instanceConfig),
                        (this.interceptors = {
                            request: new InterceptorManager(),
                            response: new InterceptorManager(),
                        });
                }
                (Axios.prototype.request = function (config) {
                    "string" == typeof config
                        ? ((config = arguments[1] || {}).url = arguments[0])
                        : (config = config || {}),
                        (config = mergeConfig(this.defaults, config)).method
                            ? (config.method = config.method.toLowerCase())
                            : this.defaults.method
                            ? (config.method =
                                  this.defaults.method.toLowerCase())
                            : (config.method = "get");
                    var chain = [dispatchRequest, void 0],
                        promise = Promise.resolve(config);
                    for (
                        this.interceptors.request.forEach(
                            function (interceptor) {
                                chain.unshift(
                                    interceptor.fulfilled,
                                    interceptor.rejected,
                                );
                            },
                        ),
                            this.interceptors.response.forEach(
                                function (interceptor) {
                                    chain.push(
                                        interceptor.fulfilled,
                                        interceptor.rejected,
                                    );
                                },
                            );
                        chain.length;

                    )
                        promise = promise.then(chain.shift(), chain.shift());
                    return promise;
                }),
                    (Axios.prototype.getUri = function (config) {
                        return (
                            (config = mergeConfig(this.defaults, config)),
                            buildURL(
                                config.url,
                                config.params,
                                config.paramsSerializer,
                            ).replace(/^\?/, "")
                        );
                    }),
                    utils.forEach(
                        ["delete", "get", "head", "options"],
                        function (method) {
                            Axios.prototype[method] = function (url, config) {
                                return this.request(
                                    utils.merge(config || {}, { method, url }),
                                );
                            };
                        },
                    ),
                    utils.forEach(["post", "put", "patch"], function (method) {
                        Axios.prototype[method] = function (url, data, config) {
                            return this.request(
                                utils.merge(config || {}, {
                                    method,
                                    url,
                                    data,
                                }),
                            );
                        };
                    }),
                    (module.exports = Axios);
            },
            782: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867);
                function InterceptorManager() {
                    this.handlers = [];
                }
                (InterceptorManager.prototype.use = function (
                    fulfilled,
                    rejected,
                ) {
                    return (
                        this.handlers.push({ fulfilled, rejected }),
                        this.handlers.length - 1
                    );
                }),
                    (InterceptorManager.prototype.eject = function (id) {
                        this.handlers[id] && (this.handlers[id] = null);
                    }),
                    (InterceptorManager.prototype.forEach = function (fn) {
                        utils.forEach(this.handlers, function (h) {
                            null !== h && fn(h);
                        });
                    }),
                    (module.exports = InterceptorManager);
            },
            97: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var isAbsoluteURL = __webpack_require__(793),
                    combineURLs = __webpack_require__(303);
                module.exports = function (baseURL, requestedURL) {
                    return baseURL && !isAbsoluteURL(requestedURL)
                        ? combineURLs(baseURL, requestedURL)
                        : requestedURL;
                };
            },
            61: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var enhanceError = __webpack_require__(481);
                module.exports = function (
                    message,
                    config,
                    code,
                    request,
                    response,
                ) {
                    var error = new Error(message);
                    return enhanceError(error, config, code, request, response);
                };
            },
            572: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867),
                    transformData = __webpack_require__(527),
                    isCancel = __webpack_require__(502),
                    defaults = __webpack_require__(655);
                function throwIfCancellationRequested(config) {
                    config.cancelToken && config.cancelToken.throwIfRequested();
                }
                module.exports = function (config) {
                    return (
                        throwIfCancellationRequested(config),
                        (config.headers = config.headers || {}),
                        (config.data = transformData(
                            config.data,
                            config.headers,
                            config.transformRequest,
                        )),
                        (config.headers = utils.merge(
                            config.headers.common || {},
                            config.headers[config.method] || {},
                            config.headers,
                        )),
                        utils.forEach(
                            [
                                "delete",
                                "get",
                                "head",
                                "post",
                                "put",
                                "patch",
                                "common",
                            ],
                            function (method) {
                                delete config.headers[method];
                            },
                        ),
                        (config.adapter || defaults.adapter)(config).then(
                            function (response) {
                                return (
                                    throwIfCancellationRequested(config),
                                    (response.data = transformData(
                                        response.data,
                                        response.headers,
                                        config.transformResponse,
                                    )),
                                    response
                                );
                            },
                            function (reason) {
                                return (
                                    isCancel(reason) ||
                                        (throwIfCancellationRequested(config),
                                        reason &&
                                            reason.response &&
                                            (reason.response.data =
                                                transformData(
                                                    reason.response.data,
                                                    reason.response.headers,
                                                    config.transformResponse,
                                                ))),
                                    Promise.reject(reason)
                                );
                            },
                        )
                    );
                };
            },
            481: (module) => {
                "use strict";
                module.exports = function (
                    error,
                    config,
                    code,
                    request,
                    response,
                ) {
                    return (
                        (error.config = config),
                        code && (error.code = code),
                        (error.request = request),
                        (error.response = response),
                        (error.isAxiosError = !0),
                        (error.toJSON = function () {
                            return {
                                message: this.message,
                                name: this.name,
                                description: this.description,
                                number: this.number,
                                fileName: this.fileName,
                                lineNumber: this.lineNumber,
                                columnNumber: this.columnNumber,
                                stack: this.stack,
                                config: this.config,
                                code: this.code,
                            };
                        }),
                        error
                    );
                };
            },
            185: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867);
                module.exports = function (config1, config2) {
                    config2 = config2 || {};
                    var config = {},
                        valueFromConfig2Keys = [
                            "url",
                            "method",
                            "params",
                            "data",
                        ],
                        mergeDeepPropertiesKeys = ["headers", "auth", "proxy"],
                        defaultToConfig2Keys = [
                            "baseURL",
                            "url",
                            "transformRequest",
                            "transformResponse",
                            "paramsSerializer",
                            "timeout",
                            "withCredentials",
                            "adapter",
                            "responseType",
                            "xsrfCookieName",
                            "xsrfHeaderName",
                            "onUploadProgress",
                            "onDownloadProgress",
                            "maxContentLength",
                            "validateStatus",
                            "maxRedirects",
                            "httpAgent",
                            "httpsAgent",
                            "cancelToken",
                            "socketPath",
                        ];
                    utils.forEach(valueFromConfig2Keys, function (prop) {
                        void 0 !== config2[prop] &&
                            (config[prop] = config2[prop]);
                    }),
                        utils.forEach(mergeDeepPropertiesKeys, function (prop) {
                            utils.isObject(config2[prop])
                                ? (config[prop] = utils.deepMerge(
                                      config1[prop],
                                      config2[prop],
                                  ))
                                : void 0 !== config2[prop]
                                ? (config[prop] = config2[prop])
                                : utils.isObject(config1[prop])
                                ? (config[prop] = utils.deepMerge(
                                      config1[prop],
                                  ))
                                : void 0 !== config1[prop] &&
                                  (config[prop] = config1[prop]);
                        }),
                        utils.forEach(defaultToConfig2Keys, function (prop) {
                            void 0 !== config2[prop]
                                ? (config[prop] = config2[prop])
                                : void 0 !== config1[prop] &&
                                  (config[prop] = config1[prop]);
                        });
                    var axiosKeys = valueFromConfig2Keys
                            .concat(mergeDeepPropertiesKeys)
                            .concat(defaultToConfig2Keys),
                        otherKeys = Object.keys(config2).filter(function (key) {
                            return -1 === axiosKeys.indexOf(key);
                        });
                    return (
                        utils.forEach(otherKeys, function (prop) {
                            void 0 !== config2[prop]
                                ? (config[prop] = config2[prop])
                                : void 0 !== config1[prop] &&
                                  (config[prop] = config1[prop]);
                        }),
                        config
                    );
                };
            },
            26: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var createError = __webpack_require__(61);
                module.exports = function (resolve, reject, response) {
                    var validateStatus = response.config.validateStatus;
                    !validateStatus || validateStatus(response.status)
                        ? resolve(response)
                        : reject(
                              createError(
                                  "Request failed with status code " +
                                      response.status,
                                  response.config,
                                  null,
                                  response.request,
                                  response,
                              ),
                          );
                };
            },
            527: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867);
                module.exports = function (data, headers, fns) {
                    return (
                        utils.forEach(fns, function (fn) {
                            data = fn(data, headers);
                        }),
                        data
                    );
                };
            },
            655: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867),
                    normalizeHeaderName = __webpack_require__(16),
                    DEFAULT_CONTENT_TYPE = {
                        "Content-Type": "application/x-www-form-urlencoded",
                    };
                function setContentTypeIfUnset(headers, value) {
                    !utils.isUndefined(headers) &&
                        utils.isUndefined(headers["Content-Type"]) &&
                        (headers["Content-Type"] = value);
                }
                var adapter,
                    defaults = {
                        adapter:
                            (("undefined" != typeof XMLHttpRequest ||
                                ("undefined" != typeof process &&
                                    "[object process]" ===
                                        Object.prototype.toString.call(
                                            process,
                                        ))) &&
                                (adapter = __webpack_require__(448)),
                            adapter),
                        transformRequest: [
                            function (data, headers) {
                                return (
                                    normalizeHeaderName(headers, "Accept"),
                                    normalizeHeaderName(
                                        headers,
                                        "Content-Type",
                                    ),
                                    utils.isFormData(data) ||
                                    utils.isArrayBuffer(data) ||
                                    utils.isBuffer(data) ||
                                    utils.isStream(data) ||
                                    utils.isFile(data) ||
                                    utils.isBlob(data)
                                        ? data
                                        : utils.isArrayBufferView(data)
                                        ? data.buffer
                                        : utils.isURLSearchParams(data)
                                        ? (setContentTypeIfUnset(
                                              headers,
                                              "application/x-www-form-urlencoded;charset=utf-8",
                                          ),
                                          data.toString())
                                        : utils.isObject(data)
                                        ? (setContentTypeIfUnset(
                                              headers,
                                              "application/json;charset=utf-8",
                                          ),
                                          JSON.stringify(data))
                                        : data
                                );
                            },
                        ],
                        transformResponse: [
                            function (data) {
                                if ("string" == typeof data)
                                    try {
                                        data = JSON.parse(data);
                                    } catch (e) {}
                                return data;
                            },
                        ],
                        timeout: 0,
                        xsrfCookieName: "XSRF-TOKEN",
                        xsrfHeaderName: "X-XSRF-TOKEN",
                        maxContentLength: -1,
                        validateStatus: function (status) {
                            return status >= 200 && status < 300;
                        },
                    };
                (defaults.headers = {
                    common: { Accept: "application/json, text/plain, */*" },
                }),
                    utils.forEach(["delete", "get", "head"], function (method) {
                        defaults.headers[method] = {};
                    }),
                    utils.forEach(["post", "put", "patch"], function (method) {
                        defaults.headers[method] =
                            utils.merge(DEFAULT_CONTENT_TYPE);
                    }),
                    (module.exports = defaults);
            },
            849: (module) => {
                "use strict";
                module.exports = function (fn, thisArg) {
                    return function () {
                        for (
                            var args = new Array(arguments.length), i = 0;
                            i < args.length;
                            i++
                        )
                            args[i] = arguments[i];
                        return fn.apply(thisArg, args);
                    };
                };
            },
            327: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867);
                function encode(val) {
                    return encodeURIComponent(val)
                        .replace(/%40/gi, "@")
                        .replace(/%3A/gi, ":")
                        .replace(/%24/g, "$")
                        .replace(/%2C/gi, ",")
                        .replace(/%20/g, "+")
                        .replace(/%5B/gi, "[")
                        .replace(/%5D/gi, "]");
                }
                module.exports = function (url, params, paramsSerializer) {
                    if (!params) return url;
                    var serializedParams;
                    if (paramsSerializer)
                        serializedParams = paramsSerializer(params);
                    else if (utils.isURLSearchParams(params))
                        serializedParams = params.toString();
                    else {
                        var parts = [];
                        utils.forEach(params, function (val, key) {
                            null != val &&
                                (utils.isArray(val)
                                    ? (key += "[]")
                                    : (val = [val]),
                                utils.forEach(val, function (v) {
                                    utils.isDate(v)
                                        ? (v = v.toISOString())
                                        : utils.isObject(v) &&
                                          (v = JSON.stringify(v)),
                                        parts.push(
                                            encode(key) + "=" + encode(v),
                                        );
                                }));
                        }),
                            (serializedParams = parts.join("&"));
                    }
                    if (serializedParams) {
                        var hashmarkIndex = url.indexOf("#");
                        -1 !== hashmarkIndex &&
                            (url = url.slice(0, hashmarkIndex)),
                            (url +=
                                (-1 === url.indexOf("?") ? "?" : "&") +
                                serializedParams);
                    }
                    return url;
                };
            },
            303: (module) => {
                "use strict";
                module.exports = function (baseURL, relativeURL) {
                    return relativeURL
                        ? baseURL.replace(/\/+$/, "") +
                              "/" +
                              relativeURL.replace(/^\/+/, "")
                        : baseURL;
                };
            },
            372: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867);
                module.exports = utils.isStandardBrowserEnv()
                    ? {
                          write: function (
                              name,
                              value,
                              expires,
                              path,
                              domain,
                              secure,
                          ) {
                              var cookie = [];
                              cookie.push(
                                  name + "=" + encodeURIComponent(value),
                              ),
                                  utils.isNumber(expires) &&
                                      cookie.push(
                                          "expires=" +
                                              new Date(expires).toGMTString(),
                                      ),
                                  utils.isString(path) &&
                                      cookie.push("path=" + path),
                                  utils.isString(domain) &&
                                      cookie.push("domain=" + domain),
                                  !0 === secure && cookie.push("secure"),
                                  (document.cookie = cookie.join("; "));
                          },
                          read: function (name) {
                              var match = document.cookie.match(
                                  new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"),
                              );
                              return match
                                  ? decodeURIComponent(match[3])
                                  : null;
                          },
                          remove: function (name) {
                              this.write(name, "", Date.now() - 864e5);
                          },
                      }
                    : {
                          write: function () {},
                          read: function () {
                              return null;
                          },
                          remove: function () {},
                      };
            },
            793: (module) => {
                "use strict";
                module.exports = function (url) {
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
                };
            },
            985: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867);
                module.exports = utils.isStandardBrowserEnv()
                    ? (function () {
                          var originURL,
                              msie = /(msie|trident)/i.test(
                                  navigator.userAgent,
                              ),
                              urlParsingNode = document.createElement("a");
                          function resolveURL(url) {
                              var href = url;
                              return (
                                  msie &&
                                      (urlParsingNode.setAttribute(
                                          "href",
                                          href,
                                      ),
                                      (href = urlParsingNode.href)),
                                  urlParsingNode.setAttribute("href", href),
                                  {
                                      href: urlParsingNode.href,
                                      protocol: urlParsingNode.protocol
                                          ? urlParsingNode.protocol.replace(
                                                /:$/,
                                                "",
                                            )
                                          : "",
                                      host: urlParsingNode.host,
                                      search: urlParsingNode.search
                                          ? urlParsingNode.search.replace(
                                                /^\?/,
                                                "",
                                            )
                                          : "",
                                      hash: urlParsingNode.hash
                                          ? urlParsingNode.hash.replace(
                                                /^#/,
                                                "",
                                            )
                                          : "",
                                      hostname: urlParsingNode.hostname,
                                      port: urlParsingNode.port,
                                      pathname:
                                          "/" ===
                                          urlParsingNode.pathname.charAt(0)
                                              ? urlParsingNode.pathname
                                              : "/" + urlParsingNode.pathname,
                                  }
                              );
                          }
                          return (
                              (originURL = resolveURL(window.location.href)),
                              function (requestURL) {
                                  var parsed = utils.isString(requestURL)
                                      ? resolveURL(requestURL)
                                      : requestURL;
                                  return (
                                      parsed.protocol === originURL.protocol &&
                                      parsed.host === originURL.host
                                  );
                              }
                          );
                      })()
                    : function () {
                          return !0;
                      };
            },
            16: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867);
                module.exports = function (headers, normalizedName) {
                    utils.forEach(headers, function (value, name) {
                        name !== normalizedName &&
                            name.toUpperCase() ===
                                normalizedName.toUpperCase() &&
                            ((headers[normalizedName] = value),
                            delete headers[name]);
                    });
                };
            },
            109: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var utils = __webpack_require__(867),
                    ignoreDuplicateOf = [
                        "age",
                        "authorization",
                        "content-length",
                        "content-type",
                        "etag",
                        "expires",
                        "from",
                        "host",
                        "if-modified-since",
                        "if-unmodified-since",
                        "last-modified",
                        "location",
                        "max-forwards",
                        "proxy-authorization",
                        "referer",
                        "retry-after",
                        "user-agent",
                    ];
                module.exports = function (headers) {
                    var key,
                        val,
                        i,
                        parsed = {};
                    return headers
                        ? (utils.forEach(headers.split("\n"), function (line) {
                              if (
                                  ((i = line.indexOf(":")),
                                  (key = utils
                                      .trim(line.substr(0, i))
                                      .toLowerCase()),
                                  (val = utils.trim(line.substr(i + 1))),
                                  key)
                              ) {
                                  if (
                                      parsed[key] &&
                                      ignoreDuplicateOf.indexOf(key) >= 0
                                  )
                                      return;
                                  parsed[key] =
                                      "set-cookie" === key
                                          ? (parsed[key]
                                                ? parsed[key]
                                                : []
                                            ).concat([val])
                                          : parsed[key]
                                          ? parsed[key] + ", " + val
                                          : val;
                              }
                          }),
                          parsed)
                        : parsed;
                };
            },
            713: (module) => {
                "use strict";
                module.exports = function (callback) {
                    return function (arr) {
                        return callback.apply(null, arr);
                    };
                };
            },
            867: (module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var bind = __webpack_require__(849),
                    toString = Object.prototype.toString;
                function isArray(val) {
                    return "[object Array]" === toString.call(val);
                }
                function isUndefined(val) {
                    return void 0 === val;
                }
                function isObject(val) {
                    return null !== val && "object" == typeof val;
                }
                function isFunction(val) {
                    return "[object Function]" === toString.call(val);
                }
                function forEach(obj, fn) {
                    if (null != obj)
                        if (
                            ("object" != typeof obj && (obj = [obj]),
                            isArray(obj))
                        )
                            for (var i = 0, l = obj.length; i < l; i++)
                                fn.call(null, obj[i], i, obj);
                        else
                            for (var key in obj)
                                Object.prototype.hasOwnProperty.call(
                                    obj,
                                    key,
                                ) && fn.call(null, obj[key], key, obj);
                }
                module.exports = {
                    isArray,
                    isArrayBuffer: function (val) {
                        return "[object ArrayBuffer]" === toString.call(val);
                    },
                    isBuffer: function (val) {
                        return (
                            null !== val &&
                            !isUndefined(val) &&
                            null !== val.constructor &&
                            !isUndefined(val.constructor) &&
                            "function" == typeof val.constructor.isBuffer &&
                            val.constructor.isBuffer(val)
                        );
                    },
                    isFormData: function (val) {
                        return (
                            "undefined" != typeof FormData &&
                            val instanceof FormData
                        );
                    },
                    isArrayBufferView: function (val) {
                        return "undefined" != typeof ArrayBuffer &&
                            ArrayBuffer.isView
                            ? ArrayBuffer.isView(val)
                            : val &&
                                  val.buffer &&
                                  val.buffer instanceof ArrayBuffer;
                    },
                    isString: function (val) {
                        return "string" == typeof val;
                    },
                    isNumber: function (val) {
                        return "number" == typeof val;
                    },
                    isObject,
                    isUndefined,
                    isDate: function (val) {
                        return "[object Date]" === toString.call(val);
                    },
                    isFile: function (val) {
                        return "[object File]" === toString.call(val);
                    },
                    isBlob: function (val) {
                        return "[object Blob]" === toString.call(val);
                    },
                    isFunction,
                    isStream: function (val) {
                        return isObject(val) && isFunction(val.pipe);
                    },
                    isURLSearchParams: function (val) {
                        return (
                            "undefined" != typeof URLSearchParams &&
                            val instanceof URLSearchParams
                        );
                    },
                    isStandardBrowserEnv: function () {
                        return (
                            ("undefined" == typeof navigator ||
                                ("ReactNative" !== navigator.product &&
                                    "NativeScript" !== navigator.product &&
                                    "NS" !== navigator.product)) &&
                            "undefined" != typeof window &&
                            "undefined" != typeof document
                        );
                    },
                    forEach,
                    merge: function merge() {
                        var result = {};
                        function assignValue(val, key) {
                            "object" == typeof result[key] &&
                            "object" == typeof val
                                ? (result[key] = merge(result[key], val))
                                : (result[key] = val);
                        }
                        for (var i = 0, l = arguments.length; i < l; i++)
                            forEach(arguments[i], assignValue);
                        return result;
                    },
                    deepMerge: function deepMerge() {
                        var result = {};
                        function assignValue(val, key) {
                            "object" == typeof result[key] &&
                            "object" == typeof val
                                ? (result[key] = deepMerge(result[key], val))
                                : (result[key] =
                                      "object" == typeof val
                                          ? deepMerge({}, val)
                                          : val);
                        }
                        for (var i = 0, l = arguments.length; i < l; i++)
                            forEach(arguments[i], assignValue);
                        return result;
                    },
                    extend: function (a, b, thisArg) {
                        return (
                            forEach(b, function (val, key) {
                                a[key] =
                                    thisArg && "function" == typeof val
                                        ? bind(val, thisArg)
                                        : val;
                            }),
                            a
                        );
                    },
                    trim: function (str) {
                        return str.replace(/^\s*/, "").replace(/\s*$/, "");
                    },
                };
            },
            184: (module, exports) => {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                !(function () {
                    "use strict";
                    var hasOwn = {}.hasOwnProperty;
                    function classNames() {
                        for (
                            var classes = [], i = 0;
                            i < arguments.length;
                            i++
                        ) {
                            var arg = arguments[i];
                            if (arg) {
                                var argType = typeof arg;
                                if (
                                    "string" === argType ||
                                    "number" === argType
                                )
                                    classes.push(arg);
                                else if (Array.isArray(arg) && arg.length) {
                                    var inner = classNames.apply(null, arg);
                                    inner && classes.push(inner);
                                } else if ("object" === argType)
                                    for (var key in arg)
                                        hasOwn.call(arg, key) &&
                                            arg[key] &&
                                            classes.push(key);
                            }
                        }
                        return classes.join(" ");
                    }
                    module.exports
                        ? ((classNames.default = classNames),
                          (module.exports = classNames))
                        : void 0 ===
                              (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                                  return classNames;
                              }.apply(exports, [])) ||
                          (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
                })();
            },
            733: () => {},
            169: () => {},
        },
        __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId])
            return __webpack_module_cache__[moduleId].exports;
        var module = (__webpack_module_cache__[moduleId] = { exports: {} });
        return (
            __webpack_modules__[moduleId](
                module,
                module.exports,
                __webpack_require__,
            ),
            module.exports
        );
    }
    (__webpack_require__.n = (module) => {
        var getter =
            module && module.__esModule ? () => module.default : () => module;
        return __webpack_require__.d(getter, { a: getter }), getter;
    }),
        (__webpack_require__.d = (exports, definition) => {
            for (var key in definition)
                __webpack_require__.o(definition, key) &&
                    !__webpack_require__.o(exports, key) &&
                    Object.defineProperty(exports, key, {
                        enumerable: !0,
                        get: definition[key],
                    });
        }),
        (__webpack_require__.o = (obj, prop) =>
            Object.prototype.hasOwnProperty.call(obj, prop)),
        (() => {
            "use strict";
            __webpack_require__(169), __webpack_require__(733);
            var axios = __webpack_require__(669),
                axios_default = __webpack_require__.n(axios),
                classnames = __webpack_require__(184),
                classnames_default = __webpack_require__.n(classnames);
            function _typeof(obj) {
                return (_typeof =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (obj) {
                              return typeof obj;
                          }
                        : function (obj) {
                              return obj &&
                                  "function" == typeof Symbol &&
                                  obj.constructor === Symbol &&
                                  obj !== Symbol.prototype
                                  ? "symbol"
                                  : typeof obj;
                          })(obj);
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor))
                    throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    (descriptor.enumerable = descriptor.enumerable || !1),
                        (descriptor.configurable = !0),
                        "value" in descriptor && (descriptor.writable = !0),
                        Object.defineProperty(
                            target,
                            descriptor.key,
                            descriptor,
                        );
                }
            }
            function _setPrototypeOf(o, p) {
                return (_setPrototypeOf =
                    Object.setPrototypeOf ||
                    function (o, p) {
                        return (o.__proto__ = p), o;
                    })(o, p);
            }
            function _createSuper(Derived) {
                var hasNativeReflectConstruct = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Date.prototype.toString.call(
                                Reflect.construct(Date, [], function () {}),
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var result,
                        Super = _getPrototypeOf(Derived);
                    if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else result = Super.apply(this, arguments);
                    return _possibleConstructorReturn(this, result);
                };
            }
            function _possibleConstructorReturn(self, call) {
                return !call ||
                    ("object" !== _typeof(call) && "function" != typeof call)
                    ? _assertThisInitialized(self)
                    : call;
            }
            function _assertThisInitialized(self) {
                if (void 0 === self)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return self;
            }
            function _getPrototypeOf(o) {
                return (_getPrototypeOf = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (o) {
                          return o.__proto__ || Object.getPrototypeOf(o);
                      })(o);
            }
            function _defineProperty(obj, key, value) {
                return (
                    key in obj
                        ? Object.defineProperty(obj, key, {
                              value,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (obj[key] = value),
                    obj
                );
            }
            var _wp$element = wp.element,
                Component = _wp$element.Component,
                Fragment = _wp$element.Fragment,
                __ = wp.i18n.__,
                _wp$components = wp.components,
                PanelBody = _wp$components.PanelBody,
                Placeholder = _wp$components.Placeholder,
                RangeControl =
                    (_wp$components.QueryControls, _wp$components.RangeControl),
                SelectControl = _wp$components.SelectControl,
                Spinner = _wp$components.Spinner,
                TextControl = _wp$components.TextControl,
                ToggleControl = _wp$components.ToggleControl,
                Button =
                    (_wp$components.Toolbar,
                    _wp$components.withAPIData,
                    _wp$components.ColorPalette,
                    _wp$components.Button),
                _wp$editor = wp.editor,
                InspectorControls = _wp$editor.InspectorControls,
                MediaUpload =
                    (_wp$editor.BlockControls, _wp$editor.MediaUpload),
                RichText = _wp$editor.RichText,
                PanelColorSettings =
                    (_wp$editor.AlignmentToolbar,
                    _wp$editor.PanelColorSettings);
            const profile = (function (_Component) {
                !(function (subClass, superClass) {
                    if ("function" != typeof superClass && null !== superClass)
                        throw new TypeError(
                            "Super expression must either be null or a function",
                        );
                    (subClass.prototype = Object.create(
                        superClass && superClass.prototype,
                        {
                            constructor: {
                                value: subClass,
                                writable: !0,
                                configurable: !0,
                            },
                        },
                    )),
                        superClass && _setPrototypeOf(subClass, superClass);
                })(MPP_Gutenberg_Enhanced, _Component);
                var Constructor,
                    protoProps,
                    staticProps,
                    _super = _createSuper(MPP_Gutenberg_Enhanced);
                function MPP_Gutenberg_Enhanced() {
                    var _this;
                    _classCallCheck(this, MPP_Gutenberg_Enhanced),
                        _defineProperty(
                            _assertThisInitialized(
                                (_this = _super.apply(this, arguments)),
                            ),
                            "get_users",
                            function () {
                                axios_default()
                                    .post(
                                        mpp_gutenberg.rest_url + "/get_users",
                                        {},
                                        {
                                            headers: {
                                                "X-WP-Nonce":
                                                    mpp_gutenberg.nonce,
                                            },
                                        },
                                    )
                                    .then(function (response) {
                                        var _this$setState,
                                            users = Array(),
                                            user_list = Array(),
                                            active_user = 0,
                                            profile_picture = "",
                                            profile_picture_id = 0,
                                            profile_name = "",
                                            profile_description = "",
                                            profile_title = "",
                                            profile_url = "",
                                            show_website = "";
                                        jQuery.each(
                                            response.data,
                                            function (key, value) {
                                                (users[value.ID] = {
                                                    profile_pictures:
                                                        value.profile_pictures,
                                                    has_profile_picture:
                                                        value.has_profile_picture,
                                                    display_name:
                                                        value.display_name,
                                                    description:
                                                        value.description,
                                                    is_user_logged_in:
                                                        value.is_user_logged_in,
                                                    profile_picture_id:
                                                        value.profile_picture_id,
                                                    default_image:
                                                        value.default_image,
                                                    permalink: value.permalink,
                                                }),
                                                    value.is_user_logged_in &&
                                                        (active_user =
                                                            value.ID),
                                                    user_list.push({
                                                        value: value.ID,
                                                        label: value.display_name,
                                                    });
                                            },
                                        ),
                                            0 !==
                                                _this.props.attributes
                                                    .user_id &&
                                                (active_user =
                                                    _this.props.attributes
                                                        .user_id);
                                        var active_user_profile =
                                            users[active_user];
                                        active_user_profile.has_profile_picture
                                            ? ((profile_picture =
                                                  _this.props.attributes
                                                      .profileImgURL.length > 0
                                                      ? _this.props.attributes
                                                            .profileImgURL
                                                      : active_user_profile
                                                            .profile_pictures
                                                            .thumbnail),
                                              (profile_picture_id =
                                                  _this.props.attributes
                                                      .profileImgID.length > 0
                                                      ? _this.props.attributes
                                                            .profileImgID
                                                      : active_user_profile.profile_picture_id),
                                              (profile_name =
                                                  _this.props.attributes
                                                      .profileName.length > 0
                                                      ? _this.props.attributes
                                                            .profileName
                                                      : active_user_profile.display_name),
                                              (profile_title =
                                                  _this.props.attributes
                                                      .profileTitle.length > 0
                                                      ? _this.props.attributes
                                                            .profileTitle
                                                      : ""),
                                              (profile_url =
                                                  active_user_profile.permalink),
                                              (profile_description =
                                                  _this.props.attributes
                                                      .profileContent.length > 0
                                                      ? _this.props.attributes
                                                            .profileContent
                                                      : active_user_profile.description),
                                              (show_website =
                                                  _this.props.attributes
                                                      .showWebsite))
                                            : ((profile_name =
                                                  _this.props.attributes
                                                      .profileName.length > 0
                                                      ? _this.props.attributes
                                                            .profileName
                                                      : active_user_profile.display_name),
                                              (profile_title =
                                                  _this.props.attributes
                                                      .profileTitle.length > 0
                                                      ? _this.props.attributes
                                                            .profileTitle
                                                      : ""),
                                              (profile_description =
                                                  _this.props.attributes
                                                      .profileContent.length > 0
                                                      ? _this.props.attributes
                                                            .profileContent
                                                      : active_user_profile.description),
                                              (profile_picture =
                                                  _this.props.attributes
                                                      .profileImgURL.length > 0
                                                      ? _this.props.attributes
                                                            .profileImgURL
                                                      : active_user_profile.default_image),
                                              (profile_picture_id =
                                                  _this.props.attributes
                                                      .profileImgID.length > 0
                                                      ? _this.props.attributes
                                                            .profileImgID
                                                      : 0),
                                              (profile_url =
                                                  active_user_profile.permalink),
                                              (show_website =
                                                  _this.props.attributes
                                                      .showWebsite)),
                                            null == profile_description &&
                                                (profile_description = ""),
                                            _this.setState(
                                                (_defineProperty(
                                                    (_this$setState = {
                                                        loading: !1,
                                                        users,
                                                        active_user,
                                                        user_list,
                                                        profile_picture,
                                                        profile_picture_id,
                                                    }),
                                                    "active_user",
                                                    active_user,
                                                ),
                                                _defineProperty(
                                                    _this$setState,
                                                    "profile_name",
                                                    profile_name,
                                                ),
                                                _defineProperty(
                                                    _this$setState,
                                                    "profile_name_unfiltered",
                                                    active_user_profile.display_name,
                                                ),
                                                _defineProperty(
                                                    _this$setState,
                                                    "profile_title",
                                                    profile_title,
                                                ),
                                                _defineProperty(
                                                    _this$setState,
                                                    "profile_description",
                                                    profile_description,
                                                ),
                                                _defineProperty(
                                                    _this$setState,
                                                    "profile_url",
                                                    profile_url,
                                                ),
                                                _defineProperty(
                                                    _this$setState,
                                                    "show_website",
                                                    show_website,
                                                ),
                                                _this$setState),
                                            ),
                                            _this.props.setAttributes(
                                                _defineProperty(
                                                    {
                                                        profileContent:
                                                            profile_description,
                                                        profileName:
                                                            profile_name,
                                                        profileTitle:
                                                            profile_title,
                                                        profileURL: profile_url,
                                                        profileImgID:
                                                            profile_picture_id,
                                                        profileImgURL:
                                                            profile_picture,
                                                        showWebsite:
                                                            show_website,
                                                        showSocialMedia: !0,
                                                    },
                                                    "profileName",
                                                    active_user_profile.display_name,
                                                ),
                                            );
                                    });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "on_user_change",
                            function (user_id) {
                                var profile_name,
                                    profile_picture = "",
                                    profile_picture_id = 0;
                                _this.state.users[user_id].has_profile_picture
                                    ? ((profile_picture =
                                          _this.state.users[user_id]
                                              .profile_pictures.thumbnail),
                                      (profile_picture_id =
                                          _this.state.users[user_id]
                                              .profile_picture_id))
                                    : ((profile_picture =
                                          mpp_gutenberg.mystery_man),
                                      (profile_picture_id = 0));
                                var description =
                                    _this.state.users[user_id].description;
                                void 0 === description && (description = ""),
                                    (profile_name =
                                        _this.state.users[user_id]
                                            .display_name),
                                    _this.props.setAttributes(
                                        _defineProperty(
                                            {
                                                profileName: profile_name,
                                                profileContent: description,
                                                profileTitle: "",
                                                profileURL:
                                                    _this.state.users[user_id]
                                                        .permalink,
                                                profileImgURL: profile_picture,
                                                tabbedAuthorSubHeading: "",
                                                tabbedAuthorProfileTitle: "",
                                                socialFacebook: "",
                                                socialGitHub: "",
                                                socialInstagram: "",
                                                socialLinkedIn: "",
                                                socialPinterest: "",
                                                socialTwitter: "",
                                                socialWordPress: "",
                                                socialYouTube: "",
                                            },
                                            "profileName",
                                            _this.state.users[user_id]
                                                .display_name,
                                        ),
                                    ),
                                    _this.setState({
                                        profile_name_unfiltered:
                                            _this.state.users[user_id]
                                                .display_name,
                                        profile_name,
                                        profile_description: description,
                                        profile_title: "",
                                        profile_picture,
                                        profile_picture_id,
                                        active_user: user_id,
                                        profile_url:
                                            _this.state.users[user_id]
                                                .permalink,
                                        socialFacebook: "",
                                        socialGitHub: "",
                                        socialInstagram: "",
                                        socialLinkedIn: "",
                                        socialPinterest: "",
                                        socialTwitter: "",
                                        socialWordPress: "",
                                        socialYouTube: "",
                                    }),
                                    _this.getLatestPosts();
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "getLatestPosts",
                            function () {
                                _this.setState({ loadingLatestPosts: !0 });
                                _assertThisInitialized(_this);
                                axios_default()
                                    .post(
                                        mpp_gutenberg.rest_url + "/get_posts",
                                        { user_id: _this.state.active_user },
                                        {
                                            headers: {
                                                "X-WP-Nonce":
                                                    mpp_gutenberg.nonce,
                                            },
                                        },
                                    )
                                    .then(function (response) {
                                        var postJSX = response.data.map(
                                            function (data) {
                                                return React.createElement(
                                                    "li",
                                                    { key: data.ID },
                                                    React.createElement(
                                                        "a",
                                                        {
                                                            href: data.permalink,
                                                        },
                                                        data.post_title,
                                                    ),
                                                );
                                            },
                                        );
                                        _this.setState({
                                            loadingLatestPosts: !1,
                                            latestPosts: postJSX,
                                        });
                                    });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "componentDidMount",
                            function () {
                                _this.get_users();
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handleImageChange",
                            function (image_id, image_url) {
                                _this.setState({
                                    profile_picture: image_url,
                                    profile_picture_id: image_id,
                                });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangeName",
                            function (value) {
                                _this.setState({ profile_name: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangeTitle",
                            function (value) {
                                _this.setState({ profile_title: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangeProfileText",
                            function (value) {
                                _this.setState({ profile_description: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onThemeChange",
                            function (value) {
                                _this.setState({ theme: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handleFacebookChange",
                            function (value) {
                                _this.setState({ socialFacebook: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handleYouTubeChange",
                            function (value) {
                                _this.setState({ socialYouTube: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handleGitHubChange",
                            function (value) {
                                _this.setState({ socialGitHub: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handleLinkedInChange",
                            function (value) {
                                _this.setState({ socialLinkedIn: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handleTwitterChange",
                            function (value) {
                                _this.setState({ socialTwitter: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handleWordPressChange",
                            function (value) {
                                _this.setState({ socialWordPress: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handleWebsiteChange",
                            function (value) {
                                _this.setState({ website: value }),
                                    "" !== value &&
                                        _this.props.setAttributes({
                                            showWebsite: !0,
                                        });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handleInstagramChange",
                            function (value) {
                                _this.setState({ socialInstagram: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handlePinterestChange",
                            function (value) {
                                _this.setState({ socialPinterest: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handleSocialMediaChange",
                            function (value) {
                                _this.setState({ showSocialMedia: value }),
                                    _this.props.setAttributes({
                                        showSocialMedia: value,
                                    });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "handleSocialMediaOptionChange",
                            function (value) {
                                _this.setState({ socialMediaOptions: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangeTabbedProfileText",
                            function (value) {
                                _this.setState({ tabbedAuthorProfile: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangeTabbedSubHeading",
                            function (value) {
                                _this.setState({
                                    tabbedAuthorSubHeading: value,
                                });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangeActiveProfileTab",
                            function () {
                                _this.setState({ activeTab: "profile" });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangeActivePostTab",
                            function () {
                                _this.setState({
                                    activeTab: "latest",
                                    loadingLatestPosts: !0,
                                }),
                                    _this.getLatestPosts();
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangetabbedAuthorProfile",
                            function (value) {
                                _this.setState({ tabbedAuthorProfile: value });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangetabbedAuthorProfileHeading",
                            function (value) {
                                _this.setState({
                                    tabbedAuthorProfileHeading: value,
                                });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangetabbedAuthorLatestPosts",
                            function (value) {
                                _this.setState({
                                    tabbedAuthorLatestPosts: value,
                                });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangeProfileTabColor",
                            function (value) {
                                _this.setState({ profileTabColor: value }),
                                    _this.props.setAttributes({
                                        profileTabColor: value,
                                    });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangePostsTabColor",
                            function (value) {
                                _this.setState({ profileTabPostsColor: value }),
                                    _this.props.setAttributes({
                                        profileTabPostsColor: value,
                                    });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangePostsTabHeadlineColor",
                            function (value) {
                                _this.setState({
                                    profileTabHeadlineColor: value,
                                }),
                                    _this.props.setAttributes({
                                        profileTabHeadlineColor: value,
                                    });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangeProfileTabPostColorText",
                            function (value) {
                                _this.setState({
                                    profileTabPostsTextColor: value,
                                }),
                                    _this.props.setAttributes({
                                        profileTabPostsTextColor: value,
                                    });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangeProfileTabHeadlineColorText",
                            function (value) {
                                _this.setState({
                                    profileTabHeadlineTextColor: value,
                                }),
                                    _this.props.setAttributes({
                                        profileTabHeadlineTextColor: value,
                                    });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onChangeProfileTabColorText",
                            function (value) {
                                _this.setState({ profileTabTextColor: value }),
                                    _this.props.setAttributes({
                                        profileTabTextColor: value,
                                    });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onLatestPostsChange",
                            function (value) {
                                _this.setState({
                                    profileLatestPostsOptionsValue: value,
                                });
                            },
                        ),
                        _defineProperty(
                            _assertThisInitialized(_this),
                            "onCompactAlignmentChange",
                            function (value) {
                                _this.setState({
                                    profileCompactAlignment: value,
                                });
                            },
                        );
                    var theme_list = Array();
                    return (
                        theme_list.push({
                            value: "regular",
                            label: __("Regular", "metronet-profile-picture"),
                        }),
                        theme_list.push({
                            value: "profile",
                            label: __("Profile", "metronet-profile-picture"),
                        }),
                        theme_list.push({
                            value: "tabbed",
                            label: __("Tabbed", "metronet-profile-picture"),
                        }),
                        theme_list.push({
                            value: "compact",
                            label: __("Compact", "metronet-profile-picture"),
                        }),
                        (_this.state = {
                            loading: !0,
                            users: !1,
                            user_list: !1,
                            profile_picture:
                                _this.props.attributes.profileImgURL,
                            profile_picture_id:
                                _this.props.attributes.profileImgID,
                            active_user: !1,
                            profile_description: "",
                            profile_name: "",
                            profile_name_unfiltered: "",
                            profile_title: "",
                            show_website: _this.props.attributes.showWebsite,
                            profileViewPosts:
                                _this.props.attributes.profileViewPosts,
                            profileViewWebsite:
                                _this.props.attributes.profileViewWebsite,
                            theme: _this.props.attributes.theme,
                            themes: theme_list,
                            socialFacebook:
                                _this.props.attributes.socialFacebook,
                            socialGitHub: _this.props.attributes.socialGitHub,
                            socialLinkedIn:
                                _this.props.attributes.socialLinkedIn,
                            socialPinterest:
                                _this.props.attributes.socialPinterest,
                            socialTwitter: _this.props.attributes.socialTwitter,
                            socialWordPress:
                                _this.props.attributes.socialWordPress,
                            socialYouTube: _this.props.attributes.socialYouTube,
                            socialInstagram:
                                _this.props.attributes.socialInstagram,
                            website: _this.props.attributes.website,
                            showSocialMedia: !0,
                            socialMediaOptions:
                                _this.props.attributes.socialMediaOptions,
                            socialMediaColors:
                                _this.props.attributes.socialMediaColors,
                            tabbedAuthorProfile:
                                _this.props.attributes.tabbedAuthorProfile,
                            tabbedAuthorLatestPosts:
                                _this.props.attributes.tabbedAuthorLatestPosts,
                            tabbedAuthorSubHeading:
                                _this.props.attributes.tabbedAuthorSubHeading,
                            tabbedAuthorProfileHeading:
                                _this.props.attributes
                                    .tabbedAuthorProfileHeading,
                            activeTab: "profile",
                            loadingLatestPosts: !0,
                            latestPosts: {},
                            profileTabColor:
                                _this.props.attributes.profileTabColor,
                            profileTabHeadlineColor:
                                _this.props.attributes.profileTabHeadlineColor,
                            profileTabPostsColor:
                                _this.props.attributes.profileTabPostsColor,
                            profileTabHeadlineTextColor:
                                _this.props.attributes
                                    .profileTabHeadlineTextColor,
                            profileTabTextColor:
                                _this.props.attributes.profileTabTextColor,
                            profileTabPostsTextColor:
                                _this.props.attributes.profileTabPostsTextColor,
                            profileLatestPostsOptionsValue:
                                _this.props.attributes
                                    .profileLatestPostsOptionsValue,
                            profileCompactAlignment:
                                _this.props.attributes.profileCompactAlignment,
                        }),
                        _this
                    );
                }
                return (
                    (Constructor = MPP_Gutenberg_Enhanced),
                    (protoProps = [
                        {
                            key: "render",
                            value: function () {
                                var _this2 = this,
                                    _this$props = this.props,
                                    _this$props$attribute =
                                        _this$props.attributes,
                                    profileName =
                                        _this$props$attribute.profileName,
                                    profileTitle =
                                        _this$props$attribute.profileTitle,
                                    profileContent =
                                        _this$props$attribute.profileContent,
                                    profileAlignment =
                                        _this$props$attribute.profileAlignment,
                                    profileImgURL =
                                        _this$props$attribute.profileImgURL,
                                    profileImgID =
                                        _this$props$attribute.profileImgID,
                                    profileURL =
                                        _this$props$attribute.profileURL,
                                    profileFontSize =
                                        _this$props$attribute.profileFontSize,
                                    buttonFontSize =
                                        _this$props$attribute.buttonFontSize,
                                    headerFontSize =
                                        _this$props$attribute.headerFontSize,
                                    profileBackgroundColor =
                                        _this$props$attribute.profileBackgroundColor,
                                    profileTextColor =
                                        _this$props$attribute.profileTextColor,
                                    profileAvatarShape =
                                        _this$props$attribute.profileAvatarShape,
                                    profileViewPostsBackgroundColor =
                                        _this$props$attribute.profileViewPostsBackgroundColor,
                                    profileViewPostsTextColor =
                                        _this$props$attribute.profileViewPostsTextColor,
                                    profileViewPosts =
                                        _this$props$attribute.profileViewPosts,
                                    profileViewWebsite =
                                        _this$props$attribute.profileViewWebsite,
                                    showTitle = _this$props$attribute.showTitle,
                                    showName = _this$props$attribute.showName,
                                    showDescription =
                                        _this$props$attribute.showDescription,
                                    showViewPosts =
                                        _this$props$attribute.showViewPosts,
                                    showPostsWidth =
                                        _this$props$attribute.showPostsWidth,
                                    showWebsite =
                                        (_this$props$attribute.showSocialMedia,
                                        _this$props$attribute.showWebsite),
                                    socialMediaColors =
                                        (_this$props$attribute.theme,
                                        _this$props$attribute.theme_list,
                                        _this$props$attribute.socialFacebook,
                                        _this$props$attribute.socialGitHub,
                                        _this$props$attribute.socialLinkedIn,
                                        _this$props$attribute.socialPinterest,
                                        _this$props$attribute.socialTwitter,
                                        _this$props$attribute.socialWordPress,
                                        _this$props$attribute.socialYouTube,
                                        _this$props$attribute.socialMediaColors),
                                    profileWebsiteBackgroundColor =
                                        _this$props$attribute.profileWebsiteBackgroundColor,
                                    profileWebsiteTextColor =
                                        _this$props$attribute.profileWebsiteTextColor,
                                    padding = _this$props$attribute.padding,
                                    border = _this$props$attribute.border,
                                    borderRounded =
                                        _this$props$attribute.borderRounded,
                                    borderColor =
                                        _this$props$attribute.borderColor,
                                    profileLinkColor =
                                        _this$props$attribute.profileLinkColor,
                                    tabbedAuthorProfileTitle =
                                        (_this$props$attribute.tabbedAuthorProfile,
                                        _this$props$attribute.tabbedAuthorSubHeading,
                                        _this$props$attribute.tabbedAuthorProfileTitle),
                                    setAttributes =
                                        (_this$props$attribute.profileLatestPostsOptionsValue,
                                        _this$props.attributes,
                                        _this$props.isSelected,
                                        _this$props.editable,
                                        _this$props.className,
                                        _this$props.setAttributes);
                                this.state.profile_pictures,
                                    (profileImgID =
                                        this.state.profile_picture_id),
                                    (profileImgURL =
                                        this.state.profile_picture),
                                    (profileName = this.state.profile_name),
                                    (profileContent =
                                        this.state.profile_description),
                                    (profileTitle = this.state.profile_title),
                                    (profileURL = this.state.profile_url),
                                    (showPostsWidth =
                                        "" !== this.state.website &&
                                        this.props.attributes.showWebsite
                                            ? ""
                                            : "100%"),
                                    setAttributes({ showPostsWidth });
                                var profileAvatarShapeOptions = [
                                        {
                                            value: "square",
                                            label: __(
                                                "Square",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                        {
                                            value: "round",
                                            label: __(
                                                "Round",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                    ],
                                    profileSocialMediaOptions = [
                                        {
                                            value: "colors",
                                            label: __(
                                                "Brand Colors",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                        {
                                            value: "custom",
                                            label: __(
                                                "Custom",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                    ],
                                    profileLatestPostsOptions = [
                                        {
                                            value: "none",
                                            label: __(
                                                "None",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                        {
                                            value: "white",
                                            label: __(
                                                "White",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                        {
                                            value: "light",
                                            label: __(
                                                "Light",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                        {
                                            value: "black",
                                            label: __(
                                                "Black",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                        {
                                            value: "magenta",
                                            label: __(
                                                "Magenta",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                        {
                                            value: "blue",
                                            label: __(
                                                "Blue",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                        {
                                            value: "green",
                                            label: __(
                                                "Green",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                    ],
                                    profileCompactOptions = [
                                        {
                                            value: "left",
                                            label: __(
                                                "Left",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                        {
                                            value: "center",
                                            label: __(
                                                "Center",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                        {
                                            value: "right",
                                            label: __(
                                                "Right",
                                                "metronet-profile-picture",
                                            ),
                                        },
                                    ],
                                    profileFloat = "none",
                                    profileMargin = "";
                                return (
                                    "center" ===
                                        this.state.profileCompactAlignment &&
                                        ((profileFloat = "none"),
                                        (profileMargin = "0 auto")),
                                    "left" ===
                                        this.state.profileCompactAlignment &&
                                        ((profileFloat = "left"),
                                        (profileMargin = "0")),
                                    "right" ===
                                        this.state.profileCompactAlignment &&
                                        ((profileFloat = "right"),
                                        (profileMargin = "0")),
                                    React.createElement(
                                        Fragment,
                                        null,
                                        this.state.loading &&
                                            React.createElement(
                                                Fragment,
                                                null,
                                                React.createElement(
                                                    Placeholder,
                                                    null,
                                                    React.createElement(
                                                        "div",
                                                        null,
                                                        React.createElement(
                                                            "svg",
                                                            {
                                                                id: "Layer_1",
                                                                "data-name":
                                                                    "Layer 1",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "125px",
                                                                height: "125px",
                                                                viewBox:
                                                                    "0 0 753.53 979.74",
                                                            },
                                                            React.createElement(
                                                                "title",
                                                                null,
                                                                "upp",
                                                            ),
                                                            React.createElement(
                                                                "path",
                                                                {
                                                                    d: "M806.37,185.9c0,40.27-30.49,72.9-68.11,72.9s-68.17-32.63-68.17-72.9S700.62,113,738.26,113,806.37,145.64,806.37,185.9Z",
                                                                    transform:
                                                                        "translate(-123.47 -11)",
                                                                    fill: "#4063ad",
                                                                },
                                                            ),
                                                            React.createElement(
                                                                "path",
                                                                {
                                                                    d: "M330.36,183.8c0,40.27-30.49,72.9-68.12,72.9s-68.17-32.63-68.17-72.9,30.52-72.87,68.17-72.87S330.36,143.56,330.36,183.8Z",
                                                                    transform:
                                                                        "translate(-123.47 -11)",
                                                                    fill: "#a34d9c",
                                                                },
                                                            ),
                                                            React.createElement(
                                                                "path",
                                                                {
                                                                    d: "M331.3,888.13V698.21H329c-31.64,0-57.28-27.45-57.28-61.29V336.5a118.37,118.37,0,0,1,5.43-34.79H179.84c-31.94,0-56.37,31.57-56.37,56.34V601.46h48.32V888.13Z",
                                                                    transform:
                                                                        "translate(-123.47 -11)",
                                                                    fill: "#a34d9c",
                                                                },
                                                            ),
                                                            React.createElement(
                                                                "path",
                                                                {
                                                                    d: "M388.59,636.92V990.74H611.88V636.92H671.5V336.5c0-30.63-27.64-69.57-69.6-69.57H398.56c-39.44,0-69.61,38.94-69.61,69.57V636.92Z",
                                                                    transform:
                                                                        "translate(-123.47 -11)",
                                                                    fill: "#f4831f",
                                                                },
                                                            ),
                                                            React.createElement(
                                                                "path",
                                                                {
                                                                    d: "M584.3,101c0,49.69-37.63,90-84,90S416.12,150.67,416.12,101s37.66-90,84.14-90S584.3,51.27,584.3,101Z",
                                                                    transform:
                                                                        "translate(-123.47 -11)",
                                                                    fill: "#f4831f",
                                                                },
                                                            ),
                                                            React.createElement(
                                                                "path",
                                                                {
                                                                    d: "M820.61,303.79H724.08a121.69,121.69,0,0,1,4.7,32.71V636.92c0,33.84-25.64,61.29-57.28,61.29h-2.33v192H828.7V603.54H877V360.16C877,335.36,854.62,303.79,820.61,303.79Z",
                                                                    transform:
                                                                        "translate(-123.47 -11)",
                                                                    fill: "#4063ad",
                                                                },
                                                            ),
                                                        ),
                                                        React.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mpp-spinner",
                                                            },
                                                            React.createElement(
                                                                Spinner,
                                                                null,
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        !this.state.loading &&
                                            React.createElement(
                                                Fragment,
                                                null,
                                                React.createElement(
                                                    InspectorControls,
                                                    null,
                                                    React.createElement(
                                                        PanelBody,
                                                        {
                                                            title: __(
                                                                "User Profile Settings",
                                                                "metronet-profile-picture",
                                                            ),
                                                        },
                                                        React.createElement(
                                                            SelectControl,
                                                            {
                                                                label: __(
                                                                    "Select a user",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: this
                                                                    .state
                                                                    .active_user,
                                                                options:
                                                                    this.state
                                                                        .user_list,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        _this2.on_user_change(
                                                                            value,
                                                                        ),
                                                                            setAttributes(
                                                                                {
                                                                                    user_id:
                                                                                        Number(
                                                                                            value,
                                                                                        ),
                                                                                },
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                        React.createElement(
                                                            SelectControl,
                                                            {
                                                                label: __(
                                                                    "Select a theme",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: this
                                                                    .state
                                                                    .theme,
                                                                options:
                                                                    this.state
                                                                        .themes,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        _this2.onThemeChange(
                                                                            value,
                                                                        ),
                                                                            setAttributes(
                                                                                {
                                                                                    theme: value,
                                                                                },
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                        "compact" ===
                                                            this.state.theme &&
                                                            React.createElement(
                                                                SelectControl,
                                                                {
                                                                    label: __(
                                                                        "Select an alignment",
                                                                        "metronet-profile-picture",
                                                                    ),
                                                                    value: this
                                                                        .state
                                                                        .profileCompactAlignment,
                                                                    options:
                                                                        profileCompactOptions,
                                                                    onChange:
                                                                        function (
                                                                            value,
                                                                        ) {
                                                                            _this2.onCompactAlignmentChange(
                                                                                value,
                                                                            ),
                                                                                setAttributes(
                                                                                    {
                                                                                        profileCompactAlignment:
                                                                                            value,
                                                                                    },
                                                                                );
                                                                        },
                                                                },
                                                            ),
                                                        React.createElement(
                                                            SelectControl,
                                                            {
                                                                label: __(
                                                                    "Avatar Shape",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                description: __(
                                                                    "Choose between a round or square avatar shape.",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                options:
                                                                    profileAvatarShapeOptions,
                                                                value: profileAvatarShape,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        return _this2.props.setAttributes(
                                                                            {
                                                                                profileAvatarShape:
                                                                                    value,
                                                                            },
                                                                        );
                                                                    },
                                                            },
                                                        ),
                                                        "tabbed" !==
                                                            this.state.theme &&
                                                            React.createElement(
                                                                TextControl,
                                                                {
                                                                    label: __(
                                                                        "Website",
                                                                        "metronet-profile-picture",
                                                                    ),
                                                                    value: this
                                                                        .state
                                                                        .website,
                                                                    onChange:
                                                                        function (
                                                                            value,
                                                                        ) {
                                                                            _this2.props.setAttributes(
                                                                                {
                                                                                    website:
                                                                                        value,
                                                                                },
                                                                            ),
                                                                                _this2.handleWebsiteChange(
                                                                                    value,
                                                                                );
                                                                        },
                                                                },
                                                            ),
                                                        React.createElement(
                                                            ToggleControl,
                                                            {
                                                                label: __(
                                                                    "Show Name",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                checked:
                                                                    showName,
                                                                onChange:
                                                                    function () {
                                                                        return _this2.props.setAttributes(
                                                                            {
                                                                                showName:
                                                                                    !showName,
                                                                            },
                                                                        );
                                                                    },
                                                            },
                                                        ),
                                                        React.createElement(
                                                            ToggleControl,
                                                            {
                                                                label: __(
                                                                    "Show Title",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                checked:
                                                                    showTitle,
                                                                onChange:
                                                                    function () {
                                                                        return _this2.props.setAttributes(
                                                                            {
                                                                                showTitle:
                                                                                    !showTitle,
                                                                            },
                                                                        );
                                                                    },
                                                            },
                                                        ),
                                                        React.createElement(
                                                            ToggleControl,
                                                            {
                                                                label: __(
                                                                    "Show Description",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                checked:
                                                                    showDescription,
                                                                onChange:
                                                                    function () {
                                                                        return _this2.props.setAttributes(
                                                                            {
                                                                                showDescription:
                                                                                    !showDescription,
                                                                            },
                                                                        );
                                                                    },
                                                            },
                                                        ),
                                                        "tabbed" !==
                                                            this.state.theme &&
                                                            React.createElement(
                                                                Fragment,
                                                                null,
                                                                React.createElement(
                                                                    ToggleControl,
                                                                    {
                                                                        label: __(
                                                                            "Show View Posts",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        checked:
                                                                            showViewPosts,
                                                                        onChange:
                                                                            function () {
                                                                                return _this2.props.setAttributes(
                                                                                    {
                                                                                        showViewPosts:
                                                                                            !showViewPosts,
                                                                                    },
                                                                                );
                                                                            },
                                                                    },
                                                                ),
                                                                showViewPosts &&
                                                                    React.createElement(
                                                                        TextControl,
                                                                        {
                                                                            label: __(
                                                                                "View Posts Text",
                                                                                "metronet-profile-picture",
                                                                            ),
                                                                            value: profileViewPosts,
                                                                            onChange:
                                                                                function (
                                                                                    value,
                                                                                ) {
                                                                                    _this2.props.setAttributes(
                                                                                        {
                                                                                            profileViewPosts:
                                                                                                value,
                                                                                        },
                                                                                    );
                                                                                },
                                                                        },
                                                                    ),
                                                                React.createElement(
                                                                    ToggleControl,
                                                                    {
                                                                        label: __(
                                                                            "Show Website",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        checked:
                                                                            this
                                                                                .state
                                                                                .show_website,
                                                                        onChange:
                                                                            function (
                                                                                value,
                                                                            ) {
                                                                                _this2.props.setAttributes(
                                                                                    {
                                                                                        showWebsite:
                                                                                            value,
                                                                                    },
                                                                                ),
                                                                                    _this2.setState(
                                                                                        {
                                                                                            show_website:
                                                                                                value,
                                                                                        },
                                                                                    );
                                                                            },
                                                                    },
                                                                ),
                                                                this.state
                                                                    .show_website &&
                                                                    React.createElement(
                                                                        TextControl,
                                                                        {
                                                                            label: __(
                                                                                "View Website Text",
                                                                                "metronet-profile-picture",
                                                                            ),
                                                                            value: profileViewWebsite,
                                                                            onChange:
                                                                                function (
                                                                                    value,
                                                                                ) {
                                                                                    _this2.props.setAttributes(
                                                                                        {
                                                                                            profileViewWebsite:
                                                                                                value,
                                                                                        },
                                                                                    );
                                                                                },
                                                                        },
                                                                    ),
                                                            ),
                                                        React.createElement(
                                                            ToggleControl,
                                                            {
                                                                label: __(
                                                                    "Show Social Media",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                checked:
                                                                    this.state
                                                                        .showSocialMedia,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        _this2.props.setAttributes(
                                                                            {
                                                                                showSocialMedia:
                                                                                    value,
                                                                            },
                                                                        ),
                                                                            _this2.handleSocialMediaChange(
                                                                                value,
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                    ),
                                                    "tabbed" ===
                                                        this.state.theme &&
                                                        React.createElement(
                                                            PanelBody,
                                                            {
                                                                title: __(
                                                                    "User Profile Settings",
                                                                    "metronet-profile-picture",
                                                                ),
                                                            },
                                                            React.createElement(
                                                                SelectControl,
                                                                {
                                                                    label: __(
                                                                        "Select a theme",
                                                                        "metronet-profile-picture",
                                                                    ),
                                                                    value: this
                                                                        .state
                                                                        .latestPostsTheme,
                                                                    options: {},
                                                                    onChange:
                                                                        function (
                                                                            value,
                                                                        ) {
                                                                            _this2.on_user_change(
                                                                                value,
                                                                            ),
                                                                                setAttributes(
                                                                                    {
                                                                                        user_id:
                                                                                            Number(
                                                                                                value,
                                                                                            ),
                                                                                    },
                                                                                );
                                                                        },
                                                                },
                                                            ),
                                                        ),
                                                    React.createElement(
                                                        PanelBody,
                                                        {
                                                            title: __(
                                                                "Colors",
                                                                "metronet-profile-picture",
                                                            ),
                                                            initialOpen: !1,
                                                        },
                                                        React.createElement(
                                                            PanelColorSettings,
                                                            {
                                                                title: __(
                                                                    "Background Color",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                initialOpen: !1,
                                                                colorSettings: [
                                                                    {
                                                                        value: profileBackgroundColor,
                                                                        onChange:
                                                                            function (
                                                                                value,
                                                                            ) {
                                                                                return setAttributes(
                                                                                    {
                                                                                        profileBackgroundColor:
                                                                                            value,
                                                                                    },
                                                                                );
                                                                            },
                                                                        label: __(
                                                                            "Background Color",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                    },
                                                                ],
                                                            },
                                                        ),
                                                        React.createElement(
                                                            PanelColorSettings,
                                                            {
                                                                title: __(
                                                                    "Text Color",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                initialOpen: !1,
                                                                colorSettings: [
                                                                    {
                                                                        value: profileTextColor,
                                                                        onChange:
                                                                            function (
                                                                                value,
                                                                            ) {
                                                                                return setAttributes(
                                                                                    {
                                                                                        profileTextColor:
                                                                                            value,
                                                                                    },
                                                                                );
                                                                            },
                                                                        label: __(
                                                                            "Text Color",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                    },
                                                                ],
                                                            },
                                                        ),
                                                        "profile" ===
                                                            this.state.theme &&
                                                            React.createElement(
                                                                PanelColorSettings,
                                                                {
                                                                    title: __(
                                                                        "Link Color",
                                                                        "metronet-profile-picture",
                                                                    ),
                                                                    initialOpen:
                                                                        !1,
                                                                    colorSettings:
                                                                        [
                                                                            {
                                                                                value: profileLinkColor,
                                                                                onChange:
                                                                                    function (
                                                                                        value,
                                                                                    ) {
                                                                                        return setAttributes(
                                                                                            {
                                                                                                profileLinkColor:
                                                                                                    value,
                                                                                            },
                                                                                        );
                                                                                    },
                                                                                label: __(
                                                                                    "Link Color",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                            },
                                                                        ],
                                                                },
                                                            ),
                                                        "tabbed" ===
                                                            this.state.theme &&
                                                            React.createElement(
                                                                Fragment,
                                                                null,
                                                                React.createElement(
                                                                    PanelColorSettings,
                                                                    {
                                                                        title: __(
                                                                            "Profile Tab Color",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        initialOpen:
                                                                            !1,
                                                                        colorSettings:
                                                                            [
                                                                                {
                                                                                    value: this
                                                                                        .state
                                                                                        .profileTabColor,
                                                                                    onChange:
                                                                                        this
                                                                                            .onChangeProfileTabColor,
                                                                                    label: __(
                                                                                        "Color",
                                                                                        "metronet-profile-picture",
                                                                                    ),
                                                                                },
                                                                            ],
                                                                    },
                                                                ),
                                                                React.createElement(
                                                                    PanelColorSettings,
                                                                    {
                                                                        title: __(
                                                                            "Profile Tab Color Text",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        initialOpen:
                                                                            !1,
                                                                        colorSettings:
                                                                            [
                                                                                {
                                                                                    value: this
                                                                                        .state
                                                                                        .profileTabTextColor,
                                                                                    onChange:
                                                                                        this
                                                                                            .onChangeProfileTabColorText,
                                                                                    label: __(
                                                                                        "Color",
                                                                                        "metronet-profile-picture",
                                                                                    ),
                                                                                },
                                                                            ],
                                                                    },
                                                                ),
                                                                React.createElement(
                                                                    PanelColorSettings,
                                                                    {
                                                                        title: __(
                                                                            "Profile Posts Color",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        initialOpen:
                                                                            !1,
                                                                        colorSettings:
                                                                            [
                                                                                {
                                                                                    value: this
                                                                                        .state
                                                                                        .profileTabPostsColor,
                                                                                    onChange:
                                                                                        this
                                                                                            .onChangePostsTabColor,
                                                                                    label: __(
                                                                                        "Color",
                                                                                        "metronet-profile-picture",
                                                                                    ),
                                                                                },
                                                                            ],
                                                                    },
                                                                ),
                                                                React.createElement(
                                                                    PanelColorSettings,
                                                                    {
                                                                        title: __(
                                                                            "Profile Post Color Text",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        initialOpen:
                                                                            !1,
                                                                        colorSettings:
                                                                            [
                                                                                {
                                                                                    value: this
                                                                                        .state
                                                                                        .profileTabPostsTextColor,
                                                                                    onChange:
                                                                                        this
                                                                                            .onChangeProfileTabPostColorText,
                                                                                    label: __(
                                                                                        "Color",
                                                                                        "metronet-profile-picture",
                                                                                    ),
                                                                                },
                                                                            ],
                                                                    },
                                                                ),
                                                                React.createElement(
                                                                    PanelColorSettings,
                                                                    {
                                                                        title: __(
                                                                            "Profile Headline Color",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        initialOpen:
                                                                            !1,
                                                                        colorSettings:
                                                                            [
                                                                                {
                                                                                    value: this
                                                                                        .state
                                                                                        .profileTabHeadlineColor,
                                                                                    onChange:
                                                                                        this
                                                                                            .onChangePostsTabHeadlineColor,
                                                                                    label: __(
                                                                                        "Color",
                                                                                        "metronet-profile-picture",
                                                                                    ),
                                                                                },
                                                                            ],
                                                                    },
                                                                ),
                                                                React.createElement(
                                                                    PanelColorSettings,
                                                                    {
                                                                        title: __(
                                                                            "Profile Headline Color Text",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        initialOpen:
                                                                            !1,
                                                                        colorSettings:
                                                                            [
                                                                                {
                                                                                    value: this
                                                                                        .state
                                                                                        .profileTabHeadlineColorText,
                                                                                    onChange:
                                                                                        this
                                                                                            .onChangeProfileTabHeadlineColorText,
                                                                                    label: __(
                                                                                        "Color",
                                                                                        "metronet-profile-picture",
                                                                                    ),
                                                                                },
                                                                            ],
                                                                    },
                                                                ),
                                                                React.createElement(
                                                                    SelectControl,
                                                                    {
                                                                        label: __(
                                                                            "Select a Post Theme",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        value: this
                                                                            .state
                                                                            .profileLatestPostsOptionsValue,
                                                                        options:
                                                                            profileLatestPostsOptions,
                                                                        onChange:
                                                                            function (
                                                                                value,
                                                                            ) {
                                                                                _this2.onLatestPostsChange(
                                                                                    value,
                                                                                ),
                                                                                    setAttributes(
                                                                                        {
                                                                                            profileLatestPostsOptionsValue:
                                                                                                value,
                                                                                        },
                                                                                    );
                                                                            },
                                                                    },
                                                                ),
                                                            ),
                                                        "tabbed" !==
                                                            this.state.theme &&
                                                            "profile" !==
                                                                this.state
                                                                    .theme &&
                                                            React.createElement(
                                                                Fragment,
                                                                null,
                                                                React.createElement(
                                                                    PanelColorSettings,
                                                                    {
                                                                        title: __(
                                                                            "View Posts Background Color",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        initialOpen:
                                                                            !1,
                                                                        colorSettings:
                                                                            [
                                                                                {
                                                                                    value: profileViewPostsBackgroundColor,
                                                                                    onChange:
                                                                                        function (
                                                                                            value,
                                                                                        ) {
                                                                                            return setAttributes(
                                                                                                {
                                                                                                    profileViewPostsBackgroundColor:
                                                                                                        value,
                                                                                                },
                                                                                            );
                                                                                        },
                                                                                    label: __(
                                                                                        "View Posts Background",
                                                                                        "metronet-profile-picture",
                                                                                    ),
                                                                                },
                                                                            ],
                                                                    },
                                                                ),
                                                                React.createElement(
                                                                    PanelColorSettings,
                                                                    {
                                                                        title: __(
                                                                            "View Posts Text Color",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        initialOpen:
                                                                            !1,
                                                                        colorSettings:
                                                                            [
                                                                                {
                                                                                    value: profileViewPostsTextColor,
                                                                                    onChange:
                                                                                        function (
                                                                                            value,
                                                                                        ) {
                                                                                            return setAttributes(
                                                                                                {
                                                                                                    profileViewPostsTextColor:
                                                                                                        value,
                                                                                                },
                                                                                            );
                                                                                        },
                                                                                    label: __(
                                                                                        "View Posts Text Color",
                                                                                        "metronet-profile-picture",
                                                                                    ),
                                                                                },
                                                                            ],
                                                                    },
                                                                ),
                                                                React.createElement(
                                                                    PanelColorSettings,
                                                                    {
                                                                        title: __(
                                                                            "Website Background Color",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        initialOpen:
                                                                            !1,
                                                                        colorSettings:
                                                                            [
                                                                                {
                                                                                    value: profileWebsiteBackgroundColor,
                                                                                    onChange:
                                                                                        function (
                                                                                            value,
                                                                                        ) {
                                                                                            return setAttributes(
                                                                                                {
                                                                                                    profileWebsiteBackgroundColor:
                                                                                                        value,
                                                                                                },
                                                                                            );
                                                                                        },
                                                                                    label: __(
                                                                                        "View Website Background",
                                                                                        "metronet-profile-picture",
                                                                                    ),
                                                                                },
                                                                            ],
                                                                    },
                                                                ),
                                                                React.createElement(
                                                                    PanelColorSettings,
                                                                    {
                                                                        title: __(
                                                                            "View Website Text Color",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                        initialOpen:
                                                                            !1,
                                                                        colorSettings:
                                                                            [
                                                                                {
                                                                                    value: profileWebsiteTextColor,
                                                                                    onChange:
                                                                                        function (
                                                                                            value,
                                                                                        ) {
                                                                                            return setAttributes(
                                                                                                {
                                                                                                    profileWebsiteTextColor:
                                                                                                        value,
                                                                                                },
                                                                                            );
                                                                                        },
                                                                                    label: __(
                                                                                        "View Website Text Color",
                                                                                        "metronet-profile-picture",
                                                                                    ),
                                                                                },
                                                                            ],
                                                                    },
                                                                ),
                                                            ),
                                                    ),
                                                    React.createElement(
                                                        PanelBody,
                                                        {
                                                            title: __(
                                                                "Spacing and Font Settings",
                                                                "metronet-profile-picture",
                                                            ),
                                                            initialOpen: !1,
                                                        },
                                                        React.createElement(
                                                            RangeControl,
                                                            {
                                                                label: __(
                                                                    "Header Font Size",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: headerFontSize,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        return _this2.props.setAttributes(
                                                                            {
                                                                                headerFontSize:
                                                                                    value,
                                                                            },
                                                                        );
                                                                    },
                                                                min: 14,
                                                                max: 32,
                                                                step: 1,
                                                            },
                                                        ),
                                                        React.createElement(
                                                            RangeControl,
                                                            {
                                                                label: __(
                                                                    "Font Size",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: profileFontSize,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        return _this2.props.setAttributes(
                                                                            {
                                                                                profileFontSize:
                                                                                    value,
                                                                            },
                                                                        );
                                                                    },
                                                                min: 14,
                                                                max: 24,
                                                                step: 1,
                                                            },
                                                        ),
                                                        "tabbed" !==
                                                            this.state.theme &&
                                                            React.createElement(
                                                                RangeControl,
                                                                {
                                                                    label: __(
                                                                        "Button Size",
                                                                        "metronet-profile-picture",
                                                                    ),
                                                                    value: buttonFontSize,
                                                                    onChange:
                                                                        function (
                                                                            value,
                                                                        ) {
                                                                            return _this2.props.setAttributes(
                                                                                {
                                                                                    buttonFontSize:
                                                                                        value,
                                                                                },
                                                                            );
                                                                        },
                                                                    min: 10,
                                                                    max: 24,
                                                                    step: 1,
                                                                },
                                                            ),
                                                        React.createElement(
                                                            RangeControl,
                                                            {
                                                                label: __(
                                                                    "Padding",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: padding,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        return _this2.props.setAttributes(
                                                                            {
                                                                                padding:
                                                                                    value,
                                                                            },
                                                                        );
                                                                    },
                                                                min: 0,
                                                                max: 60,
                                                                step: 1,
                                                            },
                                                        ),
                                                        React.createElement(
                                                            RangeControl,
                                                            {
                                                                label: __(
                                                                    "Border",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: border,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        return _this2.props.setAttributes(
                                                                            {
                                                                                border: value,
                                                                            },
                                                                        );
                                                                    },
                                                                min: 0,
                                                                max: 10,
                                                                step: 1,
                                                            },
                                                        ),
                                                        React.createElement(
                                                            RangeControl,
                                                            {
                                                                label: __(
                                                                    "Border Rounded",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: borderRounded,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        return _this2.props.setAttributes(
                                                                            {
                                                                                borderRounded:
                                                                                    value,
                                                                            },
                                                                        );
                                                                    },
                                                                min: 0,
                                                                max: 10,
                                                                step: 1,
                                                            },
                                                        ),
                                                        React.createElement(
                                                            PanelColorSettings,
                                                            {
                                                                title: __(
                                                                    "Border Color",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                initialOpen: !1,
                                                                colorSettings: [
                                                                    {
                                                                        value: borderColor,
                                                                        onChange:
                                                                            function (
                                                                                value,
                                                                            ) {
                                                                                return setAttributes(
                                                                                    {
                                                                                        borderColor:
                                                                                            value,
                                                                                    },
                                                                                );
                                                                            },
                                                                        label: __(
                                                                            "Border Color",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                    },
                                                                ],
                                                            },
                                                        ),
                                                    ),
                                                    React.createElement(
                                                        PanelBody,
                                                        {
                                                            title: __(
                                                                "Social Media Settings",
                                                                "metronet-profile-picture",
                                                            ),
                                                            initialOpen: !1,
                                                        },
                                                        React.createElement(
                                                            SelectControl,
                                                            {
                                                                label: __(
                                                                    "Social Media Colors",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: this
                                                                    .state
                                                                    .socialMediaOptions,
                                                                options:
                                                                    profileSocialMediaOptions,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        setAttributes(
                                                                            {
                                                                                socialMediaOptions:
                                                                                    value,
                                                                            },
                                                                        ),
                                                                            _this2.handleSocialMediaOptionChange(
                                                                                value,
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                        "custom" ===
                                                            this.state
                                                                .socialMediaOptions &&
                                                            React.createElement(
                                                                PanelColorSettings,
                                                                {
                                                                    title: __(
                                                                        "Social Media Color",
                                                                        "metronet-profile-picture",
                                                                    ),
                                                                    initialOpen:
                                                                        !1,
                                                                    colorSettings:
                                                                        [
                                                                            {
                                                                                value: socialMediaColors,
                                                                                onChange:
                                                                                    function (
                                                                                        value,
                                                                                    ) {
                                                                                        return setAttributes(
                                                                                            {
                                                                                                socialMediaColors:
                                                                                                    value,
                                                                                            },
                                                                                        );
                                                                                    },
                                                                                label: __(
                                                                                    "Social Media Color",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                            },
                                                                        ],
                                                                },
                                                            ),
                                                        React.createElement(
                                                            TextControl,
                                                            {
                                                                label: __(
                                                                    "Facebook",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: this
                                                                    .state
                                                                    .socialFacebook,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        _this2.props.setAttributes(
                                                                            {
                                                                                socialFacebook:
                                                                                    value,
                                                                            },
                                                                        ),
                                                                            _this2.handleFacebookChange(
                                                                                value,
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                        React.createElement(
                                                            TextControl,
                                                            {
                                                                label: __(
                                                                    "Twitter",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: this
                                                                    .state
                                                                    .socialTwitter,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        _this2.props.setAttributes(
                                                                            {
                                                                                socialTwitter:
                                                                                    value,
                                                                            },
                                                                        ),
                                                                            _this2.handleTwitterChange(
                                                                                value,
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                        React.createElement(
                                                            TextControl,
                                                            {
                                                                label: __(
                                                                    "Instagram",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: this
                                                                    .state
                                                                    .socialInstagram,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        _this2.props.setAttributes(
                                                                            {
                                                                                socialInstagram:
                                                                                    value,
                                                                            },
                                                                        ),
                                                                            _this2.handleInstagramChange(
                                                                                value,
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                        React.createElement(
                                                            TextControl,
                                                            {
                                                                label: __(
                                                                    "LinkedIn",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: this
                                                                    .state
                                                                    .socialLinkedIn,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        _this2.props.setAttributes(
                                                                            {
                                                                                socialLinkedIn:
                                                                                    value,
                                                                            },
                                                                        ),
                                                                            _this2.handleLinkedInChange(
                                                                                value,
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                        React.createElement(
                                                            TextControl,
                                                            {
                                                                label: __(
                                                                    "YouTube",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: this
                                                                    .state
                                                                    .socialYouTube,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        _this2.props.setAttributes(
                                                                            {
                                                                                socialYouTube:
                                                                                    value,
                                                                            },
                                                                        ),
                                                                            _this2.handleYouTubeChange(
                                                                                value,
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                        React.createElement(
                                                            TextControl,
                                                            {
                                                                label: __(
                                                                    "GitHub",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: this
                                                                    .state
                                                                    .socialGitHub,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        _this2.props.setAttributes(
                                                                            {
                                                                                socialGitHub:
                                                                                    value,
                                                                            },
                                                                        ),
                                                                            _this2.handleGitHubChange(
                                                                                value,
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                        React.createElement(
                                                            TextControl,
                                                            {
                                                                label: __(
                                                                    "Pinterest",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: this
                                                                    .state
                                                                    .socialPinterest,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        _this2.props.setAttributes(
                                                                            {
                                                                                socialPinterest:
                                                                                    value,
                                                                            },
                                                                        ),
                                                                            _this2.handlePinterestChange(
                                                                                value,
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                        React.createElement(
                                                            TextControl,
                                                            {
                                                                label: __(
                                                                    "WordPress",
                                                                    "metronet-profile-picture",
                                                                ),
                                                                value: this
                                                                    .state
                                                                    .socialWordPress,
                                                                onChange:
                                                                    function (
                                                                        value,
                                                                    ) {
                                                                        _this2.props.setAttributes(
                                                                            {
                                                                                socialWordPress:
                                                                                    value,
                                                                            },
                                                                        ),
                                                                            _this2.handleWordPressChange(
                                                                                value,
                                                                            );
                                                                    },
                                                            },
                                                        ),
                                                    ),
                                                ),
                                                "tabbed" !== this.state.theme &&
                                                    React.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                classnames_default()(
                                                                    "mpp-enhanced-profile-wrap",
                                                                    this.state
                                                                        .theme,
                                                                    profileAlignment,
                                                                    profileAvatarShape,
                                                                    "mpp-block-profile",
                                                                ),
                                                            style: {
                                                                padding:
                                                                    padding +
                                                                    "px",
                                                                border:
                                                                    border +
                                                                    "px solid " +
                                                                    borderColor,
                                                                borderRadius:
                                                                    borderRounded +
                                                                    "px",
                                                                backgroundColor:
                                                                    profileBackgroundColor,
                                                                color: profileTextColor,
                                                                float: profileFloat,
                                                                margin: profileMargin,
                                                            },
                                                        },
                                                        "regular" ===
                                                            this.state.theme &&
                                                            React.createElement(
                                                                Fragment,
                                                                null,
                                                                React.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            classnames_default()(
                                                                                "mpp-profile-gutenberg-wrap",
                                                                                "mt-font-size-" +
                                                                                    profileFontSize,
                                                                            ),
                                                                    },
                                                                    React.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "mpp-profile-image-wrapper",
                                                                        },
                                                                        React.createElement(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "mpp-profile-image-square",
                                                                            },
                                                                            React.createElement(
                                                                                MediaUpload,
                                                                                {
                                                                                    buttonProps:
                                                                                        {
                                                                                            className:
                                                                                                "change-image",
                                                                                        },
                                                                                    onSelect:
                                                                                        function (
                                                                                            img,
                                                                                        ) {
                                                                                            _this2.handleImageChange(
                                                                                                img.id,
                                                                                                img.url,
                                                                                            ),
                                                                                                setAttributes(
                                                                                                    {
                                                                                                        profileImgID:
                                                                                                            img.id,
                                                                                                        profileImgURL:
                                                                                                            img.url,
                                                                                                    },
                                                                                                );
                                                                                        },
                                                                                    type: "image",
                                                                                    value: profileImgID,
                                                                                    render: function (
                                                                                        _ref,
                                                                                    ) {
                                                                                        var open =
                                                                                            _ref.open;
                                                                                        return React.createElement(
                                                                                            Button,
                                                                                            {
                                                                                                onClick:
                                                                                                    open,
                                                                                            },
                                                                                            profileImgID
                                                                                                ? React.createElement(
                                                                                                      "img",
                                                                                                      {
                                                                                                          className:
                                                                                                              "profile-avatar",
                                                                                                          src: profileImgURL,
                                                                                                          alt: "avatar",
                                                                                                      },
                                                                                                  )
                                                                                                : React.createElement(
                                                                                                      "img",
                                                                                                      {
                                                                                                          src: profileImgURL,
                                                                                                          alt: "placeholder",
                                                                                                      },
                                                                                                  ),
                                                                                        );
                                                                                    },
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "mpp-content-wrap",
                                                                        },
                                                                        showName &&
                                                                            React.createElement(
                                                                                RichText,
                                                                                {
                                                                                    tagName:
                                                                                        "h2",
                                                                                    placeholder:
                                                                                        __(
                                                                                            "Add name",
                                                                                            "metronet-profile-picture",
                                                                                        ),
                                                                                    value: profileName,
                                                                                    className:
                                                                                        "mpp-profile-name",
                                                                                    style: {
                                                                                        color: profileTextColor,
                                                                                        fontSize:
                                                                                            headerFontSize +
                                                                                            "px",
                                                                                    },
                                                                                    onChange:
                                                                                        function (
                                                                                            value,
                                                                                        ) {
                                                                                            _this2.onChangeName(
                                                                                                value,
                                                                                            ),
                                                                                                setAttributes(
                                                                                                    {
                                                                                                        profileName:
                                                                                                            value,
                                                                                                    },
                                                                                                );
                                                                                        },
                                                                                },
                                                                            ),
                                                                        showTitle &&
                                                                            React.createElement(
                                                                                RichText,
                                                                                {
                                                                                    tagName:
                                                                                        "p",
                                                                                    placeholder:
                                                                                        __(
                                                                                            "Add title",
                                                                                            "atomic-blocks",
                                                                                        ),
                                                                                    value: profileTitle,
                                                                                    className:
                                                                                        "mpp-profile-title",
                                                                                    style: {
                                                                                        color: profileTextColor,
                                                                                    },
                                                                                    onChange:
                                                                                        function (
                                                                                            value,
                                                                                        ) {
                                                                                            _this2.onChangeTitle(
                                                                                                value,
                                                                                            ),
                                                                                                setAttributes(
                                                                                                    {
                                                                                                        profileTitle:
                                                                                                            value,
                                                                                                    },
                                                                                                );
                                                                                        },
                                                                                },
                                                                            ),
                                                                        showDescription &&
                                                                            React.createElement(
                                                                                RichText,
                                                                                {
                                                                                    tagName:
                                                                                        "div",
                                                                                    className:
                                                                                        "mpp-profile-text",
                                                                                    placeholder:
                                                                                        __(
                                                                                            "Add profile text...",
                                                                                            "metronet-profile-picture",
                                                                                        ),
                                                                                    value: profileContent,
                                                                                    formattingControls:
                                                                                        [
                                                                                            "bold",
                                                                                            "italic",
                                                                                            "strikethrough",
                                                                                            "link",
                                                                                        ],
                                                                                    onChange:
                                                                                        function (
                                                                                            value,
                                                                                        ) {
                                                                                            _this2.onChangeProfileText(
                                                                                                value,
                                                                                            ),
                                                                                                setAttributes(
                                                                                                    {
                                                                                                        profileContent:
                                                                                                            value,
                                                                                                    },
                                                                                                );
                                                                                        },
                                                                                },
                                                                            ),
                                                                    ),
                                                                ),
                                                                profileURL &&
                                                                    !!profileURL.length &&
                                                                    React.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "mpp-gutenberg-view-posts",
                                                                            style: {
                                                                                width: showPostsWidth,
                                                                            },
                                                                        },
                                                                        showViewPosts &&
                                                                            React.createElement(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        "mpp-profile-view-posts",
                                                                                    style: {
                                                                                        backgroundColor:
                                                                                            profileViewPostsBackgroundColor,
                                                                                        color: profileViewPostsTextColor,
                                                                                        width: showPostsWidth,
                                                                                        fontSize:
                                                                                            buttonFontSize +
                                                                                            "px",
                                                                                    },
                                                                                },
                                                                                React.createElement(
                                                                                    "a",
                                                                                    {
                                                                                        href: profileURL,
                                                                                        style: {
                                                                                            backgroundColor:
                                                                                                profileViewPostsBackgroundColor,
                                                                                            color: profileViewPostsTextColor,
                                                                                        },
                                                                                    },
                                                                                    profileViewPosts,
                                                                                ),
                                                                            ),
                                                                        "" !=
                                                                            this
                                                                                .state
                                                                                .website &&
                                                                            showWebsite &&
                                                                            React.createElement(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        "mpp-profile-view-website",
                                                                                    style: {
                                                                                        backgroundColor:
                                                                                            profileWebsiteBackgroundColor,
                                                                                        color: profileWebsiteTextColor,
                                                                                        fontSize:
                                                                                            buttonFontSize +
                                                                                            "px",
                                                                                    },
                                                                                },
                                                                                React.createElement(
                                                                                    "a",
                                                                                    {
                                                                                        href: this
                                                                                            .state
                                                                                            .website,
                                                                                        style: {
                                                                                            backgroundColor:
                                                                                                profileWebsiteBackgroundColor,
                                                                                            color: profileWebsiteTextColor,
                                                                                        },
                                                                                    },
                                                                                    profileViewWebsite,
                                                                                ),
                                                                            ),
                                                                    ),
                                                            ),
                                                        "profile" ===
                                                            this.state.theme &&
                                                            React.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        classnames_default()(
                                                                            "mpp-profile-gutenberg-wrap",
                                                                            "mt-font-size-" +
                                                                                profileFontSize,
                                                                        ),
                                                                },
                                                                showName &&
                                                                    React.createElement(
                                                                        RichText,
                                                                        {
                                                                            tagName:
                                                                                "h2",
                                                                            placeholder:
                                                                                __(
                                                                                    "Add name",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                            value: profileName,
                                                                            className:
                                                                                "mpp-profile-name",
                                                                            style: {
                                                                                color: profileTextColor,
                                                                                fontSize:
                                                                                    headerFontSize +
                                                                                    "px",
                                                                            },
                                                                            onChange:
                                                                                function (
                                                                                    value,
                                                                                ) {
                                                                                    _this2.onChangeName(
                                                                                        value,
                                                                                    ),
                                                                                        setAttributes(
                                                                                            {
                                                                                                profileName:
                                                                                                    value,
                                                                                            },
                                                                                        );
                                                                                },
                                                                        },
                                                                    ),
                                                                React.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "mpp-profile-image-wrapper",
                                                                    },
                                                                    React.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "mpp-profile-image-square",
                                                                        },
                                                                        React.createElement(
                                                                            MediaUpload,
                                                                            {
                                                                                buttonProps:
                                                                                    {
                                                                                        className:
                                                                                            "change-image",
                                                                                    },
                                                                                onSelect:
                                                                                    function (
                                                                                        img,
                                                                                    ) {
                                                                                        _this2.handleImageChange(
                                                                                            img.id,
                                                                                            img.url,
                                                                                        ),
                                                                                            setAttributes(
                                                                                                {
                                                                                                    profileImgID:
                                                                                                        img.id,
                                                                                                    profileImgURL:
                                                                                                        img.url,
                                                                                                },
                                                                                            );
                                                                                    },
                                                                                type: "image",
                                                                                value: profileImgID,
                                                                                render: function (
                                                                                    _ref2,
                                                                                ) {
                                                                                    var open =
                                                                                        _ref2.open;
                                                                                    return React.createElement(
                                                                                        Button,
                                                                                        {
                                                                                            onClick:
                                                                                                open,
                                                                                        },
                                                                                        profileImgID
                                                                                            ? React.createElement(
                                                                                                  "img",
                                                                                                  {
                                                                                                      className:
                                                                                                          "profile-avatar",
                                                                                                      src: profileImgURL,
                                                                                                      alt: "avatar",
                                                                                                  },
                                                                                              )
                                                                                            : React.createElement(
                                                                                                  "img",
                                                                                                  {
                                                                                                      src: profileImgURL,
                                                                                                      alt: "placeholder",
                                                                                                  },
                                                                                              ),
                                                                                    );
                                                                                },
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                                showDescription &&
                                                                    React.createElement(
                                                                        RichText,
                                                                        {
                                                                            tagName:
                                                                                "div",
                                                                            className:
                                                                                "mpp-profile-text",
                                                                            placeholder:
                                                                                __(
                                                                                    "Add profile text...",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                            value: profileContent,
                                                                            formattingControls:
                                                                                [
                                                                                    "bold",
                                                                                    "italic",
                                                                                    "strikethrough",
                                                                                    "link",
                                                                                ],
                                                                            onChange:
                                                                                function (
                                                                                    value,
                                                                                ) {
                                                                                    _this2.onChangeProfileText(
                                                                                        value,
                                                                                    ),
                                                                                        setAttributes(
                                                                                            {
                                                                                                profileContent:
                                                                                                    value,
                                                                                            },
                                                                                        );
                                                                                },
                                                                        },
                                                                    ),
                                                                React.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "mpp-profile-meta",
                                                                        style: {
                                                                            fontSize:
                                                                                buttonFontSize +
                                                                                "px",
                                                                        },
                                                                    },
                                                                    showViewPosts &&
                                                                        React.createElement(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "mpp-profile-link alignleft",
                                                                            },
                                                                            React.createElement(
                                                                                "a",
                                                                                {
                                                                                    href: this
                                                                                        .state
                                                                                        .profile_url,
                                                                                    style: {
                                                                                        color: profileLinkColor,
                                                                                    },
                                                                                },
                                                                                __(
                                                                                    "View all posts by",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                                " ",
                                                                                this
                                                                                    .state
                                                                                    .profile_name_unfiltered,
                                                                            ),
                                                                        ),
                                                                    "" !=
                                                                        this
                                                                            .state
                                                                            .website &&
                                                                        showWebsite &&
                                                                        React.createElement(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "mpp-profile-link alignright",
                                                                            },
                                                                            React.createElement(
                                                                                "a",
                                                                                {
                                                                                    href: this
                                                                                        .state
                                                                                        .website,
                                                                                    style: {
                                                                                        color: profileLinkColor,
                                                                                    },
                                                                                },
                                                                                __(
                                                                                    "Website",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                            ),
                                                                        ),
                                                                ),
                                                            ),
                                                        "compact" ===
                                                            this.state.theme &&
                                                            React.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        classnames_default()(
                                                                            "mpp-profile-gutenberg-wrap",
                                                                            "mt-font-size-" +
                                                                                profileFontSize,
                                                                        ),
                                                                },
                                                                showName &&
                                                                    React.createElement(
                                                                        RichText,
                                                                        {
                                                                            tagName:
                                                                                "h2",
                                                                            placeholder:
                                                                                __(
                                                                                    "Add name",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                            value: profileName,
                                                                            className:
                                                                                "mpp-profile-name",
                                                                            style: {
                                                                                color: profileTextColor,
                                                                                fontSize:
                                                                                    headerFontSize +
                                                                                    "px",
                                                                            },
                                                                            onChange:
                                                                                function (
                                                                                    value,
                                                                                ) {
                                                                                    _this2.onChangeName(
                                                                                        value,
                                                                                    ),
                                                                                        setAttributes(
                                                                                            {
                                                                                                profileName:
                                                                                                    value,
                                                                                            },
                                                                                        );
                                                                                },
                                                                        },
                                                                    ),
                                                                React.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "mpp-profile-image-wrapper",
                                                                    },
                                                                    React.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "mpp-profile-image-square",
                                                                        },
                                                                        React.createElement(
                                                                            MediaUpload,
                                                                            {
                                                                                buttonProps:
                                                                                    {
                                                                                        className:
                                                                                            "change-image",
                                                                                    },
                                                                                onSelect:
                                                                                    function (
                                                                                        img,
                                                                                    ) {
                                                                                        _this2.handleImageChange(
                                                                                            img.id,
                                                                                            img.url,
                                                                                        ),
                                                                                            setAttributes(
                                                                                                {
                                                                                                    profileImgID:
                                                                                                        img.id,
                                                                                                    profileImgURL:
                                                                                                        img.url,
                                                                                                },
                                                                                            );
                                                                                    },
                                                                                type: "image",
                                                                                value: profileImgID,
                                                                                render: function (
                                                                                    _ref3,
                                                                                ) {
                                                                                    var open =
                                                                                        _ref3.open;
                                                                                    return React.createElement(
                                                                                        Button,
                                                                                        {
                                                                                            onClick:
                                                                                                open,
                                                                                        },
                                                                                        profileImgID
                                                                                            ? React.createElement(
                                                                                                  "img",
                                                                                                  {
                                                                                                      className:
                                                                                                          "profile-avatar",
                                                                                                      src: profileImgURL,
                                                                                                      alt: "avatar",
                                                                                                  },
                                                                                              )
                                                                                            : React.createElement(
                                                                                                  "img",
                                                                                                  {
                                                                                                      src: profileImgURL,
                                                                                                      alt: "placeholder",
                                                                                                  },
                                                                                              ),
                                                                                    );
                                                                                },
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                                showDescription &&
                                                                    React.createElement(
                                                                        RichText,
                                                                        {
                                                                            tagName:
                                                                                "div",
                                                                            className:
                                                                                "mpp-profile-text",
                                                                            placeholder:
                                                                                __(
                                                                                    "Add profile text...",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                            value: profileContent,
                                                                            formattingControls:
                                                                                [
                                                                                    "bold",
                                                                                    "italic",
                                                                                    "strikethrough",
                                                                                    "link",
                                                                                ],
                                                                            onChange:
                                                                                function (
                                                                                    value,
                                                                                ) {
                                                                                    _this2.onChangeProfileText(
                                                                                        value,
                                                                                    ),
                                                                                        setAttributes(
                                                                                            {
                                                                                                profileContent:
                                                                                                    value,
                                                                                            },
                                                                                        );
                                                                                },
                                                                        },
                                                                    ),
                                                                React.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "mpp-compact-meta",
                                                                    },
                                                                    showViewPosts &&
                                                                        React.createElement(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "mpp-profile-view-posts",
                                                                                style: {
                                                                                    backgroundColor:
                                                                                        profileViewPostsBackgroundColor,
                                                                                    color: profileViewPostsTextColor,
                                                                                    width: "90%",
                                                                                    margin: "0 auto 10px auto",
                                                                                    fontSize:
                                                                                        buttonFontSize +
                                                                                        "px",
                                                                                },
                                                                            },
                                                                            React.createElement(
                                                                                "a",
                                                                                {
                                                                                    href: profileURL,
                                                                                    style: {
                                                                                        backgroundColor:
                                                                                            profileViewPostsBackgroundColor,
                                                                                        color: profileViewPostsTextColor,
                                                                                    },
                                                                                },
                                                                                __(
                                                                                    "View Posts",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    "" !=
                                                                        this
                                                                            .state
                                                                            .website &&
                                                                        showWebsite &&
                                                                        React.createElement(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "mpp-profile-view-website",
                                                                                style: {
                                                                                    backgroundColor:
                                                                                        profileWebsiteBackgroundColor,
                                                                                    color: profileWebsiteTextColor,
                                                                                    fontSize:
                                                                                        buttonFontSize +
                                                                                        "px",
                                                                                    width: "90%",
                                                                                    margin: "0 auto",
                                                                                },
                                                                            },
                                                                            React.createElement(
                                                                                "a",
                                                                                {
                                                                                    href: this
                                                                                        .state
                                                                                        .website,
                                                                                    style: {
                                                                                        backgroundColor:
                                                                                            profileWebsiteBackgroundColor,
                                                                                        color: profileWebsiteTextColor,
                                                                                    },
                                                                                },
                                                                                __(
                                                                                    "View Website",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                            ),
                                                                        ),
                                                                ),
                                                            ),
                                                        1 ==
                                                            this.state
                                                                .showSocialMedia &&
                                                            ("regular" ===
                                                                this.state
                                                                    .theme ||
                                                                "compact" ===
                                                                    this.state
                                                                        .theme ||
                                                                "profile" ===
                                                                    this.state
                                                                        .theme) &&
                                                            React.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "mpp-social",
                                                                },
                                                                "" !=
                                                                    this.state
                                                                        .socialFacebook &&
                                                                    React.createElement(
                                                                        "a",
                                                                        {
                                                                            href: this
                                                                                .state
                                                                                .socialFacebook,
                                                                        },
                                                                        React.createElement(
                                                                            "svg",
                                                                            {
                                                                                className:
                                                                                    "icon icon-facebook",
                                                                                role: "img",
                                                                                style: {
                                                                                    fill:
                                                                                        "custom" ===
                                                                                        this
                                                                                            .state
                                                                                            .socialMediaOptions
                                                                                            ? socialMediaColors
                                                                                            : "",
                                                                                },
                                                                            },
                                                                            React.createElement(
                                                                                "use",
                                                                                {
                                                                                    href: "#facebook",
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                "" !=
                                                                    this.state
                                                                        .socialTwitter &&
                                                                    React.createElement(
                                                                        "a",
                                                                        {
                                                                            href: this
                                                                                .state
                                                                                .socialTwitter,
                                                                        },
                                                                        React.createElement(
                                                                            "svg",
                                                                            {
                                                                                className:
                                                                                    "icon icon-twitter",
                                                                                role: "img",
                                                                                style: {
                                                                                    fill:
                                                                                        "custom" ===
                                                                                        this
                                                                                            .state
                                                                                            .socialMediaOptions
                                                                                            ? socialMediaColors
                                                                                            : "",
                                                                                },
                                                                            },
                                                                            React.createElement(
                                                                                "use",
                                                                                {
                                                                                    href: "#twitter",
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                "" !=
                                                                    this.state
                                                                        .socialInstagram &&
                                                                    React.createElement(
                                                                        "a",
                                                                        {
                                                                            href: this
                                                                                .state
                                                                                .socialInstagram,
                                                                        },
                                                                        React.createElement(
                                                                            "svg",
                                                                            {
                                                                                className:
                                                                                    "icon icon-instagram",
                                                                                role: "img",
                                                                                style: {
                                                                                    fill:
                                                                                        "custom" ===
                                                                                        this
                                                                                            .state
                                                                                            .socialMediaOptions
                                                                                            ? socialMediaColors
                                                                                            : "",
                                                                                },
                                                                            },
                                                                            React.createElement(
                                                                                "use",
                                                                                {
                                                                                    href: "#instagram",
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                "" !=
                                                                    this.state
                                                                        .socialPinterest &&
                                                                    React.createElement(
                                                                        "a",
                                                                        {
                                                                            href: this
                                                                                .state
                                                                                .socialPinterest,
                                                                        },
                                                                        React.createElement(
                                                                            "svg",
                                                                            {
                                                                                className:
                                                                                    "icon icon-pinterest",
                                                                                role: "img",
                                                                                style: {
                                                                                    fill:
                                                                                        "custom" ===
                                                                                        this
                                                                                            .state
                                                                                            .socialMediaOptions
                                                                                            ? socialMediaColors
                                                                                            : "",
                                                                                },
                                                                            },
                                                                            React.createElement(
                                                                                "use",
                                                                                {
                                                                                    href: "#pinterest",
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                "" !=
                                                                    this.state
                                                                        .socialLinkedIn &&
                                                                    React.createElement(
                                                                        "a",
                                                                        {
                                                                            href: this
                                                                                .state
                                                                                .socialLinkedIn,
                                                                        },
                                                                        React.createElement(
                                                                            "svg",
                                                                            {
                                                                                className:
                                                                                    "icon icon-linkedin",
                                                                                role: "img",
                                                                                style: {
                                                                                    fill:
                                                                                        "custom" ===
                                                                                        this
                                                                                            .state
                                                                                            .socialMediaOptions
                                                                                            ? socialMediaColors
                                                                                            : "",
                                                                                },
                                                                            },
                                                                            React.createElement(
                                                                                "use",
                                                                                {
                                                                                    href: "#linkedin",
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                "" !=
                                                                    this.state
                                                                        .socialYouTube &&
                                                                    React.createElement(
                                                                        "a",
                                                                        {
                                                                            href: this
                                                                                .state
                                                                                .socialYouTube,
                                                                        },
                                                                        React.createElement(
                                                                            "svg",
                                                                            {
                                                                                className:
                                                                                    "icon icon-youtube",
                                                                                role: "img",
                                                                                style: {
                                                                                    fill:
                                                                                        "custom" ===
                                                                                        this
                                                                                            .state
                                                                                            .socialMediaOptions
                                                                                            ? socialMediaColors
                                                                                            : "",
                                                                                },
                                                                            },
                                                                            React.createElement(
                                                                                "use",
                                                                                {
                                                                                    href: "#youtube",
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                "" !=
                                                                    this.state
                                                                        .socialGitHub &&
                                                                    React.createElement(
                                                                        "a",
                                                                        {
                                                                            href: this
                                                                                .state
                                                                                .socialGitHub,
                                                                        },
                                                                        React.createElement(
                                                                            "svg",
                                                                            {
                                                                                className:
                                                                                    "icon icon-github",
                                                                                role: "img",
                                                                                style: {
                                                                                    fill:
                                                                                        "custom" ===
                                                                                        this
                                                                                            .state
                                                                                            .socialMediaOptions
                                                                                            ? socialMediaColors
                                                                                            : "",
                                                                                },
                                                                            },
                                                                            React.createElement(
                                                                                "use",
                                                                                {
                                                                                    href: "#github",
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                                "" !=
                                                                    this.state
                                                                        .socialWordPress &&
                                                                    React.createElement(
                                                                        "a",
                                                                        {
                                                                            href: this
                                                                                .state
                                                                                .socialWordPress,
                                                                        },
                                                                        React.createElement(
                                                                            "svg",
                                                                            {
                                                                                className:
                                                                                    "icon icon-wordpress",
                                                                                role: "img",
                                                                                style: {
                                                                                    fill:
                                                                                        "custom" ===
                                                                                        this
                                                                                            .state
                                                                                            .socialMediaOptions
                                                                                            ? socialMediaColors
                                                                                            : "",
                                                                                },
                                                                            },
                                                                            React.createElement(
                                                                                "use",
                                                                                {
                                                                                    href: "#wordpress",
                                                                                },
                                                                            ),
                                                                        ),
                                                                    ),
                                                            ),
                                                    ),
                                                "tabbed" === this.state.theme &&
                                                    React.createElement(
                                                        Fragment,
                                                        null,
                                                        React.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    classnames_default()(
                                                                        "mpp-author-tabbed",
                                                                        this
                                                                            .state
                                                                            .theme,
                                                                        profileAlignment,
                                                                        profileAvatarShape,
                                                                        "mpp-block-profile",
                                                                    ),
                                                            },
                                                            React.createElement(
                                                                "ul",
                                                                {
                                                                    className:
                                                                        "mpp-author-tabs",
                                                                },
                                                                React.createElement(
                                                                    "li",
                                                                    {
                                                                        className:
                                                                            classnames_default()(
                                                                                "mpp-tab-profile",
                                                                                "profile" ===
                                                                                    this
                                                                                        .state
                                                                                        .activeTab
                                                                                    ? "active"
                                                                                    : "",
                                                                            ),
                                                                        onClick:
                                                                            this
                                                                                .onChangeActiveProfileTab,
                                                                        style: {
                                                                            backgroundColor:
                                                                                this
                                                                                    .state
                                                                                    .profileTabColor,
                                                                            color: this
                                                                                .state
                                                                                .profileTabTextColor,
                                                                        },
                                                                    },
                                                                    React.createElement(
                                                                        RichText,
                                                                        {
                                                                            tagName:
                                                                                "span",
                                                                            placeholder:
                                                                                __(
                                                                                    "Add tab name.",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                            value: this
                                                                                .state
                                                                                .tabbedAuthorProfile,
                                                                            formattingControls:
                                                                                [],
                                                                            onChange:
                                                                                function (
                                                                                    value,
                                                                                ) {
                                                                                    _this2.onChangetabbedAuthorProfile(
                                                                                        value,
                                                                                    ),
                                                                                        setAttributes(
                                                                                            {
                                                                                                tabbedAuthorProfile:
                                                                                                    value,
                                                                                            },
                                                                                        );
                                                                                },
                                                                        },
                                                                    ),
                                                                ),
                                                                React.createElement(
                                                                    "li",
                                                                    {
                                                                        className:
                                                                            classnames_default()(
                                                                                "mpp-tab-posts",
                                                                                "latest" ===
                                                                                    this
                                                                                        .state
                                                                                        .activeTab
                                                                                    ? "active"
                                                                                    : "",
                                                                            ),
                                                                        onClick:
                                                                            this
                                                                                .onChangeActivePostTab,
                                                                        style: {
                                                                            backgroundColor:
                                                                                this
                                                                                    .state
                                                                                    .profileTabPostsColor,
                                                                            color: this
                                                                                .state
                                                                                .profileTabPostsTextColor,
                                                                        },
                                                                    },
                                                                    React.createElement(
                                                                        RichText,
                                                                        {
                                                                            tagName:
                                                                                "span",
                                                                            placeholder:
                                                                                __(
                                                                                    "Add tab name.",
                                                                                    "metronet-profile-picture",
                                                                                ),
                                                                            value: this
                                                                                .state
                                                                                .tabbedAuthorLatestPosts,
                                                                            formattingControls:
                                                                                [],
                                                                            onChange:
                                                                                function (
                                                                                    value,
                                                                                ) {
                                                                                    _this2.onChangetabbedAuthorLatestPosts(
                                                                                        value,
                                                                                    ),
                                                                                        setAttributes(
                                                                                            {
                                                                                                tabbedAuthorLatestPosts:
                                                                                                    value,
                                                                                            },
                                                                                        );
                                                                                },
                                                                        },
                                                                    ),
                                                                ),
                                                            ),
                                                            React.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "mpp-tab-wrapper",
                                                                    style: {
                                                                        padding:
                                                                            padding +
                                                                            "px",
                                                                        border:
                                                                            border +
                                                                            "px solid " +
                                                                            borderColor,
                                                                        borderRadius:
                                                                            borderRounded +
                                                                            "px",
                                                                        backgroundColor:
                                                                            profileBackgroundColor,
                                                                        color: profileTextColor,
                                                                    },
                                                                },
                                                                "profile" ===
                                                                    this.state
                                                                        .activeTab &&
                                                                    React.createElement(
                                                                        Fragment,
                                                                        null,
                                                                        React.createElement(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "mpp-author-social-wrapper",
                                                                            },
                                                                            React.createElement(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        "mpp-author-heading",
                                                                                },
                                                                                React.createElement(
                                                                                    RichText,
                                                                                    {
                                                                                        tagName:
                                                                                            "div",
                                                                                        className:
                                                                                            "mpp-author-profile-heading",
                                                                                        value: this
                                                                                            .state
                                                                                            .tabbedAuthorProfileHeading,
                                                                                        formattingControls:
                                                                                            [],
                                                                                        onChange:
                                                                                            function (
                                                                                                value,
                                                                                            ) {
                                                                                                _this2.onChangetabbedAuthorProfileHeading(
                                                                                                    value,
                                                                                                ),
                                                                                                    setAttributes(
                                                                                                        {
                                                                                                            profileTabHeadlineTextColor:
                                                                                                                value,
                                                                                                        },
                                                                                                    );
                                                                                            },
                                                                                        style: {
                                                                                            backgroundColor:
                                                                                                this
                                                                                                    .state
                                                                                                    .profileTabHeadlineColor,
                                                                                            color: this
                                                                                                .state
                                                                                                .profileTabHeadlineTextColor,
                                                                                        },
                                                                                    },
                                                                                ),
                                                                            ),
                                                                            this
                                                                                .state
                                                                                .showSocialMedia &&
                                                                                React.createElement(
                                                                                    "div",
                                                                                    {
                                                                                        className:
                                                                                            "mpp-author-social",
                                                                                    },
                                                                                    React.createElement(
                                                                                        "div",
                                                                                        {
                                                                                            className:
                                                                                                "mpp-social",
                                                                                        },
                                                                                        "" !=
                                                                                            this
                                                                                                .state
                                                                                                .socialFacebook &&
                                                                                            React.createElement(
                                                                                                "a",
                                                                                                {
                                                                                                    href: this
                                                                                                        .state
                                                                                                        .socialFacebook,
                                                                                                },
                                                                                                React.createElement(
                                                                                                    "svg",
                                                                                                    {
                                                                                                        className:
                                                                                                            "icon icon-facebook",
                                                                                                        role: "img",
                                                                                                        style: {
                                                                                                            fill:
                                                                                                                "custom" ===
                                                                                                                this
                                                                                                                    .state
                                                                                                                    .socialMediaOptions
                                                                                                                    ? socialMediaColors
                                                                                                                    : "",
                                                                                                        },
                                                                                                    },
                                                                                                    React.createElement(
                                                                                                        "use",
                                                                                                        {
                                                                                                            href: "#facebook",
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        "" !=
                                                                                            this
                                                                                                .state
                                                                                                .socialTwitter &&
                                                                                            React.createElement(
                                                                                                "a",
                                                                                                {
                                                                                                    href: this
                                                                                                        .state
                                                                                                        .socialTwitter,
                                                                                                },
                                                                                                React.createElement(
                                                                                                    "svg",
                                                                                                    {
                                                                                                        className:
                                                                                                            "icon icon-twitter",
                                                                                                        role: "img",
                                                                                                        style: {
                                                                                                            fill:
                                                                                                                "custom" ===
                                                                                                                this
                                                                                                                    .state
                                                                                                                    .socialMediaOptions
                                                                                                                    ? socialMediaColors
                                                                                                                    : "",
                                                                                                        },
                                                                                                    },
                                                                                                    React.createElement(
                                                                                                        "use",
                                                                                                        {
                                                                                                            href: "#twitter",
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        "" !=
                                                                                            this
                                                                                                .state
                                                                                                .socialInstagram &&
                                                                                            React.createElement(
                                                                                                "a",
                                                                                                {
                                                                                                    href: this
                                                                                                        .state
                                                                                                        .socialInstagram,
                                                                                                },
                                                                                                React.createElement(
                                                                                                    "svg",
                                                                                                    {
                                                                                                        className:
                                                                                                            "icon icon-instagram",
                                                                                                        role: "img",
                                                                                                        style: {
                                                                                                            fill:
                                                                                                                "custom" ===
                                                                                                                this
                                                                                                                    .state
                                                                                                                    .socialMediaOptions
                                                                                                                    ? socialMediaColors
                                                                                                                    : "",
                                                                                                        },
                                                                                                    },
                                                                                                    React.createElement(
                                                                                                        "use",
                                                                                                        {
                                                                                                            href: "#instagram",
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        "" !=
                                                                                            this
                                                                                                .state
                                                                                                .socialPinterest &&
                                                                                            React.createElement(
                                                                                                "a",
                                                                                                {
                                                                                                    href: this
                                                                                                        .state
                                                                                                        .socialPinterest,
                                                                                                },
                                                                                                React.createElement(
                                                                                                    "svg",
                                                                                                    {
                                                                                                        className:
                                                                                                            "icon icon-pinterest",
                                                                                                        role: "img",
                                                                                                        style: {
                                                                                                            fill:
                                                                                                                "custom" ===
                                                                                                                this
                                                                                                                    .state
                                                                                                                    .socialMediaOptions
                                                                                                                    ? socialMediaColors
                                                                                                                    : "",
                                                                                                        },
                                                                                                    },
                                                                                                    React.createElement(
                                                                                                        "use",
                                                                                                        {
                                                                                                            href: "#pinterest",
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        "" !=
                                                                                            this
                                                                                                .state
                                                                                                .socialLinkedIn &&
                                                                                            React.createElement(
                                                                                                "a",
                                                                                                {
                                                                                                    href: this
                                                                                                        .state
                                                                                                        .socialLinkedIn,
                                                                                                },
                                                                                                React.createElement(
                                                                                                    "svg",
                                                                                                    {
                                                                                                        className:
                                                                                                            "icon icon-linkedin",
                                                                                                        role: "img",
                                                                                                        style: {
                                                                                                            fill:
                                                                                                                "custom" ===
                                                                                                                this
                                                                                                                    .state
                                                                                                                    .socialMediaOptions
                                                                                                                    ? socialMediaColors
                                                                                                                    : "",
                                                                                                        },
                                                                                                    },
                                                                                                    React.createElement(
                                                                                                        "use",
                                                                                                        {
                                                                                                            href: "#linkedin",
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        "" !=
                                                                                            this
                                                                                                .state
                                                                                                .socialYouTube &&
                                                                                            React.createElement(
                                                                                                "a",
                                                                                                {
                                                                                                    href: this
                                                                                                        .state
                                                                                                        .socialYouTube,
                                                                                                },
                                                                                                React.createElement(
                                                                                                    "svg",
                                                                                                    {
                                                                                                        className:
                                                                                                            "icon icon-youtube",
                                                                                                        role: "img",
                                                                                                        style: {
                                                                                                            fill:
                                                                                                                "custom" ===
                                                                                                                this
                                                                                                                    .state
                                                                                                                    .socialMediaOptions
                                                                                                                    ? socialMediaColors
                                                                                                                    : "",
                                                                                                        },
                                                                                                    },
                                                                                                    React.createElement(
                                                                                                        "use",
                                                                                                        {
                                                                                                            href: "#youtube",
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        "" !=
                                                                                            this
                                                                                                .state
                                                                                                .socialGitHub &&
                                                                                            React.createElement(
                                                                                                "a",
                                                                                                {
                                                                                                    href: this
                                                                                                        .state
                                                                                                        .socialGitHub,
                                                                                                },
                                                                                                React.createElement(
                                                                                                    "svg",
                                                                                                    {
                                                                                                        className:
                                                                                                            "icon icon-github",
                                                                                                        role: "img",
                                                                                                        style: {
                                                                                                            fill:
                                                                                                                "custom" ===
                                                                                                                this
                                                                                                                    .state
                                                                                                                    .socialMediaOptions
                                                                                                                    ? socialMediaColors
                                                                                                                    : "",
                                                                                                        },
                                                                                                    },
                                                                                                    React.createElement(
                                                                                                        "use",
                                                                                                        {
                                                                                                            href: "#github",
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                        "" !=
                                                                                            this
                                                                                                .state
                                                                                                .socialWordPress &&
                                                                                            React.createElement(
                                                                                                "a",
                                                                                                {
                                                                                                    href: this
                                                                                                        .state
                                                                                                        .socialWordPress,
                                                                                                },
                                                                                                React.createElement(
                                                                                                    "svg",
                                                                                                    {
                                                                                                        className:
                                                                                                            "icon icon-wordpress",
                                                                                                        role: "img",
                                                                                                        style: {
                                                                                                            fill:
                                                                                                                "custom" ===
                                                                                                                this
                                                                                                                    .state
                                                                                                                    .socialMediaOptions
                                                                                                                    ? socialMediaColors
                                                                                                                    : "",
                                                                                                        },
                                                                                                    },
                                                                                                    React.createElement(
                                                                                                        "use",
                                                                                                        {
                                                                                                            href: "#wordpress",
                                                                                                        },
                                                                                                    ),
                                                                                                ),
                                                                                            ),
                                                                                    ),
                                                                                ),
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "mpp-profile-image-wrapper",
                                                                            },
                                                                            React.createElement(
                                                                                "div",
                                                                                {
                                                                                    className:
                                                                                        "mpp-profile-image-square",
                                                                                },
                                                                                React.createElement(
                                                                                    MediaUpload,
                                                                                    {
                                                                                        buttonProps:
                                                                                            {
                                                                                                className:
                                                                                                    "change-image",
                                                                                            },
                                                                                        onSelect:
                                                                                            function (
                                                                                                img,
                                                                                            ) {
                                                                                                _this2.handleImageChange(
                                                                                                    img.id,
                                                                                                    img.url,
                                                                                                ),
                                                                                                    setAttributes(
                                                                                                        {
                                                                                                            profileImgID:
                                                                                                                img.id,
                                                                                                            profileImgURL:
                                                                                                                img.url,
                                                                                                        },
                                                                                                    );
                                                                                            },
                                                                                        type: "image",
                                                                                        value: profileImgID,
                                                                                        render: function (
                                                                                            _ref4,
                                                                                        ) {
                                                                                            var open =
                                                                                                _ref4.open;
                                                                                            return React.createElement(
                                                                                                Button,
                                                                                                {
                                                                                                    onClick:
                                                                                                        open,
                                                                                                },
                                                                                                profileImgID
                                                                                                    ? React.createElement(
                                                                                                          "img",
                                                                                                          {
                                                                                                              className:
                                                                                                                  "profile-avatar",
                                                                                                              src: profileImgURL,
                                                                                                              alt: "avatar",
                                                                                                          },
                                                                                                      )
                                                                                                    : React.createElement(
                                                                                                          "img",
                                                                                                          {
                                                                                                              src: profileImgURL,
                                                                                                              alt: "placeholder",
                                                                                                          },
                                                                                                      ),
                                                                                            );
                                                                                        },
                                                                                    },
                                                                                ),
                                                                                React.createElement(
                                                                                    RichText,
                                                                                    {
                                                                                        tagName:
                                                                                            "div",
                                                                                        className:
                                                                                            "mpp-author-profile-sub-heading",
                                                                                        placeholder:
                                                                                            __(
                                                                                                "Add profile description...",
                                                                                                "metronet-profile-picture",
                                                                                            ),
                                                                                        value: this
                                                                                            .state
                                                                                            .tabbedAuthorSubHeading,
                                                                                        formattingControls:
                                                                                            [
                                                                                                "bold",
                                                                                                "italic",
                                                                                                "strikethrough",
                                                                                                "link",
                                                                                            ],
                                                                                        onChange:
                                                                                            function (
                                                                                                value,
                                                                                            ) {
                                                                                                _this2.onChangeTabbedSubHeading(
                                                                                                    value,
                                                                                                ),
                                                                                                    setAttributes(
                                                                                                        {
                                                                                                            tabbedAuthorSubHeading:
                                                                                                                value,
                                                                                                        },
                                                                                                    );
                                                                                            },
                                                                                    },
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "mpp-tabbed-profile-information",
                                                                            },
                                                                            showTitle &&
                                                                                React.createElement(
                                                                                    RichText,
                                                                                    {
                                                                                        tagName:
                                                                                            "div",
                                                                                        className:
                                                                                            "mpp-author-profile-title",
                                                                                        placeholder:
                                                                                            __(
                                                                                                "Add profile title...",
                                                                                                "metronet-profile-picture",
                                                                                            ),
                                                                                        value: tabbedAuthorProfileTitle,
                                                                                        formattingControls:
                                                                                            [
                                                                                                "bold",
                                                                                                "italic",
                                                                                                "strikethrough",
                                                                                                "link",
                                                                                            ],
                                                                                        onChange:
                                                                                            function (
                                                                                                value,
                                                                                            ) {
                                                                                                setAttributes(
                                                                                                    {
                                                                                                        tabbedAuthorProfileTitle:
                                                                                                            value,
                                                                                                    },
                                                                                                );
                                                                                            },
                                                                                    },
                                                                                ),
                                                                            showName &&
                                                                                React.createElement(
                                                                                    RichText,
                                                                                    {
                                                                                        tagName:
                                                                                            "h2",
                                                                                        placeholder:
                                                                                            __(
                                                                                                "Add name",
                                                                                                "metronet-profile-picture",
                                                                                            ),
                                                                                        value: profileName,
                                                                                        className:
                                                                                            "mpp-profile-name",
                                                                                        style: {
                                                                                            color: profileTextColor,
                                                                                            fontSize:
                                                                                                headerFontSize +
                                                                                                "px",
                                                                                        },
                                                                                        onChange:
                                                                                            function (
                                                                                                value,
                                                                                            ) {
                                                                                                _this2.onChangeName(
                                                                                                    value,
                                                                                                ),
                                                                                                    setAttributes(
                                                                                                        {
                                                                                                            profileName:
                                                                                                                value,
                                                                                                        },
                                                                                                    );
                                                                                            },
                                                                                    },
                                                                                ),
                                                                            showDescription &&
                                                                                React.createElement(
                                                                                    RichText,
                                                                                    {
                                                                                        tagName:
                                                                                            "div",
                                                                                        className:
                                                                                            classnames_default()(
                                                                                                "mpp-profile-text",
                                                                                                "mt-font-size-" +
                                                                                                    profileFontSize,
                                                                                            ),
                                                                                        placeholder:
                                                                                            __(
                                                                                                "Add profile text...",
                                                                                                "metronet-profile-picture",
                                                                                            ),
                                                                                        value: profileContent,
                                                                                        formattingControls:
                                                                                            [
                                                                                                "bold",
                                                                                                "italic",
                                                                                                "strikethrough",
                                                                                                "link",
                                                                                            ],
                                                                                        onChange:
                                                                                            function (
                                                                                                value,
                                                                                            ) {
                                                                                                _this2.onChangeProfileText(
                                                                                                    value,
                                                                                                ),
                                                                                                    setAttributes(
                                                                                                        {
                                                                                                            profileContent:
                                                                                                                value,
                                                                                                        },
                                                                                                    );
                                                                                            },
                                                                                    },
                                                                                ),
                                                                        ),
                                                                    ),
                                                                "latest" ===
                                                                    this.state
                                                                        .activeTab &&
                                                                    React.createElement(
                                                                        Fragment,
                                                                        null,
                                                                        this
                                                                            .state
                                                                            .loadingLatestPosts &&
                                                                            React.createElement(
                                                                                Fragment,
                                                                                null,
                                                                                React.createElement(
                                                                                    "div",
                                                                                    null,
                                                                                    React.createElement(
                                                                                        "div",
                                                                                        {
                                                                                            className:
                                                                                                "mpp-spinner",
                                                                                        },
                                                                                        React.createElement(
                                                                                            Spinner,
                                                                                            null,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        !this
                                                                            .state
                                                                            .loadingLatestPosts &&
                                                                            React.createElement(
                                                                                Fragment,
                                                                                null,
                                                                                React.createElement(
                                                                                    "ul",
                                                                                    {
                                                                                        className:
                                                                                            classnames_default()(
                                                                                                "mpp-author-tab-content",
                                                                                                this
                                                                                                    .state
                                                                                                    .profileLatestPostsOptionsValue,
                                                                                            ),
                                                                                    },
                                                                                    this
                                                                                        .state
                                                                                        .latestPosts,
                                                                                ),
                                                                            ),
                                                                    ),
                                                            ),
                                                        ),
                                                    ),
                                            ),
                                    )
                                );
                            },
                        },
                    ]) && _defineProperties(Constructor.prototype, protoProps),
                    staticProps && _defineProperties(Constructor, staticProps),
                    MPP_Gutenberg_Enhanced
                );
            })(Component);
            function profile_legacy_typeof(obj) {
                return (profile_legacy_typeof =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (obj) {
                              return typeof obj;
                          }
                        : function (obj) {
                              return obj &&
                                  "function" == typeof Symbol &&
                                  obj.constructor === Symbol &&
                                  obj !== Symbol.prototype
                                  ? "symbol"
                                  : typeof obj;
                          })(obj);
            }
            function profile_legacy_classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor))
                    throw new TypeError("Cannot call a class as a function");
            }
            function profile_legacy_defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    (descriptor.enumerable = descriptor.enumerable || !1),
                        (descriptor.configurable = !0),
                        "value" in descriptor && (descriptor.writable = !0),
                        Object.defineProperty(
                            target,
                            descriptor.key,
                            descriptor,
                        );
                }
            }
            function profile_legacy_setPrototypeOf(o, p) {
                return (profile_legacy_setPrototypeOf =
                    Object.setPrototypeOf ||
                    function (o, p) {
                        return (o.__proto__ = p), o;
                    })(o, p);
            }
            function profile_legacy_createSuper(Derived) {
                var hasNativeReflectConstruct = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Date.prototype.toString.call(
                                Reflect.construct(Date, [], function () {}),
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var result,
                        Super = profile_legacy_getPrototypeOf(Derived);
                    if (hasNativeReflectConstruct) {
                        var NewTarget =
                            profile_legacy_getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else result = Super.apply(this, arguments);
                    return profile_legacy_possibleConstructorReturn(
                        this,
                        result,
                    );
                };
            }
            function profile_legacy_possibleConstructorReturn(self, call) {
                return !call ||
                    ("object" !== profile_legacy_typeof(call) &&
                        "function" != typeof call)
                    ? profile_legacy_assertThisInitialized(self)
                    : call;
            }
            function profile_legacy_assertThisInitialized(self) {
                if (void 0 === self)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return self;
            }
            function profile_legacy_getPrototypeOf(o) {
                return (profile_legacy_getPrototypeOf = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (o) {
                          return o.__proto__ || Object.getPrototypeOf(o);
                      })(o);
            }
            function profile_legacy_defineProperty(obj, key, value) {
                return (
                    key in obj
                        ? Object.defineProperty(obj, key, {
                              value,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (obj[key] = value),
                    obj
                );
            }
            var profile_legacy_wp$element = wp.element,
                profile_legacy_Component = profile_legacy_wp$element.Component,
                profile_legacy_Fragment = profile_legacy_wp$element.Fragment,
                profile_legacy_ = wp.i18n.__,
                profile_legacy_wp$components = wp.components,
                profile_legacy_PanelBody =
                    profile_legacy_wp$components.PanelBody,
                profile_legacy_Placeholder =
                    profile_legacy_wp$components.Placeholder,
                profile_legacy_RangeControl =
                    (profile_legacy_wp$components.QueryControls,
                    profile_legacy_wp$components.RangeControl),
                profile_legacy_SelectControl =
                    profile_legacy_wp$components.SelectControl,
                profile_legacy_Spinner = profile_legacy_wp$components.Spinner,
                profile_legacy_ToggleControl =
                    (profile_legacy_wp$components.TextControl,
                    profile_legacy_wp$components.ToggleControl),
                profile_legacy_Button =
                    (profile_legacy_wp$components.Toolbar,
                    profile_legacy_wp$components.withAPIData,
                    profile_legacy_wp$components.ColorPalette,
                    profile_legacy_wp$components.Button),
                profile_legacy_wp$editor = wp.editor,
                profile_legacy_InspectorControls =
                    profile_legacy_wp$editor.InspectorControls,
                profile_legacy_BlockControls =
                    profile_legacy_wp$editor.BlockControls,
                profile_legacy_MediaUpload =
                    profile_legacy_wp$editor.MediaUpload,
                profile_legacy_RichText = profile_legacy_wp$editor.RichText,
                profile_legacy_AlignmentToolbar =
                    profile_legacy_wp$editor.AlignmentToolbar,
                profile_legacy_PanelColorSettings =
                    profile_legacy_wp$editor.PanelColorSettings;
            const profile_legacy = (function (_Component) {
                !(function (subClass, superClass) {
                    if ("function" != typeof superClass && null !== superClass)
                        throw new TypeError(
                            "Super expression must either be null or a function",
                        );
                    (subClass.prototype = Object.create(
                        superClass && superClass.prototype,
                        {
                            constructor: {
                                value: subClass,
                                writable: !0,
                                configurable: !0,
                            },
                        },
                    )),
                        superClass &&
                            profile_legacy_setPrototypeOf(subClass, superClass);
                })(MPP_Gutenberg, _Component);
                var Constructor,
                    protoProps,
                    staticProps,
                    _super = profile_legacy_createSuper(MPP_Gutenberg);
                function MPP_Gutenberg() {
                    var _this;
                    return (
                        profile_legacy_classCallCheck(this, MPP_Gutenberg),
                        profile_legacy_defineProperty(
                            profile_legacy_assertThisInitialized(
                                (_this = _super.apply(this, arguments)),
                            ),
                            "get_users",
                            function () {
                                axios_default()
                                    .post(
                                        mpp_gutenberg.rest_url + "/get_users",
                                        {},
                                        {
                                            headers: {
                                                "X-WP-Nonce":
                                                    mpp_gutenberg.nonce,
                                            },
                                        },
                                    )
                                    .then(function (response) {
                                        var _this$setState,
                                            users = Array(),
                                            user_list = Array(),
                                            active_user = 0,
                                            profile_picture = "",
                                            profile_picture_id = 0,
                                            profile_name = "",
                                            profile_description = "",
                                            profile_title = "",
                                            profile_url = "";
                                        $.each(
                                            response.data,
                                            function (key, value) {
                                                (users[value.ID] = {
                                                    profile_pictures:
                                                        value.profile_pictures,
                                                    has_profile_picture:
                                                        value.has_profile_picture,
                                                    display_name:
                                                        value.display_name,
                                                    description:
                                                        value.description,
                                                    is_user_logged_in:
                                                        value.is_user_logged_in,
                                                    profile_picture_id:
                                                        value.profile_picture_id,
                                                    default_image:
                                                        value.default_image,
                                                    permalink: value.permalink,
                                                }),
                                                    value.is_user_logged_in &&
                                                        (active_user =
                                                            value.ID),
                                                    user_list.push({
                                                        value: value.ID,
                                                        label: value.display_name,
                                                    });
                                            },
                                        ),
                                            0 !==
                                                _this.props.attributes
                                                    .user_id &&
                                                (active_user =
                                                    _this.props.attributes
                                                        .user_id);
                                        var active_user_profile =
                                            users[active_user];
                                        active_user_profile.has_profile_picture
                                            ? ((profile_picture =
                                                  _this.props.attributes
                                                      .profileImgURL.length > 0
                                                      ? _this.props.attributes
                                                            .profileImgURL
                                                      : active_user_profile
                                                            .profile_pictures
                                                            .thumbnail),
                                              (profile_picture_id =
                                                  _this.props.attributes
                                                      .profileImgID.length > 0
                                                      ? _this.props.attributes
                                                            .profileImgID
                                                      : active_user_profile.profile_picture_id),
                                              (profile_name =
                                                  _this.props.attributes
                                                      .profileName.length > 0
                                                      ? _this.props.attributes
                                                            .profileName
                                                      : active_user_profile.display_name),
                                              (profile_title =
                                                  _this.props.attributes
                                                      .profileTitle.length > 0
                                                      ? _this.props.attributes
                                                            .profileTitle
                                                      : ""),
                                              (profile_url =
                                                  active_user_profile.permalink),
                                              (profile_description =
                                                  _this.props.attributes
                                                      .profileContent.length > 0
                                                      ? _this.props.attributes
                                                            .profileContent
                                                      : active_user_profile.description))
                                            : ((profile_name =
                                                  _this.props.attributes
                                                      .profileName.length > 0
                                                      ? _this.props.attributes
                                                            .profileName
                                                      : active_user_profile.display_name),
                                              (profile_title =
                                                  _this.props.attributes
                                                      .profileTitle.length > 0
                                                      ? _this.props.attributes
                                                            .profileTitle
                                                      : ""),
                                              (profile_description =
                                                  _this.props.attributes
                                                      .profileContent.length > 0
                                                      ? _this.props.attributes
                                                            .profileContent
                                                      : active_user_profile.description),
                                              (profile_picture =
                                                  _this.props.attributes
                                                      .profileImgURL.length > 0
                                                      ? _this.props.attributes
                                                            .profileImgURL
                                                      : active_user_profile.default_image),
                                              (profile_picture_id =
                                                  _this.props.attributes
                                                      .profileImgID.length > 0
                                                      ? _this.props.attributes
                                                            .profileImgID
                                                      : 0),
                                              (profile_url =
                                                  active_user_profile.permalink)),
                                            null == profile_description &&
                                                (profile_description = ""),
                                            _this.setState(
                                                (profile_legacy_defineProperty(
                                                    (_this$setState = {
                                                        loading: !1,
                                                        users,
                                                        active_user,
                                                        user_list,
                                                        profile_picture,
                                                        profile_picture_id,
                                                    }),
                                                    "active_user",
                                                    active_user,
                                                ),
                                                profile_legacy_defineProperty(
                                                    _this$setState,
                                                    "profile_name",
                                                    profile_name,
                                                ),
                                                profile_legacy_defineProperty(
                                                    _this$setState,
                                                    "profile_title",
                                                    profile_title,
                                                ),
                                                profile_legacy_defineProperty(
                                                    _this$setState,
                                                    "profile_description",
                                                    profile_description,
                                                ),
                                                profile_legacy_defineProperty(
                                                    _this$setState,
                                                    "profile_url",
                                                    profile_url,
                                                ),
                                                _this$setState),
                                            ),
                                            _this.props.setAttributes({
                                                profileContent:
                                                    profile_description,
                                                profileName: profile_name,
                                                profileTitle: profile_title,
                                                profileURL: profile_url,
                                                profileImgID:
                                                    profile_picture_id,
                                                profileImgURL: profile_picture,
                                            });
                                    });
                            },
                        ),
                        profile_legacy_defineProperty(
                            profile_legacy_assertThisInitialized(_this),
                            "on_user_change",
                            function (user_id) {
                                var profile_picture = "",
                                    profile_picture_id = 0;
                                _this.state.users[user_id].has_profile_picture
                                    ? ((profile_picture =
                                          _this.state.users[user_id]
                                              .profile_pictures.thumbnail),
                                      (profile_picture_id =
                                          _this.state.users[user_id]
                                              .profile_picture_id))
                                    : ((profile_picture =
                                          mpp_gutenberg.mystery_man),
                                      (profile_picture_id = 0));
                                var description =
                                    _this.state.users[user_id].description;
                                void 0 === description && (description = ""),
                                    _this.props.setAttributes({
                                        profileName:
                                            _this.state.users[user_id]
                                                .display_name,
                                        profileContent: description,
                                        profileTitle: "",
                                        profileURL:
                                            _this.state.users[user_id]
                                                .permalink,
                                        profileImgURL: profile_picture,
                                    }),
                                    _this.setState({
                                        profile_name:
                                            _this.state.users[user_id]
                                                .display_name,
                                        profile_description: description,
                                        profile_title: "",
                                        profile_picture,
                                        profile_picture_id,
                                        active_user: user_id,
                                        profile_url:
                                            _this.state.users[user_id]
                                                .permalink,
                                    });
                            },
                        ),
                        profile_legacy_defineProperty(
                            profile_legacy_assertThisInitialized(_this),
                            "componentDidMount",
                            function () {
                                _this.get_users();
                            },
                        ),
                        profile_legacy_defineProperty(
                            profile_legacy_assertThisInitialized(_this),
                            "handleImageChange",
                            function (image_id, image_url) {
                                _this.setState({
                                    profile_picture: image_url,
                                    profile_picture_id: image_id,
                                });
                            },
                        ),
                        profile_legacy_defineProperty(
                            profile_legacy_assertThisInitialized(_this),
                            "onChangeName",
                            function (value) {
                                _this.setState({ profile_name: value });
                            },
                        ),
                        profile_legacy_defineProperty(
                            profile_legacy_assertThisInitialized(_this),
                            "onChangeTitle",
                            function (value) {
                                _this.setState({ profile_title: value });
                            },
                        ),
                        profile_legacy_defineProperty(
                            profile_legacy_assertThisInitialized(_this),
                            "onChangeProfileText",
                            function (value) {
                                _this.setState({ profile_description: value });
                            },
                        ),
                        (_this.state = {
                            loading: !0,
                            users: !1,
                            user_list: !1,
                            profile_picture: !1,
                            profile_picture_id: 0,
                            active_user: !1,
                            profile_description: "",
                            profile_name: "",
                            profile_title: "",
                        }),
                        _this
                    );
                }
                return (
                    (Constructor = MPP_Gutenberg),
                    (protoProps = [
                        {
                            key: "render",
                            value: function () {
                                var _this2 = this,
                                    _this$props = this.props,
                                    _this$props$attribute =
                                        _this$props.attributes,
                                    profileName =
                                        _this$props$attribute.profileName,
                                    profileTitle =
                                        _this$props$attribute.profileTitle,
                                    profileContent =
                                        _this$props$attribute.profileContent,
                                    profileAlignment =
                                        _this$props$attribute.profileAlignment,
                                    profileImgURL =
                                        _this$props$attribute.profileImgURL,
                                    profileImgID =
                                        _this$props$attribute.profileImgID,
                                    profileURL =
                                        _this$props$attribute.profileURL,
                                    profileFontSize =
                                        _this$props$attribute.profileFontSize,
                                    profileBackgroundColor =
                                        _this$props$attribute.profileBackgroundColor,
                                    profileTextColor =
                                        _this$props$attribute.profileTextColor,
                                    profileAvatarShape =
                                        _this$props$attribute.profileAvatarShape,
                                    profileViewPostsBackgroundColor =
                                        _this$props$attribute.profileViewPostsBackgroundColor,
                                    profileViewPostsTextColor =
                                        _this$props$attribute.profileViewPostsTextColor,
                                    showTitle = _this$props$attribute.showTitle,
                                    showName = _this$props$attribute.showName,
                                    showDescription =
                                        _this$props$attribute.showDescription,
                                    showViewPosts =
                                        _this$props$attribute.showViewPosts,
                                    setAttributes =
                                        (_this$props.attributes,
                                        _this$props.isSelected,
                                        _this$props.editable,
                                        _this$props.className,
                                        _this$props.setAttributes);
                                this.state.profile_pictures,
                                    (profileImgID =
                                        this.state.profile_picture_id),
                                    (profileImgURL =
                                        this.state.profile_picture),
                                    (profileName = this.state.profile_name),
                                    (profileContent =
                                        this.state.profile_description),
                                    (profileTitle = this.state.profile_title),
                                    (profileURL = this.state.profile_url);
                                var profileAvatarShapeOptions = [
                                    {
                                        value: "square",
                                        label: profile_legacy_(
                                            "Square",
                                            "metronet-profile-picture",
                                        ),
                                    },
                                    {
                                        value: "round",
                                        label: profile_legacy_(
                                            "Round",
                                            "metronet-profile-picture",
                                        ),
                                    },
                                ];
                                return React.createElement(
                                    profile_legacy_Fragment,
                                    null,
                                    this.state.loading &&
                                        React.createElement(
                                            profile_legacy_Fragment,
                                            null,
                                            React.createElement(
                                                profile_legacy_Placeholder,
                                                null,
                                                profile_legacy_(
                                                    "Loading...",
                                                    "metronet-profile-picture",
                                                ),
                                                React.createElement(
                                                    profile_legacy_Spinner,
                                                    null,
                                                ),
                                            ),
                                        ),
                                    !this.state.loading &&
                                        React.createElement(
                                            profile_legacy_Fragment,
                                            null,
                                            React.createElement(
                                                profile_legacy_InspectorControls,
                                                null,
                                                React.createElement(
                                                    profile_legacy_PanelBody,
                                                    {
                                                        title: profile_legacy_(
                                                            "User Profile Settings",
                                                            "metronet-profile-picture",
                                                        ),
                                                    },
                                                    React.createElement(
                                                        profile_legacy_SelectControl,
                                                        {
                                                            label: profile_legacy_(
                                                                "Select a user",
                                                                "metronet-profile-picture",
                                                            ),
                                                            value: this.state
                                                                .active_user,
                                                            options:
                                                                this.state
                                                                    .user_list,
                                                            onChange: function (
                                                                value,
                                                            ) {
                                                                _this2.on_user_change(
                                                                    value,
                                                                ),
                                                                    setAttributes(
                                                                        {
                                                                            user_id:
                                                                                Number(
                                                                                    value,
                                                                                ),
                                                                        },
                                                                    );
                                                            },
                                                        },
                                                    ),
                                                    React.createElement(
                                                        profile_legacy_RangeControl,
                                                        {
                                                            label: profile_legacy_(
                                                                "Font Size",
                                                                "metronet-profile-picture",
                                                            ),
                                                            value: profileFontSize,
                                                            onChange: function (
                                                                value,
                                                            ) {
                                                                return _this2.props.setAttributes(
                                                                    {
                                                                        profileFontSize:
                                                                            value,
                                                                    },
                                                                );
                                                            },
                                                            min: 14,
                                                            max: 24,
                                                            step: 1,
                                                        },
                                                    ),
                                                    React.createElement(
                                                        profile_legacy_SelectControl,
                                                        {
                                                            label: profile_legacy_(
                                                                "Avatar Shape",
                                                                "metronet-profile-picture",
                                                            ),
                                                            description:
                                                                profile_legacy_(
                                                                    "Choose between a round or square avatar shape.",
                                                                    "metronet-profile-picture",
                                                                ),
                                                            options:
                                                                profileAvatarShapeOptions,
                                                            value: profileAvatarShape,
                                                            onChange: function (
                                                                value,
                                                            ) {
                                                                return _this2.props.setAttributes(
                                                                    {
                                                                        profileAvatarShape:
                                                                            value,
                                                                    },
                                                                );
                                                            },
                                                        },
                                                    ),
                                                    React.createElement(
                                                        profile_legacy_PanelColorSettings,
                                                        {
                                                            title: profile_legacy_(
                                                                "Background Color",
                                                                "metronet-profile-picture",
                                                            ),
                                                            initialOpen: !1,
                                                            colorSettings: [
                                                                {
                                                                    value: profileBackgroundColor,
                                                                    onChange:
                                                                        function (
                                                                            value,
                                                                        ) {
                                                                            return setAttributes(
                                                                                {
                                                                                    profileBackgroundColor:
                                                                                        value,
                                                                                },
                                                                            );
                                                                        },
                                                                    label: profile_legacy_(
                                                                        "Background Color",
                                                                        "metronet-profile-picture",
                                                                    ),
                                                                },
                                                            ],
                                                        },
                                                    ),
                                                    React.createElement(
                                                        profile_legacy_PanelColorSettings,
                                                        {
                                                            title: profile_legacy_(
                                                                "Text Color",
                                                                "metronet-profile-picture",
                                                            ),
                                                            initialOpen: !1,
                                                            colorSettings: [
                                                                {
                                                                    value: profileTextColor,
                                                                    onChange:
                                                                        function (
                                                                            value,
                                                                        ) {
                                                                            return setAttributes(
                                                                                {
                                                                                    profileTextColor:
                                                                                        value,
                                                                                },
                                                                            );
                                                                        },
                                                                    label: profile_legacy_(
                                                                        "Text Color",
                                                                        "metronet-profile-picture",
                                                                    ),
                                                                },
                                                            ],
                                                        },
                                                    ),
                                                    React.createElement(
                                                        profile_legacy_PanelColorSettings,
                                                        {
                                                            title: profile_legacy_(
                                                                "View Posts Background Color",
                                                                "metronet-profile-picture",
                                                            ),
                                                            initialOpen: !1,
                                                            colorSettings: [
                                                                {
                                                                    value: profileViewPostsBackgroundColor,
                                                                    onChange:
                                                                        function (
                                                                            value,
                                                                        ) {
                                                                            return setAttributes(
                                                                                {
                                                                                    profileViewPostsBackgroundColor:
                                                                                        value,
                                                                                },
                                                                            );
                                                                        },
                                                                    label: profile_legacy_(
                                                                        "View Posts Background",
                                                                        "metronet-profile-picture",
                                                                    ),
                                                                },
                                                            ],
                                                        },
                                                    ),
                                                    React.createElement(
                                                        profile_legacy_PanelColorSettings,
                                                        {
                                                            title: profile_legacy_(
                                                                "View Posts Text Color",
                                                                "metronet-profile-picture",
                                                            ),
                                                            initialOpen: !1,
                                                            colorSettings: [
                                                                {
                                                                    value: profileViewPostsTextColor,
                                                                    onChange:
                                                                        function (
                                                                            value,
                                                                        ) {
                                                                            return setAttributes(
                                                                                {
                                                                                    profileViewPostsTextColor:
                                                                                        value,
                                                                                },
                                                                            );
                                                                        },
                                                                    label: profile_legacy_(
                                                                        "View Posts Text Color",
                                                                        "metronet-profile-picture",
                                                                    ),
                                                                },
                                                            ],
                                                        },
                                                    ),
                                                    React.createElement(
                                                        profile_legacy_ToggleControl,
                                                        {
                                                            label: profile_legacy_(
                                                                "Show Name",
                                                                "metronet-profile-picture",
                                                            ),
                                                            checked: showName,
                                                            onChange:
                                                                function () {
                                                                    return _this2.props.setAttributes(
                                                                        {
                                                                            showName:
                                                                                !showName,
                                                                        },
                                                                    );
                                                                },
                                                        },
                                                    ),
                                                    React.createElement(
                                                        profile_legacy_ToggleControl,
                                                        {
                                                            label: profile_legacy_(
                                                                "Show Title",
                                                                "metronet-profile-picture",
                                                            ),
                                                            checked: showTitle,
                                                            onChange:
                                                                function () {
                                                                    return _this2.props.setAttributes(
                                                                        {
                                                                            showTitle:
                                                                                !showTitle,
                                                                        },
                                                                    );
                                                                },
                                                        },
                                                    ),
                                                    React.createElement(
                                                        profile_legacy_ToggleControl,
                                                        {
                                                            label: profile_legacy_(
                                                                "Show Description",
                                                                "metronet-profile-picture",
                                                            ),
                                                            checked:
                                                                showDescription,
                                                            onChange:
                                                                function () {
                                                                    return _this2.props.setAttributes(
                                                                        {
                                                                            showDescription:
                                                                                !showDescription,
                                                                        },
                                                                    );
                                                                },
                                                        },
                                                    ),
                                                    React.createElement(
                                                        profile_legacy_ToggleControl,
                                                        {
                                                            label: profile_legacy_(
                                                                "Show View Posts",
                                                                "metronet-profile-picture",
                                                            ),
                                                            checked:
                                                                showViewPosts,
                                                            onChange:
                                                                function () {
                                                                    return _this2.props.setAttributes(
                                                                        {
                                                                            showViewPosts:
                                                                                !showViewPosts,
                                                                        },
                                                                    );
                                                                },
                                                        },
                                                    ),
                                                ),
                                            ),
                                            React.createElement(
                                                profile_legacy_BlockControls,
                                                { key: "controls" },
                                                React.createElement(
                                                    profile_legacy_AlignmentToolbar,
                                                    {
                                                        value: profileAlignment,
                                                        onChange: function (
                                                            value,
                                                        ) {
                                                            return setAttributes(
                                                                {
                                                                    profileAlignment:
                                                                        value,
                                                                },
                                                            );
                                                        },
                                                    },
                                                ),
                                            ),
                                            React.createElement(
                                                "div",
                                                {
                                                    className:
                                                        classnames_default()(
                                                            "mpp-profile-wrap",
                                                            "legacy",
                                                            profileAlignment,
                                                            profileAvatarShape,
                                                            "mt-font-size-" +
                                                                profileFontSize,
                                                            "mpp-block-profile",
                                                        ),
                                                    style: {
                                                        backgroundColor:
                                                            profileBackgroundColor,
                                                        color: profileTextColor,
                                                    },
                                                },
                                                React.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            classnames_default()(
                                                                "mpp-profile-gutenberg-wrap",
                                                            ),
                                                    },
                                                    React.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "mpp-profile-image-wrapper",
                                                        },
                                                        React.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mpp-profile-image-square",
                                                            },
                                                            React.createElement(
                                                                profile_legacy_MediaUpload,
                                                                {
                                                                    buttonProps:
                                                                        {
                                                                            className:
                                                                                "change-image",
                                                                        },
                                                                    onSelect:
                                                                        function (
                                                                            img,
                                                                        ) {
                                                                            _this2.handleImageChange(
                                                                                img.id,
                                                                                img.url,
                                                                            ),
                                                                                setAttributes(
                                                                                    {
                                                                                        profileImgID:
                                                                                            img.id,
                                                                                        profileImgURL:
                                                                                            img.url,
                                                                                    },
                                                                                );
                                                                        },
                                                                    type: "image",
                                                                    value: profileImgID,
                                                                    render: function (
                                                                        _ref,
                                                                    ) {
                                                                        var open =
                                                                            _ref.open;
                                                                        return React.createElement(
                                                                            profile_legacy_Button,
                                                                            {
                                                                                onClick:
                                                                                    open,
                                                                            },
                                                                            profileImgID
                                                                                ? React.createElement(
                                                                                      "img",
                                                                                      {
                                                                                          class: "profile-avatar",
                                                                                          src: profileImgURL,
                                                                                          alt: "avatar",
                                                                                      },
                                                                                  )
                                                                                : React.createElement(
                                                                                      "img",
                                                                                      {
                                                                                          src: profileImgURL,
                                                                                          alt: "placeholder",
                                                                                      },
                                                                                  ),
                                                                        );
                                                                    },
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "mpp-content-wrap",
                                                        },
                                                        showName &&
                                                            React.createElement(
                                                                profile_legacy_RichText,
                                                                {
                                                                    tagName:
                                                                        "h2",
                                                                    placeholder:
                                                                        profile_legacy_(
                                                                            "Add name",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                    value: profileName,
                                                                    className:
                                                                        "mpp-profile-name",
                                                                    style: {
                                                                        color: profileTextColor,
                                                                    },
                                                                    onChange:
                                                                        function (
                                                                            value,
                                                                        ) {
                                                                            _this2.onChangeName(
                                                                                value,
                                                                            ),
                                                                                setAttributes(
                                                                                    {
                                                                                        profileName:
                                                                                            value,
                                                                                    },
                                                                                );
                                                                        },
                                                                },
                                                            ),
                                                        showTitle &&
                                                            React.createElement(
                                                                profile_legacy_RichText,
                                                                {
                                                                    tagName:
                                                                        "p",
                                                                    placeholder:
                                                                        profile_legacy_(
                                                                            "Add title",
                                                                            "atomic-blocks",
                                                                        ),
                                                                    value: profileTitle,
                                                                    className:
                                                                        "mpp-profile-title",
                                                                    style: {
                                                                        color: profileTextColor,
                                                                    },
                                                                    onChange:
                                                                        function (
                                                                            value,
                                                                        ) {
                                                                            _this2.onChangeTitle(
                                                                                value,
                                                                            ),
                                                                                setAttributes(
                                                                                    {
                                                                                        profileTitle:
                                                                                            value,
                                                                                    },
                                                                                );
                                                                        },
                                                                },
                                                            ),
                                                        showDescription &&
                                                            React.createElement(
                                                                profile_legacy_RichText,
                                                                {
                                                                    tagName:
                                                                        "div",
                                                                    className:
                                                                        "mpp-profile-text",
                                                                    placeholder:
                                                                        profile_legacy_(
                                                                            "Add profile text...",
                                                                            "metronet-profile-picture",
                                                                        ),
                                                                    value: profileContent,
                                                                    formattingControls:
                                                                        [
                                                                            "bold",
                                                                            "italic",
                                                                            "strikethrough",
                                                                            "link",
                                                                        ],
                                                                    onChange:
                                                                        function (
                                                                            value,
                                                                        ) {
                                                                            _this2.onChangeProfileText(
                                                                                value,
                                                                            ),
                                                                                setAttributes(
                                                                                    {
                                                                                        profileContent:
                                                                                            value,
                                                                                    },
                                                                                );
                                                                        },
                                                                },
                                                            ),
                                                    ),
                                                ),
                                                profileURL &&
                                                    !!profileURL.length &&
                                                    React.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "mpp-gutenberg-view-posts",
                                                        },
                                                        showViewPosts &&
                                                            React.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "mpp-profile-view-posts",
                                                                    style: {
                                                                        backgroundColor:
                                                                            profileViewPostsBackgroundColor,
                                                                        color: profileViewPostsTextColor,
                                                                    },
                                                                },
                                                                React.createElement(
                                                                    "a",
                                                                    {
                                                                        href: profileURL,
                                                                        style: {
                                                                            backgroundColor:
                                                                                profileViewPostsBackgroundColor,
                                                                            color: profileViewPostsTextColor,
                                                                        },
                                                                    },
                                                                    profile_legacy_(
                                                                        "View Posts",
                                                                        "metronet-profile-picture",
                                                                    ),
                                                                ),
                                                            ),
                                                    ),
                                            ),
                                        ),
                                );
                            },
                        },
                    ]) &&
                        profile_legacy_defineProperties(
                            Constructor.prototype,
                            protoProps,
                        ),
                    staticProps &&
                        profile_legacy_defineProperties(
                            Constructor,
                            staticProps,
                        ),
                    MPP_Gutenberg
                );
            })(profile_legacy_Component);
            var block_ = wp.i18n.__,
                registerBlockType = wp.blocks.registerBlockType,
                block_wp$element = wp.element,
                block_Fragment =
                    (block_wp$element.Component, block_wp$element.Fragment),
                block_RichText = wp.editor.RichText;
            registerBlockType("mpp/user-profile", {
                title: block_(
                    "User Profile Legacy",
                    "metronet-profile-picture",
                ),
                icon: React.createElement(
                    "svg",
                    {
                        id: "Layer_1",
                        "data-name": "Layer 1",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 753.53 979.74",
                    },
                    React.createElement("title", null, "upp"),
                    React.createElement("path", {
                        d: "M806.37,185.9c0,40.27-30.49,72.9-68.11,72.9s-68.17-32.63-68.17-72.9S700.62,113,738.26,113,806.37,145.64,806.37,185.9Z",
                        transform: "translate(-123.47 -11)",
                        fill: "#4063ad",
                    }),
                    React.createElement("path", {
                        d: "M330.36,183.8c0,40.27-30.49,72.9-68.12,72.9s-68.17-32.63-68.17-72.9,30.52-72.87,68.17-72.87S330.36,143.56,330.36,183.8Z",
                        transform: "translate(-123.47 -11)",
                        fill: "#a34d9c",
                    }),
                    React.createElement("path", {
                        d: "M331.3,888.13V698.21H329c-31.64,0-57.28-27.45-57.28-61.29V336.5a118.37,118.37,0,0,1,5.43-34.79H179.84c-31.94,0-56.37,31.57-56.37,56.34V601.46h48.32V888.13Z",
                        transform: "translate(-123.47 -11)",
                        fill: "#a34d9c",
                    }),
                    React.createElement("path", {
                        d: "M388.59,636.92V990.74H611.88V636.92H671.5V336.5c0-30.63-27.64-69.57-69.6-69.57H398.56c-39.44,0-69.61,38.94-69.61,69.57V636.92Z",
                        transform: "translate(-123.47 -11)",
                        fill: "#f4831f",
                    }),
                    React.createElement("path", {
                        d: "M584.3,101c0,49.69-37.63,90-84,90S416.12,150.67,416.12,101s37.66-90,84.14-90S584.3,51.27,584.3,101Z",
                        transform: "translate(-123.47 -11)",
                        fill: "#f4831f",
                    }),
                    React.createElement("path", {
                        d: "M820.61,303.79H724.08a121.69,121.69,0,0,1,4.7,32.71V636.92c0,33.84-25.64,61.29-57.28,61.29h-2.33v192H828.7V603.54H877V360.16C877,335.36,854.62,303.79,820.61,303.79Z",
                        transform: "translate(-123.47 -11)",
                        fill: "#4063ad",
                    }),
                ),
                category: "mpp",
                attributes: {
                    profileName: { type: "string", default: "" },
                    profileTitle: { type: "string", default: "" },
                    profileContent: { type: "string", default: "" },
                    profileAlignment: { type: "string" },
                    profileImgURL: {
                        type: "string",
                        source: "attribute",
                        attribute: "src",
                        selector: "img",
                        default: "",
                    },
                    profileImgID: { type: "number", default: "" },
                    profileURL: { type: "string", default: "" },
                    profileBackgroundColor: {
                        type: "string",
                        default: "#f2f2f2",
                    },
                    profileTextColor: { type: "string", default: "#32373c" },
                    profileViewPostsBackgroundColor: {
                        type: "string",
                        default: "#cf6d38",
                    },
                    profileViewPostsTextColor: {
                        type: "string",
                        default: "#FFFFFF",
                    },
                    profileViewPostsWidth: { type: "number", default: 100 },
                    profileFontSize: { type: "number", default: 18 },
                    profileAvatarShape: { type: "string", default: "square" },
                    showName: { type: "boolean", default: !0 },
                    showTitle: { type: "boolean", default: !0 },
                    showDescription: { type: "boolean", default: !0 },
                    showViewPosts: { type: "boolean", default: !0 },
                    user_id: { type: "number", default: 0 },
                },
                edit: profile_legacy,
                save: function (props) {
                    var _props$attributes = props.attributes,
                        profileName = _props$attributes.profileName,
                        profileTitle = _props$attributes.profileTitle,
                        profileContent = _props$attributes.profileContent,
                        profileAlignment = _props$attributes.profileAlignment,
                        profileImgURL = _props$attributes.profileImgURL,
                        profileFontSize =
                            (_props$attributes.profileImgID,
                            _props$attributes.profileFontSize),
                        profileBackgroundColor =
                            _props$attributes.profileBackgroundColor,
                        profileTextColor = _props$attributes.profileTextColor,
                        profileAvatarShape =
                            (_props$attributes.profileLinkColor,
                            _props$attributes.profileAvatarShape),
                        profileViewPostsBackgroundColor =
                            _props$attributes.profileViewPostsBackgroundColor,
                        profileViewPostsTextColor =
                            _props$attributes.profileViewPostsTextColor,
                        profileURL = _props$attributes.profileURL,
                        showTitle = _props$attributes.showTitle,
                        showName = _props$attributes.showName,
                        showDescription = _props$attributes.showDescription,
                        showViewPosts = _props$attributes.showViewPosts;
                    return React.createElement(
                        block_Fragment,
                        null,
                        React.createElement(
                            "div",
                            {
                                className: classnames_default()(
                                    "mpp-profile-wrap",
                                    profileAlignment,
                                    profileAvatarShape,
                                    "mt-font-size-" + profileFontSize,
                                    "mpp-block-profile",
                                ),
                                style: {
                                    backgroundColor: profileBackgroundColor,
                                    color: profileTextColor,
                                },
                            },
                            React.createElement(
                                "div",
                                {
                                    className: classnames_default()(
                                        "mpp-profile-gutenberg-wrap",
                                        "mpp-block-profile",
                                    ),
                                    style: {
                                        backgroundColor: profileBackgroundColor,
                                        color: profileTextColor,
                                    },
                                },
                                React.createElement(
                                    "div",
                                    { className: "mpp-profile-image-wrapper" },
                                    React.createElement(
                                        "div",
                                        {
                                            className:
                                                "mpp-profile-image-square",
                                        },
                                        React.createElement("img", {
                                            className: "mpp-profile-avatar",
                                            src: profileImgURL,
                                            alt: "avatar",
                                        }),
                                    ),
                                ),
                                React.createElement(
                                    "div",
                                    { className: "mpp-content-wrap" },
                                    profileName &&
                                        !!profileName.length &&
                                        showName &&
                                        React.createElement(
                                            block_RichText.Content,
                                            {
                                                tagName: "h2",
                                                className: "mpp-profile-name",
                                                style: {
                                                    color: profileTextColor,
                                                },
                                                value: profileName,
                                            },
                                        ),
                                    profileTitle &&
                                        !!profileTitle.length &&
                                        showTitle &&
                                        React.createElement(
                                            block_RichText.Content,
                                            {
                                                tagName: "p",
                                                className: "mpp-profile-title",
                                                style: {
                                                    color: profileTextColor,
                                                },
                                                value: profileTitle,
                                            },
                                        ),
                                    profileContent &&
                                        !!profileContent.length &&
                                        showDescription &&
                                        React.createElement(
                                            block_RichText.Content,
                                            {
                                                tagName: "div",
                                                className: "mpp-profile-text",
                                                value: profileContent,
                                            },
                                        ),
                                ),
                            ),
                            profileURL &&
                                !!profileURL.length &&
                                React.createElement(
                                    "div",
                                    { className: "mpp-gutenberg-view-posts" },
                                    showViewPosts &&
                                        React.createElement(
                                            "div",
                                            {
                                                className:
                                                    "mpp-profile-view-posts",
                                                style: {
                                                    backgroundColor:
                                                        profileViewPostsBackgroundColor,
                                                    color: profileViewPostsTextColor,
                                                },
                                            },
                                            React.createElement(
                                                "a",
                                                {
                                                    href: profileURL,
                                                    style: {
                                                        backgroundColor:
                                                            profileViewPostsBackgroundColor,
                                                        color: profileViewPostsTextColor,
                                                    },
                                                },
                                                block_(
                                                    "View Posts",
                                                    "metronet-profile-picture",
                                                ),
                                            ),
                                        ),
                                ),
                        ),
                    );
                },
            }),
                registerBlockType("mpp/user-profile-enhanced", {
                    title: block_("User Profile", "metronet-profile-picture"),
                    icon: React.createElement(
                        "svg",
                        {
                            id: "Layer_1",
                            "data-name": "Layer 1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 753.53 979.74",
                        },
                        React.createElement("title", null, "upp"),
                        React.createElement("path", {
                            d: "M806.37,185.9c0,40.27-30.49,72.9-68.11,72.9s-68.17-32.63-68.17-72.9S700.62,113,738.26,113,806.37,145.64,806.37,185.9Z",
                            transform: "translate(-123.47 -11)",
                            fill: "#4063ad",
                        }),
                        React.createElement("path", {
                            d: "M330.36,183.8c0,40.27-30.49,72.9-68.12,72.9s-68.17-32.63-68.17-72.9,30.52-72.87,68.17-72.87S330.36,143.56,330.36,183.8Z",
                            transform: "translate(-123.47 -11)",
                            fill: "#a34d9c",
                        }),
                        React.createElement("path", {
                            d: "M331.3,888.13V698.21H329c-31.64,0-57.28-27.45-57.28-61.29V336.5a118.37,118.37,0,0,1,5.43-34.79H179.84c-31.94,0-56.37,31.57-56.37,56.34V601.46h48.32V888.13Z",
                            transform: "translate(-123.47 -11)",
                            fill: "#a34d9c",
                        }),
                        React.createElement("path", {
                            d: "M388.59,636.92V990.74H611.88V636.92H671.5V336.5c0-30.63-27.64-69.57-69.6-69.57H398.56c-39.44,0-69.61,38.94-69.61,69.57V636.92Z",
                            transform: "translate(-123.47 -11)",
                            fill: "#f4831f",
                        }),
                        React.createElement("path", {
                            d: "M584.3,101c0,49.69-37.63,90-84,90S416.12,150.67,416.12,101s37.66-90,84.14-90S584.3,51.27,584.3,101Z",
                            transform: "translate(-123.47 -11)",
                            fill: "#f4831f",
                        }),
                        React.createElement("path", {
                            d: "M820.61,303.79H724.08a121.69,121.69,0,0,1,4.7,32.71V636.92c0,33.84-25.64,61.29-57.28,61.29h-2.33v192H828.7V603.54H877V360.16C877,335.36,854.62,303.79,820.61,303.79Z",
                            transform: "translate(-123.47 -11)",
                            fill: "#4063ad",
                        }),
                    ),
                    category: "mpp",
                    getEditWrapperProps: function (attributes) {},
                    edit: profile,
                    save: function () {
                        return null;
                    },
                });
        })();
})();
//# sourceMappingURL=blocks.build.js.map
