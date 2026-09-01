import { useState } from "react";
import { validateContactForm } from "../Utils/contactValidation";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "Project Inquiry",
  message: "",
};

export const useContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error dynamically on edit
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_STATE);
    setErrors({});
    setStatus("idle");
    setStatusMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      // Prepared endpoint payload execution mock
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ ok: true }), 1500)
      );

      if (response.ok) {
        setStatus("success");
        setStatusMessage("Message sent successfully! Thanks for reaching out.");
        setFormData(INITIAL_STATE);
      } else {
        throw new Error("Failed server submission");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("We couldn't send your message. Please try again or contact me directly.");
      console.error(err)
    }
  };

  return {
    formData,
    errors,
    status,
    statusMessage,
    handleChange,
    handleSubmit,
    resetForm,
  };
};