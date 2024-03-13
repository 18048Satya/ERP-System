import { Badge, Drawer, Image, List, Space, Typography } from 'antd'
import { MailOutlined , BellFilled } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { getComment, getOrder } from '../../API'

function Header() {
  const [comments, setcomments] = useState([])
  const [orders, setorders] = useState([])
  const [commentOpen, setcommentOpen] = useState(false)
  const [notificationOpen, setnotificationOpen] = useState(false)
  useEffect(() => {
    getComment().then((res) => {
      setcomments(res.comments);
    })
    getOrder().then((res)=>{
      setorders(res.products);
    })
   
  }, [])
  

  return (
    <div className='header'>
      <Image width ={40}
      src="https://cdn-icons-png.flaticon.com/512/5167/5167532.png"></Image>
      <Typography.Title level={2}> Erp Dasboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
        <MailOutlined style={{fontSize:24}} onClick={() =>{
          setcommentOpen(true)

        }} />
        </Badge>
        <Badge count={orders.length}>
        <BellFilled style={{fontSize:24}} onClick={() =>{
          setnotificationOpen(true)

        }}/>
        </Badge>
      </Space>
      <Drawer title="Comments" open={commentOpen} onClose={()=>{
        setcommentOpen(false) 
      }} maskClosable>
        <List dataSource={comments} renderItem={(item) => {
          return <List.Item>{item.body}</List.Item>
        }}>
        </List>
      </Drawer>
      <Drawer title="Notifications" open={notificationOpen} onClose={()=>{
        setnotificationOpen(false) 
      }} maskClosable>
        <List dataSource={orders} renderItem={(item) => {
          return <List.Item><Typography.Text strong >{item.title}</Typography.Text> has been ordered!</List.Item>
        }}>
        </List>
      </Drawer>
    </div>
  )
}

export default Header