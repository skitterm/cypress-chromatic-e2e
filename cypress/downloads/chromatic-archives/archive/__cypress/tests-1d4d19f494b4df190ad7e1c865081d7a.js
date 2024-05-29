/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cypress/support/commands.js":
/*!*************************************!*\
  !*** ./cypress/support/commands.js ***!
  \*************************************/
/***/ (() => {

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/***/ }),

/***/ "./node_modules/@chromatic-com/cypress/dist/support.js":
/*!*************************************************************!*\
  !*** ./node_modules/@chromatic-com/cypress/dist/support.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var rrwebSnapshot = __webpack_require__(/*! rrweb-snapshot */ "./node_modules/rrweb-snapshot/es/rrweb-snapshot.js");

Cypress.Commands.add("takeSnapshot",e=>{Cypress.config("isTextTerminal")&&cy.document().then(s=>{let r=rrwebSnapshot.snapshot(s);cy.get("@manualSnapshots").then(n=>[...n,{name:e,snapshot:r}]).as("manualSnapshots");});});beforeEach(()=>{Cypress.config("isTextTerminal")&&(cy.wrap([]).as("manualSnapshots"),cy.task("prepareArchives",{action:"setup-network-listener",payload:{allowedDomains:Cypress.env("assetDomains")}}));});afterEach(()=>{Cypress.env("disableAutoSnapshot")||!Cypress.config("isTextTerminal")||cy.document().then(e=>{let s=rrwebSnapshot.snapshot(e);cy.get("@manualSnapshots").then((r=[])=>{cy.url().then(n=>{cy.task("prepareArchives",{action:"save-archives",payload:{testTitlePath:[Cypress.spec.relativeToCommonRoot,...Cypress.currentTest.titlePath],domSnapshots:[...r,{snapshot:s}],chromaticStorybookParams:{...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("delay")&&{delay:Cypress.env("delay")},...Cypress.env("diffIncludeAntiAliasing")&&{diffIncludeAntiAliasing:Cypress.env("diffIncludeAntiAliasing")},...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("forcedColors")&&{forcedColors:Cypress.env("forcedColors")},...Cypress.env("pauseAnimationAtEnd")&&{pauseAnimationAtEnd:Cypress.env("pauseAnimationAtEnd")},...Cypress.env("prefersReducedMotion")&&{prefersReducedMotion:Cypress.env("prefersReducedMotion")},...Cypress.env("cropToViewport")&&{cropToViewport:Cypress.env("cropToViewport")}},pageUrl:n,viewport:{height:Cypress.config("viewportHeight"),width:Cypress.config("viewportWidth")}}});});});});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=support.js.map

/***/ }),

/***/ "./node_modules/rrweb-snapshot/es/rrweb-snapshot.js":
/*!**********************************************************!*\
  !*** ./node_modules/rrweb-snapshot/es/rrweb-snapshot.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IGNORED_NODE: () => (/* binding */ IGNORED_NODE),
/* harmony export */   Mirror: () => (/* binding */ Mirror),
/* harmony export */   NodeType: () => (/* binding */ NodeType),
/* harmony export */   adaptCssForReplay: () => (/* binding */ adaptCssForReplay),
/* harmony export */   buildNodeWithSN: () => (/* binding */ buildNodeWithSN),
/* harmony export */   classMatchesRegex: () => (/* binding */ classMatchesRegex),
/* harmony export */   cleanupSnapshot: () => (/* binding */ cleanupSnapshot),
/* harmony export */   createCache: () => (/* binding */ createCache),
/* harmony export */   createMirror: () => (/* binding */ createMirror),
/* harmony export */   escapeImportStatement: () => (/* binding */ escapeImportStatement),
/* harmony export */   extractFileExtension: () => (/* binding */ extractFileExtension),
/* harmony export */   fixSafariColons: () => (/* binding */ fixSafariColons),
/* harmony export */   genId: () => (/* binding */ genId),
/* harmony export */   getInputType: () => (/* binding */ getInputType),
/* harmony export */   ignoreAttribute: () => (/* binding */ ignoreAttribute),
/* harmony export */   is2DCanvasBlank: () => (/* binding */ is2DCanvasBlank),
/* harmony export */   isCSSImportRule: () => (/* binding */ isCSSImportRule),
/* harmony export */   isCSSStyleRule: () => (/* binding */ isCSSStyleRule),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isNativeShadowDom: () => (/* binding */ isNativeShadowDom),
/* harmony export */   isNodeMetaEqual: () => (/* binding */ isNodeMetaEqual),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),
/* harmony export */   maskInputValue: () => (/* binding */ maskInputValue),
/* harmony export */   needMaskingText: () => (/* binding */ needMaskingText),
/* harmony export */   rebuild: () => (/* binding */ rebuild),
/* harmony export */   serializeNodeWithId: () => (/* binding */ serializeNodeWithId),
/* harmony export */   snapshot: () => (/* binding */ snapshot),
/* harmony export */   stringifyRule: () => (/* binding */ stringifyRule),
/* harmony export */   stringifyStylesheet: () => (/* binding */ stringifyStylesheet),
/* harmony export */   toLowerCase: () => (/* binding */ toLowerCase),
/* harmony export */   transformAttribute: () => (/* binding */ transformAttribute),
/* harmony export */   visitSnapshot: () => (/* binding */ visitSnapshot)
/* harmony export */ });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Document"] = 0] = "Document";
    NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
    NodeType[NodeType["Element"] = 2] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATA"] = 4] = "CDATA";
    NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));

function isElement(n) {
    return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
    const host = n === null || n === void 0 ? void 0 : n.host;
    return Boolean((host === null || host === void 0 ? void 0 : host.shadowRoot) === n);
}
function isNativeShadowDom(shadowRoot) {
    return Object.prototype.toString.call(shadowRoot) === '[object ShadowRoot]';
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
    if (cssText.includes(' background-clip: text;') &&
        !cssText.includes(' -webkit-background-clip: text;')) {
        cssText = cssText.replace(/\sbackground-clip:\s*text;/g, ' -webkit-background-clip: text; background-clip: text;');
    }
    return cssText;
}
function escapeImportStatement(rule) {
    const { cssText } = rule;
    if (cssText.split('"').length < 3)
        return cssText;
    const statement = ['@import', `url(${JSON.stringify(rule.href)})`];
    if (rule.layerName === '') {
        statement.push(`layer`);
    }
    else if (rule.layerName) {
        statement.push(`layer(${rule.layerName})`);
    }
    if (rule.supportsText) {
        statement.push(`supports(${rule.supportsText})`);
    }
    if (rule.media.length) {
        statement.push(rule.media.mediaText);
    }
    return statement.join(' ') + ';';
}
function stringifyStylesheet(s) {
    try {
        const rules = s.rules || s.cssRules;
        return rules
            ? fixBrowserCompatibilityIssuesInCSS(Array.from(rules, stringifyRule).join(''))
            : null;
    }
    catch (error) {
        return null;
    }
}
function stringifyRule(rule) {
    let importStringified;
    if (isCSSImportRule(rule)) {
        try {
            importStringified =
                stringifyStylesheet(rule.styleSheet) ||
                    escapeImportStatement(rule);
        }
        catch (error) {
        }
    }
    else if (isCSSStyleRule(rule) && rule.selectorText.includes(':')) {
        return fixSafariColons(rule.cssText);
    }
    return importStringified || rule.cssText;
}
function fixSafariColons(cssStringified) {
    const regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
    return cssStringified.replace(regex, '$1\\$2');
}
function isCSSImportRule(rule) {
    return 'styleSheet' in rule;
}
function isCSSStyleRule(rule) {
    return 'selectorText' in rule;
}
class Mirror {
    constructor() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
    getId(n) {
        var _a;
        if (!n)
            return -1;
        const id = (_a = this.getMeta(n)) === null || _a === void 0 ? void 0 : _a.id;
        return id !== null && id !== void 0 ? id : -1;
    }
    getNode(id) {
        return this.idNodeMap.get(id) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(n) {
        return this.nodeMetaMap.get(n) || null;
    }
    removeNodeFromMap(n) {
        const id = this.getId(n);
        this.idNodeMap.delete(id);
        if (n.childNodes) {
            n.childNodes.forEach((childNode) => this.removeNodeFromMap(childNode));
        }
    }
    has(id) {
        return this.idNodeMap.has(id);
    }
    hasNode(node) {
        return this.nodeMetaMap.has(node);
    }
    add(n, meta) {
        const id = meta.id;
        this.idNodeMap.set(id, n);
        this.nodeMetaMap.set(n, meta);
    }
    replace(id, n) {
        const oldNode = this.getNode(id);
        if (oldNode) {
            const meta = this.nodeMetaMap.get(oldNode);
            if (meta)
                this.nodeMetaMap.set(n, meta);
        }
        this.idNodeMap.set(id, n);
    }
    reset() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
}
function createMirror() {
    return new Mirror();
}
function maskInputValue({ element, maskInputOptions, tagName, type, value, maskInputFn, }) {
    let text = value || '';
    const actualType = type && toLowerCase(type);
    if (maskInputOptions[tagName.toLowerCase()] ||
        (actualType && maskInputOptions[actualType])) {
        if (maskInputFn) {
            text = maskInputFn(text, element);
        }
        else {
            text = '*'.repeat(text.length);
        }
    }
    return text;
}
function toLowerCase(str) {
    return str.toLowerCase();
}
const ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
function is2DCanvasBlank(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx)
        return true;
    const chunkSize = 50;
    for (let x = 0; x < canvas.width; x += chunkSize) {
        for (let y = 0; y < canvas.height; y += chunkSize) {
            const getImageData = ctx.getImageData;
            const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData
                ? getImageData[ORIGINAL_ATTRIBUTE_NAME]
                : getImageData;
            const pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
            if (pixelBuffer.some((pixel) => pixel !== 0))
                return false;
        }
    }
    return true;
}
function isNodeMetaEqual(a, b) {
    if (!a || !b || a.type !== b.type)
        return false;
    if (a.type === NodeType.Document)
        return a.compatMode === b.compatMode;
    else if (a.type === NodeType.DocumentType)
        return (a.name === b.name &&
            a.publicId === b.publicId &&
            a.systemId === b.systemId);
    else if (a.type === NodeType.Comment ||
        a.type === NodeType.Text ||
        a.type === NodeType.CDATA)
        return a.textContent === b.textContent;
    else if (a.type === NodeType.Element)
        return (a.tagName === b.tagName &&
            JSON.stringify(a.attributes) ===
                JSON.stringify(b.attributes) &&
            a.isSVG === b.isSVG &&
            a.needBlock === b.needBlock);
    return false;
}
function getInputType(element) {
    const type = element.type;
    return element.hasAttribute('data-rr-is-password')
        ? 'password'
        : type
            ?
                toLowerCase(type)
            : null;
}
function extractFileExtension(path, baseURL) {
    var _a;
    let url;
    try {
        url = new URL(path, baseURL !== null && baseURL !== void 0 ? baseURL : window.location.href);
    }
    catch (err) {
        return null;
    }
    const regex = /\.([0-9a-z]+)(?:$)/i;
    const match = url.pathname.match(regex);
    return (_a = match === null || match === void 0 ? void 0 : match[1]) !== null && _a !== void 0 ? _a : null;
}

let _id = 1;
const tagNameRegex = new RegExp('[^a-z0-9-_:]');
const IGNORED_NODE = -2;
function genId() {
    return _id++;
}
function getValidTagName(element) {
    if (element instanceof HTMLFormElement) {
        return 'form';
    }
    const processedTagName = toLowerCase(element.tagName);
    if (tagNameRegex.test(processedTagName)) {
        return 'div';
    }
    return processedTagName;
}
function extractOrigin(url) {
    let origin = '';
    if (url.indexOf('//') > -1) {
        origin = url.split('/').slice(0, 3).join('/');
    }
    else {
        origin = url.split('/')[0];
    }
    origin = origin.split('?')[0];
    return origin;
}
let canvasService;
let canvasCtx;
const URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
const URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
const URL_WWW_MATCH = /^www\..*/i;
const DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
    return (cssText || '').replace(URL_IN_CSS_REF, (origin, quote1, path1, quote2, path2, path3) => {
        const filePath = path1 || path2 || path3;
        const maybeQuote = quote1 || quote2 || '';
        if (!filePath) {
            return origin;
        }
        if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
            return `url(${maybeQuote}${filePath}${maybeQuote})`;
        }
        if (DATA_URI.test(filePath)) {
            return `url(${maybeQuote}${filePath}${maybeQuote})`;
        }
        if (filePath[0] === '/') {
            return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
        }
        const stack = href.split('/');
        const parts = filePath.split('/');
        stack.pop();
        for (const part of parts) {
            if (part === '.') {
                continue;
            }
            else if (part === '..') {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }
        return `url(${maybeQuote}${stack.join('/')}${maybeQuote})`;
    });
}
const SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
const SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
    if (attributeValue.trim() === '') {
        return attributeValue;
    }
    let pos = 0;
    function collectCharacters(regEx) {
        let chars;
        const match = regEx.exec(attributeValue.substring(pos));
        if (match) {
            chars = match[0];
            pos += chars.length;
            return chars;
        }
        return '';
    }
    const output = [];
    while (true) {
        collectCharacters(SRCSET_COMMAS_OR_SPACES);
        if (pos >= attributeValue.length) {
            break;
        }
        let url = collectCharacters(SRCSET_NOT_SPACES);
        if (url.slice(-1) === ',') {
            url = absoluteToDoc(doc, url.substring(0, url.length - 1));
            output.push(url);
        }
        else {
            let descriptorsStr = '';
            url = absoluteToDoc(doc, url);
            let inParens = false;
            while (true) {
                const c = attributeValue.charAt(pos);
                if (c === '') {
                    output.push((url + descriptorsStr).trim());
                    break;
                }
                else if (!inParens) {
                    if (c === ',') {
                        pos += 1;
                        output.push((url + descriptorsStr).trim());
                        break;
                    }
                    else if (c === '(') {
                        inParens = true;
                    }
                }
                else {
                    if (c === ')') {
                        inParens = false;
                    }
                }
                descriptorsStr += c;
                pos += 1;
            }
        }
    }
    return output.join(', ');
}
const cachedDocument = new WeakMap();
function absoluteToDoc(doc, attributeValue) {
    if (!attributeValue || attributeValue.trim() === '') {
        return attributeValue;
    }
    return getHref(doc, attributeValue);
}
function isSVGElement(el) {
    return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
}
function getHref(doc, customHref) {
    let a = cachedDocument.get(doc);
    if (!a) {
        a = doc.createElement('a');
        cachedDocument.set(doc, a);
    }
    if (!customHref) {
        customHref = '';
    }
    else if (customHref.startsWith('blob:') || customHref.startsWith('data:')) {
        return customHref;
    }
    a.setAttribute('href', customHref);
    return a.href;
}
function transformAttribute(doc, tagName, name, value) {
    if (!value) {
        return value;
    }
    if (name === 'src' ||
        (name === 'href' && !(tagName === 'use' && value[0] === '#'))) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'xlink:href' && value[0] !== '#') {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'background' &&
        (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'srcset') {
        return getAbsoluteSrcsetString(doc, value);
    }
    else if (name === 'style') {
        return absoluteToStylesheet(value, getHref(doc));
    }
    else if (tagName === 'object' && name === 'data') {
        return absoluteToDoc(doc, value);
    }
    return value;
}
function ignoreAttribute(tagName, name, _value) {
    return (tagName === 'video' || tagName === 'audio') && name === 'autoplay';
}
function _isBlockedElement(element, blockClass, blockSelector) {
    try {
        if (typeof blockClass === 'string') {
            if (element.classList.contains(blockClass)) {
                return true;
            }
        }
        else {
            for (let eIndex = element.classList.length; eIndex--;) {
                const className = element.classList[eIndex];
                if (blockClass.test(className)) {
                    return true;
                }
            }
        }
        if (blockSelector) {
            return element.matches(blockSelector);
        }
    }
    catch (e) {
    }
    return false;
}
function classMatchesRegex(node, regex, checkAncestors) {
    if (!node)
        return false;
    if (node.nodeType !== node.ELEMENT_NODE) {
        if (!checkAncestors)
            return false;
        return classMatchesRegex(node.parentNode, regex, checkAncestors);
    }
    for (let eIndex = node.classList.length; eIndex--;) {
        const className = node.classList[eIndex];
        if (regex.test(className)) {
            return true;
        }
    }
    if (!checkAncestors)
        return false;
    return classMatchesRegex(node.parentNode, regex, checkAncestors);
}
function needMaskingText(node, maskTextClass, maskTextSelector, checkAncestors) {
    try {
        const el = node.nodeType === node.ELEMENT_NODE
            ? node
            : node.parentElement;
        if (el === null)
            return false;
        if (typeof maskTextClass === 'string') {
            if (checkAncestors) {
                if (el.closest(`.${maskTextClass}`))
                    return true;
            }
            else {
                if (el.classList.contains(maskTextClass))
                    return true;
            }
        }
        else {
            if (classMatchesRegex(el, maskTextClass, checkAncestors))
                return true;
        }
        if (maskTextSelector) {
            if (checkAncestors) {
                if (el.closest(maskTextSelector))
                    return true;
            }
            else {
                if (el.matches(maskTextSelector))
                    return true;
            }
        }
    }
    catch (e) {
    }
    return false;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
    const win = iframeEl.contentWindow;
    if (!win) {
        return;
    }
    let fired = false;
    let readyState;
    try {
        readyState = win.document.readyState;
    }
    catch (error) {
        return;
    }
    if (readyState !== 'complete') {
        const timer = setTimeout(() => {
            if (!fired) {
                listener();
                fired = true;
            }
        }, iframeLoadTimeout);
        iframeEl.addEventListener('load', () => {
            clearTimeout(timer);
            fired = true;
            listener();
        });
        return;
    }
    const blankUrl = 'about:blank';
    if (win.location.href !== blankUrl ||
        iframeEl.src === blankUrl ||
        iframeEl.src === '') {
        setTimeout(listener, 0);
        return iframeEl.addEventListener('load', listener);
    }
    iframeEl.addEventListener('load', listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
    let fired = false;
    let styleSheetLoaded;
    try {
        styleSheetLoaded = link.sheet;
    }
    catch (error) {
        return;
    }
    if (styleSheetLoaded)
        return;
    const timer = setTimeout(() => {
        if (!fired) {
            listener();
            fired = true;
        }
    }, styleSheetLoadTimeout);
    link.addEventListener('load', () => {
        clearTimeout(timer);
        fired = true;
        listener();
    });
}
function serializeNode(n, options) {
    const { doc, mirror, blockClass, blockSelector, needsMask, inlineStylesheet, maskInputOptions = {}, maskTextFn, maskInputFn, dataURLOptions = {}, inlineImages, recordCanvas, keepIframeSrcFn, newlyAddedElement = false, } = options;
    const rootId = getRootId(doc, mirror);
    switch (n.nodeType) {
        case n.DOCUMENT_NODE:
            if (n.compatMode !== 'CSS1Compat') {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                    compatMode: n.compatMode,
                };
            }
            else {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                };
            }
        case n.DOCUMENT_TYPE_NODE:
            return {
                type: NodeType.DocumentType,
                name: n.name,
                publicId: n.publicId,
                systemId: n.systemId,
                rootId,
            };
        case n.ELEMENT_NODE:
            return serializeElementNode(n, {
                doc,
                blockClass,
                blockSelector,
                inlineStylesheet,
                maskInputOptions,
                maskInputFn,
                dataURLOptions,
                inlineImages,
                recordCanvas,
                keepIframeSrcFn,
                newlyAddedElement,
                rootId,
            });
        case n.TEXT_NODE:
            return serializeTextNode(n, {
                doc,
                needsMask,
                maskTextFn,
                rootId,
            });
        case n.CDATA_SECTION_NODE:
            return {
                type: NodeType.CDATA,
                textContent: '',
                rootId,
            };
        case n.COMMENT_NODE:
            return {
                type: NodeType.Comment,
                textContent: n.textContent || '',
                rootId,
            };
        default:
            return false;
    }
}
function getRootId(doc, mirror) {
    if (!mirror.hasNode(doc))
        return undefined;
    const docId = mirror.getId(doc);
    return docId === 1 ? undefined : docId;
}
function serializeTextNode(n, options) {
    var _a;
    const { needsMask, maskTextFn, rootId } = options;
    const parentTagName = n.parentNode && n.parentNode.tagName;
    let textContent = n.textContent;
    const isStyle = parentTagName === 'STYLE' ? true : undefined;
    const isScript = parentTagName === 'SCRIPT' ? true : undefined;
    if (isStyle && textContent) {
        try {
            if (n.nextSibling || n.previousSibling) {
            }
            else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
                textContent = stringifyStylesheet(n.parentNode.sheet);
            }
        }
        catch (err) {
            console.warn(`Cannot get CSS styles from text's parentNode. Error: ${err}`, n);
        }
        textContent = absoluteToStylesheet(textContent, getHref(options.doc));
    }
    if (isScript) {
        textContent = 'SCRIPT_PLACEHOLDER';
    }
    if (!isStyle && !isScript && textContent && needsMask) {
        textContent = maskTextFn
            ? maskTextFn(textContent, n.parentElement)
            : textContent.replace(/[\S]/g, '*');
    }
    return {
        type: NodeType.Text,
        textContent: textContent || '',
        isStyle,
        rootId,
    };
}
function serializeElementNode(n, options) {
    const { doc, blockClass, blockSelector, inlineStylesheet, maskInputOptions = {}, maskInputFn, dataURLOptions = {}, inlineImages, recordCanvas, keepIframeSrcFn, newlyAddedElement = false, rootId, } = options;
    const needBlock = _isBlockedElement(n, blockClass, blockSelector);
    const tagName = getValidTagName(n);
    let attributes = {};
    const len = n.attributes.length;
    for (let i = 0; i < len; i++) {
        const attr = n.attributes[i];
        if (!ignoreAttribute(tagName, attr.name, attr.value)) {
            attributes[attr.name] = transformAttribute(doc, tagName, toLowerCase(attr.name), attr.value);
        }
    }
    if (tagName === 'link' && inlineStylesheet) {
        const stylesheet = Array.from(doc.styleSheets).find((s) => {
            return s.href === n.href;
        });
        let cssText = null;
        if (stylesheet) {
            cssText = stringifyStylesheet(stylesheet);
        }
        if (cssText) {
            delete attributes.rel;
            delete attributes.href;
            attributes._cssText = absoluteToStylesheet(cssText, stylesheet.href);
        }
    }
    if (tagName === 'style' &&
        n.sheet &&
        !(n.innerText || n.textContent || '').trim().length) {
        const cssText = stringifyStylesheet(n.sheet);
        if (cssText) {
            attributes._cssText = absoluteToStylesheet(cssText, getHref(doc));
        }
    }
    if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        const value = n.value;
        const checked = n.checked;
        if (attributes.type !== 'radio' &&
            attributes.type !== 'checkbox' &&
            attributes.type !== 'submit' &&
            attributes.type !== 'button' &&
            value) {
            attributes.value = maskInputValue({
                element: n,
                type: getInputType(n),
                tagName,
                value,
                maskInputOptions,
                maskInputFn,
            });
        }
        else if (checked) {
            attributes.checked = checked;
        }
    }
    if (tagName === 'option') {
        if (n.selected && !maskInputOptions['select']) {
            attributes.selected = true;
        }
        else {
            delete attributes.selected;
        }
    }
    if (tagName === 'canvas' && recordCanvas) {
        if (n.__context === '2d') {
            if (!is2DCanvasBlank(n)) {
                attributes.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
        }
        else if (!('__context' in n)) {
            const canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            const blankCanvas = document.createElement('canvas');
            blankCanvas.width = n.width;
            blankCanvas.height = n.height;
            const blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            if (canvasDataURL !== blankCanvasDataURL) {
                attributes.rr_dataURL = canvasDataURL;
            }
        }
    }
    if (tagName === 'img' && inlineImages) {
        if (!canvasService) {
            canvasService = doc.createElement('canvas');
            canvasCtx = canvasService.getContext('2d');
        }
        const image = n;
        const oldValue = image.crossOrigin;
        image.crossOrigin = 'anonymous';
        const recordInlineImage = () => {
            image.removeEventListener('load', recordInlineImage);
            try {
                canvasService.width = image.naturalWidth;
                canvasService.height = image.naturalHeight;
                canvasCtx.drawImage(image, 0, 0);
                attributes.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
            catch (err) {
                console.warn(`Cannot inline img src=${image.currentSrc}! Error: ${err}`);
            }
            oldValue
                ? (attributes.crossOrigin = oldValue)
                : image.removeAttribute('crossorigin');
        };
        if (image.complete && image.naturalWidth !== 0)
            recordInlineImage();
        else
            image.addEventListener('load', recordInlineImage);
    }
    if (tagName === 'audio' || tagName === 'video') {
        const mediaAttributes = attributes;
        mediaAttributes.rr_mediaState = n.paused
            ? 'paused'
            : 'played';
        mediaAttributes.rr_mediaCurrentTime = n.currentTime;
        mediaAttributes.rr_mediaPlaybackRate = n.playbackRate;
        mediaAttributes.rr_mediaMuted = n.muted;
        mediaAttributes.rr_mediaLoop = n.loop;
        mediaAttributes.rr_mediaVolume = n.volume;
    }
    if (!newlyAddedElement) {
        if (n.scrollLeft) {
            attributes.rr_scrollLeft = n.scrollLeft;
        }
        if (n.scrollTop) {
            attributes.rr_scrollTop = n.scrollTop;
        }
    }
    if (needBlock) {
        const { width, height } = n.getBoundingClientRect();
        attributes = {
            class: attributes.class,
            rr_width: `${width}px`,
            rr_height: `${height}px`,
        };
    }
    if (tagName === 'iframe' && !keepIframeSrcFn(attributes.src)) {
        if (!n.contentDocument) {
            attributes.rr_src = attributes.src;
        }
        delete attributes.src;
    }
    let isCustomElement;
    try {
        if (customElements.get(tagName))
            isCustomElement = true;
    }
    catch (e) {
    }
    return {
        type: NodeType.Element,
        tagName,
        attributes,
        childNodes: [],
        isSVG: isSVGElement(n) || undefined,
        needBlock,
        rootId,
        isCustom: isCustomElement,
    };
}
function lowerIfExists(maybeAttr) {
    if (maybeAttr === undefined || maybeAttr === null) {
        return '';
    }
    else {
        return maybeAttr.toLowerCase();
    }
}
function slimDOMExcluded(sn, slimDOMOptions) {
    if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
        return true;
    }
    else if (sn.type === NodeType.Element) {
        if (slimDOMOptions.script &&
            (sn.tagName === 'script' ||
                (sn.tagName === 'link' &&
                    (sn.attributes.rel === 'preload' ||
                        sn.attributes.rel === 'modulepreload') &&
                    sn.attributes.as === 'script') ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'prefetch' &&
                    typeof sn.attributes.href === 'string' &&
                    extractFileExtension(sn.attributes.href) === 'js'))) {
            return true;
        }
        else if (slimDOMOptions.headFavicon &&
            ((sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon') ||
                (sn.tagName === 'meta' &&
                    (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                        lowerIfExists(sn.attributes.name) === 'application-name' ||
                        lowerIfExists(sn.attributes.rel) === 'icon' ||
                        lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' ||
                        lowerIfExists(sn.attributes.rel) === 'shortcut icon')))) {
            return true;
        }
        else if (sn.tagName === 'meta') {
            if (slimDOMOptions.headMetaDescKeywords &&
                lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
                return true;
            }
            else if (slimDOMOptions.headMetaSocial &&
                (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) ||
                    lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) ||
                    lowerIfExists(sn.attributes.name) === 'pinterest')) {
                return true;
            }
            else if (slimDOMOptions.headMetaRobots &&
                (lowerIfExists(sn.attributes.name) === 'robots' ||
                    lowerIfExists(sn.attributes.name) === 'googlebot' ||
                    lowerIfExists(sn.attributes.name) === 'bingbot')) {
                return true;
            }
            else if (slimDOMOptions.headMetaHttpEquiv &&
                sn.attributes['http-equiv'] !== undefined) {
                return true;
            }
            else if (slimDOMOptions.headMetaAuthorship &&
                (lowerIfExists(sn.attributes.name) === 'author' ||
                    lowerIfExists(sn.attributes.name) === 'generator' ||
                    lowerIfExists(sn.attributes.name) === 'framework' ||
                    lowerIfExists(sn.attributes.name) === 'publisher' ||
                    lowerIfExists(sn.attributes.name) === 'progid' ||
                    lowerIfExists(sn.attributes.property).match(/^article:/) ||
                    lowerIfExists(sn.attributes.property).match(/^product:/))) {
                return true;
            }
            else if (slimDOMOptions.headMetaVerification &&
                (lowerIfExists(sn.attributes.name) === 'google-site-verification' ||
                    lowerIfExists(sn.attributes.name) === 'yandex-verification' ||
                    lowerIfExists(sn.attributes.name) === 'csrf-token' ||
                    lowerIfExists(sn.attributes.name) === 'p:domain_verify' ||
                    lowerIfExists(sn.attributes.name) === 'verify-v1' ||
                    lowerIfExists(sn.attributes.name) === 'verification' ||
                    lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
                return true;
            }
        }
    }
    return false;
}
function serializeNodeWithId(n, options) {
    const { doc, mirror, blockClass, blockSelector, maskTextClass, maskTextSelector, skipChild = false, inlineStylesheet = true, maskInputOptions = {}, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions = {}, inlineImages = false, recordCanvas = false, onSerialize, onIframeLoad, iframeLoadTimeout = 5000, onStylesheetLoad, stylesheetLoadTimeout = 5000, keepIframeSrcFn = () => false, newlyAddedElement = false, } = options;
    let { needsMask } = options;
    let { preserveWhiteSpace = true } = options;
    if (!needsMask &&
        n.childNodes) {
        const checkAncestors = needsMask === undefined;
        needsMask = needMaskingText(n, maskTextClass, maskTextSelector, checkAncestors);
    }
    const _serializedNode = serializeNode(n, {
        doc,
        mirror,
        blockClass,
        blockSelector,
        needsMask,
        inlineStylesheet,
        maskInputOptions,
        maskTextFn,
        maskInputFn,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        keepIframeSrcFn,
        newlyAddedElement,
    });
    if (!_serializedNode) {
        console.warn(n, 'not serialized');
        return null;
    }
    let id;
    if (mirror.hasNode(n)) {
        id = mirror.getId(n);
    }
    else if (slimDOMExcluded(_serializedNode, slimDOMOptions) ||
        (!preserveWhiteSpace &&
            _serializedNode.type === NodeType.Text &&
            !_serializedNode.isStyle &&
            !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length)) {
        id = IGNORED_NODE;
    }
    else {
        id = genId();
    }
    const serializedNode = Object.assign(_serializedNode, { id });
    mirror.add(n, serializedNode);
    if (id === IGNORED_NODE) {
        return null;
    }
    if (onSerialize) {
        onSerialize(n);
    }
    let recordChild = !skipChild;
    if (serializedNode.type === NodeType.Element) {
        recordChild = recordChild && !serializedNode.needBlock;
        delete serializedNode.needBlock;
        const shadowRoot = n.shadowRoot;
        if (shadowRoot && isNativeShadowDom(shadowRoot))
            serializedNode.isShadowHost = true;
    }
    if ((serializedNode.type === NodeType.Document ||
        serializedNode.type === NodeType.Element) &&
        recordChild) {
        if (slimDOMOptions.headWhitespace &&
            serializedNode.type === NodeType.Element &&
            serializedNode.tagName === 'head') {
            preserveWhiteSpace = false;
        }
        const bypassOptions = {
            doc,
            mirror,
            blockClass,
            blockSelector,
            needsMask,
            maskTextClass,
            maskTextSelector,
            skipChild,
            inlineStylesheet,
            maskInputOptions,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn,
        };
        if (serializedNode.type === NodeType.Element &&
            serializedNode.tagName === 'textarea' &&
            serializedNode.attributes.value !== undefined) ;
        else {
            for (const childN of Array.from(n.childNodes)) {
                const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
        if (isElement(n) && n.shadowRoot) {
            for (const childN of Array.from(n.shadowRoot.childNodes)) {
                const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    isNativeShadowDom(n.shadowRoot) &&
                        (serializedChildNode.isShadow = true);
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
    }
    if (n.parentNode &&
        isShadowRoot(n.parentNode) &&
        isNativeShadowDom(n.parentNode)) {
        serializedNode.isShadow = true;
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'iframe') {
        onceIframeLoaded(n, () => {
            const iframeDoc = n.contentDocument;
            if (iframeDoc && onIframeLoad) {
                const serializedIframeNode = serializeNodeWithId(iframeDoc, {
                    doc: iframeDoc,
                    mirror,
                    blockClass,
                    blockSelector,
                    needsMask,
                    maskTextClass,
                    maskTextSelector,
                    skipChild: false,
                    inlineStylesheet,
                    maskInputOptions,
                    maskTextFn,
                    maskInputFn,
                    slimDOMOptions,
                    dataURLOptions,
                    inlineImages,
                    recordCanvas,
                    preserveWhiteSpace,
                    onSerialize,
                    onIframeLoad,
                    iframeLoadTimeout,
                    onStylesheetLoad,
                    stylesheetLoadTimeout,
                    keepIframeSrcFn,
                });
                if (serializedIframeNode) {
                    onIframeLoad(n, serializedIframeNode);
                }
            }
        }, iframeLoadTimeout);
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'link' &&
        typeof serializedNode.attributes.rel === 'string' &&
        (serializedNode.attributes.rel === 'stylesheet' ||
            (serializedNode.attributes.rel === 'preload' &&
                typeof serializedNode.attributes.href === 'string' &&
                extractFileExtension(serializedNode.attributes.href) === 'css'))) {
        onceStylesheetLoaded(n, () => {
            if (onStylesheetLoad) {
                const serializedLinkNode = serializeNodeWithId(n, {
                    doc,
                    mirror,
                    blockClass,
                    blockSelector,
                    needsMask,
                    maskTextClass,
                    maskTextSelector,
                    skipChild: false,
                    inlineStylesheet,
                    maskInputOptions,
                    maskTextFn,
                    maskInputFn,
                    slimDOMOptions,
                    dataURLOptions,
                    inlineImages,
                    recordCanvas,
                    preserveWhiteSpace,
                    onSerialize,
                    onIframeLoad,
                    iframeLoadTimeout,
                    onStylesheetLoad,
                    stylesheetLoadTimeout,
                    keepIframeSrcFn,
                });
                if (serializedLinkNode) {
                    onStylesheetLoad(n, serializedLinkNode);
                }
            }
        }, stylesheetLoadTimeout);
    }
    return serializedNode;
}
function snapshot(n, options) {
    const { mirror = new Mirror(), blockClass = 'rr-block', blockSelector = null, maskTextClass = 'rr-mask', maskTextSelector = null, inlineStylesheet = true, inlineImages = false, recordCanvas = false, maskAllInputs = false, maskTextFn, maskInputFn, slimDOM = false, dataURLOptions, preserveWhiteSpace, onSerialize, onIframeLoad, iframeLoadTimeout, onStylesheetLoad, stylesheetLoadTimeout, keepIframeSrcFn = () => false, } = options || {};
    const maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true,
        }
        : maskAllInputs === false
            ? {
                password: true,
            }
            : maskAllInputs;
    const slimDOMOptions = slimDOM === true || slimDOM === 'all'
        ?
            {
                script: true,
                comment: true,
                headFavicon: true,
                headWhitespace: true,
                headMetaDescKeywords: slimDOM === 'all',
                headMetaSocial: true,
                headMetaRobots: true,
                headMetaHttpEquiv: true,
                headMetaAuthorship: true,
                headMetaVerification: true,
            }
        : slimDOM === false
            ? {}
            : slimDOM;
    return serializeNodeWithId(n, {
        doc: n,
        mirror,
        blockClass,
        blockSelector,
        maskTextClass,
        maskTextSelector,
        skipChild: false,
        inlineStylesheet,
        maskInputOptions,
        maskTextFn,
        maskInputFn,
        slimDOMOptions,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        preserveWhiteSpace,
        onSerialize,
        onIframeLoad,
        iframeLoadTimeout,
        onStylesheetLoad,
        stylesheetLoadTimeout,
        keepIframeSrcFn,
        newlyAddedElement: false,
    });
}
function visitSnapshot(node, onVisit) {
    function walk(current) {
        onVisit(current);
        if (current.type === NodeType.Document ||
            current.type === NodeType.Element) {
            current.childNodes.forEach(walk);
        }
    }
    walk(node);
}
function cleanupSnapshot() {
    _id = 1;
}

const commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parse(css, options = {}) {
    let lineno = 1;
    let column = 1;
    function updatePosition(str) {
        const lines = str.match(/\n/g);
        if (lines) {
            lineno += lines.length;
        }
        const i = str.lastIndexOf('\n');
        column = i === -1 ? column + str.length : str.length - i;
    }
    function position() {
        const start = { line: lineno, column };
        return (node) => {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    class Position {
        constructor(start) {
            this.start = start;
            this.end = { line: lineno, column };
            this.source = options.source;
        }
    }
    Position.prototype.content = css;
    const errorsList = [];
    function error(msg) {
        const err = new Error(`${options.source || ''}:${lineno}:${column}: ${msg}`);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = css;
        if (options.silent) {
            errorsList.push(err);
        }
        else {
            throw err;
        }
    }
    function stylesheet() {
        const rulesList = rules();
        return {
            type: 'stylesheet',
            stylesheet: {
                source: options.source,
                rules: rulesList,
                parsingErrors: errorsList,
            },
        };
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function rules() {
        let node;
        const rules = [];
        whitespace();
        comments(rules);
        while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
            if (node) {
                rules.push(node);
                comments(rules);
            }
        }
        return rules;
    }
    function match(re) {
        const m = re.exec(css);
        if (!m) {
            return;
        }
        const str = m[0];
        updatePosition(str);
        css = css.slice(str.length);
        return m;
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comments(rules = []) {
        let c;
        while ((c = comment())) {
            if (c) {
                rules.push(c);
            }
            c = comment();
        }
        return rules;
    }
    function comment() {
        const pos = position();
        if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
            return;
        }
        let i = 2;
        while ('' !== css.charAt(i) &&
            ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
            ++i;
        }
        i += 2;
        if ('' === css.charAt(i - 1)) {
            return error('End of comment missing');
        }
        const str = css.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        css = css.slice(i);
        column += 2;
        return pos({
            type: 'comment',
            comment: str,
        });
    }
    function selector() {
        whitespace();
        while (css[0] == '}') {
            error('extra closing bracket');
            css = css.slice(1);
            whitespace();
        }
        const m = match(/^(((?<!\\)"(?:\\"|[^"])*"|(?<!\\)'(?:\\'|[^'])*'|[^{])+)/);
        if (!m) {
            return;
        }
        const cleanedInput = m[0]
            .trim()
            .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
            .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (m) => {
            return m.replace(/,/g, '\u200C');
        });
        return customSplit(cleanedInput).map((s) => s.replace(/\u200C/g, ',').trim());
    }
    function customSplit(input) {
        const result = [];
        let currentSegment = '';
        let depthParentheses = 0;
        let depthBrackets = 0;
        let currentStringChar = null;
        for (const char of input) {
            const hasStringEscape = currentSegment.endsWith('\\');
            if (currentStringChar) {
                if (currentStringChar === char && !hasStringEscape) {
                    currentStringChar = null;
                }
            }
            else if (char === '(') {
                depthParentheses++;
            }
            else if (char === ')') {
                depthParentheses--;
            }
            else if (char === '[') {
                depthBrackets++;
            }
            else if (char === ']') {
                depthBrackets--;
            }
            else if ('\'"'.includes(char)) {
                currentStringChar = char;
            }
            if (char === ',' && depthParentheses === 0 && depthBrackets === 0) {
                result.push(currentSegment);
                currentSegment = '';
            }
            else {
                currentSegment += char;
            }
        }
        if (currentSegment) {
            result.push(currentSegment);
        }
        return result;
    }
    function declaration() {
        const pos = position();
        const propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!propMatch) {
            return;
        }
        const prop = trim(propMatch[0]);
        if (!match(/^:\s*/)) {
            return error(`property missing ':'`);
        }
        const val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
        const ret = pos({
            type: 'declaration',
            property: prop.replace(commentre, ''),
            value: val ? trim(val[0]).replace(commentre, '') : '',
        });
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        const decls = [];
        if (!open()) {
            return error(`missing '{'`);
        }
        comments(decls);
        let decl;
        while ((decl = declaration())) {
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
            decl = declaration();
        }
        if (!close()) {
            return error(`missing '}'`);
        }
        return decls;
    }
    function keyframe() {
        let m;
        const vals = [];
        const pos = position();
        while ((m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/))) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (!vals.length) {
            return;
        }
        return pos({
            type: 'keyframe',
            values: vals,
            declarations: declarations(),
        });
    }
    function atkeyframes() {
        const pos = position();
        let m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m) {
            return;
        }
        const vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m) {
            return error('@keyframes missing name');
        }
        const name = m[1];
        if (!open()) {
            return error(`@keyframes missing '{'`);
        }
        let frame;
        let frames = comments();
        while ((frame = keyframe())) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close()) {
            return error(`@keyframes missing '}'`);
        }
        return pos({
            type: 'keyframes',
            name,
            vendor,
            keyframes: frames,
        });
    }
    function atsupports() {
        const pos = position();
        const m = match(/^@supports *([^{]+)/);
        if (!m) {
            return;
        }
        const supports = trim(m[1]);
        if (!open()) {
            return error(`@supports missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@supports missing '}'`);
        }
        return pos({
            type: 'supports',
            supports,
            rules: style,
        });
    }
    function athost() {
        const pos = position();
        const m = match(/^@host\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error(`@host missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@host missing '}'`);
        }
        return pos({
            type: 'host',
            rules: style,
        });
    }
    function atmedia() {
        const pos = position();
        const m = match(/^@media *([^{]+)/);
        if (!m) {
            return;
        }
        const media = trim(m[1]);
        if (!open()) {
            return error(`@media missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@media missing '}'`);
        }
        return pos({
            type: 'media',
            media,
            rules: style,
        });
    }
    function atcustommedia() {
        const pos = position();
        const m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (!m) {
            return;
        }
        return pos({
            type: 'custom-media',
            name: trim(m[1]),
            media: trim(m[2]),
        });
    }
    function atpage() {
        const pos = position();
        const m = match(/^@page */);
        if (!m) {
            return;
        }
        const sel = selector() || [];
        if (!open()) {
            return error(`@page missing '{'`);
        }
        let decls = comments();
        let decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error(`@page missing '}'`);
        }
        return pos({
            type: 'page',
            selectors: sel,
            declarations: decls,
        });
    }
    function atdocument() {
        const pos = position();
        const m = match(/^@([-\w]+)?document *([^{]+)/);
        if (!m) {
            return;
        }
        const vendor = trim(m[1]);
        const doc = trim(m[2]);
        if (!open()) {
            return error(`@document missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@document missing '}'`);
        }
        return pos({
            type: 'document',
            document: doc,
            vendor,
            rules: style,
        });
    }
    function atfontface() {
        const pos = position();
        const m = match(/^@font-face\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error(`@font-face missing '{'`);
        }
        let decls = comments();
        let decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error(`@font-face missing '}'`);
        }
        return pos({
            type: 'font-face',
            declarations: decls,
        });
    }
    const atimport = _compileAtrule('import');
    const atcharset = _compileAtrule('charset');
    const atnamespace = _compileAtrule('namespace');
    function _compileAtrule(name) {
        const re = new RegExp('^@' +
            name +
            '\\s*((?:' +
            [
                '(?<!\\\\)"(?:\\\\"|[^"])*"',
                "(?<!\\\\)'(?:\\\\'|[^'])*'",
                '[^;]',
            ].join('|') +
            ')+);');
        return () => {
            const pos = position();
            const m = match(re);
            if (!m) {
                return;
            }
            const ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
        };
    }
    function atrule() {
        if (css[0] !== '@') {
            return;
        }
        return (atkeyframes() ||
            atmedia() ||
            atcustommedia() ||
            atsupports() ||
            atimport() ||
            atcharset() ||
            atnamespace() ||
            atdocument() ||
            atpage() ||
            athost() ||
            atfontface());
    }
    function rule() {
        const pos = position();
        const sel = selector();
        if (!sel) {
            return error('selector missing');
        }
        comments();
        return pos({
            type: 'rule',
            selectors: sel,
            declarations: declarations(),
        });
    }
    return addParent(stylesheet());
}
function trim(str) {
    return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
function addParent(obj, parent) {
    const isNode = obj && typeof obj.type === 'string';
    const childParent = isNode ? obj : parent;
    for (const k of Object.keys(obj)) {
        const value = obj[k];
        if (Array.isArray(value)) {
            value.forEach((v) => {
                addParent(v, childParent);
            });
        }
        else if (value && typeof value === 'object') {
            addParent(value, childParent);
        }
    }
    if (isNode) {
        Object.defineProperty(obj, 'parent', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null,
        });
    }
    return obj;
}

const tagMap = {
    script: 'noscript',
    altglyph: 'altGlyph',
    altglyphdef: 'altGlyphDef',
    altglyphitem: 'altGlyphItem',
    animatecolor: 'animateColor',
    animatemotion: 'animateMotion',
    animatetransform: 'animateTransform',
    clippath: 'clipPath',
    feblend: 'feBlend',
    fecolormatrix: 'feColorMatrix',
    fecomponenttransfer: 'feComponentTransfer',
    fecomposite: 'feComposite',
    feconvolvematrix: 'feConvolveMatrix',
    fediffuselighting: 'feDiffuseLighting',
    fedisplacementmap: 'feDisplacementMap',
    fedistantlight: 'feDistantLight',
    fedropshadow: 'feDropShadow',
    feflood: 'feFlood',
    fefunca: 'feFuncA',
    fefuncb: 'feFuncB',
    fefuncg: 'feFuncG',
    fefuncr: 'feFuncR',
    fegaussianblur: 'feGaussianBlur',
    feimage: 'feImage',
    femerge: 'feMerge',
    femergenode: 'feMergeNode',
    femorphology: 'feMorphology',
    feoffset: 'feOffset',
    fepointlight: 'fePointLight',
    fespecularlighting: 'feSpecularLighting',
    fespotlight: 'feSpotLight',
    fetile: 'feTile',
    feturbulence: 'feTurbulence',
    foreignobject: 'foreignObject',
    glyphref: 'glyphRef',
    lineargradient: 'linearGradient',
    radialgradient: 'radialGradient',
};
function getTagName(n) {
    let tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
    if (tagName === 'link' && n.attributes._cssText) {
        tagName = 'style';
    }
    return tagName;
}
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const MEDIA_SELECTOR = /(max|min)-device-(width|height)/;
const MEDIA_SELECTOR_GLOBAL = new RegExp(MEDIA_SELECTOR.source, 'g');
const HOVER_SELECTOR = /([^\\]):hover/;
const HOVER_SELECTOR_GLOBAL = new RegExp(HOVER_SELECTOR.source, 'g');
function adaptCssForReplay(cssText, cache) {
    const cachedStyle = cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.get(cssText);
    if (cachedStyle)
        return cachedStyle;
    const ast = parse(cssText, {
        silent: true,
    });
    if (!ast.stylesheet) {
        return cssText;
    }
    const selectors = [];
    const medias = [];
    function getSelectors(rule) {
        if ('selectors' in rule && rule.selectors) {
            rule.selectors.forEach((selector) => {
                if (HOVER_SELECTOR.test(selector)) {
                    selectors.push(selector);
                }
            });
        }
        if ('media' in rule && rule.media && MEDIA_SELECTOR.test(rule.media)) {
            medias.push(rule.media);
        }
        if ('rules' in rule && rule.rules) {
            rule.rules.forEach(getSelectors);
        }
    }
    getSelectors(ast.stylesheet);
    let result = cssText;
    if (selectors.length > 0) {
        const selectorMatcher = new RegExp(selectors
            .filter((selector, index) => selectors.indexOf(selector) === index)
            .sort((a, b) => b.length - a.length)
            .map((selector) => {
            return escapeRegExp(selector);
        })
            .join('|'), 'g');
        result = result.replace(selectorMatcher, (selector) => {
            const newSelector = selector.replace(HOVER_SELECTOR_GLOBAL, '$1.\\:hover');
            return `${selector}, ${newSelector}`;
        });
    }
    if (medias.length > 0) {
        const mediaMatcher = new RegExp(medias
            .filter((media, index) => medias.indexOf(media) === index)
            .sort((a, b) => b.length - a.length)
            .map((media) => {
            return escapeRegExp(media);
        })
            .join('|'), 'g');
        result = result.replace(mediaMatcher, (media) => {
            return media.replace(MEDIA_SELECTOR_GLOBAL, '$1-$2');
        });
    }
    cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.set(cssText, result);
    return result;
}
function createCache() {
    const stylesWithHoverClass = new Map();
    return {
        stylesWithHoverClass,
    };
}
function buildNode(n, options) {
    var _a;
    const { doc, hackCss, cache } = options;
    switch (n.type) {
        case NodeType.Document:
            return doc.implementation.createDocument(null, '', null);
        case NodeType.DocumentType:
            return doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId);
        case NodeType.Element: {
            const tagName = getTagName(n);
            let node;
            if (n.isSVG) {
                node = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
            }
            else {
                if (n.isCustom &&
                    ((_a = doc.defaultView) === null || _a === void 0 ? void 0 : _a.customElements) &&
                    !doc.defaultView.customElements.get(n.tagName))
                    doc.defaultView.customElements.define(n.tagName, class extends doc.defaultView.HTMLElement {
                    });
                node = doc.createElement(tagName);
            }
            const specialAttributes = {};
            for (const name in n.attributes) {
                if (!Object.prototype.hasOwnProperty.call(n.attributes, name)) {
                    continue;
                }
                let value = n.attributes[name];
                if (tagName === 'option' &&
                    name === 'selected' &&
                    value === false) {
                    continue;
                }
                if (value === null) {
                    continue;
                }
                if (value === true)
                    value = '';
                if (name.startsWith('rr_')) {
                    specialAttributes[name] = value;
                    continue;
                }
                const isTextarea = tagName === 'textarea' && name === 'value';
                const isRemoteOrDynamicCss = tagName === 'style' && name === '_cssText';
                if (isRemoteOrDynamicCss && hackCss && typeof value === 'string') {
                    value = adaptCssForReplay(value, cache);
                }
                if ((isTextarea || isRemoteOrDynamicCss) && typeof value === 'string') {
                    node.appendChild(doc.createTextNode(value));
                    n.childNodes = [];
                    continue;
                }
                try {
                    if (n.isSVG && name === 'xlink:href') {
                        node.setAttributeNS('http://www.w3.org/1999/xlink', name, value.toString());
                    }
                    else if (name === 'onload' ||
                        name === 'onclick' ||
                        name.substring(0, 7) === 'onmouse') {
                        node.setAttribute('_' + name, value.toString());
                    }
                    else if (tagName === 'meta' &&
                        n.attributes['http-equiv'] === 'Content-Security-Policy' &&
                        name === 'content') {
                        node.setAttribute('csp-content', value.toString());
                        continue;
                    }
                    else if (tagName === 'link' &&
                        (n.attributes.rel === 'preload' ||
                            n.attributes.rel === 'modulepreload') &&
                        n.attributes.as === 'script') {
                    }
                    else if (tagName === 'link' &&
                        n.attributes.rel === 'prefetch' &&
                        typeof n.attributes.href === 'string' &&
                        n.attributes.href.endsWith('.js')) {
                    }
                    else if (tagName === 'img' &&
                        n.attributes.srcset &&
                        n.attributes.rr_dataURL) {
                        node.setAttribute('rrweb-original-srcset', n.attributes.srcset);
                    }
                    else {
                        node.setAttribute(name, value.toString());
                    }
                }
                catch (error) {
                }
            }
            for (const name in specialAttributes) {
                const value = specialAttributes[name];
                if (tagName === 'canvas' && name === 'rr_dataURL') {
                    const image = document.createElement('img');
                    image.onload = () => {
                        const ctx = node.getContext('2d');
                        if (ctx) {
                            ctx.drawImage(image, 0, 0, image.width, image.height);
                        }
                    };
                    image.src = value.toString();
                    if (node.RRNodeType)
                        node.rr_dataURL = value.toString();
                }
                else if (tagName === 'img' && name === 'rr_dataURL') {
                    const image = node;
                    if (!image.currentSrc.startsWith('data:')) {
                        image.setAttribute('rrweb-original-src', n.attributes.src);
                        image.src = value.toString();
                    }
                }
                if (name === 'rr_width') {
                    node.style.width = value.toString();
                }
                else if (name === 'rr_height') {
                    node.style.height = value.toString();
                }
                else if (name === 'rr_mediaCurrentTime' &&
                    typeof value === 'number') {
                    node.currentTime = value;
                }
                else if (name === 'rr_mediaState') {
                    switch (value) {
                        case 'played':
                            node
                                .play()
                                .catch((e) => console.warn('media playback error', e));
                            break;
                        case 'paused':
                            node.pause();
                            break;
                    }
                }
                else if (name === 'rr_mediaPlaybackRate' &&
                    typeof value === 'number') {
                    node.playbackRate = value;
                }
                else if (name === 'rr_mediaMuted' && typeof value === 'boolean') {
                    node.muted = value;
                }
                else if (name === 'rr_mediaLoop' && typeof value === 'boolean') {
                    node.loop = value;
                }
                else if (name === 'rr_mediaVolume' && typeof value === 'number') {
                    node.volume = value;
                }
            }
            if (n.isShadowHost) {
                if (!node.shadowRoot) {
                    node.attachShadow({ mode: 'open' });
                }
                else {
                    while (node.shadowRoot.firstChild) {
                        node.shadowRoot.removeChild(node.shadowRoot.firstChild);
                    }
                }
            }
            return node;
        }
        case NodeType.Text:
            return doc.createTextNode(n.isStyle && hackCss
                ? adaptCssForReplay(n.textContent, cache)
                : n.textContent);
        case NodeType.CDATA:
            return doc.createCDATASection(n.textContent);
        case NodeType.Comment:
            return doc.createComment(n.textContent);
        default:
            return null;
    }
}
function buildNodeWithSN(n, options) {
    const { doc, mirror, skipChild = false, hackCss = true, afterAppend, cache, } = options;
    if (mirror.has(n.id)) {
        const nodeInMirror = mirror.getNode(n.id);
        const meta = mirror.getMeta(nodeInMirror);
        if (isNodeMetaEqual(meta, n))
            return mirror.getNode(n.id);
    }
    let node = buildNode(n, { doc, hackCss, cache });
    if (!node) {
        return null;
    }
    if (n.rootId && mirror.getNode(n.rootId) !== doc) {
        mirror.replace(n.rootId, doc);
    }
    if (n.type === NodeType.Document) {
        doc.close();
        doc.open();
        if (n.compatMode === 'BackCompat' &&
            n.childNodes &&
            n.childNodes[0].type !== NodeType.DocumentType) {
            if (n.childNodes[0].type === NodeType.Element &&
                'xmlns' in n.childNodes[0].attributes &&
                n.childNodes[0].attributes.xmlns === 'http://www.w3.org/1999/xhtml') {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">');
            }
            else {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">');
            }
        }
        node = doc;
    }
    mirror.add(node, n);
    if ((n.type === NodeType.Document || n.type === NodeType.Element) &&
        !skipChild) {
        for (const childN of n.childNodes) {
            const childNode = buildNodeWithSN(childN, {
                doc,
                mirror,
                skipChild: false,
                hackCss,
                afterAppend,
                cache,
            });
            if (!childNode) {
                console.warn('Failed to rebuild', childN);
                continue;
            }
            if (childN.isShadow && isElement(node) && node.shadowRoot) {
                node.shadowRoot.appendChild(childNode);
            }
            else if (n.type === NodeType.Document &&
                childN.type == NodeType.Element) {
                const htmlElement = childNode;
                let body = null;
                htmlElement.childNodes.forEach((child) => {
                    if (child.nodeName === 'BODY')
                        body = child;
                });
                if (body) {
                    htmlElement.removeChild(body);
                    node.appendChild(childNode);
                    htmlElement.appendChild(body);
                }
                else {
                    node.appendChild(childNode);
                }
            }
            else {
                node.appendChild(childNode);
            }
            if (afterAppend) {
                afterAppend(childNode, childN.id);
            }
        }
    }
    return node;
}
function visit(mirror, onVisit) {
    function walk(node) {
        onVisit(node);
    }
    for (const id of mirror.getIds()) {
        if (mirror.has(id)) {
            walk(mirror.getNode(id));
        }
    }
}
function handleScroll(node, mirror) {
    const n = mirror.getMeta(node);
    if ((n === null || n === void 0 ? void 0 : n.type) !== NodeType.Element) {
        return;
    }
    const el = node;
    for (const name in n.attributes) {
        if (!(Object.prototype.hasOwnProperty.call(n.attributes, name) &&
            name.startsWith('rr_'))) {
            continue;
        }
        const value = n.attributes[name];
        if (name === 'rr_scrollLeft') {
            el.scrollLeft = value;
        }
        if (name === 'rr_scrollTop') {
            el.scrollTop = value;
        }
    }
}
function rebuild(n, options) {
    const { doc, onVisit, hackCss = true, afterAppend, cache, mirror = new Mirror(), } = options;
    const node = buildNodeWithSN(n, {
        doc,
        mirror,
        skipChild: false,
        hackCss,
        afterAppend,
        cache,
    });
    visit(mirror, (visitedNode) => {
        if (onVisit) {
            onVisit(visitedNode);
        }
        handleScroll(visitedNode, mirror);
    });
    return node;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./cypress/support/e2e.js ***!
  \********************************/


__webpack_require__(/*! ./commands */ "./cypress/support/commands.js");
__webpack_require__(/*! @chromatic-com/cypress/support */ "./node_modules/@chromatic-com/cypress/dist/support.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN4QmE7O0FBRWIsb0JBQW9CLG1CQUFPLENBQUMsMEVBQWdCOztBQUU1Qyx3Q0FBd0MseURBQXlELGdDQUFnQywwQ0FBMEMsa0JBQWtCLDBCQUEwQixHQUFHLEVBQUUsZ0JBQWdCLGdHQUFnRyx5Q0FBeUMsNENBQTRDLElBQUksRUFBRSxlQUFlLDhGQUE4RixnQ0FBZ0MseUNBQXlDLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHVHQUF1RyxXQUFXLDRCQUE0QixrQ0FBa0MsMkNBQTJDLDJCQUEyQiwyQkFBMkIsNkNBQTZDLCtEQUErRCxtQ0FBbUMsMkNBQTJDLGtDQUFrQyx5Q0FBeUMseUNBQXlDLHVEQUF1RCwwQ0FBMEMseURBQXlELG9DQUFvQyw4Q0FBOEMscUJBQXFCLGdGQUFnRixHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3RrRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsMERBQTBEO0FBQzFELDZEQUE2RCxxQ0FBcUMsc0JBQXNCO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0RBQStEO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0Qyx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVztBQUM3RDtBQUNBO0FBQ0EsMEJBQTBCLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVztBQUM3RDtBQUNBO0FBQ0EsMEJBQTBCLFdBQVcsRUFBRSwrQkFBK0IsRUFBRSxXQUFXO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVztBQUNoRSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFNBQVM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLDBGQUEwRiw4Q0FBOEMsNEVBQTRFO0FBQ2hPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0NBQWdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLElBQUk7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVFQUF1RSxrQ0FBa0Msb0ZBQW9GO0FBQ3pNO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxpQkFBaUIsV0FBVyxJQUFJO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBLHlCQUF5QixNQUFNO0FBQy9CLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBJQUEwSSw4REFBOEQsK01BQStNO0FBQ25hLFVBQVUsWUFBWTtBQUN0QixVQUFVLDRCQUE0QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxJQUFJO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRaQUE0WjtBQUN4YTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQixHQUFHLE9BQU8sR0FBRyxPQUFPLElBQUksSUFBSTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNERBQTRELElBQUk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVMsSUFBSSxZQUFZO0FBQy9DLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQkFBc0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBc0U7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFCQUFxQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJFQUEyRTtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRTZmOzs7Ozs7O1VDN2dFN2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ1VBQSxtQkFBQTtBQUVBQSxtQkFBQSxnRyIsInNvdXJjZXMiOlsid2VicGFjazovL2N5cHJlc3MtbWFudWFsLXNuYXBzaG90cy8uL2N5cHJlc3Mvc3VwcG9ydC9jb21tYW5kcy5qcyIsIndlYnBhY2s6Ly9jeXByZXNzLW1hbnVhbC1zbmFwc2hvdHMvLi9ub2RlX21vZHVsZXMvQGNocm9tYXRpYy1jb20vY3lwcmVzcy9kaXN0L3N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vY3lwcmVzcy1tYW51YWwtc25hcHNob3RzLy4vbm9kZV9tb2R1bGVzL3Jyd2ViLXNuYXBzaG90L2VzL3Jyd2ViLXNuYXBzaG90LmpzIiwid2VicGFjazovL2N5cHJlc3MtbWFudWFsLXNuYXBzaG90cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jeXByZXNzLW1hbnVhbC1zbmFwc2hvdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2N5cHJlc3MtbWFudWFsLXNuYXBzaG90cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2N5cHJlc3MtbWFudWFsLXNuYXBzaG90cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2N5cHJlc3MtbWFudWFsLXNuYXBzaG90cy8uL2N5cHJlc3Mvc3VwcG9ydC9lMmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIFRoaXMgZXhhbXBsZSBjb21tYW5kcy5qcyBzaG93cyB5b3UgaG93IHRvXG4vLyBjcmVhdGUgdmFyaW91cyBjdXN0b20gY29tbWFuZHMgYW5kIG92ZXJ3cml0ZVxuLy8gZXhpc3RpbmcgY29tbWFuZHMuXG4vL1xuLy8gRm9yIG1vcmUgY29tcHJlaGVuc2l2ZSBleGFtcGxlcyBvZiBjdXN0b21cbi8vIGNvbW1hbmRzIHBsZWFzZSByZWFkIG1vcmUgaGVyZTpcbi8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9jdXN0b20tY29tbWFuZHNcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBwYXJlbnQgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ2xvZ2luJywgKGVtYWlsLCBwYXNzd29yZCkgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyBpcyBhIGNoaWxkIGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKCdkcmFnJywgeyBwcmV2U3ViamVjdDogJ2VsZW1lbnQnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBkdWFsIGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKCdkaXNtaXNzJywgeyBwcmV2U3ViamVjdDogJ29wdGlvbmFsJ30sIChzdWJqZWN0LCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vXG4vLyAtLSBUaGlzIHdpbGwgb3ZlcndyaXRlIGFuIGV4aXN0aW5nIGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMub3ZlcndyaXRlKCd2aXNpdCcsIChvcmlnaW5hbEZuLCB1cmwsIG9wdGlvbnMpID0+IHsgLi4uIH0pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcnJ3ZWJTbmFwc2hvdCA9IHJlcXVpcmUoJ3Jyd2ViLXNuYXBzaG90Jyk7XG5cbkN5cHJlc3MuQ29tbWFuZHMuYWRkKFwidGFrZVNuYXBzaG90XCIsZT0+e0N5cHJlc3MuY29uZmlnKFwiaXNUZXh0VGVybWluYWxcIikmJmN5LmRvY3VtZW50KCkudGhlbihzPT57bGV0IHI9cnJ3ZWJTbmFwc2hvdC5zbmFwc2hvdChzKTtjeS5nZXQoXCJAbWFudWFsU25hcHNob3RzXCIpLnRoZW4obj0+Wy4uLm4se25hbWU6ZSxzbmFwc2hvdDpyfV0pLmFzKFwibWFudWFsU25hcHNob3RzXCIpO30pO30pO2JlZm9yZUVhY2goKCk9PntDeXByZXNzLmNvbmZpZyhcImlzVGV4dFRlcm1pbmFsXCIpJiYoY3kud3JhcChbXSkuYXMoXCJtYW51YWxTbmFwc2hvdHNcIiksY3kudGFzayhcInByZXBhcmVBcmNoaXZlc1wiLHthY3Rpb246XCJzZXR1cC1uZXR3b3JrLWxpc3RlbmVyXCIscGF5bG9hZDp7YWxsb3dlZERvbWFpbnM6Q3lwcmVzcy5lbnYoXCJhc3NldERvbWFpbnNcIil9fSkpO30pO2FmdGVyRWFjaCgoKT0+e0N5cHJlc3MuZW52KFwiZGlzYWJsZUF1dG9TbmFwc2hvdFwiKXx8IUN5cHJlc3MuY29uZmlnKFwiaXNUZXh0VGVybWluYWxcIil8fGN5LmRvY3VtZW50KCkudGhlbihlPT57bGV0IHM9cnJ3ZWJTbmFwc2hvdC5zbmFwc2hvdChlKTtjeS5nZXQoXCJAbWFudWFsU25hcHNob3RzXCIpLnRoZW4oKHI9W10pPT57Y3kudXJsKCkudGhlbihuPT57Y3kudGFzayhcInByZXBhcmVBcmNoaXZlc1wiLHthY3Rpb246XCJzYXZlLWFyY2hpdmVzXCIscGF5bG9hZDp7dGVzdFRpdGxlUGF0aDpbQ3lwcmVzcy5zcGVjLnJlbGF0aXZlVG9Db21tb25Sb290LC4uLkN5cHJlc3MuY3VycmVudFRlc3QudGl0bGVQYXRoXSxkb21TbmFwc2hvdHM6Wy4uLnIse3NuYXBzaG90OnN9XSxjaHJvbWF0aWNTdG9yeWJvb2tQYXJhbXM6ey4uLkN5cHJlc3MuZW52KFwiZGlmZlRocmVzaG9sZFwiKSYme2RpZmZUaHJlc2hvbGQ6Q3lwcmVzcy5lbnYoXCJkaWZmVGhyZXNob2xkXCIpfSwuLi5DeXByZXNzLmVudihcImRlbGF5XCIpJiZ7ZGVsYXk6Q3lwcmVzcy5lbnYoXCJkZWxheVwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJkaWZmSW5jbHVkZUFudGlBbGlhc2luZ1wiKSYme2RpZmZJbmNsdWRlQW50aUFsaWFzaW5nOkN5cHJlc3MuZW52KFwiZGlmZkluY2x1ZGVBbnRpQWxpYXNpbmdcIil9LC4uLkN5cHJlc3MuZW52KFwiZGlmZlRocmVzaG9sZFwiKSYme2RpZmZUaHJlc2hvbGQ6Q3lwcmVzcy5lbnYoXCJkaWZmVGhyZXNob2xkXCIpfSwuLi5DeXByZXNzLmVudihcImZvcmNlZENvbG9yc1wiKSYme2ZvcmNlZENvbG9yczpDeXByZXNzLmVudihcImZvcmNlZENvbG9yc1wiKX0sLi4uQ3lwcmVzcy5lbnYoXCJwYXVzZUFuaW1hdGlvbkF0RW5kXCIpJiZ7cGF1c2VBbmltYXRpb25BdEVuZDpDeXByZXNzLmVudihcInBhdXNlQW5pbWF0aW9uQXRFbmRcIil9LC4uLkN5cHJlc3MuZW52KFwicHJlZmVyc1JlZHVjZWRNb3Rpb25cIikmJntwcmVmZXJzUmVkdWNlZE1vdGlvbjpDeXByZXNzLmVudihcInByZWZlcnNSZWR1Y2VkTW90aW9uXCIpfSwuLi5DeXByZXNzLmVudihcImNyb3BUb1ZpZXdwb3J0XCIpJiZ7Y3JvcFRvVmlld3BvcnQ6Q3lwcmVzcy5lbnYoXCJjcm9wVG9WaWV3cG9ydFwiKX19LHBhZ2VVcmw6bix2aWV3cG9ydDp7aGVpZ2h0OkN5cHJlc3MuY29uZmlnKFwidmlld3BvcnRIZWlnaHRcIiksd2lkdGg6Q3lwcmVzcy5jb25maWcoXCJ2aWV3cG9ydFdpZHRoXCIpfX19KTt9KTt9KTt9KTt9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW91dC5qcy5tYXBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1cHBvcnQuanMubWFwIiwidmFyIE5vZGVUeXBlO1xyXG4oZnVuY3Rpb24gKE5vZGVUeXBlKSB7XHJcbiAgICBOb2RlVHlwZVtOb2RlVHlwZVtcIkRvY3VtZW50XCJdID0gMF0gPSBcIkRvY3VtZW50XCI7XHJcbiAgICBOb2RlVHlwZVtOb2RlVHlwZVtcIkRvY3VtZW50VHlwZVwiXSA9IDFdID0gXCJEb2N1bWVudFR5cGVcIjtcclxuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiRWxlbWVudFwiXSA9IDJdID0gXCJFbGVtZW50XCI7XHJcbiAgICBOb2RlVHlwZVtOb2RlVHlwZVtcIlRleHRcIl0gPSAzXSA9IFwiVGV4dFwiO1xyXG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJDREFUQVwiXSA9IDRdID0gXCJDREFUQVwiO1xyXG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJDb21tZW50XCJdID0gNV0gPSBcIkNvbW1lbnRcIjtcclxufSkoTm9kZVR5cGUgfHwgKE5vZGVUeXBlID0ge30pKTtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG4pIHtcclxuICAgIHJldHVybiBuLm5vZGVUeXBlID09PSBuLkVMRU1FTlRfTk9ERTtcclxufVxyXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobikge1xyXG4gICAgY29uc3QgaG9zdCA9IG4gPT09IG51bGwgfHwgbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbi5ob3N0O1xyXG4gICAgcmV0dXJuIEJvb2xlYW4oKGhvc3QgPT09IG51bGwgfHwgaG9zdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaG9zdC5zaGFkb3dSb290KSA9PT0gbik7XHJcbn1cclxuZnVuY3Rpb24gaXNOYXRpdmVTaGFkb3dEb20oc2hhZG93Um9vdCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzaGFkb3dSb290KSA9PT0gJ1tvYmplY3QgU2hhZG93Um9vdF0nO1xyXG59XHJcbmZ1bmN0aW9uIGZpeEJyb3dzZXJDb21wYXRpYmlsaXR5SXNzdWVzSW5DU1MoY3NzVGV4dCkge1xyXG4gICAgaWYgKGNzc1RleHQuaW5jbHVkZXMoJyBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7JykgJiZcclxuICAgICAgICAhY3NzVGV4dC5pbmNsdWRlcygnIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OycpKSB7XHJcbiAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZSgvXFxzYmFja2dyb3VuZC1jbGlwOlxccyp0ZXh0Oy9nLCAnIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3NzVGV4dDtcclxufVxyXG5mdW5jdGlvbiBlc2NhcGVJbXBvcnRTdGF0ZW1lbnQocnVsZSkge1xyXG4gICAgY29uc3QgeyBjc3NUZXh0IH0gPSBydWxlO1xyXG4gICAgaWYgKGNzc1RleHQuc3BsaXQoJ1wiJykubGVuZ3RoIDwgMylcclxuICAgICAgICByZXR1cm4gY3NzVGV4dDtcclxuICAgIGNvbnN0IHN0YXRlbWVudCA9IFsnQGltcG9ydCcsIGB1cmwoJHtKU09OLnN0cmluZ2lmeShydWxlLmhyZWYpfSlgXTtcclxuICAgIGlmIChydWxlLmxheWVyTmFtZSA9PT0gJycpIHtcclxuICAgICAgICBzdGF0ZW1lbnQucHVzaChgbGF5ZXJgKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJ1bGUubGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgc3RhdGVtZW50LnB1c2goYGxheWVyKCR7cnVsZS5sYXllck5hbWV9KWApO1xyXG4gICAgfVxyXG4gICAgaWYgKHJ1bGUuc3VwcG9ydHNUZXh0KSB7XHJcbiAgICAgICAgc3RhdGVtZW50LnB1c2goYHN1cHBvcnRzKCR7cnVsZS5zdXBwb3J0c1RleHR9KWApO1xyXG4gICAgfVxyXG4gICAgaWYgKHJ1bGUubWVkaWEubGVuZ3RoKSB7XHJcbiAgICAgICAgc3RhdGVtZW50LnB1c2gocnVsZS5tZWRpYS5tZWRpYVRleHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlbWVudC5qb2luKCcgJykgKyAnOyc7XHJcbn1cclxuZnVuY3Rpb24gc3RyaW5naWZ5U3R5bGVzaGVldChzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gcy5ydWxlcyB8fCBzLmNzc1J1bGVzO1xyXG4gICAgICAgIHJldHVybiBydWxlc1xyXG4gICAgICAgICAgICA/IGZpeEJyb3dzZXJDb21wYXRpYmlsaXR5SXNzdWVzSW5DU1MoQXJyYXkuZnJvbShydWxlcywgc3RyaW5naWZ5UnVsZSkuam9pbignJykpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeVJ1bGUocnVsZSkge1xyXG4gICAgbGV0IGltcG9ydFN0cmluZ2lmaWVkO1xyXG4gICAgaWYgKGlzQ1NTSW1wb3J0UnVsZShydWxlKSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGltcG9ydFN0cmluZ2lmaWVkID1cclxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeVN0eWxlc2hlZXQocnVsZS5zdHlsZVNoZWV0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZUltcG9ydFN0YXRlbWVudChydWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNDU1NTdHlsZVJ1bGUocnVsZSkgJiYgcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJzonKSkge1xyXG4gICAgICAgIHJldHVybiBmaXhTYWZhcmlDb2xvbnMocnVsZS5jc3NUZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbXBvcnRTdHJpbmdpZmllZCB8fCBydWxlLmNzc1RleHQ7XHJcbn1cclxuZnVuY3Rpb24gZml4U2FmYXJpQ29sb25zKGNzc1N0cmluZ2lmaWVkKSB7XHJcbiAgICBjb25zdCByZWdleCA9IC8oXFxbKD86W1xcdy1dKylbXlxcXFxdKSg6KD86W1xcdy1dKylcXF0pL2dtO1xyXG4gICAgcmV0dXJuIGNzc1N0cmluZ2lmaWVkLnJlcGxhY2UocmVnZXgsICckMVxcXFwkMicpO1xyXG59XHJcbmZ1bmN0aW9uIGlzQ1NTSW1wb3J0UnVsZShydWxlKSB7XHJcbiAgICByZXR1cm4gJ3N0eWxlU2hlZXQnIGluIHJ1bGU7XHJcbn1cclxuZnVuY3Rpb24gaXNDU1NTdHlsZVJ1bGUocnVsZSkge1xyXG4gICAgcmV0dXJuICdzZWxlY3RvclRleHQnIGluIHJ1bGU7XHJcbn1cclxuY2xhc3MgTWlycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWROb2RlTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMubm9kZU1ldGFNYXAgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0SWQobikge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAoIW4pXHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICBjb25zdCBpZCA9IChfYSA9IHRoaXMuZ2V0TWV0YShuKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkO1xyXG4gICAgICAgIHJldHVybiBpZCAhPT0gbnVsbCAmJiBpZCAhPT0gdm9pZCAwID8gaWQgOiAtMTtcclxuICAgIH1cclxuICAgIGdldE5vZGUoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZE5vZGVNYXAuZ2V0KGlkKSB8fCBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0SWRzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuaWROb2RlTWFwLmtleXMoKSk7XHJcbiAgICB9XHJcbiAgICBnZXRNZXRhKG4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlTWV0YU1hcC5nZXQobikgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIHJlbW92ZU5vZGVGcm9tTWFwKG4pIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQobik7XHJcbiAgICAgICAgdGhpcy5pZE5vZGVNYXAuZGVsZXRlKGlkKTtcclxuICAgICAgICBpZiAobi5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgIG4uY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHRoaXMucmVtb3ZlTm9kZUZyb21NYXAoY2hpbGROb2RlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFzKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWROb2RlTWFwLmhhcyhpZCk7XHJcbiAgICB9XHJcbiAgICBoYXNOb2RlKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlTWV0YU1hcC5oYXMobm9kZSk7XHJcbiAgICB9XHJcbiAgICBhZGQobiwgbWV0YSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWV0YS5pZDtcclxuICAgICAgICB0aGlzLmlkTm9kZU1hcC5zZXQoaWQsIG4pO1xyXG4gICAgICAgIHRoaXMubm9kZU1ldGFNYXAuc2V0KG4sIG1ldGEpO1xyXG4gICAgfVxyXG4gICAgcmVwbGFjZShpZCwgbikge1xyXG4gICAgICAgIGNvbnN0IG9sZE5vZGUgPSB0aGlzLmdldE5vZGUoaWQpO1xyXG4gICAgICAgIGlmIChvbGROb2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLm5vZGVNZXRhTWFwLmdldChvbGROb2RlKTtcclxuICAgICAgICAgICAgaWYgKG1ldGEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVNZXRhTWFwLnNldChuLCBtZXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pZE5vZGVNYXAuc2V0KGlkLCBuKTtcclxuICAgIH1cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaWROb2RlTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMubm9kZU1ldGFNYXAgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU1pcnJvcigpIHtcclxuICAgIHJldHVybiBuZXcgTWlycm9yKCk7XHJcbn1cclxuZnVuY3Rpb24gbWFza0lucHV0VmFsdWUoeyBlbGVtZW50LCBtYXNrSW5wdXRPcHRpb25zLCB0YWdOYW1lLCB0eXBlLCB2YWx1ZSwgbWFza0lucHV0Rm4sIH0pIHtcclxuICAgIGxldCB0ZXh0ID0gdmFsdWUgfHwgJyc7XHJcbiAgICBjb25zdCBhY3R1YWxUeXBlID0gdHlwZSAmJiB0b0xvd2VyQ2FzZSh0eXBlKTtcclxuICAgIGlmIChtYXNrSW5wdXRPcHRpb25zW3RhZ05hbWUudG9Mb3dlckNhc2UoKV0gfHxcclxuICAgICAgICAoYWN0dWFsVHlwZSAmJiBtYXNrSW5wdXRPcHRpb25zW2FjdHVhbFR5cGVdKSkge1xyXG4gICAgICAgIGlmIChtYXNrSW5wdXRGbikge1xyXG4gICAgICAgICAgICB0ZXh0ID0gbWFza0lucHV0Rm4odGV4dCwgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0ID0gJyonLnJlcGVhdCh0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuZnVuY3Rpb24gdG9Mb3dlckNhc2Uoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuY29uc3QgT1JJR0lOQUxfQVRUUklCVVRFX05BTUUgPSAnX19ycndlYl9vcmlnaW5hbF9fJztcclxuZnVuY3Rpb24gaXMyRENhbnZhc0JsYW5rKGNhbnZhcykge1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAoIWN0eClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIGNvbnN0IGNodW5rU2l6ZSA9IDUwO1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBjYW52YXMud2lkdGg7IHggKz0gY2h1bmtTaXplKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjYW52YXMuaGVpZ2h0OyB5ICs9IGNodW5rU2l6ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBnZXRJbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbEdldEltYWdlRGF0YSA9IE9SSUdJTkFMX0FUVFJJQlVURV9OQU1FIGluIGdldEltYWdlRGF0YVxyXG4gICAgICAgICAgICAgICAgPyBnZXRJbWFnZURhdGFbT1JJR0lOQUxfQVRUUklCVVRFX05BTUVdXHJcbiAgICAgICAgICAgICAgICA6IGdldEltYWdlRGF0YTtcclxuICAgICAgICAgICAgY29uc3QgcGl4ZWxCdWZmZXIgPSBuZXcgVWludDMyQXJyYXkob3JpZ2luYWxHZXRJbWFnZURhdGEuY2FsbChjdHgsIHgsIHksIE1hdGgubWluKGNodW5rU2l6ZSwgY2FudmFzLndpZHRoIC0geCksIE1hdGgubWluKGNodW5rU2l6ZSwgY2FudmFzLmhlaWdodCAtIHkpKS5kYXRhLmJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGlmIChwaXhlbEJ1ZmZlci5zb21lKChwaXhlbCkgPT4gcGl4ZWwgIT09IDApKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGlzTm9kZU1ldGFFcXVhbChhLCBiKSB7XHJcbiAgICBpZiAoIWEgfHwgIWIgfHwgYS50eXBlICE9PSBiLnR5cGUpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKGEudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGEuY29tcGF0TW9kZSA9PT0gYi5jb21wYXRNb2RlO1xyXG4gICAgZWxzZSBpZiAoYS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudFR5cGUpXHJcbiAgICAgICAgcmV0dXJuIChhLm5hbWUgPT09IGIubmFtZSAmJlxyXG4gICAgICAgICAgICBhLnB1YmxpY0lkID09PSBiLnB1YmxpY0lkICYmXHJcbiAgICAgICAgICAgIGEuc3lzdGVtSWQgPT09IGIuc3lzdGVtSWQpO1xyXG4gICAgZWxzZSBpZiAoYS50eXBlID09PSBOb2RlVHlwZS5Db21tZW50IHx8XHJcbiAgICAgICAgYS50eXBlID09PSBOb2RlVHlwZS5UZXh0IHx8XHJcbiAgICAgICAgYS50eXBlID09PSBOb2RlVHlwZS5DREFUQSlcclxuICAgICAgICByZXR1cm4gYS50ZXh0Q29udGVudCA9PT0gYi50ZXh0Q29udGVudDtcclxuICAgIGVsc2UgaWYgKGEudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudClcclxuICAgICAgICByZXR1cm4gKGEudGFnTmFtZSA9PT0gYi50YWdOYW1lICYmXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGEuYXR0cmlidXRlcykgPT09XHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShiLmF0dHJpYnV0ZXMpICYmXHJcbiAgICAgICAgICAgIGEuaXNTVkcgPT09IGIuaXNTVkcgJiZcclxuICAgICAgICAgICAgYS5uZWVkQmxvY2sgPT09IGIubmVlZEJsb2NrKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBnZXRJbnB1dFR5cGUoZWxlbWVudCkge1xyXG4gICAgY29uc3QgdHlwZSA9IGVsZW1lbnQudHlwZTtcclxuICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1yci1pcy1wYXNzd29yZCcpXHJcbiAgICAgICAgPyAncGFzc3dvcmQnXHJcbiAgICAgICAgOiB0eXBlXHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIHRvTG93ZXJDYXNlKHR5cGUpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxufVxyXG5mdW5jdGlvbiBleHRyYWN0RmlsZUV4dGVuc2lvbihwYXRoLCBiYXNlVVJMKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBsZXQgdXJsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB1cmwgPSBuZXcgVVJMKHBhdGgsIGJhc2VVUkwgIT09IG51bGwgJiYgYmFzZVVSTCAhPT0gdm9pZCAwID8gYmFzZVVSTCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlZ2V4ID0gL1xcLihbMC05YS16XSspKD86JCkvaTtcclxuICAgIGNvbnN0IG1hdGNoID0gdXJsLnBhdGhuYW1lLm1hdGNoKHJlZ2V4KTtcclxuICAgIHJldHVybiAoX2EgPSBtYXRjaCA9PT0gbnVsbCB8fCBtYXRjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF0Y2hbMV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XHJcbn1cblxubGV0IF9pZCA9IDE7XHJcbmNvbnN0IHRhZ05hbWVSZWdleCA9IG5ldyBSZWdFeHAoJ1teYS16MC05LV86XScpO1xyXG5jb25zdCBJR05PUkVEX05PREUgPSAtMjtcclxuZnVuY3Rpb24gZ2VuSWQoKSB7XHJcbiAgICByZXR1cm4gX2lkKys7XHJcbn1cclxuZnVuY3Rpb24gZ2V0VmFsaWRUYWdOYW1lKGVsZW1lbnQpIHtcclxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuICdmb3JtJztcclxuICAgIH1cclxuICAgIGNvbnN0IHByb2Nlc3NlZFRhZ05hbWUgPSB0b0xvd2VyQ2FzZShlbGVtZW50LnRhZ05hbWUpO1xyXG4gICAgaWYgKHRhZ05hbWVSZWdleC50ZXN0KHByb2Nlc3NlZFRhZ05hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuICdkaXYnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb2Nlc3NlZFRhZ05hbWU7XHJcbn1cclxuZnVuY3Rpb24gZXh0cmFjdE9yaWdpbih1cmwpIHtcclxuICAgIGxldCBvcmlnaW4gPSAnJztcclxuICAgIGlmICh1cmwuaW5kZXhPZignLy8nKSA+IC0xKSB7XHJcbiAgICAgICAgb3JpZ2luID0gdXJsLnNwbGl0KCcvJykuc2xpY2UoMCwgMykuam9pbignLycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgb3JpZ2luID0gdXJsLnNwbGl0KCcvJylbMF07XHJcbiAgICB9XHJcbiAgICBvcmlnaW4gPSBvcmlnaW4uc3BsaXQoJz8nKVswXTtcclxuICAgIHJldHVybiBvcmlnaW47XHJcbn1cclxubGV0IGNhbnZhc1NlcnZpY2U7XHJcbmxldCBjYW52YXNDdHg7XHJcbmNvbnN0IFVSTF9JTl9DU1NfUkVGID0gL3VybFxcKCg/OignKShbXiddKiknfChcIikoLio/KVwifChbXildKikpXFwpL2dtO1xyXG5jb25zdCBVUkxfUFJPVE9DT0xfTUFUQ0ggPSAvXig/OlthLXorXSs6KT9cXC9cXC8vaTtcclxuY29uc3QgVVJMX1dXV19NQVRDSCA9IC9ed3d3XFwuLiovaTtcclxuY29uc3QgREFUQV9VUkkgPSAvXihkYXRhOikoW14sXSopLCguKikvaTtcclxuZnVuY3Rpb24gYWJzb2x1dGVUb1N0eWxlc2hlZXQoY3NzVGV4dCwgaHJlZikge1xyXG4gICAgcmV0dXJuIChjc3NUZXh0IHx8ICcnKS5yZXBsYWNlKFVSTF9JTl9DU1NfUkVGLCAob3JpZ2luLCBxdW90ZTEsIHBhdGgxLCBxdW90ZTIsIHBhdGgyLCBwYXRoMykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aDEgfHwgcGF0aDIgfHwgcGF0aDM7XHJcbiAgICAgICAgY29uc3QgbWF5YmVRdW90ZSA9IHF1b3RlMSB8fCBxdW90ZTIgfHwgJyc7XHJcbiAgICAgICAgaWYgKCFmaWxlUGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoVVJMX1BST1RPQ09MX01BVENILnRlc3QoZmlsZVBhdGgpIHx8IFVSTF9XV1dfTUFUQ0gudGVzdChmaWxlUGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGB1cmwoJHttYXliZVF1b3RlfSR7ZmlsZVBhdGh9JHttYXliZVF1b3RlfSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoREFUQV9VUkkudGVzdChmaWxlUGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGB1cmwoJHttYXliZVF1b3RlfSR7ZmlsZVBhdGh9JHttYXliZVF1b3RlfSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsZVBhdGhbMF0gPT09ICcvJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYHVybCgke21heWJlUXVvdGV9JHtleHRyYWN0T3JpZ2luKGhyZWYpICsgZmlsZVBhdGh9JHttYXliZVF1b3RlfSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdGFjayA9IGhyZWYuc3BsaXQoJy8nKTtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IGZpbGVQYXRoLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgc3RhY2sucG9wKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJ0ID09PSAnLicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChwYXJ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYHVybCgke21heWJlUXVvdGV9JHtzdGFjay5qb2luKCcvJyl9JHttYXliZVF1b3RlfSlgO1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3QgU1JDU0VUX05PVF9TUEFDRVMgPSAvXlteIFxcdFxcblxcclxcdTAwMGNdKy87XHJcbmNvbnN0IFNSQ1NFVF9DT01NQVNfT1JfU1BBQ0VTID0gL15bLCBcXHRcXG5cXHJcXHUwMDBjXSsvO1xyXG5mdW5jdGlvbiBnZXRBYnNvbHV0ZVNyY3NldFN0cmluZyhkb2MsIGF0dHJpYnV0ZVZhbHVlKSB7XHJcbiAgICBpZiAoYXR0cmlidXRlVmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcclxuICAgIH1cclxuICAgIGxldCBwb3MgPSAwO1xyXG4gICAgZnVuY3Rpb24gY29sbGVjdENoYXJhY3RlcnMocmVnRXgpIHtcclxuICAgICAgICBsZXQgY2hhcnM7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSByZWdFeC5leGVjKGF0dHJpYnV0ZVZhbHVlLnN1YnN0cmluZyhwb3MpKTtcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgY2hhcnMgPSBtYXRjaFswXTtcclxuICAgICAgICAgICAgcG9zICs9IGNoYXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgY29sbGVjdENoYXJhY3RlcnMoU1JDU0VUX0NPTU1BU19PUl9TUEFDRVMpO1xyXG4gICAgICAgIGlmIChwb3MgPj0gYXR0cmlidXRlVmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdXJsID0gY29sbGVjdENoYXJhY3RlcnMoU1JDU0VUX05PVF9TUEFDRVMpO1xyXG4gICAgICAgIGlmICh1cmwuc2xpY2UoLTEpID09PSAnLCcpIHtcclxuICAgICAgICAgICAgdXJsID0gYWJzb2x1dGVUb0RvYyhkb2MsIHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2godXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdG9yc1N0ciA9ICcnO1xyXG4gICAgICAgICAgICB1cmwgPSBhYnNvbHV0ZVRvRG9jKGRvYywgdXJsKTtcclxuICAgICAgICAgICAgbGV0IGluUGFyZW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gYXR0cmlidXRlVmFsdWUuY2hhckF0KHBvcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYyA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCgodXJsICsgZGVzY3JpcHRvcnNTdHIpLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaW5QYXJlbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gJywnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCgodXJsICsgZGVzY3JpcHRvcnNTdHIpLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjID09PSAnKCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5QYXJlbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09PSAnKScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5QYXJlbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yc1N0ciArPSBjO1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0LmpvaW4oJywgJyk7XHJcbn1cclxuY29uc3QgY2FjaGVkRG9jdW1lbnQgPSBuZXcgV2Vha01hcCgpO1xyXG5mdW5jdGlvbiBhYnNvbHV0ZVRvRG9jKGRvYywgYXR0cmlidXRlVmFsdWUpIHtcclxuICAgIGlmICghYXR0cmlidXRlVmFsdWUgfHwgYXR0cmlidXRlVmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRIcmVmKGRvYywgYXR0cmlidXRlVmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGlzU1ZHRWxlbWVudChlbCkge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4oZWwudGFnTmFtZSA9PT0gJ3N2ZycgfHwgZWwub3duZXJTVkdFbGVtZW50KTtcclxufVxyXG5mdW5jdGlvbiBnZXRIcmVmKGRvYywgY3VzdG9tSHJlZikge1xyXG4gICAgbGV0IGEgPSBjYWNoZWREb2N1bWVudC5nZXQoZG9jKTtcclxuICAgIGlmICghYSkge1xyXG4gICAgICAgIGEgPSBkb2MuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGNhY2hlZERvY3VtZW50LnNldChkb2MsIGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFjdXN0b21IcmVmKSB7XHJcbiAgICAgICAgY3VzdG9tSHJlZiA9ICcnO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3VzdG9tSHJlZi5zdGFydHNXaXRoKCdibG9iOicpIHx8IGN1c3RvbUhyZWYuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xyXG4gICAgICAgIHJldHVybiBjdXN0b21IcmVmO1xyXG4gICAgfVxyXG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBjdXN0b21IcmVmKTtcclxuICAgIHJldHVybiBhLmhyZWY7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNmb3JtQXR0cmlidXRlKGRvYywgdGFnTmFtZSwgbmFtZSwgdmFsdWUpIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAobmFtZSA9PT0gJ3NyYycgfHxcclxuICAgICAgICAobmFtZSA9PT0gJ2hyZWYnICYmICEodGFnTmFtZSA9PT0gJ3VzZScgJiYgdmFsdWVbMF0gPT09ICcjJykpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuYW1lID09PSAneGxpbms6aHJlZicgJiYgdmFsdWVbMF0gIT09ICcjJykge1xyXG4gICAgICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobmFtZSA9PT0gJ2JhY2tncm91bmQnICYmXHJcbiAgICAgICAgKHRhZ05hbWUgPT09ICd0YWJsZScgfHwgdGFnTmFtZSA9PT0gJ3RkJyB8fCB0YWdOYW1lID09PSAndGgnKSkge1xyXG4gICAgICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobmFtZSA9PT0gJ3NyY3NldCcpIHtcclxuICAgICAgICByZXR1cm4gZ2V0QWJzb2x1dGVTcmNzZXRTdHJpbmcoZG9jLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIGFic29sdXRlVG9TdHlsZXNoZWV0KHZhbHVlLCBnZXRIcmVmKGRvYykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFnTmFtZSA9PT0gJ29iamVjdCcgJiYgbmFtZSA9PT0gJ2RhdGEnKSB7XHJcbiAgICAgICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuZnVuY3Rpb24gaWdub3JlQXR0cmlidXRlKHRhZ05hbWUsIG5hbWUsIF92YWx1ZSkge1xyXG4gICAgcmV0dXJuICh0YWdOYW1lID09PSAndmlkZW8nIHx8IHRhZ05hbWUgPT09ICdhdWRpbycpICYmIG5hbWUgPT09ICdhdXRvcGxheSc7XHJcbn1cclxuZnVuY3Rpb24gX2lzQmxvY2tlZEVsZW1lbnQoZWxlbWVudCwgYmxvY2tDbGFzcywgYmxvY2tTZWxlY3Rvcikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIGJsb2NrQ2xhc3MgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhibG9ja0NsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVJbmRleCA9IGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aDsgZUluZGV4LS07KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTGlzdFtlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrQ2xhc3MudGVzdChjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJsb2NrU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyhibG9ja1NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGNsYXNzTWF0Y2hlc1JlZ2V4KG5vZGUsIHJlZ2V4LCBjaGVja0FuY2VzdG9ycykge1xyXG4gICAgaWYgKCFub2RlKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBub2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIGlmICghY2hlY2tBbmNlc3RvcnMpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gY2xhc3NNYXRjaGVzUmVnZXgobm9kZS5wYXJlbnROb2RlLCByZWdleCwgY2hlY2tBbmNlc3RvcnMpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgZUluZGV4ID0gbm9kZS5jbGFzc0xpc3QubGVuZ3RoOyBlSW5kZXgtLTspIHtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBub2RlLmNsYXNzTGlzdFtlSW5kZXhdO1xyXG4gICAgICAgIGlmIChyZWdleC50ZXN0KGNsYXNzTmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFjaGVja0FuY2VzdG9ycylcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gY2xhc3NNYXRjaGVzUmVnZXgobm9kZS5wYXJlbnROb2RlLCByZWdleCwgY2hlY2tBbmNlc3RvcnMpO1xyXG59XHJcbmZ1bmN0aW9uIG5lZWRNYXNraW5nVGV4dChub2RlLCBtYXNrVGV4dENsYXNzLCBtYXNrVGV4dFNlbGVjdG9yLCBjaGVja0FuY2VzdG9ycykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBlbCA9IG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFXHJcbiAgICAgICAgICAgID8gbm9kZVxyXG4gICAgICAgICAgICA6IG5vZGUucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAoZWwgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodHlwZW9mIG1hc2tUZXh0Q2xhc3MgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja0FuY2VzdG9ycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsb3Nlc3QoYC4ke21hc2tUZXh0Q2xhc3N9YCkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKG1hc2tUZXh0Q2xhc3MpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY2xhc3NNYXRjaGVzUmVnZXgoZWwsIG1hc2tUZXh0Q2xhc3MsIGNoZWNrQW5jZXN0b3JzKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWFza1RleHRTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tBbmNlc3RvcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5jbG9zZXN0KG1hc2tUZXh0U2VsZWN0b3IpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLm1hdGNoZXMobWFza1RleHRTZWxlY3RvcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIG9uY2VJZnJhbWVMb2FkZWQoaWZyYW1lRWwsIGxpc3RlbmVyLCBpZnJhbWVMb2FkVGltZW91dCkge1xyXG4gICAgY29uc3Qgd2luID0gaWZyYW1lRWwuY29udGVudFdpbmRvdztcclxuICAgIGlmICghd2luKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpcmVkID0gZmFsc2U7XHJcbiAgICBsZXQgcmVhZHlTdGF0ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVhZHlTdGF0ZSA9IHdpbi5kb2N1bWVudC5yZWFkeVN0YXRlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWZpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgZmlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgaWZyYW1lTG9hZFRpbWVvdXQpO1xyXG4gICAgICAgIGlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIGZpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGlzdGVuZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBibGFua1VybCA9ICdhYm91dDpibGFuayc7XHJcbiAgICBpZiAod2luLmxvY2F0aW9uLmhyZWYgIT09IGJsYW5rVXJsIHx8XHJcbiAgICAgICAgaWZyYW1lRWwuc3JjID09PSBibGFua1VybCB8fFxyXG4gICAgICAgIGlmcmFtZUVsLnNyYyA9PT0gJycpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGxpc3RlbmVyLCAwKTtcclxuICAgICAgICByZXR1cm4gaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIGlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsaXN0ZW5lcik7XHJcbn1cclxuZnVuY3Rpb24gb25jZVN0eWxlc2hlZXRMb2FkZWQobGluaywgbGlzdGVuZXIsIHN0eWxlU2hlZXRMb2FkVGltZW91dCkge1xyXG4gICAgbGV0IGZpcmVkID0gZmFsc2U7XHJcbiAgICBsZXQgc3R5bGVTaGVldExvYWRlZDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3R5bGVTaGVldExvYWRlZCA9IGxpbmsuc2hlZXQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoc3R5bGVTaGVldExvYWRlZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZmlyZWQpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgZmlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHN0eWxlU2hlZXRMb2FkVGltZW91dCk7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICBmaXJlZCA9IHRydWU7XHJcbiAgICAgICAgbGlzdGVuZXIoKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGUobiwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBkb2MsIG1pcnJvciwgYmxvY2tDbGFzcywgYmxvY2tTZWxlY3RvciwgbmVlZHNNYXNrLCBpbmxpbmVTdHlsZXNoZWV0LCBtYXNrSW5wdXRPcHRpb25zID0ge30sIG1hc2tUZXh0Rm4sIG1hc2tJbnB1dEZuLCBkYXRhVVJMT3B0aW9ucyA9IHt9LCBpbmxpbmVJbWFnZXMsIHJlY29yZENhbnZhcywga2VlcElmcmFtZVNyY0ZuLCBuZXdseUFkZGVkRWxlbWVudCA9IGZhbHNlLCB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IHJvb3RJZCA9IGdldFJvb3RJZChkb2MsIG1pcnJvcik7XHJcbiAgICBzd2l0Y2ggKG4ubm9kZVR5cGUpIHtcclxuICAgICAgICBjYXNlIG4uRE9DVU1FTlRfTk9ERTpcclxuICAgICAgICAgICAgaWYgKG4uY29tcGF0TW9kZSAhPT0gJ0NTUzFDb21wYXQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkRvY3VtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhdE1vZGU6IG4uY29tcGF0TW9kZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkRvY3VtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2Ugbi5ET0NVTUVOVF9UWVBFX05PREU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudFR5cGUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWNJZDogbi5wdWJsaWNJZCxcclxuICAgICAgICAgICAgICAgIHN5c3RlbUlkOiBuLnN5c3RlbUlkLFxyXG4gICAgICAgICAgICAgICAgcm9vdElkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2Ugbi5FTEVNRU5UX05PREU6XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVFbGVtZW50Tm9kZShuLCB7XHJcbiAgICAgICAgICAgICAgICBkb2MsXHJcbiAgICAgICAgICAgICAgICBibG9ja0NsYXNzLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIGlubGluZVN0eWxlc2hlZXQsXHJcbiAgICAgICAgICAgICAgICBtYXNrSW5wdXRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgbWFza0lucHV0Rm4sXHJcbiAgICAgICAgICAgICAgICBkYXRhVVJMT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGlubGluZUltYWdlcyxcclxuICAgICAgICAgICAgICAgIHJlY29yZENhbnZhcyxcclxuICAgICAgICAgICAgICAgIGtlZXBJZnJhbWVTcmNGbixcclxuICAgICAgICAgICAgICAgIG5ld2x5QWRkZWRFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgcm9vdElkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIG4uVEVYVF9OT0RFOlxyXG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplVGV4dE5vZGUobiwge1xyXG4gICAgICAgICAgICAgICAgZG9jLFxyXG4gICAgICAgICAgICAgICAgbmVlZHNNYXNrLFxyXG4gICAgICAgICAgICAgICAgbWFza1RleHRGbixcclxuICAgICAgICAgICAgICAgIHJvb3RJZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBuLkNEQVRBX1NFQ1RJT05fTk9ERTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkNEQVRBLFxyXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgcm9vdElkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2Ugbi5DT01NRU5UX05PREU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Db21tZW50LFxyXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IG4udGV4dENvbnRlbnQgfHwgJycsXHJcbiAgICAgICAgICAgICAgICByb290SWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldFJvb3RJZChkb2MsIG1pcnJvcikge1xyXG4gICAgaWYgKCFtaXJyb3IuaGFzTm9kZShkb2MpKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBkb2NJZCA9IG1pcnJvci5nZXRJZChkb2MpO1xyXG4gICAgcmV0dXJuIGRvY0lkID09PSAxID8gdW5kZWZpbmVkIDogZG9jSWQ7XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplVGV4dE5vZGUobiwgb3B0aW9ucykge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgY29uc3QgeyBuZWVkc01hc2ssIG1hc2tUZXh0Rm4sIHJvb3RJZCB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IHBhcmVudFRhZ05hbWUgPSBuLnBhcmVudE5vZGUgJiYgbi5wYXJlbnROb2RlLnRhZ05hbWU7XHJcbiAgICBsZXQgdGV4dENvbnRlbnQgPSBuLnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgaXNTdHlsZSA9IHBhcmVudFRhZ05hbWUgPT09ICdTVFlMRScgPyB0cnVlIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaXNTY3JpcHQgPSBwYXJlbnRUYWdOYW1lID09PSAnU0NSSVBUJyA/IHRydWUgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoaXNTdHlsZSAmJiB0ZXh0Q29udGVudCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChuLm5leHRTaWJsaW5nIHx8IG4ucHJldmlvdXNTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKF9hID0gbi5wYXJlbnROb2RlLnNoZWV0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIHRleHRDb250ZW50ID0gc3RyaW5naWZ5U3R5bGVzaGVldChuLnBhcmVudE5vZGUuc2hlZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW5ub3QgZ2V0IENTUyBzdHlsZXMgZnJvbSB0ZXh0J3MgcGFyZW50Tm9kZS4gRXJyb3I6ICR7ZXJyfWAsIG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0Q29udGVudCA9IGFic29sdXRlVG9TdHlsZXNoZWV0KHRleHRDb250ZW50LCBnZXRIcmVmKG9wdGlvbnMuZG9jKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTY3JpcHQpIHtcclxuICAgICAgICB0ZXh0Q29udGVudCA9ICdTQ1JJUFRfUExBQ0VIT0xERVInO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1N0eWxlICYmICFpc1NjcmlwdCAmJiB0ZXh0Q29udGVudCAmJiBuZWVkc01hc2spIHtcclxuICAgICAgICB0ZXh0Q29udGVudCA9IG1hc2tUZXh0Rm5cclxuICAgICAgICAgICAgPyBtYXNrVGV4dEZuKHRleHRDb250ZW50LCBuLnBhcmVudEVsZW1lbnQpXHJcbiAgICAgICAgICAgIDogdGV4dENvbnRlbnQucmVwbGFjZSgvW1xcU10vZywgJyonKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTm9kZVR5cGUuVGV4dCxcclxuICAgICAgICB0ZXh0Q29udGVudDogdGV4dENvbnRlbnQgfHwgJycsXHJcbiAgICAgICAgaXNTdHlsZSxcclxuICAgICAgICByb290SWQsXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZUVsZW1lbnROb2RlKG4sIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgZG9jLCBibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yLCBpbmxpbmVTdHlsZXNoZWV0LCBtYXNrSW5wdXRPcHRpb25zID0ge30sIG1hc2tJbnB1dEZuLCBkYXRhVVJMT3B0aW9ucyA9IHt9LCBpbmxpbmVJbWFnZXMsIHJlY29yZENhbnZhcywga2VlcElmcmFtZVNyY0ZuLCBuZXdseUFkZGVkRWxlbWVudCA9IGZhbHNlLCByb290SWQsIH0gPSBvcHRpb25zO1xyXG4gICAgY29uc3QgbmVlZEJsb2NrID0gX2lzQmxvY2tlZEVsZW1lbnQobiwgYmxvY2tDbGFzcywgYmxvY2tTZWxlY3Rvcik7XHJcbiAgICBjb25zdCB0YWdOYW1lID0gZ2V0VmFsaWRUYWdOYW1lKG4pO1xyXG4gICAgbGV0IGF0dHJpYnV0ZXMgPSB7fTtcclxuICAgIGNvbnN0IGxlbiA9IG4uYXR0cmlidXRlcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYXR0ciA9IG4uYXR0cmlidXRlc1tpXTtcclxuICAgICAgICBpZiAoIWlnbm9yZUF0dHJpYnV0ZSh0YWdOYW1lLCBhdHRyLm5hbWUsIGF0dHIudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IHRyYW5zZm9ybUF0dHJpYnV0ZShkb2MsIHRhZ05hbWUsIHRvTG93ZXJDYXNlKGF0dHIubmFtZSksIGF0dHIudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YWdOYW1lID09PSAnbGluaycgJiYgaW5saW5lU3R5bGVzaGVldCkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBBcnJheS5mcm9tKGRvYy5zdHlsZVNoZWV0cykuZmluZCgocykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcy5ocmVmID09PSBuLmhyZWY7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGNzc1RleHQgPSBudWxsO1xyXG4gICAgICAgIGlmIChzdHlsZXNoZWV0KSB7XHJcbiAgICAgICAgICAgIGNzc1RleHQgPSBzdHJpbmdpZnlTdHlsZXNoZWV0KHN0eWxlc2hlZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3NzVGV4dCkge1xyXG4gICAgICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5yZWw7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmhyZWY7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuX2Nzc1RleHQgPSBhYnNvbHV0ZVRvU3R5bGVzaGVldChjc3NUZXh0LCBzdHlsZXNoZWV0LmhyZWYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YWdOYW1lID09PSAnc3R5bGUnICYmXHJcbiAgICAgICAgbi5zaGVldCAmJlxyXG4gICAgICAgICEobi5pbm5lclRleHQgfHwgbi50ZXh0Q29udGVudCB8fCAnJykudHJpbSgpLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGNzc1RleHQgPSBzdHJpbmdpZnlTdHlsZXNoZWV0KG4uc2hlZXQpO1xyXG4gICAgICAgIGlmIChjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuX2Nzc1RleHQgPSBhYnNvbHV0ZVRvU3R5bGVzaGVldChjc3NUZXh0LCBnZXRIcmVmKGRvYykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnIHx8IHRhZ05hbWUgPT09ICd0ZXh0YXJlYScgfHwgdGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG4udmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IG4uY2hlY2tlZDtcclxuICAgICAgICBpZiAoYXR0cmlidXRlcy50eXBlICE9PSAncmFkaW8nICYmXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMudHlwZSAhPT0gJ2NoZWNrYm94JyAmJlxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnR5cGUgIT09ICdzdWJtaXQnICYmXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMudHlwZSAhPT0gJ2J1dHRvbicgJiZcclxuICAgICAgICAgICAgdmFsdWUpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy52YWx1ZSA9IG1hc2tJbnB1dFZhbHVlKHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IG4sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBnZXRJbnB1dFR5cGUobiksXHJcbiAgICAgICAgICAgICAgICB0YWdOYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBtYXNrSW5wdXRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgbWFza0lucHV0Rm4sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdvcHRpb24nKSB7XHJcbiAgICAgICAgaWYgKG4uc2VsZWN0ZWQgJiYgIW1hc2tJbnB1dE9wdGlvbnNbJ3NlbGVjdCddKSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuc2VsZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdjYW52YXMnICYmIHJlY29yZENhbnZhcykge1xyXG4gICAgICAgIGlmIChuLl9fY29udGV4dCA9PT0gJzJkJykge1xyXG4gICAgICAgICAgICBpZiAoIWlzMkRDYW52YXNCbGFuayhuKSkge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5ycl9kYXRhVVJMID0gbi50b0RhdGFVUkwoZGF0YVVSTE9wdGlvbnMudHlwZSwgZGF0YVVSTE9wdGlvbnMucXVhbGl0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoISgnX19jb250ZXh0JyBpbiBuKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjYW52YXNEYXRhVVJMID0gbi50b0RhdGFVUkwoZGF0YVVSTE9wdGlvbnMudHlwZSwgZGF0YVVSTE9wdGlvbnMucXVhbGl0eSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsYW5rQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGJsYW5rQ2FudmFzLndpZHRoID0gbi53aWR0aDtcclxuICAgICAgICAgICAgYmxhbmtDYW52YXMuaGVpZ2h0ID0gbi5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsYW5rQ2FudmFzRGF0YVVSTCA9IGJsYW5rQ2FudmFzLnRvRGF0YVVSTChkYXRhVVJMT3B0aW9ucy50eXBlLCBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5KTtcclxuICAgICAgICAgICAgaWYgKGNhbnZhc0RhdGFVUkwgIT09IGJsYW5rQ2FudmFzRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5ycl9kYXRhVVJMID0gY2FudmFzRGF0YVVSTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YWdOYW1lID09PSAnaW1nJyAmJiBpbmxpbmVJbWFnZXMpIHtcclxuICAgICAgICBpZiAoIWNhbnZhc1NlcnZpY2UpIHtcclxuICAgICAgICAgICAgY2FudmFzU2VydmljZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgY2FudmFzQ3R4ID0gY2FudmFzU2VydmljZS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbWFnZSA9IG47XHJcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBpbWFnZS5jcm9zc09yaWdpbjtcclxuICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xyXG4gICAgICAgIGNvbnN0IHJlY29yZElubGluZUltYWdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgcmVjb3JkSW5saW5lSW1hZ2UpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzU2VydmljZS53aWR0aCA9IGltYWdlLm5hdHVyYWxXaWR0aDtcclxuICAgICAgICAgICAgICAgIGNhbnZhc1NlcnZpY2UuaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcclxuICAgICAgICAgICAgICAgIGNhbnZhc0N0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5ycl9kYXRhVVJMID0gY2FudmFzU2VydmljZS50b0RhdGFVUkwoZGF0YVVSTE9wdGlvbnMudHlwZSwgZGF0YVVSTE9wdGlvbnMucXVhbGl0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW5ub3QgaW5saW5lIGltZyBzcmM9JHtpbWFnZS5jdXJyZW50U3JjfSEgRXJyb3I6ICR7ZXJyfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9sZFZhbHVlXHJcbiAgICAgICAgICAgICAgICA/IChhdHRyaWJ1dGVzLmNyb3NzT3JpZ2luID0gb2xkVmFsdWUpXHJcbiAgICAgICAgICAgICAgICA6IGltYWdlLnJlbW92ZUF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpbWFnZS5jb21wbGV0ZSAmJiBpbWFnZS5uYXR1cmFsV2lkdGggIT09IDApXHJcbiAgICAgICAgICAgIHJlY29yZElubGluZUltYWdlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVjb3JkSW5saW5lSW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdhdWRpbycgfHwgdGFnTmFtZSA9PT0gJ3ZpZGVvJykge1xyXG4gICAgICAgIGNvbnN0IG1lZGlhQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XHJcbiAgICAgICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhU3RhdGUgPSBuLnBhdXNlZFxyXG4gICAgICAgICAgICA/ICdwYXVzZWQnXHJcbiAgICAgICAgICAgIDogJ3BsYXllZCc7XHJcbiAgICAgICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhQ3VycmVudFRpbWUgPSBuLmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYVBsYXliYWNrUmF0ZSA9IG4ucGxheWJhY2tSYXRlO1xyXG4gICAgICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYU11dGVkID0gbi5tdXRlZDtcclxuICAgICAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFMb29wID0gbi5sb29wO1xyXG4gICAgICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYVZvbHVtZSA9IG4udm9sdW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKCFuZXdseUFkZGVkRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChuLnNjcm9sbExlZnQpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5ycl9zY3JvbGxMZWZ0ID0gbi5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5zY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5ycl9zY3JvbGxUb3AgPSBuLnNjcm9sbFRvcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobmVlZEJsb2NrKSB7XHJcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgICAgIGNsYXNzOiBhdHRyaWJ1dGVzLmNsYXNzLFxyXG4gICAgICAgICAgICBycl93aWR0aDogYCR7d2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBycl9oZWlnaHQ6IGAke2hlaWdodH1weGAsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICh0YWdOYW1lID09PSAnaWZyYW1lJyAmJiAha2VlcElmcmFtZVNyY0ZuKGF0dHJpYnV0ZXMuc3JjKSkge1xyXG4gICAgICAgIGlmICghbi5jb250ZW50RG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5ycl9zcmMgPSBhdHRyaWJ1dGVzLnNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuc3JjO1xyXG4gICAgfVxyXG4gICAgbGV0IGlzQ3VzdG9tRWxlbWVudDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSlcclxuICAgICAgICAgICAgaXNDdXN0b21FbGVtZW50ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IE5vZGVUeXBlLkVsZW1lbnQsXHJcbiAgICAgICAgdGFnTmFtZSxcclxuICAgICAgICBhdHRyaWJ1dGVzLFxyXG4gICAgICAgIGNoaWxkTm9kZXM6IFtdLFxyXG4gICAgICAgIGlzU1ZHOiBpc1NWR0VsZW1lbnQobikgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIG5lZWRCbG9jayxcclxuICAgICAgICByb290SWQsXHJcbiAgICAgICAgaXNDdXN0b206IGlzQ3VzdG9tRWxlbWVudCxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gbG93ZXJJZkV4aXN0cyhtYXliZUF0dHIpIHtcclxuICAgIGlmIChtYXliZUF0dHIgPT09IHVuZGVmaW5lZCB8fCBtYXliZUF0dHIgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbWF5YmVBdHRyLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2xpbURPTUV4Y2x1ZGVkKHNuLCBzbGltRE9NT3B0aW9ucykge1xyXG4gICAgaWYgKHNsaW1ET01PcHRpb25zLmNvbW1lbnQgJiYgc24udHlwZSA9PT0gTm9kZVR5cGUuQ29tbWVudCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc24udHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChzbGltRE9NT3B0aW9ucy5zY3JpcHQgJiZcclxuICAgICAgICAgICAgKHNuLnRhZ05hbWUgPT09ICdzY3JpcHQnIHx8XHJcbiAgICAgICAgICAgICAgICAoc24udGFnTmFtZSA9PT0gJ2xpbmsnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHNuLmF0dHJpYnV0ZXMucmVsID09PSAncHJlbG9hZCcgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc24uYXR0cmlidXRlcy5yZWwgPT09ICdtb2R1bGVwcmVsb2FkJykgJiZcclxuICAgICAgICAgICAgICAgICAgICBzbi5hdHRyaWJ1dGVzLmFzID09PSAnc2NyaXB0JykgfHxcclxuICAgICAgICAgICAgICAgIChzbi50YWdOYW1lID09PSAnbGluaycgJiZcclxuICAgICAgICAgICAgICAgICAgICBzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gJ3ByZWZldGNoJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBzbi5hdHRyaWJ1dGVzLmhyZWYgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdEZpbGVFeHRlbnNpb24oc24uYXR0cmlidXRlcy5ocmVmKSA9PT0gJ2pzJykpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkRmF2aWNvbiAmJlxyXG4gICAgICAgICAgICAoKHNuLnRhZ05hbWUgPT09ICdsaW5rJyAmJiBzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gJ3Nob3J0Y3V0IGljb24nKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNuLnRhZ05hbWUgPT09ICdtZXRhJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkubWF0Y2goL15tc2FwcGxpY2F0aW9uLXRpbGUoaW1hZ2V8Y29sb3IpJC8pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2FwcGxpY2F0aW9uLW5hbWUnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5yZWwpID09PSAnaWNvbicgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnJlbCkgPT09ICdhcHBsZS10b3VjaC1pY29uJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucmVsKSA9PT0gJ3Nob3J0Y3V0IGljb24nKSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzbi50YWdOYW1lID09PSAnbWV0YScpIHtcclxuICAgICAgICAgICAgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRNZXRhRGVzY0tleXdvcmRzICYmXHJcbiAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkubWF0Y2goL15kZXNjcmlwdGlvbnxrZXl3b3JkcyQvKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFTb2NpYWwgJiZcclxuICAgICAgICAgICAgICAgIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucHJvcGVydHkpLm1hdGNoKC9eKG9nfHR3aXR0ZXJ8ZmIpOi8pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpLm1hdGNoKC9eKG9nfHR3aXR0ZXIpOi8pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAncGludGVyZXN0JykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRNZXRhUm9ib3RzICYmXHJcbiAgICAgICAgICAgICAgICAobG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAncm9ib3RzJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2dvb2dsZWJvdCcgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdiaW5nYm90JykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRNZXRhSHR0cEVxdWl2ICYmXHJcbiAgICAgICAgICAgICAgICBzbi5hdHRyaWJ1dGVzWydodHRwLWVxdWl2J10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFBdXRob3JzaGlwICYmXHJcbiAgICAgICAgICAgICAgICAobG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnYXV0aG9yJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2dlbmVyYXRvcicgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdmcmFtZXdvcmsnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAncHVibGlzaGVyJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ3Byb2dpZCcgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucHJvcGVydHkpLm1hdGNoKC9eYXJ0aWNsZTovKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL15wcm9kdWN0Oi8pKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFWZXJpZmljYXRpb24gJiZcclxuICAgICAgICAgICAgICAgIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdnb29nbGUtc2l0ZS12ZXJpZmljYXRpb24nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAneWFuZGV4LXZlcmlmaWNhdGlvbicgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdjc3JmLXRva2VuJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ3A6ZG9tYWluX3ZlcmlmeScgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICd2ZXJpZnktdjEnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAndmVyaWZpY2F0aW9uJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ3Nob3BpZnktY2hlY2tvdXQtYXBpLXRva2VuJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGVXaXRoSWQobiwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBkb2MsIG1pcnJvciwgYmxvY2tDbGFzcywgYmxvY2tTZWxlY3RvciwgbWFza1RleHRDbGFzcywgbWFza1RleHRTZWxlY3Rvciwgc2tpcENoaWxkID0gZmFsc2UsIGlubGluZVN0eWxlc2hlZXQgPSB0cnVlLCBtYXNrSW5wdXRPcHRpb25zID0ge30sIG1hc2tUZXh0Rm4sIG1hc2tJbnB1dEZuLCBzbGltRE9NT3B0aW9ucywgZGF0YVVSTE9wdGlvbnMgPSB7fSwgaW5saW5lSW1hZ2VzID0gZmFsc2UsIHJlY29yZENhbnZhcyA9IGZhbHNlLCBvblNlcmlhbGl6ZSwgb25JZnJhbWVMb2FkLCBpZnJhbWVMb2FkVGltZW91dCA9IDUwMDAsIG9uU3R5bGVzaGVldExvYWQsIHN0eWxlc2hlZXRMb2FkVGltZW91dCA9IDUwMDAsIGtlZXBJZnJhbWVTcmNGbiA9ICgpID0+IGZhbHNlLCBuZXdseUFkZGVkRWxlbWVudCA9IGZhbHNlLCB9ID0gb3B0aW9ucztcclxuICAgIGxldCB7IG5lZWRzTWFzayB9ID0gb3B0aW9ucztcclxuICAgIGxldCB7IHByZXNlcnZlV2hpdGVTcGFjZSA9IHRydWUgfSA9IG9wdGlvbnM7XHJcbiAgICBpZiAoIW5lZWRzTWFzayAmJlxyXG4gICAgICAgIG4uY2hpbGROb2Rlcykge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrQW5jZXN0b3JzID0gbmVlZHNNYXNrID09PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbmVlZHNNYXNrID0gbmVlZE1hc2tpbmdUZXh0KG4sIG1hc2tUZXh0Q2xhc3MsIG1hc2tUZXh0U2VsZWN0b3IsIGNoZWNrQW5jZXN0b3JzKTtcclxuICAgIH1cclxuICAgIGNvbnN0IF9zZXJpYWxpemVkTm9kZSA9IHNlcmlhbGl6ZU5vZGUobiwge1xyXG4gICAgICAgIGRvYyxcclxuICAgICAgICBtaXJyb3IsXHJcbiAgICAgICAgYmxvY2tDbGFzcyxcclxuICAgICAgICBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgIG5lZWRzTWFzayxcclxuICAgICAgICBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgbWFza1RleHRGbixcclxuICAgICAgICBtYXNrSW5wdXRGbixcclxuICAgICAgICBkYXRhVVJMT3B0aW9ucyxcclxuICAgICAgICBpbmxpbmVJbWFnZXMsXHJcbiAgICAgICAgcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgIGtlZXBJZnJhbWVTcmNGbixcclxuICAgICAgICBuZXdseUFkZGVkRWxlbWVudCxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFfc2VyaWFsaXplZE5vZGUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4obiwgJ25vdCBzZXJpYWxpemVkJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBsZXQgaWQ7XHJcbiAgICBpZiAobWlycm9yLmhhc05vZGUobikpIHtcclxuICAgICAgICBpZCA9IG1pcnJvci5nZXRJZChuKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNsaW1ET01FeGNsdWRlZChfc2VyaWFsaXplZE5vZGUsIHNsaW1ET01PcHRpb25zKSB8fFxyXG4gICAgICAgICghcHJlc2VydmVXaGl0ZVNwYWNlICYmXHJcbiAgICAgICAgICAgIF9zZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5UZXh0ICYmXHJcbiAgICAgICAgICAgICFfc2VyaWFsaXplZE5vZGUuaXNTdHlsZSAmJlxyXG4gICAgICAgICAgICAhX3NlcmlhbGl6ZWROb2RlLnRleHRDb250ZW50LnJlcGxhY2UoL15cXHMrfFxccyskL2dtLCAnJykubGVuZ3RoKSkge1xyXG4gICAgICAgIGlkID0gSUdOT1JFRF9OT0RFO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWQgPSBnZW5JZCgpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VyaWFsaXplZE5vZGUgPSBPYmplY3QuYXNzaWduKF9zZXJpYWxpemVkTm9kZSwgeyBpZCB9KTtcclxuICAgIG1pcnJvci5hZGQobiwgc2VyaWFsaXplZE5vZGUpO1xyXG4gICAgaWYgKGlkID09PSBJR05PUkVEX05PREUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChvblNlcmlhbGl6ZSkge1xyXG4gICAgICAgIG9uU2VyaWFsaXplKG4pO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlY29yZENoaWxkID0gIXNraXBDaGlsZDtcclxuICAgIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XHJcbiAgICAgICAgcmVjb3JkQ2hpbGQgPSByZWNvcmRDaGlsZCAmJiAhc2VyaWFsaXplZE5vZGUubmVlZEJsb2NrO1xyXG4gICAgICAgIGRlbGV0ZSBzZXJpYWxpemVkTm9kZS5uZWVkQmxvY2s7XHJcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IG4uc2hhZG93Um9vdDtcclxuICAgICAgICBpZiAoc2hhZG93Um9vdCAmJiBpc05hdGl2ZVNoYWRvd0RvbShzaGFkb3dSb290KSlcclxuICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUuaXNTaGFkb3dIb3N0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICgoc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgfHxcclxuICAgICAgICBzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSAmJlxyXG4gICAgICAgIHJlY29yZENoaWxkKSB7XHJcbiAgICAgICAgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRXaGl0ZXNwYWNlICYmXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiZcclxuICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gJ2hlYWQnKSB7XHJcbiAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBieXBhc3NPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBkb2MsXHJcbiAgICAgICAgICAgIG1pcnJvcixcclxuICAgICAgICAgICAgYmxvY2tDbGFzcyxcclxuICAgICAgICAgICAgYmxvY2tTZWxlY3RvcixcclxuICAgICAgICAgICAgbmVlZHNNYXNrLFxyXG4gICAgICAgICAgICBtYXNrVGV4dENsYXNzLFxyXG4gICAgICAgICAgICBtYXNrVGV4dFNlbGVjdG9yLFxyXG4gICAgICAgICAgICBza2lwQ2hpbGQsXHJcbiAgICAgICAgICAgIGlubGluZVN0eWxlc2hlZXQsXHJcbiAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgICAgIG1hc2tUZXh0Rm4sXHJcbiAgICAgICAgICAgIG1hc2tJbnB1dEZuLFxyXG4gICAgICAgICAgICBzbGltRE9NT3B0aW9ucyxcclxuICAgICAgICAgICAgZGF0YVVSTE9wdGlvbnMsXHJcbiAgICAgICAgICAgIGlubGluZUltYWdlcyxcclxuICAgICAgICAgICAgcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UsXHJcbiAgICAgICAgICAgIG9uU2VyaWFsaXplLFxyXG4gICAgICAgICAgICBvbklmcmFtZUxvYWQsXHJcbiAgICAgICAgICAgIGlmcmFtZUxvYWRUaW1lb3V0LFxyXG4gICAgICAgICAgICBvblN0eWxlc2hlZXRMb2FkLFxyXG4gICAgICAgICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgIGtlZXBJZnJhbWVTcmNGbixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZWROb2RlLnRhZ05hbWUgPT09ICd0ZXh0YXJlYScgJiZcclxuICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSA7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGROIG9mIEFycmF5LmZyb20obi5jaGlsZE5vZGVzKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZENoaWxkTm9kZSA9IHNlcmlhbGl6ZU5vZGVXaXRoSWQoY2hpbGROLCBieXBhc3NPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXJpYWxpemVkQ2hpbGROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUuY2hpbGROb2Rlcy5wdXNoKHNlcmlhbGl6ZWRDaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0VsZW1lbnQobikgJiYgbi5zaGFkb3dSb290KSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGROIG9mIEFycmF5LmZyb20obi5zaGFkb3dSb290LmNoaWxkTm9kZXMpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkQ2hpbGROb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChjaGlsZE4sIGJ5cGFzc09wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRDaGlsZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc05hdGl2ZVNoYWRvd0RvbShuLnNoYWRvd1Jvb3QpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZXJpYWxpemVkQ2hpbGROb2RlLmlzU2hhZG93ID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUuY2hpbGROb2Rlcy5wdXNoKHNlcmlhbGl6ZWRDaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG4ucGFyZW50Tm9kZSAmJlxyXG4gICAgICAgIGlzU2hhZG93Um9vdChuLnBhcmVudE5vZGUpICYmXHJcbiAgICAgICAgaXNOYXRpdmVTaGFkb3dEb20obi5wYXJlbnROb2RlKSkge1xyXG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLmlzU2hhZG93ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmXHJcbiAgICAgICAgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gJ2lmcmFtZScpIHtcclxuICAgICAgICBvbmNlSWZyYW1lTG9hZGVkKG4sICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWZyYW1lRG9jID0gbi5jb250ZW50RG9jdW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChpZnJhbWVEb2MgJiYgb25JZnJhbWVMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkSWZyYW1lTm9kZSA9IHNlcmlhbGl6ZU5vZGVXaXRoSWQoaWZyYW1lRG9jLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jOiBpZnJhbWVEb2MsXHJcbiAgICAgICAgICAgICAgICAgICAgbWlycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrQ2xhc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBuZWVkc01hc2ssXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RleHRDbGFzcyxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVGV4dFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNraXBDaGlsZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lU3R5bGVzaGVldCxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrSW5wdXRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tUZXh0Rm4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza0lucHV0Rm4sXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpbURPTU9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVVSTE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lSW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZENhbnZhcyxcclxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpYWxpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgb25JZnJhbWVMb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZUxvYWRUaW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3R5bGVzaGVldExvYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzaGVldExvYWRUaW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGtlZXBJZnJhbWVTcmNGbixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRJZnJhbWVOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25JZnJhbWVMb2FkKG4sIHNlcmlhbGl6ZWRJZnJhbWVOb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGlmcmFtZUxvYWRUaW1lb3V0KTtcclxuICAgIH1cclxuICAgIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmXHJcbiAgICAgICAgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gJ2xpbmsnICYmXHJcbiAgICAgICAgdHlwZW9mIHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMucmVsID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgIChzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLnJlbCA9PT0gJ3N0eWxlc2hlZXQnIHx8XHJcbiAgICAgICAgICAgIChzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLnJlbCA9PT0gJ3ByZWxvYWQnICYmXHJcbiAgICAgICAgICAgICAgICB0eXBlb2Ygc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5ocmVmID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgICAgICAgICAgZXh0cmFjdEZpbGVFeHRlbnNpb24oc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5ocmVmKSA9PT0gJ2NzcycpKSkge1xyXG4gICAgICAgIG9uY2VTdHlsZXNoZWV0TG9hZGVkKG4sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9uU3R5bGVzaGVldExvYWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRMaW5rTm9kZSA9IHNlcmlhbGl6ZU5vZGVXaXRoSWQobiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvYyxcclxuICAgICAgICAgICAgICAgICAgICBtaXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tDbGFzcyxcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIG5lZWRzTWFzayxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVGV4dENsYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RleHRGbixcclxuICAgICAgICAgICAgICAgICAgICBtYXNrSW5wdXRGbixcclxuICAgICAgICAgICAgICAgICAgICBzbGltRE9NT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVVJMT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVJbWFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcclxuICAgICAgICAgICAgICAgICAgICBvblNlcmlhbGl6ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbklmcmFtZUxvYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lTG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VyaWFsaXplZExpbmtOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZChuLCBzZXJpYWxpemVkTGlua05vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgc3R5bGVzaGVldExvYWRUaW1lb3V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzZXJpYWxpemVkTm9kZTtcclxufVxyXG5mdW5jdGlvbiBzbmFwc2hvdChuLCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IG1pcnJvciA9IG5ldyBNaXJyb3IoKSwgYmxvY2tDbGFzcyA9ICdyci1ibG9jaycsIGJsb2NrU2VsZWN0b3IgPSBudWxsLCBtYXNrVGV4dENsYXNzID0gJ3JyLW1hc2snLCBtYXNrVGV4dFNlbGVjdG9yID0gbnVsbCwgaW5saW5lU3R5bGVzaGVldCA9IHRydWUsIGlubGluZUltYWdlcyA9IGZhbHNlLCByZWNvcmRDYW52YXMgPSBmYWxzZSwgbWFza0FsbElucHV0cyA9IGZhbHNlLCBtYXNrVGV4dEZuLCBtYXNrSW5wdXRGbiwgc2xpbURPTSA9IGZhbHNlLCBkYXRhVVJMT3B0aW9ucywgcHJlc2VydmVXaGl0ZVNwYWNlLCBvblNlcmlhbGl6ZSwgb25JZnJhbWVMb2FkLCBpZnJhbWVMb2FkVGltZW91dCwgb25TdHlsZXNoZWV0TG9hZCwgc3R5bGVzaGVldExvYWRUaW1lb3V0LCBrZWVwSWZyYW1lU3JjRm4gPSAoKSA9PiBmYWxzZSwgfSA9IG9wdGlvbnMgfHwge307XHJcbiAgICBjb25zdCBtYXNrSW5wdXRPcHRpb25zID0gbWFza0FsbElucHV0cyA9PT0gdHJ1ZVxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBjb2xvcjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgJ2RhdGV0aW1lLWxvY2FsJzogdHJ1ZSxcclxuICAgICAgICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgICAgICAgIG1vbnRoOiB0cnVlLFxyXG4gICAgICAgICAgICBudW1iZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHJhbmdlOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWFyY2g6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbDogdHJ1ZSxcclxuICAgICAgICAgICAgdGV4dDogdHJ1ZSxcclxuICAgICAgICAgICAgdGltZTogdHJ1ZSxcclxuICAgICAgICAgICAgdXJsOiB0cnVlLFxyXG4gICAgICAgICAgICB3ZWVrOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZXh0YXJlYTogdHJ1ZSxcclxuICAgICAgICAgICAgc2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBtYXNrQWxsSW5wdXRzID09PSBmYWxzZVxyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDogbWFza0FsbElucHV0cztcclxuICAgIGNvbnN0IHNsaW1ET01PcHRpb25zID0gc2xpbURPTSA9PT0gdHJ1ZSB8fCBzbGltRE9NID09PSAnYWxsJ1xyXG4gICAgICAgID9cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRGYXZpY29uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZFdoaXRlc3BhY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWFkTWV0YURlc2NLZXl3b3Jkczogc2xpbURPTSA9PT0gJ2FsbCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkTWV0YVNvY2lhbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRNZXRhUm9ib3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZE1ldGFIdHRwRXF1aXY6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWFkTWV0YUF1dGhvcnNoaXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWFkTWV0YVZlcmlmaWNhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDogc2xpbURPTSA9PT0gZmFsc2VcclxuICAgICAgICAgICAgPyB7fVxyXG4gICAgICAgICAgICA6IHNsaW1ET007XHJcbiAgICByZXR1cm4gc2VyaWFsaXplTm9kZVdpdGhJZChuLCB7XHJcbiAgICAgICAgZG9jOiBuLFxyXG4gICAgICAgIG1pcnJvcixcclxuICAgICAgICBibG9ja0NsYXNzLFxyXG4gICAgICAgIGJsb2NrU2VsZWN0b3IsXHJcbiAgICAgICAgbWFza1RleHRDbGFzcyxcclxuICAgICAgICBtYXNrVGV4dFNlbGVjdG9yLFxyXG4gICAgICAgIHNraXBDaGlsZDogZmFsc2UsXHJcbiAgICAgICAgaW5saW5lU3R5bGVzaGVldCxcclxuICAgICAgICBtYXNrSW5wdXRPcHRpb25zLFxyXG4gICAgICAgIG1hc2tUZXh0Rm4sXHJcbiAgICAgICAgbWFza0lucHV0Rm4sXHJcbiAgICAgICAgc2xpbURPTU9wdGlvbnMsXHJcbiAgICAgICAgZGF0YVVSTE9wdGlvbnMsXHJcbiAgICAgICAgaW5saW5lSW1hZ2VzLFxyXG4gICAgICAgIHJlY29yZENhbnZhcyxcclxuICAgICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UsXHJcbiAgICAgICAgb25TZXJpYWxpemUsXHJcbiAgICAgICAgb25JZnJhbWVMb2FkLFxyXG4gICAgICAgIGlmcmFtZUxvYWRUaW1lb3V0LFxyXG4gICAgICAgIG9uU3R5bGVzaGVldExvYWQsXHJcbiAgICAgICAgc3R5bGVzaGVldExvYWRUaW1lb3V0LFxyXG4gICAgICAgIGtlZXBJZnJhbWVTcmNGbixcclxuICAgICAgICBuZXdseUFkZGVkRWxlbWVudDogZmFsc2UsXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiB2aXNpdFNuYXBzaG90KG5vZGUsIG9uVmlzaXQpIHtcclxuICAgIGZ1bmN0aW9uIHdhbGsoY3VycmVudCkge1xyXG4gICAgICAgIG9uVmlzaXQoY3VycmVudCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgfHxcclxuICAgICAgICAgICAgY3VycmVudC50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQuY2hpbGROb2Rlcy5mb3JFYWNoKHdhbGspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdhbGsobm9kZSk7XHJcbn1cclxuZnVuY3Rpb24gY2xlYW51cFNuYXBzaG90KCkge1xyXG4gICAgX2lkID0gMTtcclxufVxuXG5jb25zdCBjb21tZW50cmUgPSAvXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZztcclxuZnVuY3Rpb24gcGFyc2UoY3NzLCBvcHRpb25zID0ge30pIHtcclxuICAgIGxldCBsaW5lbm8gPSAxO1xyXG4gICAgbGV0IGNvbHVtbiA9IDE7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihzdHIpIHtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IHN0ci5tYXRjaCgvXFxuL2cpO1xyXG4gICAgICAgIGlmIChsaW5lcykge1xyXG4gICAgICAgICAgICBsaW5lbm8gKz0gbGluZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpID0gc3RyLmxhc3RJbmRleE9mKCdcXG4nKTtcclxuICAgICAgICBjb2x1bW4gPSBpID09PSAtMSA/IGNvbHVtbiArIHN0ci5sZW5ndGggOiBzdHIubGVuZ3RoIC0gaTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0geyBsaW5lOiBsaW5lbm8sIGNvbHVtbiB9O1xyXG4gICAgICAgIHJldHVybiAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHN0YXJ0KTtcclxuICAgICAgICAgICAgd2hpdGVzcGFjZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2xhc3MgUG9zaXRpb24ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICAgICAgdGhpcy5lbmQgPSB7IGxpbmU6IGxpbmVubywgY29sdW1uIH07XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gb3B0aW9ucy5zb3VyY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUG9zaXRpb24ucHJvdG90eXBlLmNvbnRlbnQgPSBjc3M7XHJcbiAgICBjb25zdCBlcnJvcnNMaXN0ID0gW107XHJcbiAgICBmdW5jdGlvbiBlcnJvcihtc2cpIHtcclxuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYCR7b3B0aW9ucy5zb3VyY2UgfHwgJyd9OiR7bGluZW5vfToke2NvbHVtbn06ICR7bXNnfWApO1xyXG4gICAgICAgIGVyci5yZWFzb24gPSBtc2c7XHJcbiAgICAgICAgZXJyLmZpbGVuYW1lID0gb3B0aW9ucy5zb3VyY2U7XHJcbiAgICAgICAgZXJyLmxpbmUgPSBsaW5lbm87XHJcbiAgICAgICAgZXJyLmNvbHVtbiA9IGNvbHVtbjtcclxuICAgICAgICBlcnIuc291cmNlID0gY3NzO1xyXG4gICAgICAgIGlmIChvcHRpb25zLnNpbGVudCkge1xyXG4gICAgICAgICAgICBlcnJvcnNMaXN0LnB1c2goZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdHlsZXNoZWV0KCkge1xyXG4gICAgICAgIGNvbnN0IHJ1bGVzTGlzdCA9IHJ1bGVzKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogJ3N0eWxlc2hlZXQnLFxyXG4gICAgICAgICAgICBzdHlsZXNoZWV0OiB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IG9wdGlvbnMuc291cmNlLFxyXG4gICAgICAgICAgICAgICAgcnVsZXM6IHJ1bGVzTGlzdCxcclxuICAgICAgICAgICAgICAgIHBhcnNpbmdFcnJvcnM6IGVycm9yc0xpc3QsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9wZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoKC9ee1xccyovKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgICAgIHJldHVybiBtYXRjaCgvXn0vKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJ1bGVzKCkge1xyXG4gICAgICAgIGxldCBub2RlO1xyXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gW107XHJcbiAgICAgICAgd2hpdGVzcGFjZSgpO1xyXG4gICAgICAgIGNvbW1lbnRzKHJ1bGVzKTtcclxuICAgICAgICB3aGlsZSAoY3NzLmxlbmd0aCAmJiBjc3MuY2hhckF0KDApICE9PSAnfScgJiYgKG5vZGUgPSBhdHJ1bGUoKSB8fCBydWxlKCkpKSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBydWxlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudHMocnVsZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBydWxlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlKSB7XHJcbiAgICAgICAgY29uc3QgbSA9IHJlLmV4ZWMoY3NzKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHIgPSBtWzBdO1xyXG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKHN0cik7XHJcbiAgICAgICAgY3NzID0gY3NzLnNsaWNlKHN0ci5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd2hpdGVzcGFjZSgpIHtcclxuICAgICAgICBtYXRjaCgvXlxccyovKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbW1lbnRzKHJ1bGVzID0gW10pIHtcclxuICAgICAgICBsZXQgYztcclxuICAgICAgICB3aGlsZSAoKGMgPSBjb21tZW50KCkpKSB7XHJcbiAgICAgICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICAgICAgICBydWxlcy5wdXNoKGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGMgPSBjb21tZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBydWxlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBpZiAoJy8nICE9PSBjc3MuY2hhckF0KDApIHx8ICcqJyAhPT0gY3NzLmNoYXJBdCgxKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpID0gMjtcclxuICAgICAgICB3aGlsZSAoJycgIT09IGNzcy5jaGFyQXQoaSkgJiZcclxuICAgICAgICAgICAgKCcqJyAhPT0gY3NzLmNoYXJBdChpKSB8fCAnLycgIT09IGNzcy5jaGFyQXQoaSArIDEpKSkge1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkgKz0gMjtcclxuICAgICAgICBpZiAoJycgPT09IGNzcy5jaGFyQXQoaSAtIDEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignRW5kIG9mIGNvbW1lbnQgbWlzc2luZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHIgPSBjc3Muc2xpY2UoMiwgaSAtIDIpO1xyXG4gICAgICAgIGNvbHVtbiArPSAyO1xyXG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKHN0cik7XHJcbiAgICAgICAgY3NzID0gY3NzLnNsaWNlKGkpO1xyXG4gICAgICAgIGNvbHVtbiArPSAyO1xyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnY29tbWVudCcsXHJcbiAgICAgICAgICAgIGNvbW1lbnQ6IHN0cixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNlbGVjdG9yKCkge1xyXG4gICAgICAgIHdoaXRlc3BhY2UoKTtcclxuICAgICAgICB3aGlsZSAoY3NzWzBdID09ICd9Jykge1xyXG4gICAgICAgICAgICBlcnJvcignZXh0cmEgY2xvc2luZyBicmFja2V0Jyk7XHJcbiAgICAgICAgICAgIGNzcyA9IGNzcy5zbGljZSgxKTtcclxuICAgICAgICAgICAgd2hpdGVzcGFjZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtID0gbWF0Y2goL14oKCg/PCFcXFxcKVwiKD86XFxcXFwifFteXCJdKSpcInwoPzwhXFxcXCknKD86XFxcXCd8W14nXSkqJ3xbXntdKSspLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2xlYW5lZElucHV0ID0gbVswXVxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCooW14qXXxbXFxyXFxuXXwoXFwqKyhbXiovXXxbXFxyXFxuXSkpKSpcXCpcXC8rL2csICcnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXCIoPzpcXFxcXCJ8W15cIl0pKlwifCcoPzpcXFxcJ3xbXiddKSonL2csIChtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtLnJlcGxhY2UoLywvZywgJ1xcdTIwMEMnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY3VzdG9tU3BsaXQoY2xlYW5lZElucHV0KS5tYXAoKHMpID0+IHMucmVwbGFjZSgvXFx1MjAwQy9nLCAnLCcpLnRyaW0oKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjdXN0b21TcGxpdChpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VnbWVudCA9ICcnO1xyXG4gICAgICAgIGxldCBkZXB0aFBhcmVudGhlc2VzID0gMDtcclxuICAgICAgICBsZXQgZGVwdGhCcmFja2V0cyA9IDA7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTdHJpbmdDaGFyID0gbnVsbDtcclxuICAgICAgICBmb3IgKGNvbnN0IGNoYXIgb2YgaW5wdXQpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFzU3RyaW5nRXNjYXBlID0gY3VycmVudFNlZ21lbnQuZW5kc1dpdGgoJ1xcXFwnKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmdDaGFyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0cmluZ0NoYXIgPT09IGNoYXIgJiYgIWhhc1N0cmluZ0VzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmdDaGFyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSAnKCcpIHtcclxuICAgICAgICAgICAgICAgIGRlcHRoUGFyZW50aGVzZXMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSAnKScpIHtcclxuICAgICAgICAgICAgICAgIGRlcHRoUGFyZW50aGVzZXMtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSAnWycpIHtcclxuICAgICAgICAgICAgICAgIGRlcHRoQnJhY2tldHMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSAnXScpIHtcclxuICAgICAgICAgICAgICAgIGRlcHRoQnJhY2tldHMtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgnXFwnXCInLmluY2x1ZGVzKGNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nQ2hhciA9IGNoYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcsJyAmJiBkZXB0aFBhcmVudGhlc2VzID09PSAwICYmIGRlcHRoQnJhY2tldHMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRTZWdtZW50KTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTZWdtZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2VnbWVudCArPSBjaGFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50U2VnbWVudCkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50U2VnbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWNsYXJhdGlvbigpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHByb3BNYXRjaCA9IG1hdGNoKC9eKFxcKj9bLSNcXC9cXCpcXFxcXFx3XSsoXFxbWzAtOWEtel8tXStcXF0pPylcXHMqLyk7XHJcbiAgICAgICAgaWYgKCFwcm9wTWF0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9wID0gdHJpbShwcm9wTWF0Y2hbMF0pO1xyXG4gICAgICAgIGlmICghbWF0Y2goL146XFxzKi8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgcHJvcGVydHkgbWlzc2luZyAnOidgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsID0gbWF0Y2goL14oKD86Jyg/OlxcXFwnfC4pKj8nfFwiKD86XFxcXFwifC4pKj9cInxcXChbXlxcKV0qP1xcKXxbXn07XSkrKS8pO1xyXG4gICAgICAgIGNvbnN0IHJldCA9IHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdkZWNsYXJhdGlvbicsXHJcbiAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wLnJlcGxhY2UoY29tbWVudHJlLCAnJyksXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWwgPyB0cmltKHZhbFswXSkucmVwbGFjZShjb21tZW50cmUsICcnKSA6ICcnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1hdGNoKC9eWztcXHNdKi8pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWNsYXJhdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgZGVjbHMgPSBbXTtcclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYG1pc3NpbmcgJ3snYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbW1lbnRzKGRlY2xzKTtcclxuICAgICAgICBsZXQgZGVjbDtcclxuICAgICAgICB3aGlsZSAoKGRlY2wgPSBkZWNsYXJhdGlvbigpKSkge1xyXG4gICAgICAgICAgICBpZiAoZGVjbCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGRlY2xzLnB1c2goZGVjbCk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cyhkZWNscyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVjbCA9IGRlY2xhcmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYG1pc3NpbmcgJ30nYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWNscztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGtleWZyYW1lKCkge1xyXG4gICAgICAgIGxldCBtO1xyXG4gICAgICAgIGNvbnN0IHZhbHMgPSBbXTtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIHdoaWxlICgobSA9IG1hdGNoKC9eKChcXGQrXFwuXFxkK3xcXC5cXGQrfFxcZCspJT98W2Etel0rKVxccyovKSkpIHtcclxuICAgICAgICAgICAgdmFscy5wdXNoKG1bMV0pO1xyXG4gICAgICAgICAgICBtYXRjaCgvXixcXHMqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdmFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2tleWZyYW1lJyxcclxuICAgICAgICAgICAgdmFsdWVzOiB2YWxzLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucygpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRrZXlmcmFtZXMoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBsZXQgbSA9IG1hdGNoKC9eQChbLVxcd10rKT9rZXlmcmFtZXNcXHMqLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmVuZG9yID0gbVsxXTtcclxuICAgICAgICBtID0gbWF0Y2goL14oWy1cXHddKylcXHMqLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignQGtleWZyYW1lcyBtaXNzaW5nIG5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG1bMV07XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAa2V5ZnJhbWVzIG1pc3NpbmcgJ3snYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmcmFtZTtcclxuICAgICAgICBsZXQgZnJhbWVzID0gY29tbWVudHMoKTtcclxuICAgICAgICB3aGlsZSAoKGZyYW1lID0ga2V5ZnJhbWUoKSkpIHtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xyXG4gICAgICAgICAgICBmcmFtZXMgPSBmcmFtZXMuY29uY2F0KGNvbW1lbnRzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAa2V5ZnJhbWVzIG1pc3NpbmcgJ30nYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAna2V5ZnJhbWVzJyxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdmVuZG9yLFxyXG4gICAgICAgICAgICBrZXlmcmFtZXM6IGZyYW1lcyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0c3VwcG9ydHMoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15Ac3VwcG9ydHMgKihbXntdKykvKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdXBwb3J0cyA9IHRyaW0obVsxXSk7XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAc3VwcG9ydHMgbWlzc2luZyAneydgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBjb21tZW50cygpLmNvbmNhdChydWxlcygpKTtcclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAc3VwcG9ydHMgbWlzc2luZyAnfSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdXBwb3J0cycsXHJcbiAgICAgICAgICAgIHN1cHBvcnRzLFxyXG4gICAgICAgICAgICBydWxlczogc3R5bGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdGhvc3QoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AaG9zdFxccyovKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBob3N0IG1pc3NpbmcgJ3snYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gY29tbWVudHMoKS5jb25jYXQocnVsZXMoKSk7XHJcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQGhvc3QgbWlzc2luZyAnfSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdob3N0JyxcclxuICAgICAgICAgICAgcnVsZXM6IHN0eWxlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRtZWRpYSgpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBtZWRpYSAqKFtee10rKS8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1lZGlhID0gdHJpbShtWzFdKTtcclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBtZWRpYSBtaXNzaW5nICd7J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHlsZSA9IGNvbW1lbnRzKCkuY29uY2F0KHJ1bGVzKCkpO1xyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBtZWRpYSBtaXNzaW5nICd9J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ21lZGlhJyxcclxuICAgICAgICAgICAgbWVkaWEsXHJcbiAgICAgICAgICAgIHJ1bGVzOiBzdHlsZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0Y3VzdG9tbWVkaWEoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AY3VzdG9tLW1lZGlhXFxzKygtLVteXFxzXSspXFxzKihbXns7XSspOy8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnY3VzdG9tLW1lZGlhJyxcclxuICAgICAgICAgICAgbmFtZTogdHJpbShtWzFdKSxcclxuICAgICAgICAgICAgbWVkaWE6IHRyaW0obVsyXSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdHBhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AcGFnZSAqLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VsID0gc2VsZWN0b3IoKSB8fCBbXTtcclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBwYWdlIG1pc3NpbmcgJ3snYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkZWNscyA9IGNvbW1lbnRzKCk7XHJcbiAgICAgICAgbGV0IGRlY2w7XHJcbiAgICAgICAgd2hpbGUgKChkZWNsID0gZGVjbGFyYXRpb24oKSkpIHtcclxuICAgICAgICAgICAgZGVjbHMucHVzaChkZWNsKTtcclxuICAgICAgICAgICAgZGVjbHMgPSBkZWNscy5jb25jYXQoY29tbWVudHMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBwYWdlIG1pc3NpbmcgJ30nYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAncGFnZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yczogc2VsLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRkb2N1bWVudCgpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkAoWy1cXHddKyk/ZG9jdW1lbnQgKihbXntdKykvKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2ZW5kb3IgPSB0cmltKG1bMV0pO1xyXG4gICAgICAgIGNvbnN0IGRvYyA9IHRyaW0obVsyXSk7XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAZG9jdW1lbnQgbWlzc2luZyAneydgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBjb21tZW50cygpLmNvbmNhdChydWxlcygpKTtcclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAZG9jdW1lbnQgbWlzc2luZyAnfSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdkb2N1bWVudCcsXHJcbiAgICAgICAgICAgIGRvY3VtZW50OiBkb2MsXHJcbiAgICAgICAgICAgIHZlbmRvcixcclxuICAgICAgICAgICAgcnVsZXM6IHN0eWxlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRmb250ZmFjZSgpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBmb250LWZhY2VcXHMqLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAZm9udC1mYWNlIG1pc3NpbmcgJ3snYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkZWNscyA9IGNvbW1lbnRzKCk7XHJcbiAgICAgICAgbGV0IGRlY2w7XHJcbiAgICAgICAgd2hpbGUgKChkZWNsID0gZGVjbGFyYXRpb24oKSkpIHtcclxuICAgICAgICAgICAgZGVjbHMucHVzaChkZWNsKTtcclxuICAgICAgICAgICAgZGVjbHMgPSBkZWNscy5jb25jYXQoY29tbWVudHMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBmb250LWZhY2UgbWlzc2luZyAnfSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdmb250LWZhY2UnLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXRpbXBvcnQgPSBfY29tcGlsZUF0cnVsZSgnaW1wb3J0Jyk7XHJcbiAgICBjb25zdCBhdGNoYXJzZXQgPSBfY29tcGlsZUF0cnVsZSgnY2hhcnNldCcpO1xyXG4gICAgY29uc3QgYXRuYW1lc3BhY2UgPSBfY29tcGlsZUF0cnVsZSgnbmFtZXNwYWNlJyk7XHJcbiAgICBmdW5jdGlvbiBfY29tcGlsZUF0cnVsZShuYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCdeQCcgK1xyXG4gICAgICAgICAgICBuYW1lICtcclxuICAgICAgICAgICAgJ1xcXFxzKigoPzonICtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJyg/PCFcXFxcXFxcXClcIig/OlxcXFxcXFxcXCJ8W15cIl0pKlwiJyxcclxuICAgICAgICAgICAgICAgIFwiKD88IVxcXFxcXFxcKScoPzpcXFxcXFxcXCd8W14nXSkqJ1wiLFxyXG4gICAgICAgICAgICAgICAgJ1teO10nLFxyXG4gICAgICAgICAgICBdLmpvaW4oJ3wnKSArXHJcbiAgICAgICAgICAgICcpKyk7Jyk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbSA9IG1hdGNoKHJlKTtcclxuICAgICAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmV0ID0geyB0eXBlOiBuYW1lIH07XHJcbiAgICAgICAgICAgIHJldFtuYW1lXSA9IG1bMV0udHJpbSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zKHJldCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0cnVsZSgpIHtcclxuICAgICAgICBpZiAoY3NzWzBdICE9PSAnQCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGF0a2V5ZnJhbWVzKCkgfHxcclxuICAgICAgICAgICAgYXRtZWRpYSgpIHx8XHJcbiAgICAgICAgICAgIGF0Y3VzdG9tbWVkaWEoKSB8fFxyXG4gICAgICAgICAgICBhdHN1cHBvcnRzKCkgfHxcclxuICAgICAgICAgICAgYXRpbXBvcnQoKSB8fFxyXG4gICAgICAgICAgICBhdGNoYXJzZXQoKSB8fFxyXG4gICAgICAgICAgICBhdG5hbWVzcGFjZSgpIHx8XHJcbiAgICAgICAgICAgIGF0ZG9jdW1lbnQoKSB8fFxyXG4gICAgICAgICAgICBhdHBhZ2UoKSB8fFxyXG4gICAgICAgICAgICBhdGhvc3QoKSB8fFxyXG4gICAgICAgICAgICBhdGZvbnRmYWNlKCkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcnVsZSgpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHNlbCA9IHNlbGVjdG9yKCk7XHJcbiAgICAgICAgaWYgKCFzZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdzZWxlY3RvciBtaXNzaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbW1lbnRzKCk7XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdydWxlJyxcclxuICAgICAgICAgICAgc2VsZWN0b3JzOiBzZWwsXHJcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWRkUGFyZW50KHN0eWxlc2hlZXQoKSk7XHJcbn1cclxuZnVuY3Rpb24gdHJpbShzdHIpIHtcclxuICAgIHJldHVybiBzdHIgPyBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpIDogJyc7XHJcbn1cclxuZnVuY3Rpb24gYWRkUGFyZW50KG9iaiwgcGFyZW50KSB7XHJcbiAgICBjb25zdCBpc05vZGUgPSBvYmogJiYgdHlwZW9mIG9iai50eXBlID09PSAnc3RyaW5nJztcclxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gaXNOb2RlID8gb2JqIDogcGFyZW50O1xyXG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKG9iaikpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG9ialtrXTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkUGFyZW50KHYsIGNoaWxkUGFyZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgYWRkUGFyZW50KHZhbHVlLCBjaGlsZFBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzTm9kZSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdwYXJlbnQnLCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogcGFyZW50IHx8IG51bGwsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XG5cbmNvbnN0IHRhZ01hcCA9IHtcclxuICAgIHNjcmlwdDogJ25vc2NyaXB0JyxcclxuICAgIGFsdGdseXBoOiAnYWx0R2x5cGgnLFxyXG4gICAgYWx0Z2x5cGhkZWY6ICdhbHRHbHlwaERlZicsXHJcbiAgICBhbHRnbHlwaGl0ZW06ICdhbHRHbHlwaEl0ZW0nLFxyXG4gICAgYW5pbWF0ZWNvbG9yOiAnYW5pbWF0ZUNvbG9yJyxcclxuICAgIGFuaW1hdGVtb3Rpb246ICdhbmltYXRlTW90aW9uJyxcclxuICAgIGFuaW1hdGV0cmFuc2Zvcm06ICdhbmltYXRlVHJhbnNmb3JtJyxcclxuICAgIGNsaXBwYXRoOiAnY2xpcFBhdGgnLFxyXG4gICAgZmVibGVuZDogJ2ZlQmxlbmQnLFxyXG4gICAgZmVjb2xvcm1hdHJpeDogJ2ZlQ29sb3JNYXRyaXgnLFxyXG4gICAgZmVjb21wb25lbnR0cmFuc2ZlcjogJ2ZlQ29tcG9uZW50VHJhbnNmZXInLFxyXG4gICAgZmVjb21wb3NpdGU6ICdmZUNvbXBvc2l0ZScsXHJcbiAgICBmZWNvbnZvbHZlbWF0cml4OiAnZmVDb252b2x2ZU1hdHJpeCcsXHJcbiAgICBmZWRpZmZ1c2VsaWdodGluZzogJ2ZlRGlmZnVzZUxpZ2h0aW5nJyxcclxuICAgIGZlZGlzcGxhY2VtZW50bWFwOiAnZmVEaXNwbGFjZW1lbnRNYXAnLFxyXG4gICAgZmVkaXN0YW50bGlnaHQ6ICdmZURpc3RhbnRMaWdodCcsXHJcbiAgICBmZWRyb3BzaGFkb3c6ICdmZURyb3BTaGFkb3cnLFxyXG4gICAgZmVmbG9vZDogJ2ZlRmxvb2QnLFxyXG4gICAgZmVmdW5jYTogJ2ZlRnVuY0EnLFxyXG4gICAgZmVmdW5jYjogJ2ZlRnVuY0InLFxyXG4gICAgZmVmdW5jZzogJ2ZlRnVuY0cnLFxyXG4gICAgZmVmdW5jcjogJ2ZlRnVuY1InLFxyXG4gICAgZmVnYXVzc2lhbmJsdXI6ICdmZUdhdXNzaWFuQmx1cicsXHJcbiAgICBmZWltYWdlOiAnZmVJbWFnZScsXHJcbiAgICBmZW1lcmdlOiAnZmVNZXJnZScsXHJcbiAgICBmZW1lcmdlbm9kZTogJ2ZlTWVyZ2VOb2RlJyxcclxuICAgIGZlbW9ycGhvbG9neTogJ2ZlTW9ycGhvbG9neScsXHJcbiAgICBmZW9mZnNldDogJ2ZlT2Zmc2V0JyxcclxuICAgIGZlcG9pbnRsaWdodDogJ2ZlUG9pbnRMaWdodCcsXHJcbiAgICBmZXNwZWN1bGFybGlnaHRpbmc6ICdmZVNwZWN1bGFyTGlnaHRpbmcnLFxyXG4gICAgZmVzcG90bGlnaHQ6ICdmZVNwb3RMaWdodCcsXHJcbiAgICBmZXRpbGU6ICdmZVRpbGUnLFxyXG4gICAgZmV0dXJidWxlbmNlOiAnZmVUdXJidWxlbmNlJyxcclxuICAgIGZvcmVpZ25vYmplY3Q6ICdmb3JlaWduT2JqZWN0JyxcclxuICAgIGdseXBocmVmOiAnZ2x5cGhSZWYnLFxyXG4gICAgbGluZWFyZ3JhZGllbnQ6ICdsaW5lYXJHcmFkaWVudCcsXHJcbiAgICByYWRpYWxncmFkaWVudDogJ3JhZGlhbEdyYWRpZW50JyxcclxufTtcclxuZnVuY3Rpb24gZ2V0VGFnTmFtZShuKSB7XHJcbiAgICBsZXQgdGFnTmFtZSA9IHRhZ01hcFtuLnRhZ05hbWVdID8gdGFnTWFwW24udGFnTmFtZV0gOiBuLnRhZ05hbWU7XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2xpbmsnICYmIG4uYXR0cmlidXRlcy5fY3NzVGV4dCkge1xyXG4gICAgICAgIHRhZ05hbWUgPSAnc3R5bGUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhZ05hbWU7XHJcbn1cclxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xyXG59XHJcbmNvbnN0IE1FRElBX1NFTEVDVE9SID0gLyhtYXh8bWluKS1kZXZpY2UtKHdpZHRofGhlaWdodCkvO1xyXG5jb25zdCBNRURJQV9TRUxFQ1RPUl9HTE9CQUwgPSBuZXcgUmVnRXhwKE1FRElBX1NFTEVDVE9SLnNvdXJjZSwgJ2cnKTtcclxuY29uc3QgSE9WRVJfU0VMRUNUT1IgPSAvKFteXFxcXF0pOmhvdmVyLztcclxuY29uc3QgSE9WRVJfU0VMRUNUT1JfR0xPQkFMID0gbmV3IFJlZ0V4cChIT1ZFUl9TRUxFQ1RPUi5zb3VyY2UsICdnJyk7XHJcbmZ1bmN0aW9uIGFkYXB0Q3NzRm9yUmVwbGF5KGNzc1RleHQsIGNhY2hlKSB7XHJcbiAgICBjb25zdCBjYWNoZWRTdHlsZSA9IGNhY2hlID09PSBudWxsIHx8IGNhY2hlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYWNoZS5zdHlsZXNXaXRoSG92ZXJDbGFzcy5nZXQoY3NzVGV4dCk7XHJcbiAgICBpZiAoY2FjaGVkU3R5bGUpXHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZFN0eWxlO1xyXG4gICAgY29uc3QgYXN0ID0gcGFyc2UoY3NzVGV4dCwge1xyXG4gICAgICAgIHNpbGVudDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFhc3Quc3R5bGVzaGVldCkge1xyXG4gICAgICAgIHJldHVybiBjc3NUZXh0O1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VsZWN0b3JzID0gW107XHJcbiAgICBjb25zdCBtZWRpYXMgPSBbXTtcclxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdG9ycyhydWxlKSB7XHJcbiAgICAgICAgaWYgKCdzZWxlY3RvcnMnIGluIHJ1bGUgJiYgcnVsZS5zZWxlY3RvcnMpIHtcclxuICAgICAgICAgICAgcnVsZS5zZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChIT1ZFUl9TRUxFQ1RPUi50ZXN0KHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgnbWVkaWEnIGluIHJ1bGUgJiYgcnVsZS5tZWRpYSAmJiBNRURJQV9TRUxFQ1RPUi50ZXN0KHJ1bGUubWVkaWEpKSB7XHJcbiAgICAgICAgICAgIG1lZGlhcy5wdXNoKHJ1bGUubWVkaWEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJ3J1bGVzJyBpbiBydWxlICYmIHJ1bGUucnVsZXMpIHtcclxuICAgICAgICAgICAgcnVsZS5ydWxlcy5mb3JFYWNoKGdldFNlbGVjdG9ycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0U2VsZWN0b3JzKGFzdC5zdHlsZXNoZWV0KTtcclxuICAgIGxldCByZXN1bHQgPSBjc3NUZXh0O1xyXG4gICAgaWYgKHNlbGVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JNYXRjaGVyID0gbmV3IFJlZ0V4cChzZWxlY3RvcnNcclxuICAgICAgICAgICAgLmZpbHRlcigoc2VsZWN0b3IsIGluZGV4KSA9PiBzZWxlY3RvcnMuaW5kZXhPZihzZWxlY3RvcikgPT09IGluZGV4KVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aClcclxuICAgICAgICAgICAgLm1hcCgoc2VsZWN0b3IpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGVzY2FwZVJlZ0V4cChzZWxlY3Rvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oJ3wnKSwgJ2cnKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShzZWxlY3Rvck1hdGNoZXIsIChzZWxlY3RvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoSE9WRVJfU0VMRUNUT1JfR0xPQkFMLCAnJDEuXFxcXDpob3ZlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7c2VsZWN0b3J9LCAke25ld1NlbGVjdG9yfWA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAobWVkaWFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBtZWRpYU1hdGNoZXIgPSBuZXcgUmVnRXhwKG1lZGlhc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChtZWRpYSwgaW5kZXgpID0+IG1lZGlhcy5pbmRleE9mKG1lZGlhKSA9PT0gaW5kZXgpXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxyXG4gICAgICAgICAgICAubWFwKChtZWRpYSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZXNjYXBlUmVnRXhwKG1lZGlhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbignfCcpLCAnZycpO1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKG1lZGlhTWF0Y2hlciwgKG1lZGlhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZWRpYS5yZXBsYWNlKE1FRElBX1NFTEVDVE9SX0dMT0JBTCwgJyQxLSQyJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYWNoZSA9PT0gbnVsbCB8fCBjYWNoZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FjaGUuc3R5bGVzV2l0aEhvdmVyQ2xhc3Muc2V0KGNzc1RleHQsIHJlc3VsdCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xyXG4gICAgY29uc3Qgc3R5bGVzV2l0aEhvdmVyQ2xhc3MgPSBuZXcgTWFwKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0eWxlc1dpdGhIb3ZlckNsYXNzLFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBidWlsZE5vZGUobiwgb3B0aW9ucykge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgY29uc3QgeyBkb2MsIGhhY2tDc3MsIGNhY2hlIH0gPSBvcHRpb25zO1xyXG4gICAgc3dpdGNoIChuLnR5cGUpIHtcclxuICAgICAgICBjYXNlIE5vZGVUeXBlLkRvY3VtZW50OlxyXG4gICAgICAgICAgICByZXR1cm4gZG9jLmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KG51bGwsICcnLCBudWxsKTtcclxuICAgICAgICBjYXNlIE5vZGVUeXBlLkRvY3VtZW50VHlwZTpcclxuICAgICAgICAgICAgcmV0dXJuIGRvYy5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudFR5cGUobi5uYW1lIHx8ICdodG1sJywgbi5wdWJsaWNJZCwgbi5zeXN0ZW1JZCk7XHJcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5FbGVtZW50OiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSBnZXRUYWdOYW1lKG4pO1xyXG4gICAgICAgICAgICBsZXQgbm9kZTtcclxuICAgICAgICAgICAgaWYgKG4uaXNTVkcpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBkb2MuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHRhZ05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4uaXNDdXN0b20gJiZcclxuICAgICAgICAgICAgICAgICAgICAoKF9hID0gZG9jLmRlZmF1bHRWaWV3KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3VzdG9tRWxlbWVudHMpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWRvYy5kZWZhdWx0Vmlldy5jdXN0b21FbGVtZW50cy5nZXQobi50YWdOYW1lKSlcclxuICAgICAgICAgICAgICAgICAgICBkb2MuZGVmYXVsdFZpZXcuY3VzdG9tRWxlbWVudHMuZGVmaW5lKG4udGFnTmFtZSwgY2xhc3MgZXh0ZW5kcyBkb2MuZGVmYXVsdFZpZXcuSFRNTEVsZW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWNpYWxBdHRyaWJ1dGVzID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBuLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4uYXR0cmlidXRlcywgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG4uYXR0cmlidXRlc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmICh0YWdOYW1lID09PSAnb3B0aW9uJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPT09ICdzZWxlY3RlZCcgJiZcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKCdycl8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWxBdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1RleHRhcmVhID0gdGFnTmFtZSA9PT0gJ3RleHRhcmVhJyAmJiBuYW1lID09PSAndmFsdWUnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNSZW1vdGVPckR5bmFtaWNDc3MgPSB0YWdOYW1lID09PSAnc3R5bGUnICYmIG5hbWUgPT09ICdfY3NzVGV4dCc7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSZW1vdGVPckR5bmFtaWNDc3MgJiYgaGFja0NzcyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhZGFwdENzc0ZvclJlcGxheSh2YWx1ZSwgY2FjaGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKChpc1RleHRhcmVhIHx8IGlzUmVtb3RlT3JEeW5hbWljQ3NzKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICBuLmNoaWxkTm9kZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNTVkcgJiYgbmFtZSA9PT0gJ3hsaW5rOmhyZWYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBuYW1lLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ29ubG9hZCcgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9PT0gJ29uY2xpY2snIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuc3Vic3RyaW5nKDAsIDcpID09PSAnb25tb3VzZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ18nICsgbmFtZSwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhZ05hbWUgPT09ICdtZXRhJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXNbJ2h0dHAtZXF1aXYnXSA9PT0gJ0NvbnRlbnQtU2VjdXJpdHktUG9saWN5JyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID09PSAnY29udGVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NzcC1jb250ZW50JywgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWdOYW1lID09PSAnbGluaycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG4uYXR0cmlidXRlcy5yZWwgPT09ICdwcmVsb2FkJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzLnJlbCA9PT0gJ21vZHVsZXByZWxvYWQnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMuYXMgPT09ICdzY3JpcHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhZ05hbWUgPT09ICdsaW5rJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMucmVsID09PSAncHJlZmV0Y2gnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBuLmF0dHJpYnV0ZXMuaHJlZiA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzLmhyZWYuZW5kc1dpdGgoJy5qcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhZ05hbWUgPT09ICdpbWcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5zcmNzZXQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzLnJyX2RhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3Jyd2ViLW9yaWdpbmFsLXNyY3NldCcsIG4uYXR0cmlidXRlcy5zcmNzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHNwZWNpYWxBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNwZWNpYWxBdHRyaWJ1dGVzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdjYW52YXMnICYmIG5hbWUgPT09ICdycl9kYXRhVVJMJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBub2RlLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLlJSTm9kZVR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucnJfZGF0YVVSTCA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWdOYW1lID09PSAnaW1nJyAmJiBuYW1lID09PSAncnJfZGF0YVVSTCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWFnZS5jdXJyZW50U3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdycndlYi1vcmlnaW5hbC1zcmMnLCBuLmF0dHJpYnV0ZXMuc3JjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JyX3dpZHRoJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ3JyX2hlaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAncnJfbWVkaWFDdXJyZW50VGltZScgJiZcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jdXJyZW50VGltZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ3JyX21lZGlhU3RhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwbGF5ZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGF5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUud2FybignbWVkaWEgcGxheWJhY2sgZXJyb3InLCBlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncGF1c2VkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdycl9tZWRpYVBsYXliYWNrUmF0ZScgJiZcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdycl9tZWRpYU11dGVkJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubXV0ZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdycl9tZWRpYUxvb3AnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sb29wID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAncnJfbWVkaWFWb2x1bWUnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnZvbHVtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuLmlzU2hhZG93SG9zdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChub2RlLnNoYWRvd1Jvb3QuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNoYWRvd1Jvb3QucmVtb3ZlQ2hpbGQobm9kZS5zaGFkb3dSb290LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5UZXh0OlxyXG4gICAgICAgICAgICByZXR1cm4gZG9jLmNyZWF0ZVRleHROb2RlKG4uaXNTdHlsZSAmJiBoYWNrQ3NzXHJcbiAgICAgICAgICAgICAgICA/IGFkYXB0Q3NzRm9yUmVwbGF5KG4udGV4dENvbnRlbnQsIGNhY2hlKVxyXG4gICAgICAgICAgICAgICAgOiBuLnRleHRDb250ZW50KTtcclxuICAgICAgICBjYXNlIE5vZGVUeXBlLkNEQVRBOlxyXG4gICAgICAgICAgICByZXR1cm4gZG9jLmNyZWF0ZUNEQVRBU2VjdGlvbihuLnRleHRDb250ZW50KTtcclxuICAgICAgICBjYXNlIE5vZGVUeXBlLkNvbW1lbnQ6XHJcbiAgICAgICAgICAgIHJldHVybiBkb2MuY3JlYXRlQ29tbWVudChuLnRleHRDb250ZW50KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBidWlsZE5vZGVXaXRoU04obiwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBkb2MsIG1pcnJvciwgc2tpcENoaWxkID0gZmFsc2UsIGhhY2tDc3MgPSB0cnVlLCBhZnRlckFwcGVuZCwgY2FjaGUsIH0gPSBvcHRpb25zO1xyXG4gICAgaWYgKG1pcnJvci5oYXMobi5pZCkpIHtcclxuICAgICAgICBjb25zdCBub2RlSW5NaXJyb3IgPSBtaXJyb3IuZ2V0Tm9kZShuLmlkKTtcclxuICAgICAgICBjb25zdCBtZXRhID0gbWlycm9yLmdldE1ldGEobm9kZUluTWlycm9yKTtcclxuICAgICAgICBpZiAoaXNOb2RlTWV0YUVxdWFsKG1ldGEsIG4pKVxyXG4gICAgICAgICAgICByZXR1cm4gbWlycm9yLmdldE5vZGUobi5pZCk7XHJcbiAgICB9XHJcbiAgICBsZXQgbm9kZSA9IGJ1aWxkTm9kZShuLCB7IGRvYywgaGFja0NzcywgY2FjaGUgfSk7XHJcbiAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChuLnJvb3RJZCAmJiBtaXJyb3IuZ2V0Tm9kZShuLnJvb3RJZCkgIT09IGRvYykge1xyXG4gICAgICAgIG1pcnJvci5yZXBsYWNlKG4ucm9vdElkLCBkb2MpO1xyXG4gICAgfVxyXG4gICAgaWYgKG4udHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQpIHtcclxuICAgICAgICBkb2MuY2xvc2UoKTtcclxuICAgICAgICBkb2Mub3BlbigpO1xyXG4gICAgICAgIGlmIChuLmNvbXBhdE1vZGUgPT09ICdCYWNrQ29tcGF0JyAmJlxyXG4gICAgICAgICAgICBuLmNoaWxkTm9kZXMgJiZcclxuICAgICAgICAgICAgbi5jaGlsZE5vZGVzWzBdLnR5cGUgIT09IE5vZGVUeXBlLkRvY3VtZW50VHlwZSkge1xyXG4gICAgICAgICAgICBpZiAobi5jaGlsZE5vZGVzWzBdLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICd4bWxucycgaW4gbi5jaGlsZE5vZGVzWzBdLmF0dHJpYnV0ZXMgJiZcclxuICAgICAgICAgICAgICAgIG4uY2hpbGROb2Rlc1swXS5hdHRyaWJ1dGVzLnhtbG5zID09PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcpIHtcclxuICAgICAgICAgICAgICAgIGRvYy53cml0ZSgnPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU5cIiBcIlwiPicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jLndyaXRlKCc8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBIVE1MIDQuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJcIj4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlID0gZG9jO1xyXG4gICAgfVxyXG4gICAgbWlycm9yLmFkZChub2RlLCBuKTtcclxuICAgIGlmICgobi50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fCBuLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpICYmXHJcbiAgICAgICAgIXNraXBDaGlsZCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGROIG9mIG4uY2hpbGROb2Rlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBidWlsZE5vZGVXaXRoU04oY2hpbGROLCB7XHJcbiAgICAgICAgICAgICAgICBkb2MsXHJcbiAgICAgICAgICAgICAgICBtaXJyb3IsXHJcbiAgICAgICAgICAgICAgICBza2lwQ2hpbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGFja0NzcyxcclxuICAgICAgICAgICAgICAgIGFmdGVyQXBwZW5kLFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gcmVidWlsZCcsIGNoaWxkTik7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2hpbGROLmlzU2hhZG93ICYmIGlzRWxlbWVudChub2RlKSAmJiBub2RlLnNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG4udHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgJiZcclxuICAgICAgICAgICAgICAgIGNoaWxkTi50eXBlID09IE5vZGVUeXBlLkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gY2hpbGROb2RlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaHRtbEVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlTmFtZSA9PT0gJ0JPRFknKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEVsZW1lbnQucmVtb3ZlQ2hpbGQoYm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhZnRlckFwcGVuZCkge1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJBcHBlbmQoY2hpbGROb2RlLCBjaGlsZE4uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuZnVuY3Rpb24gdmlzaXQobWlycm9yLCBvblZpc2l0KSB7XHJcbiAgICBmdW5jdGlvbiB3YWxrKG5vZGUpIHtcclxuICAgICAgICBvblZpc2l0KG5vZGUpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBpZCBvZiBtaXJyb3IuZ2V0SWRzKCkpIHtcclxuICAgICAgICBpZiAobWlycm9yLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgd2FsayhtaXJyb3IuZ2V0Tm9kZShpZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBoYW5kbGVTY3JvbGwobm9kZSwgbWlycm9yKSB7XHJcbiAgICBjb25zdCBuID0gbWlycm9yLmdldE1ldGEobm9kZSk7XHJcbiAgICBpZiAoKG4gPT09IG51bGwgfHwgbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbi50eXBlKSAhPT0gTm9kZVR5cGUuRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsID0gbm9kZTtcclxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBuLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBpZiAoIShPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobi5hdHRyaWJ1dGVzLCBuYW1lKSAmJlxyXG4gICAgICAgICAgICBuYW1lLnN0YXJ0c1dpdGgoJ3JyXycpKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuLmF0dHJpYnV0ZXNbbmFtZV07XHJcbiAgICAgICAgaWYgKG5hbWUgPT09ICdycl9zY3JvbGxMZWZ0Jykge1xyXG4gICAgICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSAncnJfc2Nyb2xsVG9wJykge1xyXG4gICAgICAgICAgICBlbC5zY3JvbGxUb3AgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVidWlsZChuLCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IGRvYywgb25WaXNpdCwgaGFja0NzcyA9IHRydWUsIGFmdGVyQXBwZW5kLCBjYWNoZSwgbWlycm9yID0gbmV3IE1pcnJvcigpLCB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IG5vZGUgPSBidWlsZE5vZGVXaXRoU04obiwge1xyXG4gICAgICAgIGRvYyxcclxuICAgICAgICBtaXJyb3IsXHJcbiAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcclxuICAgICAgICBoYWNrQ3NzLFxyXG4gICAgICAgIGFmdGVyQXBwZW5kLFxyXG4gICAgICAgIGNhY2hlLFxyXG4gICAgfSk7XHJcbiAgICB2aXNpdChtaXJyb3IsICh2aXNpdGVkTm9kZSkgPT4ge1xyXG4gICAgICAgIGlmIChvblZpc2l0KSB7XHJcbiAgICAgICAgICAgIG9uVmlzaXQodmlzaXRlZE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVTY3JvbGwodmlzaXRlZE5vZGUsIG1pcnJvcik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBub2RlO1xyXG59XG5cbmV4cG9ydCB7IElHTk9SRURfTk9ERSwgTWlycm9yLCBOb2RlVHlwZSwgYWRhcHRDc3NGb3JSZXBsYXksIGJ1aWxkTm9kZVdpdGhTTiwgY2xhc3NNYXRjaGVzUmVnZXgsIGNsZWFudXBTbmFwc2hvdCwgY3JlYXRlQ2FjaGUsIGNyZWF0ZU1pcnJvciwgZXNjYXBlSW1wb3J0U3RhdGVtZW50LCBleHRyYWN0RmlsZUV4dGVuc2lvbiwgZml4U2FmYXJpQ29sb25zLCBnZW5JZCwgZ2V0SW5wdXRUeXBlLCBpZ25vcmVBdHRyaWJ1dGUsIGlzMkRDYW52YXNCbGFuaywgaXNDU1NJbXBvcnRSdWxlLCBpc0NTU1N0eWxlUnVsZSwgaXNFbGVtZW50LCBpc05hdGl2ZVNoYWRvd0RvbSwgaXNOb2RlTWV0YUVxdWFsLCBpc1NoYWRvd1Jvb3QsIG1hc2tJbnB1dFZhbHVlLCBuZWVkTWFza2luZ1RleHQsIHJlYnVpbGQsIHNlcmlhbGl6ZU5vZGVXaXRoSWQsIHNuYXBzaG90LCBzdHJpbmdpZnlSdWxlLCBzdHJpbmdpZnlTdHlsZXNoZWV0LCB0b0xvd2VyQ2FzZSwgdHJhbnNmb3JtQXR0cmlidXRlLCB2aXNpdFNuYXBzaG90IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgc3VwcG9ydC9lMmUuanMgaXMgcHJvY2Vzc2VkIGFuZFxuLy8gbG9hZGVkIGF1dG9tYXRpY2FsbHkgYmVmb3JlIHlvdXIgdGVzdCBmaWxlcy5cbi8vXG4vLyBUaGlzIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcHV0IGdsb2JhbCBjb25maWd1cmF0aW9uIGFuZFxuLy8gYmVoYXZpb3IgdGhhdCBtb2RpZmllcyBDeXByZXNzLlxuLy9cbi8vIFlvdSBjYW4gY2hhbmdlIHRoZSBsb2NhdGlvbiBvZiB0aGlzIGZpbGUgb3IgdHVybiBvZmZcbi8vIGF1dG9tYXRpY2FsbHkgc2VydmluZyBzdXBwb3J0IGZpbGVzIHdpdGggdGhlXG4vLyAnc3VwcG9ydEZpbGUnIGNvbmZpZ3VyYXRpb24gb3B0aW9uLlxuLy9cbi8vIFlvdSBjYW4gcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vY29uZmlndXJhdGlvblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8gSW1wb3J0IGNvbW1hbmRzLmpzIHVzaW5nIEVTMjAxNSBzeW50YXg6XG5pbXBvcnQgJy4vY29tbWFuZHMnXG4vLyBjeXByZXNzL3N1cHBvcnQvZTJlLmpzXG5pbXBvcnQgXCJAY2hyb21hdGljLWNvbS9jeXByZXNzL3N1cHBvcnRcIjtcblxuLy8gQWx0ZXJuYXRpdmVseSB5b3UgY2FuIHVzZSBDb21tb25KUyBzeW50YXg6XG4vLyByZXF1aXJlKCcuL2NvbW1hbmRzJykiXSwibmFtZXMiOlsicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=