require('./helpers.js'); // Assuming this imports necessary helpers

const sinon = require('sinon');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    
    input = document.createElement('button');
    input.id = 'button';
    document.body.appendChild(input); 
    
    
    sinon.spy(input, 'addEventListener');
  });

  afterEach(function() {
    
    input.addEventListener.restore();
  });

  it("binds an event listener to the button", () => {
  
    input.addEventListener('click', () => {});

    
    expect(input.addEventListener.calledOnce).to.be.true;
    
    expect(input.addEventListener.calledWith('click')).to.be.true;
  });
});
