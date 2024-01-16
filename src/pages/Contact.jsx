import React from "react";
import {Link , Navigate ,useNavigate} from 'react-router-dom';
import logo from '../../public/assets/logo3.png'

const Contact = () => {
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

        {/* contact from */}
        <section class="bg-white dark:bg-gray-900 ">
            <div class="py-6 lg:py-10 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-body text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p class=" lg:mb-10 font-light font-body text-center text-gray-500 dark:text-gray-400 sm:text-xl">Have any questions? Drop us a line.</p>
                <form action="#" class="space-y-6">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium font-body text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" class="shadow-sm font-body bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
                    </div>
                    <div>
                        <label for="subject" class="block font-body mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block font-body p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                    </div>
                        <div class="sm:col-span-2">
                        <label for="message" class="block font-body mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="block font-body p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5  font-body text-sm font-medium  bg-gray-700 text-center text-white rounded-lg bg-primary-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
            
        {/* footer */}
        <footer class="bg-gray-800 text-white py-5 px-6 h-16 ">
                <div class="container mx-auto flex items-center">
                    <p class="text-sm font-body font-bold">Copyright © 2023. All rights reserved.</p>
                </div>
        </footer>
        </div>
    );
};

export default Contact;