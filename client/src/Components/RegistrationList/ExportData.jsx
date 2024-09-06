import { exportToExcel } from 'react-json-to-excel';

const ExportData = ({registrations}) => {
    const data = registrations?.map(registration =>({
        Name:registration.formData.firstName + " " + registration.formData.lastName,
        Mobile: registration.formData.mobileNo,
        Email:registration.formData.email,
        Academic_Qualification:registration.formData.academic,
        Interested_Country:registration.formData.country,
        Interested_University:registration.formData.university,
        Interested_Course:registration.formData.course,
        Counsellor_Assigned:registration.cpName? registration.cpName : "Not Assigned"

    }))
    
    return (
        <div className='w-full flex justify-center lg:justify-end lg:pr-5'>
            <button className='bg-blue-500 text-white font-bold p-2 rounded-2xl   ' onClick={() => exportToExcel(data, 'downloadfilename')}>
                Download
            </button>
        </div>
    );
};

export default ExportData;