
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';


const ProductsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const imageTemplate0 = (rowData, { rowIndex }) => <Image src={rowData.productImage}  alt="Image" height="60px" />
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.productName}</p>
    const inputTemplate2 = (rowData, { rowIndex }) => <InputText value={rowData.productPrice}  />
    const tagTemplate3 = (rowData, { rowIndex }) => <Tag value={rowData.productCategories}  ></Tag>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.productDescription}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="productImage" header="Product Image" body={imageTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="productName" header="Product Name" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="productPrice" header="Product Price" body={inputTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="productCategories" header="Product Categories" body={tagTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="productDescription" header="Product Description" body={pTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductsDataTable;