// ViewClass.tsx
import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import { formatDate } from "../../Utils/DateUtils";
import {
  Spinner,
  Button,
  Intent,
  DialogBody,
  DialogFooter,
  Text,
  Tag,
  Section,
  Card,
} from "@blueprintjs/core";
import { Flex } from "@aws-amplify/ui-react";
import { makeTime } from "@/pages/Utils/TodoUtils";

const client = generateClient<Schema>();

interface ViewClassProps {
  classId: string;
  onClose: () => void; // Function to close the dialog
}

const ViewClass: React.FC<ViewClassProps> = ({ classId, onClose }) => {
  const [classItem, setClassItem] = useState<Schema["Class"] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const { data } = await client.models.Class.get({
          id: classId,
        });
        setClassItem(data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchClass();
  }, [classId]);

  // Update and delete logic can be added here if needed

  if (error) return <div>Error: {error}</div>;
  if (!classItem) return <Spinner />;

  return (
    <>
      <DialogBody>
        <Section
          style={{
            width: "100%",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
          }}
          title={classItem.subject}
          rightElement={<Tag>{classItem.teacher}</Tag>}
        >
          <Card>
            <Text>
              <b>Description:</b> {classItem.description}
            </Text>
            <Text>
              <b>Start Time:</b> {makeTime(classItem.startTime)}
            </Text>
            <Text>
              <b>Location:</b> {classItem.location}
            </Text>
            {/* Add days to meet information if needed */}
          </Card>
        </Section>
      </DialogBody>
      <DialogFooter>
        <Flex justifyContent="space-between" style={{ width: "100%" }}>
          {/* Buttons for update and delete functionality can be added here */}
          <Flex>
            <Button intent={Intent.DANGER} onClick={onClose}>
              Close
            </Button>
          </Flex>
        </Flex>
      </DialogFooter>
    </>
  );
};

export default ViewClass;
