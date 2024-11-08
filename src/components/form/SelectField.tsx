import { CustomInput } from "@/types/common";
import {
  Box,
  chakra,
  FormControl,
  FormErrorMessage,
  Select,
  SelectProps,
  Text,
  TextProps,
  VStack,
} from "@chakra-ui/react";
import get from "lodash/get";
import isNil from "lodash/isNil";
import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";

interface CustomSelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  hForm: UseFormReturn<T>;
  rules: RegisterOptions<T>;
  title?: string;
  titleProps?: TextProps;
  options: CustomInput[];
}

export type SelectFieldProps<T extends FieldValues> =
  CustomSelectFieldProps<T> & Omit<SelectProps, "name">;

function SelectField<T extends FieldValues>({
  hForm,
  name,
  rules,
  title,
  titleProps,
  options,
  ...props
}: SelectFieldProps<T>) {
  const {
    formState: { errors },
    control,
  } = hForm;

  const error = get(errors, name);

  return (
    <Controller
      rules={rules}
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
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
                <Select
                  fontSize="14px"
                  lineHeight="1.25"
                  border="1px solid black"
                  _hover={{}}
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  {...props}
                >
                  {options.map((opt, index) => (
                    <option key={`${name}-${index}`} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {error ? "This field is required" : ""}
                </FormErrorMessage>
              </Box>
            </VStack>
          </FormControl>
        );
      }}
    />
  );
}

export default SelectField;
