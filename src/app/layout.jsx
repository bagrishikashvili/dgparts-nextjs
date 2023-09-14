import { Inter } from "next/font/google";

const BodyFont = Inter({ subsets: ["latin"] });
import '@/assets/global.scss';
import StyledComponentsRegistry from '@/libs/registry'
import withTheme from '@/libs/theme';
import { AppHeader } from '@/components'
import Head from "next/head";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
            </Head>
            <body className={BodyFont.className}>
                <StyledComponentsRegistry>
                    <AppHeader />
                    {withTheme(children)}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}