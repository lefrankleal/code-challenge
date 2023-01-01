import { PropsWithChildren, ReactElement } from 'react';
import React, { Text as TextBase, TextProps } from 'react-native';

type ITextProps = PropsWithChildren &
  TextProps & {
    size?: number;
    face?:
      | 'Avenir Black'
      | 'Avenir Book'
      | 'Avenir Heavy'
      | 'Aveinr Light'
      | 'Avenir Regular';
  };

export const Text = ({
  style,
  size = 14,
  face = 'Avenir Regular',
  ...props
}: ITextProps): ReactElement => {
  return (
    <TextBase {...props} style={[style, { fontFamily: face, fontSize: size }]}>
      {props.children}
    </TextBase>
  );
};
