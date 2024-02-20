import { EmployeeCard } from "./EmployeeCard";
import s from "./Employee.module.css";

export const EmployeeList = ({ users = [], onDeleteUser, handleClickUser }) => {
  if (!users.length) {
    return <h1>Немає юзерів для роботи</h1>;
  }

  return (
    <ul className={s.userList}>
      {users.map((user) => (
        <EmployeeCard
          handleClickUser={handleClickUser}
          key={user.id}
          {...user}
          onDeleteUser={onDeleteUser}
        />
      ))}
    </ul>
  );
};
