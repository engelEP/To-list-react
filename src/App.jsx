import { useState } from 'react'
import { Title } from "./components/Title/index.jsx";
import { Input } from "./components/Input/index.jsx";
import { Button } from "./components/Button/index.jsx";
import { Container } from "./components/Containers/index.jsx";
import { Task } from "./components/Task/index";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [list, setList] = useState(["Hola"]);
  const [text, setText] = useState("");

  const addTask = (text) => {
    if(text !== ""){
      list.push(text);
      setList(list);
      setText("");
    }
  }

  const removeTask = (id) => {
    const update = list.filter((item, index) => {
      return index !== id
    });
    setList(update);
  }

  return (
    <>
      <Title text={"Todo List using JavaScript"} style={"title"}/>
      <Container style={"container"}>
        <Container style={"row justify-content-center"}>
          <Container style="col-11 col-md-6 ToDo_body">
            <Container style={"row margin_bottom_add_task"}>
              <Input 
                placeholder={"Add new task..."} 
                width={"col-9"} 
                type={"text"}
                value={text}
                style={"form-control"}
                onChange={e => setText(e.target.value)}
              />
              <Button 
                text={"Add"} 
                width={"col-3"} 
                type={"button"} 
                style={"btn btn-primary width_button"}
                onClick={() => addTask(text)}
              />
            </Container>

            {
              list.map((item, index) => {
                return <Task 
                  key={index} 
                  width={"col-12"} 
                  text={item} 
                  onClick={() => removeTask(index)}
                  />
              })
            }
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default App
