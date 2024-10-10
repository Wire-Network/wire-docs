import { DiscordLogo } from "../components/logos/socials/discord";
import { TelegramLogo } from "../components/logos/socials/telegram";
import { XLogo } from "../components/logos/socials/x";
import { YoutubeLogo } from "../components/logos/socials/youtube";

const SOCIALS = [
  {
    name: "discord",
    link: "https://discord.gg/CNja4ZUAXg",
    icon: "/assets/logos/socials/discord.svg",
  },
  {
    name: "x",
    link: "https://x.com/Wire_Blockchain",
    icon: "/assets/logos/socials/x.svg",
  },
  {
    name: "telegram",
    link: "https://t.me/Wire_Network",
    icon: "/assets/logos/socials/telegram.svg",
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/@wirenetwork1515",
    icon: "/assets/logos/socials/youtube.svg",
  },
];

const SOCIAL_LOGOS: Record<string, React.FC<{ className?: string }>> = {
  discord: DiscordLogo,
  telegram: TelegramLogo,
  youtube: YoutubeLogo,
  x: XLogo,
};

export { SOCIALS, SOCIAL_LOGOS };
