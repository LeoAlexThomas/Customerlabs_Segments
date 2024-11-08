import ErrorMsg from "./ErrorMsg";
import Loader from "./Loader";
import useSWR, { KeyedMutator } from "swr";

function WithLoader<T>({
  apiUrl,
  children,
  placeholder,
}: {
  apiUrl: string;
  children: ({
    data,
    mutate,
  }: {
    data: T;
    mutate: KeyedMutator<T>;
  }) => React.ReactNode;
  placeholder?: React.ReactNode;
}) {
  const { data, error, mutate } = useSWR<T>(apiUrl);

  const isLoading = !data && !error;

  if (error) {
    return <ErrorMsg text={error.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return placeholder ?? <></>;
  }

  return <>{children({ data, mutate })}</>;
}

export default WithLoader;
