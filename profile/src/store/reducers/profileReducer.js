import { SUBMIT_PERSONAL_FORM, SUBMIT_PROFESSIONAL_FORM } from "../actions/actionTypes";

const initialState = {
    personal: {
        name: '',
        email:'',
        cpf:'',
        address: {
            city: '',
            street: '',
            uf:''
        }
    },
    professional: {
        curriculum:'',
        position:'',
        description:''
    }
}

const profileReducer = (state= initialState, action) => {
    switch(action.type){
        case SUBMIT_PERSONAL_FORM:
            return {
                ...state,
                personal: {
                    ...action.payload
                }
            }

        case SUBMIT_PROFESSIONAL_FORM:
            return {
                ...state,
                professional: {
                    ...action.payload
                }
            }

        default:
            return state;
    }

}
export default profileReducer;