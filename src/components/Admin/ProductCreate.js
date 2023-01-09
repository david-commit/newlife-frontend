import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const ProductCreate = (props) => {
    return (
    <Create title='Create a Post' {...props}>
        <SimpleForm>
        <TextInput source='name'/>
        <TextInput source='price'/>
        <DateInput label='Expiry' source='expiredOn'/>
        </SimpleForm>

    </Create>
    )
}

export default ProductCreate