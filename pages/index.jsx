import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/layout";
import BannerSlider from "@/components/Main/BannerSlider";
import CategoryCard from "@/components/Main/CategoryCard";
import ProductSlider from "@/components/Main/productsSlider";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Hero from "@/components/layout/Hero";
import ProductCard from "@/components/Main/productCard";
import { useAuth } from "@/functions/context";
// import Service from "@/components/Main/Services";
// import SectionOne from "@/components/Main/SectionOne";
// import Travels from "@/components/Main/Travels";
// import AbourSection from "@/components/Main/AboutUsSection";

export default function Index({}) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const direction = router.locale === "ar" && "rtl";
  const lang = router.locale;
  const { pageLoading, setPageLoading } = useAuth();

  const newproductstitle =
    router.locale === "ar"
      ? "احدث المنتجات"
      : router.locale === "en"
      ? "New Products"
      : "Yeni ürünler";
  const discounttitle =
    router.locale === "ar"
      ? "التخفيضات"
      : router.locale === "en"
      ? "Offers Products"
      : "indirimler";

  console.log("Lodale", router.locale, router);
  //  const aboutus = t("aboutus", { returnObjects: true });
  //  console.log("links", aboutus);

  const [cats, setCats] = useState([]);
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);
  const [news, setNews] = useState([]);
  const [sliders, setSliders] = useState([]);

  const [homesection, setHomeSection] = useState({});

  // const [loacding, setLoading] = useState(true);
  //subcategory"
  useEffect(() => {
    const getProducts = async () => {
      setPageLoading(true);

      const data = await getDocumentsOrder(
        "products",
        orderBy("timeStamp", "asc"),
        null
      );

      console.log(data, "fetch PRODUCCCCCCCCCCCC====>>>>");
      setProducts(data);
      setPageLoading(false);
    };

    const getOffers = async () => {
      //  setPageLoading(true)

      const data = await getDocumentsOrder(
        "products",
        orderBy("timeStamp", "asc"),
        where("isoffer", "==", true)
      );

      console.log(data, "fetch PRODUCCCCCCCCCCCC====>>>>");
      setOffers(data);
      // setPageLoading(false)
    };

    const getFeatures = async () => {
      // setLoading(true);

      setProducts([]);
      const data = await getDocumentsOrder(
        "products",
        orderBy("timeStamp", "asc"),
        null,
        2
      );

      console.log(data, "fetch Propertirs 3====>>>>");
      setNews(data);
    };

    const getInfo = async () => {
      // setLoading(true);

      const data = await getDocumentsOrder(
        "homesection",
        orderBy("timeStamp", "asc")
      );

      console.log(data, "fetch productIIUW!@__@#(@)#(s ====>>>>");
      setHomeSection(data[0]);

      //  setLoading(false);
    };
    getInfo();

    getFeatures();

    getProducts();
    getOffers();
  }, []);




  return (
    <Layout dir={router.locale === "ar" ? "rtl" : "ltr"}>
      <NextSeo title="Nabhan | Nabhan Furniture | Nabhan Mobilya" />

      <div className="scroll-smooth mb-16  ">
        {/* {sliders && sliders?.length > 0 && <BannerSlider data={sliders} />}

        {cats && cats?.length > 0 && (
          <div className=" mx-4 mt-12 md:mx-8">
            <CategoryCard title={t("sectionstitle")} data={cats} />
          </div>
        )} */}

        <div dir="ltr">
          <Hero lang={lang} data={homesection} direction={direction} />
        </div>

        <div>
          {/* -----ALL PRODUCTS CONTAINER------ */}
          <div className="py-16 sm:py-24">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {products?.map((product, index) => {
                return <ProductCard {...product} key={product?.id} />;
              })}
            </div>
          </div>

          {/* 
        {offers && offers?.length > 0 && (
          <ProductSlider title={discounttitle} data={offers} />
        )}

        {news && news?.length > 0 && (
          <ProductSlider title={newproductstitle} data={news} />
        )} */}
        </div>

        {/* <BannerSlider/>

<Service/>

<SectionOne/>

<Travels/>

<AbourSection/> */}
      </div>
    </Layout>
  );
}

// serverside

export const getStaticProps = async ({ locale }) => {
  //const allProducts = await api.getAllProducts();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // allProducts,
    },
  };
};

// Index.getInitialProps = async (context) => {
//   let products = [];
//   //navbar.jsx href={`/products?category=${item.title.toLowerCase()}`}
//   const category = context.query.category;
//   const subcategory = context.query.subcategory;
//   // step 1
//   const search = context.query.search;

//   //console.log("categoryyyyy", category);

//   //console.log("subcategoryyyyy", subcategory);

//   //    where("fieldname", "==", fieldValue)

//   products = await getDocumentsOrder(
//     "products",
//     orderBy("timeStamp", "desc"),

//     //category i am searching for all products that have a category name / same as subcategory , else null nothing (filteration)
//     category
//       ? where("category", "==", category)
//       : subcategory
//       ? where("subcategory", "==", subcategory)
//       : null
//   );

//   return {
//     // props from serverside will go to props in clientside
//     products: products,

//   };
// };
