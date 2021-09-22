import React, { memo } from 'react';

const CustomTextArea = memo((
  {
    tag: Tag = 'span',
    children = [],
    title = '',
    className = ''
  }) => (
    <Tag className={className}>
      {title || children}
    </Tag>
  )
);

export default CustomTextArea;