import observable from "../../../utils/notification";
export const controls_layout_actions = {
  updateDarkMode: (state, action) => {
    state.darkMode = action.payload;
    localStorage.setItem('theme',state.darkMode?'dark':"light")
    const msg = action.payload ? "dark mode activated" : "light mode activated";
    observable.notify({ type: "info", msg });
  },
  toggleDarkMode: (state) => {
    state.darkMode = !state.darkMode;
    localStorage.setItem('theme',state.darkMode?'dark':"light")
    const msg = state.darkMode ? "dark mode activated" : "light mode activated";
    observable.notify({ type: "info", msg });
  },
};
