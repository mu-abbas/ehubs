import './globals.css';
import { Providers } from './providers';
import { Rubik } from 'next/font/google'

export const metadata = {
  title: 'E-Hubs | Al-Dawaa',
};

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <div className="hidden lg:block">
          <Providers>{children}</Providers>
        </div>
        <div className="flex items-center justify-center w-screen h-screen bg-gray lg:hidden">
          <p className="max-w-sm p-6 text-center">
            This app is not responsive to mobile screens yet, please open it on desktop device.
          </p>
        </div>
      </body>
    </html>
  );
}
