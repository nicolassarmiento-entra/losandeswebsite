import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import SocialIcon from "../atoms/SocialIcon";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import FooterColumn from "../molecules/FooterColumn";
import { footerProjectLinks, footerInfoLinks } from "../../data/navigation";

const Footer = () => {
  return (
    <footer className="bg-andes-footer text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-andes-main rounded flex items-center justify-center shadow-lg">
                <Icon
                  name="landscape"
                  variant="filled"
                  className="text-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white leading-tight">
                  CONSTRUCTORA
                </span>
                <span className="font-semibold text-xs tracking-widest text-andes-main uppercase">
                  De Los Andes
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Construyendo el futuro de Los Andes. Innovación, calidad y
              compromiso en cada proyecto inmobiliario.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon href="#" label="Facebook">
                <FaFacebookF size={16} />
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <FaInstagram size={16} />
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <FaLinkedinIn size={16} />
              </SocialIcon>
              <SocialIcon href="#" label="YouTube">
                <FaYoutube size={16} />
              </SocialIcon>
            </div>
          </div>

          {/* Projects column */}
          <FooterColumn group={footerProjectLinks} />

          {/* Info column */}
          <FooterColumn group={footerInfoLinks} />

          {/* Contact column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-andes-main rounded-full" />
              Contacto
            </h3>
            <div className="space-y-6">
              <Button fullWidth className="py-3 text-sm">
                Solicita tu cotización
              </Button>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon
                    name="email"
                    variant="filled"
                    className="text-andes-main"
                    size="sm"
                  />
                  <span className="text-gray-400 text-sm">
                    contacto@constructoraandes.co
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="phone"
                    variant="filled"
                    className="text-andes-main"
                    size="sm"
                  />
                  <span className="text-gray-400 text-sm">
                    +57 (601) 123-4567
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="location_on"
                    variant="filled"
                    className="text-andes-main"
                    size="sm"
                  />
                  <span className="text-gray-400 text-sm">
                    Av. Circunvalar No. 12-34, Of 301
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 Constructora de Los Andes. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-gray-500 text-xs">
              Sitio seguro y verificado
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
