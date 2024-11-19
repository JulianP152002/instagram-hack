import { Sesion } from "../Components/Primary/Sesion";

import { Header } from "../Components/Primary/Header";
export function StartSesion() {
  return (
    <main className=" lg:mx-2 2xl:mx-2 mx-36 my-12 flex justify-center ">
      <div className=" is:hidden  " >
      <Header></Header>

      </div>
      <Sesion></Sesion>
    </main>
  );
}
