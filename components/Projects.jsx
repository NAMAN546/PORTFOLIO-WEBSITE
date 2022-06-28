import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import etImg from '../public/assets/projects/et.png';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import excelImg from '../public/assets/projects/excel.jpg'
import portfolioImg from '../public/assets/projects/portfolio.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Expense Tracker'
            backgroundImg={etImg}
            projectUrl='/expenseTracker'
            tech='React JS'
          />
          <ProjectItem
            title='My Excel'
            backgroundImg={excelImg}
            projectUrl='/excel'
            tech='React JS'

          />
          <ProjectItem
            title='Portfolio Website'
            backgroundImg={portfolioImg}
            projectUrl='/portfolio'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
