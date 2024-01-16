import React from "react";
import {Link , Navigate ,useNavigate} from 'react-router-dom';
import logo from '../../public/assets/logo3.png'


const About = () => {
    return (
        <div className="bg-gray-900 min-h-screen">
        {/* page d'acceuil*/}
        <nav className="bg-gray-800 text-white h-16 py-4 px-6 flex items-center justify-between">
            {/* logo */}
            <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
            <ul class="flex items-center">
            <li class="mr-6 font-body">
                <Link to="/" class="hover:text-gray-300 font-body">
                Accueil
                </Link>
            </li>
            <li class="mr-6 font-body"><Link to="/about" class="hover:text-gray-300 font-body">About</Link></li>
                <li class="mr-6 font-body"><Link to="/contact" class="hover:text-gray-300 font-body">Contact</Link></li>
            </ul>
        </nav>
        
        {/* about section */}
        <section className="container mx-auto py-10 px-6">
            <h1 className="text-3xl font-bold font-body text-white mb-4">About Us</h1>
            <h3 className="text-xl font-bold font-body text-white mb-4">Welcome to WatchWave - Your Ultimate TV Show Hub!</h3>

            <h5 className=" italic font-body text-white mb-4">Passionate about the small screen? So are we!</h5>
            <p className="text-white font-body">At WacthWave, we live and breathe TV shows. Whether you're a die-hard fan, a casual viewer, or someone just dipping their toes into the world of television, you've found your new home.</p>
            <h6 className=" text-xl font-bold font-body text-white mt-4 mb-4">Our story :</h6>
            <p className="text-white font-body"> We began as a small group of friends who wanted to share their love of watching TV with the world. We've since grown to become the largest and most diverse community of TV enthusiasts.</p>
            <h6 className=" text-xl font-bold font-body text-white mt-4 mb-4">What Sets Us Apart:</h6>
            <p className="text-white font-body">We're not just another TV site. We're a community of TV fans who love to talk about what we're watching. We're a place where you can find new shows to watch and discuss your favorites with other fans.</p>
            <h6 className=" text-xl font-bold font-body text-white mt-4 mb-4">Our Mission :</h6>
            <p className="text-white font-body">Our mission is simple: to help you find your next favorite show. Whether you're looking for something new or just want to talk about your favorite show, we've got you covered.</p>
            <h6 className=" text-xl font-bold font-body text-white mt-4 mb-4">Get in touch:</h6>
            <p className="text-white font-body">Have a question, suggestion, or just want to say hello? We'd love to hear from you! Drop us a line through our Mail <a href="mailto:yafasabb@gmail.com" className="text-blue-500 hover:text-blue-700 font-body">yafasabb@gmail.com</a> or contact form, and let's chat about all things TV.</p>

            <h4 className="text-xl font-body text-white mt-4">Thanks for stopping by, and welcome to the WatchWave family. Let the TV adventures begin!</h4>
        </section>

        {/* footer */}
        <footer class="bg-gray-800 text-white py-5 px-6 h-16 ">
            <div class="container mx-auto flex items-center">
            <p class="text-sm font-body">&copy; 2024 WatchVave</p>
            </div>
        </footer>
        </div>
    );
}

export default About;