export const checkFieldsEmpty = (data, fieldNames) => {
    return fieldNames.find(field => !data[field])
}