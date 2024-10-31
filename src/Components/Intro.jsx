import React, { useEffect, useRef, useState } from "react";
import SvgIcon from "./SvgIcon";
import Logo from "./logo.svg";
// Pour utiliser Spline, il faut d'abord l'installer avec :
// npm install @splinetool/react-spline @splinetool/runtime
import Spline from '@splinetool/react-spline';

const Intro = () => {
  const nameRef = useRef(null);
  const greetingRef = useRef(null);
  const soundRef = useRef(new Audio("Sound2.wav"));
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const animateText = (element) => {
      let iteration = 0;
      clearInterval(interval);
      interval = setInterval(() => {
        element.innerText = element.innerText
          .split("")
          .map((letter, index) =>
            index < iteration
              ? element.dataset.value[index]
              : letters[Math.floor(Math.random() * letters.length)]
          )
          .join("");
        if (iteration >= element.dataset.value.length) {
          clearInterval(interval);
        }
        iteration += 1 / 4;
      }, 40);
    };

    const handleMouseOver = () => {
      animateText(greetingRef.current);
      animateText(nameRef.current);

      if (soundEnabled) {
        soundRef.current.play().catch((error) => console.error("Audio play failed:", error));
      }
    };

    const greetingElement = greetingRef.current;
    const nameElement = nameRef.current;

    greetingElement.dataset.value = greetingElement.innerText;
    nameElement.dataset.value = nameElement.innerText;

    greetingElement.addEventListener("mouseover", handleMouseOver);
    nameElement.addEventListener("mouseover", handleMouseOver);

    return () => {
      greetingElement.removeEventListener("mouseover", handleMouseOver);
      nameElement.removeEventListener("mouseover", handleMouseOver);
      clearInterval(interval);
    };
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
    soundRef.current.muted = !soundEnabled;
  };

  return (
    <main style={styles.mainBg}>
      {/* Spline background */}
      <div style={styles.splineContainer}>
        {/* Remplacer ce commentaire par le composant Spline une fois installé */}
        <Spline scene="https://prod.spline.design/uHbhl2y0pbIFZWXr/scene.splinecode" /> 
      </div>

      <div style={styles.contentWrapper}>
        <img src={Logo} alt="3DigitalWizardry Logo" style={styles.logo} className="animate-pulse" />
        
        <div style={styles.borderContainer}>
          <div style={styles.container}>
            <div style={styles.content}>
              <h1 style={styles.mainTitle}>
                <span ref={greetingRef} data-value="Hii! I'm" style={styles.animatedText}>
                  Hii! We are
                </span>{" "}
                <span ref={nameRef} data-value="3DigitalWizardry" style={styles.animatedTextHighlight}>
                  3DigitalWizardry
                </span>
              </h1>
              <p style={styles.whoWeAre}>
                Crafting digital experiences with{" "}
                <span style={styles.highlight}>Innovation</span> &{" "}
                <span style={styles.highlight}>Creativity</span>
              </p>
              <button onClick={toggleSound} style={styles.soundButton} aria-label="Toggle sound">
                <SvgIcon id="soundIcon" svg={soundEnabled ? "soundOn" : "soundOff"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const styles = {
  mainBg: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#fff",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  splineContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  contentWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    zIndex: 2,
    padding: "20px",
  },
  logo: {
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "220px",
    height: "auto",
    animation: "pulse 2s infinite",
    filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.1))",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.05)",
    },
  },
  borderContainer: {
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    padding: "2px",
    marginTop: "100px",
  },
  container: {
    padding: "40px",
    borderRadius: "18px",
    background: "#fff",
  },
  content: {
    textAlign: "center",
  },
  mainTitle: {
    fontSize: "4rem",
    marginBottom: "20px",
    lineHeight: 1.2,
    fontWeight: "bold",
  },
  animatedText: {
    display: "inline-block",
    transition: "color 0.3s ease",
    color: "#ff0033",
    fontSize: "4rem",
  },
  animatedTextHighlight: {
    display: "inline-block",
    transition: "color 0.3s ease",
    color: "#ff3366",
    fontWeight: "800",
    fontSize: "4rem",
  },
  whoWeAre: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "30px",
    lineHeight: 1.5,
  },
  highlight: {
    color: "#ff0033",
    fontWeight: "600",
  },
  soundButton: {
    backgroundColor: "transparent",
    border: "none",
    padding: "12px",
    cursor: "pointer",
    color: "#ff0033",
    fontSize: "24px",
    transition: "all 0.2s ease",
    ":hover": {
      transform: "scale(1.1)",
    },
  },
};

export default Intro;