import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { Colors } from '_constants';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = {
          data: props.data,
          expanded : false,
        }
    }

  render() {

    return (
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='white' />
            </TouchableOpacity>
            {
                this.state.expanded &&
                <View style={styles.child} >
                    <Text style={styles.childText}>{this.props.data}</Text>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.toggleExpand()}>
                        <Text style = {styles.buttonText}>Collapse Chapter</Text>
                    </TouchableOpacity>
                </View>
            }
       </View>
    )
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 16,
        fontWeight:'bold',
        fontFamily:'Univers-Condensed',
        color: 'white',
        flex:1,
    },
    row:{
        borderRadius:5,
        flexDirection: 'row',
        justifyContent:'space-between',
        height:60,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.trocaireBlue,
    },
    child:{
        backgroundColor: Colors.accordianShade,
        padding:15,
        borderRadius:5,
        borderWidth:3,
        borderColor:Colors.trocaireBlue
    },
    childText:{
        paddingBottom:10,
        fontFamily: 'Univers-Light-Normal',
        fontSize:16
    },
    button:{
        alignItems:'center',
        height:30,
        borderRadius:5,
        backgroundColor:Colors.trocaireBlue,
    },
    buttonText:{
        fontSize:14,
        paddingTop:5,
        fontWeight:'bold',
        color:'white'
    }
})
