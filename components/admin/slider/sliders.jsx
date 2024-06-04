import React from 'react';
import AdminLayout from '../Layout';
import SubCategoryTable from './sliderTable';

const SlidersMain = ({subcats}) => {
    return (
        <div>
            <AdminLayout>
            <SubCategoryTable subcats={subcats} />
            </AdminLayout>
        </div>
    );
}
export default SlidersMain;
