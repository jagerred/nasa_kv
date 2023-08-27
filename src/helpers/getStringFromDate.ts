const optionsMap = {
  full: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC'
  },
  short: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC'
  }
};

export const getStringFromDate = (dateString: string, type: 'full' | 'short') => {
  const date = new Date(dateString);
  const options = optionsMap[type];
  // @ts-ignore
  return date.toLocaleString('ru', options);
};
