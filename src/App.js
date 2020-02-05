import React, { Component } from 'react'
import initialData from './initialData';
import Column from './column.jsx';
import {DragDropContext} from 'react-beautiful-dnd';
import styled from 'styled-components';
import parsedData from './initialData';
const Container = styled.div`
  display:flex;
`;

export class App extends Component {
  state = initialData;
  data = parsedData;

  onDragEnd = result => {
    const {destination,source,draggableId} = result;
    if(!destination){
      return;
    }
    if(destination.droppableId === source.droppableId && destination.index === source.index){
      return;
    }
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
    
    if(start === finish){
      const newTasksIds = [...start.taskIds]
      newTasksIds.splice(source.index,1)
      newTasksIds.splice(destination.index,0,draggableId)
  
      const newColumn = {
        ...start,
        taskIds:newTasksIds
      }
  
      const newState = {
        ...this.state,
        columns:{
          ...this.state.columns,
          [newColumn.id]:newColumn,
        }
      }
      this.setState(newState);
      return;
    }

    //moving one col to another
    const startTaskIds = [...start.taskIds];
    startTaskIds.splice(source.index,1);

    const newStart = {
      ...start,
      taskIds:startTaskIds
    }

    const finishTaskIds = [...finish.taskIds];
    finishTaskIds.splice(destination.index,0,draggableId)
    const newFinish = {
      ...finish,
      taskIds:finishTaskIds
    }

    const newState = {
      ...this.state,
      columns:{
        ...this.state.columns,
        [newStart.id]:newStart,
        [newFinish.id]:newFinish
      }
    }

    this.setState(newState);
    return;
  }
  render() {
    return(
      <DragDropContext
      onDragEnd = {this.onDragEnd}>
        <Container>
          {this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
              return <Column key = {column.id} column = {column} tasks = {tasks}></Column>
          })};
        </Container>
      </DragDropContext>
    ) 
  }
}

export default App

