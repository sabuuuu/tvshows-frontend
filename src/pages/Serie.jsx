import React from 'react';


const Serie = (props) => {
    return (
        <div className='w-full xl:w-1/6 xl:w-3/4 lg:w-full md:w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div key={props.id}>
                <img src={props.image} className='rounded-t-lg'/>
                <h3 className='font-body text-white mb-2 mt-2 text-xl tracking-tight text-center'>{props.title}</h3>
            </div>
        </div>
    )
}

export default Serie;