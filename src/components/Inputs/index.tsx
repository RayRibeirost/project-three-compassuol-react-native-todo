import { TextInput } from "react-native";
import { AppInputComponent } from "./style";
import { colors } from "../../constants/colors";

type Props = {
    inputType : string;
    placeholder: string;
}

export default function AppInput({inputType, placeholder} : Props) {
    if (inputType === "default") {
        return (
            <AppInputComponent 
                placeholder={placeholder}
                placeholderTextColor={colors.base.gray500}
            />
        )
    }
    if (inputType === "password") {
        return (
            <AppInputComponent 
                placeholder={placeholder}
                placeholderTextColor={colors.base.gray500}
                secureTextEntry={true}
            />
        )
    }
}