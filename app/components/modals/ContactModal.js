"use client"
import React, { useState } from 'react'
import style from '../assets/css/modal.module.css'
import { RxCross1 } from "react-icons/rx";



const ContactModal = ({crossClick}) => {
    const [cross, setCross] = useState(false)
    return (
        <>
            <section className={`${style.modalBox}`}>
                <div className={`${style.modalBody}`}>
                    <div className={`${style.modalContent}`}>
                        <div className={`${style.modalFormBox}`}>
                            <RxCross1 onClick={()=> {crossClick(false)}}/>
                            <form action="">
                                <div className={`${style.flex}`}>
                                    <div className={style.formInputBox}>
                                        <label>Name</label>
                                        <input type='text' required placeholder='Enter Your Name' />
                                    </div>
                                    <div className={style.formInputBox}>
                                        <label>Name</label>
                                        <input type='text' required placeholder='Enter Your Contact' />
                                    </div>
                                </div>
                                <div className={`${style.flex}`}>
                                    <div className={style.formInputBox}>
                                        <label>Name</label>
                                        <input type='email' required placeholder='Enter Your Email' />
                                    </div>
                                    <div className={style.formInputBox}>
                                        <label >Select a service</label>
                                        <select class="form-control">
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
                                    <textarea rows="3"></textarea>
                                </div>
                                <button type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactModal