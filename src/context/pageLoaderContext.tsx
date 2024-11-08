import PageLoader from "@/components/PageLoader";
import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext } from "react";

interface ContextInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const PageLoaderContext = createContext<ContextInterface>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export const PageLoaderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PageLoaderContext.Provider
      value={{
        isOpen: isOpen,
        onClose: onClose,
        onOpen: onOpen,
      }}
    >
      <PageLoader isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      {children}
    </PageLoaderContext.Provider>
  );
};

export const usePageLoader = () => useContext(PageLoaderContext);
