import React from 'react'
import { View, Text, TouchableOpacity,Image, Animated, Easing, ScrollView } from 'react-native'
import styles from './styles'

/*Props
data

*/

class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.scaleY = new Animated.Value(0)
        this.height = new Animated.Value(0)
        this.translateY = new Animated.Value(-20)
        this.opacity= new Animated.Value(0)

        this.show_items = false
        this.data = props.items

        this.state = {selectedCategoryText: this.data[0], disabled : true}
    }

    selectItem=(i)=>{
        console.log(i)
        this.setState({selectedCategoryText: this.data[i]})
        this.opacity.setValue(0)
        this.show_items= false
        this.setState({disabled:true})
    }

    animate=()=>{
        //console.log('animate', this.scaleY)
        /*
        Animated.spring(this.scaleY,{
            toValue:1,
            duration: 100,
            useNativeDriver: true
        }).start()
        */
        
       /*
       Animated.timing(this.height,{
        toValue:50,
        duration: 100,
        useNativeDriver: true
    }).start()
    */
   /*
    this.translateY.setValue(-20)
    Animated.timing(this.translateY,{
        toValue:100,
        duration: 100,
        useNativeDriver: true
    }).start()
    */
        if( this.show_items){
            this.opacity.setValue(0)
            this.show_items= false
            this.setState({disabled:true})
        }else{
            Animated.timing(this.opacity,{
                toValue:1,
                duration: 300,
                useNativeDriver: true
            }).start()
            this.show_items= true
            this.setState({disabled:false})
        }

    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.main_container} onPress={this.animate}>
                    <Text style={styles.text}>{this.state.selectedCategoryText}</Text>
                    <Text>-V-</Text>
                </TouchableOpacity>
                <View style={{zIndex:3}}>
                    <Animated.View style={[styles.animated_container,{opacity: this.opacity, zIndex:4,elevation:3}]}>
                        <ScrollView style={{height:60,zIndex:8,elevation:4}}>
                            { this.data.map( (item, i)=>
                                 <TouchableOpacity 
                                    style={{elevation:5}}
                                    disabled={false} 
                                    key={i} 
                                    onPress={()=>this.selectItem(i)}>
                                        <Text >{item} </Text>
                                  </TouchableOpacity>
                                 )}
                        </ScrollView>
                  
                    </Animated.View>
                </View>
            </View>
        )
    }
}
export default Dropdown