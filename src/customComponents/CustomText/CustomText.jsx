import React, { memo } from 'react';

const CustomText = memo((
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

export default CustomText;