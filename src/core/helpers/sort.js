export const SortDirections = {
  asc: 'asc',
  desc: 'desc'
};

export default class Sort {
  // static asc = 'asc'; // static fields causing error in es6-module-loader.
  // static desc = 'desc';

  static sortByKey(array, key, direction = SortDirections.asc) {
    return array
      .concat()
      .sort((a, b) =>
        a[key] > b[key]
          ? direction === SortDirections.asc
            ? 1
            : -1
          : a[key] < b[key]
          ? direction === SortDirections.asc
            ? -1
            : 1
          : 0
      );
  }
}
