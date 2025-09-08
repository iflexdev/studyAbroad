import React, { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const VideoPlayer = ({ source, onTimeUpdate }) => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const lastUpdateTimeRef = useRef(0);

  useEffect(() => {
    if (!source || !source.type || !source.src) return;

    // Clean up any existing instance
    if (playerRef.current) {
      playerRef.current.destroy();
    }

    const options = {
      controls: [
        "play",
        "progress",
        "current-time",
        "duration",
        "mute",
        "volume",
        "settings",
        "pip",
        "airplay",
        "fullscreen",
        "speed",
        "quality",
        "loop",
      ],
      keyboard: { focused: true },
      tooltips: { controls: true, seek: true },
      youtube: { rel: 0, noCookie: true },
    };

    const wrapper = containerRef.current;
    wrapper.innerHTML = "";

    let mediaElement;

    if (source.type === "youtube" || source.type === "vimeo") {
      mediaElement = document.createElement("div");
      mediaElement.setAttribute("data-plyr-provider", source.type);
      mediaElement.setAttribute("data-plyr-embed-id", source.src);
    } else if (source.type === "video") {
      mediaElement = document.createElement("video");
      mediaElement.setAttribute("playsInline", "");
      mediaElement.setAttribute("controls", "");

      mediaElement.setAttribute("autoplay", "");
      mediaElement.setAttribute("muted", ""); // Needed for autoplay to work
      mediaElement.setAttribute("loop", "");

      const sourceTag = document.createElement("source");
      sourceTag.setAttribute("src", source.src);
      sourceTag.setAttribute("type", "video/mp4");
      mediaElement.appendChild(sourceTag);
    }

    if (mediaElement) {
      mediaElement.className = "object-contain w-full h-full";
      wrapper.appendChild(mediaElement);
      playerRef.current = new Plyr(mediaElement, options);

      /* -------------------------------------------------------------------------- */
      /*                       Orientation handling on fullscreen                   */
      /* -------------------------------------------------------------------------- */
      playerRef.current.on("enterfullscreen", async () => {
        if (
          window.screen.orientation &&
          typeof window.screen.orientation.lock === "function"
        ) {
          try {
            await window.screen.orientation.lock("landscape");
          } catch (err) {
            console.warn("Orientation lock failed", err);
          }
        }
      });

      playerRef.current.on("exitfullscreen", () => {
        if (
          window.screen.orientation &&
          typeof window.screen.orientation.unlock === "function"
        ) {
          window.screen.orientation.unlock();
        }
      });

      // Event listeners for duration and time updates
      playerRef.current.on("ready", () => {
        setDuration(playerRef.current.duration || 0);
      });

      playerRef.current.on("timeupdate", () => {
        const current = playerRef.current.currentTime || 0;
        setCurrentTime(current);

        // Throttle updates to every 10 seconds
        const now = Date.now();
        if (now - lastUpdateTimeRef.current >= 10000) {
          // 10 seconds in milliseconds
          if (onTimeUpdate) {
            onTimeUpdate({
              currentTime: current,
              duration: playerRef.current.duration || 0,
            });
          }
          lastUpdateTimeRef.current = now;
        }
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [source, onTimeUpdate]);

  /* -------------------------------------------------------------------------- */
  /*                          for mobile and tab screen                         */
  /* -------------------------------------------------------------------------- */

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden bg-black [&>.plyr]:w-full [&>.plyr]:h-full hover:scale-105 transition duration-500"
    />
  );
};

export default VideoPlayer;
