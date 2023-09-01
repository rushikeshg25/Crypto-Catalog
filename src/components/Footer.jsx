import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "../assets/imgg.jpg";

const imageLink = "https://avatars.githubusercontent.com/u/45139653?s=96&v=4";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={imageLink} />
          <Text>Rushikesh G</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
