import { useState } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ITodos } from "./static/todos.interface";

function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [count, setCount] = useState<number>(0);

  return (
    <Container>
      <Box>
        <Text mb="2rem" fontSize="27px" fontWeight="bold" textAlign="center">
          Chores ToDo List
        </Text>
      </Box>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        count={count}
        setCount={setCount}
      />
      <TodoForm todos={todos} setTodos={setTodos} count={count} />
    </Container>
  );
}

export default App;
