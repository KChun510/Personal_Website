import NavBar from './components/nav'
import SecondCont from './second_cont'
import FirstCont from './first_cont'
import React from "react";
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const App = () => {
  return (

    <div className='App'>
      <QueryClientProvider client={queryClient}>

        <NavBar />
        <FirstCont />
        <br></br>
        <br></br>
        <SecondCont />
      </QueryClientProvider>

    </div>

  );
}

export default App;
