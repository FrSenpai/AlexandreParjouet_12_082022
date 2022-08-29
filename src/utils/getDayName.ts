/**
 * @description Returns the day name of the given day index.
 * @param indexOfDay {number} - index of day in week (start to 0)
 * @returns {string}
 */
export function getDayName(indexOfDay:number):string {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return days[indexOfDay];
}