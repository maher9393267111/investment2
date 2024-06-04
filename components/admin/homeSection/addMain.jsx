import React from "react";
import SubCategoryForm from "./homeSectionForm";
import { toast } from "react-toastify";
import { useAuth } from "@/functions/context";
import { useState } from "react";
import { db } from "@/functions/firebase";

import { addDoc, collection,serverTimestamp ,updateDoc ,doc } from "firebase/firestore";
import { uploadImages ,deleteImage } from "@/functions/firebase/getData";
import { message } from "antd";
import AdminLayout from "../Layout";


const  HomeSectionMain = ({data}) => {
  const [file, setFile] = useState("");
  const { setPageLoading, pageLoading } = useAuth();
  const isupdate = false;


  const initialValues = data;

  const onFinish = async (values) => {
    console.log("values-->", values);
    console.log("file", file);

    if (!file && !initialValues?.image) {
      message.error("Please select image");
      return; // stoppppp progress the function
    } else {
    //  values.image = await uploadImages(file, true, "homesection"); // result is image link from firebase/storage

    // if(initialValues && initialValues?.image){
    // await deleteImage(initialValues?.image);
    // }

    if(file && initialValues?.image){
        await deleteImage(initialValues?.image);
        message.success("image deleted");
        values.image = await uploadImages(file, true, "homesection");

    }

    if(file && !initialValues?.image){
        values.image = await uploadImages(file, true, "homesection");
        message.success("image Uploaded Sucessfully");

    }

console.log("VALUE>>>>>>>>>>>>>>>" , values)

      values.timeStamp = serverTimestamp()

      if(!initialValues) {
      await addDoc(collection(db, "homesection"), values);
      }
      else {
        await updateDoc(doc(db, "homesection", initialValues?.id), values);
      }




      message.success("Section added successfully");
    }
  };

  return (
    <AdminLayout>
      <SubCategoryForm {...{ onFinish, file, setFile  ,initialValues}} />
    </AdminLayout>
  );
};

export default HomeSectionMain;
