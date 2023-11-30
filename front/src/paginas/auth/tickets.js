import React, { useState } from "react"
import { Link } from "react-router-dom";
import FormTickets from "./FormTickets";

const Tickets = () =>{
    const [tickets, setTickets] = useState([]);

    const handleFormSubmit = (formData) => {
      setTickets([...tickets, formData]);
    };
    return(
        <div className="wrapper">
        {/* Preloader */}
      
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-p">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
        
           
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Navbar Search */}
            <li className="nav-item">
              <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                <i className="fas fa-search" />
              </a>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                      <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            {/* Messages Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-comments" />
                <span className="badge badge-danger navbar-badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
              </div>
            </li>
            {/* Notifications Dropdown Menu */}
          </ul>
        </nav>
        {/* /.navbar */}
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img src="dist/img/logoTicket.png" />
           
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
        
            {/* SidebarSearch Form */}
      
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
                <li className="nav-item menu-open">
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to='/homepage'  className="nav-link">
                            Inicio
                          </Link>
                      </li>
                      <li className="nav-item">
                      <Link to='/Tickets'  className="nav-link">
                            Tickets
                          </Link>
                      </li>
                      <li className="nav-item">
                      <Link to='/Clientes'  className="nav-link">
                            Clientes
                          </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          </aside>
          <h1 style={{textAlign: 'center'}}>Información General de Tickets</h1>
          <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
    
       
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Info boxes */}
       
   

        <div className="row">
          
          {/* Left col */}
          <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      {/* TABLE: LATEST ORDERS */}
      <div className="card">
        <div className="card-header border-transparent">
          <h3 className="card-title">Lista de Tickets</h3>
          <div className="card-tools">
        
          </div>
        </div>
        {/* /.card-header */}
        <div className="card-body p-0">
      <div className="table-responsive">
        <table className="table m-0">
          <thead>
            <tr>
              <th>Id Ticket</th>
              <th>Nombre Ticket</th>
              <th>Descripcion ticket</th>
              <th>Tipo Ticket</th>
              <th>Ventas</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ticket.nameTicket}</td>
                <td>{ticket.descriptionTicket}</td>
                <td>{ticket.typeTicket}</td>
                <td>{ticket.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>
  </div>
</div>

          {/* /.col */}

          {/* /.col */}
        </div>
        {/* /.row */}
      </div>{/*/. container-fluid */}
    </section>
    <div className="container" >
    <FormTickets onFormSubmit={handleFormSubmit} />

    </div>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
  {/* Control Sidebar */}
  <aside className="control-sidebar control-sidebar-dark">
    {/* Control sidebar content goes here */}
  </aside>
    </div>
    
)
}
export default Tickets