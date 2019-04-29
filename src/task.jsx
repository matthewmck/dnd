import React from 'react';
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

export default class Task extends React.Component {

  // a draggable has 2 requried props
  //  1. draggableID
  //  2. index
  // the component placed inside also needs to be a function
  //  * you will also need to pass in the provided obj
  //  * your component will need the draggableProps and dragHandleProps off of the propvided obj
  //  * you will also need to apply a ref as well
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}