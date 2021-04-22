export default (Length, Generator) => [...Array(Length)].map((el, index) => ({
  id: index,
  ...Generator(),
}));
