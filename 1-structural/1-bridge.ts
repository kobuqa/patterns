/**
 * Problem: Divides monolith in abstraction & realization
 */

interface Device {
  isEnabled: boolean;
  enable(): void;
  disable();
}

/**
 * Abstraction
 * Contains control logic but delegates real functionality to bound realization
 */

interface RemoteControl {
  turnOn(device: Device): void;
  turnOff(device: Device): void;
}

const remoteControl: RemoteControl = {
  turnOn: (device) => {
    if (!device.isEnabled) device.enable();
  },
  turnOff: (device) => {
    if (device.isEnabled) device.disable();
  },
};

/**
 * Two Realizations of interface Device
 */
const deviceOne: Device = {
  isEnabled: false,
  enable() {
    this.isEnabled = true;
  },
  disable() {
    this.isEnabled = false;
  },
};

const deviceTwo: Device = {
  isEnabled: false,
  enable() {
    this.isEnabled = true;
  },
  disable() {
    this.isEnabled = false;
  },
};

/**
 * Client Code
 * NB: Client code do not work directly with realizations. It's working via abstractions(remote controls).
 */

remoteControl.turnOn(deviceOne); // Or u can incapsulate(do not pass as params) device inside of remote to "BIND" exact remote to exact device
remoteControl.turnOn(deviceTwo);
