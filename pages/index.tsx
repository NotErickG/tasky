import React from "react";
import TodoWidget from "./components/Todo/TodoWidget";
import Navbar from "./components/Navbar/Navbar";
import BigCalendar from "./components/BigCalendar/BigCalendar";
import { Flex, View } from "@aws-amplify/ui-react";
import ClassWidget from "./components/Class/ClassWidget";
import TodosWidget from "./components/Todo/TodoWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <Flex
        direction="row" // Set direction to row to align children in a row
        alignItems="stretch"
        wrap="wrap" // Change to 'wrap' to allow wrapping if needed
        gap="1rem"
        style={{ padding: "1rem" }} // Adjust padding as needed
      >
        <View width="100%" maxWidth="500px">
          <TodosWidget />
        </View>
        <View width="100%" maxWidth="800px" minHeight={"800px"}>
          <BigCalendar />
        </View>
        <View width="100%" maxWidth="500px">
          <ClassWidget />
        </View>
      </Flex>
    </>
  );
}
