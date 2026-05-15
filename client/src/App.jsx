import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/users", {
        title,
        subject,
      });

      setTitle("");
      setSubject("");

      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const toggleTask = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`);

      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>StudySyncAI 📚</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Study Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />

        <button type="submit">Add Task</button>
      </form>

      <h2>Study Tasks</h2>

      {tasks.map((task) => (
        <div
          key={task._id}
          style={{
            marginTop: "15px",
            padding: "10px",
            border: "1px solid gray",
          }}
        >
          <h3>{task.title}</h3>

          <p>Subject: {task.subject}</p>

          <p>
            Status:{" "}
            {task.completed ? "✅ Completed" : "❌ Not Completed"}
          </p>

          <button onClick={() => toggleTask(task._id)}>
            Toggle Status
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;