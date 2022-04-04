import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

const DragWrapper = styled.div`
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
`;

const DragItem = styled.div`
  width: 200px;
  height: 200px;

  margin: 0px 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: gray;
`;

export const DragAndDrop = () => {
  const [todos, setTodos] = useState([
    { id: "1", title: "1" },
    { id: "2", title: "2" },
    { id: "3", title: "3" },
    { id: "4", title: "4" },
    { id: "5", title: "5" },
  ]);

  const handleChange = (result) => {
    if (!result.destination) return;

    const items = [...todos];

    const [reorderdItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderdItem);

    setTodos(items);
  };

  return (
    <DragDropContext onDragEnd={handleChange}>
      <Droppable droppableId="todos" direction="horizontal">
        {(provided) => (
          <DragWrapper className="todos" {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map(({ id, title }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <DragItem ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                    {title}
                  </DragItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </DragWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};
