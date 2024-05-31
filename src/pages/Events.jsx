import { Flex, Text } from "@sparrowengg/twigs-react";

const Events = () => {
  return (
    <Flex
      css={{
        width: "1080px",
        backgroundColor: "$primary",
      }}
      alignItems="center"
      justifyContent={"center"}
    >
      <Text
        css={{
          fontSize: "3xl",
          fontWeight: "600",
        }}
      >
        Events
      </Text>
    </Flex>
  );
};

export default Events;
