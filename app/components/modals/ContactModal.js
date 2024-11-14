"use client"
import React, { useRef, useState } from 'react'
import style from '../assets/css/modal.module.css'
import { RxCross1 } from "react-icons/rx";
import { message } from "antd";




const ContactModal = ({ crossClick }) => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [contact, setContact] = useState(null)
    const [service, setService] = useState(null)
    const [msg, setMsg] = useState(null)
    const formRef = useRef(null);
    const [loading,setLaoding] = useState(false)

    message.config({
        zIndex: 999999,
        top: 20,
        duration: 3,
        className: "centered_message"
      });

    const postData = async (e) => {
        e.preventDefault();
        setLaoding(true)
        try {
            const response = await fetch('https://hrm-api.logomish.com/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": name,
                    "email": email,
                    "service": service,
                    "contact_number": contact,
                    "comment": msg
                }),
            });
            if (!response.ok) {
                message.success(response?.message);
                setLaoding(false)
            }else{
                const result = await response.json();
                message.success("Successfully Submited");
                setName(null)
                setContact(null)
                setEmail(null)
                setService(null)
                setMsg(null)
                formRef.current.reset();
                setLaoding(false)
            }
            } catch (err) {
                setLaoding(false)
                const result = await response.json();
                message.error(result?.message);
            } 
    };
    return (
        <>
            <section className={`${style.modalBox}`}>
                <div className={`${style.modalBody}`}>
                    <div className={`${style.modalContent}`}>
                        <div className={`${style.modalFormBox}`}>
                            <RxCross1 onClick={() => { crossClick(false) }} />
                            <form ref={formRef} onSubmit={postData}>
                                <div className={`${style.flex}`}>
                                    <div className={style.formInputBox}>
                                        <label>Name</label>
                                        <input type='text' required placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className={style.formInputBox}>
                                        <label>Name</label>
                                        <input type='number' required placeholder='Enter Your Contact' onChange={(e) => setContact(e.target.value)} />
                                    </div>
                                </div>
                                <div className={`${style.flex}`}>
                                    <div className={style.formInputBox}>
                                        <label>Name</label>
                                        <input type='email' required placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className={style.formInputBox}>
                                        <label >Select a service</label>
                                        <select class="form-control" onChange={(e) => setService(e.target.value)}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={style.formInputBox}>
                                    <label>Example textarea</label>
                                    <textarea rows="3" onChange={(e) => setMsg(e.target.value)}></textarea>
                                </div>
                                <button type='submit' disabled={loading}>{loading ? "please wait...": "Submit"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactModal