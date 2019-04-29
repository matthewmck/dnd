// React dnd has no opinions on how you should structure or manage your data
// The tasks obj contains the tasks in our system
// It uses the task id as the task key for the look up of the task obj

// We will also use a column obj which will store the columns in our project
// we also use the column id as the column key for the look up of the column obj
// each column has a taskIds array
//  * this array serves two purposes
//      1. ownership of tasks
//      2. maintain order (i.e. task 1 before task 2)

// columnOrder is an array that manages the order of the columns

const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Take out the garbage'},
    'task-2': {id: 'task-2', content: 'Watch my favorite show'},
    'task-3': {id: 'task-3', content: 'Charge my phone'},
    'task-4': {id: 'task-4', content: 'Cook dinner'}
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    }
  },
  columnOrder: ['column-1']
}

export default initialData;