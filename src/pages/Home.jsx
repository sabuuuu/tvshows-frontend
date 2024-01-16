import React, { useState, useEffect } from 'react';
import Serie from './Serie';
import showsData from '../api/series';
import logo from '../../public/assets/logo3.png'
import {Link , Navigate ,useNavigate} from 'react-router-dom';

import axios from 'axios';
import {useData} from './DataContext';


const Home = () => {
    //pour chercher les series en utilisant les mots clés
    const [keywords, setKeywords] = useState('');
    // const [searchResults, setSearchResults] = useState([]);
    const {setSearchResults} = useData();
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
          const response = await axios.get(`http://localhost:5555/search`, {
            params: { keywords },
          });
          const data = response.data;
          setSearchResults(data);
          console.log(data);
        // Redirect to the search page with the results
            navigate('/search', { state: { data } });
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
    };
    const [randomShows, setRandomShows] = useState([]);

    //pour afficher 10 series aléatoirement
    useEffect(() => {
        const shuffledData = showsData.sort(() => Math.random() - 0.5);
    
        const first10RandomShows = shuffledData.slice(0, 10);
    
        setRandomShows(first10RandomShows);
    }, []); 

    return (
        <div className="bg-gray-900 min-h-screen">
            {/* page d'acceuil*/}
            <nav className="bg-gray-800 text-white h-16 py-4 px-6 flex items-center justify-between">
                {/* logo */}
                 <Link to="/"><img src={logo}  alt="Logo"/></Link>
                <ul class="flex items-center">
                <li class="mr-6 font-body"><Link to="/" class="hover:text-gray-300 font-body">Home</Link></li>
                <li class="mr-6 font-body"><Link to="/about" class="hover:text-gray-300 font-body">About</Link></li>
                <li class="mr-6 font-body"><Link to="/contact" class="hover:text-gray-300 font-body">Contact</Link></li>
                </ul>
            </nav>

            <div className="container mx-auto py-10 px-6">
            {/* search function */}
            <div className="mb-6">
                <div className="flex justify-center items-center justify-between">
                <h1 className="text-xl font-body font-bold text-white mb-4">Some Tv Shows :</h1>
                    <div className="relative text-gray-600 focus-within:text-gray-400">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button 
                                type="submit" 
                                class="p-1 focus:outline-none focus:shadow-outline"
                                onClick={handleSearch}>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                                    <path d="M21 21l-4.35-4.35"></path>
                                    <circle cx="11" cy="11" r="8"></circle>
                                </svg>
                            </button>
                        </span>
                        
                        <input 
                            type="search" 
                            name="q" 
                            class="py-2 px-2 text-sm font-body text-black bg-gray-200 rounded-md pl-10 focus:outline-none" 
                            placeholder="Search..." 
                            autoComplete="off"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}/>
                    </div>
                </div>
            </div>

                {/* grid of 10 shows , 2 rows 5 items in each*/}
                <div class="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-3 lg:grid-cols-5 lg:gap-3 sm:grid-cols-3">
                    {randomShows.map((serie) => (
                        <Serie 
                            key={serie.id} 
                            image={serie.image} 
                            title={serie.title} 
                        />
                    ))}
                </div>

            </div>

        {/* footer */}
        <footer class="bg-gray-800 text-white py-5 px-6 h-16 ">
            <div class="container mx-auto flex items-center">
            <p class="text-sm font-body">&copy; 2024 WatchVave</p>
            <ul class="flex ml-auto">
                <li><a href="#" class="hover:text-gray-300 font-body">Social Link</a></li>
            </ul>
            </div>
        </footer>
        </div>
    );
};

export default Home;