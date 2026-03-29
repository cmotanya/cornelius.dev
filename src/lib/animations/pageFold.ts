import { gsap } from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function pageFold(element: HTMLElement) {
  gsap.set(element, {
    transformPerspective: 600,
    transformOrigin: "top center",
  });

  ScrollTrigger.create({
    trigger: element,
    start: "top left",
    end: "bottom top",
    scrub: true,
    pin: true,

    onUpdate: (self) => {
      const progress = self.progress;
      gsap.set(element, {
        rotateY: progress * -50,
        opacity: 1 - progress * 0.6,
        //   scaleX: 1 - progress * 2,
      });
    },
  });

  return () => _ScrollTrigger.getAll().forEach((t) => t.kill());
}
