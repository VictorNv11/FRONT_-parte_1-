import React from "react";
import { Link } from "react-router-dom";

 
const Login = ()=>{
    return (
        
        <div className=" hold-transition login-page">

        <div className="login-box" >
  <div className="login-logo">

    
    <Link to={"#"}><b>Iniciar </b>Session</Link>
  </div>
  {/* /.login-logo */}
  <div className="card" content="center">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Ingrese sus Datos</p>
      <form>
        <div className="input-group mb-3">
          <input type="email" 
          className="form-control" 
          placeholder="Correo Electronico" 
          id ="email"
          name = "email"/>
          <div className="inp   ut-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password"
           className="form-control" 
           placeholder="Contraseña"
           id = "password"
           name = "password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <Link to='/homepage'  className="btn btn-block btn-primary">
          Ingresar
        </Link>
        <Link to={"#"} className="btn btn-block btn-danger">
          Crear cuenta
        </Link>
      </form>
      </div>
      {/* /.social-auth-links */}
    
    </div>
    </div>
    {/* /.login-card-body */}
  </div>


    ) 

}
export default Login;