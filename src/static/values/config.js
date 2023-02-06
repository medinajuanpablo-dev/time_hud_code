import projectData from "../../../package.json";
import {
  BREAKPOINTS as BPK,
  ACTIVITY_CATEGORIES as ACK,
  PERIOD_TYPES as PTK,
} from "./keys";

export const LOCAL_STORAGE_NAME = "timeHUDState";
export const STORED_VERSION_NAME = "timeHUDVersion";

export const VERSION = projectData.version;

export const BREAKPOINTS_WIDTHS = {
  [BPK.MONITOR]: 1500,
  [BPK.WIDE_LAPTOP]: 1280,
  [BPK.LAPTOP]: 1024,
  [BPK.HORIZONTAL_TABLET]: 768,
  [BPK.VERTICAL_TABLET]: 500,
  [BPK.PHONE]: 350,
  [BPK.SMALL_PHONE]: 0,
};

export const CATEGORIES_NAMES = {
  [ACK.SANA]: "Sana",
  [ACK.PROY]: "Proy.",
  [ACK.BICI]: "Bici",
  [ACK.TD]: "T.D.",
  [ACK.ENTR]: "Entret.",
  [ACK.VIDA]: "Vida",
};

export const ALTERNATE_DAYS = {
  [PTK.STANDARD]: {
    DPR: "Día Proy. Red.",
    DSP: "Día Sin Proy.",
    DDN: "Día De Natación",
    DDD: "Día De Descanso",
    DNL: "Día No Laboral",
  },
};

export const COUNTERS_PARAMS = {
  [PTK.STANDARD]: {
    [ACK.SANA]: {
      baseMax: "2:00",
      DNL: { change: "2:00", sign: "-" },
    },
    [ACK.PROY]: {
      baseMax: "4:00",
      DPR: { change: "2:00", sign: "-" },
      DSP: { change: "4:00", sign: "-" },
    },
    [ACK.BICI]: {
      baseMax: "2:00",
      DDN: { change: "2:00", sign: "+" },
      DDD: { change: "2:00", sign: "-" },
    },
    [ACK.TD]: {
      baseMax: "2:00",
    },
    [ACK.ENTR]: {
      baseMax: "3:00",
      DNL: { change: "2:00", sign: "+" },
      DPR: { change: "2:30", sign: "+" },
      DSP: { change: "5:00", sign: "+" },
      DDN: { change: "2:00", sign: "-" },
      DDD: { change: "2:00", sign: "+" },
    },
    [ACK.VIDA]: {
      baseMax: "3:00",
    },
  },
};

export const PERIOD_TYPES_ENABLED = Object.keys(PTK).length > 1;

export const DAY_DURATION = "16:00";
