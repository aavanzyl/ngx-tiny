
/**
 * Key Value Single Select
 */
export interface SingleSelectOption {
  id: any;
  value: any;
}


export interface SingleSelectConfiguration {
  /**
   * Placeholder text on option dropdown
   */
  placeholder?: string;

  /**
   * Placeholder text on the search input
   */
  searchPlaceholder?: string;

  /**
   * Search Icon class, interchangeable with font-awesome icons or other icon sets.
   */
  searchIconClass?: string;

  /**
   * Show or hide the search box
   */
  searchBox?: SearchBoxOption;

  /**
   *  Break point at which the search box need to display when search box is DYNAMIC.
   */
  searchBoxDynamicLimit?: number;

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
