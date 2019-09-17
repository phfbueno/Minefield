import React from 'react'
import { View, StyleSheet } from 'react-native'


export default props => {
    return (
        <View style={style.container} >
            <View style={[style.flagpole, props.Bigger ? style.flagpoleBigger : null]} />
            <View style={[style.flag, props.Bigger ? style.flagBigger : null]} />
            <View style={[style.base1, props.Bigger ? style.base1Bigger : null]} />
            <View style={[style.base2, props.Bigger ? style.base2Bigger : null]} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#f22',
        marginLeft: 3,
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    },
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16,
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12,
    },
    base2Bigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24,
    }
})