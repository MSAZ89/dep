import Head from 'next/head'
import { Container, Heading, Box, Center } from '@chakra-ui/react'
import MyFooter from '../components/MyFooter'
import MyHeader from '../components/MyHeader'

export default function About() {
  return (
    <Container maxW={{sm: 'full', xl: '60%'}} p={4} mt={8}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MyHeader/>
        <Box maxW="full" my={8}><img src="t1.jpg"/></Box>
        <Heading as='h1' size='xl'>
            404 - Page Not Found.
        </Heading>
      </main>

      <MyFooter/>
    
    </Container>
  )
}
