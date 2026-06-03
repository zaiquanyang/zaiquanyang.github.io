const profile = {
  name: "Zaiquan Yang",
  affiliation: "Department of Computer Science and Engineering,<br>City University of Hong Kong",
  avatar:
    "./assets/personal_v1.jpg",
  wechatQr: "./assets/微信图片_20260511202308_98_10.jpg",
  quickInfo: [],
  heroLinks: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=YX1YzlkAAAAJ&hl=en",
      iconSrc: "./assets/google_scholar.svg",
      iconAlt: "Google Scholar"
    },
    {
      label: "GitHub",
      href: "https://github.com/zaiquanyang?tab=repositories",
      iconSrc: "./assets/GitHub.svg",
      iconAlt: "GitHub"
    },
    {
      label: "Email",
      href: "mailto:zaiquanyangcat@gmail.com",
      iconSrc: "./assets/邮箱.svg",
      iconAlt: "Email"
    },
    {
      label: "WeChat",
      href: "./assets/微信图片_20260511202308_98_10.jpg",
      iconSrc: "./assets/微信.svg",
      iconAlt: "WeChat"
    }
  ],
  contactLinks: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=YX1YzlkAAAAJ&hl=en",
      iconSrc: "./assets/google_scholar.svg",
      iconAlt: "Google Scholar"
    },
    {
      label: "GitHub",
      href: "https://github.com/zaiquanyang?tab=repositories",
      iconSrc: "./assets/GitHub.svg",
      iconAlt: "GitHub"
    },
    {
      label: "Email · zaiquanyangcat@gmail.com",
      href: "mailto:zaiquanyangcat@gmail.com",
      iconSrc: "./assets/邮箱.svg",
      iconAlt: "Email"
    }
  ],
  about:
        "I am currently a Third-year Ph.D. student at <a href=\"https://www.cityu.edu.hk\" target=\"_blank\">City University of Hong Kong</a> (2023-Now). I hold a Master's degree in Computer Science from <a href=\"https://www.buaa.edu.cn\" target=\"_blank\">Beihang University</a> (2020-2023) and a Bachelor's degree in Electronic Science and Technology from <a href=\"https://www.bit.edu.cn\" target=\"_blank\">Beijing Institute of Technology</a> (2016-2020). Previously, I focus on data-efficient learning, including zero-shot learning and weakly supervised learning, on tasks such as image/video text grounding.  Currently, my research mainly focuses on large multimodal language models and large diffusion language models.",
  tags: [
    // "Vision-Language Models",
    // "Machine Learning",
    "Multimodal Learning",
    "Data-efficient Learning",
  ]
};

const news = [
    "2026: Visual Enhanced Depth Scaling for Multimodal Latent Reasoning (arXiv 2026).",
    "2026: Beyond the Canvas: Efficient dLLMs via Self-Guided CoT Compression and Suffix Sparsification (arXiv 2026).",
    "2025: Unleashing the Potential of Multimodal LLMs for Zero-Shot Spatio-Temporal Video Grounding (NeurIPS 2025).",
    "2024: Boosting weakly supervised referring image segmentation via progressive comprehension (NeurIPS 2024).",
    "2023: ProtoCLIP published in IEEE Transactions on Neural Networks and Learning Systems.",
];

const publications = {
  first_author: [
    {
      title: "Beyond the Canvas: Efficient dLLMs via Self-Guided CoT Compression and Suffix Sparsification",
      titleHref: "https://zaiquanyang.github.io/paper_assets/Efficient_DLLM_NeurIPS2026.pdf",
      authors: "Z Yang et al.",
      venue: "arXiv 2026",
      venueBold: true,
      thumbnail: "./paper_assets/BC_dLLM.png",
      keywords: ["Diffusion Language", "Inference Acceleration"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/zaiquanyang/Efficient_dLLM"
        }
      ]
    },
    {
      title: "Unleashing the Potential of Multimodal LLMs for Zero-Shot Spatio-Temporal Video Grounding",
      titleHref: "https://arxiv.org/pdf/2509.15178",
      authors: "Z Yang, Y Liu, G Hancke, RWH Lau",
      venue: "NeurIPS 2025",
      thumbnail: "./paper_assets/video_grounding.png",
      keywords: ["MLLM", "Video Grounding"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=YX1YzlkAAAAJ&citation_for_view=YX1YzlkAAAAJ:_FxGoFyzp5QC"
        }
      ]
    },
    {
      title: "Boosting weakly supervised referring image segmentation via progressive comprehension",
      titleHref: "https://arxiv.org/pdf/2207.14581",
      authors: "Z Yang, Y Liu, J Lin, G Hancke, R Lau",
      venue: "NeurIPS 2024",
      thumbnail: "./paper_assets/img_ref_seg.png",
      keywords: ["Referring Segmentation", "Weak Supervision"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=YX1YzlkAAAAJ&citation_for_view=YX1YzlkAAAAJ:eQOLeE2rZwMC"
        }
      ]
    },
    {
      title: "Learning prototype via placeholder for zero-shot recognition",
      titleHref: "https://arxiv.org/pdf/2509.15178",
      authors: "Z Yang, Y Liu, W Xu, C Huang, L Zhou, C Tong",
      venue: "IJCAI 2023",
      thumbnail: "./paper_assets/LPL.png",
      keywords: ["Zero-shot Learning", "Prototype Learning"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=YX1YzlkAAAAJ&citation_for_view=YX1YzlkAAAAJ:W7OEmFMy1HYC"
        }
      ]
    }
  ],
  corresponding: [
    {
      title: "Visual Enhanced Depth Scaling for Multimodal Latent Reasoning",
      titleHref: "https://arxiv.org/pdf/2604.10500",
      authors: "Y Han, Y Wang, Z Yang, Z Qu, L Pan, X Chu",
      venue: "arXiv 2026",
      keywords: ["Multimodal Reasoning", "Latent Reasoning"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/scholar_lookup?arxiv_id=2604.10500"
        }
      ]
    },
    {
      title: "ProtoCLIP: Prototypical contrastive language image pretraining",
      titleHref: "https://arxiv.org/abs/2206.10996",
      authors: "D Chen, Z Wu, F Liu, Z Yang, S Zheng, Y Tan, E Zhou",
      venue: "TNNLS2023",
      keywords: ["Vision-Language Pretraining", "Contrastive Learning"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=YX1YzlkAAAAJ&citation_for_view=YX1YzlkAAAAJ:Y0pCki6q_DkC"
        }
      ]
    },
    {
      title: "Semantic-aligned reinforced attention model for zero-shot learning",
      titleHref: "https://www.sciencedirect.com/science/article/abs/pii/S0262885622002153",
      authors: "Z Yang, Y Zhang, Y Du, C Tong",
      venue: "IVC2022",
      keywords: ["Zero-shot Learning", "Attention"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=YX1YzlkAAAAJ&citation_for_view=YX1YzlkAAAAJ:Se3iqnhoufwC"
        }
      ]
    },
    {
      title: "Cross-domain semantic decoupling for weakly-supervised semantic segmentation",
      titleHref: "https://papers.bmvc2023.org/0351.pdf",
      authors: "Y Zaiquan, KE Zhanghan, WH Rynson",
      venue: "BMVC 2023",
      keywords: ["Domain Adaptation", "Semantic Segmentation"],
      links: [
        {
          label: "Scholar",
          href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=YX1YzlkAAAAJ&citation_for_view=YX1YzlkAAAAJ:LkGwnXOMwfcC"
        }
      ]
    }
  ]
};

const internship = [
  "AMAP/Alibaba, Research Intern, 2026-01~2026-05.",
  "Noah/HuaWei, Research Intern, 2025-06~2025-10.",
];

const learningSites = [
  {
    label: "Read Paper",
    href: "https://zaiquanyang.github.io/Read_Paper/index.html"
  }
];

const services = [
  "Invited Reviewer for:\nConferences: ICML2025, ICML2026, NeurIPS2024, NeurIPS2025, NeurIPS2026, ICLR2025, ICLR2026"
];

function fillBasicProfile() {
  document.title = `${profile.name} | Academic Homepage`;
  document.getElementById("heroName").textContent = profile.name;
  document.getElementById("heroAffiliation").innerHTML = profile.affiliation;
  document.getElementById("aboutText").innerHTML = profile.about;
  document.getElementById("footerName").textContent = profile.name;
  document.getElementById("footerYear").textContent = new Date().getFullYear();
}

function renderLinks(containerId, links) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  links.forEach((item) => {
    const a = document.createElement("a");
    a.className = "btn-link";
    a.href = item.href;
    a.target = /^https?:/i.test(item.href) || /\.(png|jpe?g|gif|webp|svg)$/i.test(item.href)
      ? "_blank"
      : "_self";
    if (a.target === "_blank") {
      a.rel = "noopener noreferrer";
    }

    if (item.iconSrc) {
      const avatar = document.createElement("span");
      avatar.className = "link-avatar";
      const icon = document.createElement("img");
      icon.src = item.iconSrc;
      icon.alt = item.iconAlt || item.label;
      icon.loading = "lazy";
      avatar.appendChild(icon);
      a.appendChild(avatar);
    }

    const text = document.createElement("span");
    text.textContent = item.label;
    a.appendChild(text);

    el.appendChild(a);
  });
}

function renderList(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    el.appendChild(li);
  });
}

function renderLinkList(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    li.appendChild(a);
    el.appendChild(li);
  });
}

function renderServices(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  items.forEach((text) => {
    const li = document.createElement("li");
    li.innerHTML = text.replace(/\\n|\n/g, "<br>");
    el.appendChild(li);
  });
}

function formatNewsText(text) {
  const withVenue = text.match(/^(\d{4}:\s*)(.+?)(\s*\([^)]*\)\.?$)/);
  if (withVenue) {
    return `${withVenue[1]}<span class="news-title">${withVenue[2]}</span>${withVenue[3]}`;
  }

  const publishedPattern = text.match(/^(\d{4}:\s*)(.+?)(\spublished in.*$)/i);
  if (publishedPattern) {
    return `${publishedPattern[1]}<span class="news-title">${publishedPattern[2]}</span>${publishedPattern[3]}`;
  }

  return text;
}

function renderNews(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  items.forEach((text) => {
    const li = document.createElement("li");
    li.innerHTML = formatNewsText(text);
    el.appendChild(li);
  });
}

function renderTags() {
  const el = document.getElementById("researchTags");
  el.innerHTML = "";
  profile.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = tag;
    el.appendChild(span);
  });
}

function renderQuickInfo() {
  const el = document.getElementById("quickInfo");
  if (!profile.quickInfo.length) {
    el.innerHTML = "";
    el.hidden = true;
    return;
  }

  el.hidden = false;
  renderList("quickInfo", profile.quickInfo);
}

function highlightMyName(authorText) {
  const namePatterns = [
    /\bZ\s*Yang\b/g,
    /\bZaiquan\s*Yang\b/g,
    /\bY\s*Zaiquan\b/g,
    /\bYang,\s*Z\b/g
  ];

  return namePatterns.reduce((text, pattern) => {
    return text.replace(pattern, "<strong>$&</strong>");
  }, authorText);
}

function createPublicationCard(paper) {
  const card = document.createElement("article");
  card.className = "pub-card";
  if (paper.thumbnail) {
    card.classList.add("with-thumb");
  }

  if (paper.thumbnail) {
    const img = document.createElement("img");
    img.className = "pub-thumb";
    img.src = paper.thumbnail;
    img.alt = `${paper.title} thumbnail`;
    img.loading = "lazy";
    card.appendChild(img);
  }

  const content = document.createElement("div");
  content.className = "pub-content";

  const title = document.createElement("h3");
  title.className = "pub-title";
  if (paper.titleHref) {
    const titleLink = document.createElement("a");
    titleLink.className = "pub-title-link";
    titleLink.href = paper.titleHref;
    titleLink.textContent = paper.title;
    if (titleLink.href.startsWith("http")) {
      titleLink.target = "_blank";
      titleLink.rel = "noopener noreferrer";
    }
    title.appendChild(titleLink);
  } else {
    title.textContent = paper.title;
  }

  const authors = document.createElement("p");
  authors.className = "pub-meta";
  authors.innerHTML = highlightMyName(paper.authors);

  const venue = document.createElement("p");
  venue.className = "pub-meta";
  venue.textContent = paper.venue;
  venue.style.fontWeight = "700";

  const links = document.createElement("div");
  links.className = "pub-links";

  (paper.keywords || []).forEach((keyword) => {
    const tag = document.createElement("span");
    tag.className = "pub-keyword";
    tag.textContent = keyword;
    links.appendChild(tag);
  });

  content.append(title, authors, venue, links);
  card.appendChild(content);
  return card;
}

function initPublicationTabs() {
  const wrap = document.getElementById("pubTabs");
  wrap.innerHTML = "";
  wrap.style.display = "none";

  const grid = document.getElementById("pubGrid");
  grid.innerHTML = "";

  const sections = [
    { key: "first_author", title: "Selected" },
    { key: "corresponding", title: "Additional" }
  ];

  sections.forEach((section) => {
    const block = document.createElement("section");
    block.className = "pub-subsection";

    const heading = document.createElement("h3");
    heading.className = "pub-subtitle";
    heading.textContent = section.title;

    const listWrap = document.createElement("div");
    listWrap.className = "pub-subgrid";

    (publications[section.key] || []).forEach((paper) => {
      const card = createPublicationCard(paper);
      listWrap.appendChild(card);
    });

    block.append(heading, listWrap);
    grid.appendChild(block);
  });
}

function initRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function init() {
  fillBasicProfile();
  renderLinks("heroLinks", profile.heroLinks);
  renderQuickInfo();
  renderTags();
  renderNews("newsList", news);
  renderList("internshipList", internship);
  renderLinkList("learningSitesList", learningSites);
  renderServices("servicesList", services);
  initPublicationTabs();
  initRevealAnimation();
}

init();
