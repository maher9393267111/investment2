import React from 'react';
import AdminLayout from '../Layout';
import ProductTable from './productTable';
const ProductsMain = ({products}) => {
    return (
       
        <AdminLayout>


<ProductTable products={products}/>


        </AdminLayout>
    );
}


export default ProductsMain;
