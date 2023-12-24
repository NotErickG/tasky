import React, { useState } from "react";
import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import {
  Button,
  InputGroup,
  FormGroup,
  TextArea,
  DialogBody,
  DialogFooter,
  Checkbox,
} from "@blueprintjs/core";
import { Flex } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

interface CreateClassProps {
  onClose: () => void; // Function to close the dialog
}

const CreateClass: React.FC<CreateClassProps> = ({ onClose }) => {
  const [teacher, setTeacher] = useState("");
  const [subject, setSubject] = useState("");
  const [startTime, setStartTime] = useState('00:00'); // Updated for time input
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [meetsSunday, setMeetsSunday] = useState(false);
  const [meetsMonday, setMeetsMonday] = useState(false);
  const [meetsTuesday, setMeetsTuesday] = useState(false);
  const [meetsWednesday, setMeetsWednesday] = useState(false);
  const [meetsThursday, setMeetsThursday] = useState(false);
  const [meetsFriday, setMeetsFriday] = useState(false);
  const [meetsSaturday, setMeetsSaturday] = useState(false);
  const [createMore, setCreateMore] = useState(false); // State to track checkbox

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // formattedStart Time a.time()	An extended ISO 8601 time string in the format hh:mm:ss.sss.	Date but date information is removed upon query/mutation	AWSTime
    const formattedStartTime = `${startTime}:00.000`;
    const newClassData = {
      teacher,
      subject,
      startTime: formattedStartTime,
      meetsSunday,
      meetsMonday,
      meetsTuesday,
      meetsWednesday,
      meetsThursday,
      meetsFriday,
      meetsSaturday,
      location,
      description,
    };

    console.log("New class data:", newClassData);

    const { errors, data: newClass } = await client.models.Class.create(
      newClassData
    );

    if (errors) {
      console.error("Error creating class:", errors);
      return;
    }

    if (!createMore) {
      onClose(); // Close the dialog only if createMore is not checked
    } else {
      // Reset form for next entry
      setTeacher("");
      setSubject("");
      setStartTime("");
      setLocation("");
      setDescription("");
      setMeetsSunday(false);
      setMeetsMonday(false);
      setMeetsTuesday(false);
      setMeetsWednesday(false);
      setMeetsThursday(false);
      setMeetsFriday(false);
      setMeetsSaturday(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogBody>
        {/* Teacher input */}
        <FormGroup label="Teacher:" labelFor="teacher-input">
          <InputGroup
            id="teacher-input"
            placeholder="Teacher Name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          />
        </FormGroup>

        <FormGroup label="Days the class meets:">
          <Checkbox
            label="Sunday"
            checked={meetsSunday}
            onChange={(e) => setMeetsSunday(e.currentTarget.checked)}
          />
          <Checkbox
            label="Monday"
            checked={meetsMonday}
            onChange={(e) => setMeetsMonday(e.currentTarget.checked)}
          />
          <Checkbox
            label="Tuesday"
            checked={meetsTuesday}
            onChange={(e) => setMeetsTuesday(e.currentTarget.checked)}
          />
          <Checkbox
            label="Wednesday"
            checked={meetsWednesday}
            onChange={(e) => setMeetsWednesday(e.currentTarget.checked)}
          />
          <Checkbox
            label="Thursday"
            checked={meetsThursday}
            onChange={(e) => setMeetsThursday(e.currentTarget.checked)}
          />
          <Checkbox
            label="Friday"
            checked={meetsFriday}
            onChange={(e) => setMeetsFriday(e.currentTarget.checked)}
          />
          <Checkbox
            label="Saturday"
            checked={meetsSaturday}
            onChange={(e) => setMeetsSaturday(e.currentTarget.checked)}
          />
        </FormGroup>

        {/* Subject input */}
        <FormGroup label="Subject:" labelFor="subject-input">
          <InputGroup
            id="subject-input"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </FormGroup>

        {/* Start Time input */}
        <FormGroup label="Start Time:" labelFor="starttime-input">
          <InputGroup
            id="starttime-input"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </FormGroup>

        {/* Location input */}
        <FormGroup label="Location:" labelFor="location-input">
          <InputGroup
            id="location-input"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormGroup>

        {/* Description input */}
        <FormGroup label="Description:" labelFor="description-input">
          <TextArea
            id="description-input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fill
          />
        </FormGroup>
      </DialogBody>
      <DialogFooter>
        <Flex justifyContent="space-between" style={{ width: "100%" }}>
          <Checkbox
            label="Create more classes"
            checked={createMore}
            onChange={(e) => setCreateMore(e.currentTarget.checked)}
          />
          <Button type="submit" intent="primary">
            Create Class
          </Button>
        </Flex>
      </DialogFooter>
    </form>
  );
};

export default CreateClass;
