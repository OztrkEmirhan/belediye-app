export const colors: Required<UIColor.ColorType> = {
    primary: '#0A84FF',
    secondary: '##F5E8C7',
    black: '#000000',
    white: '#FFFFFF',
    backgroundBlack: '#000000',
    backgroundLight: '#FFFFFF',
    textDark: '#000000',
    textSecondary: '#9AA6B8',
    textGrey: '#8C8C8C',
    textWhite: '#FFFFFF',
    blackColors50: '#F6F6F6',
    blackColors100: '#E2E2E2',
    blackColors200: '#D4D4D4',
    greyColors25: '#FAFAFA',
    greyColors50: '#F0F1F3',
    greyColors100: '#D1D4DA',
    greyColors200: '#BABFC8',
    greyBase: '#697488',
    greyColors700: '#4B5261',
    stronkDark: '#242629',
    textBlack: "#191919",
    stronkLight: '#E2E2E2',
    success: '#16A34A',
    success50: '#F0FDF4',
    error: '#DC2626',
    error50: '#FEF2F2',
    warning: '#EC9800',
    warning50: '#FEF7E8',
    blue: '#2563EB',
    blue50: '#EFF6FF',
};

export const typography: Required<UITypography.TypographyType> = {
    'header1-regular': {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 48,
    },
    'header1-medium': {
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        fontSize: 48,
    },
    'header1-semiBold': {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 48,
    },
    'header1-bold': {
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
        fontSize: 48,
    },
    'header2-regular': {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 39,
    },
    'header2-medium': {
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        fontSize: 39,
    },
    'header2-semiBold': {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 39,
    },
    'header2-bold': {
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
        fontSize: 39,
    },
    'header3-regular': {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 31,
    },
    'header3-medium': {
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        fontSize: 31,
    },
    'header3-semiBold': {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 31,
    },
    'header3-bold': {
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
        fontSize: 31,
    },
    'header4-regular': {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 25,
    },
    'header4-medium': {
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        fontSize: 25,
    },
    'header4-semiBold': {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 25,
    },
    'header4-bold': {
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
        fontSize: 25,
    },
    'header5-regular': {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 20,
    },
    'header5-medium': {
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        fontSize: 20,
    },
    'header5-semiBold': {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 20,
    },
    'header5-bold': {
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
        fontSize: 20,
    },
    'body-regular': {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 16,
    },
    'body-medium': {
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        fontSize: 16,
    },
    'body-semiBold': {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 16,
    },
    'body-bold': {
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
        fontSize: 16,
    },
    'body2-regular': {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 14,
    },
    'body2-medium': {
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        fontSize: 14,
    },
    'body2-semiBold': {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 14,
    },
    'body2-bold': {
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
        fontSize: 14,
    },
    'body3-regular': {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 12,
    },
    'body3-medium': {
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        fontSize: 12,
    },
    'body3-semiBold': {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 12,
    },
    'body3-bold': {
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
        fontSize: 12,
    },
    'body4-regular': {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 10,
    },
    'body4-medium': {
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        fontSize: 10,
    },
    'body4-semiBold': {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 10,
    },
    'body4-bold': {
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
        fontSize: 10,
    },
    'caption-regular': {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 8,
    },
    'caption-medium': {
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
        fontSize: 8,
    },
    'caption-semiBold': {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 8,
    },
    'caption-bold': {
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
        fontSize: 8,
    },
};

const theme: Required<UICore.ThemeType> = {
    key: 'light',
    typography,
    colors,
};
export default theme;
