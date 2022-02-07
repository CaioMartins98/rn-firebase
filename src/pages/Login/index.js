import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNavigation } from "@react-navigation/native";
import {
  ButtonLogin,
  ButtonLoginText,
  ButtonSignUpText,
  ButtonSingUp,
  Container,
  Label,
  Message,
  SnackBar,
} from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();

  const handleSigunp = () => {
    navigation.navigate("SignUp");
    setMessage('')
  };

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate("Home");
        setMessage("");
      })
      .catch((err) => setMessage(err.toString()));
  };

  const onChangeEmail = (event) => {
    setEmail(event);
    setMessage("");
  };

  const onChangePassword = (event) => {
    setPassword(event);
    setMessage("");
  };

  return (
    <>
      <Container>
        <Label>Firebase Authenticator</Label>

        <TextInput
          keyboardType="email-address"
          style={style.Input}
          placeholder="Email"
          placeholderTextColor={"#9999"}
          value={email}
          onChangeText={onChangeEmail}
        />
        <TextInput
          keyboardType="visible-password"
          style={style.Input}
          placeholder="Password"
          value={password}
          onChangeText={onChangePassword}
        />

        <ButtonLogin title="LOGIN" onPress={handleLogin}>
          <ButtonLoginText>LOGIN</ButtonLoginText>
        </ButtonLogin>
        <ButtonSingUp title="SIGNUP" onPress={handleSigunp}>
          <ButtonSignUpText>Cadastrar</ButtonSignUpText>
        </ButtonSingUp>
      </Container>
      {message ? (
        <SnackBar>
          <Message>{message}</Message>
        </SnackBar>
      ) : null}
    </>
  );
};

export default Login;

const style = StyleSheet.create({
  Input: {
    borderColor: "#000",
    borderBottomWidth: 1,
    width: 250,
    height: 40,
    marginTop: 30,
    marginBottom: 20,
  },
});
