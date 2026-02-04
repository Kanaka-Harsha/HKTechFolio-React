import './header.css'
import { useState } from 'react';

function Header()
{
    return (
        <div className="header">
            <div className="logo">
                <h1>HKTechFolio</h1>
            </div>
            <div className='navBar'>
                <ul>
                    <li><a href="#Me">Me</a></li>
                    <li><a href="#AboutMe">About</a></li>
                    <li><a href="#TechStack">Tech Stack</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#ContactMe">Contact Me</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;