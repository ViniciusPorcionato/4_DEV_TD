import { Button, View } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}
            />

            <Button
            title="ForgotPassword"
            onPress={() => navigation.navigate("ForgotPassword")}
            />

            <Button
            title="CheckEmail"
            onPress={() => navigation.navigate("CheckEmail")}
            />

            <Button
            title="RedefinePassword"
            onPress={() => navigation.navigate("RedefinePassword")}
            />

            <Button
            title="CreateAccount"
            onPress={() => navigation.navigate("CreateAccount")}
            />

            <Button
            title="UserProfile"
            onPress={() => navigation.navigate("UserProfile")}
            />
            
        </View>
    )
}