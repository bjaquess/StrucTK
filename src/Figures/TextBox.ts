
export class TextBox {
    name: string;
    left: number;
    top: number;
    contents: string;
    
    // Default Settings:
    rotation: number = 0;
    width: number = 16;
    height: number = 16;
    horzAlignment: string = 'Center';
    vertAlignment: string = 'Middle';
    autoSize: boolean = true;
    topMargin: number = 0;
    bottomMargin: number = 0;
    leftMargin: number = 0;
    rightMargin: number = 0;
    borderColor: string = 'white';
}