import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const RegistrationDummy = () => {
    const [text, setText] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const form = useRef();
    const inputClass = "border-2 w-fit border-black border-opacity-30 rounded-lg"
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        // emailjs
        //     .sendForm(
        //         'service_2xxhd3m', 
        //         'template_mt9dggc', form.current, {
        //         publicKey: 'QnQYR25vUAQhCK0Rn',
        //     })
        //     .then(
        //         () => {
        //             console.log(form.current)
        //             console.log('SUCCESS!');
        //         },
        //         (error) => {
        //             console.log('FAILED...', error.text);
        //         },
        //     );
    };
    return (
        <div>
            <form className="flex flex-col gap-2 text-blue-500" ref={form} onSubmit={sendEmail}>
                <div className="flex gap-2">
                    <label>Name</label>
                    <input className={inputClass} type="text" name="user_name" />
                </div>
                <div className="flex gap-2">
                    <label>Emails</label>
                    <input className={inputClass} type="email" name="to_mail" />
                </div>
                <div className="flex gap-2">
                    <label>First Name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} className={inputClass} type="text" />
                </div>
                <div className="flex gap-2">
                    <label>Last Name</label>
                    <input onChange={(e) => setLastName(e.target.value)} className={inputClass} type="text" />
                </div>
                <div className="flex gap-2">
                    <label>text</label>
                    <input onChange={(e) => setText(e.target.value)} className={inputClass} type="text" />
                </div>
                <div className="flex gap-2">
                    <label>Message</label>
                    <textarea className={inputClass} value={`You have a meeting with ${firstName} ${lastName} at ${text} \n Please be on time`} name="message" />
                </div>
                <button className="bg-blue-500 w-fit text-lg text-white p-2  rounded-2xl" type="submit" value="Send">Send</button>
            </form>
        </div>
    );
};

export default RegistrationDummy;