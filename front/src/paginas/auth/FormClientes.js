import React, { useState } from "react";

const FormClientes = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    clientId: "",
    clientName: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({
      clientId: "",
      clientName: "",
    });
  };

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="clientId" className="form-label">
            Id Cliente
          </label>
          <input
            type="text"
            className="form-control"
            id="clientId"
            value={formData.clientId}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="clientName" className="form-label">
            Nombre Cliente
          </label>
          <input
            type="text"
            className="form-control"
            id="clientName"
            value={formData.clientName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormClientes;
