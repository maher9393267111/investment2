import { ChakraProvider } from '@chakra-ui/react'
//import '../styles/globals.css'
import '../styles/global.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import  ProgressBar from '../components/common/progressBar';
import { useEffect } from 'react';
import Head from 'next/head';

import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { StateContextProvider } from '@/functions/context'

import { Provider } from 'react-redux';
import store from '@/redux/store';

import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config"


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


// const queryClient = new QueryClient({
//   defaultOptions: { queries: { staleTime: Infinity } },
// });

const queryClient = new QueryClient();

const MyApp=({ Component, pageProps }) =>{




    return (
      <QueryClientProvider client={queryClient}>
        <>

<Head>

        <title>Project</title>
      </Head>

    
    <ChakraProvider>
    <Provider store={store}>
    <StateContextProvider>
    
    <Component {...pageProps} />
    <ToastContainer />
    <ProgressBar/>
    </StateContextProvider>
    </Provider>
    
    </ChakraProvider>
   
    </>
    </QueryClientProvider>
)
}


export const getServerSideProps = async ({ Component, ctx, locale }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
  
    return {
      props: {
        pageProps,
        ...(await serverSideTranslations(locale, ["common", "main"])),
      },
    };
  };



export default appWithTranslation(MyApp, nextI18NextConfig);