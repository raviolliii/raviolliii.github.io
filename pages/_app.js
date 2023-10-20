import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/global.css';

// Configure Font Awesome to not import any custom CSS
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
