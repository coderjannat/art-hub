import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import Flip from 'react-reveal/Flip';




const About = () => {
    return (
        <div>

            <div className="about-container">

                <div className=" ">
                    <MenuBar></MenuBar>
                    <div className="align-items-center justify-content-center">
                        <h1 className="title py-3">
                            <Flip left>
                                Best Art Learning Center!!!
                            </Flip>
                            
                             </h1>
                            

                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;


