// Adobe Illustrator script to create text boxes from a CSV file

// Function to read a text file
function readTextFile(filePath) {
    var file = File(filePath);
    file.open('r');
    var content = file.read();
    file.close();
    return content;
}

// Function to read CSV file
function readCSV(filePath) {
    var file = File(filePath);
    file.open('r');
    var content = file.read();
    file.close();
    return content;
}

// Function to create a text box in Illustrator
function createTextBox(text, topOffset) {
    var doc = app.activeDocument;

    // Create text frame
    var textFrame = doc.textFrames.add();
    textFrame.contents = text;

    // Set position and other properties
    textFrame.top = topOffset;
    textFrame.left = 50; // Adjust position based on your requirements
    textFrame.textRange.characterAttributes.size = 12; // Adjust font size based on your requirements
}

// Main script
var scriptFolder = (new File($.fileName)).parent; // Get the folder of the script
var filePathText = scriptFolder + '/uorder_filepath.txt';
var csvFilePath = readTextFile(filePathText);

if (csvFilePath) {
    var csvData = readCSV(csvFilePath);

    if (csvData) {
        var rows = csvData.split('\n');
        var topOffset = 50;

        for (var i = 0; i < rows.length; i++) {
            createTextBox(rows[i], topOffset);
            topOffset -= 20;
        }
    } else {
        alert('Error reading CSV file');
    }
} else {
    alert('Error reading file path from uorder_filepath.txt');
}
