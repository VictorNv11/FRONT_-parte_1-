import React, { useState } from "react";

const FormTickets = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    nameTicket: "",
    descriptionTicket: "",
    typeTicket: "",
    sales: "",
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
      nameTicket: "",
      descriptionTicket: "",
      typeTicket: "",
      sales: "",
    });
  };

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameTicket" className="form-label">
            Nombre Ticket
          </label>
          <input
            type="text"
            className="form-control"
            id="nameTicket"
            value={formData.nameTicket}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionTicket" className="form-label">
            Descripcion Ticket
          </label>
          <input
            type="text"
            className="form-control"
            id="descriptionTicket"
            value={formData.descriptionTicket}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="typeTicket" className="form-label">
            Tipo Ticket
          </label>
          <input
            type="text"
            className="form-control"
            id="typeTicket"
            value={formData.typeTicket}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sales" className="form-label">
            Ventas
          </label>
          <input
            type="text"
            className="form-control"
            id="sales"
            value={formData.sales}
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

export default FormTickets;
