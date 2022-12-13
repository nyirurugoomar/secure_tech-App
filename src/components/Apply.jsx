import React from 'react'
import imgjoin from '../assets/join_img.png'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
function Apply() {
  return (
    <div className='w-full h-screen  flex flex-col justify-between mt-20 '>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto mb-40'>
          <Fade left>
           <div className='flex flex-col justify-center md:items-start w-full px-10 py-20'>
           <h1 className='font-bold text-36 '>Join the TeamThat ValuesTeamwork</h1>
           <p>If you want a workplace where employees have each other's backs, Secure Tech is for you. We have immediate openings for a wide range of professionals, from armed security specialists to back-office operations experts.</p>
                {/* <h1 className='font-bold text-36 '>You are on the right place.</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis auctor, 
                    lobortis ipsum at, dignissim lectus. Donec iaculis gravida libero et suscipi</p> */}
                    
   
               <button class="bg-blue  text-white font-bold py-3  w-40 my-20 rounded-xl">
                 Let’s Talk
               </button>
               
           </div>
           </Fade>
           <Zoom>
            <div>
                <img className='w-full px-10 ' src={imgjoin}alt='/'/>
            </div>
            </Zoom>
            
        </div>
    </div>
  )
}

export default Apply