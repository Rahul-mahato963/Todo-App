import todomodel from "../model/model.js";
 export const create= async (req , res)=>{
    const { task } = req.body;

  if (!task) {
    return res
      .status(400)
      .json({ message: "bad request pls check your input" });
  }
  const newtext = await todomodel.create({ text: task });
  if (!newtext) {
    return res.status(404).json({ message: "todo not craeted try again" });
  }
  return res.status(201).json({ message: "todo craeted sucessfully", newtext });
}


export const read= async (req ,res)=>{
    const todos = await todomodel.find();
  if (!todos) {
    return res.status(404).json({ message: "bad request  todo not found"});
  }
  return res
    .status(200)
    .json({ message: "sucessfully you received todos", todos });
}


export const update=async (req ,res)=>{
     const { id } = req.params;
  const { text} = req.body; 
  

  if (!id) {
    return res.status(400).json({ message: "bad request pls check your input for id" });
  }

  try {
    const updatedTodo = await todomodel.findByIdAndUpdate(
      id,
      {text }, 
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "updated text", updatedTodo });
  } catch (error) {
    return res.status(500).json({ message: "server error", error });
  }
}



export const deleted =async (req ,res)=>{
     const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .json({ message: "bad request pls check your input for deleted" });
  }
  const deleteddata = await todomodel.findByIdAndDelete(id);
  if (deleteddata) {
    return res.status(200).json({ message: "sucessfully deleted todos" });
  }
}

 