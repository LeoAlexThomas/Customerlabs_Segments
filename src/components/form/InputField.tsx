import {
  Box,
  chakra,
  FormControl,
  FormErrorMessage,
  Input,
  InputProps,
  Text,
  TextProps,
  VStack,
} from "@chakra-ui/react";
import isNil from "lodash/isNil";
import get from "lodash/get";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";

interface CustomInputFieldProps<T extends FieldValues> {
  name: Path<T>;
  hForm: UseFormReturn<T>;
  rules: RegisterOptions<T>;
  title?: string;
  titleProps?: TextProps;
}

export type InputFieldProps<T extends FieldValues> = CustomInputFieldProps<T> &
  Omit<InputProps, "name">;

function InputField<T extends FieldValues>({
  hForm,
  name,
  rules,
  title,
  titleProps,
  ...props
}: InputFieldProps<T>) {
  const {
    formState: { errors },
    register,
  } = hForm;

  const error = get(errors, name);

  return (
    <FormControl
      isRequired={Boolean(rules?.required)}
      isInvalid={Boolean(error)}
    >
      <VStack alignItems="stretch">
        {!isNil(title) && (
          <Text
            fontSize={["12px", null, "16px"]}
            fontWeight={500}
            lineHeight="1.2"
            {...titleProps}
          >
            {title}{" "}
            {Boolean(rules.required) ? (
              <chakra.span color="#ff5b5b">*</chakra.span>
            ) : (
              ""
            )}
          </Text>
        )}
        <Box>
          <Input
            fontSize="14px"
            lineHeight="1.25"
            border="1px solid black"
            _hover={{}}
            {...props}
            {...register(name, rules)}
          />
          <FormErrorMessage>
            {error ? "This field is required" : ""}
          </FormErrorMessage>
        </Box>
      </VStack>
    </FormControl>
  );
}
export default InputField;
