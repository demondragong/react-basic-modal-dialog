import { useState } from "react";
import ModalDialog from "./lib/ModalDialog";

export default function App() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

  return (
    <>
      <button onClick={openDialog}>Open modal dialog</button>
      <ModalDialog
        isDialogVisible={isDialogVisible}
        closeDialog={closeDialog}
        dialogClassName="max-w-md rounded-xl p-0 backdrop:bg-black/60"
        contentClassName="flex flex-col p-6 gap-2 justify-between items-center"
      >
        <h2 className="text-lg font-semibold">A dialog with class</h2>
        <p className="text-sm text-gray-600	text-center">
          I'm a dialog that's been styled using tailwind css classes
        </p>
        <button
          className="w-full bg-gray-600 text-white font-semibold p-2.5 mt-4 rounded-lg"
          onClick={closeDialog}
        >
          Close
        </button>
      </ModalDialog>
    </>
  );
}
