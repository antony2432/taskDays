import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FloatingLabel,
} from "react-bootstrap";
import { db } from "../../firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

export default function ModalForm({ show, setShow, taskModal, setTaskModal }) {
  const handleClose = () => setShow(false);

  const onChangeValue = (e) => {
    const { id, value } = e.target;
    setTaskModal({ ...taskModal, [id]: value });
  };
  const UpdateTask = async (e) => {
    e.preventDefault();
    setShow(false);
    await updateDoc(doc(db, "task", taskModal.id), taskModal);
  };
  const deleteClick = async (e) => {
    e.preventDefault();
    try {
      setShow(false);
      setTimeout(async () => {
        await deleteDoc(doc(db, "task", taskModal.id));
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose} size="sm" centered>
      <ModalHeader closeButton>
        <ModalTitle>Actualizar Tarea</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup className="mb-3">
            <FormLabel>Tarea</FormLabel>
            <FormControl
              type="text"
              id="nameTask"
              onChange={onChangeValue}
              value={taskModal.nameTask}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Asignado</FormLabel>
            <FormControl
              type="text"
              id="assigned"
              onChange={onChangeValue}
              value={taskModal.assigned}
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
                value={taskModal.description}
              />
            </FloatingLabel>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={UpdateTask}>Actualizar</Button>
        <Button onClick={deleteClick} variant="danger">
          Eliminar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
