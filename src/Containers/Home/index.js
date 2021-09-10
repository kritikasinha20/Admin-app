import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import Layouts from '../../Components/Layouts';

 const Home = () => {
    return (
        <div>
            <Layouts>

           <Jumbotron style = { {margin:'5rem'}}className="text-center">
               <h1> Welcome to the dashboard</h1>
           </Jumbotron>
           </Layouts>
        </div>
    )
}
export default Home;