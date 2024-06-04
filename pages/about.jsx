import { NextSeo } from "next-seo";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getDocumentsOrder } from "@/functions/firebase/getData";
import { orderBy } from "@firebase/firestore";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useAuth } from "@/functions/context";
function Hakkimizda() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const {pageLoading ,setPageLoading} = useAuth()
  const [contactinfo, setContactInfo] = useState([]);
  // const [loacding, setLoading] = useState(true);
  //subcategory"
  useEffect(() => {
    const getInfo = async () => {
       setPageLoading(true);

      const data = await getDocumentsOrder(
        "aboutsection",
        orderBy("timeStamp", "asc")
      );

      console.log(data, "fetch productIIUW!@__@#(@)#(s ====>>>>");
      setContactInfo(data[0]);

        setPageLoading(false);
    };
    getInfo();
  }, []);



  return (
    <Layout>
      <>
        <NextSeo title="Nabhan | Hakkımızda | Nabhan Mobilya" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 py-8 md:grid-cols-2 md:py-16">
            <section className="grid gap-4 arabic">
              <div className="mr-10">
                <h1
                  dir={router?.locale === "ar" && "rtl"}
                  className="text-4xl  font-bold tracking-tight shimmer sm:text-5xl md:text-6xl"
                >
                  {t("navbar.about")}
                </h1>

                <div
                  className="mt-6 text-xl"
                  dir={router?.locale === "ar" && "rtl"}
                >
                  {router?.locale === "ar"
                    ? contactinfo?.titlear
                    : router.locale === "en"
                    ? contactinfo?.title
                    : contactinfo?.titletr}
                </div>
              </div>

              {/* <article dir={router?.locale === 'ar' && 'rtl'} className="grid gap-2">
              <p className="arabic text-[17px] sm:text-xl">





              </p>
          

            </article> */}
            </section>
            <section className="shadow_image_left rounded-md relative order-first h-[355px] md:min-h-[355px] md:order-none md:h-full">
              <Image
                className="absolute rounded-md"
                src={contactinfo?.image}
                alt="Hakkımızda"
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </section>
          </div>
        </div>
      </>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  //const allProducts = await api.getAllProducts();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // allProducts,
    },
  };
};

export default Hakkimizda;
