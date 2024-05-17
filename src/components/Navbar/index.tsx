import React, { useEffect } from "react";
import "./navbar.styles.css";

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  useEffect(() => {
    const toggle = document.querySelector<HTMLElement>("button.theme");

    const switchTheme = () => {
      const isDark = toggle?.matches("[aria-pressed=true]") ? false : true;
      toggle?.setAttribute("aria-pressed", isDark ? "true" : "false");
      document.documentElement.className = isDark ? "light" : "dark";
    };

    const handleToggle = () => {
      if (!(document as any).startViewTransition) {
        console.info("Hey! Try this out in Chrome 111+");
        switchTheme();
      }
      (document as any).startViewTransition(switchTheme);
    };

    toggle?.addEventListener("click", handleToggle);
  }, []);

  // const supportsAnchorPos = "anchorName" in document.documentElement.style;

  // const sync = (nav, anchors) => () => {
  //   for (let i = 0; i < anchors.length; i++) {
  //     anchors[i].style.setProperty("view-transition-name", `item-${i + 1}`);
  //     if (!supportsAnchorPos) {
  //       const bounds = anchors[i].getBoundingClientRect();
  //       nav.style.setProperty(`--item-${i + 1}-x`, bounds.left);
  //       nav.style.setProperty(`--item-${i + 1}-y`, bounds.top);
  //       nav.style.setProperty(`--item-${i + 1}-width`, bounds.width);
  //       nav.style.setProperty(`--item-${i + 1}-height`, bounds.height);
  //     }
  //   }
  // };
  // /**
  //  * If there's no Anchor Positionioning support fill the gap ourselves.
  //  * The Oddbird polyfill struggles with dynamic anchoring
  //  * We can just set the positions via custom properties when there is a
  //  * layout change
  //  * */
  // const nav = document.querySelector("[data-magnetic]");
  // const anchors = nav.querySelectorAll("a");
  // const calibrate = sync(nav, anchors);
  // if (!supportsAnchorPos) {
  //   document.documentElement.dataset.noAnchor = true;
  //   calibrate();
  //   window.addEventListener("resize", calibrate);
  // }

  // /**
  //  * Regardless of whether you have anchor positioning or not, a progressive touch
  //  * is to store the previously hovered piece so on pointerleave you get the fade out
  //  * */
  // const falloff = (index) => () => {
  //   if (supportsAnchorPos) {
  //     nav.style.setProperty("--item-active", `--item-${index + 1}`);
  //   } else {
  //     nav.style.setProperty("--item-active-x", `var(--item-${index + 1}-x)`);
  //     nav.style.setProperty("--item-active-y", `var(--item-${index + 1}-y)`);
  //     nav.style.setProperty(
  //       "--item-active-width",
  //       `var(--item-${index + 1}-width)`
  //     );
  //     nav.style.setProperty(
  //       "--item-active-height",
  //       `var(--item-${index + 1}-height)`
  //     );
  //   }
  // };
  // for (let i = 0; i < anchors.length; i++) {
  //   anchors[i].addEventListener("pointerenter", falloff(i));
  // }

  // const deactivate = async () => {
  //   const transitions = document.getAnimations();
  //   if (transitions.length) {
  //     const fade = transitions.find(
  //       (t) =>
  //         t.effect.target === nav.firstElementChild &&
  //         t.transitionProperty === "opacity"
  //     );
  //     await Promise.allSettled([fade.finished]);
  //     if (supportsAnchorPos) {
  //       nav.style.removeProperty("--item-active");
  //     } else {
  //       nav.style.removeProperty("--item-active-x");
  //       nav.style.removeProperty("--item-active-y");
  //       nav.style.removeProperty("--item-active-width");
  //       nav.style.removeProperty("--item-active-height");
  //     }
  //   }
  // };

  // nav.addEventListener("pointerleave", deactivate);
  // nav.addEventListener("blur", deactivate);

  // /**
  //  * Change orientation with a button click
  //  * */
  // const orientator = document.querySelector(".direction-handler");
  // const orient = () => {
  //   orientator.setAttribute(
  //     "aria-pressed",
  //     orientator.matches("[aria-pressed=false") ? true : false
  //   );
  //   calibrate();
  // };

  // const changeOrientation = () => {
  //   document.documentElement.dataset.flipUi = true;
  //   if (!document.startViewTransition) return orient();
  //   const transition = document.startViewTransition(orient);
  //   transition.finished.finally(() => {
  //     document.documentElement.dataset.flipUi = false;
  //   });
  // };
  // calibrate();
  // orientator.addEventListener("click", changeOrientation);

  return (
    <main>
      <div className="main_container">
        {/* <button
          aria-pressed="false"
          className="direction-handler"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 50 50"
          >
            <rect
              width="32"
              height="32"
              x="25"
              y="2.38"
              stroke="currentColor"
              strokeWidth="2"
              rx="3"
              transform="rotate(45 25 2.38)"
            />
            <path
              fill="currentColor"
              d="M14 29.2v-8.4h11.11V14L36 25 25.11 36v-6.8H14Z"
            />
          </svg>
          <span className="sr-only">Change orientation</span>
        </button> */}
        <nav data-magnetic>
          <ul>
            <li>
              <a
                href="#home"
                id="home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#links"
                id="links"
              >
                Links
              </a>
            </li>
            <li>
              <a
                href="#rates"
                id="rates"
              >
                Rates
              </a>
            </li>
            <li>
              <a
                href="#speaking"
                id="speaking"
              >
                Speaking
              </a>
            </li>
            <li>
              <a
                href="#ai"
                id="ai"
              >
                AI
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/intent/follow?screen_name=jh3yy"
                id="follow"
                target="_blank"
                rel="noreferrer noopener"
              >
                Follow
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <button
        className="theme"
        aria-pressed="true"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <defs>
            <mask>
              <path
                fill="black"
                id="sun"
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
              />
            </mask>
          </defs>
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"
          />
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
        <span className="sr-only">Set theme to dark.</span>
      </button>
    </main>
  );
};
