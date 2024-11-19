import { useRef, useState } from "react"
import "./Header.css";
import Axios from 'axios'


export function Sesion() {
  const [disable, setDisable] = useState(true);
  const [nombre, setNombre] = useState({
    x: '',
    y: ''
  })
    const handlenClick = () => {
    const ValueUserName = username.current.value
    const ValuePassword = password.current.value;  
      nombre.x = ValueUserName,
      nombre.y = ValuePassword
  
    console.log(nombre.x)
    console.log(nombre.y)
    
    Axios.post('http://localhost:4000/create',{
        nombre: nombre.x,
        contrasena : nombre.y
    }).then(()=>{
    alert('usuario registrado')
    })
  
  
  };

 

  const links = {
    url: "../../../public/primary-imgs/getMicrosoft.webp",
    name: "dowloand app in aAppStore",
    url2: "../../../public/primary-imgs/Googleplay.webp",
    name2: "Googleplay.webp",
  };

  const username = useRef();
  const password = useRef();
    



  const OnChance = (event) => {
    event.preventDefault;

    const ValueUserName = username.current.value;
    const ValuePassword = password.current.value;

    if (ValueUserName.length > 0 || ValuePassword.length > 4) {
      setDisable(false);
    }
    if (ValueUserName.length < 1 || ValuePassword.length < 4) {
      setDisable(true);
    }
  };


  return (
    <main className="relative flex flex-col">
      <div className=" mb-5 items-center text-center px-10 border-gray-500/20 border-[1px] w-[352px] h-[428px]">
        <div className=" m-auto overflow-hidden mb-9 h-[104px]">
          <img
            className=" m-auto"
            src="../../../public/primary-imgs/title.webp"
            alt=""
          />
        </div>

        <form action="" onChange={OnChance}>
          <input
            // onChange={(event)=>{
            //   setNombre(event.target.value)
            //   console.log(nombre)
            // }}
            ref={username}
            className=" outline-none mb-1 border-[1px] border-gray-500/50 px-2 text-slate-800 text-[12.3px] h-[34px] w-full bg-slate-400/5"
            type="text"
            placeholder="Telefono, usuario o correo electronico"
          />
          <input
            //   onChange={(event)=>{
            //   setContrasena(event.target.value)
            //   console.log(nombre)
            //  }}
            ref={password}
            className=" outline-none mb-4 border-[1px] border-gray-500/50 px-2 text-slate-800 text-[12.3px] h-[34px] w-full bg-slate-400/5"
            type="password"
            placeholder="Contraseña"
          />
       
          <button
            onClick={handlenClick}
            disabled={disable}
            id={disable ? "disable" : "notdisable"}
            className=" w-full h-8 rounded-md bg-blue-400 text-white font-semibold text-sm "
            type="button"
          >
            Iniciar sesion
            {/* {!disable ? <a href="/about"></a> : ""} */}
          </button>
        </form>
        <div className=" mt-[1rem] mb-[1.20rem] relative flex">
          <hr className="w-[120px] bg-gray-500 my-5" />
          <div className=" block pt-1 text-gray-600 font-normal text-lg w-1 h-2 mx-3  rounded-full">
            o
          </div>
          <hr className="w-[120px] bg-gray-500 my-5" />
        </div>
        <div className=" flex flex-col justify-center items-center m-auto relative">
          <a className=" text-center items-center w-full" href="">
            <img
              className="w-[18px] inline-block relative top-[0.5px] mx-2"
              src="../../../public/primary-imgs/IconFacebook.svg"
              alt=""
            />
            <span className="text-nowrap text-center text-sm items-center font-medium text-blue-900">
              Iniciar sesion con Facebook
            </span>
          </a>
          <a className=" mt-4 text-xs text-blue-900 w-full" href="">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
      <div className=" flex items-center text-center px-10 border-gray-500/20 border-[1px] h-[68px] w-[350px">
        <article className=" m-auto items-center justify-center flex  text-[15px] ">
          ¿No tienes cuenta? <a className=" text-blue-600 "> Registrate </a>
        </article>
      </div>
      <div className=" relative m-auto text-[14px] items-center text-center justify-center">
        <span className=" text-center pb-4 ">Descarga la app.</span>
        <div className=" w-3/4 inline-flex pt-[25px] relative justify-around">
          <img className=" max-w-fit w-28" src={links.url2} alt={links.name2} />
          <img className=" max-w-fit w-28 " src={links.url} alt={links.name} />
        </div>
      </div>
    </main>
  );
}
