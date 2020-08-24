import Typography from "typography";

const typography = new Typography({
    baseFontSize: "16px",
    baseLineHeight: 1.45,
    headerFontFamily: ["Krungthep", "serif"],
    bodyFontFamily: ["Krungthep", "sans-serif"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;