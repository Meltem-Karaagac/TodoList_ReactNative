import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { todo_card } from "../styles"

const TodoCard = (props) => {
    return (
        <TouchableOpacity 
            style={todo_card.container}
            onPress={() => props.onDone()}
            onLongPress={() => props.onRemove()}
        >
            <Text style={[
                todo_card.text, 
                {textDecorationLine: props.data.isDone ? "line-through" : null},
                // {fontSize: props.data.isDone ? 10 : 18},
                {color: props.data.isDone ? "green" : "black"}
                ]}>{props.data.todo}</Text>
        </TouchableOpacity>
    )
}

export { TodoCard };