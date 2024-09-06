import { Link } from 'react-router-dom';
import logo from '../../assets/Group.svg';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';

const LandingPage = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className='max-w-5xl mx-auto bg-gradient-to-r from-white to-gray-50 shadow-lg min-h-screen flex flex-col justify-between'>
      <header className='flex gap-5 items-center justify-center pt-20'>
        <img className='w-12 lg:w-16' src={logo} alt="Shabuj Global Education Logo" />
        <div className="text-center">
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800'>Shabuj Global Education</h1>
          <p className='text-lg md:text-xl lg:text-2xl text-gray-500'>Dhanmondi Branch</p>
        </div>
      </header>

      <main className='flex flex-col items-center text-center space-y-8 px-10'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700'>
          Empowering Your Global Education Journey
        </h2>
        <p className='text-gray-600 text-base md:text-lg lg:text-xl'>
          At Shabuj Global Education, we guide you through every step of your academic journey. Whether you're registering for a course or filling out your student form, we're here to support you.
        </p>
        <nav className='w-full flex flex-col space-y-5'>
          <Link to='/registrations' className='bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded-lg w-full text-lg md:text-xl lg:text-2xl font-medium'>
            Registrations
          </Link>
          <Link to='/studentForm' className='bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded-lg w-full text-lg md:text-xl lg:text-2xl font-medium'>
            Student Form
          </Link>
          {user ? (
            <button 
              onClick={handleLogOut} 
              className='bg-red-600 hover:bg-red-700 transition-colors text-white py-3 rounded-lg w-full text-lg md:text-xl lg:text-2xl font-medium'>
              Log Out
            </button>
          ) : (
            <Link to='/logIn' className='bg-green-600 hover:bg-green-700 transition-colors text-white py-3 rounded-lg w-full text-lg md:text-xl lg:text-2xl font-medium'>
              Log In
            </Link>
          )}
        </nav>
      </main>

      <footer className='bg-gray-100 py-4 text-center text-gray-500 text-sm'>
        © 2024 Shabuj Global Education. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
