import React, { useState, Fragment } from "react";
import { useEffect } from "react";
import { getStories, getMembers } from "../services";
import config from "../config";
import { Loading } from "./Loading";
import { Block } from "./Block";

function App() {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState();
  const [title, setTitle] = useState();
  const [id, setId] = useState();

  const [imp_urg, set_imp_urg] = useState([]);
  const [nourg_imp, set_nourg_imp] = useState([]);
  const [noimp_urg, set_noimp_urg] = useState([]);
  const [nourg_noimp, set_nourg_noimp] = useState([]);

  const getData = member => {
    const promises = config.QUERIES.map(q => getStories(q));
    promises.push(getMembers());
    Promise.all(promises).then(r => {
      setLoading(false);
      console.log(r);
      set_imp_urg(r[0]);
      set_nourg_imp(r[1]);
      set_noimp_urg(r[2]);
      set_nourg_noimp(r[3]);
      const members = r[4].filter(m => !m.disabled);
      setMembers(members);
      console.log(r[4]);
    });
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const handleSearch = text => {
    if (Number(text)) setId(text);
    else {
      setTitle(text);
      setId("");
    }
  };

  return (
    <div>
      <div>
        <select name="members" onChange={e => setMember(e.target.value)}>
          <option value="">Todos los desarrolladores</option>
          {members.map(m => (
            <option key={m.id} value={m.id}>
              {m.profile.name}
            </option>
          ))}
        </select>
        <input type="text" onChange={e => handleSearch(e.target.value)} />
      </div>
      <div className="container">
        {loading ? (
          <Loading></Loading>
        ) : (
          <Fragment>
            <Block
              header="Importante - Urgente"
              stories={imp_urg}
              color="#F75357"
              title={title}
              member={member}
              id={id}
            ></Block>
            <Block
              header="No Urgente - Importante"
              stories={nourg_imp}
              color="#F9C206"
              title={title}
              member={member}
              id={id}
            ></Block>
            <Block
              header="No Importante - Urgente"
              stories={noimp_urg}
              color="#57B779"
              title={title}
              member={member}
              id={id}
            ></Block>
            <Block
              header="No Urgente - No Importante"
              stories={nourg_noimp}
              color="#979797"
              title={title}
              member={member}
              id={id}
            ></Block>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
