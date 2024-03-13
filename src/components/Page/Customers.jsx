import { Space, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { getUsers } from '../../API'

function Customers() {
  return (
    <Space direction="vertical">
        <Typography.Title level={4}>Customers</Typography.Title>
        <CustomersList/>

    </Space>
  )
}
function CustomersList() {
  const [dataSource, setDataSource] = useState([])
  const [loading,setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
   getUsers().then(res=>{
       setDataSource(res.users);
       setLoading(false);
   });
    }, []);
    
   return (
       <>
   <Table
   columns={[
      {
        title:"SL no",
        dataIndex:"id",
      },
       {
           title:"Name",
           dataIndex:"firstName",
       },
       {
        title:"User Name",
        dataIndex:"username",
      },
       {
           title:"Gender",
           dataIndex:"gender",
       },
       {
           title:"Age",
           dataIndex:"age",
         
       },
       {
        title:"Email Id",
        dataIndex:"email"
       },
       {
        title:"Mobile No",
        dataIndex:"phone",
       }
      
   ]}
   loading={loading}
   dataSource={dataSource}
   style={{
    width:1250,
    height:350
   }}
   pagination={{
    pageSize: 6,
   }}

   > 
     
   </Table>

   </>
   )

}

export default Customers