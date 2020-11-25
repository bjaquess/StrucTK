// eslint-disable-next-line no-unused-vars
import { TextBox } from "../TextBox";

export function AddTextBoxToShapeColl(shapes: Excel.ShapeCollection, shapeGroup: Excel.Shape[], textBox: TextBox) {
    let tb = shapes.addTextBox(textBox.contents);
        tb.left = textBox.left;
        tb.top = textBox.top;
        tb.width = textBox.width;
        tb.height = textBox.height;
        tb.rotation = textBox.rotation;
        tb.name = textBox.name;
        switch (textBox.horzAlignment) {
            case 'Center':
                tb.textFrame.horizontalAlignment = 'Center';
                break;
            default:
                tb.textFrame.horizontalAlignment = 'Left';
                break;
        }
        switch (textBox.vertAlignment) {
            case 'Middle':
                tb.textFrame.verticalAlignment = 'Middle';
                break;
            default:
                tb.textFrame.verticalAlignment = 'Bottom';
        }
        tb.textFrame.topMargin = textBox.topMargin;
        tb.textFrame.bottomMargin = textBox.bottomMargin;
        tb.textFrame.leftMargin = textBox.leftMargin;
        tb.textFrame.rightMargin = textBox.rightMargin;

        if (textBox.autoSize) {
            tb.textFrame.autoSizeSetting = 'AutoSizeShapeToFitText';
        }

        tb.lineFormat.color = textBox.borderColor;

    shapeGroup.push(shapes.getItem(textBox.name));
}