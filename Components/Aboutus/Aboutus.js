import React from 'react'
import "./Aboutus.css"
export default function Aboutus() {
    return (
        <>
            <div className='about'>
                <h1 className='about-h1'>Meet Our Talented Team</h1>
                <div className="grid-wrapper">
                    <div className="aboutcard">
                        <img src="/trial.jpg" alt="" />
                        <h3>Pooja Gusain</h3>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium a, nemo fuga fugit magnam sint quas accusamus accusantium beatae, eius amet, ratione harum in et!
                        </p>
                        <button className='about-btn'>Connect</button>
                    </div>

                    <div className="aboutcard">
                    <img src="/trial.jpg" alt="" />
                        <h3>Himanshu Mehta</h3>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium a, nemo fuga fugit magnam sint quas accusamus accusantium beatae, eius amet, ratione harum in et!
                        </p>
                        <button className='about-btn'>Connect</button>
                    </div>

                    <div className="aboutcard">
                    <img src="/trial.jpg" alt="" />
                        <h3>Gungun Mehta</h3>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium a, nemo fuga fugit magnam sint quas accusamus accusantium beatae, eius amet, ratione harum in et!
                        </p>
                        <button className='about-btn'>Connect</button>
                    </div>

                </div>
            </div>
        </>
    )
}
