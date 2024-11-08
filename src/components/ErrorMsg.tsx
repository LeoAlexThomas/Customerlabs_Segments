import { Center, Text } from "@chakra-ui/react";
import React from "react";

const ErrorMsg = ({ text }: { text?: string }) => {
  return (
    <Center>
      <Text>{text ?? "Something went wrong"}</Text>
    </Center>
  );
};

export default ErrorMsg;
