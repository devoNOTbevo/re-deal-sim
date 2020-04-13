# React Real Estate Calculator

This is a residential real estate investment deal calculator that gives you information and calculations for a particular prospective investment.

## Objectives

This project serves also as a demonstration of a few primary objectives, from a development perspective. This applications state has a lot of dependent variables and values that change. On top of that, most React and React-based libraries/concepts are more inspired by functional programming, not object-oriented programmming.

My main goal was to find a way to

1. Leverage getters/setters, classes, and fundamental JavaScript methods in a more object-oriented fashion in order to cleanly preserve state and make calculations in a single implementation.
2. Use these patterns compatibily with the functional patterns of React and a state management library built with immutibility in mind, in this case `little-state-machine`.

## Current Todos

I'm having a hard time keeping types straight. TypeScript doesn't ensure runtime type. I need to use the `StateBuilder` more fully to leverage the setters. This will preserve type in a single function.
