export const timeStampToYYYYMMDD = (date_ob: Date) => {
  // year as 4 digits (YYYY)
  var year = date_ob.getFullYear();
  // month as 2 digits (MM)
  var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  // date as 2 digits (DD)
  var date = ("0" + date_ob.getDate()).slice(-2);

  return `${year} ${month} ${date}`;
};
