import React from "react"
import "./App.css"

class App extends React.Component {
  state = {
    books: [],
  }
  componentDidMount = async () => {
    const apiUrl = process.env.REACT_APP_API_URL
    const resp = await fetch(`${apiUrl}/books`)
    const jsonBooks = await resp.json()
    console.log(jsonBooks)

    this.setState({
      books: jsonBooks,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Books in the catalogue</h1>
          {this.state.books &&
            this.state.books.map((book, index) => (
              <div key={index}>
                <img src={book.img} style={{ width: "200px" }}></img>
                <span>{book.title}</span>
              </div>
            ))}
        </header>
      </div>
    )
  }
}

export default App
