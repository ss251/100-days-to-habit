const array = new Array(100);
for (var i = 1; i <= 100; i++) {
  array.push(i);
}
const buttons = {};
array.forEach((number) => {
  buttons[`button${number}`] = {
    key: number,
    condition: false,
  };
});

export default buttons;
