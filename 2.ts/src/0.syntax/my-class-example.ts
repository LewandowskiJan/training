export interface MyInterface {
  name: string;
}

class MyClassExampleAbstract {
  protected shared: number = 123;
}

export class MyClassExample extends MyClassExampleAbstract implements MyInterface {
  public name: string;
  protected shared: number;
  private secret: boolean;

  constructor(name: string, shared: number, secret: boolean) {
    super();
    this.name = name;
    this.shared = shared;
    this.secret = secret;
  }

  public publicMethod(): void {
    console.log(this.name);
    this.protectedMethod();
    this.privateMethod();
  }

  protected protectedMethod(): void {
    console.log(this.shared);
  }

  private privateMethod(): void {
    console.log(this.secret);
  }
}
