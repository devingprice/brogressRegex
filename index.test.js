const chai = require('chai');
const expect = chai.expect;

const fetchRedditFeed = require('./index').fetchRedditFeed;

describe("Request from Reddit -> ", () => {
  it("Return an array", () => {
    fetchRedditFeed(results => {
      expect(results).to.be.an('array');
    })
  })
  it("Expects array to have only strings", () => {
    fetchRedditFeed(results => {
      results.forEach(title => expect(title).to.be.a('string'));
    })
  })
})