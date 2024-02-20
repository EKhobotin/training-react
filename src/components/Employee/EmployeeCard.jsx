import clsx from "clsx";
import s from "./Employee.module.css";
export const EmployeeCard = ({
  id,
  isOpenToWork,
  name,
  email,
  bio,
  skills,
  onDeleteUser,
  handleClickUser,
}) => {
  const user = { id, isOpenToWork, name, email, bio, skills };
  return (
    <li className={clsx(s.userCard, isOpenToWork && s.openToWork)}>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <h5>{bio}</h5>
      <ul className={s.skillList}>
        {skills.map((skill) => (
          <li className={s.skillLabel} key={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <button className={s.btn} onClick={() => handleClickUser(user)}>
        ReadMore
      </button>
      <button className={s.btn} onClick={() => onDeleteUser(id)}>
        Delete
      </button>
    </li>
  );
};
