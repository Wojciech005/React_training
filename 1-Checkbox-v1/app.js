

// const displayMessage = (isConfirmed, isFormSubmitted) => {
//   if(isFormSubmitted) {
//   if(isConfirmed)  {
//     return <ValidationMessage txt= "jest ok" />
//   } else {
//     return <ValidationMessage txt="nie jest ok" />
//   }
// } else {return null}
// }


const ValidationMessage = (props) => <p>{props.txt}</p>

const OrderForm = (props) => (


  <form onSubmit ={props.submit}>
      <input type="checkbox" id = "age" onChange = {props.change} checked = {props.isConfirmed}/>
      <label htmlFor="age">Mam conajmniej 16 lat</label>
      <br />
      <button type="submit">Kup Bilet</button>
      </form>
)

class TicketShop extends React.Component {

    state = {
      isConfirmed: false,
      isFormSubmitted:false
    }

    handleCheckboxChange = () => {
      this.setState({
        isConfirmed: !this.state.isConfirmed,
        isFormSubmitted: false
      })
    }
handleFormSubmit = (e) => {
e.preventDefault()
if(!this.state.isFormSubmitted) {
this.setState ({
  isFormSubmitted: true
})
}
}

    displayMessage = () => {
      if(this.state.isFormSubmitted) {
      if(this.state.isConfirmed)  {
        return <ValidationMessage txt= "jest ok" />
      } else {
        return <ValidationMessage txt="nie jest ok" />
      }
    } else {return null}
    }
  render () {
  const {isConfirmed, isFormSubmitted} = this.state
  console.log(isConfirmed)
    return (
      
      <>  
      <h1>kup bilet na horror roku</h1>
      <OrderForm 
      change={this.handleCheckboxChange}
       submit={this.handleFormSubmit}
       checked = {isConfirmed}
       />
      {this.displayMessage()}
      
      </>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"))