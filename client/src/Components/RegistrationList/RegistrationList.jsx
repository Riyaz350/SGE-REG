import { useEffect } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import RegistrationsRow from "./RegistrationsRow";
import useRegistrations from "../Hooks/useRegistrations";

const RegistrationList = () => {
    const [registrations, refetch] = useRegistrations()
    const regArray = [...registrations].reverse()
    

    // setTimeout(() => {
    //     refetch()
    // }, 1000);
    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch();
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [refetch]);
    
    // const [registrations, setRegistrations] = useState([])
    // const axiosPublic = useAxiosPublic()
    // useEffect(() => {
    //     axiosPublic.get('/registrations')
    //         .then(res => setRegistrations(res.data))
    
    // }, [])

    return (
        <div>
            {registrations ? <div className=" overflow-scroll no-scrollbar bg-white max-w-5xl mx-auto shadow-lg  min-h-screen">

                < div className="   bg-white w-full py-5 " >
                    <table className="table w-full overflow-x-scroll">
                        {/* head */}
                        <thead>
                            <tr className="text-xl font-medium">
                                <th>APPLICATION ID</th>
                                <th>STUDENT NAME</th>
                                <th>Counsellor</th>
                                <th>DATE ADDED</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>

                        {regArray ?
                            <tbody className="">
                                {
                                    regArray.map(registration => <RegistrationsRow key={registration._id} registration={registration} ></RegistrationsRow>)
                                }
                            </tbody> :
                            <span className="loading loading-spinner loading-lg"></span>
                        }

                    </table>
                </div >

            </div > :
                <div className=" max-w-5xl mx-auto  min-h-screen  bg-white flex items-center justify-center">
                    <span className=" loading loading-spinner loading-lg"></span>
                </div>}
        </div>
    );
};

export default RegistrationList;