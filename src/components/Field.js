import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback  } from 'react-native';
import params from '../params';
import Mine from './Mine'
import Flag from './Flag'




export default props => {
    const { mined, opened, nearMines, exploded, flaggded } = props
    const StyleField = [styles.field]
    if (opened) StyleField.push(styles.opened)
    if (exploded) StyleField.push(styles.exploded)
    if (flaggded) StyleField.push(styles.flaggded)
    if (!opened && !exploded) StyleField.push(styles.regular)

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen}
        onLongPress={props.onSelect}>
        <View style={StyleField}>
            {!mined && opened && nearMines > 0 ?
            <Text style={[styles.label, {color: color}]}>
                {nearMines}</Text> : false}
            {mined && opened ? <Mine/> : false}
            {flaggded && !opened ? <Flag/> : false}

        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#ccc',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    }
})