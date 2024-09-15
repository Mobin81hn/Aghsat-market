import React from "react";
import Image from "next/image";

const ProductComment = () => {
  return (
    <div>
      <div className="flex items-center gap-10">
        <p className="font-bold">امیر امیری</p>
        <div className="flex items-center">
          <Image
            src="/images/circle.svg"
            className="translate-y-[2px] ml-1"
            alt="shop"
            width={8}
            height={8}
          />
          <p className="font-bold">3 روز پیش</p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/images/star-fill.svg"
            className="translate-y-[1px]"
            alt="shop"
            width={16}
            height={16}
          />
          <Image
            src="/images/star-fill.svg"
            className="translate-y-[1px]"
            alt="shop"
            width={16}
            height={16}
          />
          <Image
            src="/images/star-fill.svg"
            className="translate-y-[1px]"
            alt="shop"
            width={16}
            height={16}
          />
          <Image
            src="/images/star-fill.svg"
            className="translate-y-[1px]"
            alt="shop"
            width={16}
            height={16}
          />
          <Image
            src="/images/star-fill.svg"
            className="translate-y-[1px]"
            alt="shop"
            width={16}
            height={16}
          />
        </div>
        <Image
          src="/images/dislike.svg"
          className="translate-y-[1px]"
          alt="shop"
          width={20}
          height={20}
        />
        <Image
          src="/images/like.svg"
          className="translate-y-[1px]"
          alt="shop"
          width={20}
          height={20}
        />
      </div>
      <hr className="my-4" />
      <p className="text-sm font-bold leading-6">
        لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی
        و طراحی گرافیک گفته می‌شود. <br /> ترکیب بندی برای پر کردن صفحه و ارایه اولیه
        شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی
        نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک
        برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا
        صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده
        بعد از
      </p>
    </div>
  );
};

export default ProductComment;
