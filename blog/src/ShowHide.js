import React from "react"
class ShowHide extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true }
    }
    render() { 
        return ( 
                <div>
                    {
                        this.state.show ?
                        <h1>Hide and Show</h1>
                        :null
                    }
                    <button onClick={()=>{this.setState({show: !this.state.show})}}>Toggle me</button>
                </div>
         );
    }
}
 
export default ShowHide;