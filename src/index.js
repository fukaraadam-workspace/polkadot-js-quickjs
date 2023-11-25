// import "core-js";
import "core-js/stable/url/index.js";
import { ApiPromise } from '@polkadot/api';

const main = async () => {
	console.log("--Started Script--");

	// initialise via static create
	const api = await ApiPromise.create();
	console.log("--Created API--");

	// make a call to retrieve the current network head
	api.rpc.chain.subscribeNewHeads((header) => {
		console.log(`Chain is at #${header.number}`);
	});
}

// Self-invocation async function
(async () => {
	await main();
})().catch((err) => {
	console.error(err);
	throw err;
});