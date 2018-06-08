import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            // if (!err) {
            //     console.log("here")
            //     this.props.onSubmit(values)
            // }
            this.props.onSubmit(values)
            this.props.form.values = ''
        });
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <Form onSubmit={this.handleSubmit}>
            <FormItem>
            {getFieldDecorator('Author', {
                rules: [{ required: true, message: 'Please input your Author!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Author" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('Message', {
                rules: [{ required: true, message: 'Please input your Message!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Message" />
            )}
            </FormItem>
            <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
                提 交
            </Button>
            </FormItem>
        </Form>
        );
    }
}
    
const productsForm = Form.create()(NormalLoginForm);

export default productsForm
  
