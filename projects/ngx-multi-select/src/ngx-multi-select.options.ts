
export abstract class MultiSelectOption {
  value: any;
  constructor(value) {
    this.value = value;
  }
}

export class MultiSelectAdvanceOption extends MultiSelectOption {
  id: any;

  constructor(id?, value?) {
    super(value);
    this.id = id;
  }
}

export class MultiSelectSimpleOption extends MultiSelectOption {

  constructor(value?) {
    super(value);
  }

  get id() {
    return this.value;
  }
}
