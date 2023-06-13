const Heading: React.FC<React.ComponentProps<"h2">> = ({
  children,
  className,
}) => <h2 className={`text-4xl font-medium ${className}`}>{children}</h2>;

export default Heading;
