import Adapt from 'core/js/adapt';
import logging from 'core/js/logging';
import device from 'core/js/device';

Object.defineProperties(Adapt, {
  device: {
    get() {
      logging.deprecated('device, please use core/js/device directly');
      return device;
    }
  }
});
