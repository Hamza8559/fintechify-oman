"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header/Header";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import styles from "../components/assets/css/contact.module.css";
import { MdOutlineAddIcCall } from "react-icons/md";
import ContactImg from "../components/assets/images/smiling-arab-businessman-adult-happy-generate-ai-scaled-e1711735176898.jpg";
import Image from "next/image";
import Map from "../components/map/map";
import { IoLocation } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { message } from "antd";

function page() {
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
      <Header />
      <Banner showCase={false} head={"اتصل بنا"} tagLine={false} Des={false} />
      <section className={styles.contactSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.contactBox}>
                <MdOutlineAddIcCall />
                <div>
                  <span>هاتف</span>
                  <a href="tel:968-9749-7428+">968-9749-7428+</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.contactBox}>
                <GrLocation />
                <div>
                  <span>الموقع</span>
                  <a href="#">
                    ص.ب: 121، الرمز البريدي: 111،
                    <br /> شمال الغبرة / بوشر / سلطنة عمان{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.contactBox}>
                <MdOutlineEmail />
                <div>
                  <span>البريد الإلكتروني</span>
                  <a
                    href="mailto:contact@fintechify.com.om
"
                  >
                    contact@fintechify.com.om
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Map /> */}
      <section className={styles.contactFormSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.contactFormImg}>
                <Image src={ContactImg} alt="Contact Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.contactFormBox}>
                <h5>تواصل معنا</h5>
                <p>
                  لن يتم نشر عنوان بريدك الإلكتروني. الحقول المطلوبة محددة *
                </p>
                <form ref={formRef} onSubmit={postData}>
                  <div class="form-group">
                    <label>الاسم *</label>
                    <input
                      type="text"
                      class="form-control"
                      required
                      placeholder="أدخل اسمك"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label>رقم الاتصال</label>
                    <input
                      type="number"
                      class="form-control"
                      required
                      placeholder="أدخل رقم الاتصال الخاص بك"
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label>عنوان البريد الإلكتروني *</label>
                    <input
                      type="email"
                      class="form-control"
                      required
                      placeholder="بريدك الإلكتروني"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
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
                  <div class="form-group">
                    <label>تعليقات / أسئلة </label>
                    <textarea
                      rows="3"
                      class="form-control"
                      onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                  </div>
                  <div class="form-group">
                  <button type="يُقدِّم" disabled={loading}>
                  {loading ? "انتظر من فضلك..." : "يُقدِّم"}
                </button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </>
  );
}

export default page;
