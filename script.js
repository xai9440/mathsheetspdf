/*document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    document.getElementById('generateBtn').addEventListener('click', function() {
        var numProblems = parseInt(document.getElementById('numProblems').value);
        var maxValue = parseInt(document.getElementById('maxValue').value);

        var worksheetContent = generateWorksheet(numProblems, maxValue);
        document.getElementById('worksheetContainer').innerText = worksheetContent;

        document.getElementById('downloadBtn').style.display = 'block';
    });

    document.getElementById('downloadBtn').addEventListener('click', function() {
        var worksheetContent = document.getElementById('worksheetContainer').innerText;
        generatePDF(worksheetContent);
    });



    function generatePDF(content) {
        const doc = new PDFDocument();
        const stream = doc.pipe(blobStream());
    
        // Use fixed-width font for better alignment
        doc.font('Courier');
    
        const margin = 60; // Margin from page edges
        const columnWidth = (doc.page.width - 3 * margin) / 2; // Width of each column
        let x = margin; // Current x position
        let y = margin; // Current y position
        let currentPage = doc.page;
    
        // Split content into lines
        const lines = content.split('\n');
    
        // Add content to the PDF document
        lines.forEach(line => {
            const height = doc.heightOfString(line, { width: columnWidth });
    
            // Start a new page if necessary
            if (y + height > doc.page.height - margin) {
                doc.addPage();
                currentPage = doc.page;
                x = margin;
                y = margin;
            }
    
            // Start a new column if necessary
            if (x + columnWidth > doc.page.width - margin) {
                x = margin;
                y = margin;
            }
    
            doc.text(line, x, y, { width: columnWidth, align: 'left' });
    
            // Move to the next column or start a new page if both columns on the current page are filled
            if (x === margin) {
                x += columnWidth + margin;
            } else {
                x = margin;
                y += height + 12; // Adjust y position for the next line
            }
        });
    
        doc.end();
    
        stream.on('finish', function() {
            const blob = stream.toBlob('application/pdf');
            const url = URL.createObjectURL(blob);
    
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = 'addition_worksheet.pdf';
            downloadLink.click();
    
            URL.revokeObjectURL(url);
        });
    }
    
    
    

    function generateWorksheet(numProblems, maxValue) {
        var worksheet = '';
        for (var i = 0; i < numProblems; i++) {
            var num1, num2, sum;
            do {
                num1 = Math.floor(Math.random() * maxValue) + 1;
                num2 = Math.floor(Math.random() * maxValue) + 1;
                sum = num1 + num2;
            } while (sum >= maxValue); // Continue generating numbers until sum is less than maxValue
            worksheet += num1 + ' + ' + num2 + ' = ________\n';
        }
        return worksheet;
    }
    
});
*/


/*document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    var selectedOperation = '+'; // Default operation is addition

    document.getElementById('additionBtn').addEventListener('click', function() {
        selectedOperation = '+';
    });

    document.getElementById('subtractionBtn').addEventListener('click', function() {
        selectedOperation = '-';
    });

    document.getElementById('multiplicationBtn').addEventListener('click', function() {
        selectedOperation = '*';
    });

    document.getElementById('divisionBtn').addEventListener('click', function() {
        selectedOperation = '/';
    });

    document.getElementById('generateBtn').addEventListener('click', function() {
        var numProblems = parseInt(document.getElementById('numProblems').value);
        var maxValue = parseInt(document.getElementById('maxValue').value);

        var worksheetContent = generateWorksheet(numProblems, maxValue, selectedOperation);
        document.getElementById('worksheetContainer').innerText = worksheetContent;

        document.getElementById('downloadBtn').style.display = 'block';
    });

    document.getElementById('downloadBtn').addEventListener('click', function() {
        var worksheetContent = document.getElementById('worksheetContainer').innerText;
        generatePDF(worksheetContent);
    });

    function generatePDF(content) {
        const doc = new PDFDocument();
        const stream = doc.pipe(blobStream());
    
        // Use fixed-width font for better alignment
        doc.font('Courier');
    
        const margin = 60; // Margin from page edges
        const columnWidth = (doc.page.width - 3 * margin) / 2; // Width of each column
        let x = margin; // Current x position
        let y = margin; // Current y position
        let currentPage = doc.page;
    
        // Split content into lines
        const lines = content.split('\n');
    
        // Add content to the PDF document
        lines.forEach(line => {
            const height = doc.heightOfString(line, { width: columnWidth });
    
            // Start a new page if necessary
            if (y + height > doc.page.height - margin) {
                doc.addPage();
                currentPage = doc.page;
                x = margin;
                y = margin;
            }
    
            // Start a new column if necessary
            if (x + columnWidth > doc.page.width - margin) {
                x = margin;
                y = margin;
            }
    
            doc.text(line, x, y, { width: columnWidth, align: 'left' });
    
            // Move to the next column or start a new page if both columns on the current page are filled
            if (x === margin) {
                x += columnWidth + margin;
            } else {
                x = margin;
                y += height + 12; // Adjust y position for the next line
            }
        });
    
        doc.end();
    
        stream.on('finish', function() {
            const blob = stream.toBlob('application/pdf');
            const url = URL.createObjectURL(blob);
    
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = 'math_worksheet.pdf';
            downloadLink.click();
    
            URL.revokeObjectURL(url);
        });
    }
    
    function generateWorksheet(numProblems, maxValue, operation) {
        var worksheet = '';
        for (var i = 0; i < numProblems; i++) {
            var num1, num2, result;
            // Generate numbers based on the selected operation
            switch (operation) {
                case '+':
                    do{
                        num1 = Math.floor(Math.random() * maxValue) + 1;
                        num2 = Math.floor(Math.random() * maxValue) + 1;
                        result = num1 + num2;
                        
                    }while (result >= maxValue);
                    break;
                case '-':
                    do {
                        num1 = Math.floor(Math.random() * (Math.floor(maxValue*2))) + 1;
                        num2 = Math.floor(Math.random() * maxValue) + 1;
                        result = num1 - num2;
                    } while (result < 0 || result >=maxValue); // Ensure no negative results for subtraction
                    break;
                case '*':
                    do{
                        num1 = Math.floor(Math.random() * maxValue) + 1;
                        num2 = Math.floor(Math.random() * maxValue) + 2;
                        result = num1 * num2;
                        
                    }while (result >= maxValue);
                    break;
                case '/':
                    do {
                        num1 = Math.floor(Math.random() * (Math.floor(maxValue*2))) + 1;
                        num2 = Math.floor(Math.random() * (Math.floor(maxValue/2))) + 1;
                        result = num1 / num2;
                    } while (!Number.isInteger(result) || result >= maxValue); // Ensure integer division only
                    break;
            }
            worksheet += num1 + ' ' + operation + ' ' + num2 + ' = ________\n';
        }
        return worksheet;
    }
});
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    var selectedOperation = '+'; // Default operation is addition

    document.getElementById('additionBtn').addEventListener('click', function() {
        selectedOperation = '+';
    });

    document.getElementById('subtractionBtn').addEventListener('click', function() {
        selectedOperation = '-';
    });

    document.getElementById('multiplicationBtn').addEventListener('click', function() {
        selectedOperation = '*';
    });

    document.getElementById('divisionBtn').addEventListener('click', function() {
        selectedOperation = '/';
    });

    document.getElementById('generateBtn').addEventListener('click', function() {
        var numProblems = parseInt(document.getElementById('numProblems').value);
        var maxValue = parseInt(document.getElementById('maxValue').value);

        var worksheetContent = generateWorksheet(numProblems, maxValue, selectedOperation);
        document.getElementById('worksheetContainer').innerText = worksheetContent;

        document.getElementById('downloadBtn').style.display = 'block';

        // Generate and display preview PDF
        generatePreviewPDF(worksheetContent);
    });

    document.getElementById('downloadBtn').addEventListener('click', function() {
        var worksheetContent = document.getElementById('worksheetContainer').innerText;
        generatePDF(worksheetContent);
    });

    function generatePDF(content) {
        const doc = new PDFDocument();
        const stream = doc.pipe(blobStream());
    
        // Use fixed-width font for better alignment
        doc.font('Courier');
    
        const margin = 60; // Margin from page edges
        const columnWidth = (doc.page.width - 3 * margin) / 2; // Width of each column
        let x = margin; // Current x position
        let y = margin; // Current y position
        let currentPage = doc.page;
    
        // Split content into lines
        const lines = content.split('\n');
    
        // Add content to the PDF document
        lines.forEach(line => {
            const height = doc.heightOfString(line, { width: columnWidth });
    
            // Start a new page if necessary
            if (y + height > doc.page.height - margin) {
                doc.addPage();
                currentPage = doc.page;
                x = margin;
                y = margin;
            }
    
            // Start a new column if necessary
            if (x + columnWidth > doc.page.width - margin) {
                x = margin;
                y = margin;
            }
    
            doc.text(line, x, y, { width: columnWidth, align: 'left' });
    
            // Move to the next column or start a new page if both columns on the current page are filled
            if (x === margin) {
                x += columnWidth + margin;
            } else {
                x = margin;
                y += height + 12; // Adjust y position for the next line
            }
        });
    
        doc.end();
    
        stream.on('finish', function() {
            const blob = stream.toBlob('application/pdf');
            const url = URL.createObjectURL(blob);
    
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = 'math_worksheet.pdf';
            downloadLink.click();
    
            URL.revokeObjectURL(url);
        });
    }
    
    function generateWorksheet(numProblems, maxValue, operation) {
        var worksheet = '';
        for (var i = 0; i < numProblems; i++) {
            var num1, num2, result;
            // Generate numbers based on the selected operation
            switch (operation) {
                case '+':
                    do {
                        num1 = Math.floor(Math.random() * maxValue) + 1;
                        num2 = Math.floor(Math.random() * maxValue) + 1;
                        result = num1 + num2;
                    } while (result >= maxValue);
                    break;
                case '-':
                    do {
                        num1 = Math.floor(Math.random() * (maxValue * 2)) + 1;
                        num2 = Math.floor(Math.random() * maxValue) + 1;
                        result = num1 - num2;
                    } while (result < 0 || result >= maxValue); // Ensure no negative results for subtraction
                    break;
                case '*':
                    do {
                        num1 = Math.floor(Math.random() * maxValue) + 1;
                        num2 = Math.floor(Math.random() * maxValue) + 1;
                        result = num1 * num2;
                    } while (result >= maxValue);
                    break;
                case '/':
                    do {
                        num1 = Math.floor(Math.random() * (maxValue * 2)) + 1;
                        num2 = Math.floor(Math.random() * (maxValue / 2)) + 1;
                        result = num1 / num2;
                    } while (!Number.isInteger(result) || result >= maxValue); // Ensure integer division only
                    break;
            }
            worksheet += num1 + ' ' + operation + ' ' + num2 + ' = ________\n';
        }
        return worksheet;
    }

    function generatePreviewPDF(content) {
        const doc = new PDFDocument();
        const chunks = [];
    
        // Use fixed-width font for better alignment
        doc.font('Courier');
    
        const margin = 60; // Margin from page edges
        const columnWidth = (doc.page.width - 3 * margin) / 2; // Width of each column
        let x = margin; // Current x position
        let y = margin; // Current y position
        let currentPage = doc.page;
    
        // Split content into lines
        const lines = content.split('\n');
    
        // Add content to the PDF document
        lines.forEach(line => {
            const height = doc.heightOfString(line, { width: columnWidth });
    
            // Start a new page if necessary
            if (y + height > doc.page.height - margin) {
                doc.addPage();
                currentPage = doc.page;
                x = margin;
                y = margin;
            }
    
            // Start a new column if necessary
            if (x + columnWidth > doc.page.width - margin) {
                x = margin;
                y = margin;
            }
    
            doc.text(line, x, y, { width: columnWidth, align: 'left' });
    
            // Move to the next column or start a new page if both columns on the current page are filled
            if (x === margin) {
                x += columnWidth + margin;
            } else {
                x = margin;
                y += height + 12; // Adjust y position for the next line
            }
        });
    
        doc.on('data', chunks.push.bind(chunks));
        doc.on('end', function () {
            const pdfData = new Blob(chunks, { type: 'application/pdf' });
            const pdfUrl = URL.createObjectURL(pdfData);
            document.getElementById('previewContainer').innerHTML = `<embed src="${pdfUrl}" width="100%" height="900px" type="application/pdf" />`;
        });

        doc.end();
    }
});

