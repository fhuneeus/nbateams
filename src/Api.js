import logo from './logo.svg';
import './App.css';


export default async function getData() {

  let url = "https://www.balldontlie.io/api/v1/players/?per_page=30";

  let response = await fetch(url);
  let processedResponse = await response.json();

  return processedResponse;

}