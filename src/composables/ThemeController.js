import { useThemeStore } from "@/Store/ThemeStore";
import { storeToRefs } from "pinia";

//Insert Themes, Title and Theme follow same Index

const themeControl = () => {
  const themeCollection = [
    {
      id: 1,
      Name: "programming",
      Title: "Love",
      Accent: "#9747FF",
      Low: "rgba(151, 73, 207, 0.30)",
      Font: "'Source Code Pro', monospace",
      SubTitle: "love",
      Feature: "default-feature",
      FeatureItem: [
        "feature-programming-1",
        "feature-programming-2",
        "feature-programming-3",
        "feature-programming-4",
        "feature-programming-5",
      ],
    },
    {
      id: 2,
      Name: "technology",
      Title: "Love",
      Accent: "#879FB5",
      Low: "rgba(135, 159, 181, 0.30)",
      Font: "'Orbitron', sans-serif",
      SubTitle: "think",
      Feature: "default-feature",
      FeatureItem: [
        "feature-technology-1",
        "feature-technology-2",
        "feature-technology-3",
        "feature-technology-4",
        "feature-technology-5",
      ],
    },
    {
      id: 3,
      Name: "vuejs",
      Title: "Love",
      Accent: "#41B883",
      Low: "rgba(65, 184, 131, 0.30)",
      Font: "'Josefin-Sans', sans-serif",
      SubTitle: "speak",
      Feature: "vuejs-feature",
      FeatureItem: ["feature-vue-1", "feature-vue-2"],
    },
    {
      id: 4,
      Name: "japan",
      Title: "Love",
      Accent: "#D71414",
      Low: "rgba(215, 20, 20, 0.30)",
      Font: "'Unbounded', cursive",
      SubTitle: "aspire",
      Feature: "japan-feature",
      FeatureItem: [
        "feature-japan-1",
        "feature-japan-2",
        "feature-japan-3",
        "feature-japan-4",
        "feature-japan-5",
        "feature-japan-7",
        "feature-japan-8",
      ],
    },
    {
      id: 5,
      Name: "coffee",
      Title: "Love",
      Accent: "#AA7A44",
      Low: "rgba(170, 122, 68, 0.30)",
      Font: "'Irish Grover', cursive",
      SubTitle: "addicted",
      Feature: "default-feature",
      FeatureItem: [
        "feature-coffee-1",
        "feature-coffee-2",
        "feature-coffee-3",
        "feature-coffee-4",
      ],
    },
    {
      id: 6,
      Name: "art",
      Title: "Love",
      Accent: "#5CBBBC",
      // Accent: "#218DC8",
      Low: "rgba(92, 186, 188, 0.5);",
      // Low: "rgba(33, 141, 200, 0.50)",
      Font: "'Yeon Sung', cursive",
      SubTitle: "live",
      Feature: "default-feature",
      FeatureItem: [
        "feature-art-1",
        "feature-art-2",
        "feature-art-3",
        "feature-art-4",
        "feature-art-5",
        "feature-art-6",
      ],
    },
    {
      id: 7,
      Name: "space",
      Title: "Love",
      Accent: "#945E37",
      Low: "rgba(148, 94, 55, 0.30)",
      Font: "'Roboto', sans-serif",
      SubTitle: "dream",
      Feature: "default-feature",
      FeatureItem: ["feature-space-1", "feature-space-2", "feature-space-4"],
    },
  ];

  const store = useThemeStore();

  let themeIndex = null;

  const searchIndex = () => {
    let number = Math.floor(Math.random() * themeCollection.length) + 1;
    if (
      number === store.previousTheme ||
      number === store.secondPreviousTheme
    ) {
      console.log(`I got the same ${number}... Reloading`);
      searchIndex();
      return;
    } else {
      console.log(`Good number = ${number}`);
      themeIndex = number;
      store.setPrevious(number);
      return;
    }
  };
  searchIndex();

  const searchTheme = themeCollection.find((theme) => theme.id === themeIndex);
  // const searchTheme = themeCollection.find((theme) => theme.id === 6);

  const searchFeatureItem = () => {
    const selectedTheme = searchTheme;
    let number = Math.floor(Math.random() * searchTheme.FeatureItem.length);
    store.setFeatureItem(selectedTheme.FeatureItem[number]);
    console.log(searchTheme);
    console.log(store.themeFeatureItem);
  };
  searchFeatureItem();

  store.setTheme(searchTheme.Name);
  store.setThemeAccent(searchTheme.Accent);
  store.setThemeLow(searchTheme.Low);
  store.setThemeBG(searchTheme.BG);
  store.setSubTitle(searchTheme.SubTitle);
  store.setFont(searchTheme.Font);
  store.setFeature(searchTheme.Feature);
};

export default themeControl;
