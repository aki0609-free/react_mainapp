import React, { VFC } from 'react';
import { Area, InputField } from '../../types/types';
import './BaseCheckbox.css';

const fieldTitles: Area[] = ['frontend', 'backend', 'career'];

type Props = {
  name: string;
  field: InputField;
}

export const BaseCheckout: VFC<Props> = (props) => {
  return (
    <div className={`form-control ${{ inValid: !props.field.isValid}}`}>
      <h3>{ props.name }</h3>
      {fieldTitles.map(title => (
        <div key={title}>
          <input type="checkbox" id={title} value={title} />
        </div>
      ))}
    </div>
  )
}
