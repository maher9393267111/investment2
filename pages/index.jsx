import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/layout";

import { NextSeo } from "next-seo";
import Link from "next/link";

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
  const { pageLoading, setPageLoading  , notifs, notifCount} = useAuth();





  return (
    <Layout dir={router.locale === "ar" ? "rtl" : "ltr"}>
      <NextSeo title="Nabhan | Nabhan Furniture | Nabhan Mobilya" />

{notifCount}
   
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
