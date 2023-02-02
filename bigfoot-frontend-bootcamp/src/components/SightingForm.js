import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Button, Form} from "react-bootstrap/";
import {BACKEND_URL} from "../constants.js"



const SightingForm = () => {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  //Good way to handle multiple changes in input in a form
  const handleChange = (event) => {
    switch (event.target.name) {
      case "date":
        setDate(event.target.value);
        break;
      case "location":
        setLocation(event.target.value);
        break;
      case "notes":
        setNotes(event.target.value);
        break;
      default:
    }
  };

  const handleSubmit = (event) => {
    // Prevent default form redirect on submission
    event.preventDefault();

    // Send request to create new sighting in backend
    axios
      .post(`${BACKEND_URL}/sightings`, {
        date,
        location,
        notes,
      })
      .then((res) => {
        // Clear form state
        setDate("");
        setLocation("");
        setNotes("");

        // Navigate to sighting-specific page after submitting form
        navigate(`/sightings/${res.data.id}`);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Date and Time</Form.Label>
        <Form.Control
          // datetime-local input type allows user to input both date and time
          type="datetime-local"
          name="date"
          value={date}
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          When did this sighting happen?
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
          placeholder="Yishun, Singapore"
        />
        <Form.Text className="text-muted">
          Where did this sighting happen?
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Notes</Form.Label>
        <Form.Control
          // Use textarea to give user more space to type
          as="textarea"
          name="notes"
          value={notes}
          onChange={handleChange}
          placeholder="Big bear, bigger than human, walking around the park at night. Very scary."
        />
        <Form.Text className="text-muted">
          Please describe this sighting.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SightingForm