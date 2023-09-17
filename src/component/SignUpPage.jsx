import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
  
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import Header1 from './Header1';
import { useColorMode } from '@chakra-ui/react';

const SignUpPage = () => {
  const {colorMode} = useColorMode();
  const bgc = colorMode === 'light' ? '#f6f6f6' : '#000000';

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can add your signup logic here
  };

  return (
    <>
      <Header1 />
      <Box
        w={'30%'}
        h={'70vh'}
        mx="auto"
        p="5"
        my={'15vh'}
        borderRadius={'30px'}
        bg={bgc}
      >
        <VStack>
          <Box textAlign="center">
            <FaUser color="#0ba0db" fontSize="3rem" />
            <Text fontSize="xl" fontWeight="bold" mt="2">
              Sign Up
            </Text>
          </Box>
          <form onSubmit={handleSubmit}>
            <FormControl mt="4">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                required
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                required
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  required
                />
                <InputRightElement width="3rem">
                  <IconButton
                    size="sm"
                    onClick={togglePasswordVisibility}
                    variant="ghost"
                    colorScheme="#0ba0db"
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    icon={showPassword ? <FaEye /> : <FaEyeSlash />}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  required
                />
              </InputGroup>
            </FormControl>
            <VStack p={'5'}>
              <Button
                type="submit"
                mt="6"
                colorScheme="black"
                size="lg"
                bg={'#0ba0db'}
                p={'2'}
                w={'100px'}
                borderRadius={'10px'}
              >
                Sign Up
              </Button>
            </VStack>
          </form>
          <Box textAlign="center" mt="4">
            <Text>
              Already have an account?{' '}
              <Text
                as="span"
                color="#0ba0db"
                onClick={() => navigate('/login')}
                cursor={'pointer'}
              >
                Log In
              </Text>
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default SignUpPage;
