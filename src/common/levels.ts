import { PicrossData } from "./types";

export const Levels: PicrossData[] = [
  {
    rotation: { x: -10, y: 60, z: 0 },
    offset: { x: 0, y: 3, z: -1.5 },
    transition: true,
    blockWidth: 80,
    blocks: [
      {
        id: 0,
        coordinate: { x: 0, y: 0, z: 0 },

        isColored: false,
        numbers: { z: { number: 2, type: 0 }, x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 1,
        coordinate: { x: 0, y: -1, z: 0 },

        isColored: true,
        numbers: { x: { number: 1, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 2,
        coordinate: { x: 0, y: 0, z: 1 },

        isColored: true,
        numbers: { z: { number: 2, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 3,
        coordinate: { x: 0, y: 0, z: 2 },

        isColored: true,
        numbers: { z: { number: 2, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 4,
        coordinate: { x: 0, y: 0, z: 3 },

        isColored: false,
        numbers: { z: { number: 2, type: 0 }, x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 5,
        coordinate: { x: 0, y: -1, z: 1 },

        isColored: false,
        numbers: { x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 6,
        coordinate: { x: 0, y: -1, z: 2 },

        isColored: false,
        numbers: { x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 7,
        coordinate: { x: 0, y: -1, z: 3 },

        isColored: true,
        numbers: { x: { number: 1, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 8,
        coordinate: { x: 0, y: -2, z: 3 },

        isColored: true,
        numbers: { x: { number: 1, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 9,
        coordinate: { x: 0, y: -2, z: 2 },

        isColored: false,
        numbers: { x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 10,
        coordinate: { x: 0, y: -2, z: 0 },

        isColored: true,
        numbers: { x: { number: 1, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 11,
        coordinate: { x: 0, y: -2, z: 1 },

        isColored: false,
        numbers: { x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 12,
        coordinate: { x: 0, y: -3, z: 0 },

        isColored: false,
        numbers: { z: { number: 2, type: 0 }, x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 13,
        coordinate: { x: 0, y: -3, z: 1 },

        isColored: true,
        numbers: { z: { number: 2, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 14,
        coordinate: { x: 0, y: -3, z: 2 },

        isColored: true,
        numbers: { z: { number: 2, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 15,
        coordinate: { x: 0, y: -3, z: 3 },

        isColored: false,
        numbers: { x: { number: 0, type: 0 }, z: { number: 2, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 16,
        coordinate: { x: 0, y: -4, z: 3 },

        isColored: true,
        numbers: { x: { number: 1, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 17,
        coordinate: { x: 0, y: -4, z: 2 },

        isColored: false,
        numbers: { x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 18,
        coordinate: { x: 0, y: -4, z: 1 },

        isColored: false,
        numbers: { x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 19,
        coordinate: { x: 0, y: -4, z: 0 },

        isColored: true,
        numbers: { x: { number: 1, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 20,
        coordinate: { x: 0, y: -5, z: 0 },

        isColored: true,
        numbers: { x: { number: 1, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 21,
        coordinate: { x: 0, y: -5, z: 1 },

        isColored: false,
        numbers: { x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 22,
        coordinate: { x: 0, y: -5, z: 2 },

        isColored: false,
        numbers: { x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 23,
        coordinate: { x: 0, y: -5, z: 3 },

        isColored: true,
        numbers: { x: { number: 1, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 24,
        coordinate: { x: 0, y: -6, z: 3 },

        isColored: false,
        numbers: { z: { number: 2, type: 0 }, x: { number: 0, type: 0 } },
        revealedColor: "red",
      },
      {
        id: 25,
        coordinate: { x: 0, y: -6, z: 2 },

        isColored: true,
        numbers: { z: { number: 2, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 26,
        coordinate: { x: 0, y: -6, z: 1 },

        isColored: true,
        numbers: { z: { number: 2, type: 0 } },
        cannotBeDeleted: true,
        revealedColor: "#db3030",
      },
      {
        id: 27,
        coordinate: { x: 0, y: -6, z: 0 },

        isColored: false,
        numbers: { x: { number: 0, type: 0 }, z: { number: 2, type: 0 } },
        revealedColor: "red",
      },
    ],
  },
  {
    rotation: { x: -10, y: 30, z: 0 },
    offset: { x: 0, y: 0, z: 0 },
    transition: true,
    blockWidth: 50,
    blocks: [
      {
        id: 19,
        coordinate: { x: 0, y: 0, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 5, type: 0 },
          x: { number: 5, type: 0 },
          y: { number: 5, type: 1 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 1,
        coordinate: { x: 0, y: 0, z: 1 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 5, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 3, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 36,
        coordinate: { x: -1, y: 0, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: { y: { number: 3, type: 0 }, z: { number: 3, type: 0 } },
        cannotBeDeleted: true,
      },
      {
        id: 4,
        coordinate: { x: 1, y: 0, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 5, type: 0 },
          y: { number: 3, type: 0 },
          z: { number: 3, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 5,
        coordinate: { x: 0, y: 0, z: -1 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 5, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 3, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 6,
        coordinate: { x: 0, y: 1, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 5, type: 1 },
          x: { number: 3, type: 0 },
          z: { number: 3, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 7,
        coordinate: { x: 0, y: 1, z: -1 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 3, type: 0 },
          z: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 8,
        coordinate: { x: 1, y: 0, z: -1 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 3, type: 0 },
          z: { number: 3, type: 0 },
          y: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 9,
        coordinate: { x: -1, y: 0, z: -1 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 3, type: 0 },
          z: { number: 3, type: 0 },
          y: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 12,
        coordinate: { x: -1, y: 0, z: 1 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 3, type: 0 },
          z: { number: 3, type: 0 },
          y: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 14,
        coordinate: { x: 1, y: 0, z: 1 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 3, type: 0 },
          z: { number: 3, type: 0 },
          y: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 17,
        coordinate: { x: 1, y: 1, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 3, type: 0 },
          y: { number: 3, type: 0 },
          z: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 20,
        coordinate: { x: -1, y: 1, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 3, type: 0 },
          y: { number: 3, type: 0 },
          z: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 21,
        coordinate: { x: 0, y: 0, z: 2 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 5, type: 0 },
          y: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 23,
        coordinate: { x: 0, y: 0, z: -2 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 5, type: 0 },
          y: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 24,
        coordinate: { x: 2, y: 0, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 5, type: 0 },
          y: { number: 1, type: 0 },
          z: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 25,
        coordinate: { x: -2, y: 0, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 5, type: 0 },
          y: { number: 1, type: 0 },
          z: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 26,
        coordinate: { x: 0, y: 1, z: 1 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 3, type: 0 },
          z: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 27,
        coordinate: { x: 0, y: -1, z: -1 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 3, type: 0 },
          z: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 28,
        coordinate: { x: 0, y: -1, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 5, type: 0 },
          x: { number: 3, type: 0 },
          z: { number: 3, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 29,
        coordinate: { x: 1, y: -1, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 3, type: 0 },
          y: { number: 3, type: 0 },
          z: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 30,
        coordinate: { x: 0, y: -1, z: 1 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 3, type: 0 },
          z: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 31,
        coordinate: { x: -1, y: -1, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 3, type: 0 },
          y: { number: 3, type: 0 },
          z: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 32,
        coordinate: { x: 0, y: -2, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 5, type: 0 },
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 33,
        coordinate: { x: 0, y: 2, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 5, type: 0 },
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
        },
        cannotBeDeleted: true,
      },
      {
        id: 34,
        coordinate: { x: -2, y: 0, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 35,
        coordinate: { x: -1, y: 0, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 37,
        coordinate: { x: -1, y: -1, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 1, type: 0 },
        },
      },
      {
        id: 38,
        coordinate: { x: -2, y: 0, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
      {
        id: 41,
        coordinate: { x: 1, y: -1, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 1, type: 0 },
        },
      },
      {
        id: 42,
        coordinate: { x: 1, y: 0, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 44,
        coordinate: { x: -1, y: -1, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 45,
        coordinate: { x: 0, y: -1, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 3, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 46,
        coordinate: { x: 1, y: -1, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 47,
        coordinate: { x: -2, y: 0, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 48,
        coordinate: { x: -2, y: -1, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 49,
        coordinate: { x: -1, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 52,
        coordinate: { x: -1, y: -2, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 54,
        coordinate: { x: -1, y: -2, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 55,
        coordinate: { x: -2, y: -1, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 56,
        coordinate: { x: -2, y: -2, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 57,
        coordinate: { x: -2, y: -1, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 58,
        coordinate: { x: -2, y: -2, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 59,
        coordinate: { x: -2, y: -1, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 3, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 60,
        coordinate: { x: -2, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 0, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
      {
        id: 61,
        coordinate: { x: -1, y: -1, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 1, type: 0 },
        },
      },
      {
        id: 63,
        coordinate: { x: 0, y: -2, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          y: { number: 3, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 64,
        coordinate: { x: 0, y: -2, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 65,
        coordinate: { x: 1, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 66,
        coordinate: { x: 1, y: -2, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 67,
        coordinate: { x: 1, y: -2, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 68,
        coordinate: { x: -2, y: 1, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 69,
        coordinate: { x: -2, y: 1, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 3, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 70,
        coordinate: { x: -2, y: 1, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 71,
        coordinate: { x: -2, y: 1, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 72,
        coordinate: { x: -1, y: 1, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 73,
        coordinate: { x: 0, y: 1, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 3, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 74,
        coordinate: { x: 1, y: 1, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 75,
        coordinate: { x: 1, y: 1, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 1, type: 0 },
        },
      },
      {
        id: 76,
        coordinate: { x: -1, y: 1, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 1, type: 0 },
        },
      },
      {
        id: 77,
        coordinate: { x: -1, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 78,
        coordinate: { x: -1, y: 2, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 79,
        coordinate: { x: -2, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 0, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
      {
        id: 80,
        coordinate: { x: -2, y: 2, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 81,
        coordinate: { x: -1, y: 1, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 1, type: 0 },
        },
      },
      {
        id: 82,
        coordinate: { x: 0, y: 1, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 3, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 83,
        coordinate: { x: -1, y: 0, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 84,
        coordinate: { x: -2, y: 0, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
      {
        id: 85,
        coordinate: { x: -2, y: 1, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 86,
        coordinate: { x: -1, y: 1, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 87,
        coordinate: { x: -2, y: 2, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 88,
        coordinate: { x: -1, y: 2, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 89,
        coordinate: { x: 0, y: 2, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          y: { number: 3, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 90,
        coordinate: { x: -1, y: 2, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 91,
        coordinate: { x: 0, y: 2, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          y: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 92,
        coordinate: { x: 0, y: -1, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 3, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 93,
        coordinate: { x: -1, y: -1, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 94,
        coordinate: { x: -2, y: -1, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 95,
        coordinate: { x: 1, y: -1, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 1, type: 0 },
        },
      },
      {
        id: 96,
        coordinate: { x: 1, y: -2, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 97,
        coordinate: { x: 0, y: -2, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          y: { number: 3, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 98,
        coordinate: { x: -1, y: -2, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 99,
        coordinate: { x: -2, y: -2, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 100,
        coordinate: { x: 1, y: -2, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 101,
        coordinate: { x: 0, y: -2, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 102,
        coordinate: { x: -1, y: -2, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 103,
        coordinate: { x: -2, y: -2, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 104,
        coordinate: { x: -2, y: 2, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 105,
        coordinate: { x: -2, y: 2, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 106,
        coordinate: { x: -1, y: 2, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 107,
        coordinate: { x: 1, y: 2, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 108,
        coordinate: { x: 0, y: 2, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          y: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 109,
        coordinate: { x: 0, y: 2, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          y: { number: 3, type: 0 },
          x: { number: 0, type: 0 },
        },
      },
      {
        id: 110,
        coordinate: { x: 1, y: 2, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 111,
        coordinate: { x: 1, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 112,
        coordinate: { x: 1, y: 2, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 113,
        coordinate: { x: 1, y: 2, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 114,
        coordinate: { x: 1, y: 1, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 115,
        coordinate: { x: 1, y: 1, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 1, type: 0 },
        },
      },
      {
        id: 116,
        coordinate: { x: 1, y: -1, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 117,
        coordinate: { x: 1, y: 0, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 3, type: 0 },
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 118,
        coordinate: { x: 2, y: 0, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 119,
        coordinate: { x: 2, y: 1, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 120,
        coordinate: { x: 2, y: 2, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 121,
        coordinate: { x: 2, y: -2, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 122,
        coordinate: { x: 2, y: -2, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 123,
        coordinate: { x: 2, y: -1, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 124,
        coordinate: { x: 2, y: 0, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
      {
        id: 125,
        coordinate: { x: 2, y: 1, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 126,
        coordinate: { x: 2, y: 2, z: -2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 127,
        coordinate: { x: 2, y: -1, z: -1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 128,
        coordinate: { x: 2, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 0, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
      {
        id: 129,
        coordinate: { x: 2, y: -2, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 130,
        coordinate: { x: 2, y: -2, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 131,
        coordinate: { x: 2, y: -1, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 3, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 132,
        coordinate: { x: 2, y: -1, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 133,
        coordinate: { x: 2, y: -1, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 134,
        coordinate: { x: 2, y: 0, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 135,
        coordinate: { x: 2, y: 0, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
      {
        id: 136,
        coordinate: { x: 2, y: 1, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 137,
        coordinate: { x: 2, y: 1, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 138,
        coordinate: { x: 2, y: 2, z: 1 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          z: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 139,
        coordinate: { x: 2, y: 2, z: 2 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          x: { number: 0, type: 0 },
          z: { number: 0, type: 0 },
          y: { number: 0, type: 0 },
        },
      },
      {
        id: 140,
        coordinate: { x: 2, y: 1, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          x: { number: 3, type: 0 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 141,
        coordinate: { x: 2, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#e6ff00",
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 0, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
    ],
  },
  {
    rotation: { x: -20, y: 30, z: 0 },
    offset: { x: 0, y: 0, z: 0 },
    transition: true,
    blockWidth: 50,
    blocks: [
      {
        id: 4,
        coordinate: { x: 0, y: -1, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, y: { number: 6, type: 1 } },
        cannotBeDeleted: false,
      },
      {
        id: 8,
        coordinate: { x: 0, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 6, type: 1 } },
        cannotBeDeleted: false,
      },
      {
        id: 10,
        coordinate: { x: 0, y: -3, z: -1 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 11,
        coordinate: { x: -1, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { y: { number: 5, type: 1 } },
      },
      {
        id: 17,
        coordinate: { x: 0, y: -3, z: 1 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 18,
        coordinate: { x: 0, y: -3, z: 2 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { x: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 19,
        coordinate: { x: -1, y: -3, z: 1 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 20,
        coordinate: { x: 1, y: -3, z: 1 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 21,
        coordinate: { x: 1, y: -3, z: -1 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 22,
        coordinate: { x: -1, y: -3, z: -1 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 24,
        coordinate: { x: 2, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { z: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 25,
        coordinate: { x: -2, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { z: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 58,
        coordinate: { x: 0, y: 3, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, y: { number: 6, type: 1 } },
        cannotBeDeleted: false,
      },
      {
        id: 59,
        coordinate: { x: 0, y: 4, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, y: { number: 6, type: 1 } },
        cannotBeDeleted: false,
      },
      {
        id: 61,
        coordinate: { x: -1, y: 2, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 5, type: 1 },
          z: { number: 1, type: 0 },
        },
        cannotBeDeleted: false,
      },
      {
        id: 62,
        coordinate: { x: -1, y: 1, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 5, type: 1 },
          z: { number: 1, type: 0 },
        },
        cannotBeDeleted: false,
      },
      {
        id: 63,
        coordinate: { x: 0, y: -3, z: -2 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { x: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 64,
        coordinate: { x: 0, y: -4, z: -1 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          z: { number: 7, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 2, type: 0 },
        },
      },
      {
        id: 65,
        coordinate: { x: 0, y: -4, z: -2 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          z: { number: 7, type: 0 },
          y: { number: 2, type: 0 },
          x: { number: 3, type: 2 },
        },
      },
      {
        id: 67,
        coordinate: { x: -1, y: -4, z: -1 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          z: { number: 3, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 2, type: 0 },
        },
      },
      {
        id: 69,
        coordinate: { x: -2, y: -4, z: -2 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 3, type: 2 },
          x: { number: 3, type: 2 },
        },
      },
      {
        id: 70,
        coordinate: { x: 1, y: -4, z: -1 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          z: { number: 3, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 2, type: 0 },
        },
      },
      {
        id: 72,
        coordinate: { x: 2, y: -4, z: -2 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 3, type: 2 },
          x: { number: 3, type: 2 },
        },
      },
      {
        id: 73,
        coordinate: { x: 0, y: -4, z: 0 },

        isColored: true,
        revealedColor: "#e6ff00",
        selectedForAction: false,
        numbers: {
          y: { number: 6, type: 1 },
          z: { number: 7, type: 0 },
          x: { number: 7, type: 0 },
        },
        cannotBeDeleted: false,
      },
      {
        id: 74,
        coordinate: { x: 1, y: -4, z: 0 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          x: { number: 7, type: 0 },
          z: { number: 3, type: 0 },
          y: { number: 2, type: 0 },
        },
      },
      {
        id: 75,
        coordinate: { x: -1, y: -4, z: 0 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          x: { number: 7, type: 0 },
          z: { number: 3, type: 0 },
          y: { number: 5, type: 1 },
        },
      },
      {
        id: 76,
        coordinate: { x: -1, y: -4, z: 1 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          z: { number: 3, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 2, type: 0 },
        },
      },
      {
        id: 77,
        coordinate: { x: 0, y: -4, z: 1 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          z: { number: 7, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 2, type: 0 },
        },
      },
      {
        id: 78,
        coordinate: { x: 1, y: -4, z: 1 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          z: { number: 3, type: 0 },
          x: { number: 3, type: 0 },
          y: { number: 2, type: 0 },
        },
      },
      {
        id: 80,
        coordinate: { x: -2, y: -4, z: 2 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 3, type: 2 },
          x: { number: 3, type: 2 },
        },
      },
      {
        id: 82,
        coordinate: { x: 2, y: -4, z: 2 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 3, type: 2 },
          x: { number: 3, type: 2 },
        },
      },
      {
        id: 83,
        coordinate: { x: 0, y: -4, z: 2 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          z: { number: 7, type: 0 },
          y: { number: 2, type: 0 },
          x: { number: 3, type: 2 },
        },
      },
      {
        id: 85,
        coordinate: { x: -2, y: -4, z: 0 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          x: { number: 7, type: 0 },
          y: { number: 2, type: 0 },
          z: { number: 3, type: 2 },
        },
      },
      {
        id: 87,
        coordinate: { x: 2, y: -4, z: 0 },

        isColored: true,
        revealedColor: "#fff",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: {
          x: { number: 7, type: 0 },
          y: { number: 2, type: 0 },
          z: { number: 3, type: 2 },
        },
      },
      {
        id: 89,
        coordinate: { x: 1, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        cannotBeDeleted: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 90,
        coordinate: { x: -1, y: 0, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 5, type: 1 },
          z: { number: 1, type: 0 },
        },
        cannotBeDeleted: false,
      },
      {
        id: 91,
        coordinate: { x: 1, y: -4, z: 2 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 3, type: 0 }, x: { number: 3, type: 2 } },
      },
      {
        id: 92,
        coordinate: { x: 1, y: -4, z: 3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 3, type: 0 } },
      },
      {
        id: 93,
        coordinate: { x: -1, y: -4, z: 2 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 3, type: 0 }, x: { number: 3, type: 2 } },
      },
      {
        id: 94,
        coordinate: { x: -1, y: -4, z: 3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 3, type: 0 } },
      },
      {
        id: 95,
        coordinate: { x: -2, y: -4, z: 3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 3, type: 2 } },
      },
      {
        id: 96,
        coordinate: { x: -2, y: -4, z: 1 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 0 }, z: { number: 3, type: 2 } },
      },
      {
        id: 97,
        coordinate: { x: -3, y: -4, z: 1 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 3, type: 0 } },
      },
      {
        id: 98,
        coordinate: { x: -2, y: -4, z: -1 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 0 }, z: { number: 3, type: 2 } },
      },
      {
        id: 99,
        coordinate: { x: -3, y: -4, z: -1 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 3, type: 0 } },
      },
      {
        id: 100,
        coordinate: { x: -1, y: -4, z: -3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 3, type: 0 } },
      },
      {
        id: 101,
        coordinate: { x: -1, y: -4, z: -2 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 3, type: 0 }, x: { number: 3, type: 2 } },
      },
      {
        id: 102,
        coordinate: { x: -2, y: -4, z: -3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 3, type: 2 } },
      },
      {
        id: 103,
        coordinate: { x: -3, y: -4, z: -2 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 3, type: 2 } },
      },
      {
        id: 104,
        coordinate: { x: -3, y: -4, z: -3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 1, type: 0 } },
      },
      {
        id: 105,
        coordinate: { x: -3, y: -4, z: 2 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 3, type: 2 } },
      },
      {
        id: 107,
        coordinate: { x: -3, y: -4, z: 3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 1, type: 0 } },
      },
      {
        id: 108,
        coordinate: { x: 2, y: -4, z: 3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 3, type: 2 } },
      },
      {
        id: 109,
        coordinate: { x: 2, y: -4, z: 1 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 0 }, z: { number: 3, type: 2 } },
      },
      {
        id: 110,
        coordinate: { x: 3, y: -4, z: 1 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 3, type: 0 } },
      },
      {
        id: 111,
        coordinate: { x: 3, y: -4, z: 2 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 3, type: 2 } },
      },
      {
        id: 112,
        coordinate: { x: 3, y: -4, z: 3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 1, type: 0 } },
      },
      {
        id: 113,
        coordinate: { x: 2, y: -4, z: -1 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 0 }, z: { number: 3, type: 2 } },
      },
      {
        id: 115,
        coordinate: { x: 3, y: -4, z: -2 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 3, type: 2 } },
      },
      {
        id: 116,
        coordinate: { x: 1, y: -4, z: -3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 3, type: 0 } },
      },
      {
        id: 117,
        coordinate: { x: 1, y: -4, z: -2 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { z: { number: 3, type: 0 }, x: { number: 3, type: 2 } },
      },
      {
        id: 118,
        coordinate: { x: 2, y: -4, z: -3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 3, type: 2 } },
      },
      {
        id: 119,
        coordinate: { x: 3, y: -4, z: -3 },

        isColored: false,
        revealedColor: "#fff",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 1, type: 0 } },
      },
      {
        id: 120,
        coordinate: { x: -1, y: -3, z: -2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 } },
      },
      {
        id: 121,
        coordinate: { x: -2, y: -3, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 } },
      },
      {
        id: 122,
        coordinate: { x: -2, y: -3, z: -2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
      {
        id: 123,
        coordinate: { x: -3, y: -3, z: -2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 0, type: 0 } },
      },
      {
        id: 124,
        coordinate: { x: -3, y: -3, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 } },
      },
      {
        id: 125,
        coordinate: { x: -3, y: -3, z: -3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 0, type: 0 }, z: { number: 0, type: 0 } },
      },
      {
        id: 126,
        coordinate: { x: -2, y: -3, z: -3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 0, type: 0 } },
      },
      {
        id: 127,
        coordinate: { x: -1, y: -3, z: -3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 0, type: 0 } },
      },
      {
        id: 129,
        coordinate: { x: 1, y: -3, z: -3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 0, type: 0 } },
      },
      {
        id: 130,
        coordinate: { x: 2, y: -3, z: -3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 0, type: 0 } },
      },
      {
        id: 131,
        coordinate: { x: 3, y: -3, z: -3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 }, x: { number: 0, type: 0 } },
      },
      {
        id: 132,
        coordinate: { x: 1, y: -3, z: -2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 } },
      },
      {
        id: 133,
        coordinate: { x: 2, y: -3, z: -2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
      {
        id: 134,
        coordinate: { x: 3, y: -3, z: -2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 0, type: 0 } },
      },
      {
        id: 135,
        coordinate: { x: 2, y: -3, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 } },
      },
      {
        id: 136,
        coordinate: { x: 3, y: -3, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 } },
      },
      {
        id: 138,
        coordinate: { x: 3, y: -3, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 } },
      },
      {
        id: 139,
        coordinate: { x: 2, y: -3, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 } },
      },
      {
        id: 140,
        coordinate: { x: 2, y: -3, z: 2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
      {
        id: 141,
        coordinate: { x: 1, y: -3, z: 2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 } },
      },
      {
        id: 142,
        coordinate: { x: 3, y: -3, z: 2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 0, type: 0 } },
      },
      {
        id: 143,
        coordinate: { x: 3, y: -3, z: 3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 }, x: { number: 0, type: 0 } },
      },
      {
        id: 144,
        coordinate: { x: 2, y: -3, z: 3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 0, type: 0 } },
      },
      {
        id: 145,
        coordinate: { x: 1, y: -3, z: 3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 0, type: 0 } },
      },
      {
        id: 147,
        coordinate: { x: -1, y: -3, z: 2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 } },
      },
      {
        id: 148,
        coordinate: { x: -1, y: -3, z: 3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 0, type: 0 } },
      },
      {
        id: 149,
        coordinate: { x: -2, y: -3, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 } },
      },
      {
        id: 150,
        coordinate: { x: -2, y: -3, z: 2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: {
          y: { number: 1, type: 0 },
          z: { number: 1, type: 0 },
          x: { number: 1, type: 0 },
        },
      },
      {
        id: 151,
        coordinate: { x: -2, y: -3, z: 3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, x: { number: 0, type: 0 } },
      },
      {
        id: 153,
        coordinate: { x: -3, y: -3, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 } },
      },
      {
        id: 154,
        coordinate: { x: -3, y: -3, z: 2 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 1, type: 0 }, z: { number: 0, type: 0 } },
      },
      {
        id: 155,
        coordinate: { x: -3, y: -3, z: 3 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 0, type: 0 }, z: { number: 0, type: 0 } },
      },
      {
        id: 156,
        coordinate: { x: 1, y: -2, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 157,
        coordinate: { x: 1, y: -1, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 158,
        coordinate: { x: 1, y: 0, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 159,
        coordinate: { x: 1, y: 1, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 160,
        coordinate: { x: 1, y: 2, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 161,
        coordinate: { x: 1, y: 3, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 162,
        coordinate: { x: 1, y: 4, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 0, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 164,
        coordinate: { x: 0, y: -1, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 165,
        coordinate: { x: 0, y: 0, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 166,
        coordinate: { x: 0, y: 1, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 167,
        coordinate: { x: 0, y: 2, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 168,
        coordinate: { x: 0, y: 3, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 169,
        coordinate: { x: 0, y: 4, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 0, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 170,
        coordinate: { x: -1, y: 2, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 171,
        coordinate: { x: -1, y: 0, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 172,
        coordinate: { x: -1, y: 1, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 184,
        coordinate: { x: 1, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
        selectedForAction: false,
      },
      {
        id: 185,
        coordinate: { x: 1, y: -1, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
        selectedForAction: false,
      },
      {
        id: 187,
        coordinate: { x: 1, y: 1, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
        selectedForAction: false,
      },
      {
        id: 188,
        coordinate: { x: 1, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
        selectedForAction: false,
      },
      {
        id: 189,
        coordinate: { x: 1, y: 3, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
        selectedForAction: false,
      },
      {
        id: 190,
        coordinate: { x: 1, y: 4, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
        selectedForAction: false,
      },
      {
        id: 191,
        coordinate: { x: 1, y: -2, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 192,
        coordinate: { x: 1, y: -1, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 193,
        coordinate: { x: 1, y: 0, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 194,
        coordinate: { x: 1, y: 1, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 195,
        coordinate: { x: 1, y: 2, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 196,
        coordinate: { x: 1, y: 3, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 197,
        coordinate: { x: 1, y: 4, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 0, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 205,
        coordinate: { x: -1, y: 3, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 5, type: 1 },
          z: { number: 0, type: 0 },
        },
        selectedForAction: false,
      },
      {
        id: 206,
        coordinate: { x: -1, y: 4, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 5, type: 1 },
          z: { number: 0, type: 0 },
        },
        selectedForAction: false,
      },
      {
        id: 207,
        coordinate: { x: -1, y: -2, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 208,
        coordinate: { x: -1, y: -1, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 209,
        coordinate: { x: -1, y: 0, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 210,
        coordinate: { x: -1, y: 1, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 211,
        coordinate: { x: -1, y: 2, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 212,
        coordinate: { x: -1, y: 3, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 213,
        coordinate: { x: -1, y: 4, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: {
          z: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 2, type: 0 },
        },
      },
      {
        id: 214,
        coordinate: { x: -1, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 5, type: 1 },
          z: { number: 0, type: 0 },
        },
        selectedForAction: false,
      },
      {
        id: 215,
        coordinate: { x: -1, y: -1, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: {
          x: { number: 1, type: 0 },
          y: { number: 5, type: 1 },
          z: { number: 0, type: 0 },
        },
        selectedForAction: false,
      },
      {
        id: 216,
        coordinate: { x: -1, y: -2, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 217,
        coordinate: { x: -1, y: -1, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 218,
        coordinate: { x: -1, y: 3, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { z: { number: 0, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 219,
        coordinate: { x: -1, y: 4, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: {
          z: { number: 0, type: 0 },
          x: { number: 0, type: 0 },
          y: { number: 2, type: 0 },
        },
      },
      {
        id: 220,
        coordinate: { x: 0, y: 0, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 1, type: 0 }, y: { number: 6, type: 1 } },
        selectedForAction: false,
      },
      {
        id: 221,
        coordinate: { x: 0, y: 1, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 1, type: 0 }, y: { number: 6, type: 1 } },
        selectedForAction: false,
      },
      {
        id: 222,
        coordinate: { x: 0, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 1, type: 0 }, y: { number: 6, type: 1 } },
        selectedForAction: false,
      },
      {
        id: 223,
        coordinate: { x: 1, y: 0, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 1, type: 0 }, y: { number: 2, type: 0 } },
        selectedForAction: false,
      },
      {
        id: 224,
        coordinate: { x: 0, y: -2, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 225,
        coordinate: { x: 0, y: -1, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 226,
        coordinate: { x: 0, y: 0, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 227,
        coordinate: { x: 0, y: 1, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 228,
        coordinate: { x: 0, y: 2, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 229,
        coordinate: { x: 0, y: 3, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 0 } },
      },
      {
        id: 230,
        coordinate: { x: 0, y: 4, z: -1 },

        isColored: false,
        revealedColor: "#25771c",
        selectedForAction: false,
        numbers: { x: { number: 0, type: 0 }, y: { number: 2, type: 0 } },
      },
      {
        id: 231,
        coordinate: { x: 3, y: -4, z: -1 },

        isColored: false,
        revealedColor: "#fff",
        numbers: { x: { number: 3, type: 0 }, z: { number: 1, type: 0 } },
      },
      {
        id: 232,
        coordinate: { x: 3, y: -3, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { z: { number: 0, type: 0 } },
      },
      {
        id: 233,
        coordinate: { x: 3, y: -4, z: 0 },

        isColored: true,
        revealedColor: "#fff",
        numbers: { x: { number: 7, type: 0 } },
        cannotBeDeleted: false,
      },
      {
        id: 234,
        coordinate: { x: 0, y: -3, z: 3 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 0, type: 0 } },
      },
      {
        id: 235,
        coordinate: { x: 0, y: -4, z: 3 },

        isColored: true,
        revealedColor: "#fff",
        numbers: { z: { number: 7, type: 0 } },
        cannotBeDeleted: false,
      },
      {
        id: 237,
        coordinate: { x: 0, y: -3, z: -3 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { x: { number: 0, type: 0 } },
      },
      {
        id: 238,
        coordinate: { x: 0, y: -4, z: -3 },

        isColored: true,
        revealedColor: "#fff",
        numbers: { z: { number: 7, type: 0 } },
        cannotBeDeleted: false,
      },
      {
        id: 239,
        coordinate: { x: -3, y: -3, z: 0 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { z: { number: 0, type: 0 } },
      },
      {
        id: 240,
        coordinate: { x: -3, y: -4, z: 0 },

        isColored: true,
        revealedColor: "#fff",
        numbers: { x: { number: 7, type: 0 } },
        cannotBeDeleted: false,
      },
      {
        id: 241,
        coordinate: { x: 0, y: -2, z: 0 },

        isColored: true,
        revealedColor: "#25771c",
        numbers: { y: { number: 6, type: 1 } },
        cannotBeDeleted: false,
      },
      {
        id: 242,
        coordinate: { x: 0, y: -2, z: 1 },

        isColored: false,
        revealedColor: "#25771c",
        numbers: { y: { number: 2, type: 0 } },
      },
    ],
  },
  {
    rotation: { x: -10, y: 30, z: 0 },
    offset: { x: 0, y: 0, z: 0 },
    transition: true,
    blockWidth: 50,
    blocks: [
      {
        id: 1,
        coordinate: { x: 0, y: 0, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: {
          x: { number: 5, type: 2 },
          y: { number: 5, type: 2 },
          z: { number: 1, type: 0 },
        },
      },
      {
        id: 3,
        coordinate: { x: 1, y: -1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 6, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 5,
        coordinate: { x: -1, y: -1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 6, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 7,
        coordinate: { x: 1, y: 1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 6, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 9,
        coordinate: { x: -1, y: 1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 6, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 11,
        coordinate: { x: -2, y: 2, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 13,
        coordinate: { x: 2, y: 2, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 15,
        coordinate: { x: 2, y: -2, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 17,
        coordinate: { x: -2, y: -2, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 19,
        coordinate: { x: -3, y: -1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 7, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 20,
        coordinate: { x: -3, y: 0, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 7, type: 2 }, x: { number: 5, type: 2 } },
      },
      {
        id: 21,
        coordinate: { x: -3, y: 1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 7, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 23,
        coordinate: { x: 3, y: -1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 7, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 24,
        coordinate: { x: 3, y: 0, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 7, type: 2 }, x: { number: 5, type: 2 } },
      },
      {
        id: 25,
        coordinate: { x: 3, y: 1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 7, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 27,
        coordinate: { x: 1, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: {
          x: { number: 7, type: 2 },
          y: { number: 6, type: 2 },
          z: { number: 1, type: 0 },
        },
      },
      {
        id: 28,
        coordinate: { x: 0, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: {
          x: { number: 7, type: 2 },
          y: { number: 5, type: 2 },
          z: { number: 1, type: 0 },
        },
      },
      {
        id: 29,
        coordinate: { x: -1, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: {
          x: { number: 7, type: 2 },
          y: { number: 6, type: 2 },
          z: { number: 1, type: 0 },
        },
      },
      {
        id: 31,
        coordinate: { x: 1, y: 3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 7, type: 2 }, y: { number: 6, type: 2 } },
      },
      {
        id: 32,
        coordinate: { x: 0, y: 3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 7, type: 2 }, y: { number: 5, type: 2 } },
      },
      {
        id: 33,
        coordinate: { x: -1, y: 3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 7, type: 2 }, y: { number: 6, type: 2 } },
      },
      {
        id: 34,
        coordinate: { x: 0, y: -4, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: {
          x: { number: 3, type: 2 },
          y: { number: 5, type: 2 },
          z: { number: 1, type: 0 },
        },
      },
      {
        id: 36,
        coordinate: { x: -1, y: -5, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 6, type: 2 } },
      },
      {
        id: 37,
        coordinate: { x: 1, y: -5, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 6, type: 2 } },
      },
      {
        id: 38,
        coordinate: { x: 4, y: 0, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 3, type: 2 }, x: { number: 5, type: 2 } },
      },
      {
        id: 40,
        coordinate: { x: 5, y: -1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 6, type: 2 } },
      },
      {
        id: 41,
        coordinate: { x: 5, y: 1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 6, type: 2 } },
      },
      {
        id: 42,
        coordinate: { x: 0, y: 4, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 2 }, y: { number: 5, type: 2 } },
      },
      {
        id: 45,
        coordinate: { x: 1, y: 5, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 6, type: 2 } },
      },
      {
        id: 46,
        coordinate: { x: -1, y: 5, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 6, type: 2 } },
      },
      {
        id: 47,
        coordinate: { x: -4, y: 0, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 3, type: 2 }, x: { number: 5, type: 2 } },
      },
      {
        id: 49,
        coordinate: { x: -5, y: -1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 6, type: 2 } },
      },
      {
        id: 50,
        coordinate: { x: -5, y: 1, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 6, type: 2 } },
      },
      {
        id: 52,
        coordinate: { x: -3, y: 3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 7, type: 2 }, x: { number: 7, type: 2 } },
      },
      {
        id: 54,
        coordinate: { x: -3, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 7, type: 2 }, x: { number: 7, type: 2 } },
      },
      {
        id: 56,
        coordinate: { x: 3, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 7, type: 2 }, x: { number: 7, type: 2 } },
      },
      {
        id: 58,
        coordinate: { x: 3, y: 3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 7, type: 2 }, x: { number: 7, type: 2 } },
      },
      {
        id: 59,
        coordinate: { x: -4, y: 3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 3, type: 2 }, x: { number: 7, type: 2 } },
      },
      {
        id: 60,
        coordinate: { x: -3, y: 4, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 2 }, y: { number: 7, type: 2 } },
      },
      {
        id: 61,
        coordinate: { x: 3, y: -4, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 2 }, y: { number: 7, type: 2 } },
      },
      {
        id: 62,
        coordinate: { x: 4, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 3, type: 2 }, x: { number: 7, type: 2 } },
      },
      {
        id: 63,
        coordinate: { x: -3, y: -4, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 2 }, y: { number: 7, type: 2 } },
      },
      {
        id: 64,
        coordinate: { x: -4, y: -3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 3, type: 2 }, x: { number: 7, type: 2 } },
      },
      {
        id: 65,
        coordinate: { x: 4, y: 3, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 3, type: 2 }, x: { number: 7, type: 2 } },
      },
      {
        id: 66,
        coordinate: { x: 3, y: 4, z: 0 },

        isColored: true,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 2 }, y: { number: 7, type: 2 } },
      },
      {
        id: 67,
        coordinate: { x: -2, y: -1, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 6, type: 2 } },
      },
      {
        id: 68,
        coordinate: { x: -2, y: 0, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: {
          y: { number: 2, type: 1 },
          x: { number: 5, type: 2 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 69,
        coordinate: { x: -2, y: 1, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 6, type: 2 } },
      },
      {
        id: 70,
        coordinate: { x: -1, y: 0, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: {
          x: { number: 5, type: 2 },
          y: { number: 6, type: 2 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 71,
        coordinate: { x: -1, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 6, type: 2 } },
      },
      {
        id: 72,
        coordinate: { x: 0, y: 1, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 5, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 73,
        coordinate: { x: 0, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 5, type: 2 } },
      },
      {
        id: 74,
        coordinate: { x: 1, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 6, type: 2 } },
      },
      {
        id: 75,
        coordinate: { x: 1, y: 0, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 5, type: 2 }, y: { number: 6, type: 2 } },
      },
      {
        id: 76,
        coordinate: { x: 2, y: 0, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 5, type: 2 } },
      },
      {
        id: 77,
        coordinate: { x: 2, y: 1, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 6, type: 2 } },
      },
      {
        id: 78,
        coordinate: { x: 2, y: -1, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 6, type: 2 } },
      },
      {
        id: 79,
        coordinate: { x: -1, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 6, type: 2 } },
      },
      {
        id: 80,
        coordinate: { x: 0, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 5, type: 2 } },
      },
      {
        id: 81,
        coordinate: { x: 0, y: -1, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 5, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 82,
        coordinate: { x: 1, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 6, type: 2 } },
      },
      {
        id: 83,
        coordinate: { x: 1, y: -4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 2 }, y: { number: 6, type: 2 } },
      },
      {
        id: 84,
        coordinate: { x: 2, y: -5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 85,
        coordinate: { x: 2, y: -4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 3, type: 2 } },
      },
      {
        id: 86,
        coordinate: { x: 3, y: -5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 7, type: 2 } },
      },
      {
        id: 87,
        coordinate: { x: 4, y: -4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 2 }, y: { number: 3, type: 2 } },
      },
      {
        id: 88,
        coordinate: { x: 4, y: -5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 3, type: 2 } },
      },
      {
        id: 89,
        coordinate: { x: 5, y: -5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 90,
        coordinate: { x: 5, y: -4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 3, type: 2 } },
      },
      {
        id: 91,
        coordinate: { x: 5, y: -3, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 7, type: 2 } },
      },
      {
        id: 92,
        coordinate: { x: 5, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 2, type: 1 } },
      },
      {
        id: 93,
        coordinate: { x: 4, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 3, type: 2 } },
      },
      {
        id: 94,
        coordinate: { x: 3, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 7, type: 2 } },
      },
      {
        id: 95,
        coordinate: { x: 2, y: -3, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 7, type: 2 } },
      },
      {
        id: 96,
        coordinate: { x: 4, y: -1, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 3, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 97,
        coordinate: { x: 5, y: 0, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: {
          y: { number: 2, type: 1 },
          x: { number: 5, type: 2 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 98,
        coordinate: { x: 4, y: 1, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 3, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 99,
        coordinate: { x: 3, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: {
          x: { number: 2, type: 1 },
          y: { number: 7, type: 2 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 100,
        coordinate: { x: 4, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 2, type: 1 }, y: { number: 3, type: 2 } },
      },
      {
        id: 101,
        coordinate: { x: 5, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 2, type: 1 } },
      },
      {
        id: 102,
        coordinate: { x: 5, y: 3, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { y: { number: 2, type: 1 }, x: { number: 7, type: 2 } },
      },
      {
        id: 103,
        coordinate: { x: 4, y: 4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        selectedForAction: false,
        numbers: { x: { number: 3, type: 2 }, y: { number: 3, type: 2 } },
      },
      {
        id: 104,
        coordinate: { x: 2, y: 5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 105,
        coordinate: { x: 3, y: 5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 7, type: 2 } },
      },
      {
        id: 106,
        coordinate: { x: 4, y: 5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 3, type: 2 } },
      },
      {
        id: 107,
        coordinate: { x: 5, y: 4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 2, type: 1 }, x: { number: 3, type: 2 } },
      },
      {
        id: 108,
        coordinate: { x: 5, y: 5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 109,
        coordinate: { x: 1, y: 4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 3, type: 2 }, y: { number: 6, type: 2 } },
      },
      {
        id: 110,
        coordinate: { x: 2, y: 4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 2, type: 1 }, x: { number: 3, type: 2 } },
      },
      {
        id: 111,
        coordinate: { x: 2, y: 3, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: {
          y: { number: 2, type: 1 },
          x: { number: 7, type: 2 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 112,
        coordinate: { x: 0, y: 5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 5, type: 2 } },
      },
      {
        id: 113,
        coordinate: { x: -1, y: 4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 3, type: 2 }, y: { number: 6, type: 2 } },
      },
      {
        id: 114,
        coordinate: { x: -2, y: 3, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: {
          y: { number: 2, type: 1 },
          x: { number: 7, type: 2 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 115,
        coordinate: { x: -2, y: 4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 2, type: 1 }, x: { number: 3, type: 2 } },
      },
      {
        id: 116,
        coordinate: { x: -2, y: 5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 117,
        coordinate: { x: -4, y: 4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 3, type: 2 }, y: { number: 3, type: 2 } },
      },
      {
        id: 118,
        coordinate: { x: -4, y: 5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 3, type: 2 } },
      },
      {
        id: 119,
        coordinate: { x: -3, y: 5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 7, type: 2 } },
      },
      {
        id: 120,
        coordinate: { x: -3, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 7, type: 2 } },
      },
      {
        id: 121,
        coordinate: { x: -4, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 3, type: 2 } },
      },
      {
        id: 122,
        coordinate: { x: -4, y: 1, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 3, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 123,
        coordinate: { x: -5, y: 2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 2, type: 1 }, x: { number: 2, type: 1 } },
      },
      {
        id: 124,
        coordinate: { x: -5, y: 3, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 2, type: 1 }, x: { number: 7, type: 2 } },
      },
      {
        id: 125,
        coordinate: { x: -5, y: 4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 2, type: 1 }, x: { number: 3, type: 2 } },
      },
      {
        id: 126,
        coordinate: { x: -5, y: 5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 127,
        coordinate: { x: -5, y: 0, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: {
          y: { number: 2, type: 1 },
          x: { number: 5, type: 2 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 128,
        coordinate: { x: -4, y: -1, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 3, type: 2 }, x: { number: 6, type: 2 } },
      },
      {
        id: 129,
        coordinate: { x: -3, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: {
          x: { number: 2, type: 1 },
          y: { number: 7, type: 2 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 130,
        coordinate: { x: -4, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 3, type: 2 } },
      },
      {
        id: 131,
        coordinate: { x: -5, y: -2, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 2, type: 1 }, x: { number: 2, type: 1 } },
      },
      {
        id: 132,
        coordinate: { x: -4, y: -4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 3, type: 2 }, y: { number: 3, type: 2 } },
      },
      {
        id: 133,
        coordinate: { x: -5, y: -3, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 2, type: 1 }, x: { number: 7, type: 2 } },
      },
      {
        id: 134,
        coordinate: { x: -1, y: -4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 3, type: 2 }, y: { number: 6, type: 2 } },
      },
      {
        id: 135,
        coordinate: { x: -5, y: -4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 2, type: 1 }, x: { number: 3, type: 2 } },
      },
      {
        id: 136,
        coordinate: { x: -2, y: -5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 137,
        coordinate: { x: -3, y: -5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: {
          x: { number: 2, type: 1 },
          y: { number: 7, type: 2 },
          z: { number: 0, type: 0 },
        },
      },
      {
        id: 138,
        coordinate: { x: -4, y: -5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 3, type: 2 } },
      },
      {
        id: 139,
        coordinate: { x: -5, y: -5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 2, type: 1 } },
      },
      {
        id: 140,
        coordinate: { x: 0, y: -5, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { x: { number: 2, type: 1 }, y: { number: 5, type: 2 } },
      },
      {
        id: 141,
        coordinate: { x: -2, y: -4, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 2, type: 1 }, x: { number: 3, type: 2 } },
      },
      {
        id: 142,
        coordinate: { x: -2, y: -3, z: 0 },

        isColored: false,
        revealedColor: "#46c7ff",
        numbers: { y: { number: 2, type: 1 }, x: { number: 7, type: 2 } },
      },
    ],
  },
  {
    rotation: { x: -10, y: 30, z: 0 },
    offset: { x: 0, y: 0, z: 0 },
    transition: true,
    blockWidth: 50,
    blocks: [],
  },
];
