import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React from "react";

import { auth } from "../../services/firebase";

import { ButtonLogOut, Container, Text, TextLogOut } from "./styles";

const Home = () => {
  const navigation = useNavigation();

  const handleLogOut = async () => {
    await signOut(auth)
      .then(navigation.navigate("Login"))
      .catch((err) => console.log("erro", err));
  };

  return (
    <Container>
      <Text>Home Page</Text>
      <ButtonLogOut onPress={handleLogOut}>
        <TextLogOut>SAIR</TextLogOut>
      </ButtonLogOut>
    </Container>
  );
};

export default Home;
