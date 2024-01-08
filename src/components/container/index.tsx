interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-2 ">{children}</section>
  );
};

export default Container;
