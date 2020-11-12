// eslint-disable-next-line no-unused-vars
import { GenericCell } from "../Builder Classes/Cell";

export function BlockSize(cellStack : GenericCell[]) : [number, number] {
    let height = 0;
    let width = 0;

    cellStack.forEach(cell => {
        if (cell.location[0] > height) {height = cell.location[0]}
        if (cell.location[1] > width) {width = cell.location[1]}
    });
    return [height, width];
}