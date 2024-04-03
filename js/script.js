
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a trapezoid.
 */
function calculateVolume() {
  // input
  const lengthOfPyramid = parseFloat(document.getElementById('length-of-pyramid').value)
  const widthOfPyramid = parseFloat(document.getElementById('width-of-pyramid').value)
  const heightOfPyramid = parseFloat(document.getElementById('height-of-pyramid').value)

  // process
  const volumeOfPyramid = (lengthOfPyramid * widthOfPyramid * heightOfPyramid) / 3

  // output
  document.getElementById('answer').innerHTML = "The volume is: " + volumeOfPyramid.toFixed(2) + " mm³"
}
