import logo from './logo.svg';
import './App.css';
import getData from './Api';
import React, { useState, useEffect } from 'react';
import PlayerCard from './Components/PlayerCard';
import Title from './Components/Title';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ComboBox from './Components/ComboBox';
import Button from '@mui/material/Button';



function App() {
  
  const [allPlayers, setAllPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [listPlayers, setListPlayers] = useState([]);
  const [visiblePlayers, setVisiblePlayers] = useState([]);
 
  const fetchData = async () => {
    
    const dataResponse = await getData();
    const playersData = dataResponse.data;
    setListPlayers(playersData);
    setAllPlayers(playersData);

  }

  const searchButtonClicked = (event) => {
    const teamSearched = document.getElementById("searchTeamCombo").value;

    let filteredPlayers = [];
    for(let i=0; i<allPlayers.length; i++){
      if(allPlayers[i].team.full_name == teamSearched){
        filteredPlayers.push(allPlayers[i]);
      }
    }

    setVisiblePlayers(filteredPlayers);

  }

  const resetSearch = () =>{
    setListPlayers(allPlayers);
    loadFirstTen();
  }

  const loadFirstTen = () => {
    
    let displayPlayers = [];
    for(let i=0; i<10; i++){
      displayPlayers.push(listPlayers[i]);
    } 
    setVisiblePlayers(displayPlayers);
  }

  useEffect(() => {
    !listPlayers.length && fetchData();
    listPlayers.length && loadFirstTen();
    // page > 1 && loadNextTen();
  }, [listPlayers]);


  const paginationClicked = (event) => {
    
    const substringEndIndex = event.target.innerHTML.indexOf("<");
    const pgNumber = event.target.innerHTML.substring(0,substringEndIndex);
    const startIndex = ((pgNumber-1)*10);

    let visiblePlayersArray = [];

    for(let i=startIndex; i<startIndex+10; i++){
      visiblePlayersArray.push(listPlayers[i]);
    }

    setVisiblePlayers(visiblePlayersArray);

  }
  
  const visiblePlayerList = visiblePlayers.map(player => {
    return(
      <PlayerCard key={player.id} firstname ={player.first_name} lastname={player.last_name} position={player.position}
      teamname={player.team.full_name} teamcity={player.team.city} teamabbreviation={player.team.abbreviation}
      teamconference={player.team.conference} teamdivision={player.team.division}/>
    )
  });

  const pagination = 
      <Stack spacing={2}>
        <Pagination count={3} color="primary" onClick={paginationClicked} hideNextButton="true" hidePrevButton="true" className="pagination-margin"/>
      </Stack>;
  
  return (
    <div className="App">
      <Title/>
      <div className="search">
        <ComboBox/>
        <div className="margin-left-20 display-flex">
          <Button variant="contained" className="margin-left-40 primary-btn" onClick={searchButtonClicked}>Search</Button>
        </div>
        <div className="margin-left-20 display-flex">
          <Button variant="outlined" className="margin-left-40 secondary-btn black-color" onClick={resetSearch}>Reset</Button>
        </div>
      </div>
      {visiblePlayerList}
      {pagination}
    </div>
  );
}

export default App;
