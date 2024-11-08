import { useToast } from "@chakra-ui/react";
const toastId = "toast-id";

export enum ToastStatusEnum {
  info = "info",
  warning = "warning",
  success = "success",
  error = "error",
  loading = "loading",
}

const useCustomToast = () => {
  const toast = useToast();

  const showToast = ({
    title,
    status,
    description,
    duration = 3000,
    isClosable = true,
  }: {
    title: string;
    status: ToastStatusEnum;
    description?: string;
    duration?: number; // milliseconds
    isClosable?: boolean;
  }) => {
    if (toast.isActive(toastId)) {
      return;
    }
    return toast({
      id: toastId,
      title,
      description,
      status,
      duration: duration,
      isClosable: isClosable,
    });
  };

  return {
    showToast,
  };
};

export default useCustomToast;
