import React, { ReactNode, VFC } from 'react'
import { Link } from 'react-router-dom';
import './BaseButton.css';

type Props = {
  mode?: string;
  link?: boolean;
  to?: string;
  children?: ReactNode;
}

export const BaseButton: VFC<Props> = ({ mode='', link=false, to='/', children }) => {
  const baseButton = link ? (
    <button className={mode}>
      {children}
    </button>
  ) : (
    <Link to={to} className={mode}>
      {children}
    </Link>
  );

  return (
    <>
      {baseButton}
    </>
  )
}

BaseButton.defaultProps = {
  mode: '',
  link: false,
  to: '/',
};
