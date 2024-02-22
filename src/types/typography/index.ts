declare global {
  namespace UITypography {
    type TypograpghyVariantType = {
      fontFamily: string;
      fontWeight?:
        | 'normal'
        | 'bold'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';
      fontSize: number;
      lineHeight?: number;
      letterSpacing?: number;
      textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    };

    interface TypographyType {
      'header1-regular'?: TypograpghyVariantType;
      'header1-medium'?: TypograpghyVariantType;
      'header1-semiBold'?: TypograpghyVariantType;
      'header1-bold'?: TypograpghyVariantType;
      'header2-regular'?: TypograpghyVariantType;
      'header2-medium'?: TypograpghyVariantType;
      'header2-semiBold'?: TypograpghyVariantType;
      'header2-bold'?: TypograpghyVariantType;
      'header3-regular'?: TypograpghyVariantType;
      'header3-medium'?: TypograpghyVariantType;
      'header3-semiBold'?: TypograpghyVariantType;
      'header3-bold'?: TypograpghyVariantType;
      'header4-regular'?: TypograpghyVariantType;
      'header4-medium'?: TypograpghyVariantType;
      'header4-semiBold'?: TypograpghyVariantType;
      'header4-bold'?: TypograpghyVariantType;
      'header5-regular'?: TypograpghyVariantType;
      'header5-medium'?: TypograpghyVariantType;
      'header5-semiBold'?: TypograpghyVariantType;
      'header5-bold'?: TypograpghyVariantType;
      'body-regular'?: TypograpghyVariantType;
      'body-medium'?: TypograpghyVariantType;
      'body-semiBold'?: TypograpghyVariantType;
      'body-bold'?: TypograpghyVariantType;
      'body2-regular'?: TypograpghyVariantType;
      'body2-medium'?: TypograpghyVariantType;
      'body2-semiBold'?: TypograpghyVariantType;
      'body2-bold'?: TypograpghyVariantType;
      'body3-regular'?: TypograpghyVariantType;
      'body3-medium'?: TypograpghyVariantType;
      'body3-semiBold'?: TypograpghyVariantType;
      'body3-bold'?: TypograpghyVariantType;
      'body4-regular'?: TypograpghyVariantType;
      'body4-medium'?: TypograpghyVariantType;
      'body4-semiBold'?: TypograpghyVariantType;
      'body4-bold'?: TypograpghyVariantType;
      'caption-regular'?: TypograpghyVariantType;
      'caption-medium'?: TypograpghyVariantType;
      'caption-semiBold'?: TypograpghyVariantType;
      'caption-bold'?: TypograpghyVariantType;
    }
  }
}

export {};
