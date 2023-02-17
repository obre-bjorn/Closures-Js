function senses() {

    function breath() {
        console.log()
    }
}


const modelMixin = Object.assign({
    attrs: {},
    set(name, value) {
        this.attrs[name] = value;

        this.emit('change', {
            prop: name,
            value: value
        });
    },

    get(name) {
        return this.attrs[name];
    }
}, Events.prototype);


const george = { name: 'george' };
const model = Object.assign(george, modelMixin);

model.on('change', data => console.log(data));

model.set('name', 'Sam');
/*
{
  prop: 'name',
  value: 'Sam'
}
*/