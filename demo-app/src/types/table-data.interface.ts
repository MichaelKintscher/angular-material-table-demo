// Create an interface for your data, so TypeScript knows what datatype to work with when
//    putting your data in the table.
export interface TableDataInterface {
  Id: string;
  ColumnIndex: number;
  ColumnSpan: number;
  RowIndex: number;
  RowSpan: number;
  Cell: string;
}
