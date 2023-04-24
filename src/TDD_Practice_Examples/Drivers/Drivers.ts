// Create a function that returns a DriverStatus enum value
// based on a given age.
// too young is age less than 16
// too old are ages greater than 85
// eligible is any ages between 16 and 85

export enum DriverStatus {
  TOO_YOUNG = 'too young',
  TOO_OLD = 'too old',
  ELIGIBLE = 'eligible',
}

export function status(num: number): string {
  if (num > 85) {
    return DriverStatus.TOO_OLD;
  }
  if (num < 16) {
    return DriverStatus.TOO_YOUNG;
  } else {
    return DriverStatus.ELIGIBLE;
  }
}
