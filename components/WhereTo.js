import React, { useEffect, useState } from "react";
import styles from "./../styles/HowTo.module.css";
import searchIcon from "./../public/search.svg"; // Import the search icon
import clearIcon from "./../public/searchclear.svg"; // Import the clear icon

const WhereTo = (props) => {
  const [searchField, setSearchField] = useState("");
  const items = [
    // ... (the same item data)
  ];

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchField.toLowerCase()) ||
      item.description.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className={props.support ? styles.wheretosupport : styles.whereto}>
      <div className={styles.title}>Where to recycle</div>
      <div className={styles.input}>
       <img src="search.svg" className={styles.search} />
        {searchField.length > 0 && (
          <img
            src="searchclear.svg"
            onClick={() => setSearchField("")}
            className={styles.clear}
          />
        )} 
        <input
          placeholder="Search where to recyle item"
          value={searchField}
          onChange={handleChange}
        />
        <span>       
        <input
          placeholder="What is your postcode"
          value={searchField}
          onChange={handleChange}
        /> </span>
      </div>
      <div className={props.support ? styles.resultssupport : styles.results}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, i) => (
            <a
              href={item.url}
              target="_blank"
              className={styles.result}
              key={i}
            >
              <div
                className={styles.image}
                style={{ backgroundImage: "url(" + item.image + ")" }}
              ></div>
              <div className={styles.info}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.desc}>{item.description}</div>
              </div>
            </a>
          ))
        ) : (
          <a
            className={styles.noresult}
            target="_blank"
            href="https://www.recyclenow.com/recycle-an-item"
          >
            <div className={styles.no}>Couldn't find any location</div>
            <div className={styles.no2}>
              Click next to find your recyling nearest location on recyclenow.com
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default WhereTo;
