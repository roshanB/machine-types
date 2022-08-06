import './App.css';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Header from './components/header.component';
import { Route, Routes } from 'react-router';
import MachinesPage from './pages/machines.page';

function App() {
  return (
    <>
      <Container fluid>
        <Header />
        <Routes>
          <Route path="/" element={<MachinesPage />} >
            <Route path=":machineTypeId" element={<MachinesPage />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}
export default App;
