import React from 'react';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Rightnav from './Pages/Shared/Rightnav';
import { Outlet } from 'react-router-dom';

const NewsLayOut = () => {
    return (
        <div>
            <Header></Header>

                <Container>
                        <Row>
                         
                            <Col lg={9}>
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

export default NewsLayOut;