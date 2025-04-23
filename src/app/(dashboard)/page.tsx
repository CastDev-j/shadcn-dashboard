import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";
import { BsGithub } from "react-icons/bs";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

type buttonVariant =
  | "secondary"
  | "ghost"
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | null
  | undefined;

interface buttonItem {
  name: string;
  description: string;
  variant?: buttonVariant;
  Icon?: IconType;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}

const buttonVariants: buttonItem[] = [
  {
    name: "Default Button",
    description: "A default styled button",
    variant: "default",
  },
  {
    name: "Destructive Button",
    description: "A button styled for destructive actions",
    variant: "destructive",
  },
  {
    name: "Outline Button",
    description: "A button with an outline style",
    variant: "outline",
  },
  {
    name: "Ghost Button",
    description: "A button with a ghost style",
    variant: "ghost",
  },
  {
    name: "Link Button",
    description: "A button styled as a link",
    variant: "link",
  },
];

interface LinkButtonItem {
  name: string;
  Icon?: IconType;
}

const linkButtons: LinkButtonItem[] = [
  {
    name: "GitHub",
    Icon: BsGithub,
  },
  {
    name: "Twitter",
    Icon: FaTwitter,
  },
  {
    name: "Facebook",
    Icon: FaFacebook,
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
  },
  {
    name: "YouTube",
    Icon: FaYoutube,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-full">
        <h1 className="text-2xl font-bold mb-4">Bienvenido</h1>
        <p className="text-gray-600 mb-6">
          Haz clic en el botón de abajo para interactuar.
        </p>
      </section>
      <section className="w-full flex flex-col gap-4">
        {buttonVariants.map(({ name, variant, size, Icon }, key) => (
          <Button key={key} variant={variant} size={size}>
            {Icon ? <Icon /> : name}
          </Button>
        ))}
      </section>
      <section className="w-full flex gap-4">
        {linkButtons.map(({ name, Icon }) => (
          <Button key={name} size={"icon"} variant={"ghost"}>
            {Icon && <Icon />}
          </Button>
        ))}
      </section>
    </div>
  );
}
