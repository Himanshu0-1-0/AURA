import "./MainDiv.css"
import Card from "./Card.js"
export default function MainDiv() {
  return (<div className="card-container">
     <Card imageid="/Card1-Images/fashion/test.jpg"/>
      <Card imageid="/Card1-Images/footwear/test.jpg"/>
      <Card imageid="/Card1-Images/accessories/test.jpg"/>
  </div>
  )
}
