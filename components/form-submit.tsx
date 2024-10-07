"use client";

import { useFormStatus } from "react-dom";

const FormSubmit = () => {
  const status = useFormStatus();

  if (status.pending) {
    return (
      <button className="bg-red-400 opacity-80" disabled={true}>
        Creating data...
      </button>
    );
  }
  return <button className="bg-red-400">Create Data</button>;
};

export default FormSubmit;
