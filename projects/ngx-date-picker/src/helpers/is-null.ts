/**
 * Internal library helper that helps to check if value is empty
 */
export const isNull = (value: any) => {
    return (typeof value === 'undefined') || (value === null);
};
