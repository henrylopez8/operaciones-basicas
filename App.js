import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
    const[text1,settext1]=useState('');
  const[text2,settext2]=useState('');

  const[resultado,setresultado]=useState('');

  function Sumar(var1,var2){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a+b;
    var resul="resultado:"+a+" + "+b+"= "+c;
    setresultado(resul);
  }
    function Restar(var1,var2){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a-b;
    var resul="resultado:"+a+" - "+b+"= "+c;
    setresultado(resul);
  }
  function Multiplicar(var1,var2){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a*b;
    var resul="resultado:"+a+" x "+b+"= "+c;
    setresultado(resul);
  }
  function Dividir(var1,var2){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var resul
    if(b!=0){
         var c= a/b;
      resul="resultado:"+a+" ÷ "+b+"= "+c;
    }
    else{
      resul="no se puede dividir entre 0"
    }
   
    setresultado(resul);
  }

  return (
 <View style={styles.container}>
      <Text style={{padding:15, fontSize:24, backgroundColor:'orange',color:'white', textAlign:'center'}}>
        Suma de dos numeros
      </Text>
      <TextInput style={{padding:5,
      height:40,
      borderColor:'blue',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Valor 1'
      keyboardType='numeric'
      onChangeText={(text1)=>settext1(text1)}
      />
          <TextInput style={{padding:5,
      height:40,
      borderColor:'blue',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Valor 2'
      keyboardType='numeric'
      onChangeText={(text2)=>settext2(text2)}
      />
<TouchableOpacity
style={{height:60, backgroundColor:'blue', marginTop:10}}
onPress={()=>{Sumar(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  Sumar
</Text>
</TouchableOpacity>
<TouchableOpacity
style={{height:60, backgroundColor:'blue', marginTop:10}}
onPress={()=>{Restar(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  Restar
</Text>
</TouchableOpacity>
<TouchableOpacity
style={{height:60, backgroundColor:'blue', marginTop:10}}
onPress={()=>{Multiplicar(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  Multiplicar
</Text>
</TouchableOpacity>
<TouchableOpacity
style={{height:60, backgroundColor:'blue', marginTop:10}}
onPress={()=>{Dividir(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  Dividir
</Text>
</TouchableOpacity>
<Text style={{fontSize:32, textAlign:"center",marginTop:20}}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
