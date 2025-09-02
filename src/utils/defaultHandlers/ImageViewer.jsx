// components/ImageLightbox.jsx
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Optional plugins (uncomment if needed)
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

export default function ImageLightbox({ open, onClose, slides, index }) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={slides}
      index={index}
      // plugins={[Zoom, Fullscreen]} // Optional plugins
    />
  );
}
