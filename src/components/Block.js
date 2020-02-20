import React from "react";
import Storie from "./Storie";

export const Block = ({
  header,
  stories,
  member,
  title,
  id,
  color = "red"
}) => {
  return (
    <div className="block">
      <header style={{ backgroundColor: color }}>
        {header} : {stories.length}{" "}
      </header>
      <div className="stories">
        {stories
          .filter(s => {
            console.log(member, s.owner_ids);
            console.log(s.owner_ids.indexOf(member));
            if (!member && !title && !id) return s;
            if (
              (member && s.owner_ids.indexOf(member) >= 0) ||
              (title && s.name.indexOf(title) >= 0) ||
              (id && String(s.id).indexOf(id) >= 0)
            ) {
              return s;
            }
            return null;
          })
          .map(s => (
            <Storie key={s.id} id={s.id} name={s.name}></Storie>
          ))}
      </div>
    </div>
  );
};
