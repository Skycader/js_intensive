//big O: N (linear)

const list = () => {
  let list = {};
  let size = 0; //private property using closure
  let preLast = {};
  let countSize = () => {
    let obj = list;
    let count = 0;
    while (obj.next) {
      count++;
      obj = obj.next;
    }
    size = count;
  };
  let last = () => {
    //truly private method using closure
    let obj = list;
    if (obj != null)
      while (obj.next) {
        preLast = obj;
        obj = obj.next;
      }
    return obj;
  };
  let getPointer = (index) => {
    let obj = list;
    for (let i = 0; i < index; i++) {
      if (obj.next == null) return null;
      obj = obj.next;
    }
    return obj;
  };
  return {
    add: (data) => {
      let lastElement = last();
      lastElement.next = {
        data: data,
        next: null,
      };
      countSize();
	  return `Added ${last().data}`
    },
    size: () => size,
    list: (num) => {
      let obj = list;
      let output = "";
      while (obj.next) {
        obj = obj.next;
        output += `${obj.data}->`;
      }

      return output.slice(0, -2);
    },
    remove: () => {
      let deleted = preLast.next.data;
      preLast.next = null;
      last();
      countSize();
      return `Item {${deleted}} has been removed`;
    },
    head: () => list.next.data,
    tail: () => last().data || null,
    show: () => list,
    elementAt: (index) => {
      let obj = getPointer(index);
      return obj ? obj.data : null;
    },

    indexOf: (data) => {
      let obj = list;
      let index = 0;
      while (obj.next) {
        obj = obj.next;
        index++;
        if (obj.data == data) return index;
      }
      return null;
    },
    addAt: (index, data) => {
      //1->2->new->3
      let p1 = getPointer(index);
      let p2 = getPointer(index + 1);
      p1.next = {
        data: data,
        next: p2,
      };
      countSize();
	  return `Added ${data}`
    },
    removeAt: (index) => {
      //1->(2)->3 ===> 1->3
      let deleted = getPointer(index).data;
      let p1 = getPointer(index - 1);
      let p2 = getPointer(index + 1);
      if (p1 && p2) p1.next = p2;
      countSize();
      return `Item {${deleted}} has been removed`;
    },
  };
};

const myList = list();
console.log(`myList.add("Info1") => ${myList.add("Info1")}`);
console.log(`myList.add("Info2") => ${myList.add("Info2")}`);
console.log(`myList.add("Info3") => ${myList.add("Info3")}`);
console.log(`myList.add("Info4") => ${myList.add("Info4")}`);

console.log(`myList.size() => ${myList.size()}`);
console.log(`myList.head() => ${myList.head()}`);
console.log(`myList.tail() => ${myList.tail()}`);
console.log(`myList.elementAt(2) => ${myList.elementAt(2)}`);
console.log(`myList.indexOf("Info2") => ${myList.indexOf("Info2")}`);

console.log(`myList.addAt(2, "NewInfo2") => ${myList.addAt(2, "NewInfo2")}`);
console.log(`myList.elementAt(3) => ${myList.elementAt(3)}`);

console.log(`myList.removeAt(2) => ${myList.removeAt(2)}`);
console.log(`myList.list() => ${myList.list()}`);

console.log(`myList.remove() => ${myList.remove()}`);
console.log(`myList.tail() => ${myList.tail()}`);
console.log(`myList.size() => ${myList.size()}`);
