
import Home from '@/components/Home';
import '../style/home.scss'
import NabVar from "@/components/NavBar";

function IndexPage() {
   
  return (
   <section className="Menu-body">
      <NabVar/>
      <div className="body-cont">
         <Home/>
      </div>
   </section>
   );
}

export default IndexPage;