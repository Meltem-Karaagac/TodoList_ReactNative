import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { todo_input } from '../styles'

const TodoInput = (props) => {

    const [text, setText] = useState("");

    return (
        <View style={todo_input.container}>
            <View style={todo_input.inputContainer}>
                <TextInput 
                    placeholder="New todo..."
                    onChangeText={value => setText(value)}
                />
            </View>

            <View>
                <TouchableOpacity 
                    style={todo_input.buttonContainer}
                    onPress={() => props.onTodoEnter(text)}
                    >
                    <Text style={todo_input.buttonText}>Todo Input</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export { TodoInput };