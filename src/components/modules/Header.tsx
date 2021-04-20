import React from 'react'
import styled from 'styled-components'

import Button from '../elements/Button'

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <img src="https://res.cloudinary.com/dp4scbmz5/image/upload/v1618917440/Group_1_xmunc2.png" alt="Logo" />
      <Button>Download CV</Button>
    </HeaderDiv>
  )
}

export default Header
