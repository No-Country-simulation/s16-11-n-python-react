import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-[#00050D] text-white mt-16">
      <div className="flex flex-col max-w-desktop mx-auto px-10">
        <div className="md:flex md:justify-between lg:h-[440px] pt-10 mx-auto">
          <div className="flex flex-col lg:flex-row md:justify-between lg:w-[45%]">
            <div className="lg:w-[40%]">
              <Logo />
              <p className="text-lg lg:text-xs py-10 w-[90%]">
                Bienvenido a TechIAcademic un sitio donde tendras contenido gratis de los mejores Youtuber de
                programacion en español.
              </p>
            </div>
            <div className="lg:w-[40%] flex flex-col h-1/2 pb-10">
              <div className="text-[#1A98FF] text-xl font-bold">Información legal</div>
              <div className="pt-5">Términos y condiciones</div>
              <div className="pt-5">Política de privacidad</div>
              <div className="pt-5">Política de cookies</div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row md:justify-between lg:w-[45%]">
            <div className="lg:w-[40%] flex flex-col">
              <div className="flex flex-col h-1/2 pb-10">
                <div className="text-[#1A98FF] text-xl font-bold">Contacto</div>
                <div className="pt-5">+54 9 11 0000-0000</div>
                <div className="pt-5">info@techiacademic.com</div>
                <div className="pt-5">Av. Nombre de la calle 1234 Buenos Aires, Argentina</div>
              </div>
              <div className="flex flex-col lg:w-[40%] h-1/2 mt-10 mb-5 md:mb-0">
                <div className="text-[#1A98FF] text-xl font-bold">Redes Sociales</div>
                <div className="pt-5 flex justify-around text-xl">
                  <FaFacebook />
                  <FaInstagram />
                  <FaWhatsapp />
                  <FaTiktok />
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] flex flex-col h-2/3 pb-5">
              <div className="text-[#1A98FF] text-xl font-bold">Newsletter</div>
              <p className="pt-5">No te pierdas descuentos, promociones exclusivas y el ingreso de nuevos productos.</p>
              <input className="w-full h-12 mt-5 rounded-lg p-5" placeholder="Ingresa tu correo" />
              <button className="bg-[#1ADB31] w-full h-12 mt-5 rounded-lg">Suscribirse</button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 w-full bg-[#1A98FF] text-black text-xs sm:text-sm font-semibold items-center flex justify-center">
        TechIAcademic © 2024. Todos los derechos reservados.
      </div>
    </footer>
  );
};
