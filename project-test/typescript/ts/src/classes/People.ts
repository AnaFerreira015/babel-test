class People {
    private name: string;
    private wordTest: string;
  
    constructor(n: string, wordTest: string) {
      this.name = n;
      this.wordTest = wordTest;
    }
    public person(): any {
      // tslint:disable-next-line:no-console
      console.log(`Hello, ${this.name}! You're ${this.wordTest}`);
    }
  }
  
  export default People;
  