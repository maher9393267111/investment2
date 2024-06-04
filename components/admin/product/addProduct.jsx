import React from "react";
import ProductForm from "./productForm";
import { toast } from "react-toastify";
import { useAuth } from "@/functions/context";
import { useState } from "react";
import { db } from "@/functions/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { uploadImages } from "@/functions/firebase/getData";
import { message } from "antd";
import AdminLayout from "../AdminLayout";

import { useQuery, useMutation } from "@tanstack/react-query";
const AddProductMain = ({ cats, subcats, products }) => {
  const { mutate: addProduct } = useMutation({
    // (newProduct) => addDoc(collection(db, "products"), newProduct),
    mutationFn: async (variables) => {
      addDoc(collection(db, "products"), variables);
    },
    onSuccess: () => {
      // Invalidate the product-page query to trigger a refetch
      queryClient.invalidateQueries(["product-page"]);
    },
  });

  

  const [files, setFiles] = useState([]);
  const [file, setFile] = useState("");

  const { setPageLoading, pageLoading } = useAuth();
  const isupdate = true;

  const onFinish = async (values) => {
    console.log("values-->", values);

    if (!file) {
      message.error("Please select main image");
      return; // stoppppp progress the function
    }

    //Single Main image Upload

    values.image = await uploadImages(file, true, "product");

    /////urls [array of images]

    values.images = await uploadImages(files);

    values.timeStamp = serverTimestamp();

    //  await addDoc(collection(db, "products"), values);

    message.success(`Product Uploaded Successfully`);

    // addDoc(collection(db, "products"), values);

    addProduct(values);
  };

  return (
    <AdminLayout>
      <ProductForm
        {...{ cats, subcats, onFinish, files, setFiles, file, setFile }}
      />
    </AdminLayout>
  );
};

export default AddProductMain;
