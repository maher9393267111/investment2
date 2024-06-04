import React ,{useState,useEffect} from 'react';
import UpdateProduct from '@/components/admin/product/updateProduct';
import { getDocuments,getDocument ,getDocumentsOrder } from '@/functions/firebase/getData';
import { orderBy } from '@firebase/firestore';
import { useRouter } from 'next/router';
import Loader from '@/components/common/Loader';
const EditSubPage = ({}) => {

    const [product, setProduct] = useState({});
    const [subcats, setsubCats] = useState([]);
    const [cats, setCats] = useState([]);

    const router = useRouter();
    
    const id = router.query.id;
    
  console.log("IDDD" , id)
    
    const [pageLoading, setPageLoading] = useState(true);
  
    useEffect(() => {

        const getProduct = async () => {
            // setLoading(true);
            setPageLoading(true)
             //setProduct({});
             const data = await getDocument("products", id);
             console.log(data, "fetch categories ====>>> 🎭🎭🎭>", data);
             setProduct(data);
             setPageLoading(false)
            // setLoading(false);
           };
       
         




      const getData = async () => {
        setPageLoading(true);
  
  
        const categorydata = await getDocumentsOrder(
          "cats",
          orderBy("timeStamp", "asc"),
  
          null
        );
  
  
  
        const subcatsdata = await getDocumentsOrder(
          "subcats",
          orderBy("timeStamp", "asc"),
  
          null
        );
  
        
        setsubCats(subcatsdata);
        setCats(categorydata);
        setPageLoading(false);
      };
      if (id) getProduct();
      getData();
    }, [id]);
  
    if (pageLoading) {
      return <Loader />;
    }







    return (
        <div>
            {id &&
            <UpdateProduct
            product={product}
            cats={cats}
            subcats={subcats}
            />
}
        </div>
    );
}


export default EditSubPage;



// serverside to fetch single catgory in serverside from firestore




// EditSubPage.getInitialProps = async (context) => {
 
//     // context.query.id ==> admin/category/edit/${context.query.id} in browser
//         const product = await getDocument("products", context.query.id);
//         const cats = await getDocuments("cats");
//         const subcats = await getDocuments("subcats");
     
       
//         console.log('single category --<>' , product,cats,subcats)
    
    
     
//         return {
//             product: product,
//             cats: cats,
//             subcats: subcats,
//         };
//       };