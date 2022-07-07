import { SUBMIT_PERSONAL_FORM, SUBMIT_PROFESSIONAL_FORM } from './actionTypes';

const savePersonalProfile = (personalProfile) => ({
  type: SUBMIT_PERSONAL_FORM,
  payload: personalProfile,
});

const saveProfessionalProfile = (professionalProfile) => ({
  type: SUBMIT_PROFESSIONAL_FORM,
  payload: professionalProfile,
});

export { savePersonalProfile, saveProfessionalProfile };
