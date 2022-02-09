/**
 * ExcellentExport 3.7.2
 * A client side Javascript export to Excel.
 *
 * @url: https://github.com/sokoni-online/excellentexport
 *
 */
export interface ConvertOptions {
    anchor?: (string | HTMLAnchorElement);
    openAsDownload?: boolean;
    format: ('csv' | 'xls' | 'xlsx');
    filename?: string;
    rtl?: boolean;
}
export interface FromOptions {
    table?: (string | HTMLTableElement);
    array?: any[][];
}
export interface SheetOptions {
    name: string;
    from: FromOptions;
    removeColumns?: number[];
    filterRowFn?(row: any[]): boolean;
    fixValue?(value: any, row: number, column: number): any;
    fixArray?(array: any[][]): any[][];
    rtl?: boolean;
}
declare const ExcellentExport: {
    version: () => string;
    excel: (anchor: (HTMLAnchorElement | string), table: HTMLTableElement, name: string) => boolean;
    csv: (anchor: (HTMLAnchorElement | string), table: HTMLTableElement, delimiter?: string, newLine?: string) => boolean;
    convert: (options: ConvertOptions, sheets: SheetOptions[]) => string | false;
};
export default ExcellentExport;
