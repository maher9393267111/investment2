
import React from "react";
import CategoryForm from "./orderForm";
import { toast } from "react-toastify";
import { useAuth } from "@/functions/context";
import { useState } from "react";
import { db } from "@/functions/firebase";


import { updateDoc, collection, serverTimestamp ,doc } from "firebase/firestore";
import { uploadImages, deleteImage ,handleNotifications } from "@/functions/firebase/getData";
import { message } from "antd";
import AdminLayout from "../Layout";

import { useQuery, useMutation } from "@tanstack/react-query";


const UpdateCategoryMain = ({ category }) => {
  const [file, setFile] = useState("");
  const { setPageLoading, pageLoading } = useAuth();
  const isupdate = true;
  const initialValues = category;


  
  const { mutate: updateProduct } = useMutation({
    // (newProduct) => addDoc(collection(db, "products"), newProduct),
    mutationFn: async (variables) => {
      updateDoc(doc(db, "users", initialValues?.id), variables);;
    },
    onSuccess: () => {
      // Invalidate the product-page query to trigger a refetch
      queryClient.invalidateQueries(["orders-page"]);
    },
  });






  const onFinish = async (values) => {
    console.log("values-->", values);
    console.log("file", file);


  updateProduct(values)

  await handleNotifications(
    initialValues?.id,
    "account update",
    "admin have updated your account status",
    `Successfully updated account status to ${initialValues?.status}`
  );
   
    //  await updateDoc(doc(db, "users", initialValues?.id), values);
      message.success('updated Successfully')
    
    

  };


  return (
    <AdminLayout>
      <CategoryForm {...{ onFinish, file, setFile, initialValues }} />
    </AdminLayout>
  );
};


export default UpdateCategoryMain;



