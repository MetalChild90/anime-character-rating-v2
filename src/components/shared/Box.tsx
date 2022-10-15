interface BoxProps {
  bgColor?: string;
  children: React.ReactNode;
}

function Box({ children, bgColor = "rgba(0, 0, 0, 0.4)" }: BoxProps) {
  return (
    <div style={{ backgroundColor: bgColor }} className="Box">
      {children}
    </div>
  );
}

export default Box;
