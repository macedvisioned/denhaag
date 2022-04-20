import React, { HTMLAttributes } from 'react';

import './list-subheader.scss';

export type ListSubheaderProps = HTMLAttributes<HTMLParagraphElement>;

/**
 * Primary UI component for user interaction
 */
export const ListSubheader: React.FC<ListSubheaderProps> = (props: ListSubheaderProps) => {
  return (
    <p {...props} className="denhaag-list__subheader">
      {props.children}
    </p>
  );
};

export default ListSubheader;