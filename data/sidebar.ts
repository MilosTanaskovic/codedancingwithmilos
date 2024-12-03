import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  House,
  Info,
  FileUser,
  MailCheck,
  Mail,
  Component,
  Braces,
  Rocket
} from "lucide-react";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    // {
    //   title: "Build UI",
    //   url: "#",
    //   icon: Component,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "History",
    //       url: "#",
    //     },
    //     {
    //       title: "Starred",
    //       url: "#",
    //     },
    //     {
    //       title: "Settings",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "JS | TS Ecosystem",
      url: "#",
      icon: Braces,
      items: [
        {
          title: "Vanila JavaScript",
          url: "/javascript",
        },
        {
          title: "ReactJS",
          url: "/reactjs",
        },
        // {
        //   title: "NextJS",
        //   url: "#",
        // },
      ],
    },
    // {
    //   title: ".NET Ecosystem",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  pages: [
    {
      name: "Home",
      url: "/",
      icon: House,
    },
    {
      name: "About Me",
      url: "/about",
      icon: Info,
    },
    {
      name: "My Resume",
      url: "/resume",
      icon: FileUser,
    },
    {
      name: "Newsletter",
      url: "/subscribe",
      icon: MailCheck,
    },
    {
        name: "Startup Stories",
        url: "/startup-stories",
        icon: Rocket,
      },
  ],
};
