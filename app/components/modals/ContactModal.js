"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "../assets/css/modal.module.css";
import { RxCross1 } from "react-icons/rx";
import { message } from "antd";

const ContactModal = ({ crossClick }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);
  const [service, setService] = useState("تطوير تطبيقات البنوك");
  const [msg, setMsg] = useState(null);
  const formRef = useRef(null);
  const [loading, setLaoding] = useState(false);

  message.config({
    zIndex: 999999,
    top: 20,
    duration: 3,
    className: "centered_message",
  });

  const postData = async (e) => {
    e.preventDefault();
    setLaoding(true);
    try {
      const response = await fetch("https://hrm-api.logomish.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          service: service,
          contact_number: contact,
          comment: msg,
        }),
      });
      if (!response.ok) {
        message.success(response?.message);
        setLaoding(false);
      } else {
        const result = await response.json();
        message.success("تم الإرسال بنجاح");
        setName(null);
        setContact(null);
        setEmail(null);
        setService(null);
        setMsg(null);
        formRef.current.reset();
        setLaoding(false);
      }
    } catch (err) {
      setLaoding(false);
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
              <RxCross1
                onClick={() => {
                  crossClick(false);
                }}
              />
              <form ref={formRef} onSubmit={postData}>
                <div className={`${style.flex}`}>
                  <div className={style.formInputBox}>
                    <label>اسم</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={style.formInputBox}>
                    <label>رقم الاتصال</label>
                    <input
                      type="number"
                      required
                      placeholder="أدخل رقم الاتصال الخاص بك"
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                </div>
                <div className={`${style.flex}`}>
                  <div className={style.formInputBox}>
                    <label>بريد إلكتروني</label>
                    <input
                      type="email"
                      required
                      placeholder="أدخل بريدك الإلكتروني"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={style.formInputBox}>
                    <label>اختر خدمة</label>
                    <select
                      class="form-control"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option>تطوير تطبيقات البنوك</option>
                      <option>خدمات FinOps</option>
                      <option>خدمات التكامل</option>
                      <option>تطوير المحفظة الرقمية</option>
                      <option>طوير منصة التمويل الجماعي</option>
                      <option>خدمة تعزيز الموارد</option>
                      <option>تطوير برامج التأمين</option>
                      <option>منصة التمويل اللامركزي (DeFi)</option>
                      <option>تطوير منصة تبادل العملات</option>
                      <option>الأمن السيبراني</option>
                      <option>
                        الاستعانة بمصادر خارجية لتكنولوجيا المعلومات
                      </option>
                      <option>إعادة هندسة الحلول</option>
                      <option>تحوّل DevOps</option>
                      <option>التجارة الإلكترونية</option>
                    </select>
                  </div>
                </div>
                <div className={style.formInputBox}>
                  <label>تعليقات / أسئلة </label>
                  <textarea
                    rows="3"
                    onChange={(e) => setMsg(e.target.value)}
                  ></textarea>
                </div>
                <button type="يُقدِّم" disabled={loading}>
                  {loading ? "انتظر من فضلك..." : "يُقدِّم"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactModal;
