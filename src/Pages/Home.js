import React from "react";
import Slider from "../Components/home/Slider/Slider";
import {
  offerImg,
  kitchenOffers,
  bestSallers,
  machine,
  cooking,
  home,
  fineHome,
  rooms,
  mafrosh,
} from "../fakers/data";
import OfferCard from "../Components/utilites/offerCard/OfferCard";
import GroupCard from "../Components/utilites/groupCard/GroupCard";
import ProductSlider from "../Components/utilites/productSlider/ProductSlider";
import heroTv from "../assets/TV_AR.jpg";
import HeroImg from "../Components/utilites/heroImg/HeroImg";
import heroRom from "../assets/3-room-AR_4.gif";
import HeroCard from "../Components/utilites/heroCard/HeroCard";
import bag from "../assets/Bags_6.jpg";
import ImgCard from "../Components/utilites/imgCard/ImgCard";
import bed from "../assets/bed.jpg";
import braun from "../assets/Braun-Desktop-AR_2.jpg";
const Home = () => {
  return (
    <div className="homeContainer p-0 m-0">
      <Slider />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="w-100 d-flex flex-wrap gap-2">
              <OfferCard data={offerImg} />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="w-100">
              <GroupCard
                title="مطبخ مثالي ؟ لا يوجد افضل من ذلك"
                data={kitchenOffers}
                path="/kitchen"
              />
            </div>
          </div>
        </div>
      </div>
      <ProductSlider title="الأكثر مبيعا" data={bestSallers} path="/best" />
      <HeroImg path="/tv" img={heroTv} />
      <div className="container py-5">
        <div className="row ">
          <div className="col-12 col-md-5 col-lg-3">
            <GroupCard
              title="كل اجهزة البيت من مكان واحد"
              path="/machine"
              data={machine}
            />
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <GroupCard title="لطبخ أسهل" path="/kitchen" data={cooking} />
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <GroupCard title="نحو منزل عصرى حديث" path="/home" data={home} />
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <GroupCard
              title="بيت دافئ؟ بارد؟ أجعله كما تريد"
              path="/finehome"
              data={fineHome}
            />
          </div>
        </div>
      </div>
      <ProductSlider
        title="العروض اليومية"
        data={bestSallers}
        path="/dailyoffers"
      />
      <HeroImg path="/rooms" img={heroRom} />
      <HeroCard path="/rooms" title="غرف مريحة يصعب عليك تركها" data={rooms} />
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <GroupCard
              title="كل اجهزة البيت من مكان واحد"
              path="/machine"
              data={machine}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <GroupCard title="لطبخ أسهل" path="/kitchen" data={cooking} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <ImgCard path="/bags" img={bag} title="شنط تناسب احتياجاتك" />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <GroupCard title="لطبخ أسهل" path="/kitchen" data={cooking} />
          </div>
        </div>
      </div>
      <HeroCard path="/mafrosh" title="مفروشات لبيت جميل" data={mafrosh} />
      <ProductSlider title="وصل حديثا .." data={bestSallers} path="/new" />
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <ImgCard path="/bed" img={bed} title="لبيت أكثر راحة" />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <GroupCard title="طفل سعيد بيت سعيد" path="/child" data={machine} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <GroupCard
              title="ما الذي ينقص مطبخك؟"
              path="/kitchen"
              data={cooking}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <GroupCard
              title="أجهزة منزل الأحلام "
              path="/machine"
              data={cooking}
            />
          </div>
        </div>
      </div>
      <HeroImg path="/braun" img={braun} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <GroupCard
              title="أجهزة عناية رائعة سهلة الاستخدام"
              path="/care"
              data={machine}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <ImgCard path="/laptop" img={bed} title="اللاب توب" />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <ImgCard path="/room" img={bed} title="دولاب" />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <GroupCard
              title="أدوات لمطبخ اكثر ترتيبا"
              path="/kitchen"
              data={cooking}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
