import { Inter } from "next/font/google";

const BodyFont = Inter({ subsets: ["latin"] });
import '@/assets/global.scss';

import withTheme from '@/libs/theme';
import { AppHeader } from '@/components'
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" crossorigin="anonymous"/> */}
      </Head>
      <body className={BodyFont.className}>
        <AppHeader/>
        {withTheme(children)}
      </body>
    </html>
  );
}