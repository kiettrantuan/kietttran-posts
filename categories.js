const fs = require("node:fs/promises");

/** TODO:
 * script update date on files
 * script create files w frontmatter fields
 */

async function main() {
  const cs = {
    lastUpdated: Date.now(),
    data: [
      { id: "test", title: "Test", description: "This is Category Test" },
      {
        id: "others",
        title: "Others",
        description: "This is Category Others",
      },
      { id: "test2", title: "Test2", description: "This is Category Test2" },
    ],
  };

  try {
    await fs.writeFile("./categories.json", JSON.stringify(cs));
    console.log("SUCCESS !");
  } catch (error) {
    console.error(error);
  }
}

main();
