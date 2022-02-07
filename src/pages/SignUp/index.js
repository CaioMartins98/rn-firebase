import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../services/firebase";
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
import { useNavigation } from "@react-navigation/native";
// import { Container } from './styles';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();

  const handleSignup = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setMessage("Cadastrado com sucesso!");
        setTimeout(() => {
          navigation.navigate("Login");
        }, 1500);
      })
      .catch((err) => {
        setMessage(err.toString());
        setEmail("");
        setPassword("");
      });
  };
  const handleLogin = () => {
    navigation.navigate("Login");
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
        <Label>Cadastro</Label>

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

        <ButtonSingUp onPress={handleSignup}>
          <ButtonSignUpText>CADASTRAR</ButtonSignUpText>
        </ButtonSingUp>
        <ButtonLogin onPress={handleLogin}>
          <ButtonLoginText>Login</ButtonLoginText>
        </ButtonLogin>
      </Container>
      {message ? (
        <SnackBar>
          <Message>{message}</Message>
        </SnackBar>
      ) : null}
    </>
  );
};

export default SignUp;
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
