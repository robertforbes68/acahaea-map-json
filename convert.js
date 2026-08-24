import { MudletMapReader } from "mudlet-map-binary-reader";

// Read the binary map and export it directly to JSON
const map = MudletMapReader.read("map.dat");
MudletMapReader.exportJson(map, "map.json");
