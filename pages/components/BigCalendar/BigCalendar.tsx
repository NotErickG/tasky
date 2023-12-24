import React, { useEffect, useState, useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import { Card, Elevation } from "@blueprintjs/core";

const mLocalizer = momentLocalizer(moment);

const BigCalendar = () => {
  // Explicitly define the type for todos array using Schema["Todo"][]
  const [todos, setTodos] = useState<Schema["Todo"][]>([]);
  const client = generateClient<Schema>();

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await client.models.Todo.list();
      setTodos(data);
    };

    fetchTodos();
  }, [client.models.Todo]);

  const events = useMemo(() => {
    return todos.map((todoItem) => {
      const dueDate = moment(todoItem.dueDate);
      const endDate = moment(dueDate).add(1, 'hour');
      
      return {
        title: todoItem.title,
        start: dueDate.toDate(),
        end: endDate.toDate(),
      };
    });
  }, [todos]);

  return (
    <Card interactive={true} elevation={Elevation.TWO} style={{ width: "100%" }}>
      <Calendar
        localizer={mLocalizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
      />
    </Card>
  );
};

export default BigCalendar;
