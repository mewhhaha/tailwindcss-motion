import createPlugin from "tailwindcss/plugin";
import addKeyframes from "./keyframes.js";
import addDefaults from "./defaults.js";
import { addBaseAnimations, baseAnimationsTheme } from "./baseAnimations.js";
import { addModifiers, modifiersTheme } from "./modifiers.js";
import { addPresets } from "./presets.js";

/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = ({
  matchUtilities,
  theme,
  addBase,
  addUtilities,
  addComponents,
  matchComponents,
}) => {
  addDefaults(addBase);
  addKeyframes(addBase);
  addPresets(addComponents, matchComponents, theme);
  addBaseAnimations(matchUtilities, theme);
  addModifiers(matchUtilities, addUtilities, theme);
};

/** @type {import('tailwindcss/types/config').Config}*/
const pluginConfig = {
  theme: {
    ...modifiersTheme,
    ...baseAnimationsTheme,
  },
};

export default createPlugin(pluginCreator, pluginConfig);
