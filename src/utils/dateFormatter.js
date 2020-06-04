const dateFormatter = date => {
  const day = date[0].split('-')[2];
  const month = date[0].split('-')[1];

  switch (month) {
    case '01':
      return `${day}th of January`;
    case '02':
      return `${day}th of February`;
    case '03':
      return `${day}th of Mars`;
    case '04':
      return `${day}th of April`;
    case '05':
      return `${day}th of May`;
    case '06':
      return `${day}th of June`;
    case '07':
      return `${day}th of July`;
    case '08':
      return `${day}th of August`;
    case '09':
      return `${day}th of September`;
    case '10':
      return `${day}th of October`;
    case '11':
      return `${day}th of November`;
    case '12':
      return `${day}th of December`;
    default:
      break;
  }
};

export default dateFormatter;
