function Agent2() {
  // any variables you add here are for your own internal state
  this.power = 0.0;
  this.next_power = 0.0;

  // setup is run when the agent is reset
  // value is a number between 0 and 100
  this.setup = function(value, agent_type) {
    this.power = value;
    this.agent_type = agent_type;
    this.next_power = this.power;
  }

  // this happens generally on mouse over
  this.activate = function() {
    this.power = 100.0;
  }

  // decide on your next move based on neighbors (but don't do it yet)
  this.step = function(neighbors) {
    var surrounding_power = 0;
    var death_limit1 = 49.9999;
    var death_limit2 = 50.0001;
    for(var i=0; i<neighbors.length; i++) {
      surrounding_power = surrounding_power + neighbors[i].agent.power;
    }
    var avg_power = surrounding_power / neighbors.length;
    if(this.agent_type == 0) {
      if(avg_power < death_limit1) {
        this.next_power = 0;
      }
      else {
        this.next_power = 100;
      }
    }
    else {
      if(avg_power < death_limit2) {
        this.next_power = 0;
      }
      else {
        this.next_power = 100;
      }
    }
    if(this.next_power > 100) {
      this.next_power = 100;
    }
  }

  // execute the next move you decided on
  this.update_state = function() {
    this.power = this.next_power;
  }

  this.draw = function(size) {
    var half_size = size/2;
    var low = color(0, 0, 0);
    var high = color(255, 255, 255);
    var c = lerpColor(low, high, this.power / 100.0);
    stroke(0);
    fill(c);
    ellipse(half_size, half_size, size, size);
  }
}