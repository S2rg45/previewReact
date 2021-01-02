import { React } from "react";
import Columns from "./components/Columns.js";
import FormWork from "./components/CRUD/FormWork.js";
import ListWork from "./components/CRUD/ListWork.js";
import Forms from "./components/Forms.js";
import List from "./components/List.js";
import Parrafo from "./components/Row.js";
import Greeting from "./components/greeting/Greeting";
import { Comments } from "./components/greeting/Comments.js";

function App() {
  return (
    <div className='container'>
      {/* <Greeting name="Sergio" edad={20}/>
      <Greeting name="Danilo" edad={30}/>
      <Greeting name="Luz ma" edad={40}/>
      < Comments 
          urlImages='https://picsum.photos/200'
          name='Juan'
          text='THIS a TEST'
      />
      < Comments 
          urlImages='https://picsum.photos/200'
          name='Andres'
          text='THIS a TEST'
      />
      < Comments 
          urlImages='https://picsum.photos/200'
          name='Sergio'
          text='THIS a TEST'
      /> */}

        {/* <h1 className="text-center">CRUD</h1>
        <hr/>
        <div className="row">
            <div className="col-8">
              <ListWork/>
            </div>
        <div className="col-4"> */}
           {/* <FormWork/> */}
        {/* </div> */}
        {/* <Parrafo />
        <Columns />
        <List/> */}
        {/* <Forms/> */}
        {/* </div> */}
    </div>
  );
}

export default App;
