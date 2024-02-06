import { InputBox } from "./InputStyles"

export const Input = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor
}) => {
    return(
        <InputBox
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        />
    )
}