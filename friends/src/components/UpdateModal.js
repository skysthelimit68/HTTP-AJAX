import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import MainForm from './Form';

class UpdateModal extends React.Component {
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
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Update {this.props.friend.name}</ModalHeader>
          <ModalBody>
            <MainForm updateModalStatus = {this.updateModalStatus} formType="update" friend={this.props.friend}/>              
          </ModalBody>
          
        </Modal>
      </div>
    );
  }
}

export default UpdateModal;