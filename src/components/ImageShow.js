import React, { useEffect, useState } from 'react'

const ImageShow = ({ image }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false)
    const [imageUrls, setImageUrls] = useState([]);
    // console.log(isVisible)

    useEffect(() => {
        setImageUrls(image.urls)
    }, [])

    // console.log(imageUrls)


    return (
        <div className='' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {isVisible && <div className='absolute z-10 ml-[-1rem] mt-[0rem]' onClick={() => setShowDetails(true)}>
                <h1 className=' rounded-md font-mono text-slate-900 backdrop-blur-sm bg-white/30 border px-4 py-1' onClick={() => setIsVisible(false)}>Preview</h1>
            </div>}
            <img src={image?.urls.small} alt={image.alt_description} className='hover:scale-125 cursor-pointer' />
            {/* <h1 className='absolute mb-[0rem] ml-[1rem] rounded-md font-mono text-slate-800 backdrop-blur-sm bg-white/30 border px-4 py-1'>{image?.user.name}</h1> */}


            {showDetails && <div className=' fixed overflow-y-scroll left-0 top-[0rem] px-[1.5rem] py-[1.5rem]  border backdrop-blur-sm bg-black/90 h-[100vh] w-[100vw]'>
                <img src={image?.urls.small} alt={image.alt_description} className=' cursor-pointer h-[25rem]' />
                <p className='text-white text-xl font-mono capitalize'>{image.alt_description}</p>
                <div className='text-white mt-[2rem]'>
                    <div className='flex flex-row items-center  ' >
                        <img src={image?.user.profile_image.small} alt="profile" className='w-12 h-12' />
                        <h1 className='text-xl ml-[1rem] '>{image.user.name}</h1>
                    </div>

                    <p className='text-[18px] mt-[1rem] text-slate-600 font-mono'>About: <span className='text-[16px] text-white  font-sans'>{image.user.bio}</span></p>
                    <p className='text-[18px] mt-[1rem] text-slate-600 font-mono'>Location: <span className='text-[16px] text-white  font-sans'>{image?.user.location}</span></p>
                    <div className='mt-[1rem]'>
                        <h1 className='text-[18px] mt-[1rem] text-slate-600 font-mono'>Total Likes: <span className='text-[16px] text-white  font-sans'>{image?.user.total_likes}</span></h1>
                        <h1 className='text-[18px] mt-[1rem] text-slate-600 font-mono'>Total Collection: <span className='text-[16px] text-white  font-sans'>{image?.user.collection}</span></h1>
                        <h1 className='text-[18px] mt-[1rem] text-slate-600 font-mono'>Total Photos: <span className='text-[16px] text-white  font-sans'>{image?.user.total_photos}</span></h1>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mt-[1rem]'>Socials</h1>
                        <p className='text-[18px] mt-[1rem] text-slate-600 font-mono'>Twitter: <span className='text-[16px] text-white  font-sans'>{image.user.social.twitter_username}</span></p>
                        <p className='text-[18px] mt-[1rem] text-slate-600 font-mono'>Instagram: <span className='text-[16px] text-white  font-sans'>{image.user.social.instagram_username}</span></p>
                        <a href={image.user.social.portfolio_url} target='_blank' className=''>Portfolio</a>
                    </div>
                </div>

            </div>}
        </div>
    )
}

export default ImageShow