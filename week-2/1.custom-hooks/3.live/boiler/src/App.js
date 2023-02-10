import React, { useState } from "react";
import { Box, Center, Divider, Flex, Heading } from "@chakra-ui/react";
// import Stopwatch1 from "./components/Stopwatch1";
// import Stopwatch2 from "./components/Stopwatch2";
// import Stopwatch3 from "./components/Stopwatch3";
// import Posts from "./components/Posts/Posts";
import useToggle from "./hooks/useToggle";

function App() {

 const [value,toggle] = useToggle(false);
 const [value1,toggle1] = useToggle(false);

//  const[value, setVelue] = useState(false);

//  const toggleValue =() =>{
//   setVelue(!value);
//  };

  return (
    <>  
    <Box>
      {/* <Center>
        <Heading>StopWatchs</Heading>
      </Center>
      <Center>
        <Flex rowGap={6}>
          <Stopwatch1 />
          <Stopwatch2 />
          <Stopwatch3 />
        </Flex>
      </Center>
      <Divider my={4} />
      <Center>
        <Posts />
      </Center> */}
     
    </Box>
    
    {/* <div> 
      <h1> useToggle {value ? "True" :"False"} </h1> 
      <button onClick={()=> toggle()}> Toggle</button>
      <br/>
      <h1> useToggle {value1 ? "True" :"False"} </h1> 
      <button onClick={()=> toggle1()}> Toggle</button>
    </div> */}
    <div>
      <h1> StopWatch:{count} </h1>
      
    </div>

    </>
  );
}

export default App;
