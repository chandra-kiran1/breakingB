
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Charactergrid from './components/Charactergrid';
import Header from './components/ui/Header';



const  App = ()=> {

  const [items,setItems] = useState([]);
  const [isloading , setIsloading] = useState(true)

  useEffect (()=>{
    const fetchItems = async ()=> {
      const response = await axios('https://www.breakingbadapi.com/api/characters');
      console.log(response.data)
      setItems(response.data)
      setIsloading(false);
    }

    fetchItems();
  },[]);

  return (
    <div className="container">
      <Header/>
      <Charactergrid isloading={isloading} items={items}  />
    </div>
  );
}

export default App;
