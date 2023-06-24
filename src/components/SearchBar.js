import React, { useState, useEffect } from 'react'
// import './SearchBar.css'
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
    // console.log(term)
    return (
        <div className='mt-[1rem] lg:mt-0 lg:w-[70%]'>
            <form onSubmit={handleFormSubmit} className='md:flex'>
                <SearchIcon className='absolute mt-[.3rem] md:mt-[.75rem]' style={{ color: '#718096', width: '3rem', }} />
                <input onChange={handleInputChange} value={term} placeholder='Search...' className='w-[100%] pl-[2.5rem] text-slate-600 py-[.3rem] rounded-sm h-fit md:h-[3rem] outline-none ' />
                <button className='mt-[.75rem] md:mt-0  px-4 py-2 lg:py-0 bg-slate-500 cursor-pointer hover:bg-slate-800 w-[10rem]'><CenterFocusWeakIcon className='mr-2' />Generate</button>
            </form>

            {/* <div className='border'>

            </div> */}

        </div>
    )
}

export default SearchBar