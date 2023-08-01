// import { Trash } from "../assets/Trash";
// import { ReactComponent as Trash } from "../assets/trash.svg";

export const ActivitiesList = ({ activities, handleDelete = () => {} }) => {
  return (
    <section>
      <ul>
        {activities.map((activity) => (
          <li key={activity.key}>
            {activity.activity}
            <span
              className="delete-icon"
              onClick={() => handleDelete(activity)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
