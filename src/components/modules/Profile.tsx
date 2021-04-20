import React from 'react'
import styled from 'styled-components'

import Heading from '../elements/Heading'
import BasicText from '../elements/BasicText'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 700px) {
    margin-top: 75px;
  }
`

const Profile: React.FC = () => {
  return (
    <Main>
      <img
        src="https://res.cloudinary.com/dp4scbmz5/image/upload/v1618919664/1601491255079_1_mchpcm.png"
        alt="Profile"
        width="175"
        height="175"
      />
      <Heading>Adam Schinzel</Heading>
      <BasicText job>Software engineer and student</BasicText>
      <BasicText profile>📱Mobile: React Native</BasicText>
      <BasicText profile>🌐 Web: React (Next.js, Gatby), Vue (Nuxt.js, Gridsome), Hugo</BasicText>
      <BasicText profile>💻 Backend: Node.js, PostgreSQL, Docker</BasicText>
    </Main>
  )
}

export default Profile
