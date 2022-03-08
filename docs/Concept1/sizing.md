---
  sidebar_position: 3
  sidebar_label: 'Sizing and Constraint Analysis'
  title: 'Sizing and Constraint Analysis'
---

To find an equation that represents the wing and power loading, a relation between the specific excess power, $P_S$, and the associated specific energy, $H_e$, can be determined. Analysis by [Brandt, 2004](/docs/references) provides the required master equation for aircraft performance across several mission stages and is defined as

$$
    \frac{T_{\text{SL}}}{W_{\text{TO}}} = \frac{\beta}{\alpha}\left\{\frac{q}{\beta}\left[\frac{C_{D_0}}{\left(W_{\text{TO}}/S\right)}+k_1\left(\frac{n\beta}{q}\right)^2\left(\frac{W_{\text{TO}}}{S}\right)\right]+\frac{1}{V}\frac{\mathrm{d}h}{\mathrm{d}t}+\frac{1}{g}\frac{\mathrm{d}V}{\mathrm{d}t}\right\}
$$
The above equation can be simplified for our case by assuming a $\beta$ value equal to $1$ due to the operation of the aircraft at a single weight throughout all mission stages. Additionally, by considering only the mission stages occurring at a constant altitude and velocity, the final two terms can be dropped. A slight modification, taken from [Sadraey, 2020](/docs/references), can also be made to return a *Power Loading* value, rather than a *Thrust Loading* value, by considering the aircraft speed and propeller efficiency. This results in the final master equation

$$
    \frac{P}{W} = \left[q\left(\frac{C_{D_0}}{\left(W/S\right)}+k_1\left(\frac{n}{q}\right)^2\left(\frac{W}{S}\right)^2\right)\right]\cdot\frac{V}{\eta\alpha}
$$

Also from [Brandt, 2004](/docs/references) is the equation for aircraft performance during take-off. This constraint is formed through a rearrangement of the take-off distance equation which considers the time required to reach take-off velocity and therefore the associated distance. Writing in terms of *Power Loading* and *Wing Loading* results in the equation shown below. Note that it considers the forces encountered at $0.7V_{TO}$ to allow for the possibly significant acceleration and deceleration variations.

$$
    \frac{P}{W} = \left[\frac{1.44}{\alpha\rho C_{L_{\text{max}}} g S_{\text{TFL}}}\left(\frac{W}{S}\right)+\frac{\left[C_{D_0}q\right]_{0.7V_{TO}}}{\left(W/S\right)}\right]\cdot\frac{0.7V_{TO}}{\eta}
$$

where $V_\mathrm{TO}$ is taken as $1.2\cdot V_\mathrm{S}$, where $V_\mathrm{S}$ is the stall speed, as specified by [Brandt, 2004](/docs/references). Similarly, aircraft performance during landing is based on the landing distance required [Brandt, 2004](/docs/references). The nature of the mission stage however removes the thrust or power term from the equation, and so the resulting calculation, shown below, is in terms of *Wing Loading* only.

$$
    \frac{W}{S} =\frac{S_{\text{LFL}}\rho g\left(\mu C_{L_{max}}+0.083 C_{D_0}\right)}{1.69}
$$

The values for the zero lift drag coefficient ($C_{D0}$), the maximum lift coefficient ($C_{L_{max}}$) and propeller efficiency ($\eta$) were set using advised ranges for small, fixed-wing UAVs by [Sadraey, 2020](/docs/references). $C_{D_0}$ was given ranges for both retractable and fixed landing gear set-ups, the intersection point of the two ranges was taken as an initial estimate. $C_{L_{max}}$ was given a range between 1.2 and 1.6; 1.2 was chosen for the sizing process to remain conservative, similarly $\eta$ was taken to be the minimum efficiency value suggested in the typical range which - 60% [[Sadraey, 2020]](/docs/references).

To determine the value of the induced drag coefficient ($k_1$) it was necessary to set a suitable aspect ratio (AR). An AR of 6.4443 was selected by analysing the trend between aspect ratio and payload for aircraft taken from the market research, and setting a desired payload of 4 kg as outlined in [BMFA, 2021](/docs/references). Some configurations were removed due to their nature differing greatly from the BMFA challenge. Such exclusions were due to factors including lack of payload or an aircraft being a commercially available as opposed to one that was designed specifically for competition. With a set aspect ratio, it was possible to use an empirical formulation for the Oswald efficiency factor ($e$) outlined in [Nita, 2012](/docs/references) which is as follows:

$$
    e=1.78(1-0.045A^{0.68})-0.64
$$

This yields $e=0.8556$, $k_1$ can then be derived directly from $e$ to result in an induced drag coefficient of \num{1.169} by making use of the following equation [[Sadraey, 2020]](/docs/references).

$$
    k_1=\frac{1}{\pi eAR}
$$

An initial estimate was made for the maximum cruise velocity in a similar way to the aspect ratio, whereby the cruise velocities of suitable aircraft from the market research were plotted against the respective payloads and the desired 4kgs payload was applied to the trend to return a cruise velocity of 15.84ms$^{-1}$. Both cruise conditions in figure 2 are found using the master equation with a load factor ($n$) of $1$, but the turn/hold condition has a differing value of $n$ that relates to the velocity and turn rate, $\dot{\psi}$, and follows [Gudmundsson, 2014](/docs/references):

$$
    \eta=\sqrt{1+\frac{\dot{\psi} V}{g}}
$$

![load factor](/img/concept1/load_factor.png)
<center><i>Fig 1: Load factor with increasing bank angle.</i></center>


To determine a suitable turn rate, the relationship between load factor and bank angle was observed as shown in figure 1 which represents the below equation, outlined by [Gudmundsson, 2014](/docs/references). The velocity of the turn was set at 70% of cruise velocity, and maximum bank angle ($\phi$) of 50 degrees was selected to remain in the region of Figure 1 where the load factor is suitably low for structural safety, however, as there will be no passengers to experience the discomfort associated with a high load factor, the value can be higher than typically found in commercial aviation. The load factor input to the turn/hold sizing equation was 1.5557 which yielded a turn rate of 71.04 degrees per second. This was deemed appropriate for an RC UAV.

$$
    n=\frac{1}{\cos\left(\phi\right)}
$$

An initial estimate for the take-off field length of 15m was made by reviewing footage of previous BMFA competition take-off runs and the standards of similar competitions such as the AIAA flight payload challenge. The landing field length was assumed to be two thirds of the take-off field length as assumed in second year lecture notes [[City, 2019]](/docs/references), and the friction coefficient of grass related to the take-off equation ($\mu$) was found to be 0.8 by [Cenek, 2016](/docs/references)]. The final consideration that was made for the take-off and landing manoeuvres was for the approximate increment in the zero lift drag coefficient due to the deflection of a flap ($\Delta C_{D0_{flap}}$), which is estimated to be around \num{0.01} for a small, radio control, fixed-wing UAV as outlined by [Sadraey, 2020](/docs/references). A complete table of parameters used in the constraint analysis can be found at the end of this page.

![constraint analysis](/img/concept1/output.png)
<center><i>Fig 2: Constraint analysis showing the required Power Loading at various Wing Loading values for different mission stages.</i></center>


Figure 2 contains the ratio of *Power* and *Wing Loading* during different flight conditions including cruise, take-off, and a turn/hold manoeuvre. The highlighted regions surrounding each flight condition outline a safety margin of 5% in the respective manoeuvre velocity. The value of the selected *Power Loading* must be greater than the constraints of the cruise at max speed and take-off, the area for which is indicated by the pass region. The *Wing Loading* is also limited by the max cruise speed and take-off as the selected design point must lie in the area bounded by them - the other constraining factor for *Wing Loading* would be the landing. The landing curve was removed from the plot as the value of *Wing Loading* for a given landing field length of 10 m was 67.5 kgm$^−2$, this would appear as a vertical line restricting the *Wing Loading* but its large value suggests it has no impact on the selection of the design point. The optimum design point would be at the intersection of the cruise curve and the take-off line, which would indicate a wing loading of 12.55 kgm$^−2$ but the power loading was taken to be 10.81 Wkg$^−1$ giving a 10% margin of error from the intersection point. This *Wing Loading* falls well within the expected values from the [market research](/docs/Market_research/research) where the average *Wing Loading* for aircraft with missions similar to that outlined in [BMFA, 2021](/docs/references) was 10.37 kgm$^−2$. This suggests that the method used to select the design point and the parameters that were set to achieve the sizing diagram were suitable and can be considered accurate.

### Constraint Analysis Parameters
|Parameter|Value|Units|
|---------|-----|----|
|**Mission Requirements**|   |   |
|  Take-Off Field Length| 15 | m |
|  Landing Field Length| 10 | m |
|  Flight Level | 150 | m |
| $\mu_\text{grass}$ | 0.8 | |
|**Aerodynamic Constants**|  |  |
|  Cruise $C_{D_0}$ | 0.03 | |
|  $C_{L_\text{max}}| 1.2 | |
|  $k_\text{cruise} | 1.169 | |
|  Aspect Ratio | 6.4443 | |
|  $\nu$ | 0.6 | |
|**Low Speed Constants** |  |  |
|  $C_{L_\text{max}\text{TO}}$ | 1.2 | |
|  $\Delta C_{D_0\text{TO}}$ | 0.01 |  |
|  $C_{L_\text{max}\text{LAND}}$ | 1.2 | |
|  $\Delta C_{D_0\text{LAND}}$ | 0.01 |  |
|**Cruise Constants** |  |  |
|  Cruise Speed | 13.46 | $ms^{-1}$ |
|  Max Speed | 15.84 | $ms^{-1}$ |
|**Hold/Turn Constants** |  |  |
|  Turn Speed  | 9.43 | $ms^{-1}$ |
|  Turn Rate  | 70.04 | $\degree s^{-1}$|
