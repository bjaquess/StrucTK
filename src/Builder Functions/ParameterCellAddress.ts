// eslint-disable-next-line no-unused-vars
import { GenericCell } from "../Builder Classes/Cell";
import { CellAddress } from "./CellAddress";

export function ParameterCellAddress(origin: [number, number], cell: GenericCell): string {
    let address: string;
    address = CellAddress(origin, cell.location);
    return address;
}