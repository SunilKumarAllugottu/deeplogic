import { useRouteError } from "react-router-dom";
import "../App.css";
import err from './Assets/3814348.jpg';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <div id="error-page" style={{borderRadius:"25px"}}>
      {/* <h1>Oh noo!</h1>
      <p>This is an Error Page.</p>*/}
          <img style={{padding:"10px",width:"auto",height:"600px"}}src={err}></img>
      <p> 
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </>
  );
} 
