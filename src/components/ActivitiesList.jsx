export const ActivitiesList = ({ activities }) => {
  return (
    <section>
      <ul>
        {activities.map(({ activity }, idx) => (
          <li key={activity + idx}>{activity}</li>
        ))}
      </ul>
    </section>
  );
};
