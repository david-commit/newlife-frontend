import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PractitionerCreate = (props) => {
    return (
    <Create title='Create a Product' {...props}>
        <SimpleForm>
        <TextInput source='name'/>
        <TextInput multiline source='body'/>
        <DateInput label='Published' source='publishedAt'/>
        </SimpleForm>

    </Create>
    )
}

export default PractitionerCreate