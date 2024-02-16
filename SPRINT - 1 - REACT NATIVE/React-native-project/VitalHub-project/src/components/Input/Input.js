import { InputBox, InputBoxMedicalRecord, InputCheckEmail, InputProfileBox } from "./InputStyles"

export const Input = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    secureTextEntry = false
}) => {
    return(
        <InputBox
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        />
    )
}


export const InputEmail = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    maxLength
}) => {
    return(
        <InputCheckEmail
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        />
    )
}

export const InputProfile = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    maxLength
}) => {
    return(
        <InputProfileBox
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        />
    )
}


export const InputMedicalRecord = ({
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    placeholderTextColor,
    maxLength
}) => {

    return(
        
        <InputBoxMedicalRecord
        placeholder={placeholder}
        keyboardType={keyType}
        value={fieldValue}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        />
    )
}