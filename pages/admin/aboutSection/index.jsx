

import ProductsMain from "@/components/admin/aboutSection/addAboutMain";
import React ,{useState,useEffect} from "react";
import { getDocuments , getDocumentsOrder } from "@/functions/firebase/getData";

import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
import { orderBy } from "@firebase/firestore";
const HomeSectionPage = ({}) => {
  const { pageLoading, setPageLoading } = useAuth();

  const [products, setProducts] = useState([]);
  // const [loacding, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      // setLoading(true);
      setPageLoading(true);
      setProducts([]);
      const data = await getDocumentsOrder(
        "aboutsection",
        orderBy("timeStamp", "asc")
      );

      console.log(data, "fetch productIIUW!@__@#(@)#(s ====>>>>");
      setProducts(data[0]);
      setPageLoading(false);
      //  setLoading(false);
    };
    getArticles();
  }, []);

  if (pageLoading) {
    return <Loader />;
  }

  return (
    <div>

      <ProductsMain data={products} />
    </div>
  );
};

export default HomeSectionPage;
