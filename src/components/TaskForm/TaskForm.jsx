import { useState } from "react";
import {
  Button,
  Card,
  FloatingLabel,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function TaskForm() {
  const initialValue = {
    nameTask: "",
    assigned: "",
    description: "",
  };
  const [dataForm, setDataForm] = useState(initialValue);

  const onChangeValue = (e) => {
    const { id, value } = e.target;
    setDataForm({ ...dataForm, [id]: value });
  };

  const styleCard = {
    width: "23rem",
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const temporalData = dataForm;
      setDataForm(initialValue);
      const docRef = await addDoc(collection(db, "task"), temporalData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Card style={styleCard}>
      <Card.Body>
        <Form>
          <FormGroup className="mb-3">
            <FormLabel>Tarea</FormLabel>
            <FormControl
              type="text"
              id="nameTask"
              onChange={onChangeValue}
              value={dataForm.nameTask}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Asignado</FormLabel>
            <FormControl
              type="text"
              id="assigned"
              onChange={onChangeValue}
              value={dataForm.assigned}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Descripción</FormLabel>
            <FloatingLabel>
              <FormControl
                as="textarea"
                style={{ height: "100px" }}
                id="description"
                onChange={onChangeValue}
                value={dataForm.description}
              />
            </FloatingLabel>
          </FormGroup>
          <Button className="w-100" onClick={handleClick}>
            Enviar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
