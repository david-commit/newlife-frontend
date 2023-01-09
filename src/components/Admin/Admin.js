import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
// import PostList from './PractitionerList'
import PostCreate from './PractitionerCreate'
import PostEdit from './ProductEdit'
import ProductList from './ProductList'
import ProductCreate from './ProductCreate'
import ProductEdit from './ProductEdit'


function Admn() {
  return <Admin 
  // dataProvider={restProvider('http://localhost:3000')}
  >
    <Resource
    name='posts'
    list={PostList}
    create={PostCreate}
    edit={PostEdit}
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
