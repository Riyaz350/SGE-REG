import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Registration = () => {
    const form = useRef();
    const inputClass = "border-2 w-fit border-black border-opacity-30 rounded-lg"
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2xxhd3m', 'template_mt9dggc', form.current, {
                publicKey: 'QnQYR25vUAQhCK0Rn',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <form className="flex flex-col gap-2 text-blue-500" ref={form} onSubmit={sendEmail}>
                <div className="flex gap-2">
                    <label>Name</label>
                    <input className={inputClass} type="text" name="user_name" />
                </div>
                <div className="flex gap-2">
                    <label>Email</label>
                    <input className={inputClass} type="email" name="user_email" />
                </div>
                <div className="flex gap-2">
                    <label>Message</label>
                    <textarea className={inputClass} name="message" />
                </div>
                    <button className="bg-blue-500 w-fit text-lg text-white p-2  rounded-2xl" type="submit" value="Send">Send</button>
            </form>
        </div>
    );
};

export default Registration;