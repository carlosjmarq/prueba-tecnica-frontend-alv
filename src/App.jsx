import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { ActivitiesList } from "./components/ActivitiesList";
import { InputSection } from "./components/InputSection";
import axios from "axios";
import { fetchActivity } from "./utils/fetching";

function App() {
  const [participants, setParticipants] = useState(1);
  const [activities, setActivities] = useState(() => []);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetchActivity(abortController).then((response) => {
      setError(errorHandler(response));
      setActivities((activities) => [...activities, response.data]);
    });
    return () => abortController.abort();
  }, []);

  // ? activity structure
  // {
  //   "activity": "Have a jam session with your friends",
  // "type": "music",
  // "participants": 5,
  // "price": 0.1,
  // "link": "",
  // "key": "2715253",
  // "accessibility": 0.3
  // }

  const handleParticipantsChange = (event) => {
    setParticipants(event.target.value);
  };

  const errorHandler = (response) => {
    if (response.status !== 200) {
      return "An error occurred obtaining the activity. Please try again.";
    } else if (response.data.error) {
      return response.data.error;
    }
    return null;
  };

  const handleAddActivity = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    const response = await fetchActivity(abortController, participants);
    console.log({ response });
    setError(errorHandler(response));
    setActivities((activities) => [...activities, response.data]);
  };

  const handleDeleteActivity = useCallback(
    (activityToDelete) => {
      const newActivities = activities.filter(
        (activity) =>
          activity.key !== activityToDelete.key ||
          activity.activity !== activity.activity,
      );
      console.log({ activities, activityToDelete, newActivities });
      setActivities(newActivities);
      console.log({ newActivities, activityToDelete });
    },
    [activities],
  );

  return (
    <main className="container">
      <h1>Your Activity List</h1>
      <InputSection>
        <div className="input-and-label">
          <label htmlFor="participants-input">Participants Number:</label>
          <input
            id="participants-input"
            type="number"
            value={participants}
            onChange={handleParticipantsChange}
          />
        </div>
        <button onClick={handleAddActivity}>Add Activity</button>
      </InputSection>
      {error && <span>{error}</span>}
      <ActivitiesList
        activities={activities}
        handleDelete={handleDeleteActivity}
      />
    </main>
  );
}

export default App;
