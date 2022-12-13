import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function Ourvalue() {
  return (
    <div className='w-full h-screen  flex flex-col justify-between mb-80 '>
       <h1 className=' text-left font-bold ml-20 mb-40 '>OUR VALUE</h1>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto mb-10'>
          <Fade left>
           <div className='flex flex-col justify-center md:items-start w-full px-10 '>
           
           <h1 className='font-bold text-36 md:mt-40  '>We’re as Dedicated to Our Employees as We Are to Our Clients</h1>
           
           </div>
           </Fade>
           <Zoom>
            <div>
                <div className='w-full my-32'>
                <div className='max-w-[1240px] mx-auto px-2'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-4'>
                <div className='flex'>
            <div>
              <div className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-32 text-blue'>Vigilance</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <div className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-32 text-blue'>Integrity</h3>
              <p className='text-15 pt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <div className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-32 text-blue'>Trust</h3>
              <p className='text-15 pt-2 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <div className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-32 text-blue'>Respect</h3>
              <p className='text-15 pt-2 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

                </div>
                    </div>
                </div>    
            </div>
            </Zoom>
            
        </div>
    </div>
  )
}

export default Ourvalue