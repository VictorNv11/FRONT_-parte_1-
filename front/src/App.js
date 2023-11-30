import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './paginas/auth/dashboard';
import Login from './paginas/auth/login';
import FormInicio from './paginas/auth/FormInicio';
import FormTickets from './paginas/auth/FormTickets';
import FormClientes from './paginas/auth/FormClientes';
import Clientes from './paginas/auth/clientes';
import Tickets from './paginas/auth/tickets';

  function App() {
    return (
      <Fragment>
        <Router>
          <Routes>
            <Route path='/'exact element={<Login/>}/>
            <Route path='/homepage'exact element={<Dashboard/>}/>
            <Route path='/form' exact element={<FormInicio/>}/>
            <Route path='/formTickets' exact element={<FormTickets/>}/>
            <Route path='/formClientes' exact element={<FormClientes/>}/>
            <Route path='/Clientes'exact element={<Clientes/>}/>
            <Route path='/Tickets' exact element={<Tickets/>}/>
          </Routes>
        </Router>
      </Fragment>
    );
  }

export default App;
