import { styled } from "styled-components/native";
import { colors } from "../constants/colors";


export const MainContainer = styled.View`
    height: 100%;
    width: 100%;
    jusitfy-content: center;
    align-items: center;
    background-color: ${colors.base.gray100}
`
export const ContentContainer = styled.View`
    width: 90%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const SvgContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

export const FormContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 30px;
`

export const UsernameContainer = styled.View`
    width: 100%;
    margin-bottom: 10px;
`;

export const PasswordFormContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`;

export const PasswordForm = styled.View`
    width: 82%;
`;
export const PasswordButton = styled.View`
    width: 16%;
`;

export const LoginButtonContainer = styled.View`
    width: 100%;
`;