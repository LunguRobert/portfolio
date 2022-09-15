import React ,{ useEffect, useState } from 'react';
import './css/main.css';
import Email from './components/Email/Email';
import Map from './components/Map/Map';
import Card from './components/Card/Card';
import Menu from './components/Menu/Menu'
import Contacts from './components/Contacts/Contacts';
import Scene from './components/Scene'
import { Canvas } from '@react-three/fiber';

import img1 from './images/featured.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { OrbitControls } from '@react-three/drei'

function changeMode(mode){
    console.log('app')
    let r = document.querySelector(':root');

    if(!mode){
        r.style.setProperty('--first', '#6E00FF');
        r.style.setProperty('--second', '#6700EE');
        r.style.setProperty('--third', 'white');
        r.style.setProperty('--fourth', 'white');
        r.style.setProperty('--fifth', '#FF64CB');
        r.style.setProperty('--sixth', 'black');
        r.style.setProperty('--customOne', 'white');
        r.style.setProperty('--customTwo', '#F7F9FE');
        r.style.setProperty('--customMenuOne', '#7a1bf6ae');
        r.style.setProperty('--customMenuTwo', '#a22b7a84');
    }else{
        r.style.setProperty('--first', '#121212');
        r.style.setProperty('--second', '#1E1E1E');
        r.style.setProperty('--third', '#00F7FF');
        r.style.setProperty('--fourth', '#121212');
        r.style.setProperty('--fifth', '#1E1E1E');
        r.style.setProperty('--sixth', 'white');
        r.style.setProperty('--customOne', '#363636');
        r.style.setProperty('--customTwo', '#1E1E1E');
        r.style.setProperty('--customMenuOne', '#2B2B2Bae');
        r.style.setProperty('--customMenuTwo', '#50525284');
    }

}


function App() {


   const [mode, setMode] = useState(false)

    changeMode(mode);


    AOS.init({duration:200})
    


    useEffect(()=>{

        const TagCloud = require('TagCloud');

        const container = '.skills';
        const texts = [
            'HTML', 'REST', 'JavaScript',
            'CSS3', 'Animation', 'Interactive',
            'JSON', 'React', 'Webpack',
            'Git', 'Bootstrap', 'Sass',
            'npm','SQL'
        ];
        const options = {
            radius : `${window.innerWidth/window.innerHeight * 150}`,
            keep : false,
            initSpeed : 'fast',
            maxSpeed : 'fast',
        };

        var tagCloud = TagCloud(container, texts, options);
        window.addEventListener('resize',()=>{
            var width = window.innerWidth;
            var height = window.innerHeight;
            var isHeight = height > 650;
            tagCloud.destroy();
            options['radius'] = isHeight ? width/height * 150 : width/height * 100;
            tagCloud = TagCloud(container,texts,options);
        })
        
            },[])
    

    return (
    <div className="App">
      

    <div className="nav-container">
        <header>
            <a href="index.html" className="logo">Lungu Robert</a>

            
            <Menu/>
            <nav>
                <ul>
                    <li><a href="#portfolio">My work</a></li>
                    <li><a href="#skills-section">My skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </nav>

        </header>

        <div className="social-header">
            <Contacts/>
        </div>

    </div>
        
    <div className="hero">
        
            <div className="content">
                <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">Beautifully Crafted Web Experiences</h1>
                <p data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" className="meet">Meet Robert</p>
                <svg data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className="scroll" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="40" height="76" viewBox="0 0 40 76">
                    <g id="scroll" fill="none" stroke="#fff" strokeWidth="6">
                    <rect width="40" height="76" rx="20" stroke="none"/>
                    <rect x="3" y="3" width="34" height="70" rx="17" fill="none"/>
                    </g>
                    <ellipse id="circle" cx="12" cy="12.5" rx="12" ry="12.5" transform="translate(7.7 10)" fill="#fff"/>
                </svg>
            </div>

                        <Canvas className='canvas' >
                            <Scene setBg={setMode} />
                            <OrbitControls enableRotate={false} enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                        </Canvas>

    </div>

    <section className="featured">
        <div className="left">
                <div className="inner transition2">
                    <p data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in" className="subtitle">Featured Project</p>
                    <a data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in" href="#" className="featured-title">Nike REACT App.</a>
                    <p data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in" className="featured-desc">E-commerce clothing store website powered by React.</p>
                </div>
        </div>
        <img data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease" className="right-transition2" src={img1} alt="Featured Project"/>
    </section>

        <section id="skills-section" className="skills-section">
            <div>
                <h1>Skills & Experience</h1>
                <p>I am comfortable working with&nbsp;
                    <span>HTML5</span>,&nbsp;
                    <span>CSS3</span>,&nbsp;
                    <span>JavaScript</span>,&nbsp;
                    <span>React</span>,&nbsp;
                    <span>Bootstrap</span>,&nbsp;
                    <span>Sass</span>,&nbsp;
                    <span>Git</span>
                </p>
                <p>
                I’m not a designer but I have a good sense of aesthetics, and
                experience in responsive, mobile-first web design. I put special
                effort into optimizing my code and providing the best user
                experience.
                </p>
                <p>
                    Visit my <span><a href="https://www.linkedin.com/in/robert-alexandru-lungu-6a27301b9/" target='_blank'>LinkedIn</a></span> profile for more details.
                </p>
            </div>

            <span className='skills'></span>

        </section>

        <section id="portfolio" className="portfolio">

            <div className="squares">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>

            <div className="card-container">
                <Card   name='Nike React'
                        about='Nike React Shop is a fully responsive e-commerce website, maximum compatiblities in all mobile devices, built using React.'
                        image='https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        url='https://nike-react-shop.herokuapp.com/'
                        build='React'
                />
                <Card   name='News App'
                        about='News App is a fully responsive news website, maximum compatiblities in all mobile devices, built using React.'
                        image='https://media.istockphoto.com/photos/abstract-news-wallpaper-picture-id898976052'
                        url='https://breaking-news-app.herokuapp.com/'
                        build='React'
                />
                <Card   name='Form Validation'
                        about='A simple form validation, maximum compatiblities in all mobile devices, built using React.'
                        image='https://www.jotform.com/blog/wp-content/uploads/2020/12/Beautiful-Forms-01.png'
                        url='https://form-validation-rct.herokuapp.com/'
                        build='JavaScript'
                />
                
            </div>
            
        </section>

        <section id="contact" className='contact'>

            <Email/>
            <Map/>

        </section>
    </div>
  );
}

export default App;
