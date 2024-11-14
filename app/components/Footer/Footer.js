
"use client"
import React, { useRef, useState } from 'react'
import styles from "../assets/css/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/fintectfy_oman_logo-01.png";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaArrowRight } from "react-icons/fa6";
import { message } from "antd";

export default function Footer() {
  const formRef = useRef(null);
  const postData = async (e) => {
    e.preventDefault();
    message.success("You have subscribed news letter");
    formRef.current.reset();
};
  return (
    <>
      <div className="container-fluid p-0">
        <section className={styles.footer}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.subscribeBox}>
                <h2>
                  اشترك في النشرة الإخبارية <br /> وابقَ على اطلاع
                </h2>
                <p>
                  تقوم FinTechify بثورة في البنوك، حيث تقدم تجربة رقمية تركز على
                  المستخدم.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <form  ref={formRef} onSubmit={postData} className={styles.newsLatterBox}>
                <input
                  type="email" required
                  placeholder="عنوان البريد الإلكتروني"
                  className={styles.emailInput}
                />
                <button type="submit">
                  اشترك <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-4">
              <div className={styles.LogoBox}>
                <Image src={logo} alt="شعار FinTechify" />
                <div className={styles.socailMediaIconsBox}>
                  <Link href="#">
                    <FaFacebookSquare />
                  </Link>
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                  <Link href="#">
                    <FaXTwitter />
                  </Link>
                  <Link href="#">
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 p-0">
              <div className={styles.linksBox}>
                <h4>الخدمات</h4>
                <ul>
                  <li>
                    <Link href="/Banking-app-development">
                      تطوير تطبيقات البنوك
                    </Link>
                  </li>
                  <li>
                    <Link href="/Digital-wallet-development">
                      تطوير المحافظ الرقمية
                    </Link>
                  </li>
                  <li>
                    <Link href="/Insurance-software-development">
                      تطوير برامج التأمين
                    </Link>
                  </li>
                  <li>
                    <Link href="/finops-services">خدمات FinOps</Link>
                  </li>
                  <li>
                    <Link href="/Crowdfunding-platform-development">
                      تطوير منصات التمويل الجماعي
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 p-0 m-0">
              <div className={styles.linksBox}>
                <ul>
                  <li>
                    <Link href="/decentralized-finance-defi-platform">
                      منصة التمويل اللامركزي (DeFi)
                    </Link>
                  </li>
                  <li>
                    <Link href="/integration-services">خدمات التكامل</Link>
                  </li>
                  <li>
                    <Link href="/resource-augmentation">تعزيز الموارد</Link>
                  </li>
                  <li>
                    <Link href="/currency-exchange-platform-development">
                      تطوير منصات تبادل العملات
                    </Link>
                  </li>
                  <li>
                    <Link href="/cybersecurity">الأمن السيبراني</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 p-0">
              <div className={styles.linksBox}>
                <h4>روابط سريعة</h4>
                <ul>
                  <li>
                    <Link href="/">الرئيسية</Link>
                  </li>
                  <li>
                    <Link href="/about">من نحن</Link>
                  </li>
                  <li>
                    <Link href="/service">الخدمات</Link>
                  </li>
                  <li>
                    <Link href="/rizeApp">تطبيق Rize</Link>
                  </li>
                  <li>
                    <Link href="/welab">WeLab</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">تواصل معنا</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 p-0">
              <div className={styles.linksBox}>
                <h4>اتصل بنا</h4>
                <ul>
                  <p>968-9749-7428+</p>
                  <p>info@fintechify.com.om</p>
                  <p>
                    ص.ب: 121، الرمز البريدي: 111،<br /> شمال الغبرة / بوشر / سلطنة عمان
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="row" id={styles.BottomRow}>
            <p className="text-center">
              جميع الحقوق محفوظة &copy; 2024 FinTechify
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
