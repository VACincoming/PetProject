import React, { memo } from 'react';

const Text = memo((
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

export default Text;