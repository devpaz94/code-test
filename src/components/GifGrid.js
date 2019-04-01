import React, { Component } from "react";
import '../Styles.css'

class GifGrid extends Component {

  render () {
    return(
      <div className="grid-container">
      <div className="grid">
        {this.props.gifs.map((gif, index) => (
          <div className="image-item" key={index}>
          <img src={gif.images.downsized.url} alt='loading' />
          </div>
        ))}
        </div>
        </div>
    )
  }
}

export default GifGrid
