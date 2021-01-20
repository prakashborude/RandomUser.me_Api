import React ,{Component} from 'react';
class App extends Component{
  constructor(props)
  {
   super(props)
   this.state={
     item:[],
     loading:false
   } 
  }
  componentDidMount(){
    fetch("https://randomuser.me/api/?results=10")
    .then((response)=>response.json())
    .then((response)=>{
      this.setState(
        {
          item:response.results,
          loading:true

        }
      )
    }
    )
  }

  render(){
    var{item,loading}=this.state
    if(!loading)
    {
      return (<div>
        Loading.....
      </div>)

    }
    else{
      return <div className="container">
        {item.map(item=>(
          <img src={item.picture.large}></img>
          
        ))}
      </div>
    }

  }
} 
export default App;
