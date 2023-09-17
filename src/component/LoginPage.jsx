import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  HStack,
  Container,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import React from 'react';
import Header1 from './Header1';
import { useColorMode } from '@chakra-ui/react';



const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {colorMode} = useColorMode();
  const bgc = colorMode === 'light' ? '#f6f6f6' : '#000000';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

  };

  return (
    <>
      <Header1 />
      <Box
       w={'30%'}
       h={'60vh'}
       mx="auto"
       p="5"
       my={'20vh'}
       borderRadius={'10px'}
       pt={'24'}
        shadow={'md'}
      bg={bgc}
       boxShadow='lg'
        
      >
     
      <VStack
      >
        <Box textAlign="center">
          <FaUser color="#0ba0db" fontSize="3rem" />
          <Text fontSize="xl" fontWeight="bold" mt="2">
            Sign In
          </Text>
        </Box>
        <form>
          <FormControl mt="4">
            <FormLabel>Email address</FormLabel>
            <InputGroup>
              <Input type="email" placeholder="Enter email" />
            </InputGroup>
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <HStack>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
              />
              <InputRightElement width="3rem">
                <IconButton
                  size="sm"
                  onClick={togglePasswordVisibility}
                  variant="ghost"
                  colorScheme="#0ba0db"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  icon={showPassword ? <FaEye /> : <FaEyeSlash />}
                />
              </InputRightElement>
              </HStack>
            </InputGroup>
          </FormControl>
          <VStack p={'5'}>
          <Button
            mt="10"
            colorScheme="black" // Use colorScheme to set the button color
            size="lg"
            bg={'#0ba0db'}
            p={'2'}
            w={'100px'}
            borderRadius={'10px'}
            onClick={() => navigate('/dashboard')}
          >
            Log In
          </Button>

          <Text textAlign="right" mt="2">
            <Link to="#">Forgot password?</Link>
          </Text>
          </VStack>
          
        </form>
        <Box textAlign="center" mt="4">
          <Text>
            Don't have an account?{' '}
            <Text
              as="span"
              color="#0ba0db"
              onClick={() => navigate('/signup')}
              cursor={'pointer'}
            >
              Sign Up
            </Text>
          </Text>
        </Box>
      </VStack>
      </Box>
    </>
  );
};
export default LoginPage;
