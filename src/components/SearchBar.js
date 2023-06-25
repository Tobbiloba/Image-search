import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('')
    const handleFormSubmit = (e) => {
        e.preventDefault()
        onSubmit(term)
        setTerm('')
    }
    const handleInputChange = (e) => {
        setTerm(e.target.value)
    }
    return (
        <div className='lg:px-[10%] md:[3.5rem] px-[1.5rem] bg-slate-200 lg:mt-0 lg:w-[100%] lg:flex  py-[2rem] justify-between'>
            <h1 className=' text-2xl font-mono font-bold lg:text-3xl'>Image <span className='text-slate-600'>Finder</span></h1>
            <form onSubmit={handleFormSubmit} className='md:flex mt-[1.5rem] lg:justify-between lg:mt-0 lg:w-[70%]'>

                <SearchIcon className='absolute mt-[.3rem] md:mt-[.75rem] ' style={{ color: '#718096', width: '3rem', }} />
                <input onChange={handleInputChange} value={term} placeholder='Search...' className='rounded-xl w-[100%] pl-[2.5rem] text-slate-600 py-[.3rem] lg:w-[70%] h-fit md:h-[3rem] outline-none ' />
                <button className='mt-[.75rem] rounded-xl md:mt-0  px-4 py-2 text-white font-mono lg:py-0 bg-slate-500 cursor-pointer hover:bg-slate-800 w-[10rem]'><CenterFocusWeakIcon className='mr-2' style={{ color: 'white' }} />Generate</button>
            </form>


        </div>
    )
}

export default SearchBar
