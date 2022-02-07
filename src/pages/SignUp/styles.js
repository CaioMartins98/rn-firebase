import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
  margin-top: 0px;
`;

export const Label = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

export const ButtonSingUp = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  color: #fff;
  background: #58C3EB;
  align-items: center;
  justify-content: center;
`;

export const ButtonSignUpText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
export const ButtonLogin = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  background: transparent;
  align-items: center;
  justify-content: center;
`;

export const ButtonLoginText = styled.Text`
  font-size: 18px;
  color: #5890eb;
  margin-top: 20px;
`;

export const SnackBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  bottom: 20px;
  background: #000;
  width: 390px;
  height: 50px;
  margin-left: 10px;
`;

export const Message = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;
