import Image from 'next/image'
import HeaderPage from "./pages/header/index";
import BodyPage from "./pages/body/page";

export default function Home() {
  return (
    <main>
        <HeaderPage/>
        <BodyPage/>
    </main>
  )
}
