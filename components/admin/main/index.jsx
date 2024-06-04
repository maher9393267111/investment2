import React from "react";
import Layout from "../Layout";
import { ProfileNav } from "../sections/Card";
import { useEffect, useState } from "react";
import { getCount } from "@/functions/firebase/getData";

export default function AdminMain() {
  const [investors, setInvestors] = useState(0);

  const fetchInvestors = async () => {
    setInvestors(await getCount("users"));
  };

  useEffect(() => {
    fetchInvestors();
  }, []);

  return (
    <Layout>
      {investors}

      <div className="flex mt-12 space-x-0 md:space-x-10 space-y-4 md:space-y-0 flex-col md:flex-row">
        <ProfileNav
          href="/admin/investors/all"
          label="Investors"
          desc="View investors"
          number={investors}
        />
        <ProfileNav
          href="/admin/products/all"
          label="Products"
          desc="View products"
        />
      </div>
    </Layout>
  );
}
