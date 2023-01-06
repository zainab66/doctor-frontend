import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Dashboard() {
  return (
    <>
      <div className="m">
        <Header />
      </div>
      <div className="app">
        <Sidebar />

        {/* <div className="content-wrapper">
          <div className="pt-3" /> */}
        <section className="content">
          <Container className="container">
            <Outlet />
          </Container>
        </section>
        {/* </div> */}
      </div>
    </>
  );
}
