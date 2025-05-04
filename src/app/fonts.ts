import { Poppins } from 'next/font/google'

export const poppins = Poppins({
    weight: ['200', '400', '600'],
    variable: '--font-poppins',
    subsets: ["latin"],
    display: 'swap',
})