// This file is generated. Edit build/generate-style-code.js, then run `node build/generate-style-code.js`.
// @flow
/* eslint-disable */

const styleSpec = require('../../style-spec/reference/latest');

const {
    DataConstantProperty,
    DataDrivenProperty,
    CrossFadedProperty,
    HeatmapColorProperty
} = require('../properties');

import type Color from '../../style-spec/util/color';


export type PaintProperties = {|
    "raster-opacity": DataConstantProperty<number>,
    "raster-hue-rotate": DataConstantProperty<number>,
    "raster-brightness-min": DataConstantProperty<number>,
    "raster-brightness-max": DataConstantProperty<number>,
    "raster-saturation": DataConstantProperty<number>,
    "raster-contrast": DataConstantProperty<number>,
    "raster-fade-duration": DataConstantProperty<number>,
|};

const paint: PaintProperties = {
    "raster-opacity": new DataConstantProperty(styleSpec["paint_raster"]["raster-opacity"]),
    "raster-hue-rotate": new DataConstantProperty(styleSpec["paint_raster"]["raster-hue-rotate"]),
    "raster-brightness-min": new DataConstantProperty(styleSpec["paint_raster"]["raster-brightness-min"]),
    "raster-brightness-max": new DataConstantProperty(styleSpec["paint_raster"]["raster-brightness-max"]),
    "raster-saturation": new DataConstantProperty(styleSpec["paint_raster"]["raster-saturation"]),
    "raster-contrast": new DataConstantProperty(styleSpec["paint_raster"]["raster-contrast"]),
    "raster-fade-duration": new DataConstantProperty(styleSpec["paint_raster"]["raster-fade-duration"]),
};

module.exports = { paint };
