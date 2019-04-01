import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import './Styles.css'
import Header from './components/Header'
import GifGrid from './components/GifGrid'

class App extends React.Component {
  state = {
    gifs: [],
    offset: 0,
    currentGif: ''
  };

  fetchData = (keyWord, limit = 15) => {
    const { offset } = this.state
    this.setState({ currentGif: keyWord })
    const url = `http://api.giphy.com/v1/gifs/search?api_key=smFg8BlXGx3Fv1uibDi6kK0MiFnLr1xx&q=${keyWord}&offset=${offset}&limit=${limit}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({ gifs: this.state.gifs.concat(data.data),  offset: offset + limit })
    }
  )
  };

  componentDidMount(){
    const keyWords  = ['Hamsters', 'Dogs', 'Penguins', 'Cats'];
    const keyWord = keyWords[Math.floor(Math.random()*keyWords.length)];
    this.fetchData(keyWord);
  }

  render() {
    const { currentGif, gifs } = this.state
    return (
        <div>
        <Header title={currentGif}/>
        <InfiniteScroll
          dataLength={gifs.length}
          next={() => {this.fetchData(currentGif, 10)}}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollThreashold={0.5}
        >
        <GifGrid gifs={gifs}/>
        </InfiniteScroll>
        </div>
    );
  }
}

export default App;
