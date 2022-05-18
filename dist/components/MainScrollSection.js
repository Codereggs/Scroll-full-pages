"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _functions = require("../utils/functions");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const MainScrollSection = _ref => {
  let {
    children
  } = _ref;
  let horizontalCount = 0;
  let verticalCount = 0;

  const arrayChildren = _react.Children.toArray(children);

  const clonedChildren = arrayChildren.map((el, i, arr) => {
    var _el$props, _el$props2, _el$props3;

    if (i > 0) {
      if (arr[i].props.direction === "horizontal") horizontalCount++;
      if (arr[i].props.direction === "vertical" || !arr[i].props.direction) verticalCount++;
    }

    const left = () => {
      if (i === 0) return "0%";
      return "".concat(horizontalCount * 100, "%");
    };

    const top = () => {
      if (i === 0) return "0%";
      return "".concat(verticalCount * 100, "%");
    };

    return /*#__PURE__*/(0, _react.cloneElement)(el, {
      key: i,
      index: i,
      direction: (el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : _el$props.direction) === "horizontal" ? "horizontal" : "vertical",
      style: {
        position: "absolute",
        top: top(),
        left: left(),
        height: "100%",
        width: "100%"
      },
      verticalCount: verticalCount,
      horizontalCount: horizontalCount,
      active: el !== null && el !== void 0 && (_el$props2 = el.props) !== null && _el$props2 !== void 0 && _el$props2.active ? el === null || el === void 0 ? void 0 : (_el$props3 = el.props) === null || _el$props3 === void 0 ? void 0 : _el$props3.active : undefined
    });
  }); //Estilos

  const mainStyles = {
    position: "relative",
    height: "100vh",
    width: "100vw",
    transition: "all 1s ease 0s",
    transform: "translate3d(0%, 0%, 0px)"
  }; //Para el movimiento

  const debouncedCallback = (0, _react.useCallback)((0, _functions.debounce)(_functions.moveInScreen, 400), []); //Sumar al html

  (0, _react.useEffect)(() => {
    document.body.style = "margin: 0; overflow: hidden;";
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: mainStyles,
    className: "sections",
    onWheel: debouncedCallback
  }, clonedChildren);
};

var _default = MainScrollSection;
exports.default = _default;