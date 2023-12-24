import '@/styles/globals.css'
import { AuthProvider } from './doctor/authcontext';

export default function App({ Component, pageProps }) {
  return(    <AuthProvider>
    <Component {...pageProps} />
    </AuthProvider>);
}
