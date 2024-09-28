import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Form2 from '../Registration2/Form2';
import Form from './Form';
import logo from '../../assets/Group.svg';
import Swal from 'sweetalert2';
import ChangeForm from './ChangeForm';
import ChangedForm2 from './ChangedForm2';
import Modal from '../Modal';


const SingleRegistration = () => {
    const [registration, setRegistration] = useState({});
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const form = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNo, setMobileNO] = useState('');
    const [email, setEmail] = useState('');
    const [academic, setAcademic] = useState('');
    const [course, setCourse] = useState('');
    const [university, setUniversity] = useState('');
    const [country, setCountry] = useState('');

    const [changedFormData, setChangedFormData] = useState({});
    const [changedCountry, setChangedCountry] = useState('');
    const [changedCourse, setChangedCourse] = useState('');
    const [changedUniversity, setChangedUniversity] = useState('');
    const [selected, setSelected] = useState(0);
    const [errors, setErrors] = useState([]);
    const [counsellor, setCounsellor] = useState({
        "counsellorMail": 'raen@shabujglobal.org',
        "counsellorName": 'Rajen Kumar Deb'
    });
    const toMail = counsellor?.counsellorMail;
    const toName = counsellor?.counsellorName;

    const CPs = [
        {
            "counsellorMail": 'raen@shabujglobal.org',
            "counsellorName": 'Rajen Kumar Deb'
        },
        {
            "counsellorMail": 'applications.bd@shabujglobal.com',
            "counsellorName": 'Touhidur Rahman'
        },
        {
            "counsellorMail": 'applyhudds@shabujglobal.com',
            "counsellorName": 'Abu Sayef Khan'
        },
        {
            "counsellorMail": 'internationaladvice@shabujglobal.com',
            "counsellorName": 'Jalish Mahmud'
        },
        {
            "counsellorMail": 'amina@shabujglobal.org',
            "counsellorName": 'Amina Sultana Akhy'
        },
        {
            "counsellorMail": 'ananna@shabujglobal.org',
            "counsellorName": 'Kmrun Nahar Ananna'
        },
        {
            "counsellorMail": 'asmeta@shabujglobal.org',
            "counsellorName": 'Afsari Rayhan Asmeta'
        },
        {
            "counsellorMail": 'sumaiya@shabujglobal.org',
            "counsellorName": 'Sumaiya Azad Sadiya'
        },
        {
            "counsellorMail": 'sahil@shabujglobal.org',
            "counsellorName": 'Mansibul Alam Sahil'
        },
        {
            "counsellorMail": 'shakhawat@shabujglobal.org',
            "counsellorName": 'Shakhawat Hossain'
        },
        {
            "counsellorMail": 'shakil@shabujglobal.org',
            "counsellorName": 'Shakil Ahmed'
        },
        {
            "counsellorMail": 'debora.setu@shabujglobal.org',
            "counsellorName": 'Debora Setu'
        },
        {
            "counsellorMail": 'zim@shabujglobal.org',
            "counsellorName": 'Jannatul Ferdose Zim'
        },
        {
            "counsellorMail": 'moumita@shabujglobal.org',
            "counsellorName": 'Moumita Mustari Promi'
        },
        {
            "counsellorMail": 'absar@shabujglobal.org',
            "counsellorName": 'Abrarur aakter shuvon'
        },
    ];

    const countries = [
        {
            "counsellorMail": 'UK',
            "counsellorName": 'UK'
        },
        {
            "counsellorMail": 'USA',
            "counsellorName": 'USA'
        },
        {
            "counsellorMail": 'Canada',
            "counsellorName": 'Canada'
        },
        {
            "counsellorMail": 'Australia',
            "counsellorName": 'Australia'
        },
        {
            "counsellorMail": 'New Zealand',
            "counsellorName": 'New Zealand'
        },
        {
            "counsellorMail": 'Germany',
            "counsellorName": 'Germany'
        },
    ];

    const message = `You have a meeting with ${firstName && firstName} ${lastName && lastName} \n 
                    Phone no: ${mobileNo} \n
                    Email: ${email} \n
                    Academic qualification: ${academic} \n
                    Interested country: ${changedCountry ? changedCountry.counsellorName : country.counsellorName} \n
                    Interested University: ${changedUniversity ? changedUniversity : university} \n
                    Interested course: ${changedCourse ? changedCourse : course} \n
                    `;

    const sendEmail = (e) => {
        e.preventDefault();
        if (changedCountry || changedCourse || changedUniversity) {
            const data = { firstName: firstName, lastName: lastName, mobileNo: mobileNo, email: email, country: changedCountry ? changedCountry : country, academic: academic, course: changedCourse ? changedCourse : course, university: changedUniversity ? changedUniversity : university };
            setChangedFormData(data);
            const updateRegistration = { formData: data, counsellorName: toName, counsellorMail: toMail };
            axiosPublic.patch(`registrationPatchStatus/${registration?._id}`, updateRegistration)
                .then(res => {
                    if (res.status === 200 && firstName && lastName && toName && toMail && mobileNo && email && academic && changedCountry || country && changedUniversity || university && changedUniversity || course) {
                        Swal.fire({ position: "top-end", icon: "success", title: "An email has been sent to the counsellor", showConfirmButton: false, timer: 1500 });
                        const mailBody = {
                            name: toName, to: toMail, mail: data,
                            subject: 'You have a new meeting with a student.'
                        }
                        axiosPublic.post('/sendMails', mailBody)
                            .then(res => {
                                if(res.status == 200){
                                    Swal.fire({ position: "top-end", icon: "success", title: "Welcome to Shabuj Global", showConfirmButton: false, timer: 1500 });
                            }}
                        )

                        // emailjs.sendForm(
                        //     'service_zr7yj3k',
                        //     'template_7lxly9a', form.current, {
                        //         publicKey: 'xt0U9Dqc3b-jQFCLo',
                        //     })
                        //     .then(() => {
                        //         setShowModal(true); // Show the modal
                        //     });
                    }
                });
        } else {
            const updateRegistration = { formData: registration?.formData, counsellorName: toName, counsellorMail: toMail };
            axiosPublic.patch(`registrationPatchStatus/${registration?._id}`, updateRegistration)
                .then(res => {
                    if (res.status === 200) {
                        Swal.fire({ position: "top-end", icon: "success", title: "An email has been sent to the counsellor", showConfirmButton: false, timer: 1500 });

                        const data = { firstName: firstName, lastName: lastName, mobileNo: mobileNo, email: email, country: changedCountry ? changedCountry : country, academic: academic, course: changedCourse ? changedCourse : course, university: changedUniversity ? changedUniversity : university };
                        const mailBody = {
                            name: toName, to: toMail, mail: data,
                            subject: 'You have a new meeting with a student.'
                        }
                        axiosPublic.post('/sendMails', mailBody)
                        
                    }
                });
        }
    };

    useEffect(() => {
        axiosPublic.get('/registrations')
            .then(res => setRegistration(res.data.find(reg => reg._id === id)));
        if (Object.keys(registration).length > 0) {
            setFirstName(registration.formData.firstName);
            setLastName(registration.formData.lastName);
            setMobileNO(registration.formData.mobileNo);
            setEmail(registration.formData.email);
            setAcademic(registration.formData.academic);
            setCourse(registration.formData.course);
            setUniversity(registration.formData.university);
            setCountry(registration.formData.country);
        }
    }, [axiosPublic, id, registration]);

    return (
        <div className='max-w-5xl mx-auto'>
            {Object.keys(registration).length > 0 ?
                <div className='max-w-5xl mx-auto'>
                    <div className="flex flex-col px-10 bg-white shadow-lg min-h-screen">
                        <div>
                            <div className='flex  gap-5 items-start justify-center mt-10'>
                                <img className='pt-1 lg:pt-2 w-[40px] lg:w-fit' src={logo} alt="" />
                                <div className=" my-auto ">
                                    <h1 className='text-center font-semibold text-xl md:text-3xl lg:text-5xl'>Shabuj Global Education</h1>
                                    <p className='text-end font-medium text-xs md:text-base lg:text-xl'>Dhanmondi Branch</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-full my-auto'>
                            <div className="grid  gap-5 ">
                                <div className='flex gap-5'>
                                    <Form2 int={1} label='Student First Name' state={firstName} setState={setFirstName} placeholder='John' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} value={firstName} />
                                    <Form2 int={2} label='Student Last Name' state={lastName} setState={setLastName} placeholder='Doe' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} value={lastName} />
                                </div>
                                <Form2 int={3} label='Mobile No:' state={mobileNo} setState={setMobileNO} placeholder='+8801---------' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} value={mobileNo} />
                                <Form2 int={4} label='Email' state={email} setState={setEmail} placeholder='Email' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'email'} value={email} />
                                <Form2 int={5} label='Academic Qualification' state={academic} setState={setAcademic} placeholder='Intermediate' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} value={academic} />
                                <ChangeForm int={6} label='Select a country' state={country} setState={setChangedCountry} dataArray={countries} selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} changedCountry={changedCountry} />
                                <ChangedForm2 int={7} label={`In which course you're interested?`} state={course} setState={setChangedCourse} placeholder='CSE/English/Literature' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} value={course} changedValue={changedCourse} />
                                <ChangedForm2 int={8} label={'Interested University'} state={university} setState={setChangedUniversity} placeholder='Oxford/Angela Ruskin' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} value={university} changedValue={changedUniversity} />
                                <Form int={9} label='Select a counsellor' state={counsellor} setState={setCounsellor} dataArray={CPs} selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} />
                            </div>
                            <form ref={form} onSubmit={sendEmail} action="">
                                <div className="gap-2 hidden">
                                    <label>Emails</label>
                                    <input value={toName} type="text" name="to_name" />
                                </div>
                                <div className="gap-2 hidden">
                                    <label>Emails</label>
                                    <input value={toMail} type="email" name="to_mail" />
                                </div>
                                <div className="gap-2 hidden">
                                    <textarea className='hidden' value={`${message} \n Please be on time`} name="message" />
                                </div>
                                <button type="submit" value="Send" className="btn w-full lg:ml-auto btn-primary text-base lg:text-lg text-white bg-blue-500 rounded-xl p-2 my-10 font-bold">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                :
                <span className="loading loading-dots loading-lg"></span>
            }
            <Modal showModal={showModal} closeModal={() => setShowModal(false)} message={`The application has been assigned to our counselor ${toName} by email.`} />
        </div>
    );
};

export default SingleRegistration;
