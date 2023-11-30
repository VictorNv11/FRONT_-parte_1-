import React, { useState } from "react";

const FormInicio = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    nameClient: "",
    typeTicket: "",
    bought: "",
    amount: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({
      nameClient: "",
      typeTicket: "",
      bought: "",
      amount: ""
    });
  };

  return (
    
    <div className="container" style={{ marginTop: "5%" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameClient" className="form-label">
            Nombre Cliente
          </label>
          <input
            type="text"
            className="form-control"
            id="nameClient"
            value={formData.nameClient}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bought" className="form-label">
            Comprado
          </label>
          <input
            type="text"
            className="form-control"
            id="bought"
            value={formData.bought}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Cantidad
          </label>
          <input
            type="text"
            className="form-control"
            id="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormInicio;

