import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Form2 from '../Registration2/Form2';

const SingleRegistration = () => {
    const [registration, setRegistration] = useState({})
    const axiosPublic = useAxiosPublic()
    const { id } = useParams()
    const form = useRef();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobileNo, setMobileNO] = useState('')
    const [email, setEmail] = useState('')
    const [academic, setAcademic] = useState('')
    const [course, setCourse] = useState('')
    const [university, setUniversity] = useState('')
    const [selected, setSelected] = useState(0)
    const [errors, setErrors] = useState([])
    const [firstFormData, setFirstFormData] = useState("")
    const message = `You have meeting with  ${firstName && firstName} ${lastName && lastName}`




    const sendEmail = () => {
        alert('mail sent')
    }
    useEffect(() => {
        axiosPublic.get('/registrations')
            .then(res => setRegistration(res.data.find(reg => reg._id == id)))
        if (Object.keys(registration).length > 0) {
            setFirstName(registration.formData.firstName);
            setLastName(registration.formData.lastName);
            setMobileNO(registration.formData.mobileNo);
            setEmail(registration.formData.email);
            setAcademic(registration.formData.academic);
            setCourse(registration.formData.course);
            setUniversity(registration.formData.university);
        } else {
            console.log('done')
        }
    }, [axiosPublic, id, registration, firstName])

    return (
        <div className='max-w-5xl mx-auto'>
            {Object.keys(registration).length > 0 ?
                <div className='max-w-5xl mx-auto'>
                    <div className="flex flex-col px-10 bg-white shadow-lg min-h-screen">
                        <div>
                            <div className='flex  gap-5 items-start justify-center mt-10'>
                                {/* <img className='pt-1 lg:pt-2 w-[40px] lg:w-fit' src={logo} alt="" /> */}
                                <div className=" my-auto ">
                                    <h1 className='text-center font-semibold text-xl md:text-3xl lg:text-5xl'>Shabuj Global Education</h1>
                                    <p className='text-end font-medium text-xs md:text-base lg:text-xl'>Dhanmondi Branch</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-full my-auto'>
                            <div className="grid  gap-5 ">
                                <div className='flex gap-5'>
                                    <Form2 int={1} label='Student First Name' state={firstName} setState={setFirstName} placeholder='John' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} />
                                    <Form2 int={2} label='Student Last Name' state={lastName} setState={setLastName} placeholder='Doe' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} />
                                </div>
                                <Form2 int={3} label='Mobile No:' state={mobileNo} setState={setMobileNO} placeholder='+8801---------' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} />
                                <Form2 int={4} label='Email' state={email} setState={setEmail} placeholder='Email' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'email'} />
                                <Form2 int={5} label='Academic Qualification' state={academic} setState={setAcademic} placeholder='Intermediate' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} />
                                <Form2 int={6} label={`In which course you're interested?`} state={course} setState={setCourse} placeholder='CSE/English/Literature' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} />
                                <Form2 int={7} label={'Interested University'} state={university} setState={setUniversity} placeholder='Oxford/Angela Ruskin' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} />
                            </div>
                            <form ref={form} onSubmit={sendEmail} action="">
                                <div className="flex gap-2">
                                    <textarea className='hidden' value={`${message} \n Please be on time`} name="message" />
                                </div>
                                <button type="submit" value="Send" className="btn w-full  lg:ml-auto btn-primary text-base lg:text-lg text-white bg-blue-500 rounded-xl p-2 my-10  font-bold  ">Submit</button>

                            </form>
                        </div>

                    </div>
                </div>
                :
                <span className="loading loading-dots loading-lg"></span>


            }
        </div>
    );
};

export default SingleRegistration;