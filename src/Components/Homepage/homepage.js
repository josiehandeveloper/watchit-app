import React from "react";
import Context from "../../Context";
import "./Homepage.css";

export default class Homepage extends React.Component {
  static contextType = Context;
  register = () => {
    this.props.history.push("/register");
  };

  render() {
    fetch("https://morning-reaches-89642.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => console.log(data));
    const IMG_API = `https://image.tmdb.org/t/p/w1280`;
    const { homepage = [] } = this.context || [];
    return (
      <div className="homepage">
        <div className="container">
          <h1> Welcome to Watch It</h1>
          <button className="getstarted" onClick={() => this.register()}>
            Let's Get Started
          </button>
        </div>
        <div className="about">
          <h1>About</h1>
          <p>
            <span className="line-top"></span>
            Watch It allows you to create customized movie lists with our search
            bar. To get started register, login, and you will be redirected to a
            page where you can search for movies. Then add them to your list!
            It's that simple!
            <span className="line-bottom"></span>
          </p>
        </div>
        <div className="movie-container">
          {homepage.map((movie) => (
            <div className="movie" key={movie.id}>
              <img
                className="movie-image"
                alt="poster"
                width="250"
                src={IMG_API + movie.poster_path}
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p>
                  <small>Release Date: {movie.release_date}</small>
                </p>
                <p>
                  <small>Rating: {movie.vote_average}</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
