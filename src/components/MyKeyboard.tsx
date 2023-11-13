import * as React from "react";
import Button from "./Button";
import {View, Text} from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Color";

export default function MyKeyboard (){
    const [firstNumber, setFirstNumber]=React.useState("");
    const [secondNmber, setsecondNumber]=React.useState("");
    const [operation, setOperation]=React.useState("");
    const [result, setResult]=React.useState<Number | null>(null);

    const handleNUmberPress=(buttonValue:string) => {
        if(firstNumber.length<10){
            setFirstNumber(firstNumber+buttonValue)
        }
    };
    const handleOperationPress=(buttonValue:string) => {
        setOperation(buttonValue)
        setsecondNumber(firstNumber)
        setFirstNumber("")
    };
    const clear = () =>{
        setFirstNumber("")
        setsecondNumber("")
        setOperation("")
        setResult(null)
    };
    const getResult = () => {
        switch(operation){
            case "+":
                clear()
                setResult(parseInt(secondNmber)+parseInt(firstNumber))
                break;
            case "-":
                clear()
                setResult(parseInt(secondNmber)-parseInt(firstNumber))
                break;
            case "*":
                clear()
                setResult(parseInt(secondNmber)*parseInt(firstNumber))
                break;
            case "/":
                clear()
                setResult(parseInt(secondNmber)/parseInt(firstNumber))
                break;
            case "%":
                clear()
                setResult(parseInt(secondNmber)%parseInt(firstNumber))
                break;
            case "**":
                clear()
                 setResult(parseInt(secondNmber)**parseInt(firstNumber))
                 break;
            default:
                clear()
                setResult(0)
                break;
        }
    };
    const firstNumberDisplay =() =>{
        if(result!==null){
           return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color:myColors.result}]: [Styles.screenFirstNumber,{fontSize:50, color:myColors.result}]}>{result.toString()}</Text>
        }
        if(firstNumber && firstNumber.length<6){
            return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>
        }
        if(firstNumber===""){
            return <Text style={Styles.screenFirstNumber}>{"0"}</Text>
        }
        if(firstNumber.length>5 && firstNumber.length<8){
            return (<Text style={[Styles.screenFirstNumber, {fontSize:70}]}>{firstNumber}</Text>)
        }
        if(firstNumber.length>7){
            return(<Text style={[Styles.screenFirstNumber, {fontSize:50}]}>{firstNumber}</Text>)
        }
    }

    return(    
        <View style={Styles.viewButton}>
        <View
        style={{
            height:120,
            width:"90%",
            justifyContent:"flex-end",
            alignSelf:"center",
           }}
        >
           <Text style={Styles.screenSecondNumber}>
            {secondNmber}
            <Text style={{color:"purple", fontSize:50, fontWeight:'500'}}>{operation}</Text>
            </Text>
            {firstNumberDisplay()}
        </View>
        <View style={Styles.row}>
            <Button title="**" onPress={()=>handleOperationPress("**")}/>
            <Button title="C" onPress={clear}/>
            <Button title="+/-" onPress={()=>handleOperationPress("+/-")}/>
            <Button title="%"  onPress={() =>handleOperationPress("%")}/>
            <Button title="+" isBlue onPress={() =>handleOperationPress("/")}/>
        </View>
        <View style={Styles.row}>
            <Button title="7" onPress={() => handleNUmberPress("7")}/>
            <Button title="8" onPress={() => handleNUmberPress("8")}/>
            <Button title="9" onPress={() => handleNUmberPress("9")}/>
            <Button title="x" isBlue onPress={() => handleOperationPress("*")}/>
        </View>
        <View style={Styles.row}>
        <Button title="4" onPress={() => handleNUmberPress("4")}/>
        <Button title="5" onPress={() => handleNUmberPress("5")}/>
        <Button title="6" onPress={() => handleNUmberPress("6")}/>
        <Button title="-" isBlue onPress={() => handleOperationPress("-")}/>
        </View>
        <View style={Styles.row}>
        <Button title="1" onPress={() => handleNUmberPress("1")}/>
        <Button title="2" onPress={() => handleNUmberPress("2")}/>
        <Button title="3" onPress={() => handleNUmberPress("3")}/>
        <Button title="/" isBlue onPress={() => handleOperationPress("/")}/>
        </View>
        <View style={Styles.row}>
        <Button title="." onPress={() => handleNUmberPress(".")}/>
        <Button title="0" onPress={() => handleNUmberPress("0")}/>
        <Button title="c"  onPress={() => setFirstNumber(firstNumber.slice(0,-1))}/>
        <Button title="=" isBlue onPress={() => getResult()}/>
        </View>
     </View>   
    )
}