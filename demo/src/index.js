import React, { Component } from "react";
import { render } from "react-dom";

import {
  TriangleArrow,
  Mudgun,
  BlastFurnace,
  DryFurnace,
  EafFurnace,
  MainRunnerSlice,
  TemperatureMeasure,
  WorkSite,
  CameraIr,
  MainRunnerTemperature,
  TiltRunner,
  VibratingCast,
  Tamping,
  DenseGuning,
  MainRunnerCasting,
  MainRunnerTop,
} from "../../src";
import PrecastWorkout from "../../src/components/industry/precast-workout/PrecastWorkout";
import FineGuning from "../../src/components/industry/fine-guning/FineGuning";

class Demo extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "blue";
  }
  render() {
    return (
      <div>
        <h1>onino-icons Demo</h1>
        <TriangleArrow />
        <Mudgun />
        <EafFurnace />
        <BlastFurnace />
        <DryFurnace />
        <MainRunnerSlice />
        <MainRunnerSlice type="wear" />
        <MainRunnerSlice type="security" />
        <MainRunnerSlice type="bottom" />
        <TemperatureMeasure />
        <WorkSite />
        <CameraIr />
        <MainRunnerTemperature />
        <TiltRunner />
        <PrecastWorkout />
        <VibratingCast />
        <Tamping />
        <DenseGuning />
        <FineGuning />
        <MainRunnerCasting />
        <MainRunnerTop />
        <MainRunnerTop type="impact" />
        <MainRunnerTop type="poutre" />
        <MainRunnerTop type="after-skimmer" />
        <MainRunnerTop type="before-skimmer" />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
