// Overwrite console. No output
const debug = false;
if (!debug) {
  console.info = () => null;
  console.error = () => null;
}
