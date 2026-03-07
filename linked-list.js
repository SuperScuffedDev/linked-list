class Node{
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList{
    constructor() {
        this.headNode = null;
    }

    append(value) {
        if (this.headNode === null)
            this.prepend(value);
        else {
            let currentNode = this.headNode;

            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            };

            currentNode.nextNode = new Node(value);
        };
    }

    prepend(value) {
        this.headNode = new Node(value, this.headNode);
    }

    size() {
        if (this.headNode === null)
            return 0;
        else {
            let currentNode = this.headNode;

            
        }
    }

    head() {
        if (this.headNode === null)
            return undefined;
        else
            return this.headNode.value;
    }

    tail() {

    }

    at(index) {

    }
    
    pop() {

    }

    contains(value) {
        if (this.headNode === null)
            return false;
        else {
            let currentNode = this.headNode;
            
            while (currentNode.nextNode !== null) {
                if (currentNode.value === value) return true;
                else currentNode = currentNode.nextNode;
            };
            if (currentNode.value === value) return true;
            else return false ;
        };
    }

    findIndex(value) {

    }

    toString() {
        let listAsString = ""

        if (this.headNode === null)
            return "this list is empty";
        else {
            let currentNode = this.headNode;
            
            while (currentNode.nextNode !== null) {
                listAsString += `( ${currentNode.value} ) -> `;
                currentNode = currentNode.nextNode;
            };
            listAsString += `( ${currentNode.value} ) -> `;

            return listAsString += "null";
            
        };
    }

    insertAt(index, ...values) {

    }

    RemoveAt(index) {

    }
}

module.exports = LinkedList;