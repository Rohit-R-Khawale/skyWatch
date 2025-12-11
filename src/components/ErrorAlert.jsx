// src/components/ErrorAlert.jsx
import React from "react";

const ErrorAlert = ({ message }) => {
  if (!message) return null;

  return (
    <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
      <p className="font-medium">Something went wrong</p>
      <p className="text-red-200 mt-1">{message}</p>
    </div>
  );
};

export default ErrorAlert;
