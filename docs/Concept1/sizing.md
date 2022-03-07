---
  sidebar_position: 3
  sidebar_label: 'Sizing and Constraint Analysis'
  title: 'Sizing and Constraint Analysis'
---

To find an equation that represents the wing and power loading, a relation between the specific excess power, $P_S$, and the associated specific energy, $H_e$, can be determined. Analysis by \cite{introduction-aeronautics}, outlined in Appendix \ref{sec:equation}, provides the required master equation for aircraft performance across several mission stages and is defined as

$$
    \frac{T_{\text{SL}}}{W_{\text{TO}}} = \frac{\beta}{\alpha}\left\{\frac{q}{\beta}\left[\frac{C_{D_0}}{\left(W_{\text{TO}}/S\right)}+k_1\left(\frac{n\beta}{q}\right)^2\left(\frac{W_{\text{TO}}}{S}\right)\right]+\frac{1}{V}\frac{\mathrm{d}h}{\mathrm{d}t}+\frac{1}{g}\frac{\mathrm{d}V}{\mathrm{d}t}\right\}
$$
Equation \eqref{eq:master1} can be simplified for our case by assuming a $\beta$ value equal to $1$ due to the operation of the aircraft at a single weight throughout all mission stages. Additionally, by considering only the mission stages occurring at a constant altitude and velocity, the final two terms can be dropped. A slight modification, taken from \cite{sadraey}, can also be made to return a \emph{Power Loading} value, rather than a \emph{Thrust Loading} value, by considering the aircraft speed and propeller efficiency. This results in the final master equation

$$
    \frac{P}{W} = \left[q\left(\frac{C_{D_0}}{\left(W/S\right)}+k_1\left(\frac{n}{q}\right)^2\left(\frac{W}{S}\right)^2\right)\right]\cdot\frac{V}{\eta\alpha}
$$

Also from \cite{introduction-aeronautics} is the equation for aircraft performance during take-off. This constraint is formed through a rearrangement of the take-off distance equation which considers the time required to reach take-off velocity and therefore the associated distance. Writing in terms of \emph{Power Loading} and \emph{Wing Loading} results in equation \eqref{eq:takeoff} shown below. Note that equation \eqref{eq:takeoff} considers the forces encountered at $0.7V_{TO}$ to allow for the possibly significant acceleration and deceleration variations.

$$
    \frac{P}{W} = \left[\frac{1.44}{\alpha\rho C_{L_{\text{max}}} g S_{\text{TFL}}}\left(\frac{W}{S}\right)+\frac{\left[C_{D_0}q\right]_{0.7V_{TO}}}{\left(W/S\right)}\right]\cdot\frac{0.7V_{TO}}{\eta}
$$

where $V_\mathrm{TO}$ is taken as $1.2\cdot V_\mathrm{S}$, where $V_\mathrm{S}$ is the stall speed, as specified by \cite{introduction-aeronautics}. Similarly, aircraft performance during landing is based on the landing distance required \parencite{introduction-aeronautics}. The nature of the mission stage however removes the thrust or power term from the equation, and so the resulting calculation \eqref{eq:landing} is in terms of \emph{Wing Loading} only.

$$
    \frac{W}{S} =\frac{S_{\text{LFL}}\rho g\left(\mu C_{L_{max}}+0.083 C_{D_0}\right)}{1.69}
$$

The values for the zero lift drag coefficient ($C_{D0}$), the maximum lift coefficient ($C_{L_{max}}$) and propeller efficiency ($\eta$) were set using advised ranges for small, fixed-wing UAVs by \cite{sadraey}. $C_{D_0}$ was given ranges for both retractable and fixed landing gear set-ups, the intersection point of the two ranges was taken as an initial estimate. $C_{L_{max}}$ was given a range between \num{1.2} and \num{1.6}; \num{1.2} was chosen for the sizing process to remain conservative, similarly $\eta$ was taken to be the minimum efficiency value suggested in the typical range which - 60\% \parencite{sadraey}.

To determine the value of the induced drag coefficient ($k_1$) it was necessary to set a suitable aspect ratio (AR). An AR of \num{6.4443} was selected by analysing the trend between aspect ratio and payload for aircraft taken from the market research, and setting a desired payload of \SI{4}{\kg} as outlined in \cite{BMFA}. Some configurations were removed due to their nature differing greatly from the BMFA challenge. Such exclusions were due to factors including lack of payload or an aircraft being a commercially available as opposed to one that was designed specifically for competition. With a set aspect ratio, it was possible to use an empirical formulation for the Oswald efficiency factor ($e$) outlined in \cite{oswald} which is as follows:

$$
    e=1.78(1-0.045A^{0.68})-0.64
$$

This yields $e=0.8556$, $k_1$ can then be derived directly from $e$ to result in an induced drag coefficient of \num{1.169} by making use of the following equation \eqref{eq:k} \parencite{sadraey}.

$$
    k_1=\frac{1}{\pi eAR}
$$

An initial estimate was made for the maximum cruise velocity in a similar way to the aspect ratio, whereby the cruise velocities of suitable aircraft from the market research were plotted against the respective payloads and the desired \SI{4}{\kg} payload was applied to the trend to return a cruise velocity of \SI{15.84}{\metre\per\second}. Both cruise conditions in figure \ref{fig:sizing} are found using \eqref{eq:master} with a load factor ($n$) of $1$, but the turn/hold condition has a differing value of $n$ that relates to the velocity and turn rate, $\dot{\psi}$, and follows \parencite{gud-aircraft}:

$$
    \eta=\sqrt{1+\frac{\dot{\psi} V}{g}}
$$

![load factor](/img/concept1/load_factor.png)
<center><i>Fig 1: Load factor with increasing bank angle.</i></center>


To determine a suitable turn rate, the relationship between load factor and bank angle was observed as shown in figure \ref{fig:load_bank} which represents the below equation, outlined by \cite{gud-aircraft}. The velocity of the turn was set at \SI{70}{\percent} of cruise velocity, and maximum bank angle ($\phi$) of \ang{50} was selected to remain in the region of Figure \ref{fig:load_bank} where the load factor is suitably low for structural safety, however, as there will be no passengers to experience the discomfort associated with a high load factor, the value can be higher than typically found in commercial aviation. The load factor input to the turn/hold sizing equation was \num{1.5557} which yielded a turn rate of \SI{71.04}{\degree\per\second}. This was deemed appropriate for an RC UAV.

$$
    n=\frac{1}{\cos\left(\phi\right)}
$$

An initial estimate for the take-off field length of \SI{15}{\metre} was made by reviewing footage of previous BMFA competition take-off runs and the standards of similar competitions such as the AIAA flight payload challenge. The landing field length was assumed to be two thirds of the take-off field length as assumed in \cite{fm7}, and the friction coefficient of grass related to the take-off equation ($\mu$) was found to be \num{0.8} by \cite{grass}. The final consideration that was made for the take-off and landing manoeuvres was for the approximate increment in the zero lift drag coefficient due to the deflection of a flap ($\Delta C_{D0_{flap}}$), which is estimated to be around \num{0.01} for a small, radio control, fixed-wing UAV as outlined by \cite{sadraey}. A complete table of parameters used in the constraint analysis can be found in appendix \ref{sec:parameters}.

![constraint analysis](/img/concept1/output.png)
<center><i>Fig 2: Constraint analysis showing the required Power Loading at various Wing Loading values for different mission stages.</i></center>


Figure 2 contains the ratio of \emph{Power} and \emph{Wing Loading} during different flight conditions including cruise, take-off, and a turn/hold manoeuvre. The highlighted regions surrounding each flight condition outline a safety margin of \SI{5}{\percent} in the respective manoeuvre velocity. The value of the selected \emph{Power Loading} must be greater than the constraints of the cruise at max speed and take-off, the area for which is indicated by the pass region. The \emph{Wing Loading} is also limited by the max cruise speed and take-off as the selected design point must lie in the area bounded by them - the other constraining factor for \emph{Wing Loading} would be the landing. The landing curve was removed from the plot as the value of \emph{Wing Loading} for a given landing field length of \SI{10}{\metre} was \SI{67.5}{\kg\per\metre\squared}, this would appear as a vertical line restricting the \emph{Wing Loading} but its large value suggests it has no impact on the selection of the design point. The optimum design point would be at the intersection of the cruise curve and the take-off line, which would indicate a wing loading of \SI{12.55}{\kg\per\metre\squared} but the power loading was taken to be \SI{10.81}{\watt\per\kg} giving a \SI{10}{\percent} margin of error from the intersection point. This \emph{Wing Loading} falls well within the expected values from the market research \parencite{market} where the average \emph{Wing Loading} for aircraft with missions similar to that outlined in \cite{BMFA} was \SI{10.37}{\kg\per\metre\squared}. This suggests that the method used to select the design point and the parameters that were set to achieve the sizing diagram were suitable and can be considered accurate. 