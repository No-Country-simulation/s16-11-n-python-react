import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import {Logo} from './Logo';

export const Footer = () => {
  return (
    <footer className="dark:bg-[#00050D]">
      <div className="flex flex-col max-w-desktop mx-auto">
        <div className="md:flex md:justify-between h-[440px] pt-10 w-[95%] md:w-[90%] mx-auto">
          <div className="w-1/5">
            <Logo />
            <p className="text-xs pt-10">
              Bienvenido a TechIAcademic un sitio donde tendras contenido gratis de los mejores Youtuber de programacion
              en español.
            </p>
          </div>
          <div className="w-1/5 flex flex-col h-1/2">
            <div className="text-[#1A98FF] text-xl font-bold">Información legal</div>
            <div className="pt-5">Términos y condiciones</div>
            <div className="pt-5">Política de privacidad</div>
            <div className="pt-5">Política de cookies</div>
          </div>
          <div className="w-1/5 flex flex-col">
            <div className="flex flex-col h-1/2">
              <div className="text-[#1A98FF] text-xl font-bold">Contacto</div>
              <div className="pt-5">+54 9 11 0000-0000</div>
              <div className="pt-5">info@techiacademic.com</div>
              <div className="pt-5">Av. Nombre de la calle 1234 Buenos Aires, Argentina</div>
            </div>
            <div className="flex flex-col h-1/2 mt-10">
              <div className="text-[#1A98FF] text-xl font-bold">Redes Sociales</div>
              <div className="pt-5 flex justify-between w-2/3">
                <FaFacebook />
                <FaInstagram />
                <FaWhatsapp />
                <FaTiktok />
              </div>
            </div>
          </div>
          <div className="w-1/5 flex flex-col h-2/3">
            <div className="text-[#1A98FF] text-xl font-bold">Newsletter</div>
            <p className="pt-5">No te pierdas descuentos, promociones exclusivas y el ingreso de nuevos productos.</p>
            <input className="w-full h-12 mt-5 rounded-lg p-5" placeholder="Ingresa tu correo" />
            <button className="bg-[#1ADB31] w-full h-12 mt-5 rounded-lg">Suscribirse</button>
          </div>
        </div>
      </div>
        <div className="h-10 w-full bg-[#1A98FF] text-black text-sm font-semibold items-center flex justify-center">
          TechIAcademic © 2024. Todos los derechos reservados.
        </div>
    </footer>
  );
};
