const core = require('@actions/core');
const github = require('@actions/github');

try {
	// `who-to-greet` input defined in action metadata file
	checkForVersionChange();
	const nameToGreet = core.getInput('who-to-greet');
	console.log(`Hello ${nameToGreet}!`);
	const time = new Date().toTimeString();
	core.setOutput('time', time);
	// Get the JSON webhook payload for the event that triggered the workflow
	const payload = JSON.stringify(github.context.payload, undefined, 2);
	console.log(`The event payload: ${payload}`);
} catch (error) {
	core.setFailed(error.message);
}

// CREATING CLASSLIST.JSON
async function checkForVersionChange() {
	const projectVersions = JSON.parse(fs.readFileSync('./bumpfile.json'));
	console.log(elvisCSS);

	projectVersions.forEach((package) => {
		console.log(package);
		package.version.forEach((ver) => {
			if (ver == true) {
				console.log(ver);
			}
		});
	});

	const classlist = getAllClasses(elvisCSS);

	fs.writeFileSync(
		'.internal/classlist.json',
		JSON.stringify(classlist, null, '\t'),
		'utf8'
	);
	return true;
}
