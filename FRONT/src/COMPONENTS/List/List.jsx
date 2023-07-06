import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./list.module.css";
import { addList } from "../../REDUX/Actions/addList.js";
import { checkItem } from "../../REDUX/Actions/checkItem.js"
import { useAuth } from "../../Context/userContext.js";
import { v4 as uuidv4 } from "uuid";
import { deleteList } from "../../REDUX/Actions/deleteList";

export default function List() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listado);
  const [item, setItem] = useState("");

  console.log(list)
  const { signup, user } = useAuth()
  console.log(user)

  function handleInputChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    const newItem = {
      name: item,
      checked: false,
      id: uuidv4(),
    }
    dispatch(addList(newItem));
    setItem("");
  }

  function handleCheckboxChange(index) {
    const updatedList = list.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    dispatch(checkItem(updatedList))
    // Dispatch an action or update the state with the updated list
  }

  function onClick(id,e) {
    e.stopPropagation();
    dispatch(deleteList(id))
  }
  return (
    <div className={css.container}>
      <div className={css.list}>
        <div className={css.titulo}>
          <h1>Quick List</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Buy tomatoes..."
            className={css.input}
            value={item}
            onChange={handleInputChange}
          />
          <button onClick={handleClick}>Add</button>
        </div>
        <div className={css.listado}>
          {list.map((item, index) => (
            <div key={index} className={`${css.ul} ${item.checked ? css.checked : ""}`}>
              <div className={css.checkBox}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(index)}
                />
              </div>
              <div className={`${css.item} ${item.checked ? css.tachado : ""}`}>{item.name}</div>
              <div className={css.x} >
                <span onClick={(e) => onClick(item.id,e )}>❌</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
