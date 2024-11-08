import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Spinner,
} from "@chakra-ui/react";

interface PageLoaderProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const PageLoader = (props: PageLoaderProps) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
      closeOnEsc={false}
      blockScrollOnMount
      closeOnOverlayClick={false}
      size="xs"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody py={8}>
          <Flex justify="center" align="center" color="black">
            <Spinner emptyColor="gray.200" color="highlightColor" mr={3} />{" "}
            Loading...
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PageLoader;
