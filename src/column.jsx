import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    // Droppable has one required attribute -> droppableID
    // droppabledID needs to be unique
    // the children inside a droppable need to be placed inside a function
    //    * the first param of this function is provided which you will need to pass into your component utitlizing its droppableProps (i.e. {...provided.droppableProps})
    //    * the provided obj also has a property called innerRef which is a function that is used to supply the DOM node of your component to react dnd
    //  you will also need to utilize the placeholder property off of the provided obj
    //    * place it within your component
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <TaskList
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}