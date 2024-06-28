type prop = {
  title: string;
};
export const Greeting = (prop: prop) => {
  return <p>Hi, my friend{prop.title}</p>;
};
