export type Project = {
  title: string;
  techs: string[];
  link: string;
};

export type Contribution = {
  title: string;
  description: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "DataCast",
    techs: ["React", "Next.js", "Astro", "Python", "Nest.js"],
    link: "https://www.datacast.ai/",
  },
  {
    title: "Coindash",
    techs: ["React", "Next.js", "Chakra UI"],
    link: "https://coindash-crypto.vercel.app/",
  },
  {
    title: "Ares Registry",
    techs: ["TypeScript", "Node.js", "Camaro"],
    link: "https://www.npmjs.com/package/ares-registry",
  },
  {
    title: "Worldcoin on Lens",
    techs: ["React", "Next.js", "Big Query"],
    link: "https://worldcoin-on-lens.vercel.app/",
  },
  {
    title: "Lens App Stats",
    techs: ["React", "Next.js", "OpenAI"],
    link: "https://lens.decentree.com/",
  },
];

export const contributions: Contribution[] = [
  {
    title: "Flux",
    description: "Graph-based LLM power tool for exploring many completions in parallel by Paradigm",
    link: "https://flux.paradigm.xyz/",
  },
  {
    title: "Lenster",
    description: "Decentralized and permissionless social media app built with Lens Protocol",
    link: "https://lenster.xyz/",
  },
  {
    title: "Sismo",
    description: "Set of tools to manage your web2 and web3 data in complete privacy",
    link: "https://www.sismo.io/",
  },
  {
    title: "Celestia",
    description: "The first modular blockchain network built to enable anyone to easily deploy their own blockchain",
    link: "https://celestia.org/",
  },
];
