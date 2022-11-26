import linkData from "../data/links.json";
import ListItem from "./ListItem";

const List = () => {
  console.log(linkData);

  return (
    <div className="link-container">
      {linkData.map((link, idx) => (
        <ListItem key={idx} {...link} />
      ))}
    </div>
  );
};

export default List;
