import React , {useState,useEffect} from 'react';
import UpdateCategoryMain from '@/components/admin/category/updateCategory';
import { getDocument } from '@/functions/firebase/getData';
import { useRouter } from 'next/router';
import { useAuth } from '@/functions/context';
import Loader from '@/components/common/Loader';
const EditPageCategory = ({}) => {


    const [cat, setCat] = useState({});
   
  //  const [loacding, setLoading] = useState(false);
    const {pageLoading, setPageLoading} = useAuth()
  
    const router = useRouter();
    
    const id = router.query.id;
    
  console.log("IDDD" , id)
  
    useEffect(() => {
      const getProduct = async () => {
       // setLoading(true);
       setPageLoading(true)
        //setProduct({});
        const data = await getDocument("cats", id);
        console.log(data, "fetch categories ====>>> 🎭🎭🎭>", data);
        setCat(data);
        setPageLoading(false)
       // setLoading(false);
      };
  
      if (id) getProduct();
    }, [id]);
  

    if(pageLoading){
        return <Loader/>
    }





    return (
        <div>
            <UpdateCategoryMain category={cat}/>
        </div>
    );
}


export default EditPageCategory;




//// serverside to fetch single catgory in serverside from firestore




// EditPageCategory.getInitialProps = async (context) => {
 
// // context.query.id ==> admin/category/edit/${context.query.id} in browser
//     const data = await getDocument("cats", context.query.id);
 
   
//     console.log('single category --<>' , data)


 
//     return {
//       category: data,
//     };
//   };




