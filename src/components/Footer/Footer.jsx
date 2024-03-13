import Typography from 'antd/es/typography/Typography'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <Typography.Link href="tel:+12899747073">+12899747073</Typography.Link>
      <Typography.Link href="https://www.google.com" target ={"_blank"}>Privacy Policy</Typography.Link>
      <Typography.Link href="https://www.google.com" target ={"_blank"}>Terms of Use</Typography.Link>


    </div>
  )
}

export default Footer