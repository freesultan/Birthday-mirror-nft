import Birthinput from "./components/birthdate";
import { LocalizationProvider } from "@mui/x-date-pickers";
import {AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {

 
  return (
  <LocalizationProvider dateAdapter={AdapterDayjs}> 

<div className=" w-full ">
       
       <Birthinput/>
        
     </div>
  </LocalizationProvider>
   
  );
}

export default App;
