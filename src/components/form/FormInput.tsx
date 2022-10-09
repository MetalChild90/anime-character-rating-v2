interface Props {
  name: string;
  value: string;
  placeholder: string;
  handleChange: () => void;
}

function FormInput({ name, value, placeholder, handleChange }: Props) {
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
