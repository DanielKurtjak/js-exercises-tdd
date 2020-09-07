module.exports = (cars, colour) =>
  cars.map((c) => ({ ...c, colour: c.make === "Ford" ? colour : c.colour }));
