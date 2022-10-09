interface Props {
  color: string;
  bgColor: string;
  children: React.ReactNode;
}

function Box({ children, bgColor, color }: Props) {
  return (
    <div style={{ backgroundColor: bgColor, color }} className="Box">
      {children}
    </div>
  );
}

export default Box;
