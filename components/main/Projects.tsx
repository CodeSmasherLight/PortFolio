import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center py-20'>
         <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
             My Projects
         </h1>
         <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
          <ProjectCard 
           src='/NextWebsite.png'
           title='Modern Next.js Portfolio'
           description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci quas nobis mollitia?'
          />
          <ProjectCard 
           src='/CardImage.png'
           title='Interative website card'
           description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci quas nobis mollitia?'
          />
          <ProjectCard 
           src='/SpaceWebsite.png'
           title='spaced themed website'
           description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci quas nobis mollitia?'
          />
          
         </div>
    </div>
  )
}

export default Projects