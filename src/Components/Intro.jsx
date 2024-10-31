import React, { useEffect, useRef, useState } from "react";
import SvgIcon from "./SvgIcon";
import Logo from "./logo.svg";
import Spline from '@splinetool/react-spline';

const Intro = () => {
  const nameRef = useRef(null);
  const soundRef = useRef(new Audio("Sound2.wav"));
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const animateText = (element) => {
      let iteration = 0;
      clearInterval(interval);
      interval = setInterval(() => {
        element.innerText = element.dataset.value
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
      animateText(nameRef.current);

      if (soundEnabled) {
        soundRef.current.play().catch((error) => console.error("Audio play failed:", error));
      }
    };

    const nameElement = nameRef.current;
    nameElement.dataset.value = nameElement.innerText;
    nameElement.addEventListener("mouseover", handleMouseOver);

    return () => {
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
      <div style={styles.splineContainer}>
      <Spline
        scene="https://prod.spline.design/qhkmDJNZoY6n7rPt/scene.splinecode" 
      />      
      </div>

      <div style={styles.contentWrapper}>
        <img src={Logo} alt="3DigitalWizardry Logo" style={styles.logo} className="animate-pulse" />
        
        <div style={styles.borderContainer}>
          <div style={styles.container}>
            <div style={styles.content}>
              <div style={styles.titleContainer}>
                <h1 style={styles.mainTitle}>
                  <div style={styles.greeting}>Hii! We are</div>
                  <div 
                    ref={nameRef} 
                    data-value="3DigitalWizardry" 
                    style={styles.animatedTextHighlight}
                  >
                    3DigitalWizardry
                  </div>
                </h1>
              </div>
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
    width: "clamp(120px, 15vw, 220px)",
    height: "auto",
    animation: "pulse 2s infinite",
    filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.1))",
    transition: "transform 0.3s ease",
  },
  borderContainer: {
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    padding: "2px",
    width: "90%",
    maxWidth: "900px",
    margin: "100px auto 0",
  },
  container: {
    padding: "clamp(20px, 4vw, 40px)",
    borderRadius: "18px",
    background: "#fff",
  },
  content: {
    textAlign: "center",
  },
  titleContainer: {
    marginBottom: "20px",
    padding: "0 10px",
  },
  mainTitle: {
    margin: 0,
    padding: 0,
    fontWeight: "bold",
  },
  greeting: {
    color: "#ff0033",
    fontSize: "clamp(1.5rem, 4vw, 3rem)",
    marginBottom: "10px",
  },
  animatedTextHighlight: {
    color: "#ff3366",
    fontWeight: "800",
    fontSize: "clamp(2rem, 5vw, 4rem)",
    lineHeight: "1.2",
    wordBreak: "break-word",
  },
  whoWeAre: {
    fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
    color: "#333",
    marginBottom: "30px",
    lineHeight: 1.5,
    padding: "0 10px",
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
  },
};

export default Intro;