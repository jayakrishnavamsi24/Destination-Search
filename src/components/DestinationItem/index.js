import './index.css'

const DestinationItem = props => {
  const {imgUrl, name} = props

  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
