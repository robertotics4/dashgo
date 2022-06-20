import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Roberto Oliveira</Text>
        <Text color="gray.300" fontSize="small">robertooliveiragp@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Roberto Oliveira" src="https://github.com/robertotics4.png" />
    </Flex>
  );
}