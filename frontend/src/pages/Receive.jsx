import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Receive = () => {
  const [todos, setTodos] = useState([]);
  const [indexid, setIndexid] = useState(null);
  const [newtext, setNewtext] = useState("");

  const Api_url=import.meta.env.VITE_API_URL

  const loaddata = async () => {
    try {
      const res = await axios.get(`${Api_url}/api/read`);
      setTodos(res.data?.todos || []); 
        

    } catch (error) {
      console.log(error);
    }
  };
  const updatetodo = async (id) => {
    try {
    const res =await axios.put(`${Api_url}/api/update/${id}`, {
        text: newtext,
      });

     loaddata();
      setIndexid(null);
      setNewtext("");
    } catch (error) {
      console.log(error);
    }
  };
  const deletetodo = async (id) => {
    try {
      await axios.delete(`${Api_url}/api/delete/${id}`);
      loaddata();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loaddata();
  }, []);
  const handleedit = async (todo) => {
    setIndexid(todo._id);
    setNewtext(todo.text);
  };
  return (
    <div>
      <Create  />
      <ul className="items-center justify-center mt-5 ml-150">
        {todos.map(todo => (
          <li key={todo._id}>
            {indexid === todo._id ? (
              <>
                <input
                  type="text"
                  placeholder="enter your text"
                  value={newtext}
                  onChange={(e) => setNewtext(e.target.value)}
                />
                <Button onClick={()=>updatetodo(todo._id) } className="bg-green-600">save</Button>
                <Button onClick={()=>setIndexid(null)} className="bg-red-400">cancel</Button>
              </>
            ) : (
              <>

                <span >{todo.text}</span>
              <div className=" flex items-center w-100">
                <Button
                  onClick={() => {
                    handleedit(todo);
                  }} className="bg-blue-500  ml-5 space-y-5"
                >
                  edit
                </Button>
                <Button onClick={() => deletetodo(todo._id)} className="bg-red-600 mt-2 ml-5">delete</Button>
              </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Receive;
