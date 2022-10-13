# React basic modal dialog

A simple modal dialog react component built with the [HTML dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).

**Disclaimer and acknowledgement**

This package was created as a training project.
The code is inspired from [this article](https://dev.to/elsyng/react-modal-dialog-using-html-dialog-element-5afk).
 


## Features

- Generic
- Lightweight
- Accessible
- Closes with outside click or ESC key (consider adding a close button for [accessibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility_considerations))
- Easy to style
- Includes a ::backdrop pseudo-element for behind the element

## Installation

Install the package from [npm](https://www.npmjs.com/package/react-basic-modal-dialog)

    $ npm install react-basic-modal-dialog

## Examples

### Basic example

```jsx
import { useState } from "react";
import ModalDialog from "react-basic-modal-dialog";

export default function Example() {
  // The only two required props for the modal dialog are isDialogVisible
  // (to indicate whether the dialog should be visible or not) and closeDialog
  // (a function setting isDialogVisible to false). Let's create them below.

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

  // And here is a simple silly example of the modal dialog being used

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
```

### Styling with classes (using tailwind css in this example)

```jsx
import { useState } from "react";
import ModalDialog from "react-basic-modal-dialog";

export default function Example() {
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
```

## Properties

```jsx
<ModalDialog

  isDialogVisible={
  /* Boolean describing if the dialog should be shown or not */}

  closeDialog={
  /* Function that closes the dialog (sets isDialogVisible to false) */}

  dialogClassName={
  /* String with space-separated class names that will be applied to the dialog element */}

  contentClassName={
  /* String with space-separated class names that will be applied to the content div
  inside the dialog element */}

>

</ModalDialog>

```
