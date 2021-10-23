import React from "react";
import { WebView } from 'react-native-webview';
import { View } from "react-native";

const HTML = '<h1>Hello World</h1>';

export default function ContentView(){
    return(
        <View style={styles.container}>
            <WebView source={{html:HTML}}></WebView>
        </View>
    );
}

const styles = {
    container: {
        flex:1,
        
    },
}
