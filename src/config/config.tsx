import { Project } from "@/types/Project";

export const profileLinks = [
  {
    label: "GitHub",
    url: "https://github.com/Limeboy0603",
  },
];

export const regularProjects: Project[] = [
  {
    title:
      "Sign Language Recognition and Translation using Motion Tracking and Deep Learning",
    projectUrl: "https://github.com/Limeboy0603/FYP-Public",
    stack: ["Python", "OpenCV", "PyTorch", "Mediapipe", "Qt"],
    description:
      "FYP for my bachelor's degree in Computer Science.\nBuilt with two modules: a LSTM model for sign language recognition, and a language model for translation from glosses to sentences.",
  },
  {
    title: "Old Personal Webpage in terminal style",
    projectUrl: "https://limeboy0603.github.io/personal-webpage-v1/",
    stack: ["HTML5", "CSS", "Vanilla JS"],
    description:
      "My old personal webpage.\nA Matrix-like terminal themed personal webpage where sections are accessed through command-like input interactions.",
  },
];

export const gameProjects: Project[] = [
  {
    title: "[COLLAB] Traditional Chinese translation for Roughly Enough Items",
    projectUrl:
      "https://github.com/shedaniel/RoughlyEnoughItems/tree/19.x-1.21.5",
    description: "Community translation contribution for the REI project.",
    extraLinks: [
      {
        label: "Username Credit",
        url: "https://github.com/shedaniel/RoughlyEnoughItems/blob/3224ded226541e1dbd7809cba218e3c0c8c4144b/fabric/src/main/resources/fabric.mod.json#L65",
      },
    ],
  },
  {
    title: "KTaNE osu! Module",
    projectUrl: "https://github.com/Limeboy0603/ktaneOsu-master",
    stack: ["Unity"],
    description:
      "Modded \"Keep Talking and Nobody Explodes\" module where the defuser communicates an osu! beatmap name to the expert to obtain the beatmap's background image.",
    extraLinks: [
      {
        label: "Steam Workshop Entry",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2762358242",
      },
      {
        label: "Expert Manual",
        url: "https://ktane.timwi.de/HTML/osu!.html",
      },
    ],
  },
  {
    title: "KTaNE Minecraft Cipher Module",
    projectUrl: "https://github.com/Limeboy0603/ktaneMinecraftCipher-master",
    stack: ["Unity"],
    description:
      "Modded \"Keep Talking and Nobody Explodes\" cipher module using text encoded with Standard Galactic Alphabet.",
    extraLinks: [
      {
        label: "Standard Galactic Alphabet",
        url: "https://minecraft.wiki/w/Standard_Galactic_Alphabet",
      },
      {
        label: "Steam Workshop Entry",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2257451274",
      },
      {
        label: "Expert Manual",
        url: "https://ktane.timwi.de/HTML/Minecraft%20Cipher.html",
      },
    ],
  },
  {
    title: "KTaNE Minecraft Parody Module",
    projectUrl: "https://github.com/Limeboy0603/ktaneMinecraftParody-master",
    stack: ["Unity"],
    description:
      "Modded \"Keep Talking and Nobody Explodes\" module inspired by the Minecraft parody singing trend on Discord.",
    extraLinks: [
      {
        label: "Steam Workshop Entry",
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2257447273",
      },
      {
        label: "Expert Manual",
        url: "https://ktane.timwi.de/HTML/Minecraft%20Parody.html",
      },
    ],
  },
];