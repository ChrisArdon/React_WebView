import React from "react";
import { StyleSheet, Text, View} from 'react-native';

import ContentView from './ContentView';

export default function App(){
    return(
        <View style={styles.container}>
            <ContentView></ContentView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#B56280',
        justifyContent:'center',
    },
});