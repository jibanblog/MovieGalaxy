import React from 'react';
import Movielist from './Moviedetails.jsx';
import Mgalaxy from './Mgalaxy.jsx';
import './index.css';



const imgcss = {
    height: '50px',
    width: '100px',
    padding: '1% 0% 1% 5%'
}

const logcss = {

    height: '40px',
    width: '150px',
    padding: '1% 0% 1% 2%',
    letterSpacing: '2px'
}




function App(){

    return(
        <>
        <div class="heading">

        <img src="./logo.png" alt="mypic" style={imgcss} />
        <img src="./mgalaxy.png" alt="mypic" style={logcss} />
        <p></p>

        </div>

         {Movielist.map( (mval) =>{
             return (<Mgalaxy
             imgsrc= {mval.imgsrc}
             title= {mval.title}
             mname= {mval.mname}
             links= {mval.links}
             />);
         })}

        </>

    );
}



export default App;