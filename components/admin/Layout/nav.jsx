import * as React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
// import {signOut} from "next-auth/react";
import Logo from "./logo";

const Nav = ({show}) => {
    const inactiveLink = 'flex gap-1 p-1';
    const activeLink = inactiveLink + ' bg-highlight text-black rounded-sm';
    const router = useRouter();
    const {pathname} = router;
  
    const list = [
        // { id: 1, text: "Admin Dashboard", path: "/admin" },
       
      
        { id: 1, text: "Add Machine", path: "/admin/makine/add" },
        { id: 2, text: "All Machines", path: "/admin/makine/all" },
        { id: 3, text: "Add Product", path: "/admin/product/add" },
        { id: 4, text: "All Products", path: "/admin/product/all" },
        // { id: 5, text: "Add SubCategory", path: "/admin/subcategory/add" },
        // { id: 6, text: "All SubCategories", path: "/admin/subcategory/all" },
        // { id: 7, text: "Add Article", path: "/admin/article/add" },
        // { id: 8, text: "All Articles", path: "/admin/article/all" },
        { id: 9, text: "AboutSection", path: "/admin/aboutSection" },
        { id: 10, text: "HomeSection", path: "/admin/homeSetion" },
        // { id: 11, text: "Add Gallery", path: "/admin/gallery/add" },
        // { id: 12, text: "All Galleries", path: "/admin/gallery/all" },
    
      ];




    return (
        <aside className={(show ? 'left-0' : '-left-full') + " !z-50 !bg-white z-50 text-gray-500 bg-bgGray p-4 fixed w-full h-full md:static md:w-auto transition-all"}>
            <div className="mb-4 mr-4">
                <Logo />
            </div>
            <nav className="flex !z-50 !bg-white flex-col gap-2">
         
            {list.map((listItem) => (
              <Link
                key={listItem.id}
                href={listItem.path}
                className={
                  pathname === listItem.path
                    ? "text-orange-600 transition duration-500 flex items-center"
                    : "hover:text-orange-600 transition duration-500 flex items-center"
                }
              >

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                        </svg>
                <p className="py-2 px-4 cursor-pointer">{listItem.text}</p>
              </Link>
            ))}






                <button 
                // onClick={() => logout()}
                 className={inactiveLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                    </svg>
                    Logout
                </button>
            </nav>
        </aside>
    )
}

export default Nav


