import { defineStore } from "pinia";

//Change themeEndTime to alter the maximum time for a theme in seconds

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "",
    previousTheme: -1,
    secondPreviousTheme: -1,
    themeEndTime: 11,
    themeTime: -1,
    themeAccent: "",
    themeLow: "",
    themeBG: "",
    themeFont: "",
    themeTitle: "",
    themeSubTitle: "",
    themeFeature: "",
    themeFeatureItem: "",
    previousFeatureItem: -1,
  }),
  actions: {
    setTheme(theme) {
      this.theme = theme;
    },
    setThemeTime(time) {
      this.themeTime = time;
    },
    setThemeAccent(color) {
      this.themeAccent = color;
    },
    setThemeLow(colorLow) {
      this.themeLow = colorLow;
    },
    setThemeBG(bg) {
      this.themeBG = bg;
    },
    setPrevious(index) {
      this.secondPreviousTheme = this.previousTheme;
      this.previousTheme = index;
    },
    setFont(font) {
      this.themeFont = font;
    },
    setTitle(title) {
      this.themeTitle = title;
    },
    setSubTitle(subTitle) {
      this.themeSubTitle = subTitle;
    },
    setFeature(feature) {
      this.themeFeature = feature;
    },
    setFeatureItem(featureItem) {
      this.themeFeatureItem = featureItem;
    },
    setPreviousFeatureItem(previousFeature) {
      this.previousFeatureItem = previousFeature;
    },
  },
});
