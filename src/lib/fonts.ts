import localFont from "next/font/local";

export const spectral = localFont({
    src: [
        {
            path: '../../public/fonts/spectral/Spectral-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/fonts/spectral/Spectral-ExtraLightItalic.ttf',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../../public/fonts/spectral/Spectral-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/spectral/Spectral-LightItalic.ttf',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../public/fonts/spectral/Spectral-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/spectral/Spectral-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/spectral/Spectral-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/spectral/Spectral-MediumItalic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../public/fonts/spectral/Spectral-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/spectral/Spectral-SemiBoldItalic.ttf',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../../public/fonts/spectral/Spectral-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/spectral/Spectral-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../public/fonts/spectral/Spectral-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../public/fonts/spectral/Spectral-ExtraBoldItalic.ttf',
            weight: '800',
            style: 'italic',
        },
    ],
    variable: '--font-spectral',
    display: 'swap',
});
