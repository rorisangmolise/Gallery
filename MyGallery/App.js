import { StatusBar } from 'react-native';
import { SimpleLineIcons, Ionicons,MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Image,Text, View,TouchableOpacity } from 'react-native';
import { useState} from 'react';
import Display from './Display';

export default function App() {
  const [image, setImage] = useState(require("./assets/normal.jpg"));
  function NormalPicture(){
    setImage(require("./assets/normal.jpg"))
  }
  function HappyPicture(){
    setImage(require("./assets/Happy.jpg"))
  }
  function SadPicture(){
    setImage(require("./assets/Sad.jpg"))
  }
  return (
    <View style={styles.Container1}>
      <View style={styles.HOME}>
        
          <View style={styles.Roxy}>
           <TouchableOpacity> 
            <Ionicons name="arrow-back" size={40} color="white" style={{marginStart:5, marginTop:5}} />
           </TouchableOpacity>
         <Text style={{marginStart:3, alignSelf:"center",marginTop:-8, fontWeight:'bold', fontSize:20, color: "white"}}>Roxy's Pictures</Text>
         </View>
         <TouchableOpacity>
         <MaterialIcons name="add-to-photos" size={35} color="white" style={{marginStart:178, marginTop:10}} />
         </TouchableOpacity>
      </View>
      <View style={styles.BigPhotoView}>
           <Display image={image}/>
         </View>
      <View style={styles.MainBar}>
        
      <View style={{flexDirection: "row", justifyContent: "space-between", marginTop:5, alignItems: "center"}}>
       
      </View>
      < View style={styles.SmallPictures}>
      <TouchableOpacity onPress={HappyPicture}>
            <Image style={styles.Picture}
            source={require("./assets/Happy.jpg")}/>
            <Text style={styles.Mood}>HAPPY</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={NormalPicture}>
            <Image style={styles.Picture}
            source={require("./assets/normal.jpg")}/>
            <Text style={styles.Mood}>NORMAL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={SadPicture}>
            <Image style={styles.Picture}
            source={require("./assets/Sad.jpg")}/>
            <Text style={styles.Mood}>SAD</Text>
          </TouchableOpacity>
     </View> 
      
      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Container1: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainBar:{
    width:"100%",
    backgroundColor:"blue",
  },
  HOME:{
    width:"100%",
    height:60,
    flexDirection:'row',
    backgroundColor: "blue",
    
  },
  Roxy:{
   flexDirection:'row',
  },
  Picture:{
    alignSelf: 'center',
    height: 60,
    width:60,
    borderRadius:30,
  },
   BigPhotoView:{
    flex:1,
     margin:5,
     backgroundColor: "blue",
     width: "98%",
     alignItems: "center",
     justifyContent:'center',
    borderRadius:5,
   },
   SmallPictures:{
     marginVertical:10,
     flexDirection:"row",
     width:"100%",
     height:59,
     alignItems:"center",
     justifyContent: 'space-evenly',
   },
   Mood:{
     alignSelf: "center",
     color:"white",
     fontWeight:"700",
   },  

});
