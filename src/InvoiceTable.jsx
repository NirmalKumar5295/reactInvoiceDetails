import React, { useEffect, useState } from 'react';
import {Table} from 'antd';
const { Column } = Table;


function InvoiceTable ()  {
        const [invoiceData, setInvoiceData] = useState();

        const getInvoiceList  = async () => {
    
            const url = 'http://localhost:8080/invoicedetails';
    
            const response = await fetch (url);
                    try {
                        const responseJson = await response.json();
                        console.log(responseJson);
                        setInvoiceData (responseJson);
                    } catch (err) {
                        console.error(err);
                    }
    
        };
    
         useEffect (()=> {
          getInvoiceList();
         }, []);
      
    
  const columns = [
    {
      title: 'Invoice Number',
      dataIndex: 'invoiceNo',
      key: 'serialNo'
    },
    {
      title: 'Supplier Name',
      dataIndex: 'supplierName',
      key: 'serialNo',
    },
    {
      title: 'Invoice Amount',
      dataIndex: 'invoiceAmount',
      key: 'serialNo',
    }
  ];
    
  return(
    <>
  <Table columns={columns} dataSource={invoiceData} />
   </>
   );
  }


  
    
export default InvoiceTable;