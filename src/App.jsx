import { useState } from "react";
import ModalDialog from "./lib/ModalDialog";

export default function App() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

  return (
    <>
      <button onClick={openDialog}>Open modal dialog</button>
      <ModalDialog isDialogVisible={isDialogVisible} closeDialog={closeDialog}>
        <p>You can put whatever content you want here.</p>
        <p>A button to close the dialog sounds like a good idea.</p>
        <button onClick={closeDialog}>Close</button>
      </ModalDialog>
    </>
  );
}
