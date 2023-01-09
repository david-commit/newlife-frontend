import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PractitionerList from './PractitionerList'
import PractitionerCreate from './PractitionerCreate'
import ProductEdit from './ProductEdit'
import ProductList from './ProductList'
import ProductCreate from './ProductCreate'
import ProductCreate from './ProductCreate'


function Admn() {
  return <Admin 
  // dataProvider={restProvider('http://localhost:3000')}
  >
    <Resource
    name='posts'
    list={PractitionerList}
    create={PractitionerCreate}
    edit={PractitionerEdit}
    />
        <Resource
    name='Products'
    list={ProductList}
    create={ProductCreate}
    edit={ProductEdit}
    />
  </Admin>
}

export default Admn;
