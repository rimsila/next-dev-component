export const getOnlyValue = (values: any) => {
  Object.keys(values).reduce(({}, key) => {
    // tslint:disable-next-line: triple-equals
    if (
      values[key] === undefined ||
      values[key] === '' ||
      values[key] === null ||
      values[key] === 'undefined'
    ) {
      delete values[key];
    }
    return values;
  });
  return values;
};

export const remainderFunc = (y: number, x: number) => {
  if (y % x === 0) {
    return true;
  }
  return false;
};
// eveloper.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
// https
export const formatCurrency = (currency: string, value: number) => {
  return new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
    style: 'currency',
    currency: `${currency}`,
  }).format(value);
};
// formatThousand number ex: 100,000
export const formatThousand = (value: number) => {
  return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
    value
  );
};

// count number or string length
export const countLength = (value: number | string) => {
  const length = value.toString().length;
  return length;
};

