---
  sidebar_position: 4
  sidebar_label: 'Propeller Sizing'
  title: 'Propeller Sizing'
---

![](/img/concept2/thrust.png)<center><i>Fig 1: Static thrust produced by commercially available two-bladed propellers.</i></center>

Figure [1] shows the static thrust output for a 100% efficient two bladed propeller at various diameters and pitches. Two bladed propellers are analysed as they are the most common configuration commercially available for RC planes as well as being the most efficient setup for a given diameter compared to those with a higher number of blades. The static thrust calculated using the below equation [[Staples, 2013]](/docs/references) neglects efficiency loses of the propeller (which at optimal conditions are expected to be between 80%-85% [[Spakovszky, 2008]](/docs/references) along with the change in RPM due to the motor being under load with a propeller attached and the effects of having a velocity when flying.

$$
T=4.39\times10^{-8} \cdot RPM \frac{D^{3.5}}{\sqrt{\text{pitch}}}\left(4.23\times 10^{-4}\cdot RPM\cdot \text{pitch}-V_0\right)
$$

The maximum RPM, 11877, of the motor was calculated by using the *kv* provided by the manufacturer [[4-Max, 2021]](/docs/references) and the voltage supplied by the battery. The maximum motor power draw, 366 W, also makes use of the battery voltage along with the maximum continuous current that can be supplied to the motor. Guidance from [RC Planes (2017)](/docs/references) suggests a pitch-to-diameter ratio of between 0.5 and 1, and are shown by the curved lines in figure 1. For this competition, an ideal propeller would have a larger diameter and finer pitch to provide as much thrust as possible at slower speeds.

For a low speed aircraft, the recommend static thrust to weight ratio to allow for a self powered take off is between 0.3 and 0.4 [[Joyplanes, 2020]](/docs/references). To be conservative, a thrust to weight ratio of 0.4 was selected. Another constraint is the requirement for adequate additional thrust during cruising to allow for manoeuvrability and additional climb performance. The minimum static thrust of the propeller to do this is 1/3 of the planes weight [[RC Planes, 2017]](/docs/references).

The recommend propeller size for the given motor is 12x6, which can be used to calculate the required motor power and ensure this does not exceed the 366 W previously calculated. Alternatively, different diameter and pitch configurations that draw the same power can be considered. In the case of the competition, assuming size isn't an issue, the propeller that provides the highest thrust should be used to ensure the aircraft can take-off and that any additional thrust can be used in the event of a strong headwind or an emergency go-around. From figure 1 the propeller that provides the most thrust, given the restraints, is the 12x6 which provides an excess static thrust of approximately 15 N. In order for more accurate thrust calculations, the RPM of the motor with the selected propeller attached should be measured in the wind tunnel at the desired cruise speed. Alternatively, the thrust of the propeller can be directly measured by attaching a force gauge and running the propeller at different throttle settings.