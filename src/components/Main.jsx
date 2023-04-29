import React from 'react';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Leftnav from './Pages/Shared/Leftnav';
import Rightnav from './Pages/Shared/Rightnav';
import { Outlet } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>

        <Container>
                <Row>
                    <Col lg={3}>
                        <Leftnav></Leftnav>
                    </Col>
                    <Col lg={6}>
                       <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <Rightnav></Rightnav>
                    </Col>
                </Row>
        </Container>


            <Footer></Footer>

        </div>
    );
};

export default Main;