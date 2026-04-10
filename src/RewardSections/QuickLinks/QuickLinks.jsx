// // // QuickLinks.jsx

// // import styles from "./QuickLinks.module.css";
// // import QuickLinkAbs from "./QuickLinkAbs";

// // import {
// //   Flame,
// //   RotateCw,
// //   Target,
// //   Award,
// //   Crown,
// //   Gift,
// //   Users,
// //   Swords,
// //   Ticket,
// //   Trophy,
// //   Bell,
// //   Layers,
// // } from "lucide-react";

// // const links = [
// //   {
// //     icon: <Flame size={15} />,
// //     title: "Daily Streak",
// //   },
// //   {
// //     icon: <RotateCw size={15} />,
// //     title: "Spin Wheel",
// //   },
// //   {
// //     icon: <Target size={15} />,
// //     title: "Daily Missions",
// //   },
// //   {
// //     icon: <Award size={15} />,
// //     title: "Badges",
// //   },
// //   {
// //     icon: <Crown size={15} />,
// //     title: "Level XP",
// //   },
// //   {
// //     icon: <Gift size={15} />,
// //     title: "Mystery Rewards",
// //   },
// //   {
// //     icon: <Users size={15} />,
// //     title: "Referral Milestones",
// //   },
// //   {
// //     icon: <Swords size={15} />,
// //     title: "Team Battles",
// //   },
// //   {
// //     icon: <Ticket size={15} />,
// //     title: "Lucky Draw",
// //   },
// //   {
// //     icon: <Trophy size={15} />,
// //     title: "Milestone Rewards",
// //   },
// //   {
// //     icon: <Bell size={15} />,
// //     title: "Surprise Rewards",
// //   },
// //   {
// //     icon: <Layers size={15} />,
// //     title: "Collect Cards",
// //   },
// // ];

// // const QuickLinks = () => {
// //   const duplicatedLinks = [...links, ...links, ...links, ...links];

// //   return (
// //     <div className={styles.wrapper}>
// //       <div className={styles.track}>
// //         {duplicatedLinks.map((item, index) => (
// //           <QuickLinkAbs key={index} icon={item.icon} title={item.title} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuickLinks;

// // QuickLinks.jsx

// import { useEffect, useRef, useState } from "react";
// import styles from "./QuickLinks.module.css";
// import QuickLinkAbs from "./QuickLinkAbs";

// import {
//   Flame,
//   RotateCw,
//   Target,
//   Award,
//   Crown,
//   Gift,
//   Users,
//   Swords,
//   Ticket,
//   Trophy,
//   Bell,
//   Layers,
// } from "lucide-react";
// import { track } from "framer-motion/client";

// const links = [
//   {
//     id: 1,
//     icon: <Flame size={15} />,
//     title: "Daily Streak",
//     class: "wrapper1",
//     border: "border1",
//   },
//   {
//     id: 2,
//     icon: <RotateCw size={15} />,
//     title: "Spin Wheel",
//     class: "wrapper2",
//     border: "border2",
//   },
//   {
//     id: 3,
//     icon: <Target size={15} />,
//     title: "Daily Missions",
//     class: "wrapper3",
//     border: "border3",
//   },
//   {
//     id: 4,
//     icon: <Award size={15} />,
//     title: "Badges",
//     class: "wrapper4",
//     border: "border4",
//   },
//   {
//     id: 5,
//     icon: <Crown size={15} />,
//     title: "Level XP",
//     class: "wrapper5",
//     border: "border5",
//   },
//   {
//     id: 6,
//     icon: <Gift size={15} />,
//     title: "Mystery Rewards",
//     class: "wrapper6",
//     border: "border6",
//   },
//   {
//     id: 7,
//     icon: <Users size={15} />,
//     title: "Referral Milestones",
//     class: "wrapper7",
//     border: "border7",
//   },
//   {
//     id: 8,
//     icon: <Swords size={15} />,
//     title: "Team Battles",
//     class: "wrapper8",
//     border: "border8",
//   },
//   {
//     id: 9,
//     icon: <Ticket size={15} />,
//     title: "Lucky Draw",
//     class: "wrapper9",
//     border: "border9",
//   },
//   {
//     id: 10,
//     icon: <Trophy size={15} />,
//     title: "Milestone Rewards",
//     class: "wrapper10",
//     border: "border10",
//   },
//   {
//     id: 11,
//     icon: <Layers size={15} />,
//     title: "Collect Cards",
//     class: "wrapper12",
//     border: "border12",
//   },
//   {
//     id: 12,
//     icon: <Bell size={15} />,
//     title: "Surprise Rewards",
//     class: "wrapper11",
//     border: "border11",
//   },
// ];

// const QuickLinks = () => {
//   const wrapperRef = useRef(null);
//   const trackRef = useRef(null);

//   const [activechildIndex, setActiveChildIndex] = useState(3);
//   const [refreshKey, setRefreshKey] = useState(0);
//   let counter = 3;

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const track = trackRef.current;

//     if (!wrapper || !track) return;

//     let animationFrame;
//     let isPaused = false;
//     const speed = 0.5;

//     const children = Array.from(track.children);

//     children.forEach((child, index) => {
//       child.classList.remove(styles.active);
//     });

//     const fourthChild = children[3];

//     if (fourthChild) {
//       counter++;
//       console.log(counter);
//       setActiveChildIndex(3);
//       fourthChild.classList.add(styles.active);
//     }

//     const scroll = () => {
//       if (!wrapper || isPaused) {
//         animationFrame = requestAnimationFrame(scroll);
//         return;
//       }

//       wrapper.scrollLeft += speed;

//       const firstCard = track.children[0];

//       if (firstCard) {
//         const firstCardWidth =
//           firstCard.offsetWidth +
//           parseInt(window.getComputedStyle(track).gap || 12);

//         if (wrapper.scrollLeft >= firstCardWidth) {
//           wrapper.scrollLeft -= firstCardWidth;
//           track.appendChild(firstCard);

//           setRefreshKey((prev) => prev + 1);
//         }
//       }

//       animationFrame = requestAnimationFrame(scroll);
//     };

//     animationFrame = requestAnimationFrame(scroll);

//     const pause = () => {
//       isPaused = true;
//     };

//     const resume = () => {
//       isPaused = false;
//     };

//     wrapper.addEventListener("mouseenter", pause);
//     wrapper.addEventListener("mouseleave", resume);

//     return () => {
//       cancelAnimationFrame(animationFrame);
//       wrapper.removeEventListener("mouseenter", pause);
//       wrapper.removeEventListener("mouseleave", resume);
//     };
//   }, [refreshKey]);

//   return (
//     <div style={{ position: "relative" }}>
//       <div className={styles.fadeLeft}></div>
//       <div className={styles.fadeRight}></div>
//       <div className={styles.wrapper} ref={wrapperRef}>
//         <div className={styles.track} ref={trackRef}>
//           {links.map((item, index) => (
//             <QuickLinkAbs
//               key={index}
//               icon={item.icon}
//               title={item.title}
//               wrapper={item.class}
//               border={item.border}
//               // isActive={index === activechildIndex}
//               isActive={index === counter && index === activechildIndex}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickLinks;

// QuickLinks.jsx

import { useEffect, useRef, useState } from "react";
import styles from "./QuickLinks.module.css";
import QuickLinkAbs from "./QuickLinkAbs";

import {
  Flame,
  RotateCw,
  Target,
  Award,
  Crown,
  Gift,
  Users,
  Swords,
  Ticket,
  Trophy,
  Bell,
  Layers,
} from "lucide-react";

const links = [
  {
    id: 1,
    icon: <Flame size={15} />,
    title: "Daily Streak",
    class: "wrapper1",
    border: "border1",
  },
  {
    id: 2,
    icon: <RotateCw size={15} />,
    title: "Spin Wheel",
    class: "wrapper2",
    border: "border2",
  },
  {
    id: 3,
    icon: <Target size={15} />,
    title: "Daily Missions",
    class: "wrapper3",
    border: "border3",
  },
  {
    id: 4,
    icon: <Award size={15} />,
    title: "Badges",
    class: "wrapper4",
    border: "border4",
  },
  {
    id: 5,
    icon: <Crown size={15} />,
    title: "Level XP",
    class: "wrapper5",
    border: "border5",
  },
  {
    id: 6,
    icon: <Gift size={15} />,
    title: "Mystery Rewards",
    class: "wrapper6",
    border: "border6",
  },
  {
    id: 7,
    icon: <Users size={15} />,
    title: "Referral Milestones",
    class: "wrapper7",
    border: "border7",
  },
  {
    id: 8,
    icon: <Swords size={15} />,
    title: "Team Battles",
    class: "wrapper8",
    border: "border8",
  },
  {
    id: 9,
    icon: <Ticket size={15} />,
    title: "Lucky Draw",
    class: "wrapper9",
    border: "border9",
  },
  {
    id: 10,
    icon: <Trophy size={15} />,
    title: "Milestone Rewards",
    class: "wrapper10",
    border: "border10",
  },
  {
    id: 11,
    icon: <Layers size={15} />,
    title: "Collect Cards",
    class: "wrapper12",
    border: "border12",
  },
  {
    id: 12,
    icon: <Bell size={15} />,
    title: "Surprise Rewards",
    class: "wrapper11",
    border: "border11",
  },
];

const QuickLinks = () => {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(3);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;

    if (!wrapper || !track) return;

    let animationFrame;
    let isPaused = false;
    const speed = 0.5;

    const updateFourthChild = () => {
      const children = Array.from(track.children);

      children.forEach((child) => {
        child.classList.remove(styles.activeCard);
      });

      const fourthChild = children[3];

      if (fourthChild) {
        fourthChild.classList.add(styles.activeCard);
      }

      const activeId = fourthChild?.dataset.index;

      if (activeId) {
        setActiveIndex(Number(activeId));
      }
    };

    updateFourthChild();

    const scroll = () => {
      if (!wrapper || isPaused) {
        animationFrame = requestAnimationFrame(scroll);
        return;
      }

      wrapper.scrollLeft += speed;

      const firstCard = track.children[0];

      if (firstCard) {
        const firstCardWidth =
          firstCard.offsetWidth +
          parseInt(window.getComputedStyle(track).gap || 12);

        if (wrapper.scrollLeft >= firstCardWidth) {
          wrapper.scrollLeft -= firstCardWidth;
          track.appendChild(firstCard);

          updateFourthChild();
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    const pause = () => {
      isPaused = true;
    };

    const resume = () => {
      isPaused = false;
    };

    wrapper.addEventListener("mouseenter", pause);
    wrapper.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationFrame);
      wrapper.removeEventListener("mouseenter", pause);
      wrapper.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.fadeLeft}></div>
      <div className={styles.fadeRight}></div>

      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.track} ref={trackRef}>
          {links.map((item, index) => (
            <QuickLinkAbs
              key={item.id}
              icon={item.icon}
              title={item.title}
              wrapper={item.class}
              border={item.border}
              isActive={index === activeIndex}
              dataIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
