// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import PropTypes from 'prop-types';
// function Profile(props)
// {
//     return(
//         <div>
//             {/* <center>
//             <form>            
//             <label>Name : </label>
//             <span>{props.bio.Name}</span><br/>
//             <label>Email : </label>
//             <span>{props.bio.email}</span><br/>   
//             <label>Age : </label>
//             <span>{props.bio.age}</span><br/> 
//             <label>Phone Number : </label>
//             <span>{props.bio.no}</span><br/>
//             </form>
//             </center> */}
//             <h2>
//                 hi {props.info.Name} , Welcome back!
//             </h2>
//         </div>
//     )
// }
// Profile.propTypes={
//     info: PropTypes.object
// };
// export default Profile;
import React from 'react';

class switcher extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOn: false,
        };
    }
    handleToggle=()=>{
        this.setState((prevState)=>({
            isOn: !prevState.isOn,
        }));
    };
    render(){
        return(
            <button onClick={this.handleToggle}>
                {this.state.isOn ? "ON" : "OFF"}
            </button>
        );
    }
}
export default switcher;