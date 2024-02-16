import { Input, InputMedicalRecord, InputProfile } from "../Input/Input"
import { Label, LabelMedicalRecord } from "../Label/Label"
import { FieldContent, FieldContentMedicalRecord } from "./BoxInputStyles"


export const BoxInput = ({
    fieldWidth = 100,
    editable = true,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength
}) => {
    return(
        <FieldContent fieldWidth={fieldWidth}>

        <Label textLabel={textLabel}/>

        <InputProfile editable={editable} placeholder={placeholder } fieldValue={fieldValue} onChangeText={onChangeText} keyType={keyType} maxLength={maxLength}/>

        </FieldContent>
    )
}

export const BoxInputMedicalRecord = ({
    fieldWidth = 100,
    editable = true,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
    placeholderTextColor='#34898F'
}) => {
    return(
        <FieldContentMedicalRecord fieldWidth={fieldWidth}>

        <LabelMedicalRecord textLabel={textLabel}/>

        <InputMedicalRecord editable={editable} placeholder={placeholder } fieldValue={fieldValue} onChangeText={onChangeText} keyType={keyType} maxLength={maxLength} placeholderTextColor={placeholderTextColor}/>

        </FieldContentMedicalRecord>
    )
}

export const BoxInputMedical = ({
    fieldWidth = 100,
    editable = true,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
    placeholderTextColor='#34898F'
}) => {
    return(
        <FieldContentMedicalRecord fieldWidth={fieldWidth}>

        <Label textLabel={textLabel}/>

        <Input editable={editable} placeholder={placeholder } fieldValue={fieldValue} onChangeText={onChangeText} keyType={keyType} maxLength={maxLength} placeholderTextColor={placeholderTextColor}/>

        </FieldContentMedicalRecord>
    )
}