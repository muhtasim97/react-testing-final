type Props = {
  name?: string;
};

const Greet: React.FC<Props> = ({ name }) => {
  return (
    <div>
      greet
      <div>hello {name ? name : "Stranger"}</div>
    </div>
  );
};
export default Greet;
