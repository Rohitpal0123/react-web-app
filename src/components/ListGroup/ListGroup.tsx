import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  item: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ item, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {item.length === 0 && <p>No item found</p>}
      <ul className={styles.listGroup}>
        {item.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
