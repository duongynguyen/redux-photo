import React from "react";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ValueType } from "react-select/src/types";

type OptionType = { label: string; value: number };

export interface Props {
  field: {
    name: string;
    value: string | number;
    onChange?: any;
  };
  form: object;

  options: any[];
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

const SelectField: React.FC<Props> = ({
  field,
  form,
  options = [],
  label = "",
  placeholder = "",
  disabled = false,
}) => {
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionChange = (selectOption: ValueType<OptionType>) => {
    const selectedValue = selectOption
      ? (selectOption as OptionType).value
      : selectOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };

    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        //
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
      />
    </FormGroup>
  );
};

export default SelectField;
