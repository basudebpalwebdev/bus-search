import { FormattedBusTimeTable } from '../datatypes/FormattedBusTimeTable';
import { BusTimeTable } from '../datatypes/BusTimeTable';

function formatDateTime(date: Date): string {
  const timeOptions = {
      hour12 : true,
      hour:  "2-digit",
      minute: "2-digit"
  };
  const newDateTimeFormat: string = `${date.toDateString()}, ${date.toLocaleTimeString("en-US", timeOptions)}`;
  return newDateTimeFormat;
}

export default function formatListDateTime(list: BusTimeTable[]): FormattedBusTimeTable[] {

  let formattedBusTimeTableList: FormattedBusTimeTable[] = new Array<FormattedBusTimeTable>();
  list.map((item) => {
    let formattedBusTimeTable: FormattedBusTimeTable = new FormattedBusTimeTable();
    formattedBusTimeTable.companyName = item.companyName;
    formattedBusTimeTable.arrivalAtD = formatDateTime(item.arrivalAtD);
    formattedBusTimeTable.departureFromC = formatDateTime(item.departureFromC);
    formattedBusTimeTableList.push(formattedBusTimeTable);
  });
  return formattedBusTimeTableList;
}
