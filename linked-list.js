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
        let count = 0

        if (this.headNode === null)
            return count;
        else {
            let currentNode = this.headNode;
            while (currentNode.nextNode !== null) {
                count += 1;
                currentNode = currentNode.nextNode;
            };
            count += 1;
            return count;
        }
    }

    head() {
        if (this.headNode === null)
            return undefined;
        else
            return this.headNode.value;
    }

    tail() {
        if (this.headNode === null)
            return undefined;
        else {
            let currentNode = this.headNode;
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }; 
            return currentNode.value;
        }
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