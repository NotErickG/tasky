import React from "react";
import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import PopUpButton from "../../Utils/PopUpButton";
import { Card, Elevation } from "@blueprintjs/core";
import { ButtonGroup, Flex } from "@aws-amplify/ui-react";
import CreateClass from "./CreateClass";
import ListClasses from "./ListClasses";

const client = generateClient<Schema>();

export default function ClassWidget() {
  return (
    <>
      <Card
        interactive={true}
        elevation={Elevation.TWO}
        style={{ width: "100%" }}
      >
        <Flex paddingBottom={"1rem"}>
          <ButtonGroup>
            <PopUpButton
              component={CreateClass}
              buttonString="Create Class"
              additionalProps={{}}
            />
          </ButtonGroup>
        </Flex>
        <ListClasses />
      </Card>
    </>
  );
}
