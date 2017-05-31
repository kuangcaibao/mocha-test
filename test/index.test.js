import { expect } from "chai"
import { add } from "../src"

describe("add test", function() {

  it("add(1,1) = 2", function() {

    expect(add(1, 1)).to.be.equal(2);
  })
})