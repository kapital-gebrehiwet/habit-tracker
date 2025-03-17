import './globals.css'
import { AuthProvider } from '../components/AuthProvider'

export const metadata = {
  title: 'Habit Tracker',
  description: 'Track your daily habits and goals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 