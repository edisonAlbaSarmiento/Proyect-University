import React from 'react'
import { Text, View, TouchableHighlight, Dimensions } from 'react-native';

class HeaderEntry extends React.Component{ 
render(){
    return(
    <View style={{height: 210, width:370, backgroundColor: 'steelblue'}} >
        <View style={{flex: 3, backgroundColor: 'powderblue', width: 360, height: 150,
            justifyContent: 'center',
            alignItems: 'center'}} >
            <TouchableHighlight
                    style = {{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: Dimensions.get('window').width * 0.5,
                    height: Dimensions.get('window').width * 0.5,
                    backgroundColor:'#f00',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}
                    underlayColor = '#ccc'
                >
                    <Text> Header </Text>
                </TouchableHighlight>
        </View>
    </View>
    )
    }
}

export default HeaderEntry