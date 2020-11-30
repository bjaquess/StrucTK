
export class RebarProps {
    
    BarDiam(barSize: string): number {
        switch(barSize) {
            case '#3': { return 0.375 }
            case '#4': { return 0.50 }
            case '#5': { return 0.625 }
            case '#6': { return 0.75 }
            case '#7': { return 0.875 }
            case '#8': { return 1.0 }
            case '#9': { return 1.128 }
            case '#10': { return 1.27 }
            case '#11': { return 1.41 }
            case '#14': { return 1.693 }
            default: { return 0 }
        }
    }

    BarArea(barSize: string): number {
        switch(barSize) {
            case '#3': { return 0.11 }
            case '#4': { return 0.20 }
            case '#5': { return 0.31 }
            case '#6': { return 0.44 }
            case '#7': { return 0.60 }
            case '#8': { return 0.79 }
            case '#9': { return 1.00 }
            case '#10': { return 1.27 }
            case '#11': { return 1.56 }
            case '#14': { return 2.25 }
            default: { return 0 }
        }
    }

}