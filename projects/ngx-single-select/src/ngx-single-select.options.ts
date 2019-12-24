
/**
 * Key Value Single Select
 */
export interface SingleSelectOption {
  id: any;
  value: any;
}


export interface SingleSelectConfiguration {

  searchIconClass: string;
  searchBox: SearchBoxOption;
  searchBoxDynamicLimit: number;

}



/**
 * Search box option
 */
export enum SearchBoxOption {
  /**
   * Never display the search box
   */
  NEVER,
  /**
   * Always display the search box
   */
  ALWAYS,
  /**
   * Dynamically display the search box based on the number of items
   */
  DYNAMIC
}
