import gsap from "gsap";

export function glitchEffect(element: HTMLElement) {
  let timeoutId: ReturnType<typeof setTimeout>;
  let ctx = gsap.context(() => {});

  const glitch = () => {
    ctx.add(() => {
      gsap
        .timeline({
          onComplete: () => {
            timeoutId = setTimeout(glitch, 2000 + Math.random() * 1500);
          },
        })
        .to(element, { skewY: 5, duration: 0.045 })
        .to(element, { skewY: -5, duration: 0.045 })
        .to(element, { skewY: 5, duration: 0.035 })
        .to(element, { skewY: 0, duration: 0.06 });
    });
  };

  timeoutId = setTimeout(glitch, 2400);
  return () => {
    clearTimeout(timeoutId);
    ctx.revert();
  };
}
