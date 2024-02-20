import React from "react";
import s from "./Employee.module.css";
const skilsList = ["all", "react", "angular", "vue"];

export const EmployeesFilter = ({
  onChangeSearch,
  searchStr,
  onCheckboxClick,
  isAvailable,
  onChangeActiveSkill,
  activeSkill,
}) => {
  return (
    <div className={s.filtersWrapper}>
      <h1>Filters</h1>
      <div className={s.flex}>
        <input
          className={s.input}
          placeholder="Enter username or email"
          onChange={onChangeSearch}
          value={searchStr}
        />
        <label>
          <input
            type="checkbox"
            checked={isAvailable}
            onChange={onCheckboxClick}
          />
          <span> isAvailable</span>
        </label>
      </div>
      <div className={s.flex}>
        {skilsList.map((radioButtonName) => (
          <label key={radioButtonName}>
            <input
              name="radioButtonName"
              type="radio"
              checked={radioButtonName === activeSkill}
              value={radioButtonName}
              onChange={() => onChangeActiveSkill(radioButtonName)}
            />
            <span> {radioButtonName}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
