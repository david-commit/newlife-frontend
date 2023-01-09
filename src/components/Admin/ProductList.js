import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'

const ProductList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='name'/>
                <TextField source='price'/>
                <DateField source='expiry'/>
                <EditButton basePath='/products'/>
                <DeleteButton basePath='/productss'/>
            </Datagrid>
        </List>
    )
}

export default ProductList