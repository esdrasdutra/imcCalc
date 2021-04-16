import React from 'react';
import axios from 'axios';
import { Form, Input, Button, Modal} from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 }
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 }
};

class Main extends React.Component{
    state = { modal1Visible: false};
    
    setModal1Visible(modal1Visible) {this.setState({ modal1Visible });}
    
    handleFormSubmit = (values) => {
        const peso = values.peso;
        const altura = values.altura;

        axios.post("http://127.0.0.1:8000/", {
            peso: peso,
            altura: altura
        })
        .then(res => {
            if (res.status === '200'){
                axios.get("http://127.0.0.1:8000/")
                .then(resp => {
                    console.log(resp.data);
                    });;
            }
        })
        .catch(err => {
            if (err.response) {
                if (peso < 0){
                    this.setModal1Visible(true)
                } else if (altura < 0){
                    this.setModal1Visible(true)
                } 
            } else if (err.request) {
              // client never received a response, or request never left
            } else {
              // anything else
            }
        })
        console.log(peso, altura)        
    }

    render() {        
        return (
            <div>
                <h2>Calculadora de IMC</h2>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={(values) => this.handleFormSubmit(values)}
                >
                    <Form.Item
                        label="Peso"
                        name="peso"
                    >
                        <Input placeholder="Qual é o seu peso atual?"/>
                    </Form.Item>

                    <Form.Item
                        label="Altura"
                        name="altura"                        
                    >
                        <Input placeholder="Qual é a sua altura atual?" />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Calcular
                         </Button>
                    </Form.Item>
                </Form>
                
        <Modal
            title="VALOR NEGATIVO"
            style={{ top: 20 }}
            visible={this.state.modal1Visible}
            onOk={() => this.setModal1Visible(false)}
            onCancel={() => this.setModal1Visible(false)}
        >
            <p>Por favor verifique o valor inserido. Ele não deve ser negativo</p>
          
        </Modal>     
      
            </div>
        );
    }
}
export default Main;