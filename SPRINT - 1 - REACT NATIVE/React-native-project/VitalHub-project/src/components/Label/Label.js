import { InputLabel, InputLabelMedicalRecord } from "./LabelStyles";

export const Label = ({textLabel}) => {
    return(
        <InputLabel>{textLabel}</InputLabel>
    )
}

export const LabelMedicalRecord = ({textLabel}) => {
    return(
        <InputLabelMedicalRecord>{textLabel}</InputLabelMedicalRecord>
    )
}