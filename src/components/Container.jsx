const Container = ({ className, children }) => {
  return (
    <div className={`max-w-[1686px] mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
