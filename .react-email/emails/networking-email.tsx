import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    HtmlProps,
    Img,
    Tailwind,
    Link,
    Preview,
    Text,
    Button,
  } from '@react-email/components';
  import * as React from 'react';

  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';


  function NetworkingEmail() {
    return ( 
        <Html>
          
          <Head /> 
          <Tailwind>
          <Body className='bg-white mx-auto my-15 font-sans text-center'>
            <Img className='mx-auto w-30 rounded-xl' src='https://freshchalk-storage.imgix.net/p/sX/knu4wk3QU?w=200&h=200'></Img>
            <Container className='p-8 rounded-lg shadow-lg'>
            <Heading className='text-xl mx-auto'>Matt Atkins here!</Heading>
              <Text className='mx-auto'>
                You are probably seeing this because we are connected somewhere in our professional network. I would love your help in finding a software engineer position. If you click the button below, you will be directed to my portfolio and resume! Don't be shy, you get money for referring in a new employee at most companies!
              </Text>
           <Button className='bg-green-600 text-white font-bold p-4 rounded-lg' href='https://github.com/matkins216'>Portfolio</Button>
            </Container>
          </Body>
          </Tailwind>
        </Html>

     );
  }
  
  export default NetworkingEmail;