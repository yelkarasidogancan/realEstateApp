import React from "react";

import Image from "../assets/img/house-banner.png";

import Search from "../components/Search";
const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Aliquip aliqua eu voluptate non sint commodo ut tempor. Sit non
            voluptate consequat irure consectetur do minim. Dolore dolor
            deserunt culpa id cupidatat nulla enim tempor mollit veniam culpa
            consequat. Tempor est non fugiat non Lorem amet anim non. Amet non
            est sit commodo magna. Commodo dolor sit cupidatat dolor eu laborum
            enim. Dolor do proident velit proident anim do nulla elit eiusmod
            minim velit deserunt do irure.
          </p>
        </div>
        {/* Image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
