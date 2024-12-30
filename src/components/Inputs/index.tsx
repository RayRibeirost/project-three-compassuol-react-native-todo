import { TextInput } from "react-native";
import { AppInputComponent } from "./style";
import { colors } from "../../constants/colors";

type Props = {
    inputType : string;
    placeholder: string;
    onChangeText: any;
    value:string;
    secureTextEntry: boolean;
    borderStyle : any;
}

export default function AppInput({inputType, placeholder, onChangeText, value, secureTextEntry, borderStyle} : Props) {
    if (inputType === "default") {
        return (
          <AppInputComponent
            placeholder={placeholder}
            placeholderTextColor={colors.base.gray500}
            onChangeText={onChangeText}
            value={value}
            autoCapitalize="none"
            style={borderStyle}
          />
        );
    }
    if (inputType === "password") {
        return (
          <AppInputComponent
            placeholder={placeholder}
            placeholderTextColor={colors.base.gray500}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            value={value}
            autoCapitalize="none"
            style={borderStyle}
          />
        );
    }
}