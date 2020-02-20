import React from "react";
import Storie from "./Storie";

export const Block = ({
  header,
  stories = [],
  member,
  title,
  id,
  color = "red"
}) => {
  let arr = [];
  stories.forEach(s => {
    if (!member && !title && !id) arr = stories;
    if (member && s.owner_ids.indexOf(member) >= 0) {
      arr.push(s);
    }
    if (title && s.name.indexOf(title) >= 0) {
      arr.push(s);
    }
  });

  return (
    <div className="block">
      <header style={{ backgroundColor: color }}>
        {header} : {stories.length}{" "}
      </header>
      <div className="stories">
        {stories
          .filter(s => {
            if (member && s.owner_ids.indexOf(member) >= 0) return s;
            else if (!member) return s;
            return null;
          })
          .filter(s => {
            if (title && title && s.name.indexOf(title) >= 0) return s;
            else if (!title) return s;
            return null;
          })
          .filter(s => {
            if (id && id && String(s.id).indexOf(id) >= 0) return s;
            else if (!id) return s;
            return null;
          })
          .map(s => (
            <Storie
              key={s.id}
              id={s.id}
              name={s.name}
              link={s.app_url}
            ></Storie>
          ))}
      </div>
    </div>
  );
};
