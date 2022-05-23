import React, { useEffect, useState } from "react";
import axios from "axios";

const Select = () => {
  //Number APİ
  const [number, setNumber] = useState(1);
  // Type APİ
  const [type, setType] = useState("text");
  // APİ STATE
  const [text, setText] = useState("");

  // APİ FUNCTİON DRİVER
  useEffect(() => {
    updateText();
  }, []);

  useEffect(() => {
    updateText();
  }, [number, type]);

  // APİ CALL
  const updateText = async () => {
    await axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${number}&start-with-lorem=1&format=${type}`
      )
      .then((res) => setText(res.data));
  };

  // İnput Event
  const handleNum = (e) => {
    setNumber(e.target.value);
  };

  // Select Event
  const handleType = (e) => {
    setType(e.target.value);
  };
  return (
    <div>
      <h1>React Sample Text Generator App</h1>
      <hr />
      <input type={"number"} onChange={(e) => handleNum(e)} value={number} />
      <select onChange={(e) => handleType(e)}>
        <option value="html">Yes</option>
        <option value="text">No</option>
      </select>
      <div>{text}</div>
    </div>
  );
};

export default Select;
