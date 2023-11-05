import { Grid } from '@mui/material'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import TodoList from '../components/TodoList'
import { useRouter } from 'next/router'
import TodoAdd from '../components/TodoAdd'
import { v4 as uuidv4 } from 'uuid';
import { callGetTodos } from '../pages/api/dbTodoStore.js';

/* enable for todos in memory */
//const storePath = 'todoStore';

/* enable for todos in Cloudant DB */
const storePath = 'dbTodoStore';


export default function Home(todos) {
  const router = useRouter();

  const onDelete = async (id) => {
    console.log("onDelete: " + id);
    let todo = todos.list.find(t => t._id === id);
    let response = await fetch(getBasePath() + storePath, {
      method: 'DELETE',
      body: JSON.stringify(todo),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
    } else {
    }

    router.replace(router.asPath);
  }

  const onToggle = async (id) => {
    console.log("onToggle: " + id);
    if (todos.list) {
      let todo = todos.list.find(t => t._id === id);
      let newTodo = {
        ...todo,
        finished: !todo.finished
      }
      console.log("newTodo:");
      console.log(newTodo);
  
      let response = await fetch(getBasePath() + storePath, {
        method: 'PUT',
        body: JSON.stringify(newTodo),
      });
  
      // get the data
      let data = await response.json();
  
      if (data.success) {
      } else {
      }
  
      router.replace(router.asPath);  
    }
  }

  const onCreate = async (input) => {
    console.log("onCreate:");
    console.log(input);
    let todo = {
      _id: uuidv4(),
      text: input,
      fsinished: false,
    }
    let response = await fetch(getBasePath() + storePath, {
      method: 'POST',
      body: JSON.stringify(todo),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
    } else {
    }

    router.replace(router.asPath);
  }

  const getBasePath = () => {
    if (process.env.BASE_PATH) {
      return process.env.BASE_PATH + '/api/';
    } else {
      return '/api/';
    }
  }

  return (
    <div className={styles.container}>
      <Grid container direction="column" alignItems="stretch" spacing={1}>
        <Grid item>
          <NavBar/>
        </Grid>
        <Grid item>
          <TodoAdd onCreate={onCreate}/>
        </Grid>
        <Grid item>
          <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>
        </Grid> 
      </Grid>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  //this code runs on the backen - direct call to todo store code necessary
  let data = await callGetTodos();
  console.log("getServerSideProps successful");
  return {
      props: {
          list: data['message'].list,
      },
  };
}
