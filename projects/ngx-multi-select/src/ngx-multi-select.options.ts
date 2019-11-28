export class MultiSelectAdvanceOptions {
  id: any;
  value: any;
  selected?: boolean;

  constructor(id?, value?, selected = false) {
    this.id = id;
    this.value = value;
    this.selected = selected;
  }

}

export class MultiSelectSimpleOptions {
  value: any;
  selected?: boolean;

  constructor(value?, selected = false) {
    this.value = value;
    this.selected = selected;
  }
}
