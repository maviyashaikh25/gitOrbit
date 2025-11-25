const path = require("path");
const fs = require("fs").promises;

async function initRepo() {
  const repoPath = path.resolve(process.cwd(), ".mygitorbit");
  const commitsPath = path.join(repoPath, "commits");

  try {
    await fs.mkdir(repoPath, { recursive: true });
    await fs.mkdir(commitsPath, { recursive: true });
    await fs.writeFile(
      path.join(repoPath, "config.json"),
      JSON.stringify({
        bucket: process.env.S3_BUCKET,
      })
    );
    console.log("Initialized empty GitOrbit repository in", repoPath);
  } catch (error) {
    console.error("Error initializing repository:", error);
    return;
  }
}

module.exports = { initRepo };
