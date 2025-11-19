// src/components/ErrorModalWrapper.jsx
import { useRouteError } from "react-router-dom";
import { useState } from "react";
import ErrorModal from "./ErrorModal";

const ErrorModalWrapper = () => {
  const error = useRouteError();
  const [open, setOpen] = useState(true);

  if (!open) return null; // modal closed

  return (
    <ErrorModal
      message={error?.message || "Something went wrong"}
      onClose={() => setOpen(false)}
    />
  );
};

export default ErrorModalWrapper;
