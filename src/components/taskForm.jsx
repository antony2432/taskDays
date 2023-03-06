import { useState } from "react";
import { db } from "../firebase";
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
      const temporalData = dataForm
      setDataForm(initialValue);
      const docRef = await addDoc(collection(db, "task"), temporalData);
      console.log(`Se envio de forma correcto id: ${docRef.id}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="card card-body" style={styleCard} onSubmit={handleClick}>
      <div className="mb-3 form-group">
        <label htmlFor="nameTask" className="form-label">
          Tarea
        </label>
        <input
          type="text"
          id="nameTask"
          className="form-control"
          onChange={onChangeValue}
          value={dataForm.nameTask}
          required
        />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="assigned" className="form-label">
          Asignado
        </label>
        <input
          type="text"
          id="assigned"
          className="form-control"
          onChange={onChangeValue}
          value={dataForm.assigned}
          required
        />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="description" className="form-label">
          Descripción
        </label>
        <textarea
          id="description"
          rows="3"
          className="form-control"
          onChange={onChangeValue}
          value={dataForm.description}
        ></textarea>
      </div>
      <button className="btn btn-primary mt-3">Enviar</button>
    </form>
  );
}
