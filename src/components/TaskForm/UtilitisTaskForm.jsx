import { useState } from "react";
import useFireStorn from "../../hooks/useFireStorn";

export default function UtilitisTaskForm() {
  const { postTask } = useFireStorn();
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

  const handleClick = (e) => {
    e.preventDefault();
    const temporalData = dataForm;
    setDataForm(initialValue);
    postTask(temporalData);
  };
  return {
    dataForm,
    onChangeValue,
    styleCard,
    handleClick,
  };
}
