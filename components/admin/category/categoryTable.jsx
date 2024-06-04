import React from "react";
import { useState, useEffect } from "react";
import { Table } from "antd";
import Link from "next/link";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { handleDeleteGlobal } from "@/functions/firebase/getData";


import { handleDelete ,getDocumentsOrder ,getCount } from "@/functions/firebase/getData";
import Image from "next/image";

import { limit, orderBy, query } from "firebase/firestore";
import { collection, getDocs, startAfter } from "firebase/firestore";
import db from "@/functions/firebase/index";
import Loader from "@/components/common/Loader";

import { keepPreviousData, useQuery } from "@tanstack/react-query";

const CategoryTable = ({ cats }) => {


  const [page, setPage] = useState(null);
  const [lastDoc, setLastDoc] = useState(1);
  const { isPending, isSuccess, isFetching, isError, error, data } = useQuery({
    queryKey: [`users-page`],
    queryFn: () => getDocumentsOrder(
            "users",
            orderBy("displayName", "asc"), null 
           ),
   // staleTime: 80000000,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: true,
  });



  if (isPending) return <Loader />;



  const columns = [
    {
      title: "Name",
      // same name from database   // category={title ,....}
      dataIndex: "displayName",
    },

    {
      title: "Amount",
      // same name from database   // category={title ,....}
      dataIndex: "amount",
    },

    {
      title: "image",
      // single category {record} --> record.image.url === category.image.url
      render: (record) => {
        return (
          <>
                   <Image
            width={50}
            height={50}
              className="  relative  w-24 h-24 object-cover object-center rounded-full  "
              src={record?.imageAsset}
              alt=""
              
            />
          </>
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
                  onClick={() => handleDeleteGlobal("users", record)}
                  className=" hover:text-red-700 text-red-500 cursor-pointer"
                  size={"25"}
                />
              </div>

              <div>
                <Link href={`/admin/category/edit/${record?.id}`}>
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
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default CategoryTable;
