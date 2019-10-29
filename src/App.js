import React from 'react';
import './App.css';
import axios from 'axios';

// import component
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import ListJob from './Components/ListJob';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: false,
      isError: false,
      data: [],
      next: '',
      previous: ''
    }
  }

  componentDidMount(){
    // do something after component mounted
    this.getAllJobs('https://rickandmortyapi.com/api/character/')
  }

  getAllJobs = (url) => {
    // alert('button clicked!')
    console.log(url)
    this.setState({ isLoading: true })
    axios.get(url)
      .then(res => {
        // console.log(res.data) // correct data
        this.setState({ 
          data: res.data.results,
          next: res.data.info.next,
          previous: res.data.info.prev,
          isLoading: false, isError: false})
      })
      .catch(err => {
        // console.log(err)
        this.setState({ isLoading: false, isError: true })
      })
  }

  render(){
    console.log('rendered!')
    const { data, previous, next, isLoading, isError } = this.state;

    return (
      <div className="App">
        {/* header */}
        <Header />
  
  
        {/* search bar */}
        <SearchBar />

        {/* list jobs */}
        { // conditional rendering show loading and error
          isLoading ? 
          <p>Loading..</p> : 
          isError ? (
            <div>
              <p>Error, please try again</p>
              <button type="button" onClick={() => this.getAllJobs('http://dummy.restapiexample.com/api/v1/employees')}>Try Again</button>
            </div>
          ) : 
          <ListJob data={data} />
            }


            { // conditional rendering when there is no previous
              previous === '' ? null : <button type="button" onClick={() => this.getAllJobs(previous)}>Previous</button>
            }
            <button type="button" onClick={() => this.getAllJobs(next)}>Next</button>
      </div>
    );
  }
}

export default App;
