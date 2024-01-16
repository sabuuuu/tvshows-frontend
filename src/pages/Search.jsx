import React from 'react';
import { useLocation} from 'react-router-dom';
import showsData from '../api/series';
import logo from '../../public/assets/logo3.png'
import {Link } from 'react-router-dom';

const tvShowMap = new Map(showsData.map((show) => [show.name, show]));


const Search = () => {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <div className="bg-gray-900 min-h-screen">
        <nav className="bg-gray-800 text-white h-16 py-4 px-6 flex items-center justify-between">
            {/* logo */}
            <Link to="/"><img src={logo} alt="Logo"/></Link>
            <ul class="flex items-center">
            <li class="mr-6 font-body"><Link to="/" class="hover:text-gray-300 font-body">Accueil</Link></li>
            <li class="mr-6 font-body"><a href="" class="hover:text-gray-300">A propos</a></li>
            <li class="mr-6 font-body"><a href="" class="hover:text-gray-300">Contacte</a></li>
            </ul>
        </nav>

        <div className="container mx-auto py-10 px-6">
            <h1 className="text-xl font-body font-bold text-white mb-4">Résultats de la recherche :</h1>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-3 lg:grid-cols-5 lg:gap-3 sm:grid-cols-3">
                {data.map((result) => {
                    const show = tvShowMap.get(result.tvShowName);
                    if (show) {
                    return (
                        <div key={result.tvShowName} className='w-full xl:w-1/6 xl:w-3/4 lg:w-full md:w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                        <img src={show.image} alt={show.name} className='rounded-t-lg'/>
                        <h2 className='font-body text-white mb-2 mt-2 text-xl tracking-tight text-center'>{result.tvShowName}</h2>
                        </div>
                    );
                    } else {
                    return <p key={result.tvShowName}>No image or data found for this show.</p>;
                    }
                })}
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

export default Search;
