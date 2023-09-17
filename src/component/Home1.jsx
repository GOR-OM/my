import React, { useState, useEffect } from 'react';
import Header1 from './Header1';
import {
  VStack,
  Box,
  Heading,
  Text,
  useColorMode,
  HStack,
  Flex,
  Image,
  Center,
} from '@chakra-ui/react';
import Background from './Background';
import bullAndBearImage from '../asset/bull&bear.png';
import Typed from 'react-typed';
import Animation from '../asset/animation.gif';
import IndianNews from './IndianNews';

const Home1 = () => {
  const { colorMode } = useColorMode();
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    '"The stock market is filled with individuals who know the price of everything, but the value of nothing." – Philip Fisher',
    "The four most dangerous words in investing are: 'This time it's different.''' – Sir John Templeton",
    '"In the short run, the market is a voting machine, but in the long run, it is a weighing machine." – Benjamin Graham',
    '"The stock market is a device for transferring money from the impatient to the patient." – Warren Buffett',
    "The stock market is a no-called-strike game. You don't have to swing at everything – you can wait for your pitch. – Warren Buffett",
    '"The stock market is never obvious. It is designed to fool most of the people, most of the time." – Jesse Livermore',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Header1 id="home" />
      <Background />
      <VStack h={'90vh'}>
        {/* bull-bear  */}
        <Box
          bg={colorMode === 'dark' ? '#0a0174' : '#cfd2ff'}
          minH={'100vh'}
          w={'100vw'}
        >
          <HStack>
            <Box>
              <Image
                src={bullAndBearImage}
                alt="Bull and Bear  "
                width="700px"
                height="auto"
                my={'10rem'}
                animation="float 1s infinite alternate"
                css={{
                  '@keyframes float': {
                    '0%': {
                      transform: 'translateY(0)',
                    },
                    '100%': {
                      transform: 'translateY(-20px)',
                    },
                  },
                }}
              />
            </Box>

            {/* text */}
            <Box
              bg={colorMode === 'dark' ? '#cfd2ff' : '#0a0174'}
              color={colorMode === 'dark' ? '#0a0174' : '#cfd2ff'}
              minH={'80vh'}
              minW={'50vw'}
              maxW={'50vw'}
              my={'20vh'}
              borderRadius={'500px 0px 0px 500px'}
            >
              <Heading
                colorScheme="blue"
                fontSize="3rem"
                fontWeight="bold"
                textAlign="center"
                mt="5rem"
                mb="2rem"
                px="1rem"
              >
                {' '}
                Stock Market{' '}
              </Heading>
              <Text fontSize="2rem" mx={'1rem'} mt={'2rem'}>
                <Typed
                  strings={[texts[textIndex]]}
                  typeSpeed={40}
                  backSpeed={20}
                  loop
                />
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box
          bg={colorMode === 'dark' ? '#0a0174' : '#cfd2ff'}
          minH={'120vh'}
          w={'100vw'}
          my={'-5vh'}
        >
          <HStack>
            <Box
              bg={colorMode === 'dark' ? '#cfd2ff' : '#0a0174'}
              color={colorMode === 'dark' ? '#0a0174' : '#cfd2ff'}
              minH={'80vh'}
              minW={'50vw'}
              maxW={'50vw'}
              borderRadius={'0px 500px 500px 0px'}
              my={'20vh'}
            >
              <Heading
              colorScheme="blue"
              fontSize="3rem"
              fontWeight="bold"
              textAlign="center"
              mt="5rem"
              mb="2rem"
              px="1"
              >
                Latest News...
              </Heading>
              <IndianNews />
            </Box>

            <Box alignItems={'center'}>
              <Image
                src={Animation}
                alt="Bull and Bear  "
                width="500px"
                height="auto"
                ml={'10vw'}
              />
            </Box>
          </HStack>
        </Box>

        <Box
          backgroundColor={colorMode === 'dark' ? 'black' : 'white'}
          color={colorMode === 'dark' ? 'white' : 'black'}
          pb="2rem"
          px="2rem"
          minH={'70vh'}
          id="about"
          bottom={'0px'}
        >
          <Heading fontSize="2xl" textAlign="center" mb="2rem">
            About Us
          </Heading>
          <Text fontSize="lg" mb="1rem">
            This web application is designed for the purpose of providing near
            future stock prices predictions based on the previous data analysis
            using machine learning algorithms.
          </Text>
          <Text fontSize="lg" mb="1rem">
            Features:
            <ul>
              <li>Maintain your profile and portfolio</li>
              <li>
                View graphical analysis of previous trends of stock prices
              </li>
              <li>View near future predictions of prices for stocks</li>
              <li>And many more...</li>
            </ul>
          </Text>
          <Text fontSize="lg">
            About the team:
            <br />
            We are a team of 12 members who are currently still working on
            designing, developing, and testing the entire web application for
            the purpose of stock market prices prediction and analysis.
          </Text>
          <Text fontSize="lg" mt="2rem">
            Contact Information:
            <br />
            To contact us, you can mail us at: <b>swegrp30@gmail.com</b>
          </Text>
        </Box>
      </VStack>
    </>
  );
};

export default Home1;
