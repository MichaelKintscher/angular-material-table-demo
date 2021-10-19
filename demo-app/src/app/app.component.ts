import { Component } from '@angular/core';
import Table from './data/test-data.json'; // Added to support reading data from local json file.
import { TableDataInterface } from '../types/table-data.interface'; // import your interace.

// Added to support reading data from local json file.
let table_data = Table.Table;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';

  // Declare a property on your component to hold the data for your table,
  //    and initialize it to an empty array.
  inputData: TableDataInterface[] = []

  // Declare a property on your component to hold the data to be displayed.
  //    This is what you will bind to from the HTML.
  tableData: string[][] = [];

  // Declare a property to hold the list of columns to display.
  tableColumns: string[] = [];

  // Use the initialization (or whatever other appropriate function) to populate the
  //    data of your table.
  ngOnInit(): void {

    // 1. Get the data from whatever source you are getting it from.
    this.inputData = this.getData();

    // 2. Create a 2D array with a value for each cell initialized to empty string.
    for (var row: number = 0; row < table_data[0].NumRows; row++) {

      // Initialize the row.
      this.tableData[row] = [];

      for (var col: number = 0; col < table_data[0].NumCols; col++) {

        // Initialize the cell in the row.
        this.tableData[row][col] = "";
      }
    }

    // 3. Create an entry in the table columns array for each column.
    for (var col: number = 0; col < table_data[0].NumCols; col++) {

      // Angular requires a unique name for each column, so we will just
      //    use the index of that column for the name.
      this.tableColumns[col] = col.toString();
    }

    // 4. Now replace the values in the table data with the ones you want displayed.
    for (var inputIndex: number = 0; inputIndex < this.inputData.length; inputIndex++) {

      // NOTE: the -1 for the column and row is to account for the fact that the input data
      //    is one-indexed, while the arrays are zero-indexed.
      this.tableData[this.inputData[inputIndex].RowIndex - 1][this.inputData[inputIndex].ColumnIndex - 1] = this.inputData[inputIndex].Cell;
    }
  }

  // Put your code to get the table data in this function. Here a hard-coded value is
  //    used as an example.
  getData(): TableDataInterface[] {

    // NOTE: if your interface properties do not match exactly the json, you will
    //    need to convert between the two here before returning. In this example
    //    the two match, so the data can be directly returned.

    return table_data[0].TableData;
  }
}
