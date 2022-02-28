import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { EditTask } from './EditTask'
import { Task } from './Task'

function App() {
  return (
    <>
      <Router>
        <Route path='/'>
          <Task />
        </Route>
        <Route path='/EditTask/:id'>
          <EditTask />
        </Route>
      </Router>
    </>
  )
}

export default App
