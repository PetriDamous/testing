const googleSearch = require("./script");

// Challenge
// 1. Write a test that tests for if a search result brings back nothing.
// 2. Write a test that test for the results of searching for dog.
// 3. Write a test that test for null value.
// 4. Write a test that test for undefined value.
// 5. Write a tests that tests for only 3 top searches returned.
// 6. Group your tests.

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];

it("just a test", () => {
  googleSearch("testtest", dbMock);
});
