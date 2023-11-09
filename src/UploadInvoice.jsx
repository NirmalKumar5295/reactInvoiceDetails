import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import InvoiceTable from './InvoiceTable';
const props = {
  name: 'file',
  action: 'http://localhost:8080/invoicedetails',
  headers: {
    authorization: 'authorization-text',
  },
  async onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file);
   // await callApi();
    }
  }
}
async function  callApi() {
  fetch('http://localhost:8080/invoicedetails', { method: 'GET' })
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)) ) // Displays the firstName from the API response
}

const UploadInvoice = () => (
  <>
  <Upload {...props}>
    <Button icon={<UploadOutlined />} onClick={()=> callApi}>Upload</Button>
  </Upload>
  <InvoiceTable />
  </>
);
export default UploadInvoice;