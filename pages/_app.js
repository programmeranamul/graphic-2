import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Header from './../comonents/Header/Header';
import Footer from './../comonents/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return<> <Header /> <Component {...pageProps} /><Footer /></>
}

export default MyApp
