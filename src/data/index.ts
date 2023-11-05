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
    title: "Advomate",
    techs: ["React", "Next.js", "Nest.js", "Python", "LangChain" ],
    link: "https://www.advomate.cz/",
  },
  {
    title: "DataCast",
    techs: ["React", "Next.js", "Python", "Nest.js", "LangChain" ],
    link: "https://www.datacast.ai/",
  },
  {
    title: "Coindash",
    techs: ["React", "Next.js", "Chakra UI"],
    link: "https://coindash-crypto.vercel.app/",
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
    title: "Trezor",
    description: "Hardware wallet for cryptocurrencies developed by SatoshiLabs",
    link: "https://trezor.io/",
  },
  {
    title: "Flux",
    description: "Graph-based LLM power tool for exploring many completions in parallel by Paradigm",
    link: "https://flux.paradigm.xyz/",
  },
  {
    title: "Rivet",
    description: "Developer wallet & devTools for Anvil by Paradigm",
    link: "https://github.com/paradigmxyz/rivet",
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
