import React from 'react';
import { Table } from 'antd';

const ProductList = ({ messages }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'author',
  }, {
      title: 'Message',
      dataIndex: 'message',
  }];
  return (
    <Table
      dataSource={messages}
      columns={columns}
    />
  );
};

export default ProductList;