import Header from './Header/index';
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


