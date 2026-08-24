import * as pkg from "mudlet-map-binary-reader";

try {
  let map;
  
  // Scenario A: The documentation is right, and it's a static method
  if (pkg.MudletMapReader && typeof pkg.MudletMapReader.read === "function") {
    map = pkg.MudletMapReader.read("map.dat");
    pkg.MudletMapReader.exportJson(map, "map.json");
  } 
  // Scenario B: The documentation is wrong, and it requires class instantiation
  else if (pkg.MudletMapReader) {
    const reader = new pkg.MudletMapReader();
    map = reader.read("map.dat");
    reader.exportJson(map, "map.json");
  } 
  // Scenario C: The exports were flattened completely
  else if (typeof pkg.read === "function") {
    map = pkg.read("map.dat");
    pkg.exportJson(map, "map.json");
  } 
  else {
    throw new Error("Could not find the 'read' function in the package exports.");
  }

  console.log("Success: map.json generated!");
  
} catch (error) {
  console.error("Failed to parse map:", error);
  process.exit(1);
}
