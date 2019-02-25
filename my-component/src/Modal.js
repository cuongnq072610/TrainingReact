import { Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Button } from 'reactstrap'
import React, { Component } from 'react';

class ModalExample extends Component {
    render() {
        const { show } = this.props
        return (
            <div>
                <Modal isOpen={show}> 
                    <ModalHeader>ADD PEOPLE</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>NAME:</Label>
                                <input
                                    type='text'
                                    name='name'
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success">ADD</Button>
                        <Button color="primary" onClick={this.props.handleToggle.bind(this)}>CANCEL</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;