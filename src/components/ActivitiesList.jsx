// import { Trash } from "../assets/Trash";
// import { ReactComponent as Trash } from "../assets/trash.svg";

export const ActivitiesList = ({
  activities,
  handleDelete = () => {},
  handleCheck = () => {},
}) => {
  return (
    <section>
      <ul>
        {activities.map((activity, idx) => (
          <li key={activity.key + idx}>
            <span className={`${activity.checked && "checked"}`}>
              {activity.activity}
            </span>
            <div>
              <span
                className="check-icon"
                onClick={() => handleCheck(activity)}
              >
                V
              </span>
              <span
                className="delete-icon"
                onClick={() => handleDelete(activity)}
              >
                X
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
