import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    presentTab: 2,
  }),
  actions: {
    setPresentTabLeft() {
      if (this.presentTab === 1) {
        this.presentTab = 3;
      } else {
        this.presentTab--;
      }
    },
    setPresentTabRight() {
      if (this.presentTab === 3) {
        this.presentTab = 1;
        // return;
      } else {
        this.presentTab++;
      }
    },
  },
});

// actions: {
//   setPresentTabLeft(tab) {
//     if (tab === "left" && this.presentTab === 1) {
//       this.presentTab = 3;
//     } else {
//       this.presentTab--;
//     }
//   },
//   setPresentTabRight(tab) {
//     if (tab === "right" && this.presentTab === 3) {
//       this.presentTab = 1;
//       // return;
//     } else {
//       this.presentTab++;
//     }
//   },
// },
// });
