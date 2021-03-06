﻿import { LoadCombinations_Functions } from "../TK Classes/Load Combinations/LoadCombinations_Functions";
/**
 * Load Combinations Table
 * @customfunction LoadCombinations
 * @param {string[][]} LoadCases Load cases
 * @param {number[][]} Magnitudes Load magnitudes
 * @param {boolean} LRFDCombs Include LRFD load combinations
 * @param {boolean} ASDCombs Include ASD load combinations
 * @param {boolean} ServiceCombs Include service load combinations
 * @returns {any[][]} Table of load combinations and factored loads
 */
export function LoadCombinations(LoadCases: string[][], Magnitudes: number[][], LRFDCombs: boolean, ASDCombs: boolean, ServiceCombs: boolean): any[][] {
  let results = new LoadCombinations_Functions(LRFDCombs, ASDCombs, ServiceCombs);
  return results.BuildComboTable(LoadCases, Magnitudes)
}

import { ConcFlexure_Functions } from "../TK Classes/Concrete Flexure/ConcFlexure_Functions";
/**
 * Concrete Rectangular Beam Flexure
 * @customfunction ConcRectFlexure
 * @param {number} b Width
 * @param {number} d Depth to reinforcing
 * @param {number} fy Yield strength of reinforcing steel
 * @param {number} fc Design compressive strength of concrete
 * @param {number} nBars Number of reinforcing bars in layer
 * @param {string} barSize Nominal size of reinforcing bars 
 * @returns {any[][]} Nominal flexural strength, area of steel, and reinforcing ratio
 */
export function ConcRectFlexure(b: number, d: number, fy: number, fc: number, nBars: number, barSize: string): any[][] {
  let results = new ConcFlexure_Functions();
  return results.ResultsArray(nBars, barSize, fy, fc, d, b);
}

import { SeismicNonStructuralComponents_Model } from "../TK Classes/Seismic_Loads/Nonstructural/SeismicNonstructuralComponents_Model";
/**
 * Seismic loads for non-structural elements
 * @customfunction seismicNonstructural
 * @param {number} Sds Design spectral acceleration
 * @param {number} ap Component-specific coefficient
 * @param {number} Rp Component-specific coefficient
 * @param {number} Ip Importance factor
 * @param {number} z Height of component within building
 * @param {number} h Height of building
 * @returns {any[][]} The seismic design load in the horizontal direction.
 */
export function seismicNonstructural(Sds : number, ap : number, Rp : number, Ip : number, z : number, h : number, Wp : number) : any[][] {
  let nsc = new SeismicNonStructuralComponents_Model();
  return nsc.ResultsArray(Sds, ap, Rp, Ip, z, h, Wp);
}

import { Template_Model } from "../TK Classes/Template/Template_Model";
/**
 * Template for StrucTK design aids
 * @customfunction template
 * @param {number} b Width
 * @param {number} h Height
 * @returns {any[][]} Area, moment of inertia about centroid, and plastic section modulus
 */
export function template(b: number, h: number): any[][] {
  let results = new Template_Model();
  return results.ResultsArray(b, h);
}


