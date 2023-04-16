import { useEffect, useRef } from "react";

export default function ModalDialog({ isDialogVisible, children, closeDialog, dialogClassName, contentClassName }) {
  const ref = useRef(null)
  const shown = useRef(false)
  useEffect(() => {
    if (isDialogVisible) {
      if (!shown.current) {
        ref.current.showModal()
      }
      shown.current = true
    } else {
      if (shown.current) {
        ref.current.close()
      }
      shown.current = false
    }
  }, [isDialogVisible])


  const preventAutoClose = (e) => e.stopPropagation();

  return (
    <dialog
      className={dialogClassName}
      ref={dialogRef}
      onCancel={closeDialog}
      onClick={closeDialog}
    >
      <div
        className={contentClassName}
        onClick={preventAutoClose}
      >
        {children}
      </div>
    </dialog>
  );
}
