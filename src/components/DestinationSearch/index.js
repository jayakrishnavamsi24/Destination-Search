import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      destinationsList: props.destinationsList,
      inputVal: '',
    }
  }

  onChangeSearchInput = event => {
    this.setState({inputVal: event.target.value})
  }

  render() {
    const {destinationsList, inputVal} = this.state
    const filteredDestinationList = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(inputVal.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            placeholder="Search"
            value={inputVal}
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="destinations-container">
          {filteredDestinationList.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              imgUrl={eachDestination.imgUrl}
              name={eachDestination.name}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
