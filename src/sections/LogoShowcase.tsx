import { logoIconsList } from "@/constants";
import { LogoIcon as SimpleLogoIcon } from "@/components/LogoIcon";

const LocalLogoIcon = ({ icon }: { icon: any }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

export const LogoShowcase = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LocalLogoIcon key={index} icon={icon} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LocalLogoIcon key={`dup-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};
