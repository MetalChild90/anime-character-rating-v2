interface FormInputProps {
  name: string;
  value: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInput({ name, value, placeholder, handleChange }: FormInputProps) {
  return (
    <input
      className="Form-input"
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      maxLength={30}
    />
  );
}

export default FormInput;
