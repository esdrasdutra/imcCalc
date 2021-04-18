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

    state = { modal1Visible: false, modal2Visible: false};        
    setModal1Visible(modal1Visible){this.setState({ modal1Visible });} 
    setModal2Visible(modal2Visible){this.setState({ modal2Visible });} 

    handleFormSubmit = (values) => {
        const peso = values.peso;
        const altura = values.altura;

        if (peso > 0 && altura > 0){
            axios.post("http://127.0.0.1:8000/", {
                peso: peso,
                altura: altura
            })
            
        } else if (peso == null || altura == null){
            this.setModal2Visible(true)
        } else if (peso < 0 || altura < 0){
            this.setModal1Visible(true)
        }
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
                    onFinish={(values) => {
                        this.handleFormSubmit(values);
                    }}
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
                            <Button type="primary" htmlType="submit" >
                                Calcular
                            </Button>                   
                    </Form.Item>
                </Form>  
            <Modal
                title="VALOR NEGATIVO"
                style={{ top: 20 }}
                visible={this.state.modal1Visible}
                onOk={() => this.setModal1Visible(false)}
                onCancel={() => this.setModal1Visible(false)}>
                <p>Por favor verifique o valor inserido. Ele não deve ser negativo</p>          
            </Modal> 

            <Modal
                title="VALOR INEXISTENTE"
                style={{ top: 20 }}
                visible={this.state.modal2Visible}
                onOk={() => this.setModal2Visible(false)}
                onCancel={() => this.setModal2Visible(false)}>
                <p>Por favor, preencha os campos para calcularmos seu Índice de Massa Corporal.</p>          
            </Modal>       
        </div>
        );
    }
}

export default Main;