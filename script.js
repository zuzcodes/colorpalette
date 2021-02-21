"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector("#picker").addEventListener("input", getSelectedValue);
  
  getSelectedValue();
}

function getSelectedValue() {
  let hexValue = document.getElementById("picker").value;
  
  const rgbObject = hexToRgb(hexValue);
  const hslObject = rgbToHsl(rgbObject.r, rgbObject.g, rgbObject.b);
  
  getHarmony(hslObject);
}

function getHarmony(hslObject) {
  const harmony = document.querySelector("#harmony").value;

  if (harmony == "analogous") {
    calcAnalogous(hslObject);
  } else if (harmony == "monochromatic") {
    calcMonochromatic(hslObject);
  } else if (harmony == "triad") {
    calcTriad(hslObject);
  } else if (harmony == "complementary") {
    calcComplementary(hslObject);
  } else if (harmony == "compound") {
    calcCompound(hslObject);
  } else if (harmony == "shades") {
    calcShades(hslObject);
  }
}

function calcAnalogous(hslObject) {
  let modifier = 15;

  let newH = hslObject.h + modifier;
  let newS = hslObject.s;
  let newL = hslObject.l;
  
  const analogous_1 = { h: newH, s: newS, l: newL };
  
  newH = newH + modifier;
  const analogous_2 = { h: newH, s: newS, l: newL };
  
  newH = newH + modifier;
  const analogous_4 = { h: newH, s: newS, l: newL };
  
  newH = newH + modifier;
  const analogous_5 = { h: newH, s: newS, l: newL };
  
  hslHarmonyToRgb(analogous_1, "1");
  hslHarmonyToRgb(analogous_2, "2");
  hslHarmonyToRgb(hslObject, "3");
  hslHarmonyToRgb(analogous_4, "4");
  hslHarmonyToRgb(analogous_5, "5");
}

function calcMonochromatic(hslObject) {
  let modifier = 15;

  let newH = hslObject.h;
  let newL = hslObject.l;
  let newS = hslObject.s;

  let decreasedS = hslObject.s - modifier;
  let increasedS = hslObject.s + modifier;
  let decreasedL = hslObject.l - modifier;
  let increasedL = hslObject.l + modifier;
  
  const monochromatic_1 = { h: newH, s: decreasedS, l: newL };
  
  const monochromatic_2 = { h: newH, s: increasedS, l: newL };
  
  const monochromatic_4 = { h: newH, s: newS, l: decreasedL };
  
  const monochromatic_5 = { h: newH, s: newS, l: increasedL };
  
  hslHarmonyToRgb(monochromatic_1, "1");
  hslHarmonyToRgb(monochromatic_2, "2");
  hslHarmonyToRgb(hslObject, "3");
  hslHarmonyToRgb(monochromatic_4, "4");
  hslHarmonyToRgb(monochromatic_5, "5");
}

function calcTriad(hslObject) {
  let modifiedHby60 = hslObject.h + 60;
  let modifiedHby120 = hslObject.h + 120;

  let newL = hslObject.l;
  let newS = hslObject.s;

  let increasedL = hslObject.l + 10;
  let decreasedL = hslObject.l - 10;

  const triad_1 = { h: modifiedHby60, s: newS, l: newL };
  
  const triad_2 = { h: modifiedHby120, s: newS, l: newL };

  const triad_4 = { h: modifiedHby60, s: newS, l: increasedL };

  const triad_5 = { h: modifiedHby120, s: newS, l: decreasedL };
  
  hslHarmonyToRgb(triad_1, "1");
  hslHarmonyToRgb(triad_2, "2");
  hslHarmonyToRgb(hslObject, "3");
  hslHarmonyToRgb(triad_4, "4");
  hslHarmonyToRgb(triad_5, "5");
}

function calcComplementary(hslObject) {
  let modifiedHby180 = hslObject.h + 180;
  let modifiedHby120 = hslObject.h + 120;

  let newL = hslObject.l;
  let newS = hslObject.s;

  let increasedL = hslObject.l + 10;
  let decreasedL = hslObject.l - 10;

  const complementary_1 = { h: modifiedHby180, s: newS, l: newL };
  
  const complementary_2 = { h: modifiedHby120, s: newS, l: newL };
 
  const complementary_4 = { h: modifiedHby180, s: newS, l: increasedL };

  const complementary_5 = { h: modifiedHby120, s: newS, l: decreasedL };
  
  hslHarmonyToRgb(complementary_1, "1");
  hslHarmonyToRgb(complementary_2, "2");
  hslHarmonyToRgb(hslObject, "3");
  hslHarmonyToRgb(complementary_4, "4");
  hslHarmonyToRgb(complementary_5, "5");
}

function calcCompound(hslObject) {
  let modifier = 15;

  let newH = hslObject.h + modifier;
  let newS = hslObject.s;
  let newL = hslObject.l;

  let modifiedHby180 = hslObject.h + 180;
  let increasedL = hslObject.l + modifier;
  
  const compound_1 = { h: newH, s: newS, l: newL };
  
  newH = newH + modifier;
  const compound_2 = { h: newH, s: newS, l: newL };
 
  const compound_4 = { h: modifiedHby180, s: newS, l: newL };

  const compound_5 = { h: modifiedHby180, s: newS, l: increasedL };

  hslHarmonyToRgb(compound_1, "1");
  hslHarmonyToRgb(compound_2, "2");
  hslHarmonyToRgb(hslObject, "3");
  hslHarmonyToRgb(compound_4, "4");
  hslHarmonyToRgb(compound_5, "5");
}

function calcShades(hslObject) {
  let modifier = 20;

  let newH = hslObject.h;
  let newS = hslObject.s;
  let newL = hslObject.l + modifier;
  
  const shades_1 = { h: newH, s: newS, l: newL };
  
  newL = newL + modifier;
  const shades_2 = { h: newH, s: newS, l: newL };
  
  newL = newL + modifier;
  const shades_4 = { h: newH, s: newS, l: newL };
  
  newL = newL + modifier;
  const shades_5 = { h: newH, s: newS, l: newL };
  
  hslHarmonyToRgb(shades_1, "1");
  hslHarmonyToRgb(shades_2, "2");
  hslHarmonyToRgb(hslObject, "3");
  hslHarmonyToRgb(shades_4, "4");
  hslHarmonyToRgb(shades_5, "5");
}

function hslHarmonyToRgb(colors, index) {
  let h = colors.h;
  let s = colors.s / 100;
  let l = colors.l / 100;

  console.log(colors.h);

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  const rgb = { r, g, b };
  console.log(r);
  showSelectedColor(rgb, index);
}

function showSelectedColor(rgb, index) {
  const cssStr = rgbToCss(rgb);
  const hex = rgbToHex(rgb);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  colorTheBox(hex, index);
  showHex(hex, index);
  showRgb(cssStr, index);
  showHsl(hsl, index);
}

function hexToRgb(hexValue) {
  const r = parseInt(hexValue.substring(1, 3), 16);
  const g = parseInt(hexValue.substring(3, 5), 16);
  const b = parseInt(hexValue.substring(5, 7), 16);
  
  return { r, g, b };
}

function rgbToCss(rgb) {
  return `(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function rgbToHex(rgb) {
  let r = rgb.r.toString(16);
  let g = rgb.g.toString(16);
  let b = rgb.b.toString(16);

  if (r.length < 2) {
    r = "0" + r;
  }
  if (g.length < 2) {
    g = "0" + g;
  }
  if (b.length < 2) {
    b = "0" + b;
  }

  return `#${r}${g}${b}`;
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  
  s *= 100;
  l *= 100;

  return { h, s, l };
}

function colorTheBox(hexValue, index) {
  document.querySelector(`#color_${index} .colorbox`).style.backgroundColor = hexValue;
}

function showHex(hexValue, index) {
  document.querySelector(`#color_${index} .hex .value`).innerHTML = hexValue.toUpperCase();

}

function showRgb(cssStr, index) {
  document.querySelector(`#color_${index} .rgb .value`).innerHTML = cssStr;
}

function showHsl(hsl, index) {
  document.querySelector(`#color_${index} .hsl .value`).innerHTML = `${hsl.h.toFixed(0)}° ${hsl.s.toFixed(0)}% ${hsl.l.toFixed(0)}%`;
}