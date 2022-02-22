import react from 'react';
import Constants from 'expo-constants';
import { createSwitchNavigator,createStackNavigator } from 'react-navigation';
import React from 'react';
import {Button, Text, View} from 'react-native'

//Switch Navigator Creation
class ScreenComponentOne extends React.Component {
    render(){
        return (
            <View style={{flex: 1, alignItems:'center', justifyContent:'center', borderWidth: 25, borderColor:'teal'}}>
                <Button title="Go to screen two" onPress={() => {
                    this.state.navigation.navigate("RouteNameTwo");
                }}/>
            </View>
        );
    }
}

class ScreenComponentTwo extends React.Component {
    render(){
        return (
          <View style={{flex: 1, alignItems:'center', justifyContent:'center', borderWidth: 25, borderColor:'orange'}}>
            <Button title="Go to screen one" onPress={() => {
                this.state.navigation.navigate("RouteNameOne");
            }}/>
          </View>  
        );
    }
}

const AppNavigator = createSwitchNavigator({
    "RouteNameOne" : ScreenComponentOne,
    "RouteNameTwo" : ScreenComponentTwo
});

export default class App extends React.Component {
    render() {
        return <AppNavigator />
    }
}


//Stack Navigator
function randomNumber() {
    return Math.floor(Math.random() * 10)
}

class ScreenComponentOne extends React.Component {
    static navigationOptions = {
        headerTitle: 'First dude',
        headerTintColor: 'red',
    };

    render() {
        return (
            <View 
                style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    borderWidth:25,
                    borderColor: 'teal'
                }}>
                <Button
                    title="Go to screen two" 
                    onPress={() => {
                        this.state.navigation.navigate("RouteNameTwo")
                        }}/>
                </View>
        )
    }
}

class ScreenComponentTwo extends React.Component {
    static navigationOptions = {
        headerTitle:'Screen the second',
        headerTintColor: 'green',
        headerRight: <Button title='Press me' onPress={
            () => navigation.navigate('RouteNameThree', {
                number: 11,
                })} />
        //alert('pressed')
    };

    render() {
        return (
            <View 
                style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    borderWidth:25,
                    borderColor: 'orange'
                }}>
                <Button
                    title="Go to screen one" 
                    onPress={() => {
                        this.state.navigation.navigate("RouteNameThree", {
                            number:randomNumber()
                            })
                        }}/>
                </View>
        )
    }
}

class ScreenComponentThree extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: `Number: ${navigation.getParam('number')}`,
        };
    };

    render() {
        return (
            <View 
                style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    borderWidth:25,
                    borderColor: 'purple'
                }}>
                <Text style={{fontSize:25}}>
                    {this.props.navigation.getParam('number')}
                </Text>
                <Button 
                    title="Try again"
                    onPress={() => {
                        this.props.navigation.setParams({
                            number: randomNumber()});
                    }}/>
                <Button
                    title="Go back" 
                    onPress={() => {
                        this.state.navigation.goBack()
                        }}/>
                </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    "RouteNameOne": ScreenComponentOne,
    "RouteNameTwo": ScreenComponentTwo,
    "RouteNameThree": ScreenComponentThree,
});