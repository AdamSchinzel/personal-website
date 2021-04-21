import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

import GlobalStyle from '../../../shared/Global'
import theme from '../../../config/theme'

import Header from '../modules/Header'
import Footer from '../modules/Footer'

const Layout = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.black_primary};
`

const Container = styled.div`
  max-width: 1300px;
  padding-left: 1.4rem;
  padding-right: 1.4rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  height: 100%;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: 100%;
`

interface Props {
  children: React.ReactNode
}

const Default: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dp4scbmz5/image/upload/v1618916079/favicon_cfeg6j.png" />
        <title>Adam Schinzel - software engineer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />
        <meta
          name="description"
          content="I'm software engineer and student, who is exploring new technologies and developing software solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adamschinzel.cz/" />
        <meta property="og:title" content="Adam Schinzel - software engineer" />
        <meta
          property="og:description"
          content="I'm software engineer and student, who is exploring new technologies and developing software solutions"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://adamschinzel.cz/" />
        <meta property="twitter:title" content="Adam Schinzel - software engineer" />
        <meta
          property="twitter:description"
          content="I'm software engineer and student, who is exploring new technologies and developing software solutions"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Container>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </Container>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default Default
