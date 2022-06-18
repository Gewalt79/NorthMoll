function customFilter(filter, data) {
  const keyFilter = Object.keys(filter)[0];
  const keyValue = filter[keyFilter];

  let filteredData = [];

  switch (keyFilter) {
    case 'number':
      filteredData = data.filter((issue) => issue.number <= keyValue);
      return filteredData;
      break;
    case 'comments':
      filteredData = data.filter((issue) => issue.comments >= keyValue);
      return filteredData;
      break;
    default:
      return 'wrong "filter" type';
      break;
  }
}

export default customFilter;
