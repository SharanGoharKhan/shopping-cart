import React from 'react'
import { View, Text, TouchableOpacity,Image, Animated, Easing, ScrollView } from 'react-native'
import styles from './styles'
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scaling';

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
                    <Image style={styles.image}
                        source={require('../../assets/icons/dropdown.png')}
                    />
                </TouchableOpacity>
                <View 
                    >
                    <Animated.View
                    style={[styles.animated_container,{opacity: this.opacity,zIndex: 1, elevation:1}]}>
                        <ScrollView style={{height:60}}>
                            { this.data.map( (item, i)=>
                                 <TouchableOpacity 
                                    //style={{ zIndex: 1, elevation:1}}
                                    disabled={false} 
                                    key={i} 
                                    onPress ={()=>this.selectItem(i)}>
                                        <Text style={styles.item_text}>{item} </Text>
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