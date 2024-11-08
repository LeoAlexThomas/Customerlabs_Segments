import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronBack } from "@emotion-icons/ionicons-sharp/ChevronBack";

const segmentFormId = "segmentFormId";

const SegmentDrawer = ({
  isOpen,
  onClose,
  children,
  onFormSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmit: () => void;
  children: React.ReactNode;
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      placement={isMobile ? "bottom" : "right"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader bg="#39aebc">
          <HStack>
            <IconButton
              aria-label="back"
              onClick={onClose}
              bg="transparent"
              _hover={{
                bg: "transparent",
              }}
              icon={<ChevronBack size={20} color="white" />}
            />
            <Text color="white">Saving Segment</Text>
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <form id={segmentFormId} onSubmit={onFormSubmit}>
            {children}
          </form>
        </DrawerBody>

        <DrawerFooter bg="#f6f6f6" gap={10}>
          <Button
            bg="#41b494"
            form={segmentFormId}
            color="white"
            type="submit"
            _hover={{
              bg: "#21b494",
            }}
          >
            Save to Segment
          </Button>
          <Button bg="white" color="red" onClick={onClose}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SegmentDrawer;
