type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "schinzel.adam@gmail.com",
  title: "Hi, I'm Adam 👋",
  description:
    "I'm a *fullstack developer* with over *5 years* of experience currently working at Trezor. I like to build stuff and learn new things. My biggest interests are *blockchain* and *AI*.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/adam-schinzel/",
    },
    {
      label: "Github",
      link: "https://github.com/AdamSchinzel",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/0xadams_",
    },
    {
      label: "Dribbble",
      link: "https://dribbble.com/adamschinzel",
    },
  ],
};

export default presentation;
