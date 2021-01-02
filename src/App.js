import { React } from "react";
import { BrowserRouter as Router, Switch, Route, Link,  NavLink } from "react-router-dom"
import Inicio from "./components/PathRoute/Inicio";
import Contactos from "./components/PathRoute/Contactos";
import Nosotros from "./components/PathRoute/Nosotros";
import ViewId from "./components/PathRoute/ViewId";


// import Columns from "./components/Columns.js";
// import FormWork from "./components/CRUD/FormWork.js";
// import ListWork from "./components/CRUD/ListWork.js";
// import Forms from "./components/Forms.js";
// import List from "./components/List.js";
// import Parrafo from "./components/Row.js";
// import Greeting from "./components/greeting/Greeting";
// import { Comments } from "./components/greeting/Comments.js";

      // {/* <Greeting name="Sergio" edad={20}/>
      // <Greeting name="Danilo" edad={30}/>
      // <Greeting name="Luz ma" edad={40}/>
      // < Comments 
      //     urlImages='https://picsum.photos/200'
      //     name='Juan'
      //     text='THIS a TEST'
      // />
      // < Comments 
      //     urlImages='https://picsum.photos/200'
      //     name='Andres'
      //     text='THIS a TEST'
      // />
      // < Comments 
      //     urlImages='https://picsum.photos/200'
      //     name='Sergio'
      //     text='THIS a TEST'
      // /> */}

      //   {/* <h1 className="text-center">CRUD</h1>
      //   <hr/>
      //   <div className="row">
      //       <div className="col-8">
      //         <ListWork/>
      //       </div>
      //   <div className="col-4"> */}
      //      {/* <FormWork/> */}
      //   {/* </div> */}
      //   {/* <Parrafo />
      //   <Columns />
      //   <List/> */}
      //   {/* <Forms/> */}
      //   {/* </div> */}

function App() {
  return (
    <Router>
      <div className='container'>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Navbar</span>
              <div className="row">
                <div className="btn-group">
                  <Link to="/" className="btn btn-dark m-2">
                    Inicio
                  </Link>
                  <Link to="/contactos" className="btn btn-warning m-2">
                    Contactos
                  </Link>
                  <NavLink to="/nosotros" className="btn btn-warning m-2" activeClassName="active">
                    Nosotros
                  </NavLink>
                </div>
              </div>
          </div>
        </nav>
      </div>
      <hr />
      <Switch>
        <Route path="/nosotros/:id">
          <ViewId />
        </Route>
        <Route path="/contactos">
          <h1>
            <Contactos />
          </h1>
        </Route>
        <Route path="/nosotros">
          <h1>
            <Nosotros />
          </h1>
        </Route>
        <Route path="/" exact>
          <h1>
            <Inicio />
          </h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
