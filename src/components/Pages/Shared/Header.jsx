import React from 'react';
import logo from '../../../assets/logo.png'
import Marquee from "react-fast-marquee";
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';




const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear and Favor!!</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
            <Button variant="danger">Latest</Button>
            <Marquee className='text-danger' speed={100}>
                Latest updates and news for your daily journal... ...
            </Marquee>
            </div>

           

        </Container>
    );
};

export default Header;