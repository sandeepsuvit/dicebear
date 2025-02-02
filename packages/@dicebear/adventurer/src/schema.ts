/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/XXfL2r5Wylk623KpxDt7gO
 */

import type { StyleSchema } from '@dicebear/core';

export const schema: StyleSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "properties": {
    "base": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "default"
        ]
      },
      "default": [
        "default"
      ]
    },
    "earrings": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant06",
          "variant01",
          "variant02",
          "variant03",
          "variant04",
          "variant05"
        ]
      },
      "default": [
        "variant06",
        "variant01",
        "variant02",
        "variant03",
        "variant04",
        "variant05"
      ]
    },
    "earringsProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 10
    },
    "eyebrows": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant10",
          "variant09",
          "variant08",
          "variant07",
          "variant06",
          "variant05",
          "variant04",
          "variant03",
          "variant02",
          "variant01",
          "variant15",
          "variant14",
          "variant13",
          "variant12",
          "variant11"
        ]
      },
      "default": [
        "variant10",
        "variant09",
        "variant08",
        "variant07",
        "variant06",
        "variant05",
        "variant04",
        "variant03",
        "variant02",
        "variant01",
        "variant15",
        "variant14",
        "variant13",
        "variant12",
        "variant11"
      ]
    },
    "eyes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant26",
          "variant25",
          "variant24",
          "variant23",
          "variant22",
          "variant21",
          "variant20",
          "variant19",
          "variant18",
          "variant17",
          "variant16",
          "variant15",
          "variant14",
          "variant13",
          "variant12",
          "variant11",
          "variant10",
          "variant09",
          "variant08",
          "variant07",
          "variant06",
          "variant05",
          "variant04",
          "variant03",
          "variant02",
          "variant01"
        ]
      },
      "default": [
        "variant26",
        "variant25",
        "variant24",
        "variant23",
        "variant22",
        "variant21",
        "variant20",
        "variant19",
        "variant18",
        "variant17",
        "variant16",
        "variant15",
        "variant14",
        "variant13",
        "variant12",
        "variant11",
        "variant10",
        "variant09",
        "variant08",
        "variant07",
        "variant06",
        "variant05",
        "variant04",
        "variant03",
        "variant02",
        "variant01"
      ]
    },
    "features": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "mustache",
          "blush",
          "birthmark",
          "freckles"
        ]
      },
      "default": [
        "mustache",
        "blush",
        "birthmark",
        "freckles"
      ]
    },
    "featuresProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 5
    },
    "glasses": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant01",
          "variant02",
          "variant03",
          "variant04",
          "variant05"
        ]
      },
      "default": [
        "variant01",
        "variant02",
        "variant03",
        "variant04",
        "variant05"
      ]
    },
    "glassesProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 10
    },
    "hair": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "short16",
          "short15",
          "short14",
          "short13",
          "short12",
          "short11",
          "short10",
          "short09",
          "short08",
          "short07",
          "short06",
          "short05",
          "short04",
          "short03",
          "long20",
          "short02",
          "short01",
          "long19",
          "long18",
          "long17",
          "long16",
          "long15",
          "long14",
          "long13",
          "long12",
          "long11",
          "long10",
          "long09",
          "long08",
          "long07",
          "long06",
          "long05",
          "long04",
          "long03",
          "long02",
          "long01",
          "short19",
          "long26",
          "long25",
          "short18",
          "long24",
          "long23",
          "long22",
          "short17",
          "long21"
        ]
      },
      "default": [
        "short16",
        "short15",
        "short14",
        "short13",
        "short12",
        "short11",
        "short10",
        "short09",
        "short08",
        "short07",
        "short06",
        "short05",
        "short04",
        "short03",
        "long20",
        "short02",
        "short01",
        "long19",
        "long18",
        "long17",
        "long16",
        "long15",
        "long14",
        "long13",
        "long12",
        "long11",
        "long10",
        "long09",
        "long08",
        "long07",
        "long06",
        "long05",
        "long04",
        "long03",
        "long02",
        "long01",
        "short19",
        "long26",
        "long25",
        "short18",
        "long24",
        "long23",
        "long22",
        "short17",
        "long21"
      ]
    },
    "hairColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^[a-fA-F0-9]{6}$"
      },
      "default": [
        "ac6511",
        "cb6820",
        "ab2a18",
        "e5d7a3",
        "b9a05f",
        "796a45",
        "6a4e35",
        "562306",
        "0e0e0e",
        "afafaf",
        "3eac2c",
        "85c2c6",
        "dba3be",
        "592454"
      ]
    },
    "hairProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 100
    },
    "mouth": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "variant30",
          "variant29",
          "variant28",
          "variant27",
          "variant26",
          "variant25",
          "variant24",
          "variant23",
          "variant22",
          "variant21",
          "variant20",
          "variant19",
          "variant18",
          "variant17",
          "variant16",
          "variant15",
          "variant14",
          "variant13",
          "variant12",
          "variant11",
          "variant10",
          "variant09",
          "variant08",
          "variant07",
          "variant06",
          "variant05",
          "variant04",
          "variant03",
          "variant02",
          "variant01"
        ]
      },
      "default": [
        "variant30",
        "variant29",
        "variant28",
        "variant27",
        "variant26",
        "variant25",
        "variant24",
        "variant23",
        "variant22",
        "variant21",
        "variant20",
        "variant19",
        "variant18",
        "variant17",
        "variant16",
        "variant15",
        "variant14",
        "variant13",
        "variant12",
        "variant11",
        "variant10",
        "variant09",
        "variant08",
        "variant07",
        "variant06",
        "variant05",
        "variant04",
        "variant03",
        "variant02",
        "variant01"
      ]
    },
    "skinColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^[a-fA-F0-9]{6}$"
      },
      "default": [
        "f2d3b1",
        "ecad80",
        "9e5622",
        "763900"
      ]
    }
  }
};
