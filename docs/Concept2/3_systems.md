---
  sidebar_position: 3
  sidebar_label: 'Systems'
  title: 'Systems'
---

### Electrical System

![](/img/concept2/Initial_System.png)<center><i>Initial electrical system component and
layout.</i></center>

The electronics system for the aircraft is made up of three rule-specified components and a number of additional, free-choice, components. Competition rule W3.1 [[BMFA, 2021]](/docs/references) states that the system will use a single 4-Max PO-3541-1070 motor, coupled with a 4M-ESC50A electronic speed controller (ESC). Power will be provided from a 3-cell Lithium Polymer battery with a 2200 mA h capacity and a voltage of 11.1V. The motor has a 33A maximum sustained current, resulting in a maximum power of 366W.

The remaining electronic components are the radio system, the possible inclusion of a separate flight controller, and the necessary servo motors to operate the various aircraft control surfaces.

### Radio Systems

The rules specify that all radio control equipment operates on the 2.4 GHz band. This is not something of concern as this is the frequency band almost all modern radio control systems operate on. The main consideration when selecting a combination of radio transmitter and receiver is the number of channels the receiver operates. Each control surface will require one channel and an additional channel for the throttle. This means a minimum of five channels are required for the basic operation of the current aircraft configuration.

Operating on five channels would only be possible if the combination of aileron and elevator control instructions is performed on the transmitter side of the radio system. Many modern transmitters allow for aircraft set-ups with various different configurations, including elevons, and so this is the preferred method of operation.

Alternatively, the aileron and elevator channels will be sent separately and combined in the aircraft either with discrete electronic components or a custom or off-the-shelf flight computer.

### Servo Motor Selection

There are four properties that need to be considered when choosing the servo motor for each operation - the torque, speed, dimensions, and weight.

The torque requirement of the motor will be be dependent on the size of the control surfaces, their maximum deflection and the speed at which the aircraft will operate. Increasing any of these parameters will increase the torque requirement of the servo motor. Additionally, the servo motor location within the body of the aircraft will define the length of the servo arm used to operate the control surface. As this arm increases in length, the torque requirement increases due to the greater moment created by the control surface on the motor.

Servo speed is measured as the minimum time taken for the servo to deflect by 60$\degree$ at maximum torque. It is important the aircraft be responsive to control inputs but it is unlikely that the limiting factor for responsiveness will be the speed of the servo motor itself.

More importantly will be the dimensions and weight of the motors. As discussed, the longer the servo arm, the higher the torque requirement - this means that the servo should be located as close to the control surface as possible. With the control surfaces located on the trailing edge of the aerofoil sections, the thickness is very narrow and so a smaller servo would be able to get closer and therefore require less torque. A smaller servo motor will usually provide less torque, and so it will be necessary to see how the trade-off between size and torque plays out in determining the servo location and size. Additionally, a larger servo motor, whilst providing more torque, will weigh more. Not only is the physical size going to cause an increase in weight, some higher torque rated servo motors use metal gears over lighter nylon gears in order to reduce the chance of shredding the teeth. With the aim of the challenge to minimise the operating weight of the aircraft, it will be important to select the lightest servo possible, whilst not risking the controllability of the aircraft in high-load conditions.
