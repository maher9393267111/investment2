import React from "react";
import Layout from "../Layout";
import { ProfileNav } from "../sections/Card";
import { useEffect, useState } from "react";
import { getCount } from "@/functions/firebase/getData";

export default function AdminMain() {
  const [investors, setInvestors] = useState(0);
  const [orders, setOrders] = useState(0);
  const fetchInvestors = async () => {
    setInvestors(await getCount("users"));
    setOrders(await getCount("orders"));
  };

  useEffect(() => {
    fetchInvestors();
  }, []);

  return (
    <Layout>
      

      <div className="flex mt-12 space-x-0 md:space-x-10 space-y-4 md:space-y-0 flex-col md:flex-row">
        <ProfileNav
          href="/admin/investors/all"
          label="Investors"
          desc="View investors"
          number={investors}
        />
        <ProfileNav
          href="/admin/product/all"
          label="Products"
          desc="View products"
        />


<ProfileNav
          href="/admin/orders/all"
          label="Orders"
          desc="View orders"
          number={orders}
        />



      </div>
    </Layout>
  );
}
