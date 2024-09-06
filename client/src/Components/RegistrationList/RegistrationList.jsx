import { useEffect } from "react";
import RegistrationsRow from "./RegistrationsRow";
import useRegistrations from "../Hooks/useRegistrations";
import ExportData from "./ExportData";

const RegistrationList = () => {
    const [registrations, refetch] = useRegistrations()
    const regArray = [...registrations].reverse()

    console.log(registrations)
    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch();
        }, 1000);

        return () => clearInterval(intervalId);
    }, [refetch]);



    return (
        <div>

            <div>
                {registrations ? <div className=" overflow-scroll no-scrollbar bg-white max-w-5xl mx-auto shadow-lg  min-h-screen">

                    < div className="   bg-white w-full py-5 " >
                        <div>
                            <ExportData registrations={registrations} />
                        </div>
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
        </div>
    );
};

export default RegistrationList;