import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Products = ({ dispatch, messages }) => {
    console.log('products messages: ', messages)
    function func(values) {
        dispatch({
            type: 'users/submitMess',
            payload: { values: values }
        })
    }

    return (
        <div>
            <h2> tap4fun MessageBoard</h2>
            <ProductList messages={messages}/>
            <ProductForm onSubmit={func} />
        </div>
    );
};

export default connect(({ users }) => ({
    messages: users.data
}))(Products);