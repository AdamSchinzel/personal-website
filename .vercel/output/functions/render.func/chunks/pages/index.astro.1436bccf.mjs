/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, u as unescapeHTML, d as renderComponent, e as renderHead, f as renderSlot, F as Fragment } from '../astro.0ce1c2d1.mjs';

function removeTrailingSlash(pathname) {
  const matchTrailingSlash = /\w+\/$/;
  if (matchTrailingSlash.test(pathname))
    return pathname.slice(0, -1);
  return pathname;
}

const presentation = {
  mail: "schinzel.adam@gmail.com",
  title: "Hi, I'm Adam 👋",
  description: "I'm a *fullstack developer* with over *5 years* of experience. I like to build stuff and learn new things. My biggest interests are *blockchain* and *AI*.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/adam-schinzel/"
    },
    {
      label: "Github",
      link: "https://github.com/AdamSchinzel"
    },
    {
      label: "Twitter",
      link: "https://twitter.com/0xadams_"
    },
    {
      label: "Dribbble",
      link: "https://dribbble.com/adamschinzel"
    }
  ]
};

const $$Astro$f = createAstro("https://adam-schinzel.vercel.app/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Header;
  removeTrailingSlash(Astro2.url.pathname);
  return renderTemplate`${maybeRenderHead($$result)}<header class="z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between">
  <a${addAttribute(`mailto:${presentation.mail}`, "href")} class="hover:text-neutral-100">${presentation.mail}</a>

</header>`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/src/components/Header.astro");

const MAP_COLOR_VARIANT_TO_BG = {
  orange: "bg-orange-500",
  violet: "bg-violet-500",
  red: "bg-red-500",
  amber: "bg-amber-500",
  yellow: "bg-yellow-500",
  lime: "bg-lime-500",
  green: "bg-green-500",
  emerald: "bg-emerald-500",
  teal: "bg-violet-500",
  cyan: "bg-cyan-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
  purple: "bg-purple-500",
  fushia: "bg-fushia-500",
  pink: "bg-pink-500",
  rose: "bg-rose-500"
};
const MAP_COLOR_VARIANT_TO_TEXT = {
  orange: "text-orange-500",
  violet: "text-violet-500",
  red: "text-red-500",
  amber: "text-amber-500",
  yellow: "text-yellow-500",
  lime: "text-lime-500",
  green: "text-green-500",
  emerald: "text-emerald-500",
  teal: "text-violet-500",
  cyan: "text-cyan-500",
  blue: "text-blue-500",
  indigo: "text-indigo-500",
  purple: "text-purple-500",
  fushia: "text-fushia-500",
  pink: "text-pink-500",
  rose: "text-rose-500"
};

const $$Astro$e = createAstro("https://adam-schinzel.vercel.app/");
const $$BlurCircle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$BlurCircle;
  const { position, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute({
    [`fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full ${MAP_COLOR_VARIANT_TO_BG[color]} blur-[150px] md:blur-[350px] opacity-50`]: true,
    ["left-0 top-0"]: position === "top",
    ["right-0 bottom-0"]: position === "bottom"
  }, "class:list")}>
</div>`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/src/components/shared/BlurCircle.astro");

const theme = {
  colors: {
    primary: "orange",
    blur: {
      top: "orange",
      bottom: "violet"
    }
  }
};

const $$Astro$d = createAstro("https://adam-schinzel.vercel.app/");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/node_modules/.pnpm/astro-seo@0.7.2/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro");

const $$Astro$c = createAstro("https://adam-schinzel.vercel.app/");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/node_modules/.pnpm/astro-seo@0.7.2/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro");

const $$Astro$b = createAstro("https://adam-schinzel.vercel.app/");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/node_modules/.pnpm/astro-seo@0.7.2/node_modules/astro-seo/src/components/OpenGraphImageTags.astro");

const $$Astro$a = createAstro("https://adam-schinzel.vercel.app/");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/node_modules/.pnpm/astro-seo@0.7.2/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro");

const $$Astro$9 = createAstro("https://adam-schinzel.vercel.app/");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/node_modules/.pnpm/astro-seo@0.7.2/node_modules/astro-seo/src/components/ExtendedTags.astro");

const $$Astro$8 = createAstro("https://adam-schinzel.vercel.app/");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/node_modules/.pnpm/astro-seo@0.7.2/node_modules/astro-seo/src/components/TwitterTags.astro");

const $$Astro$7 = createAstro("https://adam-schinzel.vercel.app/");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || props.openGraph.basic.title == null || props.openGraph.basic.type == null || props.openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}

${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>

${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}

<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>

${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}
${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}
${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/node_modules/.pnpm/astro-seo@0.7.2/node_modules/astro-seo/src/SEO.astro");

const $$Astro$6 = createAstro("https://adam-schinzel.vercel.app/");
const $$SEOTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SEOTags;
  const { title, description, noindex, og } = Astro2.props;
  const DEFAULT_TITLE_PAGE = "Adam Schinzel";
  const DEFAULT_DESCRIPTION_PAGE = "I'm a full-stack developer and designer based in the United States. I specialize in building and designing exceptional websites, applications, and everything in between";
  const DEFAULT_URL_SITE = "https://adam-schinzel.vercel.app/";
  const openGraph = {
    title: og?.title || DEFAULT_TITLE_PAGE,
    type: og?.type || "website",
    image: og?.image || "/opengraph-image.jpg",
    alt: og?.alt || "astro portfolio template image",
    url: DEFAULT_URL_SITE,
    description: og?.description || DEFAULT_DESCRIPTION_PAGE
  };
  return renderTemplate`<head>
  ${renderComponent($$result, "SEO", $$SEO, { "charset": "UTF-8", "title": title || DEFAULT_TITLE_PAGE, "description": description || DEFAULT_DESCRIPTION_PAGE, "noindex": noindex || false, "openGraph": {
    basic: {
      title: openGraph.title,
      type: openGraph.type,
      image: openGraph.image
    },
    image: {
      alt: openGraph.alt
    }
  }, "extend": {
    link: [
      { rel: "icon", href: "/favicon.png" },
      { rel: "sitemap", href: "/sitemap-index.xml" }
    ],
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "generator", content: Astro2.generator }
    ]
  } })}
${renderHead($$result)}</head>`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/src/components/seo/SEOTags.astro");

const $$Astro$5 = createAstro("https://adam-schinzel.vercel.app/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  ${renderComponent($$result, "SEOTags", $$SEOTags, { "title": title })}

  ${maybeRenderHead($$result)}<body class="mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 bg-neutral-950 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-16">
    ${renderComponent($$result, "Header", $$Header, {})}
    ${renderComponent($$result, "BlurCircle", $$BlurCircle, { "position": "top", "color": theme.colors.blur.top })}
    ${renderComponent($$result, "BlurCircle", $$BlurCircle, { "position": "bottom", "color": theme.colors.blur.bottom })}
    ${renderSlot($$result, $$slots["default"])}
    
  </body>
</html>`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/src/layouts/Layout.astro");

const $$Astro$4 = createAstro("https://adam-schinzel.vercel.app/");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Link;
  const { label, isUnderline, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(props.href, "href")}${addAttribute({
    ["hover:text-neutral-100 cursor-pointer"]: true,
    ["underline decoration-dashed underline-offset-8"]: isUnderline
  }, "class:list")}${spreadAttributes(props)} rel="noreferrer" target="_blank">
  ${label}
  <span class="sr-only">${label} link</span>
</a>`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/src/components/shared/Link.astro");

const $$Astro$3 = createAstro("https://adam-schinzel.vercel.app/");
const $$SocialLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  return renderTemplate`${maybeRenderHead($$result)}<ul role="list" class="flex flex-row gap-2">
  ${presentation.socials.map((social, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
        <li>
          ${renderComponent($$result2, "Link", $$Link, { "href": social.link, "label": social.label })}
        </li>

        ${presentation.socials.length - 1 !== index && renderTemplate`<li>/</li>`}` })}`)}
</ul>`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/src/components/SocialLinks.astro");

const $$Astro$2 = createAstro("https://adam-schinzel.vercel.app/");
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { title, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a class="group flex max-w-sm cursor-pointer flex-col gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400"${addAttribute(link, "href")}>
  <div class="flex w-full flex-col justify-between gap-2 md:flex-row md:items-center">
    <p class="text-neutral-100">${title}</p>
    <div class="flex flex-row items-center gap-4">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="transition-all duration-300 group-hover:translate-x-1">
        <path d="M5.25 12.75L12.75 5.25" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M5.25 5.25H12.75V12.75" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
  </div>

  <p>
    ${description}
  </p>
</a>`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/src/components/PostCard.astro");

const $$Astro$1 = createAstro("https://adam-schinzel.vercel.app/");
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, techs, link, isComingSoon } = Astro2.props;
  const formatTechs = (values) => values.toString().replaceAll(",", " \u2022 ");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${isComingSoon && renderTemplate`${maybeRenderHead($$result2)}<div class="t group flex w-full flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 md:flex-row md:items-center">
        <div class="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
          <p class="text-neutral-100">${title}</p>
          <p>${formatTechs(techs)}</p>
        </div>

        <p class="w-fit rounded-md bg-neutral-900 px-4 py-1">Soon</p>
      </div>`}${!isComingSoon && renderTemplate`<a class="group flex w-full cursor-pointer flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400 md:flex-row md:items-center"${addAttribute(link, "href")} target="_blank" rel="noreferrer">
        <div class="flex flex-col gap-4 md:flex-row md:items-center">
          <p class="text-neutral-100">${title}</p>
          <p>${formatTechs(techs)}</p>
        </div>

        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="transition-all duration-300 group-hover:translate-x-1">
          <path d="M5.25 12.75L12.75 5.25" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M5.25 5.25H12.75V12.75" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>`}` })}`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/src/components/ProjectCard.astro");

function convertAsteriskToStrongTag(str) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong class="font-normal ${MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary]}">$1</strong>`
  );
}

const projects = [
  {
    title: "DataCast",
    techs: ["React", "Next.js", "Astro", "Python", "Nest.js"],
    link: "https://www.datacast.ai/"
  },
  {
    title: "Coindash",
    techs: ["React", "Next.js", "Chakra UI"],
    link: "https://coindash-crypto.vercel.app/"
  },
  {
    title: "Ares Registry",
    techs: ["TypeScript", "Node.js", "Camaro"],
    link: "https://www.npmjs.com/package/ares-registry"
  },
  {
    title: "Worldcoin on Lens",
    techs: ["React", "Next.js", "Big Query"],
    link: "https://worldcoin-on-lens.vercel.app/"
  },
  {
    title: "Lens App Stats",
    techs: ["React", "Next.js", "OpenAI"],
    link: "https://lens.decentree.com/"
  }
];
const contributions = [
  {
    title: "Flux",
    description: "Graph-based LLM power tool for exploring many completions in parallel by Paradigm",
    link: "https://flux.paradigm.xyz/"
  },
  {
    title: "Lenster",
    description: "Decentralized and permissionless social media app built with Lens Protocol",
    link: "https://lenster.xyz/"
  },
  {
    title: "Sismo",
    description: "Set of tools to manage your web2 and web3 data in complete privacy",
    link: "https://www.sismo.io/"
  },
  {
    title: "Celestia",
    description: "The first modular blockchain network built to enable anyone to easily deploy their own blockchain",
    link: "https://celestia.org/"
  }
];

const $$Astro = createAstro("https://adam-schinzel.vercel.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<main class="flex flex-col gap-20">
    <article class="flex flex-col gap-8">
      <h1 class="text-3xl text-neutral-100">${presentation.title}</h1>
      <h2 class="max-w-[60ch] leading-6">${unescapeHTML(convertAsteriskToStrongTag(presentation.description))}</h2>
      ${renderComponent($$result2, "SocialLinks", $$SocialLinks, {})}
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">
          Selected projects
        </h3>
      </header>
      <section class="flex flex-col gap-4">
        ${projects.length !== 0 && projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)}
      </section>
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">Selected open source contributions</h3>
      </header>

      <section class="flex flex-col gap-4 md:flex-row md:flex-wrap">
        ${contributions.length !== 0 && contributions.map((contribution) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "title": contribution.title, "description": contribution.description, "link": contribution.link })}`)}
      </section>
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg text-neutral-100">Get in touch</h3>
      </header>
      <p>
        Email me at ${renderComponent($$result2, "Link", $$Link, { "href": `mailto:${presentation.mail}`, "label": presentation.mail })} or follow me via my social links.
      </p>

      ${renderComponent($$result2, "SocialLinks", $$SocialLinks, {})}
    </article>
  </main>
` })}`;
}, "/Users/adamschinzel/Desktop/projects/personal/personal-website/src/pages/index.astro");

const $$file = "/Users/adamschinzel/Desktop/projects/personal/personal-website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
