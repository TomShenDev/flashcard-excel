function CreateFlashCard(e){
    console.log("Creating flashcard!")
    // read the first two row of the workbook
    var reader = new FileReader();
    let file = e.target.excelFile.files[0]
    var workbook = XLSX.read(file, {type: 'binary', sheetRows: maxRow});
    reader.readAsBinaryString(f);
}
