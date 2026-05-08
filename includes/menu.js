const academicsLink = document.querySelector(".nav-link.academics");

// Menu data
const menuData = {
  academics: [
    {
      name: "French Program",
      content: {
        text: "BTS Métiers de l’Audiovisuel",
        url: "https://example.com/french-program",
      },
    },
    {
      name: "International Program",
      content: {
        text: "International program example",
        url: "https://example.com/international-program",
      },
    },
    {
      name: "Short Program",
      content: {
        text: "Short Program Details",
        url: "https://example.com/short-program",
      },
    },
    {
      name: "Online Program",
      content: {
        text: "Online Program Details",
        url: "https://example.com/online-program",
      },
    },
  ],
  admissions: [
    {
      name: "Undergraduate",
      content: {
        text: "Undergraduate admissions info",
        url: "https://example.com/undergraduate",
      },
    },
    {
      name: "Postgraduate",
      content: {
        text: "Postgraduate admissions info",
        url: "https://example.com/postgraduate",
      },
    },
  ],
  campus: [
    {
      name: "Library",
      content: { text: "Library info", url: "https://example.com/library" },
    },
    {
      name: "Sports",
      content: { text: "Sports info", url: "https://example.com/sports" },
    },
  ],
  cine: [
    {
      name: "Film Club",
      content: { text: "Film club info", url: "https://example.com/film-club" },
    },
    {
      name: "Screenings",
      content: {
        text: "Screenings info",
        url: "https://example.com/screenings",
      },
    },
  ],
  about: [
    {
      name: "Our Team",
      content: { text: "Team info", url: "https://example.com/our-team" },
    },
    {
      name: "Contact",
      content: { text: "Contact info", url: "https://example.com/contact" },
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

  //Desktop sub-menu
  function populateMiddle(key) {
    middleUl.innerHTML = "";
    let activeIndex = activeSubItems[key] ?? 0;

    menuData[key].forEach((d, i) => {
      const li = document.createElement("li");

      // Create link with span + icon
      const link = document.createElement("a");
      link.href = d.content.url;
      link.target = "_blank";
      link.classList.add(
        "d-flex",
        "justify-content-between",
        "text-decoration-none",
        "align-items-center",
      );

      const span = document.createElement("span");
      span.textContent = d.name;
      link.appendChild(span);

      const icon = document.createElement("i");
      icon.className = "fa-solid fa-chevron-right";
      link.appendChild(icon);

      li.appendChild(link);

      if (i === activeIndex) li.classList.add("active");

      // Desktop hover
      li.addEventListener("mouseenter", () => {
        middleUl
          .querySelectorAll("li")
          .forEach((sib) => sib.classList.remove("active"));
        li.classList.add("active");
        activeSubItems[key] = i;
        contentText.innerHTML = `<a href="${d.content.url}" target="_blank">${d.content.text}</a>`;
      });

      middleUl.appendChild(li);
    });

    const activeContent = menuData[key][activeIndex].content;
    contentText.innerHTML = `<a href="${activeContent.url}" target="_blank">${activeContent.text}</a>`;
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

    const activeContent = menuData[key][activeIndex].content;
    contentText.innerHTML = `<a href="${activeContent.url}" target="_blank">${activeContent.text}</a>`;
  });

  //Mobile sub-menu
  function populateSubMobile(key) {
    subUl.innerHTML = "";

    menuData[key].forEach((item) => {
      const li = document.createElement("li");

      const link = document.createElement("a");
      link.href = item.content.url;
      link.target = "_blank";
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

      // Mobile click
      link.addEventListener("click", (e) => {
        e.preventDefault();
        contentTitle.textContent = item.name;
        contentText.innerHTML = `<a href="${item.content.url}" target="_blank">${item.content.text}</a>`;
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
