import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PractitionerEdit = (props) => {
    return (
    <Edit title='Edit a Practitioner details' {...props}>
        <SimpleForm>
        <TextInput disabled source='id'/>
        <TextInput source='title'/>
        <TextInput multiline source='body'/>
        <DateInput label='Published' source='publishedAt'/>
        </SimpleForm>

    </Edit>
    )
}

export default PostEdit