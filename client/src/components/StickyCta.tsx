import { useEffect, useState } from "react";
import { track } from "@/lib/tracking";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const agendar = document.getElementById("agendar");
    if (!hero || !agendar) return;

    let heroIntersecting = true;
    let agendarIntersecting = false;
    const update = () => setVisible(!heroIntersecting && !agendarIntersecting);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroIntersecting = entry.isIntersecting;
        update();
      },
      { threshold: 0 }
    );
    const agendarObserver = new IntersectionObserver(
      ([entry]) => {
        agendarIntersecting = entry.isIntersecting;
        update();
      },
      { threshold: 0 }
    );

    heroObserver.observe(hero);
    agendarObserver.observe(agendar);

    return () => {
      heroObserver.disconnect();
      agendarObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        paddingBottom: "calc(1rem + env(safe-area-inset-bottom))",
      }}
    >
      <a
        href="#agendar"
        onClick={() => track("meeting_cta_click", { placement: "sticky_bar" })}
        className="btn-cta w-full !flex !text-base"
      >
        Agendar 30 min
      </a>
    </div>
  );
}
