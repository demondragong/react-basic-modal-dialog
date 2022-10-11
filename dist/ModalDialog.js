"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalDialog;

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function ModalDialog(_ref) {
  let {
    isDialogVisible,
    children,
    closeDialog,
    dialogClassName,
    divClassName
  } = _ref;
  const dialogRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const dialog = dialogRef.current;

    if (isDialogVisible) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isDialogVisible]);

  const preventAutoClose = e => e.stopPropagation();

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("dialog", {
    className: dialogClassName,
    ref: dialogRef,
    onCancel: closeDialog,
    onClick: closeDialog,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: divClassName,
      onClick: preventAutoClose,
      children: children
    })
  });
}