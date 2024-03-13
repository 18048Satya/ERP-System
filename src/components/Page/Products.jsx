import React, { useEffect, useState } from 'react'
import { Avatar, Rate, Space, Table, Typography } from 'antd'
import { getProduct } from '../../API'
function Products() {
  return (
    <Space direction="vertical">
      <Typography.Title level={4}>Products</Typography.Title>

     <ProductsList/>

    </Space>

  )
}
function ProductsList() {
  const [dataSource, setDataSource] = useState([])
  const [loading,setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
   getProduct().then(res=>{
       setDataSource(res.products);
       setLoading(false);
   });
    }, []);
    
   return (
       <>
   <Table className="producttable"
   columns={[
       {
        title:"Thumbnail",
        dataIndex:"thumbnail",
        render: (link) => {
          return  <Avatar src={link}/>
        }
       },
       {
           title:"Title",
           dataIndex:"title",
       },
       {
        title:  "Description",
        dataIndex:  "description",
       },
       {
        title:"Rating",
        dataIndex:"rating",
        render:(rating) => {
         return <Rate value={rating} allowHalf disabled />
        }
      },
       {
         title:"Brand",
         dataIndex:"brand"
       },
       {
           title:"Stock",
           dataIndex:"stock",
       },
       {
           title:"Price",
           dataIndex:"price",
           render:(value) =><span>${value}</span>,
       }
      
   ]}
   loading={loading}
   dataSource={dataSource}
   pagination={{
    pageSize: 5,
   }}
   style={{width:1250}}
   > 
     
   </Table>

   </>
   )

}

export default Products