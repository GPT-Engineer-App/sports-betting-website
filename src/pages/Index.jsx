import { Box, Button, Flex, Heading, Image, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { FaFutbol, FaBasketballBall, FaPlus, FaMinus } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleBet = () => {
    toast({
      title: "Bet Placed",
      description: "Your bet has been successfully placed!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Sports Betting Website</Heading>
      <Stack spacing={5}>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="xl">Football Match</Text>
          <Flex alignItems="center">
            <Button leftIcon={<FaMinus />} size="sm" mr={2} />
            <Input width="50px" textAlign="center" defaultValue="0" />
            <Button leftIcon={<FaPlus />} size="sm" ml={2} />
          </Flex>
          <Button leftIcon={<FaFutbol />} colorScheme="teal" onClick={handleBet}>
            Bet
          </Button>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="xl">Basketball Game</Text>
          <Flex alignItems="center">
            <Button leftIcon={<FaMinus />} size="sm" mr={2} />
            <Input width="50px" textAlign="center" defaultValue="0" />
            <Button leftIcon={<FaPlus />} size="sm" ml={2} />
          </Flex>
          <Button leftIcon={<FaBasketballBall />} colorScheme="orange" onClick={handleBet}>
            Bet
          </Button>
        </Flex>
      </Stack>
      <Image src="https://images.unsplash.com/photo-1499877468582-90301c136ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBiZXR0aW5nfGVufDB8fHx8MTcxNDcwMTk2MXww&ixlib=rb-4.0.3&q=80&w=1080" mt={10} />
    </Box>
  );
};

export default Index;
