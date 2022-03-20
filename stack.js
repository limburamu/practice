class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }
    push(element){
        this.items[this.count] = element;
        this.count += 1;
        console.log('${element} added to ${this.count}')
        return this.count -1;
    }
}

const stack = new Stack()

stack.push(100);
stack.push(200);
stack.push(300);