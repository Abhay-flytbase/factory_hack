import React from 'react';

interface BoxProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  padding?: number | string;
  margin?: number | string;
  border?: string;
  borderRadius?: number | string;
  backgroundColor?: string;
}

export default function Box({ 
  children, 
  className = '', 
  style = {},
  padding = 16,
  margin = '16px 0',
  border = '1px dashed grey',
  borderRadius = 4,
  backgroundColor = '#f9f9f9'
}: BoxProps) {
  const boxStyle: React.CSSProperties = {
    padding,
    border,
    borderRadius,
    backgroundColor,
    margin,
    ...style
  };

  return (
    <div className={className} style={boxStyle}>
      {children || 'This Box renders as an HTML div element with custom styling.'}
    </div>
  );
}
