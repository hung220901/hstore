import Header from './Header/Header';
import Footer from './Footer/index';
export default function DefaultLayout({children}) {
  return (
    <>
        <Header/>
            {children}
        <Footer/>
    </>
  )
}


