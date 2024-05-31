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
        weight={"bold"}
        css={{
          fontSize: "3xl",
        }}
      >
        Events
      </Text>
    </Flex>
  );
};

export default Events;
