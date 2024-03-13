import React, { useEffect, useState } from 'react'
import { Card, Space, Statistic, Table, Typography } from 'antd'
import { DollarCircleOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { getOrder } from '../../API'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  return (
    <Space size={12} direction="vertical">
    <Typography.Title level={4}>Dashboard</Typography.Title>
    <Space className='dashboardcard' >
      <DasboardCard icon={<ShoppingCartOutlined  style={{color:"green", backgroundColor:"rgba(0,255,0,0.16)", borderRadius:"20px", fontSize:"24px", padding:"5px"}}/>} title={"Orders"}  value ={23400}/>
      <DasboardCard icon={<ShopOutlined style={{color:"red", backgroundColor:"rgba(255,0,0,0.16)", borderRadius:"20px", fontSize:"24px", padding:"5px"}}/>} title={"Products"}  value ={45000}/>
      <DasboardCard icon={<UserOutlined style={{color:"blue", backgroundColor:"rgba(0,0,255,0.16)", borderRadius:"20px", fontSize:"24px", padding:"5px"}}/>} title={"Customers"}  value ={328489}/>
      <DasboardCard icon={<DollarCircleOutlined style={{color:"violet", backgroundColor:"rgba(238,130,238,0.16)", borderRadius:"20px", fontSize:"24px", padding:"5px"}}/>} title={"Revenue"}  value ={"₹"+9975709}/>
    </Space>
    <Space className='dashboardcard'>
        <RecentOrders/>
        <DashboardChart />
    </Space>
    </Space>
  )
}
function DasboardCard({title , value , icon}){
    return(
        <Card style={{width:200,height:100}}>
          <Space direction="horizontal">
           {icon}
            <Statistic title={title} value={value} />
             
          </Space>
        </Card>
    )
}

function RecentOrders() {
   const [dataSource, setDataSource] = useState([])
   const [loading,setLoading] = useState(false)
     useEffect(() => {
       setLoading(true)
    getOrder().then(res=>{
        setDataSource(res.products.splice(0,4));
        setLoading(false);
    });
     }, []);
     
    return (
        <>
        <Typography.Text>Recent Orders</Typography.Text>
    <Table  className='table'
    columns={[
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
        },
        {
          title:"Id",
          dataIndex:"id",
        }
    ]}
    loading={loading}
    dataSource={dataSource}
    pagination={false}
    > 
      
    </Table>

    </>
    )

}
function DashboardChart() {
 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' 
      },
      title: {
        display: true,
        text: 'Order Revenue',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug','Sep','Oct','Nov','Dec'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: labels.map(() => Math.random()*1000),
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
      },
      
    ],
  };
 
  return (
    <>
  <Card className="barcard" >
  <Bar className="bar" options={options} data={data}  />
  </Card>
  </>
  );
  
}

export default Dashboard