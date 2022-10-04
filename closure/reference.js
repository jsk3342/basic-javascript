function makeStorage(initialValue) {
  let data = initialValue;

  return {
    setData: (nextData) => {
      data = nextData;
    },
    getData: () => data,
  };
}