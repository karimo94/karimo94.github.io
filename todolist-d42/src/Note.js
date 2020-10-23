import React from 'react';
import './Note.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
//yarn start
//put const styles here
const cardStyle = {
    border:"0px transparent"
}

class Note extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isItemDone : false,
            inputBgColor : "white"
        }
    }
    
    toDoCheckToggled = () => {
        this.setState({
            isItemDone: !this.state.isItemDone,
            inputBgColor: this.state.isItemDone ? "white" : "lightgreen"
        })
    }

    render() {
        return(
            <div className="Note">
                <Card style={cardStyle}>
                    <Form inline>
                        <Form.Group>
                            
                            <Form.Check type="checkbox" id="chkBox" onChange={this.toDoCheckToggled} checked={this.state.isItemDone}/>

                            <Form.Control type="text" placeholder="Enter your to-do note here" style={{backgroundColor: this.state.inputBgColor}}/>

                            <Button variant="outline-danger" className="float-right" onClick={() => this.props.onDelete(this.props.id)}>
                                <FontAwesomeIcon icon={faTrashAlt}/>
                            </Button>

                        </Form.Group>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Note;