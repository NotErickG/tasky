// PopUpButton.tsx
import React, { useState, ComponentType } from "react";
import { Button, Dialog } from "@blueprintjs/core";

interface PopUpButtonProps {
  component: ComponentType<any>;
  buttonString: string;
  additionalProps?: any;
}

const PopUpButton: React.FC<PopUpButtonProps> = ({
  component: Component,
  buttonString,
  additionalProps = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <>
      <Button onClick={toggleDialog}>{buttonString}</Button>
      <Dialog
        isOpen={isOpen}
        onClose={toggleDialog}
        title={buttonString}
      >
          <Component {...additionalProps} onClose={toggleDialog} />
      </Dialog>
    </>
  );
};

export default PopUpButton;
