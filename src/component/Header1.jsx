import React from 'react';
import { Button, HStack, Text, useColorMode } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
const Header1 = () => {
  const { colorMode } = useColorMode();

  // Define colors based on the color mode
  const headerBackgroundColor = colorMode === 'dark' ? '#3d3d3d' : '#e7e7e7';
  const textColor = colorMode === 'dark' ? 'white' : 'black';

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      padding="1rem 2rem"
      bg={headerBackgroundColor}
      boxShadow="base"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={990}
      height="10vh"
    >
      <Text color={textColor} fontWeight="bold" fontSize="2xl">
        App Name
      </Text>
      <HStack spacing="2rem" px="20px" py="5px">
        <Button color={textColor} variant="unstyled">
          <Link to="/">Home</Link>
        </Button>
        <Button color={textColor} variant="unstyled">
          <Link to="/companies">Companies</Link>
        </Button>
        <Button color={textColor} variant="unstyled">
          <HashLink smooth to="/#about">
            About Us
          </HashLink>
        </Button>
        <Button color={textColor} variant="unstyled">
          <Link to="/login">Log in</Link>
        </Button>
        <Button color={textColor} variant="unstyled">
          <Button color={textColor} variant="unstyled">
          <ColorModeSwitcher/>
        </Button>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header1;
