import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Linking  } from 'react-native';
import { Header, Icon, Left, Card, CardItem, Thumbnail, Body, Button, Right } from 'native-base'
import HeaderEntry from '../Header'
import moment from 'moment'
import urlApi from '../../../ConstIP'
import HTML from 'react-native-render-html';

class detailEvents extends Component {
    static navigationOptions = {
              drawerIcon : ({tintColor}) => console.log('e'),
        drawerLabel :  ({tintColor}) =>console.log('e') 
    }
    componentDidMount = async () => {
      let formData = {status : 1}
      const dataUpdate = this.props.navigation.state.params.info
      const id = dataUpdate.id
      console.log('ENTRO EVENTO', id)
      await fetch(`${urlApi}/events/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(formData),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }

    render() {
      const data = this.props.navigation.state.params.info
      console.log('DATA EVENT', data)
      return (
        <View style={styles.container}>
          <HeaderEntry />
          <Header style={{display: 'flex', alignItems:'center', backgroundColor: '#0F385A'}}>
            <View style={{flex: 1}}>
              <Icon name='arrow-round-back' style={{color:'white'}} onPress = {() => this.props.navigation.navigate('Eventos')} />
            </View>
            <View style={{flex: 2}}>
              <Text style={{color: 'white'}}>{data.name} </Text>
            </View>
          </Header>
          <ScrollView>
              <Card style={{flex: 0}}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text note>{moment(data.created_at).format("YYYY-MM-DD")}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body style={{display: 'flex', alignItems:'center' }}>
                    <Image source={{uri: data.imagenUrl !== "" ? data.imagenUrl : 'https://www.poli.edu.co/sites/default/files/logos/logo-poli-politecnico-grancolombiano2018.png' }} style={{ justifyContent: 'center',
                      alignItems: 'center', height: 240, width: 320, flex: 1, resizeMode: 'contain'}}
                    />
                    <Text>
                      {data.short_description}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body style={{display: 'flex', alignItems:'center' }}>
                    <HTML html={data.description}/>
                  </Body>
                </CardItem>
                <CardItem>
                  <Right style={{flex: 1}}>
                    <Button style={{backgroundColor: '#0F385A', width: 100, justifyContent: 'center'}} onPress = {() => Linking.openURL(`${data.linkPage !== "" ? data.linkPage : 'https://www.poli.edu.co/'}`).catch((err) => console.error('An error occurred', err))}>
                      <Text style={{color: 'white'}} >Ir a web</Text>
                    </Button>
                  </Right>
              </CardItem>
              </Card>
          </ScrollView>    
        </View>
      );
    }
}
export default detailEvents

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
