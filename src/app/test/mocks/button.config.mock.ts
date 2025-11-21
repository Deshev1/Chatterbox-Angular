import { ButtonConfig } from '../../shared/models/button.model';

export const SUBMIT_BUTTON_MOCK: ButtonConfig = {
  class: 'submit-btn',
  label: 'Submit',
  handleClick: () => console.info('Submit was clicked!'),
};
