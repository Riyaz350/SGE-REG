import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import RegistrationsRow from "./RegistrationsRow";

const RegistrationList = () => {
    const [registrations, setRegistrations] = useState([])
    const [selectedRegistration, setSelectedRegistration] = useState([])
    console.log(registrations)
    const axiosPublic = useAxiosPublic()
    useEffect(()=>{
        axiosPublic.get('/registrations')
        .then(res=>setRegistrations(res.data))
    },[axiosPublic])
    return (
        <div className=" overflow-scroll no-scrollbar bg-white max-w-5xl mx-auto shadow-lg  min-h-screen">
            
                <div className="   bg-white w-full py-5 ">
                    <table className="table w-full overflow-x-scroll">
                        {/* head */}
                        <thead>
                            <tr className="text-xl font-medium">
                                <th>APPLICATION ID</th>
                                <th>STUDENT NAME</th>
                                <th>STATUS</th>
                                <th>DATE ADDED</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>

                        <tbody className="">
                            {
                                registrations.map(registration => <RegistrationsRow key={registration._id} registration={registration} setApplication={setSelectedRegistration}></RegistrationsRow>)
                            }
                        </tbody>

                    </table>
                </div>
            
        </div>
    );
};

export default RegistrationList;