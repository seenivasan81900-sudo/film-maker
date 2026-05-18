const academicsLink = document.querySelector(".nav-link.academics");

// ── Menu Data ────────────────────────────────────────────────────────────────
const menuData = {
  academics: [
    {
      name: "French Program",
      contents: [
        {
          text: "BTS Métiers de l'Audiovisuel",
          url: "/courses/bts-gestion-de-production.html",
        },
        {
          text: "BTS Métiers de l'Audiovisuel – Montage et Post-production",
          url: "/courses/bts-metiers-audiovisuel-montage-post-production.html",
        },
      ],
    },
    {
      name: "International Program",
      contents: [
        {
          text: "European Bachelor of Arts in Cinema and Audiovisual",
          url: "/courses/european-bachelor-cinema-audiovisual.html",
        },
        {
          text: "European Master of Arts in Cinema and Audiovisual",
          url: "/courses/european-master-cinema-audiovisual.html",
        },
        {
          text: "Elite Diploma In Cinema & Television",
          url: "/courses/elite-diploma-cinema-television.html",
        },
      ],
    },
    {
      name: "Short Program",
      contents: [
        {
          text: "ONE-MONTH FILMMAKING PROGRAM",
          url: "/courses/one-month-filming-program.html",
        },
        { text: "Art & Culture", url: "" },
        { text: "Erasmus Plus PROGRAM", url: "" },
        { text: "Summer Courses", url: "" },
      ],
    },
    {
      name: "Online Program",
      contents: [
        {
          text: "Online Scriptwriting for Cinema and Television",
          url: "/courses/online-scriptwriting-cinema-television.html",
        },
      ],
    },
  ],

  admissions: [
    {
      name: "Admission Guidelines",
      contents: [
        {
          text: "Admission Process",
          url: "",
        },
        {
          text: "Which Program Is Right For You?",
          url: "",
        },
        {
          text: "How To Apply?",
          url: "",
        },
        {
          text: "Selection Process",
          url: "",
        },
        {
          text: "Important Dates",
          url: "",
        },
      ],
    },

    {
      name: "International Students",
      contents: [
        {
          text: "Visa Guidance",
          url: "",
        },
        {
          text: "Post-Arrival Assistance",
          url: "",
        },
        {
          text: "Arriving On Campus",
          url: "",
        },
      ],
    },

    {
      name: "Tuition & Fees",
      contents: [
        {
          text: "All Programs & Courses",
          url: "",
        },
        {
          text: "Registration",
          url: "",
        },
        {
          text: "Payment Modules",
          url: "",
        },
        {
          text: "Payment System",
          url: "",
        },
      ],
    },

    {
      name: "Financial Aid & Scholarship",
      contents: [
        {
          text: "Aid & Scholarship Opportunities",
          url: "",
        },
        {
          text: "Aid & Scholarship Requirements",
          url: "",
        },
        {
          text: "Win-Win Scholarship Guidelines",
          url: "",
        },
      ],
    },
  ],
  campus: [
    {
      name: "Our Students",
      contents: [
        {
          text: "Awards & Recognition",
          url: "",
        },
        {
          text: "Student Stories",
          url: "",
        },
        {
          text: "Student Work",
          url: "",
        },
        {
          text: "Behind The Scenes",
          url: "",
        },
      ],
    },

    {
      name: "Housing & Accommodation",
      contents: [
        {
          text: "Dbima Housing",
          url: "",
        },
        {
          text: "Ecla Accommodation",
          url: "",
        },
      ],
    },

    {
      name: "Show Your Talent",
      contents: [
        {
          text: "A Chance to Go Pro",
          url: "",
        },
        {
          text: "Make it Professional",
          url: "",
        },
      ],
    },

    {
      name: "Life In Paris",
      contents: [
        {
          text: "Kick start your life in paris",
          url: "",
        },
        {
          text: "NGO Participation",
          url: "",
        },
        {
          text: "Arrival Guide",
          url: "",
        },
      ],
    },
  ],

  cine: [
    {
      name: "Grigio Studio",
      contents: [
        {
          text: "Film & Television Production",
          url: "https://example.com/production-crew-services",
        },
      ],
    },

    {
      name: "Grigio Services",
      contents: [
        {
          text: "Production Crew Services",
          url: "https://example.com/production-crew-services",
        },
      ],
    },

    {
      name: "Grigio Rentals",
      contents: [
        {
          text: "Production Rental Services",
          url: "https://example.com/production-rental-services",
        },
      ],
    },

    {
      name: "Grigio Scope",
      contents: [
        {
          text: "Pitch Your Idea",
          url: "https://example.com/pitch-your-idea",
        },
        {
          text: "Co Producer Your Project",
          url: "https://example.com/co-producer-your-project",
        },
        {
          text: "Launch Your Podcast",
          url: "https://example.com/launch-your-podcast",
        },
        {
          text: "Chance To Create Your Own Show",
          url: "https://example.com/create-your-own-show",
        },
        {
          text: "Launch Your 1st Movie",
          url: "https://example.com/launch-your-1st-movie",
        },
      ],
    },
  ],

  about: [
    {
      name: "Our Network",
      contents: [
        {
          text: "Inspiring Since 1883 - 1981 - 2019",
          url: "https://example.com/inspiring-history",
        },
        {
          text: "DBIMA, The New Era",
          url: "https://example.com/dbima-new-era",
        },
        {
          text: "Don Bosco Network",
          url: "https://example.com/don-bosco-network",
        },
      ],
    },

    {
      name: "Our Faculty",
      contents: [
        {
          text: "Director",
          url: "https://example.com/director",
        },
        {
          text: "Team DBIMA",
          url: "https://example.com/team-dbima",
        },
        {
          text: "Teaching Staff",
          url: "https://example.com/teaching-staff",
        },
      ],
    },

    {
      name: "News & Events",
      contents: [
        {
          text: "News",
          url: "https://example.com/news",
        },
        {
          text: "Events",
          url: "https://example.com/events",
        },
        {
          text: "Blogs & Articles",
          url: "https://example.com/blogs-articles",
        },
        {
          text: "Press Release",
          url: "https://example.com/press-release",
        },
        {
          text: "Upcoming Projects",
          url: "https://example.com/upcoming-projects",
        },
      ],
    },

    {
      name: "Our Partners",
      contents: [
        {
          text: "International Collaborators",
          url: "https://example.com/international-collaborators",
        },
        {
          text: "Erasmus+",
          url: "https://example.com/erasmus-plus",
        },
        {
          text: "EABHES",
          url: "https://example.com/eabhes",
        },
      ],
    },

    {
      name: "Our Ambassadors",
      contents: [
        {
          text: "Ambassadors Around the World",
          url: "https://example.com/ambassadors-around-the-world",
        },
      ],
    },
  ],
};

// Track last active sub-item for each top menu
let activeSubItems = {};

// Get menu elements based on screen size
function getMenuElements() {
  const isSmallScreen = window.innerWidth <= 992;
  const small = "-small-screen";
  const large = "-large-screen";

  const smallWrapper = document.getElementById("menu-wrapper" + small);
  const largeWrapper = document.getElementById("menu-wrapper" + large);

  const suffix = isSmallScreen ? small : large;
  const menuWrapper = isSmallScreen ? smallWrapper : largeWrapper;

  const panelTop = document.getElementById("menu-top" + suffix);
  const panelSub = document.getElementById("menu-sub" + suffix);
  const panelContent = document.getElementById("menu-content" + suffix);
  const topItems = panelTop.querySelectorAll("li");
  const subUl = panelSub.querySelector("ul");
  const subTitle = document.getElementById("sub-title" + suffix);
  const contentTitle = document.getElementById("content-title" + suffix);
  const contentText = document.getElementById("content-text" + suffix);
  const backTop = document.getElementById("back-top" + suffix);
  const backSub = document.getElementById("back-sub" + suffix);

  return {
    menuWrapper,
    smallWrapper,
    largeWrapper,
    panelTop,
    panelSub,
    panelContent,
    topItems,
    subUl,
    subTitle,
    contentTitle,
    contentText,
    backTop,
    backSub,
    isSmallScreen,
  };
}

// Show menu on hover
academicsLink.addEventListener("mouseenter", () => {
  const { menuWrapper, smallWrapper, largeWrapper } = getMenuElements();
  smallWrapper.classList.remove("show");
  largeWrapper.classList.remove("show");
  menuWrapper.classList.add("show");
});

academicsLink.addEventListener("mouseleave", () => {
  setTimeout(() => {
    const { menuWrapper } = getMenuElements();
    if (!menuWrapper.matches(":hover")) {
      menuWrapper.classList.remove("show");
    }
  }, 200);
});

// Keep menu visible when hovering over it
document.querySelectorAll(".menu-wrapper").forEach((wrapper) => {
  wrapper.addEventListener("mouseenter", () => {
    wrapper.classList.add("show");
    const academicsLink = document.querySelector(".nav-link.academics");
    academicsLink.style.color = "#B58448";
  });
  wrapper.addEventListener("mouseleave", () => {
    wrapper.classList.remove("show");
    const academicsLink = document.querySelector(".nav-link.academics");
    academicsLink.style.color = "";
  });
});

// Setup menu behavior
function setupMenu() {
  const {
    panelTop,
    panelSub,
    panelContent,
    topItems,
    subUl,
    subTitle,
    contentTitle,
    contentText,
    backTop,
    backSub,
    isSmallScreen,
  } = getMenuElements();

  // Remove old event listeners
  topItems.forEach((item) => item.replaceWith(item.cloneNode(true)));
  const newTopItems = panelTop.querySelectorAll("li");
  const middleUl = panelSub.querySelector("ul");

  // ── Render each content  ──────────────────────────
  function renderContents(contents) {
    contentText.innerHTML = "";
    const ul = document.createElement("ul");
    ul.classList.add("list-unstyled", "p-0", "m-0");

    contents.forEach((c) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = c.url;
      a.target = "_blank";

      a.classList.add(
        "d-flex",
        "justify-content-between",
        "text-decoration-none",
        "align-items-center",
      );
      const span = document.createElement("span");
      span.textContent = c.text;
      a.appendChild(span);
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Append UL into content area
    contentText.appendChild(ul);
  }
  // Desktop hover + mobile click
  newTopItems.forEach((item) => {
    const key = item.dataset.sub;

    // Desktop hover
    item.addEventListener("mouseenter", () => {
      if (!isSmallScreen) {
        newTopItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        populateMiddle(key);
      }
    });

    // Mobile click
    item.addEventListener("click", () => {
      if (isSmallScreen) {
        subTitle.textContent = item.textContent;
        populateSubMobile(key);
        panelTop.classList.remove("active");
        panelSub.classList.add("active");
      }
    });
  });

  // Desktop sub-menu
  function populateMiddle(key) {
    middleUl.innerHTML = "";
    let activeIndex = activeSubItems[key] ?? 0;

    menuData[key].forEach((d, i) => {
      const li = document.createElement("li");

      const link = document.createElement("a");
      link.href = "#";
      link.classList.add(
        "d-flex",
        "justify-content-between",
        "text-decoration-none",
        "align-items-center",
      );
      link.addEventListener("click", (e) => e.preventDefault());

      const span = document.createElement("span");
      span.textContent = d.name;
      link.appendChild(span);

      const icon = document.createElement("i");
      icon.className = "fa-solid fa-chevron-right";
      link.appendChild(icon);

      li.appendChild(link);

      if (i === activeIndex) li.classList.add("active");

      // Desktop hover — show this sub's contents
      li.addEventListener("mouseenter", () => {
        middleUl
          .querySelectorAll("li")
          .forEach((sib) => sib.classList.remove("active"));
        li.classList.add("active");
        activeSubItems[key] = i;
        contentTitle.textContent = d.name;
        renderContents(d.contents);
      });

      middleUl.appendChild(li);
    });

    // Show default active contents
    contentTitle.textContent = menuData[key][activeIndex].name;
    renderContents(menuData[key][activeIndex].contents);
  }

  // Reset active sub-item when mouse leaves sub-menu
  panelSub.addEventListener("mouseleave", () => {
    const key = panelTop.querySelector("li.active")?.dataset.sub;
    if (!key) return;

    middleUl
      .querySelectorAll("li")
      .forEach((li) => li.classList.remove("active"));
    const activeIndex = activeSubItems[key] ?? 0;
    middleUl.querySelectorAll("li")[activeIndex].classList.add("active");

    contentTitle.textContent = menuData[key][activeIndex].name;
    renderContents(menuData[key][activeIndex].contents);
  });

  // Mobile sub-menu
  function populateSubMobile(key) {
    subUl.innerHTML = "";

    menuData[key].forEach((item) => {
      const li = document.createElement("li");

      const link = document.createElement("a");
      link.href = "#";
      link.classList.add(
        "d-flex",
        "justify-content-between",
        "text-decoration-none",
        "align-items-center",
      );

      const span = document.createElement("span");
      span.textContent = item.name;
      link.appendChild(span);

      const icon = document.createElement("i");
      icon.className = "fa-solid fa-chevron-right";
      link.appendChild(icon);

      li.appendChild(link);

      // Mobile click — show content panel with all <li> items
      link.addEventListener("click", (e) => {
        e.preventDefault();
        contentTitle.textContent = item.name;
        renderContents(item.contents);
        panelSub.classList.remove("active");
        panelContent.classList.add("active");
      });

      subUl.appendChild(li);
    });
  }

  // Mobile back buttons
  backTop.addEventListener("click", () => {
    panelSub.classList.remove("active");
    panelTop.classList.add("active");
  });
  backSub.addEventListener("click", () => {
    panelContent.classList.remove("active");
    panelSub.classList.add("active");
  });

  // Initialize first menu
  populateMiddle("academics");
  panelTop.classList.add("active");
  if (!isSmallScreen) {
    panelSub.classList.add("active");
    panelContent.classList.add("active");
  }
}

// Initial setup
setupMenu();

// Re-setup menu on resize
window.addEventListener("resize", () => {
  setupMenu();
});
