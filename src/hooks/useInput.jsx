import { useState } from "react";

function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const reset = () => {
    setForm(initialForm);
  };

  return [form, onChange, reset];
}

export default useInput;
