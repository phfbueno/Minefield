import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c}
                onOpen={() => props.onOpenFields(r, c)}
                onSelect={() =>props.onSelectField(r,c)} />
        })
        return <View key={r} style={{ flexDirection: 'row' }}>{columns}</View>
    })
    return <View style={style.contaier}>{rows}</View>
}

const style = StyleSheet.create({
    contaier: {
        // flexDirection: 'row',
        backgroundColor: '#EEE',
    }
})