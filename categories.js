const fs = require("node:fs/promises");

/** TODO:
 * script update date on files
 * script create files w frontmatter fields
 */

const cs = {
  test: {
    title: "Test",
    description: "This is Category Test",
  },
  others: {
    title: "Others",
    description: "This is Category Others",
  },
};

async function main() {
  try {
    await fs.writeFile("./categories.json", JSON.stringify(cs));
    console.log("SUCCESS !");
  } catch (error) {
    console.error(error);
  }
}

main();
