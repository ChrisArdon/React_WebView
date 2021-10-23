import React from "react";
import { WebView } from 'react-native-webview';
import { View, Text, StyleSheet } from "react-native";
import {HtmlConstant} from './HtmlConstant'

export default function ContentView(){
    return(
        <View style={styles.container}>
            <WebView source={{html:HtmlConstant}} style={styles.web}></WebView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    web:{
        fontSize:20,
    },
})
