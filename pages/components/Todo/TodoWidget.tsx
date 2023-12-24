import React from "react";
import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import ListTodos from "./ListTodos";
import PopUpButton from "../../Utils/PopUpButton";
import CreateTodo from "./CreateTodo";
import { Card, Elevation } from "@blueprintjs/core";
import { ButtonGroup, Flex } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

export default function TodosWidget() {
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
              component={CreateTodo}
              buttonString="Create Todo"
              additionalProps={{}}
            />
          </ButtonGroup>
        </Flex>
        <ListTodos />
      </Card>
    </>
  );
}
