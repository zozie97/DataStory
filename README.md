## PS4 MDDN 242 2017

### Data Story

I am trying to create a simulation of rain which shows the narrative of grass growing because of the rain. The grey agents which are clouds do not move. The blue agents represent rain and they are supposed to move and collide. The brown agents are to represent the ground, i want them to be stationary like the clouds. the green agents are representing the grass, i want them to slowly move upwards and create new blades of grass as the rain hits. I also want the collisions only to work in the rain, the collisions representing lightening. I have been able to make the ground not move anymore and have no collisions.

I have gotten the rain to keep colliding with each other and causing little "bolts" of lightning. when the rain hits the brown ground new blades of grass appear. If the user uses their mouse and hovers over any of the blades of grass they will be "picked" and it will change back to the ground again.

I wasn’t able to get the lightning simulation working properly so to show it i had the rain particles collide and then light up yellow as if it was a little spark / bolt of lightning. I did some research about lightning as it was another idea i had for a simulation. 

This final simulation is very different to my original sketch. Originally i wanted to make a simulation narrative that showed the data of the genres of the top songs over the past few years. In the end i decided that i didn’t like how that simulation would end up like so decided to use the simulation of rain in a thunderstorm growing plants.

Overall i like how this simulation has turned out, I found a few bugs earlier in my code which i was then able to fix to finally get my simulation working how i wanted it to. The one problem i had was that the rain particles would move in any direction, which included moving upwards and against gravity. I tried fixing it by setting the angle instead of using a random angle, this worked well as it moved straight downwards but it didn’t create the collisions and in the end didn’t work how i wanted it to. So in the end i decided to keep using the random angle. It means that there are a few rain particles that end up as outliers and in the clouds.



### Agents:

Agent 0 is the space around the clouds where there is no rain forming, it is black so that it blends in with the background.

Agent 1 is the grey clouds, I have made them static. This is so they “set the scene” and don’t have collisions or move around.

Agent 2 is the brown ground. If the rain collides with the ground it changes into a blade of grass which is agent 3. This is done in the this.grow function.

Agent 3 is the triangular blades of grass, if the mouse is hovered over the grass it changes back to the brown ground (agent 2) as if the grass had been “picked”.

Agent 4 is the blue rain. The rain moves randomly and collides with other rain drops. When the rain particles collide they cause the “lightning”, this is down in the this.close function.



### Research:

Heavier, negatively charged particles sink to the bottom of the cloud. When the positive and negative charges grow large enough, a giant spark - lightning - occurs between the two charges within the cloud. This is like a static electricity sparks you see, but much bigger.

www.planet-science.com/categories/over-11s/natural.../06/what-causes-lightning.aspx

