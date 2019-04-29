import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

// the columnOrder array displays the order in which we want to render out our columns in

class App extends React.Component {
  state = initialData;

  // the onDragEnd function needs to syncrnously update your state to reflect the drag and drop result
  onDragEnd = result => {

  }

  render() {
    // a DragDropContext has 3 callbacks
    //  1. onDragStart is called when the drag starts
    //  2. onDragUpdate is called when something changes during a drag such as when an item moves into a position
    //  3. onDragEnd is called at the end of a drag
    // onDragEnd is the only required callback
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        {this.state.columnOrder.map((columnId) => {
          // pull the column out of our state
          const column = this.state.columns[columnId];
          // get the tasks associated with that column
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
    
          return <Column key={column.id} column={column} tasks={tasks} />;
    
        })}
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
