import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero({data ,direction ,lang}) {
  return (
    <div>
      <main className="grid grid-cols-1 items-center gap-y-4 py-8 lg:grid-cols-2 lg:py-0">
        <div   className="md:text-center lg:text-left">
          <h1 dir={direction}  className="flex justify-center flex-col text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline shimmer ">Nabhan Mobilya</span>{" "}
            {/* <span className="block text-primary xl:inline">
              Ay Karanlığından Gelen Güzellik
            </span> */}
          </h1>
          <div dir={direction} className="">

         
          <p  className="mt-3 arabic text-cente text-base sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-[18px] lg:mx-0">
            {/* Ağacın kaliteye ve konfora dönüşüp evlerinize güler yüzle gelmesinin
            sebebi bizler olalım, siz isteyin biz yapalım keyfini sürmek size
            kalsın. */}

{lang === 'ar' ? data?.titlear  : lang === 'en' ? data?.title    : data?.titletr}



          </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
             
                <a href="https://wtspee.com/905522982310" target="_blank" className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-black arabic  md:py-4 md:px-10 md:text-lg">
            
                  
                  {lang === 'ar' ?   "وتس اب " : lang === 'en' ? "Whatsapp"    : "Whatsapp"}
                </a>
              
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link legacyBehavior href="/products">
                <a className="flex w-full items-center arabic gap-4 justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-black  md:py-4 md:px-10 md:text-lg">
                
                  {lang === 'ar' ? "منتجاتنا"  : lang === 'en' ? "Browse our products"    : "Mağaza"}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
          className="!h-[490px] object-cover"
            src={
             data?.image ? data?.image : "https://images.unsplash.com/photo-1619596658767-f3bbb82b0dee?w=640&q=80"
            }
            width={640}
            height={440}
            layout="responsive"
          />
        </div>
      </main>
    </div>
  );
}

export default Hero;
