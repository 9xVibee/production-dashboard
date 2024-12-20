import { Flex, Heading, Text } from "@sparrowengg/twigs-react";

const Events = () => {
  return (
    <Flex
      css={{
        width: "100%",
        backgroundColor: "$primary",
      }}
      alignItems="center"
      justifyContent={"center"}
    >
      <Heading size={"h2"}>Events</Heading>
    </Flex>
  );
};

export default Events;
