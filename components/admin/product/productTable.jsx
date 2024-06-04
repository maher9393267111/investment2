import React from "react";
import { useState, useEffect } from "react";
import { Table, Space, Button } from "antd";
import Link from "next/link";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaVideo } from "react-icons/fa6";
import { FaVideoSlash } from "react-icons/fa";
import { handleDelete ,getDocumentsOrder ,getCount } from "@/functions/firebase/getData";
import Image from "next/image";

import { limit, orderBy, query } from "firebase/firestore";
import { collection, getDocs, startAfter } from "firebase/firestore";
import db from "@/functions/firebase/index";
import Loader from "@/components/common/Loader";

import { keepPreviousData, useQuery } from "@tanstack/react-query";




const ProductTable = ({ products }) => {

  const [page, setPage] = useState(null);
  const [lastDoc, setLastDoc] = useState(1);
  const { isPending, isSuccess, isFetching, isError, error, data } = useQuery({
    queryKey: [`product-page`],
    queryFn: () => getDocumentsOrder(
            "products",
            orderBy("timeStamp", "asc"), null 
           ),
    //staleTime: 80000000,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: true,
  });


//   const { isFetching, isError, data, error } = useQuery({
//     queryKey: ['projects'],
//     queryFn: () => {
//         return getDocs(collection(db, 'products'))
//             .then((snapshot) => snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
//     }
// })



  useEffect(() => {
    if (data) setLastDoc(data.lastDocRef);
  }, [isFetching]);

   if (isPending) return <Loader />;

console.log("ADATA-->" , isPending)
















  const columns = [
    {
      title: "Products",
      // same name from database   // category={title ,....}
      dataIndex: "title",
    },

    {
      title: "Image",
      // single category {record} --> record.image.url === category.image.url
      render: (record) => {
        return (
          <div className="flex justify-start w-[100%]  gap-4 ">
            {/* {record.images.map((img, index) => (
              <Image
                width={50}
                height={50}
                className="  relative  w-24 h-24 object-cover object-center rounded-full"
                src={img}
                key={index}
                alt=""
              />
            ))} */}
            <Image
              width={50}
              height={50}
              className="  relative  w-24 h-24 object-cover object-center rounded-full"
              src={record.image}
              alt=""
            />
          </div>
        );
      },
    },

    {
      title: "Actions",
      // 💡💡  render to make style in table in single category
      // single category data ==> title , image , id
      render: (record) => {
        return (
          <>
            <div className=" flex gap-4  items-center">
              <div>
                <AiFillDelete
                  // send collection name and single category data to delete
                  onClick={() => handleDelete("products", record, true)}
                  className=" hover:text-red-700 text-red-500 cursor-pointer"
                  size={"25"}
                />
              </div>

              <div>
                <Link href={`/admin/product/edit/${record?.id}`}>
                  <AiFillEdit
                    className="hover:text-blue-700 text-blue-500 cursor-pointer"
                    size={"25"}
                  />
                </Link>
              </div>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div className=" w-[90%]  md:w-[70%] mx-auto">
   sas {data?.length}
      <Space
        style={{
          marginBottom: 16,
        }}
      ></Space>
      <Table
       columns={columns}
       dataSource={data}
      
       pagination={{
        //  total: total,
          pageSize: 4,
        //  current: currentPage,
        //  onChange: handleChange,
          showSizeChanger: false,
       }}
  

      />



    </div>
  );
};

export default ProductTable;