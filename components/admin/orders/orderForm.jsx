import React, { useState, useEffect } from "react";
import {
  getDocuments,
  antdFieldValidation,
} from "@/functions/firebase/getData";
import {
  Button,
  Form,
  Upload,
  message,
  Input,
  Select,
  Switch,
  InputNumber,
  Checkbox
} from "antd";
const { TextArea } = Input;


import Image from "next/image";


const CategoryForm = ({
  onFinish,
  initialValues,
  file,
  setFile,
  isupdate = false,
}) => {
  const [image, setImage] = useState(initialValues?.image || "");


  return (
    <div className=" w-[80%] mx-auto ">
      <div className=" w-full md:w-1/2 border-2 py-6 px-6">
        <Form
          layout="vertical"
          // onFinish same as submit normal form
          onFinish={(values) =>
            // name of our function
            onFinish({
              ...values,
              image,
            })
          }
          initialValues={{
            displayName: initialValues?.displayName || "",
            amount: initialValues?.amount|| 0,
            status: initialValues?.status|| "",
            // titletr: initialValues?.titletr || "",
            // image: initialValues?.image || "",
          }}
        >

          <Form.Item name="displayName" label="Name">
            <Input />
          </Form.Item>

          <Form.Item name="status" label="status">
  <Select>
    <Select.Option value="pending">Pending</Select.Option>
    <Select.Option value="active">Active</Select.Option>
    <Select.Option value="inactive">Inactive</Select.Option>
  </Select>
</Form.Item>


          <Form.Item name="amount" label="Amount">
            <InputNumber />
          </Form.Item>


          {/* <Form.Item className=" " name="status"   >
            <Checkbox> Status </Checkbox>
            
          </Form.Item>
       */}






          <div className=" grid gap-3 md:grid-cols-4 grid-cols-1"></div>


          {/* -----images upload----- */}


          {/* <div>
            <Upload
              accept="image/*"
              maxCount={1}
              // file is data of image will be uploaded to firebase/storage
              beforeUpload={(file) => {
                setFile(file);
                // setFiles((prev) => [...prev, file]);
                return false;
              }}
              listType="picture-card"
              onRemove={() => setFile("")}
            >
              Upload Image
            </Upload>
          </div>
 */}

          {/* -----show category image {update category} ---- */}

{/* 
          {image && (
            <div className="  w-24 md:w-24 relative">
              <img className=" w-24 h-24  rounded-lg" src={image} alt="" />


              <p
                onClick={() => setImage("")}
                className="  !text-red-500 cursor-pointer  font-semibold text-center"
              >
                Remove
              </p>
            </div>
          )}
 */}

          <div className=" ">
            <Button
              className=" mt-4  block w-1/3 bg-blue-500 mx-auto"
              type="primary"
              htmlType="submit"
            >
              Publish
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};


export default CategoryForm;


