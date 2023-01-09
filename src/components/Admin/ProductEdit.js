import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const ProductEdit = (props) => {
    return (
    <Edit title='Edit a Product' {...props}>
        <SimpleForm>
        <TextInput disabled source='id'/>
        <TextInput source='name'/>
        <TextInput multiline source='price'/>
        <DateInput label='Expiry' source='expireOn'/>
        </SimpleForm>

    </Edit>
    )
}

export default ProductEdit