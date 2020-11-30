// eslint-disable-next-line no-unused-vars
import { GenericCell } from "../Builder Classes/Cell";
import { CellAddress } from "./CellAddress";

export function ParameterCellAddress(origin: [number, number], cell: GenericCell): string {
    let address: string;
    address = CellAddress(origin, cell.location);
    return address;
}

export function ParameterRangeAddress(origin: [number, number], startCell: GenericCell, endCell: GenericCell): string {
    let startAddress: string;
    let endAddress: string;
    startAddress = CellAddress(origin, startCell.location);
    endAddress = CellAddress(origin, endCell.location);
    return `${startAddress}:${endAddress}`
}