// ... other imports
import { useEffect,useRef } from "react";
export default function MatrixRainCode() {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);
      let columns = Math.floor(width / 20);
      const character = "abcdefghijklmonpqrstuvxyzw1234567890";
      const charArray = character.split('');
      let drops = [];
  
      for (let i = 0; i < columns; i++) {
        drops[i] = 0;
      }
  
      let frameRate = 30;
      let lastFrameTime = Date.now();
  
      const draw = () => {
        ctx.fillStyle = "rgba(0,0,0,0.04)";
        ctx.fillRect(0, 0, width, height);
  
        ctx.fillStyle = "#6AB187"; // color for all character...
        ctx.font = "15px monospace";
        for (let i = 0; i < drops.length; i++) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          ctx.fillText(text, i * 20, drops[i] * 20);
  
          if (drops[i] * 17 > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };
  
      const animate = () => {
        const currentTime = Date.now();
        const ellapsedTime = currentTime - lastFrameTime;
  
        if (ellapsedTime > 10 / frameRate) {
          draw();
          lastFrameTime = currentTime;
        }
        requestAnimationFrame(animate);
      };
  
      animate();
  
      const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        columns = Math.floor(width / 20);
        drops = [];
  
        for (let i = 0; i < columns; i++) {
          drops[i] = 1;
        }
      };
  
      // for mobile when ever user scroll then is reAnimated
      const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
      if (!isMobileDevice) {
        window.addEventListener("resize", handleResize);
      }
  
      return () => {
        if (!isMobileDevice) {
          window.removeEventListener("resize", handleResize);
        }
      };
    }, []);
  
    return (
      <>
        <canvas className="fixed top-0 left-0 z-[-1]" ref={canvasRef}></canvas>
      </>
    );
  }
  