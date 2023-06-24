import React, { useState } from 'react';

const SearchOptions = ({ onSubmit, items }) => {
    // console.log(items);
    // const [term, setTerm] = useState('');

    const handleFormSubmit = (term) => {
        // e.preventDefault();
        onSubmit(term);
    };

    const options = [
        {
            id: 1,
            option: 'random'
        },
        {
            id: 2,
            option: 'cars'
        },
        {
            id: 3,
            option: 'travel'
        },
        {
            id: 4,
            option: 'nature'
        },
        {
            id: 5,
            option: 'abstract'
        },
        {
            id: 6,
            option: 'politics'
        },
        {
            id: 7,
            option: 'economy'
        },
        {
            id: 8,
            option: 'people'
        },
    ];

    return (
        <div className='mt-8 flex lg:justify-end'>
            <ul className='flex flex-wrap gap-4 lg:gap-[1rem] lg:w-[65%]'>
                {options.map((item) => (
                    <li
                        key={item.id}
                        className={`border rounded-md cursor-pointer text-[18px] lg:text-xl p-2 ${item.option === items ? 'bg-white text-slate-500' : 'text-white'
                            }`}
                        onClick={(e) => { // Fix: Define e as a parameter
                            // setTerm();
                            handleFormSubmit(item.option);
                        }}
                    >
                        <h1>{item.option}</h1>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchOptions;

