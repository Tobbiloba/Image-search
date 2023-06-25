import { useEffect, useState } from 'react'
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList';
import SearchOptions from './components/SearchOptions';
import ImageCount from './components/ImageCount';
// import './App.css'
function App() {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState('')
  const [pages, setPage] = useState(1)
  const handleSubmit = async (term) => {
    console.log(term)
    if (search != term) {
      setPage(1)
    }
    setSearch(term)
    const result = await searchImages(term, pages)
    setImages(result)

  }
  const nextPage = () => {
    if (pages >= images.total_pages) {

    } else {
      setPage(pages + 1)
    }

    // handleSubmit(search, pages)
  }
  const prevPage = () => {
    if (pages < 2) {

    } else {
      setPage(pages - 1)
      // handleSubmit(search, pages)
    }
  }
  useEffect(() => {
    handleSubmit(search, pages)
  }, [pages])
  useEffect(() => {
    handleSubmit('random')
  }, [])
  return (
    <div className="bg-slate-500 pb-[2rem]">
      <div className='flex px-[1.5rem] lg:px-[10%] lg:justify-between lg:py-[2rem] py-[1rem] md:px-[3.5rem] border flex-col flew-wrap bg-slate-800 text-white lg:flex-row'>
        <h1 className=' text-xl font-mono font-bold lg:text-3xl'>Image <span className='text-slate-600'>Finder</span></h1>
        <SearchBar onSubmit={handleSubmit} />
      </div>

      <div className='px-[1.5rem] lg:px-[10%] md:px-[3.5rem]'>
        <SearchOptions onSubmit={handleSubmit} items={search} />
        {/* <ImageCount onSubmit={handleSubmit} items={search} /> */}
        <div className='mt-[1rem] text-right text-white'>
          <h1 className='font-mono text-xl'>Page {pages} of {images.total_pages}</h1>
        </div>
        <ImageList images={images.results} />
        <div className='flex justify-between md:justify-center md:gap-[1.5rem] lg:text-[24px] font-mono text-white font-bold'>
          <button onClick={prevPage}>Prev</button>
          <button onClick={nextPage}>Next</button>

        </div>
      </div>


    </div>
  );
}

export default App;
