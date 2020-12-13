import { InputConfig } from '../../models/input/input-config';

export const InputConfigErrorWithPrefix = (): InputConfig => {
    return {
        inputLabel: {
            text: 'Label'
        },
        type: 'text',
        placeholder: 'Default',
        prefixIcon: {
            addIcon: true
        },
        formStatus: {
            isError: true
        }
    };
};