import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { Button } from "../components/ui/button";

function Received() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const loadData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/read");
      setTodos(res.data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/delete/${id}`);
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/update/${id}`, {text: editText });
      setEditId(null);
      setEditText("");
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Create />
      <div className="flex items-center justify-center mt-5">
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li key={todo._id} className="flex items-center gap-4">
              {editId === todo._id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="border p-2 rounded"
                  />
                  <Button onClick={() => editTodo(todo._id)} className="bg-green-600">Save</Button>
                  <Button onClick={() => setEditId(null)}>Cancel</Button>
                </>
              ) : (
                <>
                  <p>{todo.text}</p>
                  <Button
                    onClick={() => {
                      setEditId(todo._id);
                      setEditText(todo.text);
                    }}
                    className="bg-blue-400"
                  >
                    Edit
                  </Button>
                  <Button onClick={() => deleteTodo(todo._id)} className="bg-red-500">Delete</Button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Received;
