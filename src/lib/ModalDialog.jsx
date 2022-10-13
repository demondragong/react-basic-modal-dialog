import { useEffect, useRef } from "react";

export default function ModalDialog({ isDialogVisible, children, closeDialog, dialogClassName, contentClassName, dialogStyle, contentStyle }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isDialogVisible) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isDialogVisible]);

  const preventAutoClose = (e) => e.stopPropagation();

  return (
    <dialog
      className={dialogClassName}
      ref={dialogRef}
      onCancel={closeDialog}
      onClick={closeDialog}
      style={dialogStyle}
    >
      <div
        className={contentClassName}
        onClick={preventAutoClose}
        style={contentStyle}
      >
        {children}
      </div>
    </dialog>
  );
}
