import React, { Children, useState } from "react";

interface Props {
  children: string;
  maxchars?: number;
}

const ExpandableText = ({ children, maxchars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length == maxchars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxchars);
  return (
    <p>
      {text}...
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
