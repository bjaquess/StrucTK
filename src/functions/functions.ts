
//import { SeismicNonStructuralComponents_Model } from '../TKClasses/SeismicNonstructural';
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




