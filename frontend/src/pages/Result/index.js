import React from 'react';
import axios from 'axios';

class Result extends React.Component {
    state = {
        usuarios:[],
        isLoading: true,
        errors: null
    };
    
    userData(){
        axios.get("http://127.0.0.1:8000/")
            .then(res => {
                this.setState({
                    usuarios: res.data,
                    isLoading: false
                });
            })
      }

      componentDidMount() {
        this.userData();
      }
      
    render(){
        const {isLoading, usuarios} = this.state;
        return( 
            <React.Fragment>
        <h2>Seu IMC É</h2>
        <div>
          {!isLoading ? (
            usuarios.map(post => {
              const { id, imc } = post;
              return (
                <div key={id}>
                  <p>{imc}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>       
            
        );
    }
}
export default Result;
