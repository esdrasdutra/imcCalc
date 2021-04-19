import React from 'react';
import axios from 'axios';
import Main from '../Main'

import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

const columns = [{ title: 'IMC', dataIndex: 'imc', }, 
{ title: 'Classificação', dataIndex: 'class'}]

const data = [{
key: '1',
imc: '< 18.5',
class: 'Baixo peso'
},
{
key: '2',
imc: '18.5 a 24.9',
class: 'Peso Normal'
},
{
key: '3',
imc: '25.0 a 29.9',
class: 'Excesso de peso'
},
{
key: '4',
imc: '30.0 a 34.9',
class: 'Obesidade de Classe 1'
},
{
key: '5',
imc: '35,0 a 39,9',
class: 'Obesidade de Classe 2'
},
{
key: '6',
imc: '>40',
class: 'Obesidade de Classe 3'}
]

class Result extends React.Component {

    state = {
        user:[],
        backHome: false       
    };

    showAlert() {
      alert("I'm an alert");           
    }

    setRedirect(backHome){this.setState({ backHome });}

    userData(){
        axios.get("http://127.0.0.1:8000/")
        .then(res => {
            this.setState({ 
            user: res.data 
          });
      })
    }

    componentDidMount() {
      this.userData();
      }

    render(){
        const user  = this.state.user;
        const backHome = this.state.backHome;
        if (backHome) {
            return <Link to = '/' component={Main}/>
        }

        return( 
            <React.Fragment>
        <h1>CLASSIFICAÇÃO DE PESO PELO IMC PARA ADULTOS</h1>
        <div>
          { user.map(post => { const { id, imc } = post;

            return (
              <div key={id}>
                <h1>SEU IMC: {imc}</h1>
                <hr />
                </div>
              );
            })[(user.length)-1]
          }
    
      <Table columns={columns} dataSource={data} size="middle" />
      
        <Button type="primary" 
                htmlType="submit" 
                style={{color:'white'}}
                onClick={() => this.setRedirect(true)}>
          VOLTAR
        </Button> 

        </div>
      </React.Fragment>
      
      
            
        );
    }
}
export default Result;
