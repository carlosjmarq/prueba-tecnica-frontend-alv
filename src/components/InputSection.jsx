export const InputSection = ({ children, ...props }) => {
  return (
    <section className="input-section" {...props}>
      {children}
    </section>
  );
};
