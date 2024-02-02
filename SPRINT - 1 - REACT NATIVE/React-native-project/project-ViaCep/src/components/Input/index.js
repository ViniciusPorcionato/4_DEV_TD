import { InputBox } from "./style"

export const Input = ({
    editable, 
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    maxLength
}) => {
    return(
        <InputBox
        placeholder={placeholder}
        editable={editable}
        keyboardType={keyType}
        maxLength={maxLength}
        value={fieldValue}
        onChangeText={onChangeText}
        />
    )
}