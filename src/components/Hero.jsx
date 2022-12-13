import React from 'react'
import heroimage from '../assets/hero image.png'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function Hero() {
  return (
    <div className='w-full h-screen  flex flex-col justify-between bg-blue '>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto mb-40'>
          <Fade left>
           <div className='flex flex-col justify-center md:items-start w-full px-10 py-20 shadow-2xl  bg-white'>
                <h1 className='font-bold text-36 '>You are on the right place.</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis auctor, 
                    lobortis ipsum at, dignissim lectus. Donec iaculis gravida libero et suscipi</p>
                    
               <button className='py-3 px-20 sm:w-[60%]  my-4  text-white bg-blue rounded-lg'>Learn More</button>
               
           </div>
           </Fade>
           <Zoom>
            <div>
                <img className='w-full px-10' src={heroimage}alt='/'/>
            </div>
            </Zoom>
            
        </div>
    </div>
  )
}

export default Hero