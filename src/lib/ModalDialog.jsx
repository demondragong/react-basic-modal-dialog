import { useEffect, useRef } from "react";

export default function ModalDialog({ isDialogVisible, children, closeDialog, dialogClassName, divClassName }) {
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
    >
      <div
        className={divClassName}
        onClick={preventAutoClose}
      >
        {children}
      </div>
    </dialog>
  );
}
