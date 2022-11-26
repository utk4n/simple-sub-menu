import { useState } from "react";

const ListItem = ({ ...link }) => {
  const [drop, setDrop] = useState(false);

  const dropHandle = () => {
    setDrop((prev) => !prev);
  };

  return (
    <div>
      <div onClick={dropHandle} className="main-link__container">
        <div className="link-left">
          <i className={link.icon}></i>
          <span>{link.title}</span>
        </div>
        <span className={`chevron ${drop && "active"}`}>
          {link.childrens && <i class={`bi bi-chevron-down`}></i>}
        </span>
      </div>
      <div className="dropped-links">
        {drop &&
          link.childrens?.map((link, idx) => <ListItem key={idx} {...link} />)}
      </div>
    </div>
  );
};

export default ListItem;
