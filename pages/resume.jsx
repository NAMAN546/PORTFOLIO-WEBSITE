import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Naman | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center mt-5'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Naman Tyagi</h2>
          <div className='flex'>
            <a
              href=' https://www.linkedin.com/in/naman-tyagi-73980b1b9/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/NAMAN546'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
             Web Development{' '}
              <span className='px-1'>|</span>Problem Solving
            </p>
          </div>
        </div>
        <p>
        Analytical, innovative, and motivated web development professional with a goal of securing a responsible Career 
        opportunity to fully utilize my training and skills, while making a significant contribution to the role assigned 
        to me. I am enthusiastic to contribute on new products and ideas and I possess ambition, dedication, and drive to
        fully succeed in the role I work in.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> Web Developement
            <span className='px-2'>|</span> Java(J2SE) <span className='px-0'></span>
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span> CSS  
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind CSS
            <span className='px-2'>|</span> NodeJS
            <span className='px-2'>|</span>MySQL
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Object Oriented Programming
            <span className='px-2'>|</span>Data Structures & Algorithms
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
        Projects 
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            CRYPTOBASE
            </span>
        </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
            Built this Crypto Application with React JS (styled with Tailwind CSS) for the front-end and a Firebase back-end.
            </li>
            <li>
            I used the Coin Gecko API for all of the realtime data display on the app.
            </li>
            <li>
            Added functionality in this project includes user authentication and firestore, a cloud-storage database.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>EXPENSE TRACKER APPLICATION</span>
           </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
            This is an Expense Tracker Application. It uses functional
components with hooks and the context API.
            </li>
            <li>
            It Displays transaction items in DOM. Shows balance, expense and
Income totals.
            </li>
            <li>
            We can Add new transaction and reflect them in total , delete
items from DOM and persist it to local storage.
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>OPEN-BOARD</span>
           </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
             Open-Board is an interactive Whiteboard application designed
using Vanilla JavaScript, HTML and CSS.
            </li>
            <li>
             Created Undo-Redo features for the board using Arrays as stack
by storing Positions, Colors and width of the Pen and Eraser.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
