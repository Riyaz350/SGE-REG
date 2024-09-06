import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import {Link }from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
const RegistrationsRow = ({registration}) => {
    const thStyle = "font-normal text-base"
    const {selectedRegistration, setSelectedRegistration} = useContext(AuthContext)
    const handleSearch=()=>{
       setSelectedRegistration(registration)
    }
    // const handleDelete=()=>{
    //     console.log('done')
    // }
    

    return (
        <tr className="border-b-[1px] font-thin border-gray-300 rounded-lg ">
            <th className={thStyle}>{registration?._id}</th>
            <th className={thStyle}>{registration.formData.firstName}{" "}{registration.formData.lastName}</th>
            <th className={thStyle}><p className="bg-[#e8e6fc] text-center rounded-lg text-[#887df3] font-semibold p-2">{registration?.cpMail.length >0 ? registration.cpName:'Not Assigned'}</p></th>
            <th className={thStyle}>{registration?.time}</th>
            <th>
                <ul className=" flex justify-center text-xl">
                    <Link to={`/singleRegistration/${registration?._id}`}   className="cursor-pointer" ><CiEdit /></Link>
                    {/* <li className="cursor-pointer" onClick={()=>handleDelete(registration._id)}><RiDeleteBin6Line /></li> */}
                </ul>
            </th>
            
        </tr>
    );
};

export default RegistrationsRow;