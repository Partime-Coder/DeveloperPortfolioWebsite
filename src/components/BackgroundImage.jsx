import { useEffect, useState } from "react";

function BackgroundImage({ image, overlay = false, children }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setLoaded(true);
  }, [image]);

  return (
    <div
      className="w-full h-screen bg-center relative transition-opacity duration-500"
      style={{
        backgroundImage: loaded ? `url(${image})` : "none",
        backgroundSize: "cover",
        opacity: loaded ? 1 : 0,
      }}
    >
      {overlay && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}

export default BackgroundImage;
