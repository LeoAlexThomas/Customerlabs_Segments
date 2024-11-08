import { usePageLoader } from "../context/pageLoaderContext";
import useCustomToast, { ToastStatusEnum } from "./useCustomToast";

export function useApi() {
  const { onOpen: showPageLoader, onClose: hidePageLoader } = usePageLoader();
  const { showToast } = useCustomToast();

  const makeApiCall = async function <T>({
    apiFn,
    onSuccess,
    onFailure,
    successMsg,
    showLoader = true,
    showFailureMsg = true,
    hideMessage = false,
  }: {
    apiFn: () => T;
    onSuccess?: (response: T) => void;
    onFailure?: (error: unknown) => void;
    successMsg?: { title: string; description?: string; duration?: number };
    showLoader?: boolean;
    showFailureMsg?: boolean;
    hideMessage?: boolean;
  }) {
    if (showLoader) {
      showPageLoader();
    }
    try {
      const response = await apiFn();
      hidePageLoader();
      if (!hideMessage && successMsg) {
        showToast({
          title: successMsg.title,
          description: successMsg.description,
          status: ToastStatusEnum.success,
        });
      }

      if (onSuccess) {
        onSuccess(response);
      }
    } catch (e) {
      hidePageLoader();
      console.log(e);
      if (onFailure) {
        onFailure(e);
      }
      if (hideMessage || !showFailureMsg) {
        return;
      }
      showToast({
        title: "Something went wrong",
        status: ToastStatusEnum.error,
      });
    }
  };

  return { makeApiCall };
}
