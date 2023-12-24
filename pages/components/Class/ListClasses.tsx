import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import { formatDate } from "../../Utils/DateUtils";
import {
  HTMLTable,
  Spinner,
  Button,
  Alert,
  Dialog,
  MenuItem,
  ButtonGroup,
} from "@blueprintjs/core";
import { Suggest } from "@blueprintjs/select";
import PopUpButton from "../../Utils/PopUpButton";
import ViewClass from "./ViewClass"; // Replace ViewTodo with ViewClass
import { makeTime } from "@/pages/Utils/TodoUtils";

const client = generateClient<Schema>();

export default function ListClasses() {
  const [classes, setClasses] = useState<Schema["Class"][]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<Schema["Class"] | null>(
    null
  );

  async function listClasses() {
    setIsLoading(true);
    const { data } = await client.models.Class.list();
    setClasses(data);
    setIsLoading(false);
  }

  const handleViewClass = (classItem: Schema["Class"]) => {
    setSelectedClass(classItem);
    setIsViewDialogOpen(true);
  };

  const renderClassItem = (
    classItem: Schema["Class"],
    { handleClick, modifiers }: any
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return (
      <MenuItem
        key={classItem.id}
        text={classItem.subject}
        onClick={() => handleViewClass(classItem)}
        active={modifiers.active}
      />
    );
  };

  useEffect(() => {
    const sub = client.models.Class.observeQuery().subscribe(({ items }) =>
      listClasses()
    );

    return () => sub.unsubscribe();
  }, []);

  async function deleteClass() {
    if (selectedClassId) {
      setIsLoading(true);
      await client.models.Class.delete({ id: selectedClassId });
      setClasses(
        classes.filter((classItem) => classItem.id !== selectedClassId)
      );
      setIsLoading(false);
      setIsAlertOpen(false);
    }
  }

  const confirmDelete = (classId: string) => {
    setSelectedClassId(classId);
    setIsAlertOpen(true);
  };

  if (isLoading) {
    return <Spinner />;
  }

  const formatMeetingDays = (classItem: Schema["Class"]) => {
    const days = [
      { key: "meetsSunday", value: "Sun" },
      { key: "meetsMonday", value: "Mon" },
      { key: "meetsTuesday", value: "Tue" },
      { key: "meetsWednesday", value: "Wed" },
      { key: "meetsThursday", value: "Thu" },
      { key: "meetsFriday", value: "Fri" },
      { key: "meetsSaturday", value: "Sat" },
    ];

    const meetingDays = days
      .filter((day) => classItem[day.key as keyof Schema["Class"]] as boolean)
      .map((day) => day.value);

    if (meetingDays.length > 1) {
      const lastDay = meetingDays.pop();
      return `${meetingDays.join(", ")} and ${lastDay}`;
    }
    return meetingDays.join("");
  };

  return (
    <>
      <Suggest
        items={classes}
        itemRenderer={renderClassItem}
        onItemSelect={handleViewClass}
        inputValueRenderer={(classItem) => classItem.subject}
        noResults={<MenuItem disabled={true} text="No results." />}
        popoverProps={{ minimal: true }}
      />

      <HTMLTable striped={true} interactive={true} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Start Time</th>
            <th>Teacher</th>
            <th>Days Met</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem.id}>
              <td>{classItem.subject}</td>
              <td>{makeTime(classItem.startTime)}</td>
              <td>{classItem.teacher}</td>
              <td>{formatMeetingDays(classItem)}</td>
              <td>
                <ButtonGroup>
                  <PopUpButton
                    component={ViewClass}
                    additionalProps={{ classId: classItem.id }}
                    buttonString="View"
                  />
                  <Button
                    onClick={() => confirmDelete(classItem.id)}
                    intent="danger"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </HTMLTable>

      <Alert
        isOpen={isAlertOpen}
        cancelButtonText="Cancel"
        confirmButtonText="Delete"
        icon="trash"
        intent="danger"
        onCancel={() => setIsAlertOpen(false)}
        onConfirm={deleteClass}
        canEscapeKeyCancel={true}
        canOutsideClickCancel={true}
      >
        <p>Are you sure you want to delete this class?</p>
      </Alert>

      <Dialog
        isOpen={isViewDialogOpen}
        onClose={() => setIsViewDialogOpen(false)}
        title="View Class"
      >
        {selectedClass && (
          <ViewClass
            classId={selectedClass.id}
            onClose={() => setIsViewDialogOpen(false)}
          />
        )}
      </Dialog>
    </>
  );
}
