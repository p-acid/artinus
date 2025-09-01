import { useEffect, useState } from "react";

import { CONTENT_SECTION_IDS } from "../constants";
import * as styles from "./content-nav.css";

const LINKS = [
  {
    label: "Information",
    value: CONTENT_SECTION_IDS.INFO,
  },
  {
    label: "Reviews",
    value: CONTENT_SECTION_IDS.REVIEWS,
  },
];

export const ContentNav = () => {
  const [selected, setSelected] = useState<string>(LINKS[0].value);

  const selectedIndex = LINKS.findIndex(({ value }) => selected === value);

  const scrollToSection = (id: (typeof LINKS)[number]["value"]) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const ids = Object.values(CONTENT_SECTION_IDS);

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      let current: string | null = null;

      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const elementTop = element.offsetTop;

        if (scrollTop >= elementTop - 64) {
          current = id;
        }
      });

      if (current && current !== selected) {
        setSelected(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selected]);

  return (
    <div className={styles.container}>
      {LINKS.map(({ label, value }) => (
        <button
          key={label}
          className={styles.link({ selected: selected === value })}
          onClick={() => scrollToSection(value)}
        >
          {label}
        </button>
      ))}
      <div
        style={{
          width: `${100 / LINKS.length}%`,
          transform: `translateX(${100 * selectedIndex}%)`,
        }}
        className={styles.slider}
      />
    </div>
  );
};
