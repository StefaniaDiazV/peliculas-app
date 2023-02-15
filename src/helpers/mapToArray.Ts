export function mapToArray<T>(object: T[]): T[] {
    const array: T[] = [];
  
    for (const elem in object) {
      array.push({
        ...object[elem],
        id: elem,
      });
    }
  
    return array;
  }

export function mapToArrayMv<T>(object: T[]): T[] {
    const array: T[] = [];
  
    for (const elem in object) {
      array.push({
        ...object[elem]
      });
    }
  
    return array;
  }