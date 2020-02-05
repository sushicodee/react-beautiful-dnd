import React, { Component } from 'react'
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
border:1px solid Lightgrey;
padding:8px;
margin-bottom:8px;
border-radius:2px;
background-color:${props => (props.isDragging ? 'Lightgreen' : 'white')};
color:${props => (props.isDragging ? 'white':'black')};
`;

export class task extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided,snapshot) => (
            <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref = {provided.innerRef}
                    isDragging = {snapshot.isDragging}
                >
                    {this.props.task.content}
                </Container>
            )}
            </Draggable>
        );
    }
}

export default task
