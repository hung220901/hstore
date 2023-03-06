 import Sidebar from './Sidebar'; 
export default function DefaultLayout({children}) {
  return (
    <> 
      <Sidebar/> 
      {children}  
    </>
  )
}