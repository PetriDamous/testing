const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", () => {
  expect.assertions(2);

  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it.only("getPeople returns count and results", () => {
  mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );

  return swapi.getPeople(mockFetch).then((data) => {});
});
