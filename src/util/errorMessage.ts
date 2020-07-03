export const switchDesc = (type: string | number | ['403', '404', '500']) => {
  // tslint:disable-next-line: no-parameter-reassignment
  type = type === '0' || type === 0 ? '500' : type;
  switch (type) {
    case '403':
      return 'Page not found might be the URL was not found or broken on this server';
    case '404':
      return 'Page not found might be the URL was not found or broken on this server';
    case '500':
      return 'Something went wrong. Please report to the site owner thanks you!';
    default:
      return 'Page not found';
  }
};
export const switchStatusCode = (type: string | number | ['403', '404', '500']) => {
  // tslint:disable-next-line: no-parameter-reassignment
  type = type === '0' || type === 0 ? '500' : type;

  switch (type) {
    case '403':
      return '403';
    case '404':
      return '404';
    case '500':
      return '500';
    case '0':
      return '500';
    default:
      return '404';
  }
};
