import { Link } from 'react-router-dom';
import logo from '../../assets/Group.svg'
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
const LandingPage = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut =()=>{
        logOut()
    }
    return (
        <div className='max-w-5xl mx-auto bg-white shadow-lg min-h-screen'>
            <div className='flex  gap-5 items-start justify-center   pt-10'>
                <img className='pt-1 lg:pt-2 w-[40px] lg:w-fit' src={logo} alt="" />
                <div className=" my-auto ">
                    <h1 className='text-center font-semibold text-xl md:text-3xl lg:text-5xl'>Shabuj Global Education</h1>
                    <p className='text-end font-medium text-xs md:text-base lg:text-xl'>Dhanmondi Branch</p>
                </div>
            </div>

            <div className='flex flex-col px-10 space-y-5 w-full items-center my-auto mt-20 text-xl md:text-2xl lg:text-3xl text-center text-white font-medium'>
                <Link to='/registrations' className='bg-blue-500 py-3 mx-5 rounded-lg   w-full'>Registrations</Link>
                <Link to='/studentForm' className=' bg-blue-500 py-3 mx-5 rounded-lg w-full'>Student Form</Link>
                {user ?
                    <button  onClick={()=>handleLogOut()} className=' bg-blue-500 py-3 mx-5 rounded-lg w-full'>Log out</button> :
                    <Link to='/logIn' className=' bg-blue-500 py-3 mx-5 rounded-lg w-full'>Log In</Link>
                }
                {/* <div className='bg-blue-500 py-3 mx-5 rounded-lg'>
                    <button className='  w-full'>Registrations</button>
                </div> */}
            </div>
        </div>
    );
};

export default LandingPage;