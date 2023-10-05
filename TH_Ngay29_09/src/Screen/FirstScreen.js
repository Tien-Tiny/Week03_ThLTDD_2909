import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const firstScreen = () =>{
  return (
    
    <View style={styles.container}>
    {/* Cách 1: Dùng circle <View style={styles.circle}></View> rồi canh chỉnh vòng tròn bằng thuộc tính */}
    {/* Cách 2: Dùng thẻ Image */}
    <Image source={require('../../assets/Ellipse 8.png')} 
     style={{width: 140, height: 140}}
    />
    <Text style={styles.sloganText}>GROW {"\n"}YOUR BUSINESS</Text>
    <Text style={styles.descriptionText}>
      We will help you to grow your business using{"\n"} online server
    </Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}> 
      {/* TouchableOpacity tạo nút nhấn được */}
        <Text style={styles.buttonText}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          SIGN UP
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  // justifyContent: 'space-evenly'sẽ làm cho các phần tử con 
  // bên trong phần tử cha có khoảng cách đều đặn ở giữa và ở hai đầu của phần tử cha theo hướng dọc.
  width: "100 %",
  backgroundImage: "linear-gradient(180deg, rgba(0, 204, 249, 0.36) 0%, #00CCF9 100%)"
// Khai báo theo cách 1 cho vòng tròn}, circle: {
//   width: 140,
//   height: 140,
//   borderWidth: 15,
//   borderRadius: "50%", Độ bo cong
//   alignContent:'flex-start',
}, sloganText: {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 25
}, descriptionText: {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 15
},
buttonContainer: {
  width: '100%',
  flexDirection: 'row', 
  // Xếp từ trái sang phải
  justifyContent: 'space-around'
  // Canh chỉnh theo trục chính
}
, button: {
  width: 119,
  height: 48,
  backgroundColor: '#E3C000',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center'
}
, buttonText: {
  fontSize:15,
  fontWeight: 'bold'
}
});
export default firstScreen