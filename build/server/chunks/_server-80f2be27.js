import { p as public_env } from './shared-server-58a5f352.js';
import fs from 'fs-extra';
import { P as ParseUptime } from './helpers-6076deb3.js';
import { makeBadge } from 'badge-maker';

const monitors = JSON.parse(fs.readFileSync(public_env.PUBLIC_KENER_FOLDER + "/monitors.json", "utf8"));
async function GET({ params, url }) {
  const { path0Day, name } = monitors.find((monitor) => monitor.tag === params.tag);
  const dayData = JSON.parse(fs.readFileSync(path0Day, "utf8"));
  let ups = 0;
  let downs = 0;
  let degradeds = 0;
  for (const timestamp in dayData) {
    const obj = dayData[timestamp];
    if (obj.status == "UP") {
      ups++;
    } else if (obj.status == "DEGRADED") {
      degradeds++;
    } else if (obj.status == "DOWN") {
      downs++;
    }
  }
  let uptime = ParseUptime(ups + degradeds, ups + degradeds + downs) + "%";
  const query = url.searchParams;
  const labelColor = query.get("labelColor") || "#333";
  const color = query.get("color") || "#0079FF";
  const style = query.get("style") || "flat";
  const format = {
    label: name,
    message: uptime,
    color,
    labelColor,
    style
  };
  const svg = makeBadge(format);
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml"
    }
  });
}

export { GET };
//# sourceMappingURL=_server-80f2be27.js.map