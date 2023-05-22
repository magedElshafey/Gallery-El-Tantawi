import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { FaCcVisa } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { SiVodafone } from "react-icons/si";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
const Footer = () => {
  return (
    <div className={style.mainContainer}>
      <div className="container py-3">
        <div className="row ">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <p className="fw-bold text-white text-center text-sm-end">
              روابط مهمة
            </p>
            <ul className="d-flex flex-column gap-3 text-center text-sm-end">
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  مركز المساعدة
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  من نحن
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  فروعنا
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  عروض الطنطاوي
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  باقات موفرة
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  وصل حديثا
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
            <p className="fw-bold text-white text-center text-sm-end">
              الأقسام
            </p>
            <ul className="d-flex flex-column gap-3 text-center text-sm-end">
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  الأجهزة المنزلية
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  الأجهزة الإلكترونية
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  المنزل
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  هو و هي
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  الأطفال و الألعاب
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  المطلخ و أدوات الطعام
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
            <p className="fw-bold text-white text-center text-sm-end">حسابي</p>
            <ul className="d-flex flex-column gap-3 text-center text-sm-end">
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  بيانات الحساب
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  طلباتي
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  قائمة أمنياتي
                </Link>
              </li>
              <li>
                <Link className={`${style.footerLink} text-white-50`} to="/">
                  مرتجعاتي
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center text-sm-end">
            <p className="fw-bold text-white">وسائل التواصل</p>
            <div className="d-flex justify-content-center justify-content-sm-start  align-items-center gap-2">
              <div className={style.facebox}>
                <a target="_blank" href="www.facebook.com">
                  <GrFacebookOption className={style.faceicon} size={20} />
                </a>
              </div>
              <div className={style.instabox}>
                <a target="_blank" href="www.instagram.com">
                  <AiOutlineInstagram className={style.instaicon} size={20} />
                </a>
              </div>
              <div className={style.whatsbox}>
                <a target="_blank" href="www.whatsapp.com">
                  <AiOutlineWhatsApp className={style.whatsicon} size={20} />
                </a>
              </div>
            </div>
            <p className="fw-bold text-white mt-3 mb-2">طرق الدفع</p>
            <div className="d-flex align-items-center gap-2 justify-content-center justify-content-sm-start">
              <BsCash size={30} className="text-white-50" />
              <FaCcVisa size={30} className="text-white-50" />
              <SiVodafone size={30} className="text-white-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
