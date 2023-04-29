import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import QZonne from './QZonne';
import bg from '../../../assets/bg.png'

const Rightnav = () => {
    return (
        <div>
            <h4>LogIn With</h4>
          
             <Button className='my-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
             <Button variant="outline-secondary"><FaGithub/> Login With GitHub</Button>
             <div>
                <h4>Find Us On</h4>

                <ListGroup>
                    <ListGroup.Item><FaFacebook/>FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
                   
                </ListGroup>
             </div>
              <QZonne></QZonne>

              <div  className='position-relative'>
                <img className='w-100' src={bg} alt="" />
                    <div className='w-75 text-center position-absolute top-50 start-50 text-white translate-middle'>
                        <h3>
                            Create An Amazing Newspaper
                        </h3>
                        <p>
                            Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                        </p>

                        <Button variant="danger">Learn More</Button>
                    </div>
              </div>
        </div>
    );
};

export default Rightnav;