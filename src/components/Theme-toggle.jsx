import { Link, useOutletContext } from "react-router-dom";

export default function ToggleTheme() {
  const { setTheme } = useOutletContext();
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const handleChangeTheme = (theme) => {
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="flex p-10 flex-wrap gap-40 justify-center">
      {themes.map((theme) => (
        <div key={theme}>
          <button
            onClick={() => handleChangeTheme(theme)}
            className="btn btn-xl"
            data-theme={theme}
          >
            {theme}
          </button>
        </div>
      ))}
    </div>
  );
}
