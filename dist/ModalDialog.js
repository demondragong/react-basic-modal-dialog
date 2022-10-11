"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalDialog;

var _react = require("react");

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

  return /*#__PURE__*/React.createElement("dialog", {
    className: dialogClassName,
    ref: dialogRef,
    onCancel: closeDialog,
    onClick: closeDialog
  }, /*#__PURE__*/React.createElement("div", {
    className: divClassName,
    onClick: preventAutoClose
  }, children));
}