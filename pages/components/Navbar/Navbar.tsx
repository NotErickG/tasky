import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navbar, Alignment, Button, NavbarGroup, NavbarHeading } from "@blueprintjs/core";

const MyNavbar = () => {
  const { signOut } = useAuthenticator((context) => [context.signOut]);

  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Todo App</NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button minimal={true} text="My Work" />
        <Button minimal={true} text="Classes" />
        <Button minimal={true} text="Logout" onClick={signOut} />
      </NavbarGroup>
    </Navbar>
  );
};

export default MyNavbar;

