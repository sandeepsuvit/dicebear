/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/Vh7N9shKJTNHNo9prUzkZe
 */

import type { Prng } from '@dicebear/core';
import type { Options, ColorPickCollection } from '../types.js';

type Props = {
  prng: Prng,
  options: Options
}

export function getColors({ prng, options }: Props): ColorPickCollection {
  return {
    'skin': prng.pick(options.skinColor ?? []) ?? 'transparent',
    'hair': prng.pick(options.hairColor ?? []) ?? 'transparent',
    'body': prng.pick(options.bodyColor ?? []) ?? 'transparent',
  }
};
