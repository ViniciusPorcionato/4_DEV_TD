import { InputProfile } from "../Input/Input"
import { Label } from "../Label/Label"
import { FieldContent } from "./BoxInputStyles"


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