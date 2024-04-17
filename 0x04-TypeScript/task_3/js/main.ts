// import the row and row element from interace
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
const UpdatedRow: RowElement = { age: 23, ...row };

CRUD.updateRow(newRowID, UpdatedRow);
CRUD.deleteRow(newRowID);
