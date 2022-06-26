import Navbar from "./navbar";
import MovieCard from "./movieCard";
import { data } from "../data";
import { propType } from "../typeConstants";
import React from "react";
class App extends React.Component<{ store: any }, {}> {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED!");
      this.forceUpdate();
    });
    //API CALL
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
    console.log(this.props.store.getState());
  }
  render() {
    const { store } = this.props;
    const movies = store.getState();
    return (
      <div className="App">
        <section className="App-header">
          <div>
            <Navbar />
          </div>
        </section>
        <section className="content my-5">
          <div className="container card-wrap">
            <div className="row d-flex btn-row">
              <button>Movies</button>
              <button>Favourites</button>
            </div>
            <div className="row card-row d-flex">
              {movies.map((item: propType) => (
                <MovieCard movie={item} key={item.Title} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
