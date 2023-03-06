import { useState } from "react";

export default function TaskForm() {
  const initialValue = {
    nameTask: "",
    description: "",
  };
  const [dataForm, setDataForm] = useState(initialValue);

  const onChangeValue = (e) => {
    const {id, value} = e.target
    setDataForm({...dataForm, [id] : value})
  }
  const styleCard = {
    width: "23rem",
  };

  const handleClick = (e) => {
    e.preventDefault()
    console.log(dataForm)
  }
  return (
    <form className="card card-body" style={styleCard} onSubmit={handleClick}>
      <div className="mb-3 form-group">
        <label htmlFor="nameTask" className="form-label">
          Tarea
        </label>
        <input type="text" id="nameTask" className="form-control" onChange={onChangeValue}/>
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="assigned" className="form-label">Asignado</label>
        <input type="text" id="assigned" className="form-control" onChange={onChangeValue}/>
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="description" className="form-label">
          Descripción
        </label>
        <textarea id="description" rows="3" className="form-control" onChange={onChangeValue}></textarea>
      </div>
      <button className="btn btn-primary mt-3">Enviar</button>
    </form>
  );
}
