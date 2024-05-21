"use client";

import lottieJson from "../../../public/Animation.json";
import React from "react";
import Lottie from "react-lottie-player";

export default function Animation() {
    return <Lottie loop animationData={lottieJson} play />;
}
