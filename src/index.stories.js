import React from 'react';
import UXSelect from './components/UX/UXSelect';

export default { title: 'Select' };

export const languageList = () => (
  <UXSelect
    className={'language'}
    backgroundColor={'#aba792'}
    defaultOption={0}
    onChange={() => {}}
    options={[
      { value: 'en', label: 'Английский' },
      { value: 'ru', label: 'Русский' },
      { value: 'de', label: 'Немецкий' },
      { value: 'fr', label: 'Французский' },
    ]}
  />
);
