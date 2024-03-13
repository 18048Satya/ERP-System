import React from 'react'
import { Button, Card, Space, Typography } from 'antd'
function Pricing() {
  return (
    <Space direction="vertical">
      <Typography.Title level={4}>Pricing</Typography.Title>
      <Space className='pricecards'>
       <Card style={{width:400}}>
       <Typography.Title level={5}>Basic</Typography.Title>
       <Typography.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse quae expedita libero voluptates maxime nihil in ab autem similique et fugiat adipisci, ipsa totam. Consequuntur eos aliquid facere reiciendis. </Typography.Text>
       <Typography style={{padding:10}}><Button style={{color:"#fff", backgroundColor:"blue"}}>Subscribe</Button></Typography>
       </Card>
       <Card style={{width:400}}>
       <Typography.Title level={5}>Platinum</Typography.Title>
       <Typography.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse quae expedita libero voluptates maxime nihil in ab autem similique et fugiat adipisci, ipsa totam. Consequuntur eos aliquid facere reiciendis. </Typography.Text>
       <Typography style={{padding:10}}><Button style={{color:"#fff", backgroundColor:"blue"}}>Subscribe</Button></Typography>
       </Card>
       <Card style={{width:400}}>
       <Typography.Title level={5}>Premium</Typography.Title>
       <Typography.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse quae expedita libero voluptates maxime nihil in ab autem similique et fugiat adipisci, ipsa totam. Consequuntur eos aliquid facere reiciendis. </Typography.Text>
       <Typography style={{padding:10}}><Button style={{color:"#fff", backgroundColor:"blue"}}>Subscribe</Button></Typography>
       </Card>
       </Space>
    </Space>
  )
}

export default Pricing