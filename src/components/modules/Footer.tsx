import React from 'react'
import styled from 'styled-components'

import { Icon } from 'ts-react-feather-icons'

import BasicText from '../elements/BasicText'

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    flex-direction: column;

    margin-top: 75px;
    padding-bottom: 30px;

    p {
      order: 2;
    }
  }
`

const Icons = styled.div`
  display: flex;
  align-items: center;

  svg {
    &:hover {
      stroke: ${props => props.theme.white_secodary};
      transition: ${props => props.theme.transition_primary};
    }
  }

  a {
    text-decoration: none;
    margin-left: 25px;
  }

  @media only screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`

const Footer: React.FC = () => {
  return (
    <FooterDiv>
      <BasicText>Copyright © 2021 Adam Schinzel. All rights reserved.</BasicText>
      <Icons>
        <a href="https://github.com/AdamSchinzel" target="_blank" rel="noreferrer">
          <Icon name="github" color="#757575" />
        </a>
        <a href="https://gitlab.com/AdamSchinzel" target="_blank" rel="noreferrer">
          <Icon name="gitlab" color="#757575" />
        </a>
        <a href="https://www.linkedin.com/in/adam-schinzel-5a5bb31a2" target="_blank" rel="noreferrer">
          <Icon name="linkedin" color="#757575" />
        </a>
      </Icons>
    </FooterDiv>
  )
}

export default Footer
