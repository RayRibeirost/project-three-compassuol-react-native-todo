import { styled } from "styled-components/native";
import { colors } from "../../src/constants/colors";


export const MainContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${colors.base.gray100}
`
export const ContentContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
`

export const SvgContainer = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
`;

export const FormContainer = styled.View`
    align-items: center;
    width: 100%;
    margin-top: 30px;
`

export const UsernameContainer = styled.View`
    width: 100%;
`;

export const PasswordFormContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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