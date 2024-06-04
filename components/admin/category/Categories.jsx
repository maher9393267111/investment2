import React from 'react';
import AdminLayout from '../Layout';
import CategoryTable from './categoryTable';

const CategoriesMain = ({cats}) => {
    return (
        <div>
            <AdminLayout>
            <CategoryTable cats={cats} />
            </AdminLayout>
        </div>
    );
}
export default CategoriesMain;
