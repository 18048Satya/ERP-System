import React, { useEffect, useState } from 'react'
import { Space, Table, Typography } from 'antd'
import { getOrder } from '../../API'
function Orders() {
  return (
    <Space direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <OrderList/>
    </Space>

  )
}
function OrderList() {
  const [dataSource, setDataSource] = useState([])
  const [loading,setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
   getOrder().then(res=>{
       setDataSource(res.products);
       setLoading(false);
   });
    }, []);
    
   return (
       <>
   <Table
   columns={[
      {
        title:"Id",
        dataIndex:"id",
      },
       {
           title:"Title",
           dataIndex:"title",
       },
       {
           title:"Quantity",
           dataIndex:"quantity",
       },
       {
           title:"Price",
           dataIndex:"price",
           render:(value)=><span>${value}</span>
       },
       {
        title:"Total",
        dataIndex:"total"
       },
       {
        title:"Discounted Total",
        dataIndex:"discountedPrice",
        render:(value)=><span>${value}</span>
       }
      
   ]}
   loading={loading}
   dataSource={dataSource}
   style={{width:900, height:400}}
   > 
     
   </Table>

   </>
   )

}
export default Orders