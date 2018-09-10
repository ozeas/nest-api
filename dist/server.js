/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "427351e26d435aa22225";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!*****************************************!*\
  !*** (webpack)/hot/log-apply-result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function(updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function(moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function(moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function(moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function(moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t\"[HMR] Consider using the NamedModulesPlugin for module names.\"\n\t\t\t);\n\t}\n};\n\n\n//# sourceURL=webpack:///(webpack)/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var logLevel = \"info\";\n\nfunction dummy() {}\n\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\nfunction logGroup(logFn) {\n\treturn function(level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\nmodule.exports = function(level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\nmodule.exports.setLogLevel = function(level) {\n\tlogLevel = level;\n};\n\n\n//# sourceURL=webpack:///(webpack)/hot/log.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?100":
/*!*********************************!*\
  !*** (webpack)/hot/poll.js?100 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.substr(1) || 10 * 60 * 1000;\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function(updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function(err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + (err.stack || err.message));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\n\t\t\t\t\t\t\t\"warning\",\n\t\t\t\t\t\t\t\"[HMR] Update failed: \" + (err.stack || err.message)\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n\n/* WEBPACK VAR INJECTION */}.call(this, \"?100\"))\n\n//# sourceURL=webpack:///(webpack)/hot/poll.js?");

/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ \"./src/modules/auth/auth.module.ts\");\nconst produto_module_1 = __webpack_require__(/*! ./modules/produtos/produto.module */ \"./src/modules/produtos/produto.module.ts\");\nlet ApplicationModule = class ApplicationModule {\n};\nApplicationModule = __decorate([\n    common_1.Module({\n        imports: [produto_module_1.ProdutoModule, auth_module_1.AuthModule],\n        controllers: []\n    })\n], ApplicationModule);\nexports.ApplicationModule = ApplicationModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst auth_service_1 = __webpack_require__(/*! ./auth.service */ \"./src/modules/auth/auth.service.ts\");\nconst http_strategy_1 = __webpack_require__(/*! ./http.strategy */ \"./src/modules/auth/http.strategy.ts\");\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nlet AuthModule = class AuthModule {\n};\nAuthModule = __decorate([\n    common_1.Module({\n        imports: [\n            passport_1.PassportModule.register({ defaultStrategy: 'bearer' }),\n        ],\n        providers: [auth_service_1.AuthService, http_strategy_1.HttpStrategy]\n    })\n], AuthModule);\nexports.AuthModule = AuthModule;\n\n\n//# sourceURL=webpack:///./src/modules/auth/auth.module.ts?");

/***/ }),

/***/ "./src/modules/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/auth.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet AuthService = class AuthService {\n    validateUser(token) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return false;\n        });\n    }\n};\nAuthService = __decorate([\n    common_1.Injectable()\n], AuthService);\nexports.AuthService = AuthService;\n\n\n//# sourceURL=webpack:///./src/modules/auth/auth.service.ts?");

/***/ }),

/***/ "./src/modules/auth/http.strategy.ts":
/*!*******************************************!*\
  !*** ./src/modules/auth/http.strategy.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst passport_http_bearer_1 = __webpack_require__(/*! passport-http-bearer */ \"passport-http-bearer\");\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst auth_service_1 = __webpack_require__(/*! ./auth.service */ \"./src/modules/auth/auth.service.ts\");\nlet HttpStrategy = class HttpStrategy extends passport_1.PassportStrategy(passport_http_bearer_1.Strategy) {\n    constructor(authService) {\n        super();\n        this.authService = authService;\n    }\n    validate(token) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const user = yield this.authService.validateUser(token);\n            if (!user) {\n                throw new common_1.UnauthorizedException();\n            }\n            return user;\n        });\n    }\n};\nHttpStrategy = __decorate([\n    common_1.Injectable(),\n    __metadata(\"design:paramtypes\", [auth_service_1.AuthService])\n], HttpStrategy);\nexports.HttpStrategy = HttpStrategy;\n\n\n//# sourceURL=webpack:///./src/modules/auth/http.strategy.ts?");

/***/ }),

/***/ "./src/modules/database/database.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/database/database.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst database_provider_1 = __webpack_require__(/*! ./database.provider */ \"./src/modules/database/database.provider.ts\");\nlet DatabaseModule = class DatabaseModule {\n};\nDatabaseModule = __decorate([\n    common_1.Module({\n        providers: [database_provider_1.databaseProvider],\n        exports: [database_provider_1.databaseProvider]\n    })\n], DatabaseModule);\nexports.DatabaseModule = DatabaseModule;\n\n\n//# sourceURL=webpack:///./src/modules/database/database.module.ts?");

/***/ }),

/***/ "./src/modules/database/database.provider.ts":
/*!***************************************************!*\
  !*** ./src/modules/database/database.provider.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\nconst index_1 = __webpack_require__(/*! ../../shared/index */ \"./src/shared/index.ts\");\nconst produto_entity_1 = __webpack_require__(/*! ../produtos/produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\nexports.databaseProvider = {\n    provide: 'SequelizeInstance',\n    useFactory: () => {\n        let config;\n        switch (\"development\") {\n            case 'prod':\n            case 'production':\n                config = index_1.databaseConfig.production;\n            case 'dev':\n            case 'development':\n                config = index_1.databaseConfig.development;\n            default:\n                config = index_1.databaseConfig.development;\n        }\n        const sequelize = new sequelize_typescript_1.Sequelize(config);\n        sequelize.addModels([produto_entity_1.Produto]);\n        return sequelize;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/modules/database/database.provider.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.controller.ts":
/*!****************************************************!*\
  !*** ./src/modules/produtos/produto.controller.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst produto_service_1 = __webpack_require__(/*! ./produto.service */ \"./src/modules/produtos/produto.service.ts\");\nconst produto_dto_1 = __webpack_require__(/*! ./validators/produto-dto */ \"./src/modules/produtos/validators/produto-dto.ts\");\nconst Message = __webpack_require__(/*! ../../shared/messages/message-code-success */ \"./src/shared/messages/message-code-success.ts\");\nlet ProdutoController = class ProdutoController {\n    constructor(produtoService) {\n        this.produtoService = produtoService;\n    }\n    index(res, options) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const produtos = yield this.produtoService.getAll(options);\n            return res.status(common_1.HttpStatus.OK).json(produtos);\n        });\n    }\n    create(res, produto) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this.produtoService.create(produto);\n            return res.status(common_1.HttpStatus.CREATED).json(Message.CRIADO);\n        });\n    }\n    show(res, id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const produto = yield this.produtoService.get(id);\n            return res.status(common_1.HttpStatus.OK).json(produto);\n        });\n    }\n    update(res, produto, id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this.produtoService.update(id, produto);\n            return res.status(common_1.HttpStatus.OK).json(Message.ATUALIZADO);\n        });\n    }\n    delete(res, id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this.produtoService.delete(id);\n            return res.status(common_1.HttpStatus.OK).send();\n        });\n    }\n};\n__decorate([\n    common_1.Get('produtos'),\n    __param(0, common_1.Res()), __param(1, common_1.Query()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Object]),\n    __metadata(\"design:returntype\", Promise)\n], ProdutoController.prototype, \"index\", null);\n__decorate([\n    common_1.Post('produtos'),\n    __param(0, common_1.Res()), __param(1, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, produto_dto_1.ProdutoValidate]),\n    __metadata(\"design:returntype\", Promise)\n], ProdutoController.prototype, \"create\", null);\n__decorate([\n    common_1.Get('produtos/:id'),\n    __param(0, common_1.Res()), __param(1, common_1.Param('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Number]),\n    __metadata(\"design:returntype\", Promise)\n], ProdutoController.prototype, \"show\", null);\n__decorate([\n    common_1.Put('produtos/:id'),\n    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.Param('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Object, Number]),\n    __metadata(\"design:returntype\", Promise)\n], ProdutoController.prototype, \"update\", null);\n__decorate([\n    common_1.Delete('produtos/:id'),\n    __param(0, common_1.Res()), __param(1, common_1.Param('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Number]),\n    __metadata(\"design:returntype\", Promise)\n], ProdutoController.prototype, \"delete\", null);\nProdutoController = __decorate([\n    common_1.Controller(),\n    common_1.Catch(common_1.HttpException),\n    __metadata(\"design:paramtypes\", [produto_service_1.ProdutoService])\n], ProdutoController);\nexports.ProdutoController = ProdutoController;\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.controller.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.entity.ts":
/*!************************************************!*\
  !*** ./src/modules/produtos/produto.entity.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\nconst tableOptions = {\n    timestamps: false,\n    tableName: 'produto'\n};\nlet Produto = class Produto extends sequelize_typescript_1.Model {\n};\n__decorate([\n    sequelize_typescript_1.Column({\n        type: sequelize_typescript_1.DataType.NUMERIC,\n        allowNull: false,\n        autoIncrement: true,\n        unique: true,\n        primaryKey: true\n    }),\n    __metadata(\"design:type\", Number)\n], Produto.prototype, \"id\", void 0);\n__decorate([\n    sequelize_typescript_1.Column({\n        type: sequelize_typescript_1.DataType.CHAR(40)\n    }),\n    __metadata(\"design:type\", String)\n], Produto.prototype, \"descricao\", void 0);\n__decorate([\n    sequelize_typescript_1.Column({\n        type: sequelize_typescript_1.DataType.DECIMAL(11, 2)\n    }),\n    __metadata(\"design:type\", Number)\n], Produto.prototype, \"valor\", void 0);\n__decorate([\n    sequelize_typescript_1.Column({\n        type: sequelize_typescript_1.DataType.DECIMAL(11, 2)\n    }),\n    __metadata(\"design:type\", Number)\n], Produto.prototype, \"estoque\", void 0);\nProduto = __decorate([\n    sequelize_typescript_1.Table(tableOptions)\n], Produto);\nexports.Produto = Produto;\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.entity.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.module.ts":
/*!************************************************!*\
  !*** ./src/modules/produtos/produto.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst database_module_1 = __webpack_require__(/*! ../database/database.module */ \"./src/modules/database/database.module.ts\");\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst produto_controller_1 = __webpack_require__(/*! ./produto.controller */ \"./src/modules/produtos/produto.controller.ts\");\nconst produto_service_1 = __webpack_require__(/*! ./produto.service */ \"./src/modules/produtos/produto.service.ts\");\nconst produto_provider_1 = __webpack_require__(/*! ./produto.provider */ \"./src/modules/produtos/produto.provider.ts\");\nconst produto_repository_1 = __webpack_require__(/*! ./produto.repository */ \"./src/modules/produtos/produto.repository.ts\");\nlet ProdutoModule = class ProdutoModule {\n    configure(consumer) {\n        consumer\n            .apply()\n            .forRoutes({ path: '/produtos', method: common_1.RequestMethod.GET }, { path: '/produtos', method: common_1.RequestMethod.POST }, { path: '/produtos/:id', method: common_1.RequestMethod.PUT }, { path: '/produtos/:id', method: common_1.RequestMethod.DELETE });\n    }\n};\nProdutoModule = __decorate([\n    common_1.Module({\n        imports: [\n            database_module_1.DatabaseModule,\n            passport_1.PassportModule.register({ defaultStrategy: 'bearer' }),\n        ],\n        providers: [\n            produto_repository_1.ProdutoRepository,\n            produto_provider_1.produtoProvider,\n            produto_service_1.ProdutoService,\n            produto_provider_1.repositoryProvide\n        ],\n        controllers: [produto_controller_1.ProdutoController]\n    })\n], ProdutoModule);\nexports.ProdutoModule = ProdutoModule;\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.module.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.provider.ts":
/*!**************************************************!*\
  !*** ./src/modules/produtos/produto.provider.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst produto_entity_1 = __webpack_require__(/*! ./produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\nconst produto_repository_1 = __webpack_require__(/*! ./produto.repository */ \"./src/modules/produtos/produto.repository.ts\");\nexports.produtoProvider = {\n    provide: 'ProdutoModel',\n    useValue: produto_entity_1.Produto\n};\nexports.repositoryProvide = {\n    provide: 'ProdutoRepository',\n    useClass: produto_repository_1.ProdutoRepository\n};\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.provider.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.repository.ts":
/*!****************************************************!*\
  !*** ./src/modules/produtos/produto.repository.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst produto_entity_1 = __webpack_require__(/*! ./produto.entity */ \"./src/modules/produtos/produto.entity.ts\");\nconst message_code_error_1 = __webpack_require__(/*! ../../shared/errors/message-code-error */ \"./src/shared/errors/message-code-error.ts\");\nlet ProdutoRepository = class ProdutoRepository {\n    constructor(produtoRepository, sequelizeInstance) {\n        this.produtoRepository = produtoRepository;\n        this.sequelizeInstance = sequelizeInstance;\n    }\n    findAll(options) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let filtro = { where: options };\n            if (!options) {\n                filtro = null;\n            }\n            return yield this.produtoRepository.findAll(filtro);\n        });\n    }\n    findOne(options) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const where = { where: options };\n            return yield this.produtoRepository.findOne(where);\n        });\n    }\n    findById(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.produtoRepository.findById(id);\n        });\n    }\n    create(produto) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\n                return yield this.produtoRepository.create(produto, {\n                    returning: true,\n                    transaction\n                });\n            }));\n        });\n    }\n    update(id, data) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\n                let produto = yield this.produtoRepository.findById(id, {\n                    transaction\n                });\n                if (!produto) {\n                    throw new message_code_error_1.MessageCodeError('generic:notFound');\n                }\n                return yield produto_entity_1.Produto.update(data, { where: { id: id }, transaction: transaction });\n            }));\n        });\n    }\n    delete(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.sequelizeInstance.transaction((transaction) => __awaiter(this, void 0, void 0, function* () {\n                return yield this.produtoRepository.destroy({\n                    where: { id },\n                    transaction\n                });\n            }));\n        });\n    }\n};\nProdutoRepository = __decorate([\n    common_1.Injectable(),\n    __param(0, common_1.Inject('ProdutoModel')),\n    __param(1, common_1.Inject('SequelizeInstance')),\n    __metadata(\"design:paramtypes\", [Object, Object])\n], ProdutoRepository);\nexports.ProdutoRepository = ProdutoRepository;\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.repository.ts?");

/***/ }),

/***/ "./src/modules/produtos/produto.service.ts":
/*!*************************************************!*\
  !*** ./src/modules/produtos/produto.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet ProdutoService = class ProdutoService {\n    constructor(_repository) {\n        this._repository = _repository;\n    }\n    getAll(options) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this._repository.findAll(options);\n        });\n    }\n    getOne(options) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this._repository.findAll(options);\n        });\n    }\n    get(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this._repository.findById(id);\n        });\n    }\n    create(produto) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this._repository.create(produto);\n        });\n    }\n    update(id, produto) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this._repository.update(id, produto);\n        });\n    }\n    delete(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this._repository.delete(id);\n        });\n    }\n};\nProdutoService = __decorate([\n    common_1.Injectable(),\n    __param(0, common_1.Inject('ProdutoRepository')),\n    __metadata(\"design:paramtypes\", [Object])\n], ProdutoService);\nexports.ProdutoService = ProdutoService;\n\n\n//# sourceURL=webpack:///./src/modules/produtos/produto.service.ts?");

/***/ }),

/***/ "./src/modules/produtos/validators/produto-dto.ts":
/*!********************************************************!*\
  !*** ./src/modules/produtos/validators/produto-dto.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\nclass ProdutoValidate {\n}\n__decorate([\n    class_validator_1.IsNotEmpty(),\n    class_validator_1.MaxLength(40, {\n        message: \"Descrição não deve ser maior que 40 caracters.\"\n    }),\n    __metadata(\"design:type\", String)\n], ProdutoValidate.prototype, \"descricao\", void 0);\n__decorate([\n    class_validator_1.IsNotEmpty(),\n    class_validator_1.IsNumber(),\n    __metadata(\"design:type\", Number)\n], ProdutoValidate.prototype, \"valor\", void 0);\n__decorate([\n    class_validator_1.IsNotEmpty(),\n    class_validator_1.IsNumber(),\n    __metadata(\"design:type\", Number)\n], ProdutoValidate.prototype, \"estoque\", void 0);\nexports.ProdutoValidate = ProdutoValidate;\n\n\n//# sourceURL=webpack:///./src/modules/produtos/validators/produto-dto.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv.config();\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nfunction bootstrap() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule);\n        app.useGlobalPipes(new common_1.ValidationPipe({\n            transform: true,\n            dismissDefaultMessages: false\n        }));\n        yield app.listen(3000);\n        if (true) {\n            module.hot.accept();\n            module.hot.dispose(() => app.close());\n        }\n    });\n}\nbootstrap();\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "./src/shared/config/database.ts":
/*!***************************************!*\
  !*** ./src/shared/config/database.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.databaseConfig = {\n    development: {\n        username: process.env.DB_USER || '',\n        password: process.env.DB_PASSWORD || '',\n        database: process.env.DB_NAME || '',\n        host: process.env.DB_HOST || '127.0.0.1',\n        port: Number(process.env.DB_PORT) || 5432,\n        dialect: 'mssql',\n        logging: false,\n        force: true,\n        timezone: '-02:00'\n    },\n    production: {\n        username: process.env.DB_USER || '',\n        password: process.env.DB_PASSWORD || '',\n        database: process.env.DB_NAME || '',\n        host: process.env.DB_HOST || '127.0.0.1',\n        port: Number(process.env.DB_PORT) || 5432,\n        dialect: 'mssql',\n        logging: false,\n        force: true,\n        timezone: '-02:00'\n    },\n    test: {\n        username: process.env.DB_USER || '',\n        password: process.env.DB_PASSWORD || '',\n        database: process.env.DB_NAME || '',\n        host: process.env.DB_HOST || '127.0.0.1',\n        port: Number(process.env.DB_PORT) || 5432,\n        dialect: 'mssql',\n        logging: true,\n        force: true,\n        timezone: '-02:00'\n    }\n};\n\n\n//# sourceURL=webpack:///./src/shared/config/database.ts?");

/***/ }),

/***/ "./src/shared/config/error-message.ts":
/*!********************************************!*\
  !*** ./src/shared/config/error-message.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nexports.errorMessagesConfig = {\n    'user:create:missingInformation': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to create a new user with missing information.',\n        userMessage: 'Impossible de créer un utilisateur avec des données manquantes.'\n    },\n    'user:create:missingFirstName': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to create a new user without first name.',\n        userMessage: 'Veuillez indiquer votre prénom.'\n    },\n    'user:create:missingLastName': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to create a new user without last name.',\n        userMessage: 'Veuillez indiquer votre nom.'\n    },\n    'user:create:missingEmail': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to create a new user without email.',\n        userMessage: 'Veuillez indiquer votre adresse e-mail.'\n    },\n    'user:create:missingPassword': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to create a new user without password.',\n        userMessage: 'Veuillez indiquer votre mot de passe.'\n    },\n    'user:create:emailAlreadyExist': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to create a new user with this email.',\n        userMessage: \"L'adresse e-mail que vous avez fourni est déjà utilisé.\"\n    },\n    'user:show:missingId': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to find the user caused by missing information.',\n        userMessage: \"Impossible de trouver un utilisateur sans fournir d'id.\"\n    },\n    'user:update:missingInformation': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to update the user caused by missing information.',\n        userMessage: \"Impossible de mettre à jour l'utilisateur avec des données manquantes.\"\n    },\n    'user:update:missingId': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to update the user caused by missing information.',\n        userMessage: \"Impossible de mettre à jour l'utilisateur avec des données manquantes.\"\n    },\n    'user:delete:missingId': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to delete the user caused by missing information.',\n        userMessage: \"Impossible de supprimer un utilisateur sans fournir d'id.\"\n    },\n    'user:notFound': {\n        type: 'notFound',\n        httpStatus: common_1.HttpStatus.NOT_FOUND,\n        errorMessage: 'Unable to found the user with the provided information.',\n        userMessage: 'Aucun utilisateur trouvé avec les informations fourni.'\n    },\n    'request:unauthorized': {\n        type: 'unauthorized',\n        httpStatus: common_1.HttpStatus.UNAUTHORIZED,\n        errorMessage: 'Access unauthorized.',\n        userMessage: 'Accès non autorisé.'\n    },\n    'auth:login:missingEmail': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to connect the user without email.',\n        userMessage: 'Veuillez indiquer votre adresse e-mail.'\n    },\n    'auth:login:missingPassword': {\n        type: 'BadRequest',\n        httpStatus: common_1.HttpStatus.BAD_REQUEST,\n        errorMessage: 'Unable to connect the user without password.',\n        userMessage: 'Veuillez indiquer votre mot de passe.'\n    },\n    'genric:notFound': {\n        type: 'notFound',\n        httpStatus: common_1.HttpStatus.NOT_FOUND,\n        errorMessage: 'Objeto não encontrado',\n        userMessage: 'Aucun utilisateur trouvé avec les informations fourni.'\n    }\n};\n\n\n//# sourceURL=webpack:///./src/shared/config/error-message.ts?");

/***/ }),

/***/ "./src/shared/errors/index.ts":
/*!************************************!*\
  !*** ./src/shared/errors/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./message-code-error */ \"./src/shared/errors/message-code-error.ts\"));\n\n\n//# sourceURL=webpack:///./src/shared/errors/index.ts?");

/***/ }),

/***/ "./src/shared/errors/message-code-error.ts":
/*!*************************************************!*\
  !*** ./src/shared/errors/message-code-error.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst error_message_1 = __webpack_require__(/*! ../config/error-message */ \"./src/shared/config/error-message.ts\");\nclass MessageCodeError extends Error {\n    constructor(messageCode) {\n        super();\n        const errorMessageConfig = this.getMessageFromMessageCode(messageCode);\n        if (!errorMessageConfig)\n            throw new Error('Unable to find message code error.');\n        Error.captureStackTrace(this, this.constructor);\n        this.name = this.constructor.name;\n        this.httpStatus = errorMessageConfig.httpStatus;\n        this.messageCode = messageCode;\n        this.errorMessage = errorMessageConfig.errorMessage;\n        this.message = errorMessageConfig.userMessage;\n    }\n    getMessageFromMessageCode(messageCode) {\n        let errorMessageConfig;\n        Object.keys(error_message_1.errorMessagesConfig).some(key => {\n            if (key === messageCode) {\n                errorMessageConfig = error_message_1.errorMessagesConfig[key];\n                return true;\n            }\n            return false;\n        });\n        if (!errorMessageConfig)\n            throw new Error('Unable to find the given message code error.');\n        return errorMessageConfig;\n    }\n}\nexports.MessageCodeError = MessageCodeError;\n\n\n//# sourceURL=webpack:///./src/shared/errors/message-code-error.ts?");

/***/ }),

/***/ "./src/shared/filters/dispatch-error.ts":
/*!**********************************************!*\
  !*** ./src/shared/filters/dispatch-error.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst message_code_error_1 = __webpack_require__(/*! ../errors/message-code-error */ \"./src/shared/errors/message-code-error.ts\");\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nlet DispatchError = class DispatchError {\n    catch(err, res) {\n        if (err instanceof message_code_error_1.MessageCodeError) {\n            res.setHeader('x-message-code-error', err.messageCode);\n            res.setHeader('x-message', err.message);\n            res.setHeader('x-httpStatus-error', err.httpStatus);\n            return res.status(err.httpStatus).send();\n        }\n        else if (err instanceof sequelize_1.ValidationError) {\n            res.setHeader('x-message-code-error', err.errors[0].type);\n            res.setHeader('x-message', err.errors[0].message);\n            res.setHeader('x-httpStatus-error', common_1.HttpStatus.BAD_REQUEST);\n            return res.status(common_1.HttpStatus.BAD_REQUEST).send();\n        }\n        else {\n            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send();\n        }\n    }\n};\nDispatchError = __decorate([\n    common_1.Catch(message_code_error_1.MessageCodeError, sequelize_1.ValidationError, common_1.HttpException, Error)\n], DispatchError);\nexports.DispatchError = DispatchError;\n\n\n//# sourceURL=webpack:///./src/shared/filters/dispatch-error.ts?");

/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./config/database */ \"./src/shared/config/database.ts\"));\n__export(__webpack_require__(/*! ./config/error-message */ \"./src/shared/config/error-message.ts\"));\n__export(__webpack_require__(/*! ./filters/dispatch-error */ \"./src/shared/filters/dispatch-error.ts\"));\n__export(__webpack_require__(/*! ./errors/index */ \"./src/shared/errors/index.ts\"));\n\n\n//# sourceURL=webpack:///./src/shared/index.ts?");

/***/ }),

/***/ "./src/shared/messages/message-code-success.ts":
/*!*****************************************************!*\
  !*** ./src/shared/messages/message-code-success.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CRIADO = {\n    message: 'Criado com sucesso',\n    status: 201\n};\nexports.ATUALIZADO = {\n    message: 'Atualizado com sucesso',\n    status: 200\n};\n\n\n//# sourceURL=webpack:///./src/shared/messages/message-code-success.ts?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi webpack/hot/poll?100 ./src/server.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! webpack/hot/poll?100 */\"./node_modules/webpack/hot/poll.js?100\");\nmodule.exports = __webpack_require__(/*! ./src/server.ts */\"./src/server.ts\");\n\n\n//# sourceURL=webpack:///multi_webpack/hot/poll?");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/common\");\n\n//# sourceURL=webpack:///external_%22@nestjs/common%22?");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/core\");\n\n//# sourceURL=webpack:///external_%22@nestjs/core%22?");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nestjs/passport\");\n\n//# sourceURL=webpack:///external_%22@nestjs/passport%22?");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"class-validator\");\n\n//# sourceURL=webpack:///external_%22class-validator%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "passport-http-bearer":
/*!***************************************!*\
  !*** external "passport-http-bearer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-http-bearer\");\n\n//# sourceURL=webpack:///external_%22passport-http-bearer%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ }),

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize-typescript\");\n\n//# sourceURL=webpack:///external_%22sequelize-typescript%22?");

/***/ })

/******/ });