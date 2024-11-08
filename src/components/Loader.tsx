import { Center, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Center h="100%">
      <Spinner size="xl" />
    </Center>
  );
};

export default Loader;
