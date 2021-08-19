const it = {
  _data: [1, 2, 3, 4, 5, 6],
  [Symbol.iterator]: function () {
    return this;
  },
  step: 0,
  next() {
    if (this.step === this._data.length){
        const value = this._data[this.step]
        this.step = 0
        return {
            done: true
        }
    } else {
        const value = this._data[this.step]
        this.step += 1
        return {
            value,
            done: false
        }
    }
  },
};

const it2 = {
    _data: [1, 2, 3, 4, 5, 6],
    [Symbol.iterator]: function* () {
        for (x of this._data){
            yield x
        }
    }
  };

for (x of it) {
  console.log(x);
}

for (x of it2) {
    console.log(x);
  }
