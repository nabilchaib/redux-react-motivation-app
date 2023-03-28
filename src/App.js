import './css/main.css';
import DisplayTodos from './components/Todos/DisplayTodos';
import Todos from './components/Todos/Todos';
import CurrentWeather from './components/Weather/Weather';
import { motion } from 'framer-motion';
import Quote from './components/Quote/Quote';
import BgImg from './components/BgImg/BgImg';



function App() {
  return (
    <div className="App">
      <BgImg/>
      <CurrentWeather />
      <motion.h1
        whileHover={{ scale: 1.1 }}

      >Daily Motivation
      </motion.h1>
      <Quote />
      <Todos />
      <h1>To Do</h1> 
      <DisplayTodos />
    </div>
  );
}

export default App;
