import React from "react";
import { Box, Text, Heading, useColorMode } from "@chakra-ui/react";
import Header1 from "./Header1";

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Header1 />
      <Box
        backgroundColor={colorMode === "dark" ? "black" : "white"}
        color={colorMode === "dark" ? "white" : "black"}
        py="5rem"
        px="2rem"
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
            <li>View graphical analysis of previous trends of stock prices</li>
            <li>View near future predictions of prices for stocks</li>
            <li>And many more...</li>
          </ul>
        </Text>
        <Text fontSize="lg">
          About the team:
          <br />
          We are a team of 12 members who are currently still working on
          designing, developing, and testing the entire web application for the
          purpose of stock market prices prediction and analysis.
        </Text>
        <Text fontSize="lg" mt="2rem">
          Contact Information:
          <br />
          To contact us, you can mail us at: <b>swegrp30@gmail.com</b>
        </Text>
      </Box>
    </>
  );
};

export default About;
