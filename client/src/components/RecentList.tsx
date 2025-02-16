import ListItem from "./ListItem";

const Postlist: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 mb-8">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default Postlist;
