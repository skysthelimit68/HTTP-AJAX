import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import MainForm from './Form';

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  updateModalStatus = status => {
   this.setState({
       modal: status
   })
  }

  render() {
      let friend = {
          id:'',
          name:'',
          age:'',
          email:''
      }
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a New Friend</ModalHeader>
          <ModalBody>
            <MainForm updateModalStatus = {this.updateModalStatus} formType="add" friend = {friend}/>              
          </ModalBody>
          
        </Modal>
      </div>
    );
  }
}

export default AddModal;