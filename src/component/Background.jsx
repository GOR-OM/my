import React from 'react';
import img1 from '../asset/background.jpg';
import { Box, Container, Text } from '@chakra-ui/react';

const Background = () => {
  return (
    <div>
      <Box position="relative" zIndex={0}>
        <Container
          backgroundImage={`url(${img1})`} // Set the background image
          backgroundSize="cover" // Adjust as needed (e.g., "contain")
          backgroundPosition="center center" // Adjust as needed
          backgroundRepeat="no-repeat"
          top={0}
          height="100vh"
          filter="blur(3px)"
        ></Container>

        <Container
          position="absolute"
          top="70%"
          left="70%"
          transform="translate(-50%, -50%)"
          zIndex={1}
        >
          <h1
            style={{
              color: 'white',
              fontSize: '4rem',
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'serif',
            }}
          >Stock Market</h1>
          <Text
            style={{
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'serif',
            }}
          >Maintain Your Portfolio</Text>
        </Container>

      </Box>
    </div>
  );
};

export default Background;
