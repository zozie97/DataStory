function Agent3Preload() {  
}

function Agent3() {
  // any variables you add here are for your own internal state

  // setup is run when the agent is reset
  // value is a number between 0 and 100
  this.setup = function(value, agent_type) {
    this.agent_type = agent_type;
  }

  // this happens generally on mouse over
  this.activate = function() {
  	//change grass back to ground (like its being picked)
  	if(this.agent_type == 3){
  		this.agent_type = 2;
  	}

  }

  // decide on your next move based on neighbors (but don't do it yet)
  this.step = function(neighbors, radius) {
    this.close = false;
    if(this.agent_type >= 2) {

    // rain move randomly		
      v = p5.Vector.random2D().mult(radius/12);

    //makes "rain" move straight down but no collisions between each other
     // v = p5.Vector.fromAngle(-4.7).mult(radius/10);
     
      for(var i=0; i<neighbors.length; i++) {
        var npos = neighbors[i].pos;
        var d = npos.mag();
        if ((d > 0) && (d < radius/2 + neighbors[i].radius/2)) {
          this.close = true;
          // Calculate vector pointing away from neighbor
          var move_away = npos.mult(-1);
          move_away.normalize();
          move_away.div(d*0.1);        // Weight by distance
          v.add(move_away);
        }
      }
      if(this.agent_type == 2 || this.agent_type == 3) {
        return;
      }
      else {
        return v;
      }
    }
  }

//function for grass to grow
  this.grow = function(){

    this.agent_type = 3;
  }

  this.draw = function(radius) {
    noStroke();

    //lightning simulation if collision
    if(this.close ) {
      fill(255, 255, 102);
      ellipse(0, 0, radius*2, radius*2);

    }

    //change ground to grass if collision
     if(this.close && this.agent_type == 2){

      this.grow();
    }
    //rain
    else if(this.agent_type == 4) {

      fill(143, 198, 251); 
      ellipse(0, 0, radius, radius);

    }
    //background
    else if(this.agent_type == 0) {

      fill(0);
      ellipse(0, 0, radius*2, radius*2);

    }
    //clouds
    else if(this.agent_type == 1) {

      fill(192, 192, 192);
      ellipse(0, 0, radius*2, radius*2);

    }
    //ground/dirt
    else if(this.agent_type == 2) {

      fill(102, 54, 0); //ground
      ellipse(0, radius/4, radius*4, radius*3);

    }
    //grass
    else if(this.agent_type == 3) {

      fill(0,255,0);

      push();
      beginShape();
      vertex(0, -radius*2);
      vertex(-radius, radius);
      vertex(radius, radius);
      endShape(CLOSE);
      pop();
      
    }
    
    
  
    
  }
}

