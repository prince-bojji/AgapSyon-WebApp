import React from 'react';
import EarthquakeGuides from '/src/Guides/EarthquakeGuides';
import FireSafetyGuides from '/src/Guides/FireSafetyGuides';
import LandslideGuides from '/src/Guides/LandslideGuides';
import TsunamiGuides from '/src/Guides/TsunamiGuides';
import TyphoonGuides from '/src/Guides/TyphoonGuides';
import VolcanicEruptionGuides from '/src/Guides/VolcanicEruptionGuides';

function Guides() {
  return (
    <>
      <TyphoonGuides />
      <TsunamiGuides/>
      <LandslideGuides />
      <EarthquakeGuides />
      <FireSafetyGuides />
      <VolcanicEruptionGuides />
    </>
  )
}

export default Guides;