/** **Enumerations of general keys used in this project.**
 *
 * These are general keys, meaning they are used in multiple and spread places.
 * Local-use keys (used in single or near-related files) are just defined where they are used, or directly used as strings. */

export const BREAKPOINTS = {
  MONITOR: "monitor", //sl (super large)
  WIDE_LAPTOP: "wideLaptop", //xl (extra large)
  LAPTOP: "laptop", //lg (large)
  HORIZONTAL_TABLET: "horizontalTablet", //md (medium)
  VERTICAL_TABLET: "verticalTablet", //sm (small)
  PHONE: "phone", //xs (extra small)
  SMALL_PHONE: "smallPhone", //ss (super small)
};

export const ACTIVITY_CATEGORIES = {
  TRABAJO: "trabajo",
  PERSONAL: "personal",
  RESEARCH: "research",
  RELAX: "relax",
};

export const INTERFACES = {
  COUNTERS: "counters",
  REGISTRY: "registry",
  NO_INTERFACE: "noInterface",
};

//Adding more than one will automatically enable the period-types interface features.
export const PERIOD_TYPES = {
  STANDARD: "standard",
};
