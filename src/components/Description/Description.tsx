const Description: React.FC<React.ComponentProps<"p">> = ({
  children,
  className,
}) => (
  <p className={`text-2xl text-slate-500 font-medium ${className}`}>
    {children}
  </p>
);
export default Description;
