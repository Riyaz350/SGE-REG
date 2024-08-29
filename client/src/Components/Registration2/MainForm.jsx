import  { useEffect, useState } from 'react';
import Form from './Form';
import Form2 from './Form2';

const MainForm = ( ) => {
  const [selected, setSelected] = useState(0)
  const [serial, setSerial] = useState(0)
    const [errors, setErrors] = useState([])
    const [country, setCountry] = useState("")
    const [season, setSeason] = useState("")
    const [typeOfCourse, setTypeOfCourse] = useState("")
    const [firstName, setFirstName] = useState('')
    const [applicantCountry, setApplicantCountry] = useState("")
    const [firstFormData, setFirstFormData] = useState("")
    
    const countries = ['Bangladesh', 'India', 'Nigeria', 'Bhutan', 'Ghana', 'Sri Lanka']
    const countries2 = ['UK', 'USA','Germany','New Zealand', 'Australia','UAE']
    const intake = ['September 2025', 'July 2026']
    const typesOfCourses = ['Undergraduate', 'Postgraduate']

    const filter = (data,category) => {
        return [...new Set(data.map((uni) => uni?.[category]))];
      }

    

      const addError = (e)=>{
        setErrors(prevErrors => [...prevErrors, e]);
    }

      const handleNext =()=>{
        if(!country){
          addError(1)
        } if(!applicantCountry){
          addError(2)
        } if(!season){
          addError(3)
        } if(!typeOfCourse){
          addError(4)
        } if(!uni){
          addError(5)
        } if(!course){
          addError(6)
        }else{
          setSerial(serial+1)
        }
      }

      useEffect(()=>{
        const data = {country:country, season:season,  typeOfCourse:typeOfCourse, applicantCountry:applicantCountry, firstName: firstName}
        setFirstFormData(data)
      },[ setFirstFormData,applicantCountry, country,  season, typeOfCourse, firstName])

    return (
        <div className='max-w-5xl mx-auto'>
            <div className="flex flex-col px-10 bg-white shadow-lg ">
                    <h1 className="text-xl my-5">New Application</h1>
                    <div  className="grid  gap-5">
                        <Form int={1} label='Country to Apply' state={country} setState={setCountry}  dataArray={countries2} selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} />
                        <Form int={2} label='Country of Student Passport' state={applicantCountry}  setState={setApplicantCountry}  dataArray={countries} selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors}/>
                        <Form int={4} label='Course Type' state={typeOfCourse}  setState={setTypeOfCourse} dataArray={typesOfCourses} selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors}/>
                        <Form int={3} label='Intake' state={season}  setState={setSeason} dataArray={intake}  selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors}/>
                        <Form2 label='Student First Name' state={firstName} setState={setFirstName} placeholder='John' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors}/>

                    <button onClick={handleNext} className="btn w-fit  lg:ml-auto btn-primary text-lg text-white  font-bold mt-5">Next</button>
                    </div>

                </div>
        </div>
    );
};

export default MainForm;