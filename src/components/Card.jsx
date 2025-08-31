import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faLinktree } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/background.jpg';
import profilePhoto from '../assets/photo.jpeg';
import {motion} from 'motion/react'

const Card = (props) => {
  return (
    <motion.div 
    className="card bg-violet-950 rounded-4xl w-4/5 lg:h-4/5 xl:h-[95vh]
    h-[100vh] relative overflow-hidden shadow-2xl/50 shadow-slate-500 font-mono 2xl:w-1/3"
    drag
    dragDirectionLock="true"
    >
      <div className="absolute inset-0 bg-black rounded-t-4xl z-0 sm:h-1/4 h-1/5 bg-cover bg-no-repeat bg-center border-b-8 border-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="relative flex flex-col justify-around items-center text-white font-bold lg:p-10 p-7 gap-5 h-full z-10">
        <div 
          className="photo rounded-full lg:size-55 sm:size-50 xl:size-40 size-30 bg-cover bg-no-repeat bg-center border-white border-8"
          style={{ backgroundImage: `url(${profilePhoto})`}}></div>

        <ul className="flex flex-col gap-6 justify-center items-center">
          <li className='sm:text-2xl text-md'>{props.user}</li>
          <li className='sm:text-lg text-sm font-extralight'>{props.roles}</li>
          <li className='lg:text-xl/8 mt-4 text-lg'>{props.bio}</li>
          <li className='self-start lg:text-xl text-md font-medium'>{props.location}</li>
          <li className='self-start lg:text-xl text-md font-medium'>{props.skills}</li>
          <li className='lg:text-3xl text-xl flex justify-between w-4/5'>
              <motion.div
              className="card-1 rounded-lg flex justify-center items-center p-3"
              whileHover={{
                backgroundColor: '#0A66C2',
                transition: {duration: 0.5},
                y:-5,
              }}
              whileTap={{
                scale:0.8
              }}>
                <a href="https://www.linkedin.com/in/adrishikhar-chowdhury/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </motion.div>
              <motion.div 
              className="card-1 rounded-lg flex justify-center items-center p-3"
              whileHover={{
                backgroundColor: 'black',
                transition: {duration: 0.5},
                y:-5
              }}
              whileTap={{
                scale:0.8
              }}>
                <a href="https://github.com/AdrishikharChowdhury" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
              </motion.div>
              <motion.div 
              className="card-1 rounded-lg flex justify-center items-center p-3"
              whileHover={{
                backgroundColor: '#42e661',
                transition: {duration: 0.5},
                y:-5,
                color:'black'
              }}
              whileTap={{
                scale:0.8
              }}>
                <a href="https://linktr.ee/Adrishikhar" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinktree} />
                </a>
              </motion.div>
              <motion.div 
              className="card-1 rounded-lg flex justify-center items-center p-3"
              whileHover={{
                backgroundColor: '#cc39a4',
                transition: {duration: 0.5},
                y:-5
              }}
              whileTap={{
                scale:0.8
              }}>
                <a href="https://www.instagram.com/adrishikharchowdhury/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </motion.div>
              <motion.div 
              className="card-1 rounded-lg flex justify-center items-center p-3"
              whileHover={{
                backgroundColor: '#03A9F4',
                transition: {duration: 0.5},
                y:-5
              }}
              whileTap={{
                scale:0.8
              }}>
                <a href="https://adrishikharchowdhury.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </motion.div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Card;
